const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const chek = require('./test.js')
const session = require('express-session')
const fs = require('fs')
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.json());


app.listen(port, () => {
  // Code.....
})

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'its PERRY the platypus',
  resave: false,
  saveUninitialized: true,
	cookie:{
	maxAge: 3600000}
}))
app.use(express.static('templates'))

app.get('/', function(request, response) {
	console.log(request.session)
	// Render login template
	if (request.session.namEe ) {
		response.sendFile(path.join(__dirname + '/HM.html'));

	}
	else
		{
					//response.sendFile(path.join(__dirname + '/HM.html'));

	response.sendFile(path.join(__dirname + '/templates/login.html'));

		}
});

app.get('/register', function(request, response) {
	//console.log(request.session)
	// Render login template
	if (request.session.namEe ) {
	//	request.session.namEe = request.body.uname;
		response.redirect('/')

	}
	else
		{
	response.sendFile(path.join(__dirname + '/templates/register.html'));
console.log("56")
		}
});

app.post('/regster', async (req,res) => 
{
	
	console.log(req.body)
	//console.log("61"+chek.verithenadd(req.body.uname,req.body.sekret,req.body.otp))
chek.verithenadd(req.body.uname,req.body.sekret,req.body.otp).then(val=>{

	if(val=="xist"){
			res.send("exist")
		}
	else if(val!=true)
	{
	req.session.namEe = req.body.uname;
			console.log("50"+JSON.stringify(req.session.namEe))
			console.log(__dirname + '/templates/HMM.html')
			res.redirect('/');
}
		 
	else
{
	res.redirect('/register');
}
})
})

app.post('/login', async (req,res) => 
{// console.log(req.session.name)
	
	 chek.find(req.body.uname,req.body.otp).then(ch => {
		 console.log(req.body.uname)
	if(ch==true)
	{req.session.namEe = req.body.uname;
		 
			res.sendFile(path.join(__dirname + '/HM.html'));
	}
	else
		{
	  // res.send("not-gud")
		res.redirect('/');
			
		}
	 })
	
})


app.post("/uname",(req,res) =>{
	res.send(req.session.namEe)

})

app.post("/qr", function(req, res){
       
  
	chek.regis().then((pik)=>{
		res.send('<img name='+pik[1]+' id ="qr" src="'+ pik[0]+'">')
	})
	
})
   
app.get("/session", function(req, res){
   	console.log(req.session)

    var name = req.session.name
     res.send(name)
   
    /*  To destroy session you can use
        this function 
     req.session.destroy(function(error){
        console.log("Session Destroyed")
    })
    */
})


