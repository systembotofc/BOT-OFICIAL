import axios from 'axios';
const { proto, generateWAMessageFromContent, prepareWAMessageMedia, generateWAMessageContent, getDevice } = (await import("@whiskeysockets/baileys")).default;

let handler = async (message, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(message.chat, `*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n👋🏻𝐇𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨\n🍿¿𝐐𝐮é 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐛𝐮𝐬𝐜𝐚𝐫 𝐡𝐨𝐲 𝐞𝐧 𝐓𝐢𝐤𝐓𝐨𝐤?`, message);

    async function createVideoMessage(url) {
        const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: conn.waUploadToServer });
        return videoMessage;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    try {
        await message.react('⏳');  // Assuming '⏳' is a wait emoji
        conn.reply(message.chat, '🚩 *Descargando su video...*', message);

        let results = [];
        let { data: response } = await axios.get(`https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=${text}`);
        let searchResults = response.data;
        shuffleArray(searchResults);
        let selectedResults = searchResults.splice(0, 7);

        for (let result of selectedResults) {
            results.push({
                body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
                footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: 'Resultados' }),
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: '' + result.title,
                    hasMediaAttachment: true,
                    videoMessage: await createVideoMessage(result.nowm)
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
            });
        }

        const responseMessage = generateWAMessageFromContent(message.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.create({ text: `🚩 Resultado de: ${text}` }),
                        footer: proto.Message.InteractiveMessage.Footer.create({ text: '🔎 TikTok - Busquedas' }),
                        header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...results] })
                    })
                }
            }
        }, { quoted: message });

        await message.react('✅');  // Assuming '✅' is a done emoji
        await conn.relayMessage(message.chat, responseMessage.message, { messageId: responseMessage.key.id });
    } catch {
        await message.react('✖️');  // Assuming '✖️' is an error emoji
    }
};

handler.help = ['tiktoksearch <txt>'];
handler.tags = ['buscador'];
handler.command = ['tiktoksearch', 'tiktoks'];

export default handler;
