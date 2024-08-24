import MessageType from '@whiskeysockets/baileys'
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'

let handler = async (m, { conn, text, participants }) => {
  // Verifica si el mensaje contiene el texto 'notify'
  if (m.text.toLowerCase().startsWith('notify ')) {
    let users = participants.map(u => conn.decodeJid(u.id))
    let args = m.text.split(' ').slice(1).join(' ')
    let q = m.quoted ? m.quoted : m
    let c = m.quoted ? m.quoted : m.msg
    
    const msg = conn.cMod(m.chat,
      generateWAMessageFromContent(m.chat, {
        [c.toJSON ? q.mtype : 'extendedTextMessage']: c.toJSON ? c.toJSON() : {
          text: c || args
        }
      }, {
        userJid: conn.user.id
      }),
      args || q.text, conn.user.jid, { mentions: users }
    )
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
  }
}

handler.help = ['notify <mensaje>']
handler.tags = ['grupo']
handler.command = ['notify'] 
handler.group = true
handler.admin = true

export default handler
