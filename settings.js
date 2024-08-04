


const fs = require('fs');  //----- module----//

//checking if config.env exist otherwise settings.js will be used
//////////////////////////////////////////////////////////////
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
/////////////////////----END---///////////////////////////////




//////////////////////////////////////////////////
/////----------------Global---------------//////
/////////////////////////////////////////////////

global.thumb = fs.readFileSync('./lib/bugs/XByte.png') //Don't change
//////////////////////////////////////////////////////////
const BOTNAME = 'X - hacker'; //BOT name
//////////////////////////////////////////////////////////
const FOOTERNAME = '*Powered by prince*'; //Footer text











//----------------OWNER NUMBER------------------------------//
//////////////////////////////////////////////////////////////////

global.owner = process.env.OWNER_NUMBER  || '923228700316' ;  //put your number without +

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//




//////////////////////Global-end////////////////////////////////////////
module.exports = { //exporting modules to use in plugins









//----------------Session ID------------------------------//
//////////////////////////////////////////////////////////////////

SESSION_ID: process.env.SESSION_ID || 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0VaQVBFdnY2cENuWkVoN3lUcGJHY3VCUDV4dG0vamU0YkRwNWtRcjZuRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXd3RVJkL1NtSk12L09vUVA2eU91QUU0NGpreFhPc0czc0JkM2RZTCtGYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR3R0dFNyRmN1SGJXeVJ0QmVVcXM4SVlncGVMV0F3R3QvVU8zM1JqNDFRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxV0dVLzRURFo2b0ErZ3VTbzZoZEMvOUZxUUI1azZxT3huWTRuMkd5MWtrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFFZ1lRdjN5SXQ4Zmh3YUxmQ3U0OUN6YlpUc2NPWk92VWo1VVJmUGQ2bVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndpeGVCWHRObVhlZ0pLOElTK3FDRnRtQ0RJSk5ObXBRbTRLK1RkNWRqSEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pqMHZaM3ptcFhCQWZ4NS9NeFpHOXU0VnZsRXhGeWtnT0RVVTBVYXdFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoienRLcW1KY3R5MUpGMGJ3VzF3OWJjV05nanBnSU1yNThvaWM2bjJPUDJtdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit5UUhtTU90MUl2VjM5RTFLUGYwbXlXTkZMS1gxdmJmVUlpSlZxNHZhZis0YmxlZ1JLc204TGpjU25ndGJleVg5a3lDZHBZc0ZnaVJJWTFQZ1RUQkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6ImVKbHFZN1NHTW5QWEloTllUMFlNL3BYNllFZmNuTU4ycENWNCtCWWg2cGM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjI4NzAwMzE2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZFMzM4MkNDODY0M0E3REJEREY5MDI2N0M3QzE5ODg1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI3NTA0NTF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIyODcwMDMxNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMjAwRTQyQUYyMzlDN0RDMUUzREEzMThGOTg0MjRDOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyNzUwNDUyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjaVJBeFlMUVFqS2hkX3VuVkEtNndnIiwicGhvbmVJZCI6ImY5NmFlZTliLTkzN2QtNDExNi1iMGQ5LWFiZDZlNGVlZDNiYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvSnozYUlYZGRVSk41ckJCblBtNkNIZ0U3V2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczBIMTMwNXNzYktPekxxZ3NjOVpQUThXbm5RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw2TFNGR00yIiwibWUiOnsiaWQiOiI5MjMyMjg3MDAzMTY6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiIvL/CdkJLwnZCA8J2QkfCdkIPwnZCA8J2QkSDwnZCI8J2QkfCdkIXwnZCA8J2QjSDwn6e4In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNK0ovT0lIRU9TcnZMVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4bzNQZDlhendjRFZRaEZRSG13ZHRSelRPR3hvSnEycklOTThpaU1aYkJzPSIsImFjY291bnRTaWduYXR1cmUiOiJIZXBXSjQ3RlB4RnVDL2F1Mjd5Q2tTYWFOTkxvVnFvZU90aUdLZVpicWk0Nm1TSGlMODJkd3VIWG1mV3drWnduQUFVVS9Sb3pzaEl5UUh5aVJBVzhCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVXY0bmRKbnZMSHNBMUJMMVRqa2tqTGtSanlxQURMcmgwMlkwU2NmZEh2YzJvclhtVzZjUXAzanR6OHRHVDhNZ2dORGdTQmx3WGw0UnlMWnZyNjFvQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMjg3MDAzMTY6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjYU56M2ZXczhIQTFVSVJVQjVzSGJVYzB6aHNhQ2F0cXlEVFBJb2pHV3diIn19LHsiaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjI4NzAwMzE2OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2FOejNmV3M4SEExVUlSVUI1c0hiVWMwemhzYUNhdHF5RFRQSW9qR1d3YiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjc1MDQ0OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKUWQifQ==', //Paste your session ID here

/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//










//----------------BOT LOGO------------------------------//
//////////////////////////////////////////////////////////////////
LOGO: process.env.LOGO || `https://telegra.ph/file/4dc85a29bee9f0fd24c71.jpg` , //BOT logo
/////////////////////////////////////////////////////////////////
//-------------------------------------------------------//





LANG:  process.env.LANG || 'EN' , //URDU OR EN
//////////////////////////////////////////////////////////

PREFIX: process.env.PREFIX || '.' , //PREFIX, LEAVE IT DEFAULT OTHERWISE BUTTON WILL NOT WORK
//////////////////////////////////////////////////////////

WORK_TYPE: process.env.WORK_TYPE || 'public' , //public or private
//////////////////////////////////////////////////////////

travaSend: process.env.TRAVA_SEND || '25' ,   //BUGS
//////////////////////////////////////////////////////////

COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' , //button or nonbutton
//////////////////////////////////////////////////////////

MODERATORS : process.env.MODERATORS === undefined ? "923072380380" : process.env.MODERATORS ,    
//////////////////////////////////////////////////////////

MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE, //Maximum size that bot can download a file   
//////////////////////////////////////////////////////////

OWNER_NAME: process.env.OWNER_NAME || 'prince' , //Your name
//////////////////////////////////////////////////////////

POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
//////////////////////////////////////////////////////////

FOOTER: process.env.FOOTER || '*Powered by prince*',    
//////////////////////////////////////////////////////////

ANTI_BAD: process.env.ANTI_BAD || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_REACT:  process.env.AUTO_REACT  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_TYPING:  process.env.AUTO_TYPING  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,  //true or false
//////////////////////////////////////////////////////////

AUTO_READ:  process.env.AUTO_READ  || false  , //true or false
//////////////////////////////////////////////////////////

AUTO_BIO:  process.env.AUTO_BIO  || false  ,        //true or false
//////////////////////////////////////////////////////////

ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,  //true or false
//////////////////////////////////////////////////////////

HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
//////////////////////////////////////////////////////////

HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
//////////////////////////////////////////////////////////

INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
//////////////////////////////////////////////////////////

BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    //banned user number 
//////////////////////////////////////////////////////////

AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE, //true or false
//////////////////////////////////////////////////////////

ANTI_LINK: process.env.ANTI_LINK || true  , //true or false
//////////////////////////////////////////////////////////

BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,  //true or false    
//////////////////////////////////////////////////////////

ANTI_BOT: process.env.ANTI_BOT || false  , //true or false
//////////////////////////////////////////////////////////

ANTI_CALL: process.env.ANTI_CALL || false  , //true or false
//////////////////////////////////////////////////////////

ALIVE: process.env.ALIVE || `default`,     
//////////////////////////////////////////////////////////

AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,     //true or false
//////////////////////////////////////////////////////////

AUTO_STICKER: process.env.AUTO_STICKER || false  , //true or false
//////////////////////////////////////////////////////////

WELCOME:  process.env.WELCOME  || false ,   //true or false
//////////////////////////////////////////////////////////

ANTI_DELETE : process.env.ANTI_DELETE || false , //true or false
//////////////////////////////////////////////////////////

DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
////////////---------X - B Y T E---------////////////////
};
