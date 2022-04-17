const questions = [
    'Where did Frodo destroy the One Ring?',
    'What is Batman\'s real name?',
    'Which company developed the video game Minecraft?',
    'Which character is portrayed by Henry Cavill in the Netflix adaptation of The Witcher?',
    'Who likes to jump around on his tail in the Winnie The Pooh stories?'
];
const answers = ['Mount Doom', 'Bruce Wayne', 'Mojang', 'Geralt of Rivia', 'Tigger'];

function oefening3() {
    // Maak hier oefening 3
    let antwoorden = [];
    document.querySelector('.oefening3').innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        antwoorden[i] = prompt(questions[i]);
    }
    for (let i = 0; i < antwoorden.length; i++) {
        if (antwoorden[i] == answers[i]) {
            let div = document.createElement('div')
            div.style.backgroundColor = "green"
            div.style.textAlign = "center"
            div.style.color = "white"
            div.classList.add('m-1', 'p-2')
            div.innerHTML = '<b>' + questions[i] + '</b>'
            div.innerHTML += '<p>' + 'You answered: ' + antwoorden[i] + '</p>'
            document.querySelector('.oefening3').appendChild(div)
        } else {
            let div = document.createElement('div')
            div.style.backgroundColor = "red"
            div.style.textAlign = "center"
            div.style.color = "white"
            div.classList.add('m-1', 'p-2')
            div.innerHTML = '<b>' + questions[i] + '</b>'
            div.innerHTML += '<p>' + 'You answered: ' + antwoorden[i] + '</p>'
            div.innerHTML += '<p>' + 'The correct answer was: ' + answers[i] + '</p>'
            document.querySelector('.oefening3').appendChild(div)
        }

    }
}