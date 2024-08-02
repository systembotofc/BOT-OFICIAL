let handler = async (m, { conn, text, participants}) => {
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
if (!m.quoted) return m.reply(`🏴 𝘙𝘦𝘴𝘱𝘰𝘯𝘥𝘦 𝘢 𝘶𝘯 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 𝘤𝘰𝘯 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 [.𝘵𝘢𝘨]\n\n> ᴄᴀɴᴀʟ ᴏꜰᴄ|ᴀɴʏᴀ ʙᴏᴛ\nhttps://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u`)
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: users } )
}
handler.help = ['tag']
handler.tags = ['group']
handler.command = /^(totag|tag)$/i
handler.admin = true
handler.group = true

export default handler
