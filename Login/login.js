function registracija(){
    if(document.getElementById(pass1)==document.getElementById(pass2))
    {
        var current = new Date();
        var x = document.getElementById("user2").value;
        var y = document.getElementById("pass1").value;
        var z = document.getElementById("mail").value;
        localStorage.setItem("user", x);    
        localStorage.setItem("pass", y);
        localStorage.setItem("mail", z);
        localStorage.setItem("time", current.toLocaleString());
        alert("Uspješno ste se registrovali");
        document.getElementById("user2").value = "";
        document.getElementById("pass1").value = "";
        document.getElementById("pass2").value = "";
        document.getElementById("mail").value = "";
        
    }
}
function prijava(){
   var a = localStorage.getItem("user");
   var b = localStorage.getItem("pass");
   var current1 = new Date();
   if(a==document.getElementById("user1").value && b==document.getElementById("pass3").value){
    localStorage.setItem("time1", current1.toLocaleString());
    window.open("../Main/mainpage2.html");
   }
}