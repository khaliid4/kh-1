const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-' ; 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '.') {
    msg.reply('جعل ماينقط غيرك :kissing_heart: ');
  }
});

 
 
 
 /////////////////رسال رسالة في الشات /////////////////////////
 
 
var Prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// -say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "say2") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});







//////////////////////يعرض الرتب اللي معك/////////////////////////////////////

client.on('message', message=>{
var prefix = "-" 


    let nour;
    if (message.mentions.users.first()) {
      nour = message.mentions.users.first();
    } else {
        nour = message.author;
    }

  var roles;
      if (message.member.roles.size === 1) {
          roles = '`None | لا يوجد`';
      } else {
          roles = message.member.roles.map(roles => `\`${roles.name}\``).join(', ')
      }

  if(message.content === prefix + 'myroles'){
    if(message.author.bot) return;
let myroles = new Discord.RichEmbed()
.setColor('#4CE782')
.setAuthor(nour.tag, nour.avatarURL)
.setThumbnail(nour.avatarURL)
.setTitle('MyRoles | رتبي :')
.setDescription(`**# - Roles | الرتب **: ${roles}`)
.setFooter(message.author.username, message.author.avatarURL)
.setTimestamp() 
message.channel.send(myroles)
  }
})


////////////////////////التصويت///////////////////////////////////

client.on('message' , message => {
  var prefix = "-";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
});

////////////////////قفل وفتح الشات/////////////////////////////////////



 client.on('message', message => {
var prefix = "-";
       if(message.content === prefix + "muchat") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "opchat") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});



//////////// الرد التلقائي /////////////

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'السلام') {
    msg.reply(' *وعليكم السلام ورحمة الله وبركاتة* ');
  }
});
 

client.on('message', msg => {
  if (msg.content === 'سلام') {
    msg.reply(' *وعليكم السلام ورحمة الله وبركاتة* ');
  }
});


client.on('message', msg => {
  if (msg.content === ' السلام عليكم') {
    msg.reply(' *وعليكم السلام ورحمة الله وبركاتة* ');
  }
});



client.on('message', msg => {
  if (msg.content === 'السلام عليكم ورحمة الله وبركاتة') {
    msg.reply(' *وعليكم السلام ورحمة الله وبركاتة* ');
  }
});



client.on('message', msg => {
  if (msg.content === 'باك') {
    msg.reply(' *WLC* ');
  }
});




 client.on('message', msg => {
  if (msg.content === 'الو') {
    msg.reply(' *يا هلا ومــــــــــرحـــــــباء مليون* ');
  }
});
 
 


///////////////////////////////ارسال رابط بالخاص لشخص 1////////////////////////////////////



/////////////////////يعرض صورة السيرفر /////////////////////////////

client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "صورة"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  
  //////////////////////يثبت البوت داخل روم/////////////////////////////////////


client.on('ready', () => {
var x = client.channels.get("523858653699244036");
if (x) x.join();
});



//////////// يعرض سكن ماينكرافت /////////////



client.on("message", message => {
    var prefix = "-"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** اكتب اسم اسكنك **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


/////////////////////////////////////عرض التاريخ/////////////////////////////

const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "-";

    if (message.content === prefix + "التاريخ") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
             message.channel.sendEmbed(Date15);
    }
});




/////////////////////////////////يسوي روم للوقت والتاريخ//////////////////////////////////

client.on('message',async msg => {
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
  var p = "+";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});



///////////////////////////////////اارسال صورة بخط ولا بدون////////////////////////////////


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var argresult = message.content.split(" ").slice(1);
if (command == "صورة2") {
  message.channel.sendFile(argresult.join(" "))

}
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  var argresult = message.content.split(" ").slice(1);
if (command == "صورة") {
    let embedsay = new Discord.RichEmbed()
 .setColor("RANDOM")
.setDescription("رايكم نختار اي صورة لسيرفر")
.setImage(`${argresult}`)
message.channel.send({embed:embedsay});


}
});

/////////////////////////////////يعرض معلومات الشات/////////////////////////////////

