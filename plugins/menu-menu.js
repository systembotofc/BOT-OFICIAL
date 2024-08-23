import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {
  'main': 'INFO',
  'game': 'JUEGOS',
  'serbot': 'SUB BOTS',
  'rpg': 'ECONOMÍA',
  'rg': 'REGISTRO',
  'downloader': 'DESCARGAS',
  'marker': 'LOGO - MAKER',
  'nable': 'ACTIVADORES',
  'group': 'GRUPOS',
  'search': 'BUSCADOR',
  'img': 'IMÁGENES',
  'tools': 'HERRAMIENTAS',
  'fun': 'DIVERCIÓN',
  'audio': 'EFECTO DE AUDIOS', 
  'sticker': 'STICKERS',
  'nsfw': 'NSFW',
  'owner': 'CREADOR',
  'advanced': 'AVANZADO',
}

const defaultMenu = {
  before: ``.trimStart(),
  header: '',
  body: '',
  footer: '',
  after: '',
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, star, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        star: plugin.star,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : ``) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%isstar/g, menu.star ? '˄' : '')
                .replace(/%isPremium/g, menu.premium ? '˄' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      taguser: '@' + m.sender.split("@s.whatsapp.net")[0],
      wasp: '@0',
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      version: _package.version,
      npmdesc: _package.description,
      npmmain: _package.main,
      author: _package.author.name,
      license: _package.license,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      level, star, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    let imageUrl = 'https://ibb.co/yY4g6hK' // URL de la imagen
    
    let listSections = []    
    listSections.push({
      title: '',
      rows: [
        { header: "📚ＭＥＮＵ ＣＯＭＰＬＥＴＯ", title: "", id: `.allmenu`, description: `𝙼𝚞𝚎𝚜𝚝𝚛𝚎𝚖𝚎 𝚝𝚘𝚍𝚘𝚜 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜 𝚍𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝\n` }, 
        { header: "SudBot", title: "", id: `.serbot --code`, description: `𝚀𝚞𝚒𝚎𝚛𝚘 𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚒𝚛𝚖𝚎 𝚎𝚗 𝚂𝚞𝚍𝙱𝚘𝚝 𝚍𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝\n` },
        { header: "🚀ＶＥＬＯＣＩＤＡＤ", title: "", id: `.ping`, description: `𝚅𝚎𝚕𝚘𝚌𝚒𝚍𝚨𝚍 𝚍𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝\n` },
        { header: "⏰ＵＰＴＩＭＥ", title: "", id: `.estado`, description: `𝚃𝚒𝚎𝚖𝚙𝚘 𝚊𝚌𝚝𝚒𝚟𝚘 𝚍𝚎 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝\n` },
        { header: "🌐ＩＤＩＯＭＡ", title: "", id: `.idioma`, description: `𝙴𝚕𝚎𝚐𝚒𝚛 𝚒𝚍𝚒𝚘𝚖𝚎\n` },
        { header: "✅ＳＴＡＦＦ ＭＩＺＵＫＩ | ＢＯＴ", title: "", id: `.creador`, description: `𝚂𝚝𝚊𝚏𝚏 𝙼𝚒𝚣𝚞𝚔𝚒 | 𝙱𝚘𝚝` }
      ]
    })
    
    // Enviar la imagen y el menú interactivo
    await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: text.trim(), mentions: [m.sender] })
    await conn.sendList(m.chat, '', null, `𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝐒𝐘𝐒𝐓𝐄𝐌 𝐗`, listSections, { mentions: [m.sender] })

  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error.', m)
    throw e
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú'] 
handler.register = true 
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
