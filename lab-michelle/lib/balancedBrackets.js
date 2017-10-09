const Stack = ('./stack');

//big O runtime: O(n^2)?
function balancedBrackets(str) {
  //we make an object with key value pairs for the brackets
  const pairs = { '{':'}', '[':']', '(':')'};
  //we make a random stack
  let opensStack = new Stack;
  //we figure out how long the string is that we put in
  let strLength = str.length;
  let iterated = str[i]
  //iterate over the string
  for (var i = 0; i < str.length; i++) {
    //if it's divisible by 2 that's no good
    if (str.length%2) {
      return 'This string does not have balanced brackets';
    //does it start with an open?
  } else if (iterated === '{' || iterated === '[' || iterated === '(') {
      //push the opens into a stack
      opensStack.ourPush(iterated);
  }
      //compare opens with the rest of the string (which should be just all closes) - this is where I get confused but it's something like this. We use the key-value pair to compare and if the popped one doesn't match the next iterated guy then it's a nope//
    if (pairs[opensStack.ourPop()] != iterated) {
      return 'This string does not have balanced brackets';
    } else {
      return 'This string does have balanced brackets';
    }
  }
}

//Sources consulted:
//http://clarkfeusier.com/2015/01/16/interview-question-balanced-parentheses-stack.html
