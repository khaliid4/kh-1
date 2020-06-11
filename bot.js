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

 

  
  
  //////////////////////يثبت البوت داخل روم/////////////////////////////////////


client.on('ready', () => {
var x = client.channels.get("706185477115609178");
if (x) x.join();
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



///
	

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
