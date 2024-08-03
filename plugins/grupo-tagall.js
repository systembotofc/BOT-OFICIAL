const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
const oi = `\`📩𝙼𝚎𝚗𝚜𝚊𝚓𝚎:\` ${pesan}\n\`\`👥𝚄𝚜𝚞𝚊𝚛𝚒𝚘𝚜::\` _*${participants.length}*_`;
  let teks = `\n\n ${oi}\n\n\`╭━━〔  *ＭＩＺＵＫＩ | ＢＯＴ*  〕━━╮\`\n`;
  for (const mem of participants) {
    teks += `┣・🏴 @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰━━━━━━━━━━━━━━━━━━━━━━━━━╯\n\n> 𝙲𝙰𝙽𝙰𝙻 𝙾𝙵𝙸𝙲𝙸𝙰𝙻\nhttps://whatsapp.com/channel/0029VajUEsCB4hdNTg04zh1u`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
