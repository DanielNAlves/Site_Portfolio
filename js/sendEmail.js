function sendEmail(){
    var params = {
        subject: document.getElementById("subject").value, 
        name: document.getElementById("name").value, 
        email: document.getElementById("email").value, 
        message: document.getElementById("message").value, 
    } 

    const servicesId = "service_gz7s7nj";
    const templateId = "template_g1i0g67";

    emailjs.send(servicesId, templateId, params)
    .then(() => {
        document.getElementById("subject").value = "", 
        document.getElementById("name").value = "", 
        document.getElementById("email").value = "", 
        document.getElementById("message").value = "", 
        alert("Mensagem Enviado")
    })
    .catch(() => alert("Impossível Enviar"))
}