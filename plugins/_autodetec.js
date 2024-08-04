let WAMessageStubType = (await import(global.baileys)).default;
export async function before(m, {conn}) {
  if (!m.messageStubType || !m.isGroup) return;
  let usuario = `@${m.sender.split`@`[0]}`;
  let fkontak = {
    key: {participants: "0@s.whatsapp.net", remoteJid: "status@broadcast", fromMe: false, id: "Halo"},
    message: {
      contactMessage: {
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split("@")[0]}:${
          m.sender.split("@")[0]
        }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
    participant: "0@s.whatsapp.net",
  };
  if (m.messageStubType == 21) {
    await this.sendMessage(
      m.chat,
      {text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ *🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤:* ${usuario}\n┃➔ *✅𝘿𝙚𝙩𝙚𝙘𝙩:* Cambió el nombre de este grupo.\n┃➔ *❗𝙉𝙪𝙚𝙫𝙤:* ${m.messageStubParameters[0]}\n╰━━━━━━━━━━━━━━━╯`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 22) {
    await this.sendMessage(m.chat, {text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ *🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤:* ${usuario}\n┃➔ *✅𝘿𝙚𝙩𝙚𝙘𝙩:* Cambió la foto de este grupo.\n╰━━━━━━━━━━━━━━━╯`, mentions: [m.sender]}, {quoted: fkontak});
  } else if (m.messageStubType == 24) {
    await this.sendMessage(
      m.chat,
      {text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ *🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤:* ${usuario}\n┃➔ *✅𝘿𝙚𝙩𝙚𝙘𝙩:* Cambió la descripción de este grupo.\n┃➔ *❗𝙉𝙪𝙚𝙫𝙤:* ${m.messageStubParameters[0]}\n╰━━━━━━━━━━━━━━━╯`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 25) {
    await this.sendMessage(
      m.chat,
      {
        text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ *✅𝘿𝙚𝙩𝙚𝙘𝙩:* Ahora ${m.messageStubParameters[0] == "on" ? "solo los administradores" : "todos los miembros"} de este grupo, pueden editar la información de este grupo.\n╰━━━━━━━━━━━━━━━╯`,
        mentions: [m.sender],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 26) {
    await this.sendMessage(
      m.chat,
      {
        text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ 🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${usuario}\n┃➔ ✅𝘿𝙚𝙩𝙚𝙘𝙩: Grupo ${m.messageStubParameters[0] == "on" ? "Cerrado 🔒" : "Abierto 🔓"}\n┃➔ ❗𝘼𝙫𝙞𝙨𝙤: ${m.messageStubParameters[0] == "on" ? "Solo los administradores pueden escribir" : "_. Ya pueden escribir todos" } en este grupo.\n╰━━━━━━━━━━━━━━━╯`,
        mentions: [m.sender],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 29) {
    await this.sendMessage(
      m.chat,
      {
        text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ 🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${usuario}\n┃➔ ✅𝘿𝙚𝙩𝙚𝙘𝙩: Ascendió a un usuario con los poderes de administrador.\n┃➔ ❗𝘼𝙫𝙞𝙨𝙤: @${m.messageStubParameters[0].split`@`[0]} Se convirtió en admin de este grupo.\n╰━━━━━━━━━━━━━━━╯`,
        mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 30) {
    await this.sendMessage(
      m.chat,
      {
        text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ 🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${usuario}\n┃➔ ✅𝘿𝙚𝙩𝙚𝙘𝙩: Descendió a un usuario con los poderes de administrador.\n┃➔ ❗𝘼𝙫𝙞𝙨𝙤: @${m.messageStubParameters[0].split`@`[0]} Se convirtió en miembro de este grupo.\n╰━━━━━━━━━━━━━━━╯`,
        mentions: [`${m.sender}`, `${m.messageStubParameters[0]}`],
      },
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 72) {
    await this.sendMessage(
      m.chat,
      {text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ 🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${usuario}\n┃➔ ✅𝘿𝙚𝙩𝙚𝙘𝙩: Cambió la duración de los mensajes de este grupo.\n┃➔ ❗𝙉𝙪𝙚𝙫𝙤: @${m.messageStubParameters[0]}\n╰━━━━━━━━━━━━━━━╯`, mentions: [m.sender]},
      {quoted: fkontak}
    );
  } else if (m.messageStubType == 123) {
    await this.sendMessage(m.chat, {text: `*\`╭━〔  𝐌𝐈𝐙𝐔𝐊𝐈 | 𝐁𝐎𝐓  〕━╮\`*\n┃➔ 🗣𝙐𝙨𝙪𝙖𝙧𝙞𝙤: ${usuario}\n┃➔ ✅𝘿𝙚𝙩𝙚𝙘𝙩: Desactivó los mensajes temporales de este grupo.\n╰━━━━━━━━━━━━━━━╯`, mentions: [m.sender]}, {quoted: fkontak});
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType],
    });
  }
}
