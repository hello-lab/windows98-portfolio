var cachenam="assets"
var ASSET = [
	'./aboutme.html',  './index1.html'   ,'./BLUTHIN.jpg'  ,  './w95fa-webfont.woff'  ,'./script.js'    ,'./w95fa-webfont.woff2',      './off.js'  ,      './style.css' ,'./images/call.png','./images/email.png','/images/logo.png','./images/startbut.png','./images/win98.png','./images/winup.png'
]
console.log(ASSET)


async function pre(){

	const cache = await caches.open(cachenam)
	return cache.addAll(ASSET)
}
self.addEventListener('install',event => {
	 event.waitUntil(pre())
	console.log('offline ready')

	
})

self.addEventListener('activate',event =>{
console.log('offline activated')
	
})
self.addEventListener('fetch',event =>{
console.log('fetched ?!')
	 event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.open(cachenam)
          .then((cache) => {
            return cache.match(event.request)
          })
      })
  )
})

async function fetchass(event){
	
	try{

		const res = await fetch(event.request)
		return res
	}
	catch(err){
const cache = await caches.open(cachenam)
		return cache.match(event.request)
	}
	
}