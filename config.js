// - - THANKS TO - -
// • UBDINKENXER
// •  〔⃟⃙🇦🇱𝐔𝚩͛᷍ 𝐃𝚰͢𝚴𝐊͢𝚵𝚴̽͢ 𝐒𝚵𝚪⃟⃙🇦🇱
// • GOD
// • ubflakzxer
// • ubjackser
// • ublukaxer
// • ubsachuxer
// • ubtomxer
// • ubprajiser
// • ubenzoser
// • ubgokuser
// • ubvichuxer
// • ubkenzo
// • ubxanxer
// • ubkiranxer
// • 𝐔𝚩 𝐃𝚰𝚴𝐊𝚵𝚴 𝐒𝚵𝚪

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'



/*==============USER-INFO==============*/
global.owner = [
  ['919744108970', 'ꜱʟᴀꜱʜᴇʀ ᴏꜰꜰɪᴄɪᴀʟ', true], 
  ['919744108970', ' 〔⃟⃙🇦🇱𝐔𝚩͛᷍ 𝐃𝚰͢𝚴𝐊͢𝚵𝚴̽͢ 𝐒𝚵𝚪⃟⃙🇦🇱', true] 
] 

global.mods = ['919605612983','919744108970'] //Don't replace this,If you want to add someone add any dev
global.prems = ['919744108970','919605612983']
global.nomorbot = '9605612983' //Change it to your own
global.nomorown = '9744108970','919605612983' //Change it to your own
global.namebot = ' 𝐃𝚰𝚴𝐊𝚵𝚴 𝚳𝐃' //change it to your own
global.nameown = ' 〔⃟⃙🇦🇱𝐔𝚩͛᷍ 𝐃𝚰͢𝚴𝐊͢𝚵𝚴̽͢ 𝐒𝚵𝚪⃟⃙🇦🇱' // change it to your own

//*============= ==============*/



/*============== CHATGPT ==============*/
global.openAiapi = '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'   // Get you Api-key from 'https://platform.openai.com/account/api-keys'
global.org = 'org-hE49SehUQEPAGJAy20yr4Om9'   // Get you Org-Key from 'https://platform.openai.com/account/org-settings' 
//*============= ==============*/



/*============= TAIMU =============*/
let wibh = moment.tz('Asia/Dhaka').format('HH')
    let wibm = moment.tz('Asia/Dhaka').format('mm')
    let wibs = moment.tz('Asia/Dhaka').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// if you don't have it, type "-" or leave it alone so that there are credits :v
global.sig = 'https://www.instagram.com/dinkan_ser?igsh=MzNlNGNkZWQ4Mg==' //Link Instagrammu
global.sgh = 'https://www.instagram.com/dinkan_ser?igsh=MzNlNGNkZWQ4Mg==' //Link Githubmu
global.sgc = 'https://chat.whatsapp.com/DcGABEejUwOG8YcgGOcizF'
global.sdc = '-' //Fill it out using the Discord link, if there is one, just leave it
global.snh = 'https://chat.whatsapp.com/DcGABEejUwOG8YcgGOcizF' //Hmmm, This is up to you to fill in :v

/*============== PAYMENT ==============*/
global.pdana = '9744108970' //Nomor Danamu
global.ppulsa = '9744108970' //Nomor SimCard Yang Kamu Pake
global.psaweria = 'null' //Link Saweriamu Kalo Nggada Ketik - aja




global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.lolkeysapi = ['BrunoSobrino']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.lolkey = 'apikeymu'
global.xkey = 'APIKEYMU'
global.cricket_URL = 'https://m.cricbuzz.com/live-cricket-scores/56782/pak-vs-nz-new-zealand-tour-of-pakistan-2023' //paste new live match url here
/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  violetics : 'https://violetics.pw',
  zenz: 'https://zenzapi.xyz',
  males : 'https://malesin.xyz',
  fgmods: 'https://api-fgmods.ddns.net',
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'APIKEYMU',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Apikeymu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zenzapi.xyz': '01ABEB1E11',
  'https://violetics.pw': 'beta',
  'https://api-fgmods.ddns.net': 'fg-dylux'
}
// The word APIKEY is filled with your own apikey, by buying it on the website

/*============== WATERMARK ==============*/
global.wm = '「  𝐃𝚰𝚴𝐊𝚵𝚴 𝚳𝐃 」' //Main Watermark
global.wm2 = ' 〔⃟⃙🇦🇱𝐔𝚩͛᷍ 𝐃𝚰͢𝚴𝐊͢𝚵𝚴̽͢ 𝐒𝚵𝚪⃟⃙🇦🇱'
global.wm3 = ' 𝐃𝚰𝚴𝐊𝚵𝚴 𝚳𝐃'
global.footerTXT = ` 𝐃𝚰𝚴𝐊𝚵𝚴 𝚳𝐃 • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ\nowner: 919744108970,919605612983`
global.fig = `Follow me on instagram:https://www.instagram.com/dinkan_ser?igsh=MzNlNGNkZWQ4Mg==`
global.botdate = `🛑 Date: ${week} ${date}`
global.bottime = `🧑‍💻 Time : ${wktuwib}`
global.titlebot = '🎋  𝐃𝚰𝚴𝐊𝚵𝚴 𝚳𝐃'
global.author = global.wm
global.logo = 'https://i.imgur.com/dTSqzBB.jpeg'



/*============== LOGO ==============*/
global.thumb = 'https://i.imgur.com/dTSqzBB.jpeg' //Main Thumbnail
global.thumb2 = 'https://i.imgur.com/dTSqzBB.jpeg'
global.thumbbc = 'https://i.imgur.com/dTSqzBB.jpeg' //For broadcast
global.giflogo = 'https://i.imgur.com/dTSqzBB.jpeg'
global.thumblvlup = 'https://i.imgur.com/dTSqzBB.jpeg'
global.hwaifu = ['https://i.imgur.com/dTSqzBB.jpeg']

/*============== FlamingText ===========*/
global.flaaa = [
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=', 
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='] 

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▱▱▱▱▱▱▱」Loading...```'
global.eror = '```404 error```'
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '+880 1853 262586'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
global.djson = 'application/json'

global.thumbdoc = 'https://i.imgur.com/ljsdRkG.jpeg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '5644' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊🇧🇩' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅━━━═┅═❏ *Dᴀꜱʜʙᴏᴀʀᴅ* ❏═┅═━━━┅'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊🔖'                            //body
global.cmenuf = '┗━═┅═━––––––\n'                //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '┊'                              //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = 'dinkan_ser'
global.stickauth = `「  𝐃𝚰𝚴𝐊𝚵𝚴 𝚳𝐃 」`
global.packname = ' 𝐃𝚰𝚴𝐊𝚵𝚴 𝚳𝐃'
global.packname2 = ' 𝐃𝚰𝚴𝐊𝚵𝚴 𝚳𝐃'

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
