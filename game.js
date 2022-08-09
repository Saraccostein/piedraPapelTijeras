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
    
    // 📄🎴 Paper Card
    player_text.innerHTML             = 'Papel';
    player_img.src                    = 'assets/paper.svg';
    player_card.style.backgroundColor = blue;
    player_text.style.color           = white;
    player_img.style.width            = '10rem';
    player_img.style.marginTop        = '1rem';

    player_choice = 'paper';
    bot_choose_card();
    battle();
}
 
// ✂️ Scissors
let scissors_input = document.getElementById("scissors_button");
scissors_input.addEventListener("click", choose_scissors);
scissors_input.addEventListener("click", bot_choose_card);


function choose_scissors() {
    
    // ✂️🎴 Scissors Card;
    player_text.innerHTML             = 'Tijera';
    player_img.src                    = 'assets/light_scissors.svg';
    player_card.style.backgroundColor = purple;
    player_text.style.color           = light_gray;
    player_img.style.width            = '9rem';
    player_img.style.marginTop        = '1.3rem';

    player_choice = 'scissors';
    bot_choose_card();
}


// 🤖 Bot
let bot_choice;

let bot_card = document.getElementById('bot_card');
let bot_text = document.getElementById('bot_text');
let bot_img  = document.getElementById('bot_card_img');

function bot_choose_card() {
    let bot = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    if (bot == 1) {

        // 🪨🎴 Rock Card
        bot_text.innerHTML             = 'Piedra';
        bot_img.src                    = 'assets/rock.svg';
        bot_card.style.backgroundColor = dark_gray;
        bot_text.style.color           = gray;
        bot_img.style.width            = '10rem';
        bot_img.style.marginTop        = '1rem';

        bot_choice = 'rock';

    } else if (bot == 2) {

        // 📄🎴 Paper Card
        bot_text.innerHTML             = 'Papel';
        bot_img.src                    = 'assets/paper.svg';
        bot_card.style.backgroundColor = blue;
        bot_text.style.color           = white;
        bot_img.style.width            = '10rem';
        bot_img.style.marginTop        = '1rem';

        bot_choice = 'paper';

    } else if (bot == 3) {

        // ✂️🎴 Scissors Card;
        bot_text.innerHTML             = 'Tijera';
        bot_img.src                    = 'assets/light_scissors.svg';
        bot_card.style.backgroundColor = purple;
        bot_text.style.color           = light_gray;
        bot_img.style.width            = '9rem';
        bot_img.style.marginTop        = '1.3rem';

        bot_choice = 'scissors';
    }

    if (player_choice == bot_choice) {
        tie();

    } else if (player_choice == 'rock' && bot_choice == 'scissors') {
        player_wins();

    } else if (player_choice == 'paper' && bot_choice == 'rock') {
        player_wins();

    } else if (player_choice == 'scissors' && bot_choice == 'paper') {
        player_wins();

    } else {
        bot_wins();
        
    }
}

// 💬 Tooltip
let player_tooltip = document.getElementById('player_tooltip');
let bot_tooltip    = document.getElementById('bot_tooltip');

function player_wins() {
    player_tooltip.style.backgroundColor = black;
    player_tooltip.innerHTML = '¡Gané!';
    player_tooltip.style.color = light_gray;

    bot_tooltip.style.backgroundColor = night;
    bot_tooltip.style.color = night;
}

function bot_wins() {
    bot_tooltip.style.backgroundColor = black;
    bot_tooltip.innerHTML = '¡Gané!';
    bot_tooltip.style.color = light_gray;

    player_tooltip.style.backgroundColor = night;
    player_tooltip.style.color = night;
}

function tie() {
    player_tooltip.style.backgroundColor = black;
    player_tooltip.innerHTML = 'Empate';
    player_tooltip.style.color = light_gray;

    bot_tooltip.style.backgroundColor = black;
    bot_tooltip.innerHTML = 'Empate';
    bot_tooltip.style.color = light_gray;
}