let player_choice;
let img_source;
let choose_card = document.getElementById('player_card');
let player_text = document.getElementById('player_text');

const blue = '#0D5FFF';

function changeCard() {
    document.getElementById('player_card_img').src = img_source;
    document.getElementById('player_card').style.backgroundColor = blue;
}

// 🪨 Rock event
let rock_input = document.getElementById("rock_button");
rock_input.addEventListener("click", choose_rock);

function choose_rock() {
    player_choice = 'rock';
    player_text.innerHTML = player_choice[0].toUpperCase() + player_choice.substring(1);
    img_source = 'assets/rock.svg';
    changeCard();
    console.log(player_choice);
}

// 📄 Paper event
let paper_input = document.getElementById("paper_button");
paper_input.addEventListener("click", choose_paper);

function choose_paper() {
    player_choice = 'paper';
    player_text.innerHTML = player_choice[0].toUpperCase() + player_choice.substring(1);
    img_source = 'assets/paper.svg';
    changeCard();
    console.log(player_choice);
}

// ✂️ Scissors event
let scissors_input = document.getElementById("scissors_button");
scissors_input.addEventListener("click", choose_scissors);

function choose_scissors() {
    player_choice = 'scissors';
    player_text.innerHTML = player_choice[0].toUpperCase() + player_choice.substring(1);
    img_source = 'assets/scissors.svg';
    changeCard();
    console.log(player_choice);
}