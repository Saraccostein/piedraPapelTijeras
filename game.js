let player_choice;
let img_source;

// 🪨 Rock event
let rock_input = document.getElementById("rock_button");
rock_input.addEventListener("click", choose_rock);

function changeImg() {
    document.getElementById('player_card_img').src=img_source;
}

function choose_rock() {
    player_choice = 'rock';
    img_source = 'assets/rock.svg';
    console.log(player_choice);
    changeImg();
    console.log(img_source);
}

// 📄 Paper event
let paper_input = document.getElementById("paper_button");
paper_input.addEventListener("click", choose_paper);

function choose_paper() {
    player_choice = 'paper';
    img_source = 'assets/paper.svg';
    console.log(player_choice);
    changeImg();
    console.log(img_source);
}

// ✂️ Scissors event
let scissors_input = document.getElementById("scissors_button");
scissors_input.addEventListener("click", choose_scissors);

function choose_scissors() {
    player_choice = 'scissors';
    img_source = 'assets/scissors.svg';
    console.log(player_choice);
    changeImg();
    console.log(img_source);
}