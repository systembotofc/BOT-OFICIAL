let handler = async (m, { conn, usedPrefix, command, paypal }) => {
    let img = await (await fetch(`https://tse4.mm.bing.net/th?id=OIG3.cLOJAQj8neUVXa2OXGEU&pid=ImgGn`)).buffer();
    let menu = 'texto';
    await conn.sendMessage(m.chat, {
        text: menu,
        contextInfo: { 
            mentionedJid: [m.sender],
            forwardingScore: 9, 
            externalAdReply: {
                title: 'ＭＩＺＵＫＩ | ＢＯＴ\nᴅᴇᴠᴇʟᴏᴘᴇʀ: ʙᴇɴᴊᴀᴍɪɴ',
                thumbnail: img,
                sourceUrl: 'https://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
    await m.react('🇵🇪');
}

handler.help = ['ejemplo🇵🇪'];
handler.tags = ['ejemplo🇵🇪'];
handler.command = /^ejemplo🇵🇪$/i;
export default handler;
