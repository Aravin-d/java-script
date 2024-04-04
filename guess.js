const min = 1;
const max = 100;

const answer = Math.ceil(Math.random() * (max - min + 1) + min);
console.log(answer);

let attempts = 0;
let guess;
let running = true;

while (running) {
  guess = window.prompt(`Guess a number between ${min} and ${max}`);
  guess = Number(guess);

  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  }else if(guess < min || guess > max){
    window.alert("Enter a valid number range");
  }else{
    attempts++
    if(guess < answer){
      window.alert("Number too low");
    }else if(guess > answer){
      window.alert("Number too high");
    }else {
      window.alert(`${answer} is the correct answer. You took ${attempts} attempts`);
      running = false;
    }

  }
}
