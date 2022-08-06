let player_choice;

// 🪨 Rock event
let rock_input = document.getElementById(rock_button);
rock_input.addEventListener("click", choose_rock);

function choose_rock() {
    player_choice = 'rock';
}

// 📄 Paper event
let paper_input = document.getElementById(paper_button);
rock_input.addEventListener("click", choose_paper);

function choose_paper() {
    player_choice = 'paper';
}

// ✂️ Scissors event
let scissors_input = document.getElementById(scissors_button);
scissors_input.addEventListener("click", choose_scissors);

function choose_scissors() {
    player_choice = 'scissors';
}

console.log(player_choice);
