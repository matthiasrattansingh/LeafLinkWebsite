function sendMail(){
  let parms = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    age: document.getElementById('age').value, 
    role: document.getElementById('role').value,
  }

  emailjs.send("service_h9l2wro", "template_xh2eojn", parms).then(alert("Email Sent!!"));
}