import ws from 'ws';

function hi() {
    console.log('Hello World!');
}

let handler = async (_0x37fc51, { conn: _0x23d3f7, usedPrefix: _0x4121c8, text: _0x37c826, args: _0x3d5277, command: _0x42372e }) => {
    let _0x32263f = new Map();
    
    global.conn.users.forEach(_0x42066c => {
        if (_0x42066c.ws && _0x42066c.ws.readyState !== ws.OPEN) {
            _0x32263f.set(_0x42066c.ws.jid, _0x42066c);
        }
    });
    
    let _0x14ef63 = [..._0x32263f.values()];
    let _0x299ab3 = _0x14ef63.length;
    let _0x5c2f3a = Object.keys(global.db.users).length;
    let _0x43a405 = process.uptime() * 1000;
    let _0x1f2a25 = clockString(_0x43a405);
    let _0x195fc2 = _0x23d3f7.getName(_0x37fc51.sender);
    let _0x25c72d = 'es';
    let _0x458805 = new Date(Date.now() + 3600000);
    let _0x5d4ebe = _0x458805.toLocaleTimeString(_0x25c72d, { 'hour': '2-digit', 'minute': '2-digit', 'second': '2-digit' });
    let _0x55599c = _0x23d3f7.getName() === global.conn.user.jid ? 'Activo' : 'Inactivo';
    
    global.conn.reply = {
        'key': {
            'fromMe': false,
            'participant': 'status@broadcast',
            'remoteJid': 'status@broadcast'
        },
        'message': {
            'contactMessage': {
                'displayName': '\nɢ ᴇ ɴ ᴇ ꜱ ɪ ꜱ  ʙ ᴏ ᴛ  ᴘ ʀ ᴏ',
                'vcard': 'BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:' + _0x195fc2 + '\nitem1.TEL;waid=' + _0x37fc51.sender.split('@')[0] + ':' + _0x37fc51.sender.split('@')[0] + '@s.whatsapp.net'
            }
        }
    };
    
    let _0xb7f06f = Object.keys(global.db.users).length;
    let _0x51c973 = Object.values(global.db.users).filter(_0x357e06 => _0x357e06.registered === true).length;
    
    _0x37fc51.reply('🤍');
    
    let _0x598a1e = '';
    let _0x3d6c76 = '';
    _0x3d6c76 += 'Menu\n';
    _0x3d6c76 += '`~ꦿ͜͡͜͡𝐍𝐎𝐌𝐁𝐑𝐄:` ' + _0x299ab3 + '\n';
    _0x3d6c76 += '`~ꦿ͜͡͜͡𝐕𝐄𝐑𝐒𝐈𝐎𝐍:` ' + '1.0' + '\n';
    _0x3d6c76 += _0x55599c + '\n';
    _0x3d6c76 += '`~ꦿ͜͡͜͡𝐏𝐑𝐄𝐅𝐈𝐉𝐎:` ' + _0x4121c8 + '  \n';
    _0x3d6c76 += '`~ꦿ͜͡͜͡𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒:` ' + _0x5c2f3a + '\n';
    _0x3d6c76 += '`~ꦿ͜͡͜͡𝐔𝐒𝐔𝐀𝐑𝐈𝐎𝐒:` ' + _0x51c973 + '\n';
    _0x3d6c76 += '`~ꦿ͜͡͜͡𝐓𝐈𝐌𝐄:` ' + _0x1f2a25 + '\n';
    
    let _0x5c9e79 = [];
    
    _0x5c9e79.push({
        'title': 'Menu',
        'highlight_label': 'Choose',
        'rows': [
            { 'header': 'Verification', 'title': '', 'description': 'Automatically verify', 'id': 'verify' },
            { 'header': 'Complete Menu 🤍', 'title': '', 'description': 'Complete menu description', 'id': 'fullmenu' },
            { 'header': 'Main Menu', 'title': '', 'description': 'Menu description', 'id': _0x4121c8 + 'mainmenu' },
            { 'header': 'Games Menu', 'title': '', 'description': 'Game menu description', 'id': _0x4121c8 + 'gamesmenu' },
            { 'header': 'Downloads Menu', 'title': '', 'description': 'Downloads menu description', 'id': _0x4121c8 + 'downloads' },
            { 'header': 'NSFW Menu', 'title': '', 'description': 'NSFW menu description', 'id': _0x4121c8 + 'nsfw' },
            { 'header': 'AI Menu', 'title': '', 'description': 'AI menu description', 'id': _0x4121c8 + 'aimenu' }
        ]
    });
    
    let _0x47cd94 = 'https://i.ibb.co/nsbttwG/file.jpg';
    let _0x2858e1 = 'https://i.ibb.co/YyCJCnP/file.jpg';
    let _0x290562 = 'https://i.ibb.co/YyCJCnP/file.jpg';
    
    await _0x23d3f7.sendMessage(_0x37fc51.chat, _0x598a1e, _0x3d6c76, 'list', [_0x47cd94, _0x2858e1, _0x290562], _0x5c9e79);
};

handler.help = ['menu8', 'menú8'];
export default handler;

function clockString(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return [hours, minutes, seconds].map(v => v.toString().padStart(2, '0')).join(':');
}
