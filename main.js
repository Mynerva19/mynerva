window.onload = function() {
  var canvas = document.getElementById("myImage");
  var ctx = document.createElement("img");
  ctx.style.width = "270px"
  ctx.style.height = "270px"
  ctx.style.position = "absolute"
  ctx.style.left = "50%"
  ctx.style.transform = "translate(-50%)"
  ctx.id = "ctx0"
  var ctx1 = document.createElement("img");
  ctx1.style.width = "270px"
  ctx1.style.height = "270px"
  //ctx1.style.background = "black"
  ctx1.style.position = "absolute"
  ctx1.style.left = "50%"
  ctx1.style.zIndex = "-1"
  //ctx.style.marginTop = "-50%"
  ctx1.style.transform = "translate(-50%)"
  ctx1.id = "ctx11"
  var ctx2 = document.createElement("img");
  ctx2.style.width = "270px"
  ctx2.style.height = "270px"
  ctx2.style.background = "transparent"
  ctx2.style.position = "absolute"
  ctx2.style.left = "50%"
  ctx2.style.zIndex = "1"
  ctx2.id = "ctx22"
  //ctx.style.marginTop = "-50%"
  ctx2.style.transform = "translate(-50%)"
  ctx2.class = "frame0"
  
  var ctx3 = document.createElement("img");
  ctx3.style.width = "270px"
  ctx3.style.height = "270px"
  ctx3.style.background = "transparent"
  ctx3.style.position = "absolute"
  ctx3.style.left = "50%"
  ctx3.style.zIndex = "0"
  ctx3.id = "ctx33"
  //ctx.style.marginTop = "-50%"
  ctx3.style.transform = "translate(-50%)"
  
  ctx.class = "frame0"
  ctx1.class = "frame0"
  ctx2.class = "frame0"
  ctx3.class = "frame0"
  let img = "PhotoResizer"
  let imagedata = [`${img}/eye0.png`,`${img}/eye1.png`,`${img}/eye2.png`]
  let imageHead = [`${img}/head0.png`,`${img}/head1.png`]
  let misc = [`${img}/blush.png`,`${img}/happyClose.png`,`${img}/sadClose.png`,`${img}/happy.png`,`${img}/sad.png`]
  
  let setImageData = [
      /*panel 1*/     [imagedata[0],imagedata[0],
  	  /*panel 2*/	  imagedata[1],
  	  /*panel 3*/	  imagedata[2],imagedata[2],
  	  /*panel 4*/     imagedata[1]
  					  ]
  					  ]
  	let spd = 0
  	let i =0
  function animation() {
  	
  	i = i + 1
/*		imaged.onload = function(){
		ctx.drawImage(imaged,0,0,canvas.width,canvas.height);
		//ctx.drawImage(imaged,0,0,canvas.width,canvas.height);
		}*/
		
		/*imaged2.onload = function(){
		//ctx.drawImage(imaged,0,0,canvas.width,canvas.height);
		ctx.drawImage(imaged2,0,0,canvas.width,canvas.height);
		}*/
		
  	if(setImageData[0].length == i){
  		i = 0
  	}
  	if(setImageData[0][i]==setImageData[0][0]){
  		spd =3000
  	}
  	if(setImageData[0][i]>setImageData[0][1]){
  		spd = 100
  	}
  	if(setImageData[0][i]>setImageData[0][2]){
  		spd = 500
  	}
  	
    ctx.src = setImageData[0][i]
    ctx1.src = imageHead[1]
    ctx2.src = misc[0]
    setTimeout(animation,spd)
  }
    setTimeout(animation,spd)
    
   
    document.getElementById("button1").addEventListener("click",function(){
    	ctx3.src= misc[1]
    })
    document.getElementById("button2").addEventListener("click",function(){
    	ctx3.src = misc[2]
    })
    document.getElementById("button3").addEventListener("click",function(){
    	ctx3.src = misc[3]
    })
    document.getElementById("button4").addEventListener("click",function(){
    	ctx3.src = misc[4]
    })
    
    canvas.appendChild(ctx)
    canvas.appendChild(ctx1)
    canvas.appendChild(ctx2)
    canvas.appendChild(ctx3)
   
}

function update(val) {
  		let getSlide = document.getElementById("myRange")
  		let per = parseFloat(val+"%")/100.00
 	 	
 	 	let ranger = document.getElementById("ctx22")
 	 	
 	 		ranger.style.opacity = per
  	}
  	
 function update2(vali) {
 let getSlide = document.getElementById("myRange2")
 let per = parseFloat(vali+"%")/100.00
 //let ranger = document.querySelectorAll(".frame0")
 let ranger = document.getElementById("ctx0")
 let ranger1 = document.getElementById("ctx11")
 let ranger2 = document.getElementById("ctx22")
 let ranger3 = document.getElementById("ctx33")
 
	 ranger.style.top = vali+"px"
	 ranger1.style.top = vali+"px"
	 ranger2.style.top = vali+"px"
	 ranger3.style.top = vali+"px"
	 
 }
 
 document.getElementById("button5").addEventListener("click",function(){
 	if(this.textContent=="Donate!!!") {
 		this.innerHTML = "Back"
 		document.getElementById("myFrame").style.display="block";
   }
 	else {
 		this.innerHTML = "Donate!!!"
 		document.location="index.html";
   }
 })