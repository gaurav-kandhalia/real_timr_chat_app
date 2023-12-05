const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
let username = document.getElementById('username');
let online = document.getElementById("online_logo");

do {
    name = prompt('Please enter your name: ')
} while(!name)


online.innerText = ".";
textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

const currentDate = new Date();

const hours = currentDate.getHours().toString().padStart(2, '0');
const minutes = currentDate.getMinutes().toString().padStart(2, '0');
// const seconds = currentDate.getSeconds().toString().padStart(2, '0'); 

const current_time = `${hours}:${minutes}`;

// console.log(timeString);

function sendMessage(message) {
    
    let msg = {
        user: name,
        message: message.trim(),
        time:current_time
  
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)


// Get the current date and time in a human-readable format


}


socket.on()
socket.on('disconnect', () => {
    console.log('Disconnected from the server');
  });

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message');

  
 
    let markup = `
   
    
        
        
    <small>${msg.time}</small>
        <h4>${msg.user}</h4>
    
        <p>${msg.message}</p>

    `


    mainDiv.innerHTML = markup 
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
    username.innerText = msg.user;
    scrollToBottom()
})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}



function register_form(event) {
    console.log("submitted")
    event.preventDefault();
    const form_data = document.getElementById('register_form');
    console.log("fomr_data",form_data)
    const user_data = new FormData(form_data);
    
    const data_form = JSON.stringify({
        name:user_data.get('username'),
        email:user_data.get('email'),
        password:user_data.get('password')
    })
    
    console.log("data_form-->",data_form);
}