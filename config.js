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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_11_19_12_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMjIsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgNixcbiAgICAgICAgMTA2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNyxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NSxcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDU2LFxuICAgICAgICAxODYsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzksXG4gICAgICAgIDYxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjksXG4gICAgICAgIDkzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDczLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNixcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICA0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlRtdDhlcjlQYXdvZGZ6Zk5lRzhGL1BSSWNZYi80MUFtZjZDa0ZDU3pmSzQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjc3bzdVR05xVE1lYUhrTTJJZk95VlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiY2RkNGE3YmItMWRmMS00ZTE0LWI3MTctNDFjZGNhOWI1NTA4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgOTcsXG4gICAgICA2OCxcbiAgICAgIDE0OCxcbiAgICAgIDI0NyxcbiAgICAgIDE3NixcbiAgICAgIDIzLFxuICAgICAgMTMxLFxuICAgICAgMTM5LFxuICAgICAgNyxcbiAgICAgIDE5MSxcbiAgICAgIDM5LFxuICAgICAgMTA4LFxuICAgICAgMTgwLFxuICAgICAgMTAsXG4gICAgICAyMDgsXG4gICAgICAxNTIsXG4gICAgICAxNTgsXG4gICAgICAxMjAsXG4gICAgICAyNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI1LFxuICAgICAgMTgyLFxuICAgICAgOCxcbiAgICAgIDEwNCxcbiAgICAgIDE4NSxcbiAgICAgIDE0MSxcbiAgICAgIDE3OSxcbiAgICAgIDEzOCxcbiAgICAgIDE5OCxcbiAgICAgIDc0LFxuICAgICAgNDMsXG4gICAgICAxNTgsXG4gICAgICA3LFxuICAgICAgMjUxLFxuICAgICAgOTIsXG4gICAgICAyNDYsXG4gICAgICAyMzcsXG4gICAgICAxMjcsXG4gICAgICAxMTIsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ1pIMkFEMzZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1Njc2NTA1MDkxNjo2MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjExNTQwNjExNDkzOTAxOjYwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tHRGpPNEdFTDcxd0xvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYkF2Q2g4b0h2MUgrTlMzVjgrZ0JsZ1pidjdPQ3RQdW4yRUMvRTRHRVN6QT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ4QXpCNi9wWmdFbDgxVytwdDFmckFwNXZHZEhoZWpKUHI5MHczaUdKdm52NldxalE3NDg5bGQyOUQ0aGZGQXNlV09HS1hvYTRsMHg2TXdoSnZDRnNCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtTjRwVGgvUGlyL0FrV1BidmEyQzJveFJEbXNCSmtadEVPOENROW5VSTZVNVVuS3JGbWJSMm5mZk1iUXl1N0lxd0lPckNKcHJJb2NGNCs3amN5ZWVqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3NjUwNTA5MTY6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMzMTExNzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLS2FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtLYS5qc29uIjogIntcImtleURhdGFcIjpcImYxWjlDWk1GdmhuMzFpdm5HdXlKaDNQZ1Q1OHF5a1hJSVZrdUlUbkRHZUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg0MTQ5NjQ3OSxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9=="  // PUT your SESSION_ID 


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
