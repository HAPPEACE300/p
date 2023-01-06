function login(){
    let p=document.getElementById("pwd").value;
    let r=document.getElementById("usn").value;
    let t=document.getElementById("email").value;
    document.getElementById("h").innerHTML=p;
    if(p.length>=5){
        window.location="WEB.html" 
    }
    else{
        return false;
    }
   // let lucky=document.getElementById("lucky").value;
    

    //document.getElementById("x").innerHTML="HELLO "+name+" "+"WELCOME TO THE HAPPEACE GAME"
    /*if(p>4){
window.location="index.html"


    }
      
    else{
        window.location="sing.html"
    }*/
    
}