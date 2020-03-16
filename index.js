//build a function named writeCards() that accepts two arguments: an array of string names, and an event name. Create a for loop with a counter that starts at 0 and increments at the end of each loop. The condition should halt the for loop after the last name in the array is printed out in the loop body.
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let i = 0; i < namesArray.length; i++ ) {
      thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }

  //write a function, countDown, that takes in any positive integer and, starting from that number, counts down to zero using console.log()
  function countDown(startingNumber){
      while (startingNumber > 0){
          console.log(startingNumber);
          startingNumber -= 1;
      }
      console.log(startingNumber);
  }