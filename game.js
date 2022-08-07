let player_choice;

let player_card = document.getElementById('player_card');
let player_text = document.getElementById('player_text');
let player_img  = document.getElementById('player_card_img');

// 🎨 Colors
const dark_gray  = '#323232';
const gray       = '#EBE6E6';
const light_gray = '#D2DDF7';
const white      = '#E5E9EE';
const red        = '#FF6180';
const blue       = '#0D5FFF';
const purple     = '#5E4AFF';

// 🪨 Rock
let rock_input = document.getElementById("rock_button");
rock_input.addEventListener("click", choose_rock);

function choose_rock() {
    player_choice = 'rock';

    // 🪨🎴 Rock Card
    player_text.innerHTML             = 'Piedra';
    player_img.src                    = 'assets/rock.svg';
    player_card.style.backgroundColor = dark_gray;
    player_text.style.color           = gray;
    player_img.style.width            = '10rem';
    player_img.style.marginTop        = '1rem';
}

// 📄 Paper
let paper_input = document.getElementById("paper_button");
paper_input.addEventListener("click", choose_paper);

function choose_paper() {
    player_choice = 'paper';

    // 📄🎴 Paper Card
    player_text.innerHTML             = 'Papel';
    player_img.src                    = 'assets/paper.svg';
    player_card.style.backgroundColor = blue;
    player_text.style.color           = white;
    player_img.style.width            = '10rem';
    player_img.style.marginTop        = '1rem';
}
 
// ✂️ Scissors
let scissors_input = document.getElementById("scissors_button");
scissors_input.addEventListener("click", choose_scissors);

function choose_scissors() {
    player_choice = 'scissors';

    // ✂️🎴 Scissors Card;
    player_text.innerHTML             = 'Tijera';
    player_img.src                    = 'assets/light_scissors.svg';
    player_card.style.backgroundColor = purple;
    player_text.style.color           = light_gray;
    player_img.style.width            = '9rem';
    player_img.style.marginTop        = '1.3rem';
}