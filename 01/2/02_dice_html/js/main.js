$(document).ready(function () {
    var array = {0: "dice1.png", 1: "dice2@2x.png",2: "dice3@2x.png", 3: "dice4@2x.png",4: "dice5@2x.png", 5: "dice6@2x.png"  };
    $(".roll-dice").click(function(){
        let ran_int1 = randomIntFromInterval(0,5)
        let ran_int2 = randomIntFromInterval(0,5)
  
        $('.dice-1').attr("src", "../images/"+array[ran_int1])
        $('#dice-2').attr("src", "../images/"+array[ran_int2])
    });
    
   
});
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }