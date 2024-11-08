//Nteej code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK04waUMvM0lZaEtzeEdXbGM1RFN3aWx2NklOVWJlM0lmbldiajhZRE1HWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmwzOEpKNlhoY3RWYVZmUVh2MHQvWWxkQkJ4ZjF1WlZJSTRNNnQyUGxVaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvR3o3dVBYM1BkUlh0U1JDL1RqTmkwbFJadHJYd3pqRzdBUnk1WEtpb1VjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnMnFONi9jTXo1bmdkVXFRVVM1Rmh1cVIrY0NJMERQQjUzS2J1NnFqblFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktIQWpNYzRScnU1N3VZaFpxWjVEU3lkZUdQOEN4MFhUZFRvQmF2clFCMkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhQcHg4NzV2NFM3TUxQOEJIT3ZoSitDR01XdjJnU3hiUDRaeHVJc09aeDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNabFd0QllYWUgwQkJHODhsOWluajhHT0xqMnZ3bmRIdCtFNVVhTjdHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1N3Y21wamF6TUtOSUdrME5tR21lYXhsTG1vOXc0b0VzM2MrMVdsMGNuYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImI4Q1JGQzBzUGZTaTZGSithV1ZqODZMWHJQMzZHY0MzeEZaZjBYNTNNRlF5Mk14NG1MY0xWK0xaNzBYaTdXV0ZFcHJnbDQxcEFLT0pPNnFOVFgvUGh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NywiYWR2U2VjcmV0S2V5IjoibC9IdGRyQTZ1ZEhTMU1vbkdMbXlRVWhuNE9abDFHY1ZjeUdpWnprVFpMOD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYndwZUh1Y2NReTZWckNhU2h0WHRRZyIsInBob25lSWQiOiIwMzM0NzY2Zi04YjUxLTQ4ZjYtYWUyYy0xM2JlZDEyZTA4YzAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUktoTDJoTVhNcHpJM3NVL0NJMkxEUVhBWUNjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZpcW5wOGlOK1J3UWlualFPY2gybytJTlQ3Zz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIxTlRFNDJMViIsIm1lIjp7ImlkIjoiMjM0OTExMjA0MDUwMzozOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJTQU1DT01NUyBJTlRFUk5FVCBTRVJWSUNFUyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSTZROHMwRkVOT0F1TGtHR0FjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidUpHVmR2QldOWXdZWlRhK1c4MG9jcHRCcklsYXpFRm1uWGlTMDFINS9sRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoic2RTY2NoSXFUbEJzYTkyTjFRaktFbldkYmt1SkhkUjY2UklSMGtwZ3RNTHVOd2ROdzVnY0JwK2hGajlHUVZRZnd4clZlcGt5TW15OWZqRHlpamNBRGc9PSIsImRldmljZVNpZ25hdHVyZSI6InJkYzNEMVA1QmNBdXc2eEZjRnJoMUFqWGNSTmFaNEI2VUR4OE5LSUR5aXBYNlNDV0dOSnlrMlhWQnRXMVJRaTVqbTRVcnZrbVRJMmNvMzlkVjZ1QmdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExMjA0MDUwMzozOEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiaVJsWGJ3VmpXTUdHVTJ2bHZOS0hLYlFheUpXc3hCWnAxNGt0TlIrZjVSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxMDY4MDAwfQ==";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "2349112040503";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`SAMCOMMS_BOT`",
  author: process.env.PACK_AUTHER || "SAMCOMMS_BOT",
  packname: process.env.PACK_NAME || "SAMCOMMS_BOT",
  botname: process.env.BOT_NAME || "SAMCOMMS_BOT",
  ownername: process.env.OWNER_NAME || "SAMCOMMS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Ntee-j01/NTEEJ-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vae3GZF9Bb658QgSCl1I";
global.website = process.env.GURL || "https://chat.whatsapp.com/Er6RNNNVWV5LORN9Nr6hL7";
global.devs = "2348123997976";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "null";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
