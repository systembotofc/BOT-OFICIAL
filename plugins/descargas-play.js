import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
   // if (!lister.includes(feature)) return conn.reply(m.chat, `*🚩 Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`,  m, fake,)
	  if (command == "play" || command == 'play2') {
            if (!text) return conn.reply(m.chat, `*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒆𝒓𝒐 𝒂𝒄𝒐𝒎𝒑𝒂ñ𝒂𝒅𝒐 𝒅𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 + 𝒆𝒍 𝒂𝒖𝒕𝒐𝒓.\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐: .𝒑𝒍𝒂𝒚 𝑫𝒆𝒗𝒖𝒆𝒍𝒗𝒆𝒎𝒆 𝒂 𝒎𝒊 𝒄𝒉𝒊𝒄𝒂 - 𝑯𝒐𝒎𝒃𝒓𝒆𝒔𝑮`,  m)
    await m.react('🕓')
    var res = await yts(text)
    var vid = res.videos[0]
    var q = '128kbps'
const texto1 = `*\`╭━〔 ＳＹＳＴＥＭ Ｘ 〕━╮\`*\n┃➔ *🏴𝑻𝒊𝒕𝒖𝒍𝒐:* ${vid.title}\n┃➔ *👤𝑨𝒖𝒕𝒐𝒓:* ${vid.author.name}\n┃➔ *⏰𝑫𝒖𝒓𝒂𝒄𝒊𝒐𝒏:* ${vid.timestamp}\n┃➔ *👀𝑽𝒊𝒔𝒊𝒕𝒂𝒔:* ${vid.views}\n┃➔ *🗓𝑷𝒖𝒃𝒍𝒊𝒄𝒂𝒅𝒐:* ${vid.ago}\n┃➔ *❗𝑼𝒓𝒍:* ${'https://youtu.be/' + vid.videoId}\n╰━━━━━━━━━━━━╯`.trim()
		
await conn.sendButton(m.chat, texto1, wm, res.videos[0].thumbnail, [
	['🎧𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐀𝐔𝐃𝐈𝐎', `${usedPrefix}mp3 ${text}`],
	['🎥𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐑 𝐕𝐈𝐃𝐄𝐎', `${usedPrefix}mp4 ${text}`]
  ], null, [['𝐂𝐀𝐍𝐀𝐋 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗', `${md}`]], m)
	  }
  
            if (command == "mp3") {
	 if (!text) return conn.reply(m.chat, `*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒆𝒓𝒐 𝒂𝒄𝒐𝒎𝒑𝒂ñ𝒂𝒅𝒐 𝒅𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 + 𝒆𝒍 𝒂𝒖𝒕𝒐𝒓.\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐: .𝒑𝒍𝒂𝒚 𝑫𝒆𝒗𝒖𝒆𝒍𝒗𝒆𝒎𝒆 𝒂 𝒎𝒊 𝒄𝒉𝒊𝒄𝒂 - 𝑯𝒐𝒎𝒃𝒓𝒆𝒔𝑮`, m)
		
       try {
    const res = await yts(text)
    const vid = res.videos[0]
    const q = '128kbps'
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*\n\n` + error, m).then(_ => m.react('✖️'))
        console.error(error)
    }}
    }
        
        if (command == "mp4") {
            if (!text) return conn.reply(m.chat, `*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒆𝒓𝒐 𝒂𝒄𝒐𝒎𝒑𝒂ñ𝒂𝒅𝒐 𝒅𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 + 𝒆𝒍 𝒂𝒖𝒕𝒐𝒓.\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐: .𝒑𝒍𝒂𝒚 𝑫𝒆𝒗𝒖𝒆𝒍𝒗𝒆𝒎𝒆 𝒂 𝒎𝒊 𝒄𝒉𝒊𝒄𝒂 - 𝑯𝒐𝒎𝒃𝒓𝒆𝒔𝑮`, m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	const texto1 = `*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒆𝒓𝒐 𝒂𝒄𝒐𝒎𝒑𝒂ñ𝒂𝒅𝒐 𝒅𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 + 𝒆𝒍 𝒂𝒖𝒕𝒐𝒓.\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐: .𝒑𝒍𝒂𝒚 𝑫𝒆𝒗𝒖𝒆𝒍𝒗𝒆𝒎𝒆 𝒂 𝒎𝒊 𝒄𝒉𝒊𝒄𝒂 - 𝑯𝒐𝒎𝒃𝒓𝒆𝒔𝑮`
	/*
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
       */
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n*ㅤ ㅤ⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻ㅤㅤ*\n*\`00:21 ━━━●───── ${vid.timestamp}\`*`, m)
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m).then(_ => m.react('✖️'))
       
       await conn.sendFile(m.chat, dl_url, 'yt.jpg', `${vid.title}\n*ㅤ ㅤ⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻ㅤㅤ*\n*\`00:21 ━━━●───── ${vid.timestamp}\`*`, m)
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`, m).then(_ => m.react('✖️'))
        console.error(error)
    }}}
    
    if (command == "mp3doc") {
            if (!inputs) return conn.reply(m.chat, `*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒆𝒓𝒐 𝒂𝒄𝒐𝒎𝒑𝒂ñ𝒂𝒅𝒐 𝒅𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 + 𝒆𝒍 𝒂𝒖𝒕𝒐𝒓.\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐: .𝒑𝒍𝒂𝒚 𝑫𝒆𝒗𝒖𝒆𝒍𝒗𝒆𝒎𝒆 𝒂 𝒎𝒊 𝒄𝒉𝒊𝒄𝒂 - 𝑯𝒐𝒎𝒃𝒓𝒆𝒔𝑮`,  m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
	const texto1 = `*\`╭━〔 ＳＹＳＴＥＭ Ｘ 〕━╮\`*\n┃➔ *🏴𝑻𝒊𝒕𝒖𝒍𝒐:* ${vid.title}\n┃➔ *👤𝑨𝒖𝒕𝒐𝒓:* ${vid.author.name}\n┃➔ *⏰𝑫𝒖𝒓𝒂𝒄𝒊𝒐𝒏:* ${vid.timestamp}\n┃➔ *👀𝑽𝒊𝒔𝒊𝒕𝒂𝒔:* ${vid.views}\n┃➔ *🗓𝑷𝒖𝒃𝒍𝒊𝒄𝒂𝒅𝒐:* ${vid.ago}\n┃➔ *❗𝑼𝒓𝒍:* ${'https://youtu.be/' + vid.videoId}\n╰━━━━━━━━━━━━╯`
	   /* 
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
	    */
       try {
       let yt = await fg.yta(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp3(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 100
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, mimetype: "audio/mpeg", fileName: vid.title + '.mp3', quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*`,  m).then(_ => m.react('✖️'))
        console.error(error)
    }}}
    
    if (command == "mp4doc") {
            if (!inputs) return conn.reply(m.chat, `*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒑𝒆𝒓𝒐 𝒂𝒄𝒐𝒎𝒑𝒂ñ𝒂𝒅𝒐 𝒅𝒆𝒍 𝒕𝒊𝒕𝒖𝒍𝒐 + 𝒆𝒍 𝒂𝒖𝒕𝒐𝒓.\n𝑬𝒋𝒆𝒎𝒑𝒍𝒐: .𝒑𝒍𝒂𝒚 𝑫𝒆𝒗𝒖𝒆𝒍𝒗𝒆𝒎𝒆 𝒂 𝒎𝒊 𝒄𝒉𝒊𝒄𝒂 - 𝑯𝒐𝒎𝒃𝒓𝒆𝒔𝑮`, m)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '360p'
	const texto1 = `*\`╭━〔 ＳＹＳＴＥＭ Ｘ  〕━╮\`*\n┃➔ *🏴𝑻𝒊𝒕𝒖𝒍𝒐:* ${vid.title}\n┃➔ *👤𝑨𝒖𝒕𝒐𝒓:* ${vid.author.name}\n┃➔ *⏰𝑫𝒖𝒓𝒂𝒄𝒊𝒐𝒏:* ${vid.timestamp}\n┃➔ *👀𝑽𝒊𝒔𝒊𝒕𝒂𝒔:* ${vid.views}\n┃➔ *🗓𝑷𝒖𝒃𝒍𝒊𝒄𝒂𝒅𝒐:* ${vid.ago}\n┃➔ *❗𝑼𝒓𝒍:* ${'https://youtu.be/' + vid.videoId}\n╰━━━━━━━━━━━━╯`
	    /*
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [
	['Creador', `${usedPrefix}creador`],
	['Menu', `${usedPrefix}menu`]
  ], null, [['Canal', `${md}`]], m)
  */
       
       try {
       let yt = await fg.ytv(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n*ㅤ ㅤ⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻ㅤㅤ*\n*\`00:21 ━━━━●────── ${vid.timestamp}\`*`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch {
       try {
       let yt = await fg.ytmp4(vid.url, q)
       let { title, dl_url, size } = yt
       let limit = 300
       
if (size.split('MB')[0] >= limit) return conn.reply(m.chat,`El archivo pesa mas de ${limit} MB, se canceló la Descarga.`,  m).then(_ => m.react('✖️'))
       
       await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `${vid.title}\n*ㅤ ㅤ⇆ㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤ↻ㅤㅤ*\n*\`00:21 ━━━━●────── ${vid.timestamp}\`*`, mimetype: 'video/mp4', fileName: `${vid.title}` + `.mp4`, quoted: m, contextInfo: {
'forwardingScore': 200,
'isForwarded': true,
externalAdReply:{
showAdAttribution: false,
title: `${vid.title}`,
body: `${vid.author.name}`,
mediaType: 2, 
sourceUrl: `${vid.url}`,
thumbnail: await (await fetch(vid.thumbnail)).buffer()}}}, { quoted: m })
       await m.react('✅')
       } catch (error) {
        await conn.reply(m.chat,`*☓ Ocurrió un error inesperado*\n\n` + error, m).then(_ => m.react('✖️'))
        console.error(error)
}}}
}
handler.help = ["play"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['play', 'play2', 'mp3', 'mp4', 'mp3doc', 'mp4doc']
handler.register = true 
handler.star = 2
export default handler
