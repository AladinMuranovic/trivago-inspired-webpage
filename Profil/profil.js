window.onload = function(){
    
    document.getElementById("username").textContent=localStorage.getItem("user").toString();
    document.getElementById("vrijeme").textContent=localStorage.getItem("time1").toString();
    document.getElementById("vrijeme1").textContent=localStorage.getItem("time").toString();
    document.getElementById("email").textContent=localStorage.getItem("mail");
}