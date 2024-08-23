let handler = async (m, { conn, text, participants}) => {
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
if (!m.quoted) return m.reply(`*\`╭━❰❰ ＳＹＳＴＥＭ Ｘ ❱❱━╮\`*\n> 𝑽𝒖𝒆𝒍𝒗𝒆 𝒂 𝒖𝒔𝒂𝒓 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒊𝒆𝒏𝒅𝒐 𝒂𝒍 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒒𝒖𝒆 𝒅𝒆𝒔𝒆𝒂𝒔 𝒏𝒐𝒕𝒊𝒇𝒊𝒄𝒂𝒓.`)
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
handler.help = ['tag']
handler.tags = ['group']
handler.command = /^(totag|tag)$/i
handler.admin = true
handler.group = true

export default handler
