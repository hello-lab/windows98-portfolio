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
	

but()
hm()

}



hm = function() {
 document.getElementsByClassName("blu")[0].style.height = document.querySelector("#win").clientHeight
	console.log("hell")
}
const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
  };


function closeabutme(){
	document.getElementsByClassName("ABOUT ME")[0].style.display="none"
	document.getElementsByClassName("ABOUT ME")[0].className=""
	document.getElementsByClassName("outerthing")[0].style.display="none";
	stbut()
}
function closecall(){
	document.getElementsByClassName("PHONE")[0].style.display="none"
		document.getElementsByClassName("PHONE")[0].className=""
	document.getElementsByClassName("outerthing-phone")[0].style.display="none";
	stbut()
}

function closeemail(){
	document.getElementsByClassName("EMAIL")[0].style.display="none"
		document.getElementsByClassName("EMAIL")[0].className=""

	document.getElementsByClassName("outerthing-email")[0].style.display="none";
	stbut()
}
function closewebinfo(){
	document.getElementsByClassName("WEBSITE INFO")[0].style.display="none"
		document.getElementsByClassName("WEBSITE INFO")[0].className=""
	document.getElementsByClassName("outerthing-aboutweb")[0].style.display="none";
	stbut()
}
function opencall(){
	
	document.getElementsByClassName("outerthing-phone")[0].style.display="flex";
	showwin()
	change()
}
function openwebinfo(){
	document.getElementsByClassName("outerthing-aboutweb")[0].style.display="flex";
	showwin()
	change()
}
function openabutme(){
	document.getElementsByClassName("outerthing")[0].style.display="flex";
	showwin()
	change()
}
function openemail(){
	document.getElementsByClassName("outerthing-email")[0].style.display="flex";
	showwin()
	change()
}
  resizeOps();
  window.addEventListener("resize", resizeOps);
function change (){
var wid= document.getElementsByClassName("nabh-bar")[0].clientWidth
var hei= document.getElementsByClassName("mainthing")[0].clientHeight
	
document.getElementsByClassName("debody")[0].style.width=""+wid-8+"px"
document.getElementsByClassName("debody")[0].style.height=""+hei-70+"px"
hei=  (document.getElementsByClassName("nabh-bar")[0].clientHeight+document.getElementsByClassName("heaad")[0].clientHeight)

	document.getElementsByClassName("debody")[0].style.top=hei-1


wei=0
	for(var i = 1;i<6;i++){
wei += document.querySelector("body > div > div > div.nabh-bar > a:nth-child("+i+")").clientWidth

		
	}
	console.log(wid-wei)
		
document.querySelector("body > div.outerthing > div > div.nabh-bar > a.alws").style.width=wid-wei
	


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

async function manual_login(){
	var otp= document.querySelector('#otp').value
var uname = document.querySelector('#uname').value 

	const data = {"uname":uname,"otp":otp};
	 try {     
		 
    const response = await fetch('/login', {
      method: 'POST',
			 headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(data)
			 
      
    }).then((resp)=> resp.text()
			.then((txt) => {
			
				if (txt.includes('Kinder')) {
					location.reload()
				}
				else
				{	document.querySelector(".err").innerHTML="Wrong Username or Password"
				 setTimeout(()=>{
					 document.querySelector(".err").innerHTML="<br>"
				 }, 5000)
					


				}
		}))
		 
			console.log('Completed!', response);

}
	catch(e){
		
	}
}
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
			 
      
    }).then((resp)=> resp.text()
			.then((txt) => {
			console.log(txt)
				if (txt.includes('Kinder')) {
					location.reload()
				}
				else
				{	document.querySelector(".err").innerHTML="Wrong Username or Password"
				 setTimeout(()=>{
					 document.querySelector(".err").innerHTML="<br>"
				 }, 5000)
					


				}
		}))
		 
			console.log('Completed!', response);
		

	
//document.querySelector("html")=response
		 
	 
		 
		//  document.querySelector('#forrm').submit()

		// $('html').replaceWith(response)
		 
	 }
  catch(err) {
    console.log('Error:'+err);
  }
	
	
	console.log(document.querySelector('#otp').value )
	console.log(document.querySelector('#uname').value )}

	
})

}



