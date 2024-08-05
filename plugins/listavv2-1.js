let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'texto'},  { quoted: m })
}
handler.help = ['lista']
handler.tags = ['lista']
handler.command = /^lista$/i
export default handler
