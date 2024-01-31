const uname=document.getElementById("name");
const pass=document.getElementById("pass");
const submit=document.getElementById("submit");
let A=parseInt('3A9E9',16);
submit.addEventListener("click",function(){
    console.log(pass.value);
    console.log(uname.value);
    if(pass.value==A&&uname.value=="Cathleen"){
        window.location.href="letter.html";
    }else{
        alert("nama atau password salah");
    }
})