async function manual_register(){
	var otp= document.querySelector('#otp').value
var uname = document.querySelector('#uname').value 

	const data = {"uname":uname,"otp":otp};
	 try {     
		 
    const response = await fetch('/login', {
      method: 'POST',
			 headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(data)
			 
      
    }).then((resp)=> resp.text()
			.then((txt) => {
			
				if (txt.includes('Kinder')) {
					location.reload()
				}
				else
				{	document.querySelector(".err").innerHTML="Wrong Username or Password"
				 setTimeout(()=>{
					 document.querySelector(".err").innerHTML="<br>"
				 }, 5000)
					


				}
		}))
		 
			console.log('Completed!', response);

}
	catch(e){
		
	}
}
function  autosubmit_register()
{
document.getElementById('otp-regis').addEventListener("input", async _ => {
  
var otp= document.querySelector('#otp-regis').value
var uname = document.querySelector('#uname').value 
var sekret= document.querySelector('#qr').name	
if(otp > 99999 )
{	const data = {"uname":uname,"otp":otp, "sekret":sekret};
	 try {     
		 
    const response = await fetch('/regster', {
      method: 'POST',
			 headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
      body: JSON.stringify(data)
			 
      
    }).then((resp)=> resp.text()
			.then((txt) => {
			console.log(txt)
				if(txt=="exist")
						document.querySelector(".err").innerHTML="OOPs! Username taken"
				else if (txt.includes('Kinder')) {
					location.reload()
				}
				else
				{	document.querySelector(".err").innerHTML="Wrong Username or Password"
				 setTimeout(()=>{
					 document.querySelector(".err").innerHTML="<br>"
				 }, 5000)
					


				}
		}))
		 
			console.log('Completed!', response);
		

	
//document.querySelector("html")=response
		 
	 
		 
		//  document.querySelector('#forrm').submit()

		// $('html').replaceWith(response)
		 
	 }
  catch(err) {
    console.log('Error:'+err);
  }
	
	
	console.log(document.querySelector('#otp-regis').value )
	console.log(document.querySelector('#uname').value )}

	
})

}





async function getqr(){
	 await fetch('/qr', {
      method: 'POST'
			
    }).then((resp)=> resp.text()
			.then((txt) => {
			
				document.querySelector("#qro").innerHTML=txt
					//location.reload()
				

			}
					 ))
						
						
						}

async function getuname(){
	 await fetch('/uname', {
      method: 'POST'
			
    }).then((resp)=> resp.text()
			.then((txt) => {
			
				document.querySelector("#win > table > tbody > tr:nth-child(6) > td > table > tbody > tr > td.username > span").innerHTML="WELCOME <b>"+txt+"</b>"
					//location.reload()
				

			}
					 ))

}


document.addEventListener('DOMContentLoaded', function () {
	
		try {
			autosubmit_login();
		} catch (error) {
			
		}
	try {
		autosubmit_register();
	} catch (error) {
		
	}
	try {
		getuname()
	} catch (error) {
		
	}
	try {
		getqr()
	} catch (error) {
		
	}
		
		try {
			dragElement(document.getElementById("login"));

		} catch (error) {}	
 		try {
			dragElement(document.getElementById("aboutme"));

		} catch (error) {}	
	try {
			dragElement(document.getElementById("phone"));

		} catch (error) {}	
	try {
			dragElement(document.getElementById("email"));

		} catch (error) {}	
	try {
			dragElement(document.getElementById("aboutweb"));

		} catch (error) {}	
	

	
})

const interval = setInterval(function() {
  
	document.querySelector("body > footer > span.time").innerHTML=
	new Date().toLocaleTimeString()
 }, 1000);



//taskbar

function taskbar(name,src){

for (let i = 4; i < 8; i++) {
if(document.querySelector(`body > footer > button:nth-child(${i})`).className==name)
 break;
	if(document.querySelector(`body > footer > button:nth-child(${i})`).className=='')
	{
document.querySelector(`body > footer > button:nth-child(${i})`).style.display = "initial"
		document.querySelector(`body > footer > button:nth-child(${i})`).className=name	
		document.querySelector("body > footer > span.dropdown").style = "top :-10px; position:relative"
	document.querySelector(`body > footer > button:nth-child(${i}) > table > tbody > tr > td:nth-child(1) > img`).src=src
	document.querySelector(`body > footer > button:nth-child(${i}) > table > tbody > tr > td:nth-child(2) > span`).innerHTML=name
		break;
	}
	
}


	

}
function stbut() {
	document.querySelector("body > footer > span.dropdown").style=""
}

function but() {

	if (document.getElementById("winklik").className=="activ") {
		
			document.getElementById("winklik").style="    position: relative;    bottom: -3px;    border: 2px solid black;    border-top: white;    border-left: white;"

	document.getElementById("winklik").className=""
	} else {
			document.getElementById("winklik").style="    position: relative;  bottom: -3px; border: 2px solid white; border-top:2px solid black; border-left:2px solid black;"

	document.getElementById("winklik").className="activ"
	}

}
dragElement(document.getElementById("login"));
dragElement(document.getElementById("aboutme"));
dragElement(document.getElementById("phone"));
dragElement(document.getElementById("email"));
dragElement(document.getElementById("aboutweb"));



function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}