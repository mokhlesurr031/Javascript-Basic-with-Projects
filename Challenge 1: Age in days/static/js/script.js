// Your age in days



function ageInDays() {
    let birthYear = parseInt(prompt("What is your birth year?"));
    let currentYear = new Date().getFullYear();
    let totalDays = (currentYear - birthYear) * 365;
    let textAnswer = document.createTextNode(`You are ${totalDays} days years old`);

    let h1 = document.createElement('h1');
    h1.setAttribute('id', 'totalDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').append(h1);

}

function reset() {
    document.getElementById('totalDays').remove();

}