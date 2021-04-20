function rpsGame(yourChoice) {
    console.log(yourChoice.id);

    let humanChoice, botChoice;
    // humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    // result = decideWinner(humanChoice, botChoice);
    // message = finalMessage(result);
    // rpsFrontEnd(yourChoice.id, botChoice, message);

}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}