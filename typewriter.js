let typeWriter = function() {
  const sentence = 'hello there from lighthouse labs';
  const newSentence = sentence + '\n'; //new line break at the end
  let counter = 0;

  for (const char of newSentence) {//looping through each charactor of string and output in to the console
    counter += 50;//adds 50ms to each string character
    // console.log(char)
    setTimeout(() => {
      process.stdout.write(char);//prints out the loop in a single line vs a new line
    }, counter);//counter is the time added for each character
  }
};
typeWriter();//invoke the function


//Implementing automated tests (work in progress). 
//1hr spent so far, maybe 1hr more to go. Pairing with @kvirani//