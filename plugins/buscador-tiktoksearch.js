import axios from 'axios'
const { proto, generateWAMessageFromContent, generateWAMessageContent } = (await import("@whiskeysockets/baileys")).default

// Definir las variables que faltan
const rwait = '⏳'; // Emoji para indicar espera
const done = '✅'; // Emoji para indicar que la operación se ha completado
const packname = 'TuBot'; // Nombre del paquete (puedes ajustar esto)
const wm = 'TuBot'; // Marca de agua del mensaje
const icons = 'https://example.com/icon.jpg'; // URL de la imagen para el thumbnail
const channel = 'https://example.com'; // URL del canal o fuente
const textbot = 'Tu búsqueda en TikTok'; // Texto de pie de página para el mensaje

let handler = async (message, { conn, text, usedPrefix, command }) => {
  if (!text) return conn.reply(message.chat, '*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n👋🏻𝐇𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 @${userId}\n🍿¿𝐐𝐮é 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐛𝐮𝐬𝐜𝐚𝐫 𝐡𝐨𝐲 𝐞𝐧 𝐓𝐢𝐤𝐓𝐨𝐤?', message)

  async function createVideoMessage(url) {
    const { videoMessage } = await generateWAMessageContent({ video: { url } }, { upload: conn.waUploadToServer })
    return videoMessage
  }

  async function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  try {
    await message.react(rwait)
    conn.reply(message.chat, '🚩 *Descargando Su Video...*', message, {
      contextInfo: { 
        externalAdReply: {
          mediaUrl: null,
          mediaType: 1,
          showAdAttribution: true,
          title: packname,
          body: wm,
          previewType: 0,
          thumbnail: icons,
          sourceUrl: channel
        }
      }
    })

    let results = []
    let { data: response } = await axios.get('https://apis-starlights-team.koyeb.app/starlight/tiktoksearch?text=' + encodeURIComponent(text))
    let searchResults = response.data

    shuffleArray(searchResults)
    let selectedResults = searchResults.splice(0, 7)
    for (let result of selectedResults) {
      results.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({ text: null }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({ text: textbot }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: '' + result.title,
          hasMediaAttachment: true,
          videoMessage: await createVideoMessage(result.nowm)
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({ buttons: [] })
      })
    }

    const responseMessage = generateWAMessageFromContent(message.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({ text: '🚩 Resultado de: ' + text }),
            footer: proto.Message.InteractiveMessage.Footer.create({ text: '🔎 TikTok - Busquedas' }),
            header: proto.Message.InteractiveMessage.Header.create({ hasMediaAttachment: false }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({ cards: [...results] })
          })
        }
      }
    }, { quoted: message })

    await message.react(done)
    await conn.relayMessage(message.chat, responseMessage.message, { messageId: responseMessage.key.id })

  } catch (error) {
    await conn.reply(message.chat, error.toString(), message)
  }
}

handler.help = ['tiktoksearch <txt>']
handler.estrellas = 1
handler.register = true
handler.tags = ['buscador']
handler.command = ['tiktoksearch', 'tiktoks']
export default handler
