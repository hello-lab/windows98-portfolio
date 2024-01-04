/* Open when someone clicks on the span element */

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function showwin(){
	if(document.getElementById("win").style.display!="block")
		document.getElementById("win").style.display="block"
		else 
		document.getElementById("win").style.display="none"
	console.log("hell")
}
const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };


function closeabutme(){
	document.getElementsByClassName("outerthing")[0].style.display="none";
}
function closecall(){
	document.getElementsByClassName("outerthing-phone")[0].style.display="none";
}
function opencall(){
	document.getElementsByClassName("outerthing-phone")[0].style.display="flex";
	showwin()
	change()
}
function openabutme(){
	document.getElementsByClassName("outerthing")[0].style.display="flex";
	showwin()
	change()
}
  resizeOps();
  window.addEventListener("resize", resizeOps);
function change (){
var wid= document.getElementsByClassName("nabh-ul")[0].clientWidth
var hei= document.getElementsByClassName("mainthing")[0].clientHeight
	
document.getElementsByClassName("debody")[0].style.width=""+wid-8+"px"
document.getElementsByClassName("debody")[0].style.height=""+hei-60+"px"
hei=  (document.getElementsByClassName("nabh-ul")[0].clientHeight+document.getElementsByClassName("heaad")[0].clientHeight)

	document.getElementsByClassName("debody")[0].style.top=hei


wei=0
	for(var i = 1;i<6;i++){
wei += document.querySelector("body > div > div > div.nabh-bar > ul > li:nth-child("+i+")").clientWidth

		
	}
	console.log(wid-wei)
		
document.querySelector("body > div.outerthing > div > div.nabh-bar > ul > li:nth-child(6) > a").style.width=wid-wei-14
	


}
if(navigator.serviceWorker)
	navigator.serviceWorker.register('./off.js')

window.addEventListener('load', function () {
  change()
})
window.addEventListener('resize', function () {
  change()
})

function showme (ek){
	var id = 	""+document.getElementsByClassName("active")[0].id+""
	console.log(id)
		document.getElementsByClassName(id)[0].style.display='none'

	document.getElementsByClassName("active")[0].className='close'
	document.getElementById((ek).toString()).className='active'
			document.getElementsByClassName(ek)[0].style.display='block'

}

const formData = new FormData();
function  autosubmit_login()
{
document.getElementById('otp').addEventListener("input", async _ => {
  
var otp= document.querySelector('#otp').value
var uname = document.querySelector('#uname').value 
if(otp > 99999 )
{	const data = {"uname":uname,"otp":otp};
	 try {     
    const response = await fetch('/login', {
      method: 'POST',
			 headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(data)
    });
		  document.querySelector('#forrm').submit()
    console.log('Completed!', response);
  } catch(err) {
    console.error(`Error: ${err}`);
  }
	
	
	console.log(document.querySelector('#otp').value )
	console.log(document.querySelector('#uname').value )}

	
})

}
document.addEventListener('DOMContentLoaded', function () {
	autosubmit_login()
})