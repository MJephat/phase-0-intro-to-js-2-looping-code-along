input_1 = ["Guadalupe", "Ollie", "Aki"];
input_2 = "surprise";

function writeCards(input_1, input_2) {
    var arr_a = [];

    for (let i = 0; i < input_1.length; i++) {
      var hii_line = `Thank you, ${input_1[i]}, for the wonderful ${input_2} gift!`;
      arr_a.push(hii_line);
    }
    // console.log(arr_a);
    return arr_a;
}

function countDown(hii_namba){
    while(hii_namba>=0){
        console.log(hii_namba);
        hii_namba--;
    }
}
countDown(10);