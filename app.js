function shuffle(a) {
  for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}
var api = require('genius-api');
var genius = new api('xs8kQ1eoFa0SKQFwpzeSoi_C59uCDdBbbVyjEIfP6N1HbHllBRYmgrQVZhOFEect');
const Lyricist = require('lyricist/node6')
const lyricist = new Lyricist('xs8kQ1eoFa0SKQFwpzeSoi_C59uCDdBbbVyjEIfP6N1HbHllBRYmgrQVZhOFEect');
//version 2.0
const prefix = "!"
//module grabbing
const Discord = require("discord.js");
const bot = new Discord.Client({ autoReconnect: true, max_message_cache: 0 });
const fs = module.require("fs");
var getImageUrls = require('get-image-urls');
var Canvas = require('./node_modules/canvas-prebuilt/canvas');
var path = require('path')
const translate = require('google-translate-api');
const instagramPosts = require('instagram-posts');
var google = require('google')
var lotHour = 7
var del = []
var currentvote = []
var votes = []

var myFunctions = require('./functions.js')
var fairlyaudit = '351929198895562753'
var fairlycankick = false
var voted = []
var duel = -1
var googleTTS = require('google-tts-api');
const imgConvert = require('image-convert');
var grab_text = require('grab-text');
var ypi = require('youtube-playlist-info');
const Cleverbot = require('cleverbot');
var asked = []
let clev = new Cleverbot({
  key: 'CC3h8v-nfn9rWsEGb2RrNa-HQ2A' // Can be obtained at http://cleverbot.com/api
});

function randomNum(n1, n2, noFloor) {
  if (noFloor) {
    return (Math.random() * (n2 - n1) + n1)
  }
  return ~~(Math.random() * (n2 - n1 + 1) + n1)
}

function wrap(text) {
  return ('```' + text + '```')
}
var scrabbler = require('scrabbler');
var xyu = []
var myFile = "stickied.txt"
var msg1 = "msg1.txt"
var venting = "venting.txt"
var ventchan = fs.readFileSync(venting, 'utf8')
var leftmsg = fs.readFileSync(msg1, 'utf8')
console.log(leftmsg)
var tw = []
var dms = []
var rtn = false
var stopit = false
var low = false
var bTime = 0
const snekfetch = require('snekfetch');

String.prototype.startsWithP = function (string) {
  if (this.startsWith(prefix + string)) return true
  return false
}

//sqlite stuff
const sql = require("sqlite");
// sql.open("./score.sqlite");
sql.open("./daily.sqlite");
//role ids
const BF = '319620325224480768'
const VSL = '319620276692451328'
const RAB = '319620417486716940'
const ST = '319620372305543168'
const NPI = '319632312654495754'
const TO = '278225702455738368'
//Auto Role
const AutoRole = '269660541738418176'
//Channel where bot send deleted messages to
const DeleteChannel = '324297236999569409'
const SuggestChannel = '324934515350831114'
var muted = [];
const allowedCommands = ['278190769959993344', '307697558917087234', '324297236999569409', '269657133673349120']
var Playing = 'with Nakpin'
let cookie = JSON.parse(fs.readFileSync("./cookies.json", "utf8"));
let base = JSON.parse(fs.readFileSync("./badges.json", "utf8"))
let xpdelay = JSON.parse(fs.readFileSync("./roasted.json", "utf8"))
let lottery = JSON.parse(fs.readFileSync("./lottery.json", "utf8"))
var tags = JSON.parse(fs.readFileSync("./tags.json", "utf8"))
var variables = JSON.parse(fs.readFileSync("./variables.json", "utf8"))
var dailynum = JSON.parse(fs.readFileSync("./daily.json", "utf8"))
var boss = JSON.parse(fs.readFileSync("./boss.json", "utf8"))
lotHour = parseInt(variables.time)
console.log(lotHour)
var morse = require('morse-node').create("ITU");
//
function removeCommand(text) {
  var array = text.split(' ')
  array.shift()
  var toReturn = array.join(' ')
  return toReturn
}
//
function padStr(i) {
  return (i < 10) ? "0" + i : "" + i;
}
//

function setGame(game1) {
  bot.user.setPresence({ game: { name: game1, type: 0 } })
}




//TWITTER BOT STUFF
var Twit = require('twit')

var T = new Twit({ consumer_key: 'Tykmy07GESDntOd5UYGdQOmU4', consumer_secret: 'Gvb4m5GXfRdV4s6bFkGBseI4KLF6ralqFr80Z1MYxiu1zmMvFw', access_token: '882435797370241024-1YRzDKzsxbxqECBpqOfxs5RKjPOhy5c', access_token_secret: '2zSzuM4ibKT7Ql7iR2erZYT1sRx2z2bKoFsWV3m4OU2el', timeout_ms: 60 * 1000 })

/////////////////CHAT STUFF///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

bot.on('ready', () => {
  var guilds = bot.guilds.array()
  var guild = guilds[0]
  setGame('Bot turned on!!')
  setTimeout(() => {
    console.log('dun it')
    var members = guild.members.array()
    setGame('with ' + members.length + ' members')
  }, 10000)
  console.log(`Logged in as ${bot.user.tag}!`);
  bTime = Date.now()
  var role = guild.roles.get('283272728084086784')
  role.setPermissions([])
  var channel = guild.channels.get(fairlyaudit)
  var channels = guild.channels.array()
  guild.channels.get('324297236999569409').send('```Bot restarted!```')
  channel.setPosition(channels.length - 8)
});

bot.on("warn", warn => {
  console.log("WARN: " + warn)
})
bot.on("message", message => {

  //number of minutes to delay messages
  var delay = 1
  //amount of xp to give by default
  var xptogive = 2

  // if (message.author.id === "110860104030507008") return;
  if (message.author.bot) return;
  if (message.channel.type !== "text") return;
  if (message.channel.id === "288097987446571018") return;
  if (message.content === message.content.toUpperCase()) return;
  var msg = message


  if (!xpdelay[msg.author.id]) {
    xpdelay[msg.author.id] = {}
    fs.writeFile("./roasted.json", JSON.stringify(xpdelay), (err) => {
      if (err) console.error(err)
    })
  }
  if (!xpdelay[msg.author.id].time) xpdelay[msg.author.id].time = 0
  if (xpdelay[msg.author.id].time > Date.now()) {
    if (!xpdelay[msg.author.id].num) xpdelay[msg.author.id].num = 0
    xpdelay[msg.author.id].num++
    fs.writeFile("./roasted.json", JSON.stringify(xpdelay), (err) => {
      if (err) console.error(err)
    })
  }
  if (xpdelay[msg.author.id].time <= Date.now()) {
    if (xpdelay[msg.author.id].num) {
      xptogive = ~~(Math.random() * Math.sqrt(xpdelay[msg.author.id].num) * 2)
    }
    if (xptogive > 6) xptogive = 6
    if (xptogive < 2) xptogive = 2
    console.log(xptogive)
    if (Math.random() > 0.5) {
      myFunctions.credits(msg, 2, false, false, false, false, true)
    }
    sql.get(`SELECT * FROM scores2 WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) {
        sql.run("INSERT INTO scores2 (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      } else {
        let curLevel = Math.floor(0.2 * Math.sqrt(row.points + 1));
        if (curLevel > row.level) {
          row.level = curLevel;
          sql.run(`UPDATE scores2 SET points = ${row.points + xptogive}, level = ${row.level} WHERE userId = ${message.author.id}`);
          //TODO switch case this jank
          var lum = "```http\nLEVEL UP: You are now Level "
          var lum2 = "!```"
          if (message.author.id === '310892671310757888') {
            lum = "```http\nCongruntulations! You have a custom level up message! Thou art now Level "
          }
          if (message.author.id === '236274686470651914') {
            lum = "```http\nLevel "
            lum2 = "! Great job! Now get off the internet and get a life!```"
          }
          if (message.author.id === '137189839836545024') {
            lum = "hey mate i leveled u up k fam. u r now level "
            lum2 = "!"
          }
          if (message.author.id === '291492803547103232') {
            lum = 'good job, you made it to level '
            lum2 = '. aka - you wasted your life even more! :D now go back to doing something productive'
          }
          if (message.author.id === '210946756257644545') {
            lum = 'Congratulations! Your score has just evolved to level '
            lum2 = '! Now get a life!'
          }
          if (message.author.id === '277581652484554752') {
            lum = 'BOOM!, YA LEVELED UP TO '
            lum2 = ' DUMMY!'
          }
          if (message.author.id === '207129652345438211') {
            lum = 'oh yeah. x2 is actually active <:tylerscream:331910425576996864> Level '
            lum2 = '. He gettin ready hack you all <:TylerBlobHeathens:357722287585230852>'
          }
          if (message.author.id === '307639827300352001') {
            lum = 'is becoming more Pro. '
            lum2 = ''
          }
          if (message.author.id === '334080340740276225') {
            lum = 'YA BOI SPOON 🥄 LEVELED UP TO LEVEL '
            lum2 = ' BOI'
          }
          if (message.author.id === '321869481221816321') {
            lum = ''
            lum2 = 'Hiya Hatbox. Do you want to float too? Well you\'re one step closer.'
          }
          if (message.author.id === '281984133721227264') {
            lum = "```bang bang bang you now have "
            lum2 = " frens```"
          }
          if (message.author.id === '110860104030507008') {
            lum = 'dang u just got to level '
            lum2 = '! thats good, very nice. i am very proud of u. ur probably like. the first person to get to that level. probably not really. yeah probabl;y not. anyway, i hope ur doin\' good.. i hope that you are having a good day. thank you for always being here for me, whenever im not feelin\' well you send a funny pm with some meme or something. anyway. ill see ya around? later..'
          }
          if (message.author.id === '251632757715894273') {
            lum = 'You\'ve been promoted to admin! Lol jk you\'ll never be admin, you\'ve just leveled up to level '
            lum2 = ''
          }
          if (message.author.id === '230323233696514048') {
            lum = 'lol u stoopid u leveled up to '
            lum2 = ''
          }
          if (message.author.id === '330282762466754561') {
            lum = 'woAH! ur level '
            lum2 = ''
          }
          message.reply(lum + curLevel + lum2);
        }
        sql.run(`UPDATE scores2 SET points = ${row.points + xptogive} WHERE userId = ${message.author.id}`);
      }
    }).catch(() => {
      console.error;
      sql.run("CREATE TABLE IF NOT EXISTS scores2 (userId TEXT, points INTEGER, level INTEGER)").then(() => {
        sql.run("INSERT INTO scores2 (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      });
    });



    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) {
        sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      } else {
        let curLevel2 = Math.floor(0.2 * Math.sqrt(row.points + 1));

        if (curLevel2 > row.level) {
          row.level = curLevel2;
          sql.run(`UPDATE scores SET points = ${row.points + xptogive}, level = ${row.level} WHERE userId = ${message.author.id}`);
          // message.reply('```http\nLEVEL UP: You are now Level ' + curLevel2 + '!```');
        }
        sql.run(`UPDATE scores SET points = ${row.points + xptogive} WHERE userId = ${message.author.id}`);
      }
    }).catch(() => {
      console.error;
      sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
        sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
      });
    });
    xpdelay[msg.author.id].time = Date.now() + delay * 1000 * 60
    xpdelay[msg.author.id].num = 0
    fs.writeFile("./roasted.json", JSON.stringify(xpdelay), (err) => {
      if (err) console.error(err)
    })
  }
});
//Deleted Messages logger
bot.on("messageDelete", message => {
  if (message.channel.id === "337434856596439042") return;
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "suggest")) return;
  if (message.content.startsWith(prefix + "bmeme")) return;
  if (message.content.startsWith('babadook')) return;
  if (message.content.startsWith(prefix + "delete")) return;
  if (message.channel.type === "dm") return;
  console.log(message.content + "   MSG CNTENT")
  let guild = message.guild;
  if (!message) return;
  if (!message.content) return;
  if ((message.content.indexOf('welcome') !== -1) && (message.content.indexOf('hell') !== -1)) return;
  myFunctions.sendembed(message, guild.channels.get(DeleteChannel), 'Message deleted!', false, 16776960)
})




//New Member Message & auto role
bot.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.send("Salutations, " + member.user + "! Welcome to the /r/twentyonepilots Discord! For an overview of the server and some useful commands, check out <#314572694794272768>  |-/");

  //Auto Role
  member.addRole(AutoRole)
  // let RoleMember = guild.member(member.user);
  //   RoleMember.addRole(AutoRole);

  
  //setGame updater
  var members = guild.members.array()
  setGame('with ' + members.length + ' members')
  //

});

