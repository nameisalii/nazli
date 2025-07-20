function sendMail(){
    let parms = {
        name: document.gerElementById("Name").value,
        surename: document.gerElementById("Surename").value,
        number: document.gerElementById("Phone Number").value,
        email: document.gerElementById("Email").value,
        detail: document.gerElementById("Cleaning Details").value,
    }
    emailjs.send("service_r0ga9ym", "template_haci5sc", parms).then(alert("Email Sent!!"))
}
