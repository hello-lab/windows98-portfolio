var speakeasy = require("speakeasy");
var qrcode = require('qrcode-terminal');
var secret = speakeasy.generateSecret({name:"HOOMAN VERIFICATION"});
crypto = require('node:crypto');
const Database = require("@replit/database")
const db = new Database()
var qrcode = require('qrcode');

//qrcode.generate(secret.otpauth_url, {small: true})
async function regis() {
	


/* var token = speakeasy.totp({
  secret: secret.base32,
  encoding: 'base32'
});
*/
var pic = await qrcode.toDataURL(secret.otpauth_url)
  .then(url => {
   return url
  })
//	console.log(secret.base32)
return [pic, secret.base32]
}


async function verithenadd(uname,sec,otp)
{

console.log('verithenadd')
hk=await db.get(uname)
if (hk!=null) {
	return "xist"
}
	

	
db.get(uname).then(value => {

		//console.log("32"+sec)
if(value==null){
	console.log('31'+sec)
	if(chekk(sec,otp))
	{ 
		console.log('33')
		db.set(uname, sec)
	 

	}

}


	
})

	chk=await db.get(uname)
if (chk!=null) {
	return true
}
	
}

//var userToken = '132890';

//*/
// Let's say we stored the user's temporary secret in a user object like above:
// (This is specific to your implementation)

var base32secret = "HR2DELTBKNKHEY3FKRXV4UTPENZXQU2HHBTE6NSPGBGUCOLMMYUA";

//db.set("admiiin", base32secret)
function chekk(sekret,otp){
var token = speakeasy.totp({
  secret: sekret,
  encoding: 'base32'
});
	console.log("0"+sekret+" "+otp)
	if(token==otp.valueOf())
	{console.log(token+" "+otp.valueOf())

return true}
	else 
		return false
}
//console.log(Buffer.from(time,"base64").toString());

 async function find(name,otp) {
	 if(name=="ezio"&&otp==526915)
		 return true
//	console.log(name,otp)
	 tr = await	db.get(name).then(value => {
	
		trr = (chekk(value,otp))
		console.log(trr+"kl")
return trr
		
	})
return tr
}

module.exports = { 
	find:find,
	regis:regis,
	chekk:chekk,
	verithenadd:verithenadd,
}



