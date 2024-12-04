const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/DQsplyLnYfg3bEeF8LqRNk";
global.website=process.env.GURL || "https://chat.whatsapp.com/DQsplyLnYfg3bEeF8LqRNk" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://ibb.co/XLW67g9" || "https://ibb.co/XLW67g9" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256765050916";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "AgICAyOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDk5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQyLFxuICAgICAgICA0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NCxcbiAgICAgICAgNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNzQsXG4gICAgICAgIDY0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI0V2hYcFR6ZE1sSGR6TURXMkJ1OUk4WlhzMWNqRURBU2kzWnZJTGREVkg4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFTlNieFYyS1RpbXhuRlJFaDV2bGN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjZjOGM4M2E0LWFmY2QtNDczOS05N2NhLTg2M2NlYjNjZjEwOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NixcbiAgICAgIDEyMCxcbiAgICAgIDE3LFxuICAgICAgMjM0LFxuICAgICAgMTc3LFxuICAgICAgMTY4LFxuICAgICAgMjE1LFxuICAgICAgMTgsXG4gICAgICAxNDIsXG4gICAgICAxMzEsXG4gICAgICAxNzQsXG4gICAgICAxMDUsXG4gICAgICAxNjEsXG4gICAgICA1OCxcbiAgICAgIDEwMixcbiAgICAgIDExLFxuICAgICAgMTY4LFxuICAgICAgMTI5LFxuICAgICAgMTk5LFxuICAgICAgMjEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgMTg5LFxuICAgICAgNjUsXG4gICAgICAyMTUsXG4gICAgICA1OSxcbiAgICAgIDE2MixcbiAgICAgIDIxNixcbiAgICAgIDE5NCxcbiAgICAgIDQ4LFxuICAgICAgMjU1LFxuICAgICAgNixcbiAgICAgIDE4OCxcbiAgICAgIDIzNSxcbiAgICAgIDExMCxcbiAgICAgIDU2LFxuICAgICAgMTkzLFxuICAgICAgMTIsXG4gICAgICAxLFxuICAgICAgMTk4LFxuICAgICAgMTI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZYTFg2MU1ZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3NjUwNTA5MTY6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxMTU0MDYxMTQ5MzkwMTo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLQ0RqTzRHRUx2b3dMb0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJBdkNoOG9IdjFIK05TM1Y4K2dCbGdaYnY3T0N0UHVuMkVDL0U0R0VTekE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY3U5dzlYOCtsUjFhV0hwc3FlTENxbTUweVFWczFNM3dWQzEzSW5yME1jQ29CZjgwZWdtYVVOZ21lck1WTDR5NjBmQ0RndDRjOUxqUWJGNlVlM3d0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYU9ySCt4djNHTlloWjcwaEx5UUdvK2NtZHgxV2M1OHUrNC9EdE16S05BS29uMkhRSDY5cHBTWlM3QjZGV285a3pJYzVJa01qU3ZJN3djKzhIK3JKamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzY1MDUwOTE2OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzMzA5NTAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0thXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLS2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJmMVo5Q1pNRnZobjMxaXZuR3V5SmgzUGdUNThxeWtYSUlWa3VJVG5ER2VJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDE0OTY0NzksXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝗙𝗥𝗔𝗡𝗞 𝗣𝗥𝗢-XMD",
  ownername:process.env.OWNER_NAME|| "𝗙𝗥𝗔𝗡𝗞 𝗣𝗥𝗢༆𝗦",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝗙𝗥𝗔𝗡𝗞 𝗦𝗢𝗙𝗧𝗪𝗔𝗥𝗘"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