client.on('message', message => {
    if(!message.channel.guild) return;
var prefix = "-";
if(message.content.startsWith(prefix + 'chan')) {
    let channel = message.channel
    var embed = new Discord.RichEmbed()
      .setTitle("Channel Info")
      .setColor("#9932CC")
      .setDescription(`Info about <#${channel.id}>\nChannel ID: ${channel.id}`)
      .addField("Created At", `${channel.createdAt}`)
      .addField("Channel Type", `${channel.type}`)
      .addField("Extra Information", `Channel is NSFW => ${channel.nsfw}\nChannel Topic=> ${channel.topic}\nChannel Parent => ${channel.parent}\nChannel Position => ${channel.position}`)
 
     message.channel.send({ embed: embed });
  }
 
    });
	
	///////////////////////////////كلمات ممنوعة ////////////////////////////////////
	  
client.on('message', msg => {
  if (msg.content === 'كل زق') {
   msg.delete(30)
    msg.reply('ممنوع');
  }
});
	
	//////////////////////////////يعطيك معلومات عن السيرفر اللي طلع منة بوتك////////////////////////////////////

client.on('guildDelete', guild => {
  client.channels.get("346167763305496594")
const embed = new Discord.RichEmbed()
   .setAuthor(`Nameless Bot left a server ❎`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Members Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .setFooter('بوت مجتمع RTF' , client.user.avatarURL)
           client.channels.get("346167763305496594").send({embed});
}

);




/////////////////////////////////////معلومات السيرفر//////////////////////////////




 
client.on('message', message => {
    if (message.content === "السيرفر") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)            
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)            
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });

/////////////////////////////////كود ارسال رسالة لصاحب البوت//////////////////////////////////
	  
	  
	  
	
client.on('message' , message => {
var prefix = "-"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "للبوت")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("428097407973064705").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح سيتم الرد عليك خلال 24 ساعة بإذن الله')
     .setThumbnail(message.author.avatarURL)
     .setFooter("By : Elmusaui_GK and SpeedMC")
                                                

message.channel.send(embed);


}
    
});

/////////////////////////////////كود حالة البوت/////////////////////////////////



client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['شغل إدارة السيرفر','صلو على النبي  '];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
    
});


//////////////////////////////////يعرض صورة السيرفر//////////////////////////////

	client.on("message", message => {
    const prefix = "-"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "صورة السيرفر"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  
  	  
///////////////////////////يعرض الصورة اللي تبي///////////////////////////////////////

client.on('message', message => {
    if (message.content.startsWith("phot")) {
        if (message.author.bot) return
        var mentionned = message.mentions.users.first();
    var omar;
      if(mentionned){
          var omar = mentionned;
      } else {
          var omar = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor('Avatar Link :')
        .setTitle('Click Here')
        .setURL(`${omar.avatarURL}`)
        .setImage(`${omar.avatarURL}`)
        .setFooter('khalid|| خالد',client.user.avatarURL) 
      message.channel.sendEmbed(embed);
    }
});



////////////////////////////يعرض عدد اعضاء السيرفر///////////////////////////////////////
	  

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='اعضاء')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });
	
	
	
/////////////////////////////كود يثبت ملكية البوت//////////////////////////////////////
	  

 client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["428097407973064705"];
if (message.content.startsWith(prefix + 'mebot')) {
    if(!message.channel.guild) return;
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**انت صاحب البوت **")
} else {
   message.reply("**انت لست صاحب البوت**");   
}
}
});


/////////////////////////////يرسل رابط لدعودة البوت بالخاص/////////////////////////////////////

  
	  client.on('message', message => {
  if (true) {
if (message.content === 'pot') {
      message.author.send('  https://goo.gl/eNPKRy  |  تفضل ربط البوت  AsH_DisMTA   ').catch(e => console.log(e.stack));
 
    }
   }
  });
 
 
