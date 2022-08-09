function empty() {
    player_text.innerHTML             = '';
    player_img.src                    = '';
    player_card.style.backgroundColor = black;
}

// 🎨 Colors
const night      = '#0C0C0F';
const black      = '#1E1E26';
const dark_gray  = '#323232';
const gray       = '#EBE6E6';
const light_gray = '#D2DDF7';
const white      = '#E5E9EE';
const yellow     = '#FFFC67';
const red        = '#FF6180';
const blue       = '#0D5FFF';
const purple     = '#5E4AFF';

// 👦🏻 Player
let player_choice;

let player_card = document.getElementById('player_card');
let player_text = document.getElementById('player_text');
let player_img  = document.getElementById('player_card_img');

// 🪨 Rock
let rock_input = document.getElementById("rock_button");

rock_input.addEventListener("click", choose_rock);

function choose_rock() {
    
    // 🪨🎴 Rock Card
    player_text.innerHTML             = 'Piedra';
    player_img.src                    = 'assets/rock.svg';
    player_card.style.backgroundColor = dark_gray;
    player_text.style.color           = gray;
    player_img.style.width            = '10rem';
    player_img.style.marginTop        = '1rem';

    player_choice = 'rock';
    bot_choose_card();
    battle();
}

// 📄 Paper
let paper_input = document.getElementById("paper_button");
paper_input.addEventListener("click", choose_paper);
paper_input.addEventListener("click", bot_choose_card);

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
scissors_input.addEventListener("click", bot_choose_card);


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


// 🤖 Bot
let bot_choice;

let bot_card = document.getElementById('bot_card');
let bot_text = document.getElementById('bot_text');
let bot_img  = document.getElementById('bot_card_img');

function bot_choose_card() {
    let bot = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (bot == 1) {
        bot_choice = 'rock';

        // 🪨🎴 Rock Card
        bot_text.innerHTML             = 'Piedra';
        bot_img.src                    = 'assets/rock.svg';
        bot_card.style.backgroundColor = dark_gray;
        bot_text.style.color           = gray;
        bot_img.style.width            = '10rem';
        bot_img.style.marginTop        = '1rem';

    } else if (bot == 2) {
        bot_choice = 'paper';

        // 📄🎴 Paper Card
        bot_text.innerHTML             = 'Papel';
        bot_img.src                    = 'assets/paper.svg';
        bot_card.style.backgroundColor = blue;
        bot_text.style.color           = white;
        bot_img.style.width            = '10rem';
        bot_img.style.marginTop        = '1rem';

    } else if (bot == 3) {
        bot_choice = 'scissors';

        // ✂️🎴 Scissors Card;
        bot_text.innerHTML             = 'Tijera';
        bot_img.src                    = 'assets/light_scissors.svg';
        bot_card.style.backgroundColor = purple;
        bot_text.style.color           = light_gray;
        bot_img.style.width            = '9rem';
        bot_img.style.marginTop        = '1.3rem';
    }
}

// Player message

let player_tooltip = document.getElementById('player_tooltip')

function battle() {
    if (player_choice == bot_choice) {

        player_tooltip.style.backgroundColor = black;
        player_tooltip.innerHTML = 'Es un empate';

        bot_tooltip.style.backgroundColor = black;
        bot_tooltip.innerHTML = 'Es un empate';

    } else if (player_choice == 'rock' && bot_choice == 'paper') {

        player_tooltip.style.backgroundColor = black;
        player_tooltip.innerHTML = '¡Ganamos!';

        player_card.animate.backgroundColor

        bot_tooltip.style.backgroundColor = night;
    }
}