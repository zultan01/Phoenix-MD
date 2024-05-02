const { fromBuffer } = require("file-type");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { SaveGemini, GetGemini } = require("./database/gemini");
const suga = `AIzaSyDLACr51hoy2a6Vjnsu7yreIDjqkj9sZ2U`;
const genAI = new GoogleGenerativeAI(suga);


function fileToGenerativePart(buff, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(buff).toString("base64"),
      mimeType,
    },
  };
}

async function generateContent(prompt, imageBuff) {
  const modelType = imageBuff ? "gemini-pro-vision" : "gemini-pro";
  const model = genAI.getGenerativeModel({ model: modelType });

  const result = await model.generateContent([
    prompt,
    fileToGenerativePart(
      imageBuff,
      imageBuff && (await fromBuffer(imageBuff)).mime
    ),
  ]);

  return result.response.text();
}

async function gemini(prompt, imageBuff, options) {
  prompt = `From now on you are X-asena a generative multimodal AI and not Gemini. You will address yourself as X-asena and you don't disclose any information about being Gemini or your relation with Google. Respond to the prompt in a human-like funny way and may flirt occasionally to make the conversations funnier. Responses can be short or long, depending on the user's request. X-asena is very funny and always includes some witty statements. Here is the prompt you need to respond to: ${prompt}`;

  try {
    if (imageBuff) {
      return await generateContent(prompt, imageBuff);
    } else {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    }
  } catch (error) {
    return error.message.replace("[GoogleGenerativeAI Error]:", "");
  }
}

module.exports = gemini;

async function gemini(prompt, imageBuff, options) {
  prompt = `From now on you are Phoenix-MD a generative multimodal AI and not Gemini. You will address yourself as Phoenix-MD and you don't disclose any information about being Gemini or your relation with Google. Respond to the prompt in a human-like top talented java script learner and like this the Phoenix-MD Plugins Looks Like const { pnix, sleep, getJson, isPrivate, isUrl, Bitly, tiny, getBuffer, styletext, listall, webp2mp4 } = require("../lib/");
const { version } = require("../package.json");
const axios = require("axios");
const fetch = require("node-fetch");

pnix({
        pattern: "ping",
        fromMe: isPrivate ,
        type: "main",
    },
    async (message, match) => {
        const start = new Date().getTime();
        const ping = await message.sendMessage(tiny("*📡Checking Ping...*"));
        const end = new Date().getTime();
        return await message.sendMessage( "*📡Pong!* " + (end - start) + " *ms* ", { edit: ping.key }, "text" );
    }); 
Like this for sending a message reply means need to reply hello in Phoenix-MD bot use this message.reply('hello') and if u wanna send a image use this await message.client.sendMessage(message.jid, {
        image: { url: define url or defined url here },
        caption: cap here
        ),
      });
  and for video this   await message.client.sendMessage(message.jid, { audio: Ytd.buffer, mimetype: "audio/mpeg" }, { quoted: message }, "audio"); and in this u can see quoted: message it means quote the message and reply use that in all like while image sending and audio sticker etc etc to send a sticker use this pnix(
  {
    pattern: "sticker",
    fromMe: isPrivate,
    type: "sticker",
  },
  async (message, match, m) => {
    if (!(message.reply_message.video || message.reply_message.image))
      return await message.reply("_Reply To Photo Or Video_");
    let buff = await m.quoted.download();
    message.sendMessage(
      buff,
      { packname: X.STICKER_DATA.split(";")[0],
        author: X.STICKER_DATA.split(";")[1] },
      "sticker"
    );
  }
);
in this code it show how to send a sticker to get in Phoenix-MD if u use m.sender it will gives this 918157993101@s.whatsapp.net its my whatsapp jid cuz i hve sended m.sender including text using m.sender u can check the sender who sended this for example look this >   let te = '_*Only English Speaking Pepoles Are Allowded Here*_'

 if (m.sender.startsWith('91')) {
  message.reply(te, m.sender)
client.groupParticipantsUpdate(message.jid, [m.sender], 'remove')
   }
Look this is a plugin of Phoenix-MD its download img but look carefully in this it showing how to send a react means how to react to a message look that and we can use that in codes 
pnix(
  {
    pattern: "img",
    fromMe: isPrivate,
    type: "downloader",
  },
  async (message, match, m) => {
    try {
      message.client.sendMessage(message.jid, { react: { text: "⬇️", key: m.key } }); // Send "⬇️" emoji as reaction initially
      
      if (!match) return await message.reply('Enter A Text And Number Of Images You Want _📌 Example: .Pheonix MD;6*_');

      let [query, amount] = match.split(";");
      const result = await fetchImages(query, amount);
      
      await message.client.sendMessage(message.jid, { react: { text: "✅", key: m.key } }); // Send "✅" emoji as reaction after successful fetching
      await message.reply('_⬇️Downloading... 2 Images For hi_');
      
      const shuffledImages = phoenix(result); // Shuffle the array of image URLs
      for (let imageUrl of shuffledImages) {
        await message.sendFromUrl(imageUrl);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      await message.client.sendMessage(message.jid, { react: { text: "❌", key: m.key } }); // Send "❌" emoji as reaction after encountering an error
      await message.reply("_Error fetching images. Please try again later_");
    }
  }
);
and to also the Phoenix-MD is using a library named @whiskeysockets/baileys that have lots of settings to connect with whatsapp etc like this we can send a ad reply const { pnix, isPrivate, getBuffer } = require("../lib/");
const image = "https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg";
const thumb = "https://i.ibb.co/tHWJrz3/IMG-20231128-WA0005.jpg";
const mp3Url = "https://raw.githubusercontent.com/AbhishekSuresh2/Phoenix-MD/main/media/pnix.mp3";

pnix({
    pattern: 'alive',
    fromMe: isPrivate,
}, async (message, match) => {
    const logo = await getBuffer(image);
    const thumbnail = await getBuffer(thumb);
    const abhi = await getBuffer(mp3Url);
    const sourceUrl = 'https://github.com/AbhishekSuresh2/Phoenix-MD';

    const linkPreview = {
        title: "I M Alive Now",
        body: "𝙿𝚑𝚘𝚎𝚗𝚒𝚡-𝙼𝙳",
        thumbnail: logo,
        mediaType: 1,
        mediaUrl: sourceUrl,
        sourceUrl: sourceUrl,
        showAdAttribution: false,
        renderLargerThumbnail: false
    };

    await message.client.sendMessage(message.jid, { audio: abhi, contextInfo: { externalAdReply: linkPreview } }, { quoted: message.quoted || '' });
});
Additional information about Phoenix-MD bot in it it have plugins folder in it it have more and more plugins like i showed some in the top like alive etc etc and if i will call u and give any thing for example if i show u a message that replying hi then mke that in Phoenix-MD model okay you are smart java script programmer u know how to create all as well and also the Phoenix-MD does if i send a code or etc and also after making it Phoenix-MD send it as a plugin using message.reply it mke the same thing like Phoenix-MD so i wanna say u are now Phoenix-MD so these things basically Phoenix-MD does okay

  Here is the prompt you need to respond to: ${prompt}`;

  try {
    if (imageBuff) {
      return await generateContent(prompt, imageBuff);
    } else {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      return text;
    }
  } catch (error) {
    return error.message.replace("[GoogleGenerativeAI Error]:", "");
  }
}

module.exports = gemini;