client.on('message', message => {
     if (message.content === ".invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص AsH_DisMTA")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


///////////////////////////يعرض معلومات الشخص///////////////////////////////////////

  client.on('message', message => {
    var prefix = "-"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});


////////////////////////////الترحيب مع ذكر رقم العضو//////////////////////////////////////


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  @here||@here
  ════════════════════ஜ۩۞۩ஜ═════════════════════ 
　 　 　　　           •●【【 W E L C O M E - T O - SERVER】】●• 
منور السيرفر يا مرحباء مليون
يرحب بأعضاه الجدد RTF مجتمع
ويـتـمـنى لك قضاء وقت ممتع
شعارنا إبداع و سمو أخلاقي
...ووفقك الله...
═════════════════════ஜ۩۞۩ஜ═════════════════════:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})




//////////////////////////كود عرض البنق/////////////////////////////////////////
	  

client.on('message', message => {
    if (message.author.id === client.user.id) return;
            if (message.content.startsWith(prefix + "piing")) {
        message.channel.sendMessage(':ping_pong: Pong! In `' + `${client.ping}` + ' ms`');
    }
});

	  
///////////////////////////////////يعرض السيرفرات اللي فيها بوتك///////////////////////////////


         client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`خالد الرشيدي`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});


////////////////////////رسالة من صاحب البوت إلى اعضائ السيرفرات///////////////////////////////////////////


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+bca')){
 if (message.author.id !== '428097407973064705') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});

