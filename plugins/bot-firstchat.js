import moment from 'moment-timezone'

export async function before(m) {

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 86400000) return
await conn.reply(m.chat, `𝐒𝐀𝐋𝐔𝐃𝐎𝐒 𝐔𝐒𝐔𝐀𝐑𝐈𝐎 ${nombre}

𝘌𝘚𝘊𝘙𝘐𝘉𝘌 .𝘮𝘦𝘯𝘶 𝘗𝘈𝘙𝘈 𝘝𝘐𝘚𝘜𝘈𝘓𝘐𝘡𝘈𝘙 𝘔𝘐𝘚 𝘊𝘖𝘔𝘈𝘕𝘋𝘖𝘚.

𝘗𝘖𝘙𝘍𝘈𝘝𝘖𝘙 𝘜𝘕𝘌𝘛𝘌 𝘈𝘓 𝘊𝘈𝘕𝘈𝘓 𝘖𝘍𝘐𝘊𝘐𝘈𝘓 𝘋𝘌 𝘔𝘐𝘡𝘜𝘒𝘐 | 𝘉𝘖𝘛 𝘗𝘈𝘙𝘈 𝘘𝘜𝘌 𝘗𝘜𝘌𝘋𝘈𝘚 𝘔𝘈𝘕𝘛𝘌𝘕𝘌𝘙𝘛𝘌 𝘐𝘕𝘍𝘖𝘙𝘔𝘈𝘋𝘖 𝘚𝘖𝘉𝘙𝘌 𝘛𝘖𝘋𝘈𝘚 𝘓𝘈𝘚 𝘈𝘊𝘛𝘜𝘈𝘓𝘐𝘡𝘈𝘊𝘐𝘖𝘕𝘌𝘚.
https://www.whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u
*${nn}*`, m)


user.pc = new Date * 1
}
