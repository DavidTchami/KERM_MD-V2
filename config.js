//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidotchami@gmail.com";
global.location = "Yaoundé, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237692092849";
global.sudo = process.env.SUDO || "237692092849";
global.owner = process.env.OWNER_NUMBER || "237692092849";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE1XdFgyRnJRUnFSQnFaZm85NUsra1BsNENBL2puR0NuTWhJbEkwZWsxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjlaWTJNS0dVckRscll3djZkYW4vR1pFblpNTDVOcXUvZTlKdUFGQlpTbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRUhjbzF2N1NEVS9UY0NBWGUrTTZiMysycW5YT296S3RBVUZjTlJkeTBnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxbEdCandSZURoTytDQ1NZdDJrUTV2VkU5TXNPSkhXZ1N5RXlldnhjUWxZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFITXhuaFFLaWJzMVZ0MjRneWNzKzMxUkxkVlpEQUwxakxhVk9aME1rMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImErWTlOMVp3cU1lM3ozYVVQRlY2dUdGSC92VFYyc3FxOFpmOFJiQjF3SG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUQySE80R3c4RXd3M3FWWVRJdUtpWnVUS2d6ZEtRSmxRVE5kZTBDSTUxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVDg2QXRFSGRVSzJBUktXaUQxVlZOSjQ1TkdIWlREWmROZExmd2tNTlltND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdtVzVOMnZKcG44NVkwd3FYV0pJRkVxVjMxamFTQVo4UDhCNHdjQTgzK2VXN3dram5QcWpQbGs4Y28zNEtzUmRvbFI0VWZiUmhlb3V0SGNRaTN3aUNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiJwd2NpYi9FcDRwTjZGdzlPRksxZStVUjArYS83REFoZXE1c2JEYjZ2U0FRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJYOGs2QzJrRVR4V3JockhUYU5hdzJnIiwicGhvbmVJZCI6IjRiZDQwNWJhLTI0YjMtNDI3ZS1iMGZhLWFkODFhMjgwNDIwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4N0x3V0tIaDlhckF0b0pwS0MxN0JzVXo4TWM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXNWTG82c3JITXYxM3VFR1plMWd1VE82RFhRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkdSM0ZQQVJYIiwibWUiOnsiaWQiOiIyMzc2OTIwOTI4NDk6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm5OcmM4TUVJbWVsN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaVZqaWt6OFEramNjSjI5UWZmZUt6S1pnMmZRTTdORnU3MGtTdm1nSHFGYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZjlCZXdTM1AzWCtmUTlLYVZoKzBJdjNLcVpKR21haFRZWUZWNkIrd0cxY2habmxWbGdSbGc1OHRGTzk0VkFzMzlNcmNKR3FweXJEOUlyaGNCMExnQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IlVLQkpiT3FPUFU5OFgvdEd0YnBscXFhVlgxYUFDWGI1RXUwbytFOXkvVXpCQytoU0NEL0hYdWZOMmNhZDBDNW16dk94RitLMTE2bDhudkMzT05YZUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjkyMDkyODQ5OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWWxZNHBNL0VQbzNIQ2R2VUgzM2lzeW1ZTm4wRE96UmJ1OUpFcjVvQjZoWCJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2MzM2NzkwfQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "¥",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`MACHINE A TUER DE ☞⌜𝔇𝔯 𝔖𝔠𝔞𝔪⌝☜`",
  author: process.env.PACK_AUTHER || "𝔇𝔯 𝔖𝔠𝔞𝔪.𝔡𝔰 ",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜𝔇𝔯 𝔖𝔠𝔞𝔪.𝔡𝔰 ⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
