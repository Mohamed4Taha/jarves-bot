const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Five Stars`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);





//الرد التلقائي

client.on('message', msg => {
    if (msg.content === 'السلام عليكم') {
       msg.reply('**و عليكم السلام و رحمة الله و بركاته:heart: **');
      }
    });

client.on('message', msg => {
    if (msg.content === 'ولكم') {
       msg.reply('باك');
      }
    });

client.on('message', msg => {
    if (msg.content === 'باك') {
       msg.reply('ولكم باك');
      }
    });

client.on('message', msg => {
    if (msg.content === 'هلا') {
       msg.reply('هلا بيك ');
      }
    });

    client.on('message', msg => {
        if (msg.content === 'اهلا') {
           msg.reply('و سهلا');
          }
        });

        client.on('message', msg => {
            if (msg.content === 'ممكن كريديت بليز') {
               msg.reply('مش هينفع اسف ... بس قريبا انشاء الله ممكن نعمل مسابقات و ممكن نعمل نظام دعوات');
              }
            });

client.on('message', msg => {
    if (msg.content === 'اوك') {
       msg.reply('اوك');
      }
    });

client.on('message', msg => {
    if (msg.content === 'K') {
       msg.reply('ok');
      }
    });

    client.on('message', msg => {
        if (msg.content === 'هاي') {
           msg.reply('هايات');
          }
});





//الترحيب

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('YELLOW')
        .setThumbnail(memberavatar)
        .addField('==>اسم الاسطورة:      ',`${member}`)
        .addField('==>الايدي حق الاسطوري  ', "**[" + `${member.id}` + "]**" )
        .addField('==>انت العضو رقم     ',`${member.guild.memberCount}`)
                                                                           
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
	
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`==> بس بعرف وين رحت :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`==> مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('YELLOW')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});

    });
    




//الترحيب الخاص

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`**:crown:ولكم نورت السيرفر | Welcome To Server:crown: **
        اسم العضو المحترم |Name member:tulip:${member}
        انت العضو الأسطورة رقم||You Member number is:crown: ${member.guild.memberCount} `) 
    }).catch(console.error)
})





//معلومات عن البوت

         client.on('message', message => {
            if (message.content.startsWith("$bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('اصحاب البوت🗣️',`.ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑`)
.setColor('YELLOW')
  message.channel.sendEmbed(embed);
    }
});





//مسح الشات

client.on('message', message => {       
if (message.content.startsWith('$clear')) { //.ℍ🌀Nt𝓪r🍺🍻 | Five🌟
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 1000) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 1000 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '1000';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
});





//صورة السيرفر

client.on("message", message => {
    const prefix = "$"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "$image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`==> هذا هو شعار سيرفر ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor("YELLOW")
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
});





//الباند

client.on('message', message => {
    var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "loj");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`!!باند`, user.displayAvatarURL)
  .setColor("YELLOW")
  .setTimestamp()
  .addField("**==> المتبند**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**==> بواسطة**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**==> السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





//الطرد

client.on('message', message => {
    var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تمتلك برمشن ` KICK_MEMBERS `**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**البوت لا يمتلك برمشن ` KICK_MEMBERS `**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("YELLOW")
  .setTimestamp()
  .addField("**==> المطرود**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**==> بواسطة**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**==> السبب**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});





//قفل و فتح الشات

client.on('message', message => {
var prefix = "$";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__`تم تقفيل الشات`__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__`تم فتح الشات`__✅**")
              });
    }
       
});





//مانع السب

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كسمك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ".ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑"
        }
      }}).then(msg => {msg.delete(10000)});
                          }

     
}); 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('نيك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ".ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑"
        }
      }}).then(msg => {msg.delete(10000)});
                          }

     
}); 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('عرص')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ".ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑"
        }
      }}).then(msg => {msg.delete(10000)});
                          }

     
}); 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('متناك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ".ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑"
        }
      }}).then(msg => {msg.delete(10000)});
                          }

     
}); 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('احا')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ".ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑"
        }
      }}).then(msg => {msg.delete(10000)});
                          }

     
}); 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('a7a')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ".ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑"
        }
      }}).then(msg => {msg.delete(10000)});
                          }

     
}); 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كوسمك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ".ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑"
        }
      }}).then(msg => {msg.delete(10000)});
                          }

     
}); 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('خول')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: ".ℍ🌀Nt𝓪r🍺🍻 | Five🌟   <||>   👑$ƬӇЄَ ƘἷLLЄَƦ$👑"
        }
      }}).then(msg => {msg.delete(10000)});
                          }

     
}); 






//الميوت و الغائه

client.on('message', async message =>{
  var prefix = "$";
const ms = require("ms");
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
    if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    let muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#000000",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
            SPEAK : false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
 
    await(tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${ms(ms(mutetime))}`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, ms(mutetime));
 
 
 
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
 
  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
 
  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
 
  return;
 
  }
 
});