bot.on("guildMemberRemove", member => {

  let guild = member.guild;
  //setGame updater
  var members = guild.members.array()
  setGame('with ' + members.length + ' members')
  //
  member.guild.channels.get(DeleteChannel).fetchPinnedMessages().then((data) => {
    var arra = data.array()
    arra[arra.length - 1].unpin()
    guild.channels.get(DeleteChannel).send("```User " + member.user.username + " has left the server```").then(message => {
      message.pin()
    })
  })

})
past = []
//ping pong yeet
bot.on('message', msg => {
  if (msg.channel.id === '363482379827806210' && !msg.content.startsWith(prefix)) return msg.delete()
  let mc = msg.content
  console.log(mc)
  if (insideOf(mc, ['cut', 'myself', 'look']) || insideOf(mc, ['gonna', 'cut'])  || insideOf(mc, ['look', 'hurt', 'myself']) || insideOf(mc, ['look', 'cut', 'me']) || insideOf(mc, ['help', 'cut', 'myself']) || insideOf(mc, ['self', 'harm']) || insideOf(mc, ['i', 'cut', 'myself']) || insideOf(mc, ['i', 'cut', 'my', 'arm'])) {
    if (!insideOf(mc, ['shaving']) && !insideOf(mc, ['shave']) && !insideOf(mc, ['on a']) && !insideOf(mc, ['shaved']) && !msg.member.roles.get('330877657132564480') ) {
      if (msg && msg.guild) {
        var guild = msg.guild
        myFunctions.sendembed(msg, guild.channels.get(DeleteChannel), 'User mentioned self harm', false, 6356992)
        if (msg.channel.id !== '359942421393702914') {
          dm(msg, 'Please do not talk about self harm outside of #venting!\n`Note: If you believe this is a mistake, please send a DM to poot with the message that triggered this!`')
          let stayalive = fs.readFileSync('ral.txt', 'utf8')
          dm(msg, stayalive)
          msg.delete()
        }
      }
      
    }
  }





  try {
    variables = JSON.parse(fs.readFileSync("./variables.json", "utf8"))
  }
  catch(err) {
    if (err) console.log(err)
  }
  var mention = false
  if (msg.mentions && msg.mentions.users) {
    mention = msg.mentions
  }
  function dm(use, m, x) {
    var user = use.member.user
    user.createDM().then(DMCHannel => {
      DMCHannel.send(m)
      if (x) {
        DMCHannel.sendFile(x)
      }
    })
    // use.delete()
  }
  let rip = msg.content.toLowerCase()
  var juk = null
  var k = 0
  for (let i = 0; i < past.length; i++) {
    if (msg.author.id === past[i].id) {
      juk = past[i]
      past.splice(i, 1)
    }
  }
  if (juk) {
    if ((rip === juk.message2.toLowerCase()) && (juk.message2.toLowerCase() === juk.message3.toLowerCase()) && (juk.message3.toLowerCase() === juk.message4.toLowerCase())) {
      if (!msg.author.bot) {
        var uid = msg.author.id
        var time = Date.now() + (1 * 1000 * 60)
        if (msg.member) {
          msg.member.addRole(TO);
          sql.get(`DELETE FROM timeout WHERE userId = "${uid}"`)
          sql.run("INSERT INTO timeout (userid, time) VALUES (?, ?)", [uid, time]);

          dm(msg, 'You have been timed out for one minute for spamming in chat. Please refrain from spamming in the future!')
        }
      }
      past.splice(i, 1)
    }
    if (!msg.content.startsWith(prefix) || msg.content.startsWith(prefix + 'tag')) {
      past.push({ id: msg.author.id, message: msg.content, message2: juk.message, message3: juk.message2, message4: juk.message3 })
    }
  }
  if (!juk) {
    past.push({ id: msg.author.id, message: msg.content, message2: "lol", message3: "no", message4: "absolutely" })
  }
  //REACT COMMANDS
  if (rip.indexOf('poot') !== -1) {
    msg.react('357722287199354880')
  }
  if (rip.indexOf('howdy') !== -1) {
    msg.react('337494319776923648')
  }
  if (rip.indexOf('dab') !== -1) {
    msg.react('321239719482490880')
  }

//self harm detector thing



  if ((rip.indexOf("chat died") !== -1) || (rip.indexOf('chat dead') !== -1) || (rip.indexOf('chat is dead') !== -1) || (rip.indexOf('chat ded') !== -1)) {
    let timenow = Date.now()
    let dayssince = ~~((timenow - (17444 * 24 * 60 * 60 * 1000)) / (1000 * 60 * 60 * 24))
    let rann = 92 - dayssince
    msg.channel.send("`" + rann + ", thanks.`")
  }

  if ((msg.content.indexOf('discord.gg') !== -1) && (!msg.member.hasPermission("BAN_MEMBERS"))) {
    if (msg.content.indexOf('discord.gg/twentyonepilots') !== -1) return;
    msg.delete()
    dm(msg, "Please do not link other discords!")
  }

  //Hall of Fame upvote/ downvote
  if (msg.channel.id === '310973351311179776') {
    var l = msg.attachments.array().length
    if (l === 0) {
      msg.delete()
    }
    else {
      msg.react('%E2%AC%86').then(() => {
        msg.react('%E2%AC%87')
      })
    }
  }
  del.push(msg.id)
  var loww = false

  //no no to bot replying to self
  if (msg.content.startsWith(":!")) {
    var Playing = msg.content.substring(23)
    var Playing2 = Playing.slice(0, -3)
    console.log(Playing2 + "PLAYINGGGGGGGGGGGGGGGGG")
    bot.user.setGame(Playing2);
  }
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") {
    let encoded = morse.encode(msg.content.toLowerCase())
    msg.channel.send(prefix + encoded)
    return;
  }


  //scavenger hunt >:))))



//end scavenger hunt

  if (rip.indexOf("tomato") !== -1) {
    msg.react('🚫').then(() => {
      msg.react('357722287136571392').then(() => {
        msg.react('🌮')
      })
    })



  }
  //slur filter b4 prefix check
  if ((rip.indexOf('welcome') !== -1) && (rip.indexOf('to') !== -1) && (rip.indexOf('hell') !== -1)) {
    msg.delete()
  }


  const swearWords = ["chink", "tranny", "fag", "dyke", "nigger", "dike", "kike", "fmk", "beaner"];
  if (swearWords.some(word => rip.includes(word))) {
    let guild = msg.guild;
    msg.channel.send("Please refrain from using slurs. A copy of your message has been sent to the Admins.")
    myFunctions.sendembed(msg, msg.guild.channels.get(DeleteChannel), 'Slurs detected!', false, 16711680)
  }
  //prefix check hoes
  if (!msg.content.startsWith(prefix) && (msg.channel.id !== "337434856596439042")) return;
  if ((msg.member.hasPermission('BAN_MEMBERS')) || (msg.member.roles.get('283272728084086784')) || (msg.channel.id === "278190769959993344") || (msg.channel.id === "334569251124019201") || (low) || (msg.channel.id === "271471180915933185") || (msg.channel.id === "337434856596439042")) {
    loww = true
  }

  if (rip.startsWithP("stayalive")) {
    var me = fs.readFileSync('ral.txt', 'utf8')
    msg.channel.send(me, { code: 'html' })
  }

  if (!loww) {
    if (msg.content.length > 4 && !msg.content.startsWith(prefix + 'tag') && !(msg.content.startsWithP('lyrics') && msg.channel.id === '288097987446571018')) {
      msg.channel.send("**Please use commands in** <#278190769959993344>!").then((m) => {
        m.delete(3000)
      })
      msg.delete()
      return;
    }
  }
  if (rip.startsWithP("taq")) {
    if (msg.member.roles.get("319636694447947776")) {
      msg.channel.send("yes")
    }
  }

  if (rip.startsWith(prefix + 'doesthiswork')) {
    msg.channel.send('Yes, which means your function startsWithP() is broken')
  }

  if (rip.startsWithP("commands")) {
    if ((!msg.member.roles.get("269660563368312833")) && (!msg.member.roles.get("323555864646647808")) && (!msg.member.roles.get("292831640470683658"))) return msg.channel.send("```You don't have permission to do this!```")
    if (low) {
      low = false
      msg.channel.send("Commands only allowed in commands channel!")
    } else if (!low) {
      low = true
      msg.channel.send("Commands allowed anywhere!")
    }
  }

  
  if (rip.startsWithP("songtopic")) {
    let looptimes = 0
    let recursive = false
    let am = 10
    if (rip.startsWithP("songtopicturer") || rip.startsWithP("songtopicr")) {
      looptimes = 50
      recursive = true
      am = 1
      msg.channel.send('`Used with -r option (repeats input 50 times for a bigger, patterned effect)`')
    }
    let args = msg.content.split(' ')
    if (msg.content.length < 20) return msg.channel.send('no, homie. try again')

    let wordArray = []
    
    let r = 0
    let g = 0
    let b = 0
    let size = 20
    let lyrics = removeCommand(msg.content)
    lyrics = lyrics.toLowerCase()
    lyrics = lyrics.replace(/,|\.|\?|!|:|;/g, "")
    lyrics = lyrics.replace(/-|\\n/g, " ")
    let templyrics = lyrics
    for (let i = 0; i < looptimes; i++) {
      lyrics += " " + templyrics
    }
    let words = lyrics.split('')
    size = ~~(Math.sqrt(words.length)) + 1
    var canvas = new Canvas.Canvas(size * am, size * am)
    var ctx = canvas.getContext('2d');
    ctx.fillStyle - 'black'
    ctx.fillRect(0,0, size * am, size * am)
    
    for (let i = 0; i < words.length; i++) {
      wordArray.push((getValue(words[i])))
    }
    function point(x,y,ctx, wordArray, indexVal) {
      ctx.fillStyle = 'rgba(' + wordArray[indexVal]['r'].toString() + ',' + wordArray[indexVal]['g'].toString() + ',' + wordArray[indexVal]['b'].toString() + ',1)'
      ctx.fillRect(i * am,j * am,1 * am,1 * am)
    }
    for (i = 0; i < size; i++) {
      for (j = 0; j < size; j++) {
        let indexVal = i + size * j
        if (wordArray[indexVal]) {
          ctx.strokeStyle = 'rgba(' + wordArray[indexVal]['r'].toString() + ',' + wordArray[indexVal]['g'].toString() + ',' + wordArray[indexVal]['b'].toString() + ',1)'
          ctx.lineWidth = 1
          point(i,j,ctx, wordArray, indexVal)
        }
        
      }
    }
    
    
    
    // let array = letters.split('')
    function getValue(letter) {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz '
      let index = alphabet.indexOf(letter) + 1
      if (letter === ' ') {
        let r1 = 0
        let g1 = 0
        let b1 = 0
        let toReturn = {r: r1, g: g1, b: b1}
        return (toReturn)
      }
      if (letter === 'z') {
        let r1 = 255
        let g1 = 255
        let b1 = 255
        let toReturn = {r: r1, g: g1, b: b1}
        return (toReturn)
      }
      let mapped = index.map(0, 26, 0, 16777216)
      let rgb = numberToColour(mapped)
      let toReturn = {r: rgb[0], g: rgb[1], b: rgb[2]}
      return (toReturn)
    }
    let values = {}
    function colourToNumber(r, g, b) {
      return (r << 16) + (g << 8) + (b);
      }
    
    function numberToColour(number) {
      const r = (number & 0xff0000) >> 16;
      const g = (number & 0x00ff00) >> 8;
      const b = (number & 0x0000ff);
      return [r, g, b];
     }



     msg.channel.sendFile(canvas.toBuffer())

    // if (recursive) return msg.channel.sendFile(canvas.toBuffer())
    // if (!recursive) {
    //   let canvas2 = new Canvas.Canvas(400, 400)
    //   let ctx2 = canvas2.getContext('2d');
    //   let img = new Canvas.Image();
      
    //   img.onload = function() {
    //     ctx2.drawImage(img, 0, 0, 200, 200);
    //     msg.channel.sendFile(canvas2.toBuffer())
    //   }
    //   img.src = canvas.toBuffer();
      
      
    // }
  }
  
  if (rip.startsWithP("lottery")) {
    var args = msg.content.split(' ')
    if (!args || !args[1] || parseInt(args[1]) / parseInt(args[1]) !== 1) return msg.channel.send('```Proper command usage is !lottery [amount]```')
    var amount = args[1]
    if (amount < 50) return msg.channel.send('```Amount must be at least 50 credits!```')

    sql.get(`SELECT * FROM daily WHERE userId ="${msg.author.id}"`).then(row => {
      var able = row.xp
      if (able < amount) return msg.channel.send('Not enough credits!')
      var prev = 0
      var total = 0
      var k = 0
      var highest = 0
      var secondhighest
      for (var key in lottery) {
        if (lottery.hasOwnProperty(key)) {
          total += parseInt(lottery[key].amount)
          k++
          if (parseInt(lottery[key].amount) > highest) {
            secondhighest = highest
            highest = parseInt(lottery[key].amount)
          }
        }
      }
      highest = secondhighest
      if (lottery[msg.author.id]) {
        prev = lottery[msg.author.id].amount
      }
      var use
      var average = ((total - parseInt(prev)) / (parseInt(k) - 1)) * 3
      console.log(total, prev, k)
      if (average > highest) {
        use = ~~average
      }
      if (average <= highest * 1.2) {
        use = ~~(highest * 1.2)
      }

      function allowed(amount) {
        if ((total === 0) && (amount < 3000)) return true
        if ((amount > 3000) && ((total === 0) || (k < 2))) {
          use = 3000
          return false
        }
        if ((amount < 500) && (amount <= total)) return true
        if (amount < use + 1) return true
        return false
      }
      if (!allowed(parseInt(amount) + parseInt(prev))) return msg.channel.send("```Lottery entry can be at most " + parseInt(use) + '```')
      myFunctions.credits(msg, -amount)
      lottery[msg.author.id] = { user: msg.author.id, amount: parseInt(amount) + parseInt(prev) }
      fs.writeFile("./lottery.json", JSON.stringify(lottery), (err) => {
        if (err) console.error(err)
      })
      msg.channel.send('You have entered with ' + amount + ' credits!')
    })
  }

  if (rip.startsWithP("currentlottery") || rip.startsWithP("checklottery") || rip.startsWithP("chkl")) {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var x = parseInt(h) + parseInt(m) / 60
    var rem = (24 - x + lotHour) % 24
    var min = Math.floor((rem - Math.floor(rem)) * 60)
    var timesend = 'Time remaining: ' + Math.floor(rem) + ' hours ' + min + ' minutes'

    console.log(lottery)
    var amount = 0
    var entries = ""
    var i = 0
    for (var key in lottery) {
      if (lottery.hasOwnProperty(key)) {
        amount += parseInt(lottery[key].amount)
        var userid = lottery[key].user
        var member = msg.guild.members.get(userid)
        if (member && member.user && member.user.username) {
          entries += member.user.username + '//' + lottery[key].amount + '\n'
        }
        if (!member || !member.user || !member.user.username) {
          console.log(key)
        }
      }
    }
    var toSend2 = '`Current lottery is ' + parseInt(amount) + ' credits!`'
    if (variables.twentyfour) {
      amount = amount * 1.5
      toSend2 = '`Current lottery is ' + parseInt(amount) + ' credits! (1.5x!)`'
    }
    // msg.channel.send(toSend2)
    entries = 'Current lottery://' + amount + '\n' + 'Time remaining://' + timesend + '\n' + entries
    var col = 16777215
    if (variables.twentyfour) {
      col = 16729676
    }
    myFunctions.sendembed(msg, msg.channel, '__**Entries**__', entries, col, true)
  }

  if (rip.startsWithP('general2')) {
    if (!canKick(msg)) return msg.channel.send("```You don't have permission to do this!```")
    var message = 'Error!'
    var toSet
    var channelgen2 = msg.guild.channels.get('351864237997686804')
    if (variables.general2) {
      toSet = false
      message = 'general2 disabled!'
      channelgen2.overwritePermissions('269660541738418176', { 'READ_MESSAGES': false })
    }
    if (!variables.general2) {
      toSet = true
      message = 'general2 enabled!'
      channelgen2.overwritePermissions('269660541738418176', { 'READ_MESSAGES': true })
    }
    variables.general2 = toSet
    fs.writeFile("./variables.json", JSON.stringify(variables), (err) => {
      if (err) console.error(err)
    })

    msg.channel.send(wrap(message))
  }

  if (rip.startsWithP('endlottery')) {
    if (msg.author.id !== '221465443297263618') return '```only pootus can doodus```'
    var lolll = true
    if ((lolll)) {
      var array2 = bot.guilds.array()
      var guild = array2[0]
      var channel = guild.channels.get('278190769959993344')
      var array = []
      var winnings = 0
      for (var key in lottery) {
        if (lottery.hasOwnProperty(key)) {
          var num = parseInt(lottery[key].amount)
          winnings += parseInt(lottery[key].amount)
          for (let i = 0; i < num; i++) {
            array.push(lottery[key].user)
          }
        }
      }
      if (variables.twentyfour) {
        winnings = winnings * 1.5
      }
      // channel.send(array.length + ' array length <@!221465443297263618>')
      var random = ~~(Math.random() * array.length)
      var ranindex = array[random]
      // channel.send('User <@' + ranindex + '> wins!')
      var member = guild.members.get(ranindex)
      var plop = false
      winnings = winnings
      channel.send(winnings)
      myFunctions.credits(channel, winnings, plop, ranindex)
      lottery = {}
      fs.writeFile("./lottery.json", JSON.stringify(lottery), (err) => {
        if (err) console.error(err)
      })
      var d = new Date();
      var h = d.getHours();
      var rand = ~~(Math.random() * 12) + 1
      variables.twentyfour = false
      if (Math.random() <= 0.1) {
        rand = 24
        variables.twentyfour = true
      }
      lotHour = (h + rand) % 24
      var toSend = '**New lottery drawing in ' + rand + ' hours!** Winner was <@' + member.user.id + '> and they won ' + winnings + ' credits!'

      // if (rand === 24) {
      //   variables.twentyfour = true
      //   toSend = '**New lottery drawing in ' + rand + ' hours! 1.5x CREDITS!!** Winner was <@' + member.user.id + '> and they won ' + winnings + ' credits!'
      // }
      variables.time = lotHour
      fs.writeFile("./variables.json", JSON.stringify(variables), (err) => {
        if (err) console.error(err)
      })
      channel.send(toSend).then(m => {
        m.channel.fetchPinnedMessages().then((data) => {
          var arra = data.array()
          for (let i = 0; i < arra.length; i++) {
            if (arra[i].content.indexOf('New lottery drawing') !== -1) {
              arra[i].unpin()
            }
          }
          m.pin()
        })


      })
    }
  }

  // if (rip.startsWithP('hypergan')) {
  //   var members = msg.guild.members.array()
  //   for (let i = 0; i < members.length; i++) {
  //     let id = members[i].id
  //   }
  // }

  if (rip.startsWithP('roles')) {
    var args = msg.content.split(' ')
    if (!args || !args[1] || parseInt(args[1]) === 1) {
      msg.channel.sendFile('roles1.png')
      return;
    }
    if (args && parseInt(args[1]) === 2) {
      msg.channel.sendFile('roles2.png')
      return;
    }
    msg.channel.send('```Proper command usage is !roles (1 or 2)```')
    return;
  }

  if (rip.startsWithP("chktime")) {
    var timedout = msg.guild.roles.get(TO).members.array()
    var string = "Timed out users:\n\n"
    for (let i = 0; i < timedout.length; i++) {
      string += "User: " + timedout[i].user.username + "\n"
    }
    msg.channel.send(string, { code: "http" })
  }

  if (rip.startsWithP("userinfo")) {
    var all = false
    if (msg.content.indexOf('all') !== -1) {
      all = true
    }
    var string = removeCommand(msg.content)
    var members = msg.guild.members.array()
    var found = false
    for (let i = 0; i < members.length; i++) {
      var member = members[i]
      if ((member.user.username.toLowerCase() === string.toLowerCase()) && ((!found) || (all))) {
        found = true
        var roles = member.roles.array()
        console.log(roles)
        var rolestring = ""
        for (j = 0; j < roles.length; j++) {
          console.log(j)
          rolestring += roles[j].name + ", "
        }
        var rolest = rolestring.slice(0, -2)
        if (!dailynum[member.user.id]) dailynum[member.user.id] = 0
        var dn = dailynum[member.user.id]
        var tosend = "**#Display name:** " + member.displayName + "\n" + "# User id: " + member.user.id + "\n" + "# roles: " + rolest + "\n# Displayed Color: " + member.displayHexColor + "\n# Joined: " + member.joinedAt.toString() + "\n# Status: " + member.presence.status + "\n#!daily uses: " + dn
        console.log(tosend)
        myFunctions.sendembed(msg, msg.channel, '__**User Info**__', tosend, member.displayColor, true)
      }
    }
  }

  if (rip.startsWithP('tpost')) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("You don't have permission to do that!")
    if (msg.author.id === '207129652345438211') return msg.channel.send("You don't have permission to do that!")
    console.log('command got bois')
    var ihavealotofwizards = removeCommand(msg.content)
    T.post('statuses/update', { status: ihavealotofwizards }, function (err, data, response) {
      console.log(err)
      console.log(data)
    })
  }


  if (rip.startsWithP("roleinfo")) {
    var array = msg.content.split(" ")
    array.shift()
    var string = array.join(" ")
    var roles = msg.guild.roles.array()
    var found = false
    for (let i = 0; i < roles.length; i++) {
      var role = roles[i]
      var temp = role.name.replace(/ø/g, "o")
      var rolename = temp.replace(/Ø/g, "O")
      if (rolename.toLowerCase() === string.toLowerCase()) {
        var time = role.createdTimestamp
        var timenow = Date.now()
        var diff = (timenow - time) / 1000
        var days = Math.floor(diff / 86400)
        var hoisted = "No"
        if (role.hoist) {
          hoisted = 'Yes'
        }

        msg.channel.send("# Role id: " + role.id + "\n" + "# Number of users with role: " + role.members.array().length + "\n" + "# Creation date: " + role.createdAt.toString() + "\n" + "# Hoisted: " + hoisted + "\n" + "# Hex Color Code: " + role.hexColor, { code: 'cs' })
        found = true
      }
    }
    if (!found) return msg.channel.send("Role was not found!")
  }

  if (rip.startsWithP('staffpin')) {
    var args = msg.content.split(' ')
    if (msg.channel.id !== '307697558917087234') return
    if (!args || !args[1]) return
    // fetches message from ID
    if (parseInt(args[1]) / parseInt(args[1]) !== 1) {
      msg.channel.fetchPinnedMessages().then((data) => {
        var array = data.array()
        if (array.length >= 50) {
          array[array.length - 1].unpin()
        }
        msg.pin()
      })
      return
    }
    msg.channel.fetchMessage(args[1]).then((toPin) => {
      msg.channel.fetchPinnedMessages().then((data) => {
        var array = data.array()
        if (array.length >= 50) {
          array[array.length - 1].unpin()
        }
        toPin.pin()
      })
    })
    msg.channel.send('Message pinned successfully!').then(m => {
      m.delete(2000)
    })


  }

  if (rip.startsWithP("riley")) {
    msg.channel.send("PLEASE ENTER ADMINISTRATOR PASSWORD: ")
  }

  if (rip.startsWithP("kick")) {
    if (!canKick(msg)) return msg.channel.send("You don't have permission to kick!")
    if ((!msg.mentions) || (!msg.mentions.users) || (!msg.mentions.users.first())) return msg.channel.send("```Proper command usage is !kick @user```")
    let guild = msg.guild
    let uid = msg.mentions.users.first()
    let RoleMember = guild.member(uid);
    if (RoleMember.highestRole.comparePositionTo(msg.member.highestRole) >= 0) {
      msg.channel.send("User is same or higher rank!")
      return
    }
    RoleMember.kick(msg.author.username)
    if (fairlyused(msg)) {
      myFunctions.sendembed(msg, msg.guild.channels.get(fairlyaudit), 'Fairly Local used command!', false, 12845311)
    }
  }

  if (rip.startsWithP("banall")) {
    msg.channel.send("```Skynet has now taken over.```")
    return
  }

  if (rip.startsWithP("ban")) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("You don't have permission to do this!")
    let guild = msg.guild
    if ((!msg.mentions) || (!msg.mentions.users) || (!msg.mentions.users.first())) return msg.channel.send("```Proper command usage is !ban @user```")
    let uid = msg.mentions.users.first()
    let RoleMember = guild.member(uid);
    if (RoleMember.highestRole.comparePositionTo(msg.member.highestRole) >= 0) {
      msg.channel.send("You don't have permission to do this!")
      return
    }
    RoleMember.ban(msg.author.username)
  }

  if (rip.startsWithP("chanperm")) {
    console.log(msg.channel.permissionsFor(msg.member))
  }

  if (rip.startsWithP("lockdown start")) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("You don't have permission to do this!")
    msg.channel.overwritePermissions('269660541738418176', { 'SEND_MESSAGES': false })
    msg.channel.send('```Lockdown started! Use the !lockdown stop command to end the lockdown.```')
  }
  if (rip.startsWithP("lockdown stop")) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("You don't have permission to do this!")
    msg.channel.overwritePermissions('269660541738418176', { 'SEND_MESSAGES': true })
    msg.channel.send('```Lockdown stopped!```')
  }

  if (rip.startsWithP("modhelp")) {
    msg.channel.send("!timeout [user] [time] : duh it times them out\n!warn [user] [warning] : duh it issues them a warning\n!chkwarn [user] : duh it displays their warnings\n!commands : duh it allows/disallows commands in any channel\n!delete [number of messages] : duh it deletes # of messages\n!chktime : duh it shows the users in timeout", { code: "http" })
  }

  if (rip.startsWithP("untimeout")) {
    if (!canKick(msg)) return msg.channel.send("You must be an Admin or Moderator to use this command")
    let guild = msg.guild
    let uid = msg.mentions.users.first()
    let RoleMember = guild.member(uid);
    RoleMember.removeRole(TO)
    msg.channel.send(RoleMember + "**, your timeout has ended!**")
    if (fairlyused(msg)) {
      myFunctions.sendembed(msg, msg.guild.channels.get(fairlyaudit), 'Fairly Local used command!', false, 12845311)
    }
  }


  if (rip.startsWithP("misfit")) {
    msg.channel.send("More like misfit for admin <:dab:321239719482490880>")
  }



  if (rip.startsWithP("yersh")) {
    msg.channel.send("```it's ya koi```")
  }

  if (rip.startsWithP("woo")) {
    msg.channel.send("https://twitter.com/camero_2734/status/878818068033671168")
  }

  if (rip.startsWithP("color")) {
    if ((!msg.member.roles.has('326558787169288203')) && (!msg.member.roles.has('326558918107070465')) && (!msg.member.roles.has('326558916219502595'))) return msg.channel.send("```You do not have the proper role```")
    var args = msg.content.split(/[ ]+/);
    if (!args) return msg.channel.send("```Proper command usage is !color [hex value]```")
    if (!args[1]) return msg.channel.send("```Proper command usage is !color [hex value]```")
    if (!args[1].startsWith('#')) return msg.channel.send("```Proper command usage is !color [hex value]```")
    if (msg.member.roles.has('326558787169288203')) {
      msg.member.roles.get('326558787169288203').setColor(args[1])
    } else if (msg.member.roles.has('326558918107070465')) {
      msg.member.roles.get('326558918107070465').setColor(args[1])
    } else if (msg.member.roles.has('326558916219502595')) {
      msg.member.roles.get('326558916219502595').setColor(args[1])
    } else return;
    msg.channel.send("```Your color has been changed!```")
  }
  if (rip.startsWithP("ping")) {
    msg.channel.send("Ping?").then(message => message.edit(`Pong! \`${message.createdTimestamp - msg.createdTimestamp}ms.\``));
  }


  if (rip.startsWithP("8ball")) {
    var args = msg.content.split(/[ ]+/);
    if (!args[2]) return msg.channel.send()
    var answers = ['Yes', 'No', 'Maybe', 'I don\'t know', 'Probably', 'Probably not']
    var answer = Math.floor(Math.random() * 6)
    msg.channel.send("```http\nI would say: " + answers[answer] + "```")
  }


  if (rip.startsWithP("remind")) {
    var args = msg.content.split(/[ ]+/);

    if (!args) return msg.channel.send("```Proper command usage is !remind [reminder] [time in hours]```")
    if (!args[1]) return msg.channel.send("```Proper command usage is !remind [reminder] [time in hours]```")
    if (args.length < 3) return msg.channel.send("```Proper command usage is !remind [reminder] [time in hours]```")
    let qp = args.length - 1
    if (!args[qp]) return msg.channel.send("```Proper command usage is !remind [reminder] [time in hours]```")
    var d = new Date();
    var n = d.getHours();
    if (!Number(args[qp])) return msg.channel.send("```Proper command usage is !remind [reminder] [time in hours]```")
    var u = Number(args[qp])
    if (u <= 0) return msg.channel.send("```Proper command usage is !remind [reminder] [time in hours]```")
    if (!u) return msg.channel.send("```Proper command usage is !remind [reminder] [time in hours]```")
    if (u.toString() !== args[qp]) return msg.channel.send("```Proper command usage is !remind [reminder] [time in hours]```")
    var nn = Math.floor(n + u)
    if (nn >= 24) {
      nn = nn % 24
    }
    let opq = Date.now() + (args[qp] * 3600000)
    sql.run("INSERT INTO remind (time, userID, hour, txt) VALUES (?, ?, ?, ?)", [opq, msg.author.id, nn, msg.content]);
    msg.channel.send("```You will be reminded in " + args[qp] + " hour(s)!```")
  }

  if (rip.startsWithP("shnup")) {
    msg.channel.send("scavenge me you STINKY fish >:(")
  }


  if (rip.startsWithP("avatar")) {
    var args = msg.content.split(/[ ]+/);
    if (args[1]) {
      if (!msg.mentions) return msg.channel.send("```Proper command usage is !avatar @user```")
      if (!msg.mentions.users) return msg.channel.send("```Proper command usage is !avatar @user```")
      if (!msg.mentions.users.first()) return msg.channel.send("```Proper command usage is !avatar @user```")
      msg.channel.sendFile(msg.mentions.users.first().avatarURL + ".jpg")
    } else if (!args[1]) {
      msg.channel.sendFile(msg.author.avatarURL + ".jpg")
    }
  }
  if (rip.startsWithP("slasho")) {
    msg.channel.send("Ø    ø")
  }

  if (rip.startsWithP("membercount")) {
    var args = msg.content.split(" ")
    if (!args || !args[1]) {
      args[1] = 'sdjadsahj'
    }
    var emoji3 = []
    let guild = msg.guild
    var array = guild.members.array()
    var latest = { user: "null", time: 0 }
    var list = []
    for (let i = 0; i < array.length; i++) {
      list.push({ user: array[i].user.username, time: array[i].joinedTimestamp })
    }
    list.sort(function (a, b) {
      if (a.time < b.time) return -1;
      if (a.time > b.time) return 1;
      return 0;
    })
    for (let i = 0; i < list.length; i++) {
      list[i] = list[i].user
    }
    var x = list.indexOf(args[1])
    if (x !== -1) {
      msg.channel.send(x)
    }
    msg.channel.send("**" + array.length + " members**")
  }

  if (rip.startsWithP("cookie")) {
    if (!msg.mentions.users) return;
    if (!msg.mentions.users.first()) return;
    if (msg.mentions.users.first().id === msg.author.id) {
      msg.channel.send("You can't give yourself a cookie")
      return
    }
    var args = msg.content.split(/[ ]+/);
    // args[1] is tha recipient
    if (!args[1]) return msg.channel.send("The correct usage is: !cookie [@user]")
    if (!cookie[msg.mentions.users.first().id]) cookie[msg.mentions.users.first().id] = {
      cookie: 0
    }
    cookie[msg.mentions.users.first().id].cookie++
    msg.channel.send(":cookie: | " + msg.author.username + " has given " + msg.mentions.users.first() + " a cookie")
    fs.writeFile("./cookies.json", JSON.stringify(cookie), (err) => {
      if (err) console.error(err)
    })
  }
  //TODO make !badge disable && !badge enable switch/case
  if (rip.startsWithP("badge disable")) {
    if (!base[msg.author.id]) {
      base[msg.author.id] = {

      }
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }
    var args = msg.content.split(" ")
    if (msg.content.indexOf('staff') !== -1) {
      msg.channel.send('`staff disabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].staff)) base[msg.author.id].staff = 0
      base[msg.author.id].staff = 0
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }
    if ((msg.content.indexOf('top') !== -1) && (msg.content.indexOf('10') !== -1)) {
      msg.channel.send('`top disabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].top10)) base[msg.author.id].top10 = 0
      base[msg.author.id].top10 = 0
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }
    if (msg.content.indexOf('fairly') !== -1) {
      msg.channel.send('`fairly local disabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].fairly)) base[msg.author.id].fairly = 0
      base[msg.author.id].fairly = 0
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }
    if (msg.content.indexOf('common') !== -1) {
      msg.channel.send('`common fren disabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].common)) base[msg.author.id].common = 0
      base[msg.author.id].common = 0
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }

    if (msg.content.indexOf('youtube') !== -1) {
      msg.channel.send('`youtuber disabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].youtube)) base[msg.author.id].youtube = 0
      base[msg.author.id].youtube = 0
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }

    if (msg.content.indexOf('dreamer') !== -1) {
      msg.channel.send('`local dreamer disabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].dreamer)) base[msg.author.id].dreamer = 0
      base[msg.author.id].dreamer = 0
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }

    if ((msg.content.indexOf('artist') !== -1) || (msg.content.indexOf('musician') !== -1)) {
      msg.channel.send('`artist / musician disabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].artist)) base[msg.author.id].artist = 0
      base[msg.author.id].artist = 0
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }
  }

  if (rip.startsWithP('vapor')) {
    msg.delete()
    var content = removeCommand(msg.content)
    var args = content.split('')
    for (let i = 0; i < args.length; i++) {
      args[i] = args[i] + '  '
    }
    msg.channel.send(args.join("") + '\n-' + msg.member.displayName)
  }

  if (rip.startsWithP("badge enable")) {
    if (!base[msg.author.id]) {
      base[msg.author.id] = {

      }
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }
    var args = msg.content.split(" ")
    if (msg.content.indexOf('staff') !== -1) {
      msg.channel.send('`staff enabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].staff)) base[msg.author.id].staff = 0
      base[msg.author.id].staff = 1
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }



    if ((msg.content.indexOf('top') !== -1) && (msg.content.indexOf('10') !== -1)) {
      msg.channel.send('`top10 enabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].top10)) base[msg.author.id].top10 = 0
      base[msg.author.id].top10 = 1
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }

    if (msg.content.indexOf('fairly') !== -1) {
      msg.channel.send('`fairly local enabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].fairly)) base[msg.author.id].fairly = 0
      base[msg.author.id].fairly = 1
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }
    if (msg.content.indexOf('common') !== -1) {
      msg.channel.send('`common fren enabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].common)) base[msg.author.id].common = 0
      base[msg.author.id].common = 1
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }

    if ((msg.content.indexOf('arist') !== -1) || (msg.content.indexOf('musician') !== -1)) {
      msg.channel.send('`artist / musician disabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].artist)) base[msg.author.id].artist = 0
      base[msg.author.id].artist = 1
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }

    if (msg.content.indexOf('youtube') !== -1) {
      msg.channel.send('`youtuber enabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].youtube)) base[msg.author.id].youtube = 0
      base[msg.author.id].youtube = 1
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }

    if (msg.content.indexOf('dreamer') !== -1) {
      msg.channel.send('`local dreamer enabled`')
      if ((!base[msg.author.id]) || (!base[msg.author.id].dreamer)) base[msg.author.id].dreamer = 0
      base[msg.author.id].dreamer = 1
      fs.writeFile("./badges.json", JSON.stringify(base), (err) => {
        if (err) console.error(err)
      })
    }

  }

  if (rip.startsWithP("oslash")) {
    if (msg.author.id === '148628725808758784') {
      msg.channel.send('**You do not own me.**')
      return;
    }
    if (msg.content.includes("@")) return msg.channel.send("```Are you stupid or something? Don't use @'s kthx'```")
    if (msg.author.id === "221465443297263618") {
      msg.delete()
    }
    string = msg.content.slice(8)
    string2 = string.replace(/o/g, "ø")
    string3 = string2.replace(/O/g, "Ø")
    msg.channel.send(string3)
  }
  console.log(msg.content)
  if (rip.startsWithP(":hotboi:")) {
    msg.channel.sendFile("https://images.discordapp.net/attachments/307697558917087234/335242382796914688/HotBois.gif")
  }
  if ((rip.startsWithP("<:")) && (rip.endsWith(">"))) {
    var emojiarray = msg.content.split(":")
    if (!emojiarray) return;
    if (!emojiarray[2]) return;
    var emoji = emojiarray[2].replace(/>/g, "")
    if (emoji / emoji !== 1) return;
    if (emoji === "334210741928460290") {
      msg.channel.sendFile("https://images.discordapp.net/attachments/307697558917087234/335242382796914688/HotBois.gif")
    }
    // let guild = msg.guild
    // var emojifile = guild.client.emojis.get(emoji).url
    msg.channel.sendFile("https://cdn.discordapp.com/emojis/" + emoji + ".png")
  }


  if (rip.startsWithP("emojilist")) {
    let guild = msg.guild
    var emojis = guild.emojis.array()
    var stringy = "**SERVER EMOJIS:** \n\n"
    var args = msg.content.split(" ")
    if (!args[1]) {
      args[1] = 1
    }
    var absolutely = parseInt(args[1])
    absolutely = (absolutely - 1) * 10
    if (absolutely > emojis.length) return msg.channel.send("Invalid page number!")
    for (let i = absolutely; i < absolutely + 10; i++) {
      var vta = ""
      if (!emojis[i]) {
        vta = " "
      }
      if (emojis[i]) {
        vta = emojis[i].name
      }
      stringy += ":" + vta + ": " + emojis[i] + "\n"
    }
    var len = Math.floor(emojis.length / 10) + 1
    var numa = Math.floor(parseInt(args[1]))
    if (numa / numa !== 1) return;
    if (numa < 1) return;
    var string12 = stringy + "\n" + "**Page: " + numa + " out of " + len + "**"
    var string13 = string12.replace(/: : undefined/g, "")
    msg.channel.send(string13)
  }

  if (rip.startsWithP("clearventing")) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("```You must be an Admin or Moderator to use this command```")
    var id = fs.readFileSync(venting, 'utf8')
    var position = msg.guild.channels.get(id).position
    msg.guild.channels.get(id).clone().then((channel) => {
      fs.writeFile(venting, channel.id)
      channel.setPosition(position)
    })
    msg.guild.channels.get(id).delete()
  }

  if (rip.startsWithP("bmeme")) {
    var args = msg.content.slice(7)
    if (msg.content.includes("@")) return msg.channel.send("```Are you stupid or something? Don't use @'s kthx'```")
    if (!args) return;
    var string = args
    args = string.replace(/b/gi, ":b:")
    // text= text.replace(/@/g, "")
    var arg = args.split(" ")
    // var ran = Math.floor(Math.random() * (arg.length / 2))
    for (let i = 0; i < arg.length - 1; i++) {
      var ran = Math.random()
      if (ran > 0.6) {
        if (arg[i].startsWith(":b:")) {
          arg[i] = arg[i].replace(/:b:/, "b")
        }
        arg[i] = ":b:" + arg[i].slice(1)
      }
    }
    arg = arg.join("  ")
    msg.channel.send(arg + "\n-" + msg.member.user)
    msg.delete()
  }

  if ((rip.startsWith(prefix)) && (rip.endsWith('ing'))) {
    if (rip.startsWithP("ping")) return;
    if (rip.startsWithP("lyrics")) return;
    var cutme = msg.content.substring(1, msg.content.length - 3)
    if (!rip.startsWithP("tag")) {
      msg.channel.send(cutme + "ong!", { disableEveryone: true })
    }


  }

  if (rip.startsWithP("chkcookie")) {
    let numcook = cookie[msg.author.id] ? cookie[msg.author.id].cookie : 0;
    msg.channel.send("You have " + numcook + " cookies!")
  }

  if (rip.startsWithP("indicator")) {
    var xyz = rip.substring(11)
    var wow = xyz.split("")
    console.log(wow)
    for (let i = 0; i < wow.length; i++) {
      var letters = "cdefghijklmnpqrstuvwxyz"
      var letters2 = "ab"
      var numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
      var numbers2 = ["0123456789"]
      if (letters.indexOf(wow[i]) !== -1) {
        wow[i] = ":regional_indicator_" + wow[i] + ":"
      } else if (letters2.indexOf(wow[i]) !== -1) {
        wow[i] = ":" + wow[i] + ":"
      } else if (wow[i] === "o") {
        wow[i] = ":o2:"
      }
      else if ((parseInt(wow[i]) / parseInt(wow[i]) === 1) || parseInt(wow[i]) === 0) {
        var woz = parseInt(wow[i])
        wow[i] = ":" + numbers[woz] + ":"
      } else if (wow[i] === "*") {
        wow[i] = ":asterisk:"
      } else if (wow[i] === "#") {
        wow[i] = ":hash:"
      } else {
        wow[i] = wow[i]
      }
    }
    var xdd = wow.join("")
    var mob = xdd.replace(/:undefined:/g, " ")
    var mob3 = mob.replace(/ /g, "    ")
    var mob2 = mob3.replace(/::/g, ": :")
    msg.channel.send(mob2, { split: true })
  }

  if (rip.startsWithP("callvote")) {
    if (msg.content.indexOf('(') === -1 || msg.content.indexOf(')') === -1 || msg.content.indexOf(',') === -1) {
      return msg.channel.send(wrap('Proper command usage is !callvote vote text here (option1, option2...)'))
    }
    if (currentvote.length > 0) return msg.channel.send('```Vote already in progress!```')
    var cont = msg.content.substring(10)
    var cont2 = cont.split('(')
    //should we allow it (yes,no)
    var temp = cont2[1].replace(/\)/g, "")
    var temp2 = temp.replace(/, /g, ",")
    var options = temp2.split(',')
    console.log('VOTE NAME: ' + cont2[0] + "  " + "OPTIONS: " + options)
    var vote = { opt: options, words: cont2[0] }
    currentvote.push(vote)
    var string1 = "```md\n#" + msg.author.username + "'s vote: " + vote.words + '\n'
    var string = string1.replace(/ \)/, ")")
    var numero = 1
    for (let i = 0; i < vote.opt.length; i++) {
      votes.push({ choice: vote.opt[i], numvote: 0, author: msg.author.username })
      console.log(votes)
      string += numero + ". " + vote.opt[i] + ' 0' + "\n"
      numero++
    }
    msg.channel.send(string + '```')
  }

  function votefunc() {
    var vote = currentvote[0]
    var string1 = "```md\n#" + votes[0].author + "'s vote: " + vote.words + '\n'
    var string = string1.replace(/ \)/, ")")
    var numero = 1
    for (let i = 0; i < vote.opt.length; i++) {
      votes.push({ choice: vote.opt[i], numvote: 0 })
      console.log(votes)
      string += numero + ". " + vote.opt[i] + ' ' + votes[i].numvote.toString() + "\n"
      numero++
    }
    return string;
  }

  if (rip.startsWithP("vote")) {
    if (currentvote.length < 1) return msg.channel.send("```No current votes!```")
    var vote = currentvote[0]
    var args = msg.content.split(' ')
    if ((!args) || (!args[1])) return msg.channel.send(votefunc() + "```")
    var num = args[1]
    var parse = parseInt(num)
    if ((parse / parse !== 1) || (parseInt(num) < 1) || (parseInt(num) > vote.opt.length)) return msg.channel.send("```Proper command usage is !vote [option number]. Use !vote with no arguments to see current vote.```")
    if (voted.indexOf(msg.author.id) !== -1) return msg.channel.send('```You have already voted!```')
    votes[parse - 1].numvote++
    msg.channel.send('```Vote received! Use !vote to view # of votes!```')
    voted.push(msg.author.id)
  }

  if (rip.startsWithP('endvote')) {
    if (!votes[0]) return;
    if (msg.author.username !== votes[0].author) return msg.channel.send('```You didn\'t start the vote so you can\'t end it!```')
    if (currentvote.length < 1) return msg.channel.send("```No current votes!```")
    msg.channel.send('FINAL VOTES: \n' + votefunc() + '```')
    currentvote = []
    votes = []
    voted = []
  }
  if (rip.startsWithP("exchange")) {
    if (msg.author.id !== '221465443297263618') return msg.channel.send('```Only pootus can doodus```')
    var usage = "```Proper command usage is !exchange [amount] [@user]```"
    var args = msg.content.split(" ")
    if ((!args) || (!args[1])) return msg.channel.send(usage + "1")
    var id = msg.mentions.users.first().id
    var ap = args[1]
    if (ap / ap !== 1) return (usage + "2")
    myFunctions.credits(msg, ap, false, id)

  }
  if (rip.startsWithP('offline')) {
    var members = msg.channel.members.array()
    var string = 'Offline users: \n'
    for (let i = 0; i < members.length; i++) {
      if (members[i].presence.status === 'offline') {

        string += members[i].displayName + '\n'
      }
    }
    msg.channel.send(string, { code: 'http' })
  }

  if (rip.startsWithP("tatsu")) {
    msg.channel.send('never bringing it back')
  }
  if (rip.startsWithP("daily")) {
    myFunctions.senddaily(msg)
  }
  if (rip.startsWithP('blurrybox')) {
    boss = JSON.parse(fs.readFileSync("boss.json", "utf8"))
    if (!boss[msg.author.id] || !boss[msg.author.id] || boss[msg.author.id].tokens < 1) return msg.channel.send(wrap('You don\'t have any tokens! You can collect tokens by using !daily!'))
    var boxType
    var rannum1 = Math.random() * 100
    if (rannum1 <= 70) {
      boxType = 'bad'
      variables.bad++
    }
    if (rannum1 > 70 && rannum1 <= 82) {
      boxType = 'meh'
      variables.meh++
    }
    if (rannum1 > 82) {
      boxType = 'great'
      variables.great++
    }
    fs.writeFile("./variables.json", JSON.stringify(variables), (err) => {
      if (err) console.error(err)
    })
    sendBox(msg, boxType)
    boss[msg.author.id].tokens--
    fs.writeFile("./boss.json", JSON.stringify(boss), (err) => {
      if (err) console.error(err)
    })
  }
  if (rip.startsWithP('score')) {
    myFunctions.sendscore(msg)
  }

  if (rip.startsWithP("notify") || rip.startsWithP('topfeed')) {
    if (msg.member.roles.get('341346528545341440')) return msg.channel.send("You are already being notified!")
    msg.member.addRole('341346528545341440')
    msg.channel.send("You will now be notified when something shows up in <#328365921859010560>!")
    return;
  }

  if (rip.startsWithP('top')) {
    myFunctions.sendtop(msg, 'scores')
  }
  if (rip.startsWithP("alltop")) {
    myFunctions.sendtop(msg, 'scores2')
  }
  if (rip.startsWithP("mycolor")) {
    msg.channel.send(msg.member.displayHexColor)
  }

  if (rip.startsWithP("spookyminds")) {
    msg.channel.send("should not ask for a tag")
  }
  if (rip.startsWithP("whats the sound in be concerned")) {
    msg.channel.send("its the sound in be concerned")
  }
  if (rip.startsWithP("pootforadmin")) {
    msg.channel.send("https://thumb.gyazo.com/thumb/1200/_b41199bfb091c0cfb7f51bb6da5c74a6-png.jpg")
  }
  if (rip.startsWithP("what\'s the sound in be concerned")) {
    msg.channel.send("its the sound in be concerned")
  }
  if (rip.startsWithP('tagstop')) {
    let page = removeCommand(msg.content)
    if (!page) page = 1
    if (parseInt(page) / parseInt(page) !== 1 || parseInt(page) < 1) return msg.channel.send('```Proper command usage is !tagstop (page number)```')
    var array = []
    for (var key in tags) {
      if (tags.hasOwnProperty(key)) {
        var object = tags[key]
        var num = object.num
        var tag = object.tag
        var user = object.user
        var member = msg.guild.members.get(user)
        var tagname = key
        array.push({ tag: tag, num: num, member: member, tagname: tagname })
      }
    }
    array.sort(function (a, b) {
      return parseFloat(a.num) - parseFloat(b.num);
    });
    if ((k + 10 * (page - 1)) > array.length) return msg.channel.send('```Page does not exist!```')
    var k = 0
    var string = ''
    for (let i = array.length - (1 + 10 * (page - 1)); i >= 0; i--) {
      k++
      if (k <= 10) {
        string += (k + 10 * (page - 1)) + '. Tag: ' + array[i].tagname + '//Uses: ' + array[i].num + '\n'
      }
    }
    myFunctions.sendembed(msg, msg.channel, '__**Top Tags**__', string, 3115167, true)
    return;
  }
  if (rip.startsWithP('removetag')) {
    tags = JSON.parse(fs.readFileSync("./tags.json", "utf8"))
    let tagname = removeCommand(msg.content) 
    tagname = tagname.replace(/ /g, "")
    if (!tags[tagname]) return msg.channel.send('`Tag not found!`')
    if (tags[tagname].user !== msg.author.id) return msg.channel.send('`You did not make this tag, so you cannot delete it!`')
    if (tags[tagname] && tags[tagname].user === msg.author.id) {
      delete tags[tagname]
      fs.writeFile("./tags.json", JSON.stringify(tags), (err) => {
        if (err) console.error(err)
      })
      msg.channel.send('`Your tag has been removed!`')
    }
  }
  if (rip.startsWithP('tag')) {
    if (!boss[msg.author.id]) boss[msg.author.id] = {}
    if (!boss[msg.author.id].date) boss[msg.author.id].date = 0
    //in minutes
    var cooldown = 10
    if (msg.channel.id !== '278190769959993344' && !msg.member.roles.get('330877657132564480')) {
      if (Date.now() < boss[msg.author.id].date) return;
    }
    var args = msg.content.split(' ')
    if (!args || !args[1]) return msg.channel.send(wrap('Proper command usage is !tag [tag name]'))
    var tagname = args[1]
    if (tags[tagname] && tags[tagname].tag) {
      msg.channel.send(tags[tagname].tag)
      tags[tagname].num++
      fs.writeFile("./tags.json", JSON.stringify(tags), (err) => {
        if (err) console.error(err)
      })
    }
    if (!tags[tagname]) {
      msg.channel.send(wrap('Tag does not exist!'))
    }
    if (msg.channel.id !== '278190769959993344') {
      boss[msg.author.id].date = Date.now() + (cooldown * 60 * 1000)
      fs.writeFile("./boss.json", JSON.stringify(boss), (err) => {
        if (err) console.error(err)
      })
    }
  }
  if (rip.startsWithP("vee")) {
    var string = "bcdfghjklmnpstwyz"
    var array = string.split("")
    array.push("reee")
    var random = Math.floor(Math.random() * array.length)
    var pick = array[random]
    msg.channel.send(pick + "ee!")
  }
  if (rip.startsWithP("twpush")) {
    if (msg.author.id !== '221465443297263618') return msg.channel.send("you have to be poot. sorry.")
    tw.push('reddit.com')
  }
  if (rip.startsWithP("revive")) {
    msg.channel.send('`Spook has been revived!`')
  }



  if (rip.startsWithP('online')) {
    var j = 0
    var k = 0
    var array = msg.guild.members.array()
    for (let i = 0; i < array.length; i++) {
      if (array[i].presence.status === 'online') j++
      if (array[i].presence.status === 'idle') k++
    }
    msg.channel.send('`There are ' + j + ' members online and ' + k + ' members idle!`')
  }

  if (rip.startsWithP('announcements')) {
    var alreadyHasRole = true
    if (!msg.member.roles.get('357682068785856514')) {
      alreadyHasRole = false
    }
    if (alreadyHasRole) {
      msg.member.removeRole('357682068785856514')
      msg.channel.send(wrap('You no longer are being notified of announcements!'))
      return
    }
    if (!alreadyHasRole) {
      msg.member.addRole('357682068785856514')
      msg.channel.send(wrap('You will now be tagged in all #announcements posts!'))
      return
    }

  }

  if (rip.startsWithP('lyrics')) {
    let search = removeCommand(msg.content)
    if (!search) return msg.channel.send('```Proper command usage is !lyrics [song name and artist]```')
    let rando = ~~(Math.random() * 7)
    genius.search(search).then(function(response) {
      if (!response || !response.hits || !response.hits[0] || !response.hits[0].result) return msg.channel.send('```Song not found!```')
      let result = response.hits[0].result['api_path']
      let ar = result.split('/')
      let id = ar[2]
      msg.channel.send('`Grabbing lyrics...`').then(m => {
        m.delete(3000)
      })
      lyricist.song(id, { fetchLyrics: true }).then(song => {
        if (!song || !song.lyrics) return msg.channel.send('```Song not found!```')
        let thelyrics = song.lyrics.split('\n')
        for (let i = 0; i < thelyrics.length; i++) {
          if (thelyrics[i].startsWith('[')) thelyrics.splice(i,1)
        }
        song.lyrics = thelyrics.join('\n')
        let stanzas = song.lyrics.split('\n\n')
        let index = ~~(Math.random() * stanzas.length)
        let randomstanza = stanzas[index]
        console.log(randomstanza)
        let lines = randomstanza.split('\n')
        let ranindex = randomNum(0, lines.length - 4)
        var toSend = ""
        for (let i = ranindex; i < lines.length; i++) {
          if (i - ranindex < 4) {
            toSend+=lines[i] + '\n'
          }
        }
        toSend = toSend.replace(/"/g, "")
        let canvas = new Canvas.Canvas(800, 600)
        Canvas.registerFont(('./assets/fonts/f.ttf'), { family: 'futura' }); // eslint-disable-line max-len
        console.log('[hereo')
        let ctx = canvas.getContext('2d');
        let img = new Canvas.Image();
  
        img.onload = function() {
          console.log('lyrics bgf')
          ctx.drawImage(img, 0, 0, 800, 600);
          ctx.font = "35px futura"
          ctx.fillStyle = 'white'
          ctx.textAlign = 'center'
          let indlines = toSend.split('\n')
          for (let k = 0; k < indlines.length; k++) {
            
            ctx.fillText(indlines[k], 400, 250 + 50 * k)
          }
          
          msg.channel.sendFile(canvas.toBuffer())
        }
        img.src = 'background2.png'
        
      });
    });
  }

  if (rip.startsWithP('sendfakebox')) {
    sendfakebox(msg)
  }
  if (rip.startsWithP("nakpin")) {
    var options = ["is a napkin", "is NOT a napkin", "is a weeb"]
    var random = Math.floor(Math.random() * 3)
    msg.channel.send(options[random])
  }
  if (rip.startsWithP('general3')) {
    msg.channel.send('`General3 now open!`')
  }
  if (rip.startsWithP('datenow')) {
    msg.channel.send(Date.now())
  }
  if (rip.startsWithP("channelinfo")) {
    var string = removeCommand(msg.content)
    var channels = msg.guild.channels.array()
    for (let i = 0; i < channels.length; i++) {
      if ((channels[i].type === "voice")) {
        msg.channel.send(channels[i].name + "  " + channels[i].id)
      }
    }
  }
  
  if (rip.startsWithP("denotify")) {
    if (!msg.member.roles.get('341346528545341440')) return msg.channel.send("You already do not have notifications for <#328365921859010560> on.")
    msg.member.removeRole('341346528545341440')
    msg.channel.send("You will no longer be notified when something shows up in <#328365921859010560>.")
  }
  if (msg.content.startsWith("!PLEASE ENTER ADMINISTRATOR PASSWORD:")) {
    msg.channel.send("The bot is now dead.")
  }
  if (rip.startsWith(prefix + "suggest")) {
    msg.guild.channels.get(SuggestChannel).send("```http\n SUGGESTION:   " + msg.author.username + " suggested the following: " + removeCommand(msg.content) + "```")
    msg.delete();
    msg.channel.send("Thank you for your submission!")
  }
  if (rip.startsWithP("rate")) {
    let rter = Math.floor((Math.random() * 10) + 1)
    var args = msg.content.substring(6)
    if (!args) return msg.channel.send("Proper command usage is !rate [something]")
    if (args.indexOf("@") !== -1) {
      args = args.replace(/@/g, "")
    }
    msg.channel.send("I would rate " + args + " **" + rter + " / 10!**")
  }

  if (rip.startsWithP("warn")) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("```You must be an Admin or Moderator to use this command```")
    var args = msg.content.split(/[ ]+/);

    if (!args || !args[1] || !msg.mentions || !msg.mentions.users) return msg.channel.send("```Correct command usage is: !warn [user] (warning)```")
    var uid = args[1]
    //check if tag i think
    var check = uid.replace(/<@/g, "*")
    if (check === uid) return msg.channel.send("```Correct command usage is: !warn [user] (warning)```")
    args.shift()
    args.shift()
    var mlop = args.join(" ")
    var tme = Date.now()
    var uidd = uid.replace(/!/g, "")
    sql.run("INSERT INTO warn (userid, warning, date) VALUES (?, ?, ?)", [uidd, mlop, tme]);
    msg.channel.send("```User has been warned!```")
  }
  if (rip.startsWithP("chkwarn")) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send("```You must be an Admin or Moderator to use this command```")
    var args = msg.content.split(/[ ]+/);
    if (!args) return msg.channel.send("```Correct command usage is: !chkwarn [user]```")
    if (!args[1]) return msg.channel.send("```Correct command usage is: !chkwarn [user]```")
    if (!msg.mentions) return msg.channel.send("```Correct command usage is: !chkwarn [user]```")
    if (!msg.mentions.users) return msg.channel.send("```Correct command usage is: !chkwarn [user]```")
    var uid = args[1]
    console.log(uid)
    var check = uid.replace(/<@/g, "*")
    if (check === uid) return msg.channel.send("```Correct command usage is: !chkwarn [user]```")
    var uidd = uid.replace(/!/g, "")
    console.log("uidd  " + uidd)
    sql.all(`SELECT * FROM warn WHERE userid = "${uidd}" ORDER BY date DESC LIMIT 10`).then((rows) => {
      //var usrname = bot.users.get(row.userId).username
      let string = `Warnings: \n \n`;
      for (let row of rows) {
        var m = Math.floor((Math.floor((Date.now() - row.date) / 1000)) / 60)
        var pool = "Some time"
        if (m < 60) {
          pool = `${m} minutes`
        } else if (m > 60) {
          var h = Math.floor(m / 60)
          var mm = m % 60
          pool = `${h} hour(s) and ${mm} minutes`
        }
        string += (`Warning: ${row.warning}\n  Date: ${pool} ago\n`);
      }
      console.log(string)
      msg.channel.send("```http" + "\n" + string + "```");
    });
  }

  if (rip.startsWithP('fairlycommands')) {
    if (!msg.member.hasPermission('BAN_MEMBERS')) return msg.channel.send('`You have to be an admin or moderator to use this!`')
    var role = msg.guild.roles.get('283272728084086784')
    if (fairlycankick) {
      fairlycankick = false
      role.setPermissions([])
      var channel = msg.guild.channels.get(fairlyaudit)
      var channels = msg.guild.channels.array()
      channel.setPosition(channels.length - 8)
      msg.channel.send('`Fairly Locals can no longer use !kick, !timeout, or !untimeout`')
      return;
    }
    if (!fairlycankick) {
      fairlycankick = true
      role.setPermissions(['MANAGE_MESSAGES'])
      var channel = msg.guild.channels.get(fairlyaudit)
      channel.setPosition(0)
      msg.channel.send('`Fairly Locals can now use !kick, !timeout, or !untimeout`')
      return;
    }
  }

  function canKick(msg) {
    if (msg.member.hasPermission('BAN_MEMBERS') || ((msg.member.roles.get('283272728084086784')) && (fairlycankick)) || (msg.member.roles.get('330877657132564480'))) return true
    return false
  }

  function fairlyused(msg) {
    if (msg.member.roles.get('283272728084086784') && (!msg.member.roles.get('330877657132564480'))) return true
    return false
  }
  if (rip.startsWithP("timeout")) {
    if (!canKick(msg)) return msg.channel.send("You must be an Admin or Moderator to use this command")
    var args = msg.content.split(/[ ]+/);
    var time = Date.now() + (args[2] * 1000 * 60)
    if (args[2] <= 0 || !args[2] || args[2] / args[2] !== 1) {
      msg.channel.send("```Proper command usage is !timeout [@user] [# of minutes]```")
      return
    }
    var uid = args[1]
    uid = uid.replace(/<|@|!|>/g, "")
    let guild = msg.guild;
    let RoleMember = guild.member(msg.mentions.users.first());
    // console.log(RoleMember + "   ROLE MEMBER");
    // muted.push(args[1]);
    // console.log(muted);
    if (!RoleMember) return msg.channel.send("```Proper command usage is !timeout [@user] [# of minutes]```")
    if (RoleMember.hasPermission('BAN_MEMBERS')) return msg.channel.send("```You cannot timeout another Admin or Moderator```")
    RoleMember.addRole(TO);
    msg.channel.send("```User has been sent to Time Out for: " + args[2] + " minutes```");
    sql.get(`DELETE FROM timeout WHERE userId = "${uid}"`)
    sql.run("INSERT INTO timeout (userid, time) VALUES (?, ?)", [uid, time]);

    if (fairlyused(msg)) {
      myFunctions.sendembed(msg, msg.guild.channels.get(fairlyaudit), 'Fairly Local used command!', false, 12845311)
    }
  }
  if (msg.content.startsWith(prefix + "uptime")) {
    var time = Date.now()
    var sec = Math.floor((time - bTime) / 1000)
    var min, hour, day
    if (sec >= 60) {
      min = Math.floor(sec / 60)
      sec = sec % 60
    }
    if (min >= 60) {
      hour = Math.floor(min / 60)
      min = min % 60
    }
    if (hour >= 24) {
      day = Math.floor(hour / 24)
      hour = hour % 24
    }
    msg.channel.send("**Bot has been running for: " + day + " day(s) " + hour + " hour(s) " + min + " minute(s) " + sec + " seconds**")
  }
  if (msg.content.startsWith(prefix + 'listallmembers')) {
    msg.channel.send('```Admins ;)```').then(m => {
      var timeout = 1500
      var members = msg.guild.roles.get('269660541738418176').members.array()
      var i = 100
      var xyz = setInterval(() => {
        if (i >= members.length) clearInterval(xyz)
        m.edit('`' + members[i].displayName + '`')
        i++
      }, timeout)
    })
  }
  if (msg.content.startsWith(prefix + "delete")) {
    // msg.channel.send("msg you sent id: " + msg.id)
    if ((!msg.member.roles.get("269660563368312833")) && (!msg.member.roles.get("323555864646647808")) && (!msg.member.roles.get("292831640470683658"))) return msg.channel.send("You must be an Admin or Moderator to use this command")
    var args = msg.content.split(' ');
    if ((!args[1]) || (args[1] / args[1] !== 1)) return msg.channel.send("```Proper command usage is !delete [number of messages to delete]```")
    message = parseInt(args[1]);
    msg.delete().then((msg) => {
      if (message === 1) {
        var todelete = msg.channel.lastMessageID
        var arra = msg.channel.messages.array()
        var td = arra[arra.length - 1]
        td.delete()
        msg.channel.send("```1 message has been deleted```")
        return;
      }
      msg.channel.bulkDelete(message)
      msg.channel.send("```" + message + " messages have been deleted```")
    })
  }
  //maybe finish for 2.0
  // if (msg.content.startsWithP('attack')) {
  //   if (!variables || !variables[currentBoss]) return msg.channel.send(wrap('Blurryface is away...'))
  //   if (boss[msg.author.id] <= 0) return msg.channel.send(wrap('You don\'t have any attacks remaining!'))
  //   var currentHealth = boss['health']
  //   var randomDamage = randomNum(30, 100, false)
  //   var newHealth =  parseInt(boss['health']) - randomDamage
  //
  // }

  if (msg.content.startsWith(prefix + "shop")) {
    let content = msg.content.replace('  ', ' ')
    var args = content.split(' ')
    if ((!args) || (!args[1])) {
      var lox = '1. Custom !daily banner//3,000\n2. Custom level up message//2,000\n3. Fairly Locals Role//10,000 & level 25 & 25 !daily uses\n4. Custom OMSP drawing//7,000\n5. "Rich" badge and role//20,000\n6. Song roles // 3,000 each & level 21\n7. Custom tag! (!tag command) // 1,000 each\n#Use \'!shop FL\'to buy the Fairly Locals role!\n#Use \'!shop rich\' to buy the rich role + badge\n#Use \'!shop [song name] to buy a song role\'\n#Available song roles: Heavydirtysoul, Trees, Anathema, Holding on to You, Kitchen Sink'
      myFunctions.sendembed(msg, msg.channel, '__**Shop**__', lox, 3115167, true)
    }
    //TODO: rewrite song roles as switch/case
    //song roles

    //ENABLE 2.0

    if (rip.startsWithP("shop tag")) {
      var amount = 1000
      if (!args || !args[3]) return msg.channel.send(wrap('Proper command usage is !shop tag [tag name] [tag text]'))
      if (msg.content.indexOf('@') !== -1) return msg.channel.send(wrap("Please do not use '@' in tags!"))
      if (msg.content.length >= 1000) return msg.channel.send(wrap('Tags must be less than 1000 characters!'))
      sql.get(`SELECT * FROM daily WHERE userId ="${msg.author.id}"`).then(row => {
        var able = row.xp
        if (able < amount) return msg.channel.send('Not enough credits!')
        var tagname = args[2]
        if (tags[tagname]) return msg.channel.send('Tag already exists!')
        var numOfTags = 0
        for (let key in tags) {
          if (tags.hasOwnProperty(key)) {
            let object = tags[key]
            let user = object.user
            if (user === msg.author.id) {
              numOfTags++
            }
          }
        }
        if (numOfTags >= 5) return msg.channel.send(wrap('You already have 5 tags! If you wish to buy another one, please contact poot to remove your old one (!deletetag coming in future update)'))
        myFunctions.credits(msg, -amount)
        args.shift()
        args.shift()
        args.shift()
        var toTag = args.join(' ')
        tags[tagname] = {}
        tags[tagname].tag = toTag
        tags[tagname].num = 0
        tags[tagname].user = msg.author.id
        fs.writeFile("./tags.json", JSON.stringify(tags), (err) => {
          if (err) console.error(err)
        })
        msg.channel.send('New tag created...\nName: ' + tagname + '\nTag: ' + toTag)
      })
      return;
    }
    if (rip.startsWithP("shop heavydirtysoul") || rip.startsWithP("shop hds")) {
      if (msg.member.roles.get('356625898256203786')) return msg.channel.send('`You already have the Heavydirtysoul role!`')
      var plop = true
      var drop = false
      myFunctions.credits(msg, -3000, plop, drop, 21, '356625898256203786')
    }
    if (rip.startsWithP("shop trees")) {
      if (msg.member.roles.get('356627174054428683')) return msg.channel.send('`You already have the Trees role!`')
      var plop = true
      var drop = false
      myFunctions.credits(msg, -3000, plop, drop, 21, '356627174054428683')
    }
    if (rip.startsWithP("shop anathema")) {
      if (msg.member.roles.get('356627357450240010')) return msg.channel.send('`You already have the Anathema role!`')
      var plop = true
      var drop = false
      myFunctions.credits(msg, -3000, plop, drop, 21, '356627357450240010')
    }
    if (rip.startsWithP("shop hoty") || rip.startsWithP("shop holding on to you")) {
      if (msg.member.roles.get('356627412647411732')) return msg.channel.send('`You already have the Holding on to You role!`')
      var plop = true
      var drop = false
      myFunctions.credits(msg, -3000, plop, drop, 21, '356627412647411732')
    }
    if (rip.startsWithP("shop kitchen sink")) {
      if (msg.member.roles.get('356627584727121920')) return msg.channel.send('`You already have the Kitchen Sink role!`')
      var plop = true
      var drop = false
      myFunctions.credits(msg, -3000, plop, drop, 21, '356627584727121920')
    }
    //
    if (rip.startsWithP("shop fl")) {
      if (msg.member.roles.get('283272728084086784')) return msg.channel.send('`You already have Fairly Locals!`')
      if (!dailynum[msg.author.id]) dailynum[msg.author.id] = 0
      if (dailynum[msg.author.id] < 25) return msg.channel.send('```You need to have used !daily 25 times in order to buy Fairly Locals!\n\n Note: This did not retroactively add old !daily uses to the count. If you feel you have used !daily more than 25 times, feel free to contact poot to allow use.```')
      var plop = true
      var drop = false
      myFunctions.credits(msg, -10000, plop, drop, 25, '283272728084086784')
    }
    if (rip.startsWithP("shop rich")) {
      if (msg.member.roles.get('350036748404785153')) return msg.channel.send('`You already have the Rich role / badge!`')
      var plop = 40
      myFunctions.credits(msg, -20000, plop)
    }
  }
  /////////////////////////
  var albumRoles = [BF, VSL, RAB, ST, NPI]
  var songRoles = ['356625898256203786', '356627174054428683', '356627357450240010', '356627412647411732', '356627584727121920']
  function addRemove(member, role, array) {
    for (let i = 0; i < array.length; i++) {
      member.removeRole(array[i])
    }
    member.addRole(role)
  }
  //////////////////////////
  if (msg.content.startsWith(prefix + "help")) {
    // msg.channel.send("```" + "!role [album name] for self-role" + '\n' + "!suggest [suggestion] to anonymously send in a suggestion (message will auto-delete)" + '\n' + "!rate [object to rate] to rate something between 1 and 10" + '\n' + "!avatar [@user or just !avatar for self] to display profile picture of that user" + '\n' + "!top to view Leaderboard" + '\n' + "!score to view your score and other info" + '\n' + "!daily to receive daily credits" + '\n' + "!cookie [@user] to give someone cookies [!chkcookies to see how many cookies you have]\n!mhelp to see music commands!\n!emojilist [page] to see the server emojis!```")
    dm(msg, '**List of commands can be found here!**\nhttps://sites.google.com/view/pootbotcommands')

  }
  if (rip.startsWithP("mhelp")) {
    //msg.channel.send("```!play [YouTube search or URL] to find a song and add it to the queue\n!plist [PLALIST url] to add all of a playlist to the queue\n!pause to pause song\n!resume to resume song\n!queue to see queue\n!skip to skip the current song\n!splice [queued song number] to remove a specific song from queue\n!shuffle to shuffle queue\n!swap to swap two items in queue\n!status to view current song time\n!leave to clear the queue and leave voice channel```")
    msg.channel.sendFile("albums/musichelp.png")
  }
  if (msg.content === prefix + "poot") {
    msg.channel.send('is the best ANNNNDDDD.... : \n');
    msg.channel.sendFile('https://images.discordapp.net/attachments/269657133673349120/336365031983939594/1280px-Snowman_on_frozen_lake.jpg')
  } else
    if (rip.startsWithP("role")) {
      var role = removeCommand(rip)
      var give; //role that will be given
      switch (role.substring(0, 4)) {
        case 'blur':
        case 'bf':
          give = BF
          break;
        case 'vess':
        case 'vsl':
          give = VSL
          break;
        case 'regi':
        case 'rab':
          give = RAB
          break;
        case 'st':
        case 'self':
        case 's/t':
          give = ST
          break;
        case 'no p':
        case 'npi':
          give = NPI
          break;
        default:
          give = null
      }
      if (!give) return msg.channel.send('```Proper command usage is !role [album name]```')
      if (albumRoles.indexOf(give) !== -1) {
        addRemove(msg.member, give, albumRoles)
      }
      msg.channel.send('```You now have the ' + msg.guild.roles.get(give).name + ' role!```')
    }
  if (rip.startsWithP('badges')) {
    var badges = JSON.stringify(base[msg.author.id])
    var badges3 = badges.replace(/{|}/g, "")
    var b4 = badges3.replace(/1,/g, ' true \n')
    var b5 = b4.replace(/0,/g, ' false \n')
    var b6 = b5.replace(/:1/g, ': true\n')
    var b7 = b6.replace(/:0/g, ': false\n')
    msg.channel.send('```http\nBadges: \n\n' + b7 + '```')
  }
});

bot.on(`messageUpdate`, (oMessage, nMessage) => {
  if (nMessage.author.bot) return;
  let xd = nMessage.content.toLowerCase()
  if (nMessage.content.indexOf("http:") !== -1) return;
  if (oMessage.content === nMessage.content) return;
  var stringy = oMessage
  myFunctions.sendembed(nMessage, nMessage.guild.channels.get(DeleteChannel), 'Message edited!', oMessage, 9895829)
  const swearWords = ["chink", "tranny", "fag", "dyke", "nigger", "dike", "kike"];
  if (swearWords.some(word => xd.includes(word))) {
    let guild = nMessage.guild;
    nMessage.channel.send("Please refrain from using slurs. A copy of your message has been sent to the Admins.")
    myFunctions.sendembed(nMessage, nMessage.guild.channels.get(DeleteChannel), 'Slurs detected!', false, 16711680)
  }
})
bot.on('messageReactionAdd', reaction => {
  var msg = reaction.message
  console.log(reaction.emoji.identifier + "  identifier")
  if (msg.channel.id === '310973351311179776') {
    var reactions = msg.reactions.array()
    var emoji1 = 0
    var emoji2 = 0
    for (let i = 0; i < reactions.length; i++) {
      var reaction3 = reactions[i]
      if (reaction3.emoji.name === "⬆") {
        emoji1 = reaction3.count - 1
      }
      if (reaction3.emoji.name === "⬇") {
        emoji2 = reaction3.count - 1
      }
    }
    if (emoji2 - emoji1 > 4) {
      msg.guild.channels.get('334569251124019201').send('Message deleted by bot!\n' + emoji1 + " likes\n" + emoji2 + "dislikes")
      msg.guild.channels.get('334569251124019201').send(msg.member.displayName)
      msg.delete()
    }
  }
})
bot.on('typingStart', channel => {
  if (rtn) return;
  rtn = true
  setInterval(function () {
    var array = bot.guilds.array()
    var guild = array[0]
    leftmsg = fs.readFileSync(msg1, 'utf8')
    guild.channels.get(DeleteChannel).fetchPinnedMessages().then((data) => {
      var msgs = data.array()
      console.log(msgs[2].content)
      var leftserver = "```Last 10 Users to have left the server: \n \n"
      // msg.channel.send(msgs.length)
      var sentmsgs = 0
      for (let i = 0; i < msgs.length; i++) {
        var yess = msgs[i].content.replace(/```/g, "")
        if ((yess.startsWith("User ")) && (sentmsgs < 10)) {
          leftserver += yess + '\n'
          sentmsgs++
        }
      }
      if (!leftmsg) {
        channel.guild.channels.get(DeleteChannel).send(leftserver + "```").then((msg) => {
          fs.writeFile(msg1, msg.id)
        })
      }
      channel.guild.channels.get(DeleteChannel).fetchMessage(leftmsg).then((msg) => {
        if (!msg) {
          msg.guild.channels.get(DeleteChannel).send(leftserver + "```").then((msg) => {
            fs.writeFile(msg1, msg.id)
          })
        }
        //  msg.edit(leftserver + "```")
      })
    })
    console.log("CHECKING FOR REMINDERS AND TWEETS")
    twite()
    var d = new Date();
    var n = d.getHours();
    var y = d.getMinutes()
    var z = d.getSeconds()
    console.log(n + "h" + y + "m" + z + "s")
    if ((n === 22) && (y === 0) && (z <= 10)) {
      // top2()
      setTimeout(() => {
        if (!xyu) return console.log("what")
        if (!xyu[0]) return console.log("what2")
        if (!xyu[1]) return console.log("what3")
        channel.guild.channels.get('328365921859010560').send("**DAILY TOP TWO REDDIT POSTS:**\n" + xyu[0] + "\n" + xyu[1])

      }, 30000)

    }
    sql.all(`SELECT * FROM remind WHERE hour < 25`).then(rows => {
      for (let row of rows) {
        let t1 = row.time
        let t2 = Date.now()
        if (t1 < t2) {
          let jkl = bot.users.get(row.userID)
          if (!jkl) {
            console.log(row.userID)
          }
          //channel.send("sent to " + jkl.username)
          jkl.createDM().then(DMCHannel => {
            DMCHannel.send("REMINDER: You are being reminded that you said the following: **" + row.txt + "**")
            sql.get(`DELETE FROM remind WHERE userID = "${row.userID}" AND time = "${row.time}"`)
            console.log("Reminder sent!")
          })
        } else {

        }
      }
    })
    sql.all(`SELECT * FROM timeout`).then(rows => {
      for (let row of rows) {
        let t1 = row.time
        let t2 = Date.now()
        if (t1 < t2) {
          console.log(row)
          let guild = channel.guild;
          let RoleMember = guild.members.get(row.userid.toString());
          if (!RoleMember) {
            sql.run(`DELETE FROM timeout WHERE userid=${row.userid}`)
          }
          RoleMember.removeRole(TO)
          //channel.send("sent to " + jkl.username)
          // if (RoleMember) {
          //   RoleMember.removeRole(TO);
          // }

          var user = RoleMember.user
          user.createDM().then(DMCHannel => {
            DMCHannel.send('Your timeout has ended!')
          })
          sql.get(`DELETE FROM timeout WHERE userId = "${row.userid}"`)
        }
      }
    })
    if (tw.length > 0) {
      if (tw[0].indexOf('reddit') !== -1) {
        channel.guild.channels.get('328365921859010560').send(tw[0])
      }
      if (tw[0].indexOf('reddit') === -1) {
        channel.guild.channels.get('328365921859010560').send(tw[0] + " <@&341346528545341440>")
      }
      tw.shift()
    }
    if (dms.length > 0) {
      var text0 = "DMS:\n"
      for (let i = 0; i < dms.length; i++) {
        text0 += dms[i] + "\n"
      }
      var guild = channel.guild
      var user = guild.members.get("221465443297263618").user
      user.createDM().then(DMCHannel => {
        DMCHannel.send(text0)
        dms = []
      })
    }
  }, 10000)
})

// setInterval(function() {
//   console.log("CHECKING FOR YOUTUBE VIDEOS")
//   var array = bot.guilds.array()
//   var guild = array[0]

//   ypi.playlistInfo("AIzaSyBia7BImDvexwck1wLil-rp68yvDmV6Yto", "UUBQZwaNPFfJ1gZ1fLZpAEGw", function(playlistItems) {
//     var text = fs.readFileSync('files/youtube.txt', 'utf8')
//     for (let i = 0; i < 5; i++) {
//       var link3 = 'https://www.youtube.com/watch?v=' + playlistItems[i].resourceId.videoId
//       if (text.indexOf(link3) === -1) {
//         fs.appendFile('files/youtube.txt', link3)
//         tw.push(link3)
//       }
//     }
//   });
// }, 600000)

var job = true
setInterval(function () {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  if (h !== lotHour) return;
  if (m !== 0) return;
  if ((s < 10) && (job)) {
    console.log('yes')
    job = false
    setTimeout(() => {
      job = true
    }, 15000)
    var array2 = bot.guilds.array()
    var guild = array2[0]
    var channel = guild.channels.get('278190769959993344')
    var array = []
    var winnings = 0
    for (var key in lottery) {
      if (lottery.hasOwnProperty(key)) {
        var num = parseInt(lottery[key].amount)
        winnings += parseInt(lottery[key].amount)
        for (let i = 0; i < num; i++) {
          array.push(lottery[key].user)
        }
      }
    }
    if (variables.twentyfour) {
      winnings = winnings * 1.5
    }
    // channel.send(array.length + ' array length <@!221465443297263618>')
    var random = ~~(Math.random() * array.length)
    var ranindex = array[random]
    // channel.send('User <@' + ranindex + '> wins!')
    var member = guild.members.get(ranindex)
    var plop = false
    winnings = winnings
    channel.send(winnings)
    myFunctions.credits(channel, winnings, plop, ranindex)
    lottery = {}
    fs.writeFile("./lottery.json", JSON.stringify(lottery), (err) => {
      if (err) console.error(err)
    })
    var d = new Date();
    var h = d.getHours();
    var rand = ~~(Math.random() * 12) + 1
    variables.twentyfour = false
    if (Math.random() <= 0.1) {
      rand = 24
      variables.twentyfour = true
    }
    lotHour = (h + rand) % 24
    var toSend = '**New lottery drawing in ' + rand + ' hours!** Winner was <@' + member.user.id + '> and they won ' + winnings + ' credits!'
    // if (rand === 24) {
    //   variables.twentyfour = true
    //   toSend = '**New lottery drawing in ' + rand + ' hours! 1.5x CREDITS!!** Winner was <@' + member.user.id + '> and they won ' + winnings + ' credits!'
    // }
    variables.time = lotHour
    fs.writeFile("./variables.json", JSON.stringify(variables), (err) => {
      if (err) console.error(err)
    })
    channel.send(toSend).then(m => {
      m.channel.fetchPinnedMessages().then((data) => {
        var arra = data.array()
        for (let i = 0; i < arra.length; i++) {
          if (arra[i].content.indexOf('New lottery drawing') !== -1) {
            arra[i].unpin()
          }
        }
      })
      m.pin()

    })
  }
}, 1000)
setInterval(function () {
  console.log("CHECKING FOR STICKIED POSTS AND IG POSTS")
  instagramPosts('tylerrjoseph')
    .then(posts => {
      for (let i = 0; i < posts.length; i++) {
        var link3 = 'https://www.instagram.com/p/' + posts[i].id
        console.log(link3)
        var text = fs.readFileSync(myFile, 'utf8')
        if (text.indexOf(link3) === -1) {
          fs.appendFile(myFile, link3)
          tw.push(link3)
        }
      }
    })
    .catch(err => {
      console.log(err)
    });
  instagramPosts('twentyonepilots')
    .then(posts => {
      for (let i = 0; i < posts.length; i++) {
        var link3 = 'https://www.instagram.com/p/' + posts[i].id
        var text = fs.readFileSync(myFile, 'utf8')
        if (text.indexOf(link3) === -1) {
          fs.appendFile(myFile, link3)
          tw.push(link3)
        }
      }
    })
    .catch(err => {
      console.log(err)
    });
  instagramPosts('joshuadun')
    .then(posts => {
      for (let i = 0; i < posts.length; i++) {
        var link3 = 'https://www.instagram.com/p/' + posts[i].id
        var text = fs.readFileSync(myFile, 'utf8')
        if (text.indexOf(link3) === -1) {
          fs.appendFile(myFile, link3)
          tw.push(link3)
        }
      }
    })
    .catch(err => {
      console.log(err)
    });
  instagramPosts('jennaajoseph')
    .then(posts => {
      for (let i = 0; i < posts.length; i++) {
        var link3 = 'https://www.instagram.com/p/' + posts[i].id
        var text = fs.readFileSync(myFile, 'utf8')
        if (text.indexOf(link3) === -1) {
          fs.appendFile(myFile, link3)
          tw.push(link3)
        }
      }
    })
    .catch(err => {
      console.log(err)
    });
}, 50000)

function twite() {
  T.get('statuses/user_timeline', { user_id: '221412285', count: 5 }, function (err, data, response) {
    // console.log(data)
    for (let i = 0; i < data.length - 1; i++) {
      var link = "https://twitter.com/" + data[i].user.screen_name + "/status/" + data[i].id_str
      var text = fs.readFileSync(myFile, 'utf8')
      if (text.indexOf(link) !== -1) {
        console.log("Already there mate!")
        return;
      }
      tw.push(link)
      fs.appendFile(myFile, link)
    }
  })
  T.get('statuses/user_timeline', { user_id: '16712746', count: 5 }, function (err, data, response) {
    for (let i = 0; i < data.length - 1; i++) {
      var link = "https://twitter.com/" + data[i].user.screen_name + "/status/" + data[i].id_str
      var text = fs.readFileSync(myFile, 'utf8')
      if (text.indexOf(link) !== -1) {
        console.log("Already there mate!")
        return;
      }
      tw.push(link)
      fs.appendFile(myFile, link)
    }
  })
  T.get('statuses/user_timeline', { user_id: '59325073', count: 5 }, function (err, data, response) {
    // console.log(data)
    for (i = 0; i < data.length - 1; i++) {
      var link = "https://twitter.com/" + data[i].user.screen_name + "/status/" + data[i].id_str
      var text = fs.readFileSync(myFile, 'utf8')
      if (text.indexOf(link) !== -1) {
        console.log("Already there mate!")
        return;
      }
      tw.push(link)
      fs.appendFile(myFile, link)
    }
  })
}

function top2() {
  xyu = []
  snooper.watcher.getListingWatcher('twentyonepilots', opt2)
    .on('item', function (post, error) {
      if (error) return error
      setTimeout(() => {
        var link3 = "http://www.reddit.com" + post.data.permalink
        xyu.push(link3)
        console.log(xyu.length)
      })
    })
    .on('error', console.error)
}

//Bot Token below (private stuff, kids. Don't share with anyone)
bot.login('MzU2OTcyOTA3Mjc4MzY4Nzcw.DJjIrA.0IIxsttMTn8rVLgTMvnT1l1obl8');
process.on('exit', (code) => {
  console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', function (err) {
  console.error((new Date).toUTCString() + ' uncaughtException:', err.message)
  console.error(err.stack)

})


var emojis = '🀄🃏🅰🅱🅾🅿🆎🆑🆒🆓🆔🆕🆖🆗🆘🆙🆚🇦🇨🇦🇩🇦🇪🇦🇫🇦🇬🇦🇮🇦🇱🇦🇲🇦🇴🇦🇶🇦🇷🇦🇸🇦🇹🇦🇺🇦🇼🇦🇽🇦🇿🇦🇧🇦🇧🇧🇧🇩🇧🇪🇧🇫🇧🇬🇧🇭🇧🇮🇧🇯🇧🇱🇧🇲🇧🇳🇧🇴🇧🇶🇧🇷🇧🇸🇧🇹🇧🇻🇧🇼🇧🇾🇧🇿🇧🇨🇦🇨🇨🇨🇩🇨🇫🇨🇬🇨🇭🇨🇮🇨🇰🇨🇱🇨🇲🇨🇳🇨🇴🇨🇵🇨🇷🇨🇺🇨🇻🇨🇼🇨🇽🇨🇾🇨🇿🇨🇩🇪🇩🇬🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇩🇪🇦🇪🇨🇪🇪🇪🇬🇪🇭🇪🇷🇪🇸🇪🇹🇪🇺🇪🇫🇮🇫🇯🇫🇰🇫🇲🇫🇴🇫🇷🇫🇬🇦🇬🇧🇬🇩🇬🇪🇬🇫🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇵🇬🇶🇬🇷🇬🇸🇬🇹🇬🇺🇬🇼🇬🇾🇬🇭🇰🇭🇲🇭🇳🇭🇷🇭🇹🇭🇺🇭🇮🇨🇮🇩🇮🇪🇮🇱🇮🇲🇮🇳🇮🇴🇮🇶🇮🇷🇮🇸🇮🇹🇮🇯🇪🇯🇲🇯🇴🇯🇵🇯🇰🇪🇰🇬🇰🇭🇰🇮🇰🇲🇰🇳🇰🇵🇰🇷🇰🇼🇰🇾🇰🇿🇰🇱🇦🇱🇧🇱🇨🇱🇮🇱🇰🇱🇷🇱🇸🇱🇹🇱🇺🇱🇻🇱🇾🇱🇲🇦🇲🇨🇲🇩🇲🇪🇲🇫🇲🇬🇲🇭🇲🇰🇲🇱🇲🇲🇲🇳🇲🇴🇲🇵🇲🇶🇲🇷🇲🇸🇲🇹🇲🇺🇲🇻🇲🇼🇲🇽🇲🇾🇲🇿🇲🇳🇦🇳🇨🇳🇪🇳🇫🇳🇬🇳🇮🇳🇱🇳🇴🇳🇵🇳🇷🇳🇺🇳🇿🇳🇴🇲🇴🇵🇦🇵🇪🇵🇫🇵🇬🇵🇭🇵🇰🇵🇱🇵🇲🇵🇳🇵🇷🇵🇸🇵🇹🇵🇼🇵🇾🇵🇶🇦🇶🇷🇪🇷🇴🇷🇸🇷🇺🇷🇼🇷🇸🇦🇸🇧🇸🇨🇸🇩🇸🇪🇸🇬🇸🇭🇸🇮🇸🇯🇸🇰🇸🇱🇸🇲🇸🇳🇸🇴🇸🇷🇸🇸🇸🇹🇸🇻🇸🇽🇸🇾🇸🇿🇸🇹🇦🇹🇨🇹🇩🇹🇫🇹🇬🇹🇭🇹🇯🇹🇰🇹🇱🇹🇲🇹🇳🇹🇴🇹🇷🇹🇹🇹🇻🇹🇼🇹🇿🇹🇺🇦🇺🇬🇺🇲🇺🇳🇺🇸🇺🇾🇺🇿🇺🇻🇦🇻🇨🇻🇪🇻🇬🇻🇮🇻🇳🇻🇺🇻🇼🇫🇼🇸🇼🇽🇰🇽🇾🇪🇾🇹🇾🇿🇦🇿🇲🇿🇼🇿🈁🈂🈚🈯🈲🈳🈴🈵🈶🈷🈸🈹🈺🉐🉑🌀🌁🌂🌃🌄🌅🌆🌇🌈🌉🌊🌋🌌🌍🌎🌏🌐🌑🌒🌓🌔🌕🌖🌗🌘🌙🌚🌛🌜🌝🌞🌟🌠🌡🌤🌥🌦🌧🌨🌩🌪🌫🌬🌭🌮🌯🌰🌱🌲🌳🌴🌵🌶🌷🌸🌹🌺🌻🌼🌽🌾🌿🍀🍁🍂🍃🍄🍅🍆🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🍔🍕🍖🍗🍘🍙🍚🍛🍜🍝🍞🍟🍠🍡🍢🍣🍤🍥🍦🍧🍨🍩🍪🍫🍬🍭🍮🍯🍰🍱🍲🍳🍴🍵🍶🍷🍸🍹🍺🍻🍼🍽🍾🍿🎀🎁🎂🎃🎄🎅🏻🎅🏼🎅🏽🎅🏾🎅🏿🎅🎆🎇🎈🎉🎊🎋🎌🎍🎎🎏🎐🎑🎒🎓🎖🎗🎙🎚🎛🎞🎟🎠🎡🎢🎣🎤🎥🎦🎧🎨🎩🎪🎫🎬🎭🎮🎯🎰🎱🎲🎳🎴🎵🎶🎷🎸🎹🎺🎻🎼🎽🎾🎿🏀🏁🏂🏻🏂🏼🏂🏽🏂🏾🏂🏿🏂🏃🏻‍♀️🏃🏻‍♂️🏃🏻🏃🏼‍♀️🏃🏼‍♂️🏃🏼🏃🏽‍♀️🏃🏽‍♂️🏃🏽🏃🏾‍♀️🏃🏾‍♂️🏃🏾🏃🏿‍♀️🏃🏿‍♂️🏃🏿🏃‍♀️🏃‍♂️🏃🏄🏻‍♀️🏄🏻‍♂️🏄🏻🏄🏼‍♀️🏄🏼‍♂️🏄🏼🏄🏽‍♀️🏄🏽‍♂️🏄🏽🏄🏾‍♀️🏄🏾‍♂️🏄🏾🏄🏿‍♀️🏄🏿‍♂️🏄🏿🏄‍♀️🏄‍♂️🏄🏅🏆🏇🏻🏇🏼🏇🏽🏇🏾🏇🏿🏇🏈🏉🏊🏻‍♀️🏊🏻‍♂️🏊🏻🏊🏼‍♀️🏊🏼‍♂️🏊🏼🏊🏽‍♀️🏊🏽‍♂️🏊🏽🏊🏾‍♀️🏊🏾‍♂️🏊🏾🏊🏿‍♀️🏊🏿‍♂️🏊🏿🏊‍♀️🏊‍♂️🏊🏋🏻‍♀️🏋🏻‍♂️🏋🏻🏋🏼‍♀️🏋🏼‍♂️🏋🏼🏋🏽‍♀️🏋🏽‍♂️🏋🏽🏋🏾‍♀️🏋🏾‍♂️🏋🏾🏋🏿‍♀️🏋🏿‍♂️🏋🏿🏋️‍♀️🏋️‍♂️🏋🏌🏻‍♀️🏌🏻‍♂️🏌🏻🏌🏼‍♀️🏌🏼‍♂️🏌🏼🏌🏽‍♀️🏌🏽‍♂️🏌🏽🏌🏾‍♀️🏌🏾‍♂️🏌🏾🏌🏿‍♀️🏌🏿‍♂️🏌🏿🏌️‍♀️🏌️‍♂️🏌🏍🏎🏏🏐🏑🏒🏓🏔🏕🏖🏗🏘🏙🏚🏛🏜🏝🏞🏟🏠🏡🏢🏣🏤🏥🏦🏧🏨🏩🏪🏫🏬🏭🏮🏯🏰🏳️‍🌈🏳🏴‍☠️🏴🏵🏷🏸🏹🏺🏻🏼🏽🏾🏿🐀🐁🐂🐃🐄🐅🐆🐇🐈🐉🐊🐋🐌🐍🐎🐏🐐🐑🐒🐓🐔🐕🐖🐗🐘🐙🐚🐛🐜🐝🐞🐟🐠🐡🐢🐣🐤🐥🐦🐧🐨🐩🐪🐫🐬🐭🐮🐯🐰🐱🐲🐳🐴🐵🐶🐷🐸🐹🐺🐻🐼🐽🐾🐿👀👁‍🗨👁👂🏻👂🏼👂🏽👂🏾👂🏿👂👃🏻👃🏼👃🏽👃🏾👃🏿👃👄👅👆🏻👆🏼👆🏽👆🏾👆🏿👆👇🏻👇🏼👇🏽👇🏾👇🏿👇👈🏻👈🏼👈🏽👈🏾👈🏿👈👉🏻👉🏼👉🏽👉🏾👉🏿👉👊🏻👊🏼👊🏽👊🏾👊🏿👊👋🏻👋🏼👋🏽👋🏾👋🏿👋👌🏻👌🏼👌🏽👌🏾👌🏿👌👍🏻👍🏼👍🏽👍🏾👍🏿👍👎🏻👎🏼👎🏽👎🏾👎🏿👎👏🏻👏🏼👏🏽👏🏾👏🏿👏👐🏻👐🏼👐🏽👐🏾👐🏿👐👑👒👓👔👕👖👗👘👙👚👛👜👝👞👟👠👡👢👣👤👥👦🏻👦🏼👦🏽👦🏾👦🏿👦👧🏻👧🏼👧🏽👧🏾👧🏿👧👨🏻‍🌾👨🏻‍🍳👨🏻‍🎓👨🏻‍🎤👨🏻‍🎨👨🏻‍🏫👨🏻‍🏭👨🏻‍💻👨🏻‍💼👨🏻‍🔧👨🏻‍🔬👨🏻‍🚀👨🏻‍🚒👨🏻‍⚕️👨🏻‍⚖️👨🏻‍✈️👨🏻👨🏼‍🌾👨🏼‍🍳👨🏼‍🎓👨🏼‍🎤👨🏼‍🎨👨🏼‍🏫👨🏼‍🏭👨🏼‍💻👨🏼‍💼👨🏼‍🔧👨🏼‍🔬👨🏼‍🚀👨🏼‍🚒👨🏼‍⚕️👨🏼‍⚖️👨🏼‍✈️👨🏼👨🏽‍🌾👨🏽‍🍳👨🏽‍🎓👨🏽‍🎤👨🏽‍🎨👨🏽‍🏫👨🏽‍🏭👨🏽‍💻👨🏽‍💼👨🏽‍🔧👨🏽‍🔬👨🏽‍🚀👨🏽‍🚒👨🏽‍⚕️👨🏽‍⚖️👨🏽‍✈️👨🏽👨🏾‍🌾👨🏾‍🍳👨🏾‍🎓👨🏾‍🎤👨🏾‍🎨👨🏾‍🏫👨🏾‍🏭👨🏾‍💻👨🏾‍💼👨🏾‍🔧👨🏾‍🔬👨🏾‍🚀👨🏾‍🚒👨🏾‍⚕️👨🏾‍⚖️👨🏾‍✈️👨🏾👨🏿‍🌾👨🏿‍🍳👨🏿‍🎓👨🏿‍🎤👨🏿‍🎨👨🏿‍🏫👨🏿‍🏭👨🏿‍💻👨🏿‍💼👨🏿‍🔧👨🏿‍🔬👨🏿‍🚀👨🏿‍🚒👨🏿‍⚕️👨🏿‍⚖️👨🏿‍✈️👨🏿👨‍🌾👨‍🍳👨‍🎓👨‍🎤👨‍🎨👨‍🏫👨‍🏭👨‍👦‍👦👨‍👦👨‍👧‍👦👨‍👧‍👧👨‍👧👨‍👨‍👦‍👦👨‍👨‍👦👨‍👨‍👧‍👦👨‍👨‍👧‍👧👨‍👨‍👧👨‍👩‍👦‍👦👨‍👩‍👦👨‍👩‍👧‍👦👨‍👩‍👧‍👧👨‍👩‍👧👨‍💻👨‍💼👨‍🔧👨‍🔬👨‍🚀👨‍🚒👨‍⚕️👨‍⚖️👨‍✈️👨‍❤️‍👨👨‍❤️‍💋‍👨👨👩🏻‍🌾👩🏻‍🍳👩🏻‍🎓👩🏻‍🎤👩🏻‍🎨👩🏻‍🏫👩🏻‍🏭👩🏻‍💻👩🏻‍💼👩🏻‍🔧👩🏻‍🔬👩🏻‍🚀👩🏻‍🚒👩🏻‍⚕️👩🏻‍⚖️👩🏻‍✈️👩🏻👩🏼‍🌾👩🏼‍🍳👩🏼‍🎓👩🏼‍🎤👩🏼‍🎨👩🏼‍🏫👩🏼‍🏭👩🏼‍💻👩🏼‍💼👩🏼‍🔧👩🏼‍🔬👩🏼‍🚀👩🏼‍🚒👩🏼‍⚕️👩🏼‍⚖️👩🏼‍✈️👩🏼👩🏽‍🌾👩🏽‍🍳👩🏽‍🎓👩🏽‍🎤👩🏽‍🎨👩🏽‍🏫👩🏽‍🏭👩🏽‍💻👩🏽‍💼👩🏽‍🔧👩🏽‍🔬👩🏽‍🚀👩🏽‍🚒👩🏽‍⚕️👩🏽‍⚖️👩🏽‍✈️👩🏽👩🏾‍🌾👩🏾‍🍳👩🏾‍🎓👩🏾‍🎤👩🏾‍🎨👩🏾‍🏫👩🏾‍🏭👩🏾‍💻👩🏾‍💼👩🏾‍🔧👩🏾‍🔬👩🏾‍🚀👩🏾‍🚒👩🏾‍⚕️👩🏾‍⚖️👩🏾‍✈️👩🏾👩🏿‍🌾👩🏿‍🍳👩🏿‍🎓👩🏿‍🎤👩🏿‍🎨👩🏿‍🏫👩🏿‍🏭👩🏿‍💻👩🏿‍💼👩🏿‍🔧👩🏿‍🔬👩🏿‍🚀👩🏿‍🚒👩🏿‍⚕️👩🏿‍⚖️👩🏿‍✈️👩🏿👩‍🌾👩‍🍳👩‍🎓👩‍🎤👩‍🎨👩‍🏫👩‍🏭👩‍👦‍👦👩‍👦👩‍👧‍👦👩‍👧‍👧👩‍👧👩‍👩‍👦‍👦👩‍👩‍👦👩‍👩‍👧‍👦👩‍👩‍👧‍👧👩‍👩‍👧👩‍💻👩‍💼👩‍🔧👩‍🔬👩‍🚀👩‍🚒👩‍⚕️👩‍⚖️👩‍✈️👩‍❤️‍👨👩‍❤️‍👩👩‍❤️‍💋‍👨👩‍❤️‍💋‍👩👩👪🏻👪🏼👪🏽👪🏾👪🏿👪👫🏻👫🏼👫🏽👫🏾👫🏿👫👬🏻👬🏼👬🏽👬🏾👬🏿👬👭🏻👭🏼👭🏽👭🏾👭🏿👭👮🏻‍♀️👮🏻‍♂️👮🏻👮🏼‍♀️👮🏼‍♂️👮🏼👮🏽‍♀️👮🏽‍♂️👮🏽👮🏾‍♀️👮🏾‍♂️👮🏾👮🏿‍♀️👮🏿‍♂️👮🏿👮‍♀️👮‍♂️👮👯🏻‍♀️👯🏻‍♂️👯🏻👯🏼‍♀️👯🏼‍♂️👯🏼👯🏽‍♀️👯🏽‍♂️👯🏽👯🏾‍♀️👯🏾‍♂️👯🏾👯🏿‍♀️👯🏿‍♂️👯🏿👯‍♀️👯‍♂️👯👰🏻👰🏼👰🏽👰🏾👰🏿👰👱🏻‍♀️👱🏻‍♂️👱🏻👱🏼‍♀️👱🏼‍♂️👱🏼👱🏽‍♀️👱🏽‍♂️👱🏽👱🏾‍♀️👱🏾‍♂️👱🏾👱🏿‍♀️👱🏿‍♂️👱🏿👱‍♀️👱‍♂️👱👲🏻👲🏼👲🏽👲🏾👲🏿👲👳🏻‍♀️👳🏻‍♂️👳🏻👳🏼‍♀️👳🏼‍♂️👳🏼👳🏽‍♀️👳🏽‍♂️👳🏽👳🏾‍♀️👳🏾‍♂️👳🏾👳🏿‍♀️👳🏿‍♂️👳🏿👳‍♀️👳‍♂️👳👴🏻👴🏼👴🏽👴🏾👴🏿👴👵🏻👵🏼👵🏽👵🏾👵🏿👵👶🏻👶🏼👶🏽👶🏾👶🏿👶👷🏻‍♀️👷🏻‍♂️👷🏻👷🏼‍♀️👷🏼‍♂️👷🏼👷🏽‍♀️👷🏽‍♂️👷🏽👷🏾‍♀️👷🏾‍♂️👷🏾👷🏿‍♀️👷🏿‍♂️👷🏿👷‍♀️👷‍♂️👷👸🏻👸🏼👸🏽👸🏾👸🏿👸👹👺👻👼🏻👼🏼👼🏽👼🏾👼🏿👼👽👾👿💀💁🏻‍♀️💁🏻‍♂️💁🏻💁🏼‍♀️💁🏼‍♂️💁🏼💁🏽‍♀️💁🏽‍♂️💁🏽💁🏾‍♀️💁🏾‍♂️💁🏾💁🏿‍♀️💁🏿‍♂️💁🏿💁‍♀️💁‍♂️💁💂🏻‍♀️💂🏻‍♂️💂🏻💂🏼‍♀️💂🏼‍♂️💂🏼💂🏽‍♀️💂🏽‍♂️💂🏽💂🏾‍♀️💂🏾‍♂️💂🏾💂🏿‍♀️💂🏿‍♂️💂🏿💂‍♀️💂‍♂️💂💃🏻💃🏼💃🏽💃🏾💃🏿💃💄💅🏻💅🏼💅🏽💅🏾💅🏿💅💆🏻‍♀️💆🏻‍♂️💆🏻💆🏼‍♀️💆🏼‍♂️💆🏼💆🏽‍♀️💆🏽‍♂️💆🏽💆🏾‍♀️💆🏾‍♂️💆🏾💆🏿‍♀️💆🏿‍♂️💆🏿💆‍♀️💆‍♂️💆💇🏻‍♀️💇🏻‍♂️💇🏻💇🏼‍♀️💇🏼‍♂️💇🏼💇🏽‍♀️💇🏽‍♂️💇🏽💇🏾‍♀️💇🏾‍♂️💇🏾💇🏿‍♀️💇🏿‍♂️💇🏿💇‍♀️💇‍♂️💇💈💉💊💋💌💍💎💏💐💑💒💓💔💕💖💗💘💙💚💛💜💝💞💟💠💡💢💣💤💥💦💧💨💩💪🏻💪🏼💪🏽💪🏾💪🏿💪💫💬💭💮💯💰💱💲💳💴💵💶💷💸💹💺💻💼💽💾💿📀📁📂📃📄📅📆📇📈📉📊📋📌📍📎📏📐📑📒📓📔📕📖📗📘📙📚📛📜📝📞📟📠📡📢📣📤📥📦📧📨📩📪📫📬📭📮📯📰📱📲📳📴📵📶📷📸📹📺📻📼📽📿🔀🔁🔂🔃🔄🔅🔆🔇🔈🔉🔊🔋🔌🔍🔎🔏🔐🔑🔒🔓🔔🔕🔖🔗🔘🔙🔚🔛🔜🔝🔞🔟🔠🔡🔢🔣🔤🔥🔦🔧🔨🔩🔪🔫🔬🔭🔮🔯🔰🔱🔲🔳🔴🔵🔶🔷🔸🔹🔺🔻🔼🔽🕉🕊🕋🕌🕍🕎🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛🕜🕝🕞🕟🕠🕡🕢🕣🕤🕥🕦🕧🕯🕰🕳🕴🏻🕴🏼🕴🏽🕴🏾🕴🏿🕴🕵🏻‍♀️🕵🏻‍♂️🕵🏻🕵🏼‍♀️🕵🏼‍♂️🕵🏼🕵🏽‍♀️🕵🏽‍♂️🕵🏽🕵🏾‍♀️🕵🏾‍♂️🕵🏾🕵🏿‍♀️🕵🏿‍♂️🕵🏿🕵️‍♀️🕵️‍♂️🕵🕶🕷🕸🕹🕺🏻🕺🏼🕺🏽🕺🏾🕺🏿🕺🖇🖊🖋🖌🖍🖐🏻🖐🏼🖐🏽🖐🏾🖐🏿🖐🖕🏻🖕🏼🖕🏽🖕🏾🖕🏿🖕🖖🏻🖖🏼🖖🏽🖖🏾🖖🏿🖖🖤🖥🖨🖱🖲🖼🗂🗃🗄🗑🗒🗓🗜🗝🗞🗡🗣🗨🗯🗳🗺🗻🗼🗽🗾🗿😀😁😂😃😄😅😆😇😈😉😊😋😌😍😎😏😐😑😒😓😔😕😖😗😘😙😚😛😜😝😞😟😠😡😢😣😤😥😦😧😨😩😪😫😬😭😮😯😰😱😲😳😴😵😶😷😸😹😺😻😼😽😾😿🙀🙁🙂🙃🙄🙅🏻‍♀️🙅🏻‍♂️🙅🏻🙅🏼‍♀️🙅🏼‍♂️🙅🏼🙅🏽‍♀️🙅🏽‍♂️🙅🏽🙅🏾‍♀️🙅🏾‍♂️🙅🏾🙅🏿‍♀️🙅🏿‍♂️🙅🏿🙅‍♀️🙅‍♂️🙅🙆🏻‍♀️🙆🏻‍♂️🙆🏻🙆🏼‍♀️🙆🏼‍♂️🙆🏼🙆🏽‍♀️🙆🏽‍♂️🙆🏽🙆🏾‍♀️🙆🏾‍♂️🙆🏾🙆🏿‍♀️🙆🏿‍♂️🙆🏿🙆‍♀️🙆‍♂️🙆🙇🏻‍♀️🙇🏻‍♂️🙇🏻🙇🏼‍♀️🙇🏼‍♂️🙇🏼🙇🏽‍♀️🙇🏽‍♂️🙇🏽🙇🏾‍♀️🙇🏾‍♂️🙇🏾🙇🏿‍♀️🙇🏿‍♂️🙇🏿🙇‍♀️🙇‍♂️🙇🙈🙉🙊🙋🏻‍♀️🙋🏻‍♂️🙋🏻🙋🏼‍♀️🙋🏼‍♂️🙋🏼🙋🏽‍♀️🙋🏽‍♂️🙋🏽🙋🏾‍♀️🙋🏾‍♂️🙋🏾🙋🏿‍♀️🙋🏿‍♂️🙋🏿🙋‍♀️🙋‍♂️🙋🙌🏻🙌🏼🙌🏽🙌🏾🙌🏿🙌🙍🏻‍♀️🙍🏻‍♂️🙍🏻🙍🏼‍♀️🙍🏼‍♂️🙍🏼🙍🏽‍♀️🙍🏽‍♂️🙍🏽🙍🏾‍♀️🙍🏾‍♂️🙍🏾🙍🏿‍♀️🙍🏿‍♂️🙍🏿🙍‍♀️🙍‍♂️🙍🙎🏻‍♀️🙎🏻‍♂️🙎🏻🙎🏼‍♀️🙎🏼‍♂️🙎🏼🙎🏽‍♀️🙎🏽‍♂️🙎🏽🙎🏾‍♀️🙎🏾‍♂️🙎🏾🙎🏿‍♀️🙎🏿‍♂️🙎🏿🙎‍♀️🙎‍♂️🙎🙏🏻🙏🏼🙏🏽🙏🏾🙏🏿🙏🚀🚁🚂🚃🚄🚅🚆🚇🚈🚉🚊🚋🚌🚍🚎🚏🚐🚑🚒🚓🚔🚕🚖🚗🚘🚙🚚🚛🚜🚝🚞🚟🚠🚡🚢🚣🏻‍♀️🚣🏻‍♂️🚣🏻🚣🏼‍♀️🚣🏼‍♂️🚣🏼🚣🏽‍♀️🚣🏽‍♂️🚣🏽🚣🏾‍♀️🚣🏾‍♂️🚣🏾🚣🏿‍♀️🚣🏿‍♂️🚣🏿🚣‍♀️🚣‍♂️🚣🚤🚥🚦🚧🚨🚩🚪🚫🚬🚭🚮🚯🚰🚱🚲🚳🚴🏻‍♀️🚴🏻‍♂️🚴🏻🚴🏼‍♀️🚴🏼‍♂️🚴🏼🚴🏽‍♀️🚴🏽‍♂️🚴🏽🚴🏾‍♀️🚴🏾‍♂️🚴🏾🚴🏿‍♀️🚴🏿‍♂️🚴🏿🚴‍♀️🚴‍♂️🚴🚵🏻‍♀️🚵🏻‍♂️🚵🏻🚵🏼‍♀️🚵🏼‍♂️🚵🏼🚵🏽‍♀️🚵🏽‍♂️🚵🏽🚵🏾‍♀️🚵🏾‍♂️🚵🏾🚵🏿‍♀️🚵🏿‍♂️🚵🏿🚵‍♀️🚵‍♂️🚵🚶🏻‍♀️🚶🏻‍♂️🚶🏻🚶🏼‍♀️🚶🏼‍♂️🚶🏼🚶🏽‍♀️🚶🏽‍♂️🚶🏽🚶🏾‍♀️🚶🏾‍♂️🚶🏾🚶🏿‍♀️🚶🏿‍♂️🚶🏿🚶‍♀️🚶‍♂️🚶🚷🚸🚹🚺🚻🚼🚽🚾🚿🛀🏻🛀🏼🛀🏽🛀🏾🛀🏿🛀🛁🛂🛃🛄🛅🛋🛌🏻🛌🏼🛌🏽🛌🏾🛌🏿🛌🛍🛎🛏🛐🛑🛒🛠🛡🛢🛣🛤🛥🛩🛫🛬🛰🛳🛴🛵🛶🤐🤑🤒🤓🤔🤕🤖🤗🤘🏻🤘🏼🤘🏽🤘🏾🤘🏿🤘🤙🏻🤙🏼🤙🏽🤙🏾🤙🏿🤙🤚🏻🤚🏼🤚🏽🤚🏾🤚🏿🤚🤛🏻🤛🏼🤛🏽🤛🏾🤛🏿🤛🤜🏻🤜🏼🤜🏽🤜🏾🤜🏿🤜🤝🏻🤝🏼🤝🏽🤝🏾🤝🏿🤝🤞🏻🤞🏼🤞🏽🤞🏾🤞🏿🤞🤠🤡🤢🤣🤤🤥🤦🏻‍♀️🤦🏻‍♂️🤦🏻🤦🏼‍♀️🤦🏼‍♂️🤦🏼🤦🏽‍♀️🤦🏽‍♂️🤦🏽🤦🏾‍♀️🤦🏾‍♂️🤦🏾🤦🏿‍♀️🤦🏿‍♂️🤦🏿🤦‍♀️🤦‍♂️🤦🤧🤰🏻🤰🏼🤰🏽🤰🏾🤰🏿🤰🤳🏻🤳🏼🤳🏽🤳🏾🤳🏿🤳🤴🏻🤴🏼🤴🏽🤴🏾🤴🏿🤴🤵🏻🤵🏼🤵🏽🤵🏾🤵🏿🤵🤶🏻🤶🏼🤶🏽🤶🏾🤶🏿🤶🤷🏻‍♀️🤷🏻‍♂️🤷🏻🤷🏼‍♀️🤷🏼‍♂️🤷🏼🤷🏽‍♀️🤷🏽‍♂️🤷🏽🤷🏾‍♀️🤷🏾‍♂️🤷🏾🤷🏿‍♀️🤷🏿‍♂️🤷🏿🤷‍♀️🤷‍♂️🤷🤸🏻‍♀️🤸🏻‍♂️🤸🏻🤸🏼‍♀️🤸🏼‍♂️🤸🏼🤸🏽‍♀️🤸🏽‍♂️🤸🏽🤸🏾‍♀️🤸🏾‍♂️🤸🏾🤸🏿‍♀️🤸🏿‍♂️🤸🏿🤸‍♀️🤸‍♂️🤸🤹🏻‍♀️🤹🏻‍♂️🤹🏻🤹🏼‍♀️🤹🏼‍♂️🤹🏼🤹🏽‍♀️🤹🏽‍♂️🤹🏽🤹🏾‍♀️🤹🏾‍♂️🤹🏾🤹🏿‍♀️🤹🏿‍♂️🤹🏿🤹‍♀️🤹‍♂️🤹🤺🤼🏻‍♀️🤼🏻‍♂️🤼🏻🤼🏼‍♀️🤼🏼‍♂️🤼🏼🤼🏽‍♀️🤼🏽‍♂️🤼🏽🤼🏾‍♀️🤼🏾‍♂️🤼🏾🤼🏿‍♀️🤼🏿‍♂️🤼🏿🤼‍♀️🤼‍♂️🤼🤽🏻‍♀️🤽🏻‍♂️🤽🏻🤽🏼‍♀️🤽🏼‍♂️🤽🏼🤽🏽‍♀️🤽🏽‍♂️🤽🏽🤽🏾‍♀️🤽🏾‍♂️🤽🏾🤽🏿‍♀️🤽🏿‍♂️🤽🏿🤽‍♀️🤽‍♂️🤽🤾🏻‍♀️🤾🏻‍♂️🤾🏻🤾🏼‍♀️🤾🏼‍♂️🤾🏼🤾🏽‍♀️🤾🏽‍♂️🤾🏽🤾🏾‍♀️🤾🏾‍♂️🤾🏾🤾🏿‍♀️🤾🏿‍♂️🤾🏿🤾‍♀️🤾‍♂️🤾🥀🥁🥂🥃🥄🥅🥇🥈🥉🥊🥋🥐🥑🥒🥓🥔🥕🥖🥗🥘🥙🥚🥛🥜🥝🥞🦀🦁🦂🦃🦄🦅🦆🦇🦈🦉🦊🦋🦌🦍🦎🦏🦐🦑🧀‼⁉™ℹ↔↕↖↗↘↙↩↪#⃣⌚⌛⌨⏏⏩⏪⏫⏬⏭⏮⏯⏰⏱⏲⏳⏸⏹⏺Ⓜ▪▫▶◀◻◼◽◾☀☁☂☃☄☎☑☔☕☘☝🏻☝🏼☝🏽☝🏾☝🏿☝☠☢☣☦☪☮☯☸☹☺♀♂♈♉♊♋♌♍♎♏♐♑♒♓♠♣♥♦♨♻♿⚒⚓⚔⚕⚖⚗⚙⚛⚜⚠⚡⚪⚫⚰⚱⚽⚾⛄⛅⛈⛎⛏⛑⛓⛔⛩⛪⛰⛱⛲⛳⛴⛵⛷🏻⛷🏼⛷🏽⛷🏾⛷🏿⛷⛸⛹🏻‍♀️⛹🏻‍♂️⛹🏻⛹🏼‍♀️⛹🏼‍♂️⛹🏼⛹🏽‍♀️⛹🏽‍♂️⛹🏽⛹🏾‍♀️⛹🏾‍♂️⛹🏾⛹🏿‍♀️⛹🏿‍♂️⛹🏿⛹️‍♀️⛹️‍♂️⛹⛺⛽✂✅✈✉✊🏻✊🏼✊🏽✊🏾✊🏿✊✋🏻✋🏼✋🏽✋🏾✋🏿✋✌🏻✌🏼✌🏽✌🏾✌🏿✌✍🏻✍🏼✍🏽✍🏾✍🏿✍✏✒✔✖✝✡✨✳✴❄❇❌❎❓❔❕❗❣❤➕➖➗➡➰➿⤴⤵*⃣⬅⬆⬇⬛⬜⭐⭕0⃣〰〽1⃣2⃣㊗㊙3⃣4⃣5⃣6⃣7⃣8⃣9⃣©®'



function sendBox(msg, boxType) {
  let winType = boxType
  if (winType === 'great') {
    var newRandom = Math.random() * 100
    if (newRandom <= 5) {
      var songRoles = ['356625898256203786', '356627174054428683', '356627357450240010', '356627412647411732', '356627584727121920', '356627198985240577']
      var randomIndex = songRoles[~~(Math.random() * songRoles.length)]
      msg.channel.send(wrap('You won the ' + msg.guild.roles.get(randomIndex).name + ' role! <@221465443297263618>'))
      msg.member.addRole(randomIndex)
    }
    if (newRandom > 10 && newRandom <= 70) {
      msg.channel.send(wrap('You won 2250 credits!'))
      myFunctions.credits(msg, 2250)
    }
    if (newRandom > 70) {
      msg.channel.send(wrap('You won 2500 credits!'))
      myFunctions.credits(msg, 2500)
    }
  }
  if (winType === 'meh') {
    var newRandom = Math.random() * 100
    if (newRandom < 30) {
      msg.channel.send(wrap('You won 1500 credits!'))
      myFunctions.credits(msg, 1500)
    }
    if (newRandom >= 30 && newRandom < 90) {
      msg.channel.send(wrap('You won 200 credits!'))
      myFunctions.credits(msg, 200)
    }
    if (newRandom >= 90) {
      msg.channel.send(wrap('You won 2000 credits!'))
      myFunctions.credits(msg, 2000)
    }
  }
  if (winType === 'bad') {
    var noWinnings = ['a FREE copy of Air', 'a Wall Nut!', 'nothing... yay', 'the chest hair from the hobo down the street that gives you nice things like that glass bottle that you eat your potato sauce from', 'trash', 'poot\'s love and affection', 'a canoe', 'a small, crippled pony', 'a muggle', 'a snowglobe', 'the law of cosines', 'clique drama: the live action movie', 'freshly stripped bacon ;)', 'enough money to buy lunch for a llama', 'a makeshift shelter', 'a bag of actual crap', '**this is an automated voice messaging system**', 'a woomy', 'my tears', 'The Not Today Role (get it because you didn\'t win anything today haahahahahahahaah)']
    shuffle(noWinnings)
    msg.channel.send(wrap('You won ' + noWinnings[~~(Math.random() * noWinnings.length)] + '!'))
  }
}
function addToken(msg) {
  let id = msg.author.id
  if (!boss[msg.author.id]) boss[msg.author.id] = {}
  if (!boss[msg.author.id].tokens) boss[msg.author.id].tokens = 0
  boss[msg.author.id].tokens++
  fs.writeFile("./boss.json", JSON.stringify(boss), (err) => {
    if (err) console.error(err)
  })
}


function insideOf(string, array) {
  for (i = 0; i < array.length; i++) {
    let evaluated = string.indexOf(array[i])
    if (evaluated === -1) return false
  }
  return true
}


function sendfakebox(msg) {
  let numberotimes = 0
  let interval = setInterval(() => {
    numberotimes++
    var boxType
    var rannum1 = Math.random() * 100
    if (rannum1 <= 70) {
      boxType = 'bad'
    }
    if (rannum1 > 70 && rannum1 <= 85) {
      boxType = 'meh'
    }
    if (rannum1 > 85) {
      boxType = 'great'
    }
    let winType = boxType
    if (winType === 'great') {
      var newRandom = Math.random() * 100
      if (newRandom <= 5) {
        var songRoles = ['356625898256203786', '356627174054428683', '356627357450240010', '356627412647411732', '356627584727121920', '356627198985240577']
        var randomIndex = songRoles[~~(Math.random() * songRoles.length)]
        clearInterval(interval)
        msg.channel.send(numberotimes + ' tries to win song role')
      }
      if (newRandom > 10 && newRandom <= 70) {
        let five = 4 + 4
      }
      if (newRandom > 70) {
        let five = 4 + 4
      }
    }
    if (winType === 'meh') {
      let five = 4 + 4
    }
    if (winType === 'bad') {
      let five = 4 + 4
    }
  }, 1)
  
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }