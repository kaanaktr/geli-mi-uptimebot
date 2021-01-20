const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
client.login(process.env.token);
const fetch = require("node-fetch");
const fs = require("fs");//Erdem Çakıroğlu
require("express")().listen(1343);
//Erdem Çakıroğlu
//UPTİME
//Erdem Çakıroğlu
const express = require("express");
const app = express();////Erdem Çakıroğlu
const http = require("http");
app.get("/", (request, response) => {
  console.log("Pinglenmedi.");
  response.sendStatus(200);
});////Erdem Çakıroğlu

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
////Erdem Çakıroğlu

//OYNUYOR KISMI
////Erdem Çakıroğlu

client.on("ready", () => {
  console.log("Bot Aktif");
  let playing = client.voice.connections.size;

  client.user.setPresence({
    activity: {
      name: "Uptime Bot 7/24",
      type: "idle",
      url: "URL"
    }
  });
});

setInterval(() => {
  var links = db.get("linkler");
  if (!links) return;
  var linkA = links.map(c => c.url);
  linkA.forEach(link => {
    try {
      fetch(link);
    } catch (e) {
      console.log("" + e);
    }
  });
  console.log("Pinglendi.");
}, 60000);

client.on("ready", () => {
  if (!Array.isArray(db.get("linkler"))) {
    db.set("linkler", []);
  }
});

//embed hazırlıkları

const help = new discord.MessageEmbed()
.setFooter("Ghost Uptime")
.setColor("#660099")
.setThumbnail('https://cdn.discordapp.com/avatars/800024631695638578/ff801aa5c00cca32d7d48a6d570df956.png?size=128')
.setDescription(`<a:B_Seviye:788489359883894784> Selamlar, botunu uptime etmek için yapman gereken adımları sana söyleyeceğim. \n <a:blueate:801014403905617940>  Artık kolay bir şekilde botunu 7/24 aktif edebilirsin! \n\n <a:yldz:800373667228811294> Botunu uptime etmek için \`up!ekle\` yazabilirsin, Nasıl yapıldığını komutu yazdığında göreceksin \n <:Tatli:788489005775323166> Uptime edilen botların sayısını görmek için \`up!göster\` yazabilirsin. \n <a:alertred:801014497540177930> Eğer Botunu Uptimeden Kaldırmak İstiyorsan Kurucumuza Ulaşabilirsin. `)
.setImage('https://cdn.discordapp.com/attachments/800381147376386059/800988506821230622/standard_3.gif')
//Erdem Çakıroğlu






client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "!ekle") {
    var link = spl[1];
    fetch(link)
      .then(() => {
        if (
          db
            .get("linkler")
            .map(z => z.url)
            .includes(link)
        )
             return message.channel.send(new discord.MessageEmbed().setFooter(" Uptime Bot").setColor("#660099").setDescription(" <a:blueate:801014403905617940> Projeniz Sistemimizde Zaten Bulunuyor Eğer Şüpheniz Varsa Sahibime Ulaşabilirsin."));
        message.channel.send(new discord.MessageEmbed().setFooter("Uptime Bot").setColor("#660099").setDescription(" <:events:788488939140808724> Projeniz Sistemimize Başarıyla Eklendi,Eğer Çalışmıyor İse Sahibime Ulaşabilirsin."));
        db.push("linkler", { url: link, owner: message.author.id });
      })
      .catch(e => {
        return message.channel.send(new discord.MessageEmbed().setFooter(" Uptime Bot").setColor("#660099").setDescription("**<:BugHunter:788489065900277830> Lütfen Bir Link Giriniz, \n Glitch Projenize Girin, Sol Yukardaki Show Butonuna Tıklayıp İn A Window Butonuna Basın, Çıkan Sayfanın Linkini Kopyalayıp up!ekle komutunu kullanın. \n Not: Eğer Linki Doğru Girdiğin Halde Bu Hatayı Alıyorsan Sahibime Ulaş.**"));
      });
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "!göster") {
    var link = spl[1];
    message.channel.send(new discord.MessageEmbed().setFooter(" Uptime Bot").setColor("#660099").setDescription(` <a:yldz:800373667228811294> ${db.get("linkler").length} Tane Proje Anlık Olarak Aktif Tutuluyor!`));
  }
});

client.on("message", message => {
  if (message.author.bot) return;
  var spl = message.content.split(" ");
  if (spl[0] == "!yardım") {
    var link = spl[1];
    message.channel.send(help);
  }
});
////kaanabaabba
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
//Erdem Çakıroğlu
