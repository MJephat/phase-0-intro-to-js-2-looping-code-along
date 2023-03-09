
const gifts = ["Ada", "Brendan", "Ali"];

function writecards(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Thank you, ${gifts[i]} for the wornderful birthday gift!`);
    debugger;
  }

  return gifts;
}

writecards(gifts);


function numbers(){
    let countDown=10;
    while(countDown>=0){
        console.log(countDown--)
    }
    return numbers;
}
numbers();