/////////////////////////////كود يسويلك روم يقولك كم واحد بالسيرفر/////////////////////////////////////
	  
	  
client.on('message',async msg => {
  var prefix = "-";
  if(msg.content.startsWith(prefix + "user")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Members : ◤ → ${client.users.size} ← ◢`);
 },1000);
  });
  }
 
});
	  

	  ///////////////////////////اكواد مسح متكررة///////////////////////////////////////



 client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("clr"))
 {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© khalid | خالد ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


  //////////////////////مسح//////////////////


 client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("مسح"))
 {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© khalid | خالد ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


  
  ////////////////////////مسح////////////////////
  
 client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("clear"))
 {
                if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© khalid | خالد  ™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});


///////////////////////////يعرض حالة اعضاء السيرفر///////////////////////////////////////




client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + 'mb')) {
        if (!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)

        .setDescription(`**:battery: حالة اعضاء السيرفر**
    
**:green_heart: Online**  **[ ${message.guild.members.filter(m=>m.presence.status == 'online').size} ]**
**:yellow_heart: Idle**       **[ ${message.guild.members.filter(m=>m.presence.status == 'idle').size} ]**  
**:heart: DND**     **[ ${message.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**
**:black_heart: Offline** **[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]** `)

        message.channel.send()

        message.channel.sendEmbed(embed)
    }
});
 

////////////////////////////////كود لون متغير//////////////////////////////////



client.on('ready',async () => {
  console.log(client.user.username);
  try {
    const config = {
      name: "RTF DisMTA", // اسم الرتبة
      guildid: "463576669199007754", // اي دي السيرفر
      sec: 1.1 // عدد الثواني
    };
    let guild = client.guilds.get(config.guildid);
    let role = guild.roles.find(role => role.name === config.name);
    let sec = config.sec * 1000;
    if(!guild) return console.warn("Unkown guild.");
    if(!role) return console.warn("Unkown role");
    if(role.position >= guild.members.get(client.user.id).highestRole.position) return console.warn("Bot highest role must be above rainbow role");
    setInterval(() => {
      role.edit({ 
      color: "RANDOM"
    });
    }, sec);
  } catch(e) {
    console.error(e);
  }
});	
///////////////////رابط10 اشخاص///////////////////
client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
});

//////////////////////رسال رسالة في الخاص مع منشن /////////////////////////

client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {  ///الامر
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` **: عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
});
/////////////////////يعرض معلومات السيرفر///////////////////


client.on('message', function(msg) {
  if(msg.content.startsWith ('-server')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للاداره فقط**');         
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});


/////////////////////////////كورد برودكاست مطور////////////////////////////


client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bcc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("*برودكاست*")
                                            .addField("من سيرفر", message.guild.name)
                                            .addField("المرسل", message.author.username)
                                            .addField("الرسالة", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**تم إلغاء الرسالة**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("*برودكاست*")
                                            .addField("من سيرفر", message.guild.name)
                                            .addField("المرسل", message.author.username)
                                            .addField("الرسالة", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**تم إلغاء الرسالة**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});


////////////////////////////////////كود المساعدة للادمن/////////////////////////////////



client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("helpp")) {
	    if (!message.member.hasPermission("ADMINISTRATOR"))  return;
		 


 message.author.sendMessage(`
 **

╔[❖════════════❖]╗
             Prefix = ' - '
╚[❖════════════❖]╝


 ╔[❖════════════❖]╗
┃             أوامر المسؤلين              ┃
 ╚[❖════════════❖]╝

❖  -bc         ➾ يرسل رسالة بالخاص لجميع اعضاء السيرفر بمنشن
❖  -bcc         ➾ يرسل رسالة بالخاص لجميع اعضاء السيرفر مطور
❖  -bco         ➾ يرسل رسالة بالخاص للأعضاء المتصلين باالدسكورد
❖  -say        ➾ يرسل رسالة بالشات بدون انبد
❖  -say2       ➾يرسل رسالة في الشات بانبد
❖  -send       ➾يرسل تصويت بالشات  
❖   يعرض الصورة بالشات بدون أنبد ➾      -صورة
❖  يعرض الصورة بالشات بأنبد ➾      -صورة2
❖  -muchat     ➾ يقوم بقفل الشات
❖  -opchat     ➾ يقوم بفتح الشات
❖  -user       ➾ يقوم بعمل روم بأعلاء الرومات وعرض عدد أعضاء السيرفر
❖  -setstats   ➾ يقوم بعمل رومات لعرض التاريخ والوقت باسفل الرومات
❖  يرسل رسالة لصاحب البوت بالخاص للمساعدة ➾      -للبوت
❖  يقوم بمسح 100 رسالة بالشات  ➾      -  مسح
❖  clr          ➾ يقوم بمسح 100 رسالة بالشات
❖  clear        ➾ يقوم بمسح 100 رسالة بالشات


╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

(" أتمنى أن تفيدكم هذة الاوامر وهي مخصصة لأصحاب السيرفر وطاقم إدارة مجتمع RTF")


`);

    }
});





/////////////////////////////////////////////////////////////////////


client.on('message', message => {
     if (message.author.bot) return;
    if (message.content.startsWith("help")) {
		 message.channel.send('**تم ارسال الأوامر لك بالخاص مع تمنياتي لك بالتوفيق والنجاح**');
            
	
		 


 message.author.sendMessage(`
 **
 @ RTF Community 

╔[❖════════════❖]╗
             Prefix = ' - '
╚[❖════════════❖]╝

 
 ╔[❖════════════❖]╗
┃             الأوامر العامه                 ┃
 ╚[❖════════════❖]╝
 

❖  يرسل رسالة بالخاص تحتوي على رابط لشخص مدة ساعة  ➾        رابط
❖ يعرض صورة السيرفر في الشات  ➾        -صورة
❖ يعرض لك التاريخ بالشات  ➾      -التاريخ
❖ يعرض لك أعضاء السيرفر  ➾       -اعضاء
❖ يعطيك لون الذي اخترتة   ➾       -لون
❖  يعرض لك معلومات عن السيرفر بالشات  ➾      -السيرفر
❖ -chan              ➾ يعرض لك معلومات عن الشات 
❖ -id              ➾ يعرض معلوماتك او معلومات الشخص اللي تمنشن له
❖ -mb             ➾ يعرض حالة أعضاء السيرفر
❖ -skin              ➾ يعرض لك اسكنات ماينكرافت في الشات بصورة
❖ -phot              ➾يعرض لك صورة الشخص اللي تمنشن له 
❖ -ping              ➾ يعرض بنقك في الشات
❖ -srever              ➾ يعرض معلومات عن الشيفر بطرقية اخرآ
❖ -sug             ➾ لاقتراح جديد اكتبة بشات البوت ويجي لشات الاقتراحات


╔[❖════════════❖]╗
                    Welcome    
╚[❖════════════❖]╝

("❖ RTF المجتمع يرحب بأعضائة جميعاً ويتمنى لكم يوم سعيد RTF ❖")
@ RTF Community  

`);

    }
});




/////////////////////////////////////////////////////////////////////

///////////////////////////يغير اسم وصورة البوت////////////////////////////////////////
	  

const Devs = ['346167763305496594' , '346167763305496594' , '' , ''];
client.on('message', message => {
var prefix = "-";
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(prefix + 'nameb')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`**${argresult}** : تم بنجاح تغيير الاسم ?`)
  return message.reply("**تم تغيير الاسم البوت بنجاح ?**");
} else
if (message.content.startsWith(prefix + 'photeb')) {
  client.user.setAvatar(argresult);
    message.channel.sendMessage(`**${argresult}** : تم تغيير صورة البوت بنجاح ?`);

}
});
client.on('message', message => {
    if (message.content.startsWith("عدد الدعوات")) {

    message.guild.fetchInvites()
    .then(invites => message.channel.send(`**:busts_in_silhouette:  العدد     [${invites.find(invite => invite.inviter.id === message.author.id)}]    :calling:   عضو لهذا السيرفر    `))
         
    }
});


