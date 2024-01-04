const Database = require("@replit/database")
var speakeasy = require("speakeasy");

const db = new Database()
const a= require('./test.js')
async function regis(uname) {
	
	v = await db.get(uname).then(value => {
	if (!value) {
		return false
	}
		else
	{
		return true
	}
}).then((t)=>{console.log( t)})
return v
}
var token = speakeasy.totp({
  secret: 'FZZSU7LCPUZWQUDVN43FUJLPNN2C6TZJLB5VQ43HNNUXSQ2DKRXQ',
  encoding: 'base32'
});
//console.log(token)
tok="304497"
//db.list().then(keys => {console.log(keys)})
//console.log(a.chekk('FZZSU7LCPUZWQUDVN43FUJLPNN2C6TZJLB5VQ43HNNUXSQ2DKRXQ',tok))
	a.verithenadd('test123','MFXWQPC6PAYSGL3IG4YFA5DTFJSCUQZEGJUGYYLXJF2T6P3LOZ6Q',tok).then(value=>{
		console.log(value)
	})
//db.get("weeee").then(value => {console.log(value)})
//console.log(REPLIT_DB_URL)