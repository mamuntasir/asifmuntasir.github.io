// Open and close sidebar
function openNav() {
    document.getElementById("mySidebar").style.width = "60%";
    document.getElementById("mySidebar").style.display = "block";
}

function closeNav() {
    document.getElementById("mySidebar").style.display = "none";
}


// Email JS
function sendMail(params){
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: document.getElementById("toName").value,
        message: document.getElementById("message").value    
    };
    emailjs.send('service_ouw8mi8', 'template_tynxeev', tempParams)
    .then(function(res){
        console.log("success", res.status);
    })
}