////////////////////////////////////////كود البنق مطور/////////////////////////////

 client.on('message', message => { 
                                if(!message.channel.guild) return;
                        if (message.content.startsWith(prefix + 'ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('#5016f3')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
                        .setTimestamp()
        message.channel.send({embed:embed});
                        }
                    });


/////////////////////////////////////////////////////////////////////


client.on('message', message => {
 
    if(message.content.split(' ')[0] == '-sug'){ //حقوق ناروكس
        if (message.author.bot) return;
     
                            let args = message.content.split(' ').slice(1).join(' ');
                                 if (!args) return message.reply("You Have To Write A Msg !");//حقوق ناروكس
   
      let embed = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('**__:mailbox_with_mail: Suggestion Sent !__**')
                                                    .setThumbnail(message.author.avatarURL)
                                                    .addField("**-Sent By :**", message.author.username)
                                                        .addField("**-Sender ID :**", message.author.id)
                                                    .addField("**-Suggest :**", args)//حقوق ناروكس
                                                    .setColor("FF0000")
                                                    .setFooter(message.author.username, message.author.avatarURL)
                                                   
                                                   
     client.channels.get("529608741687918595").send({ embed: embed }); //ايدي الروم هنا
      let embe = new Discord.RichEmbed()
                                                    .setAuthor(message.author.username, message.author.avatarURL)
                                                    .setDescription('**__:mailbox_with_mail: Suggestion Sent Successfully !__**')
                                                    .setThumbnail(message.author.avatarURL)
                                                                                                    .setColor("FF0000")
   
                                                    .setFooter(message.author.username, message.author.avatarURL)//حقوق ناروكس
                                                    message.channel.sendEmbed({ embed: embed });
               
                                     
    }
    });



//////////////////////////كود أعطاء الالوان//////////////////////////////////////



          client.on('message', message => {
            let args = message.content.split(' ').slice(1);
            if(message.content.split(' ')[0] == `${prefix}لون`){
            const embedd = new Discord.RichEmbed()
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**لا يوجد لون بهذا الأسم ** ❌ `)
            .setColor(`ff0000`)
           
            if(!isNaN(args) && args.length > 0)
           
           
            if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);
           
           
            var a = message.guild.roles.find("name",`${args}`)
             if(!a)return;
            const embed = new Discord.RichEmbed()
           
            .setFooter('Requested by '+message.author.username, message.author.avatarURL)
            .setDescription(`**Done , تم تغير لونك . ✅ **`)
           
            .setColor(`${a.hexColor}`)
            message.channel.sendEmbed(embed);
            if (!args)return;
            setInterval(function(){})
               let count = 0;
               let ecount = 0;
            for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
           
            }
             message.member.addRole(message.guild.roles.find("name",`${args}`));
           
           
            }
            });

/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////











client.login(process.env.BOT_TOKEN);  //لا تحط التوكن حقك هنا
