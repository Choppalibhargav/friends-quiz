var readlineSync=require("readline-sync")
var score=0;
var userName=readlineSync.question("what is your name? ");
console.log("welcome "+userName+" how much do you knowabout FRIENDS(drama)");
var highScores= [{
  name:"bhargav",
  score:10,
},{
  name:"devil",
  score:9,
}];
function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if (userAnswer===answer){
    console.log("right!")
    score=score+1;
  }
  else{
    console.log("wrong!")
  }
  console.log("current score: ",score);
  console.log("-------")
}
var questions=[{
  question:`what is the full name of chandler
  a.chandler muriel bing
  b.chandler bing
  c.chandler
  d.chandler janice bing `,
 answer:"a"

},{
  question:`who is the foodie among the following
  a.ross
  b.chandler
  c.monica
  d.joey `,
  answer:"d"
},{
  question:`who has so many sisters among the following
  a.chandler
  b.joey
  c.rachel
  d.ross `,
  answer:"b"
},{
  question:`how many friends are there in friends show
  a.9
  b.6
  c.5
  d.7 `,
  answer:"b"
}];
for (var i=0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}
console.log("YAY! You scored: ",score);
console.log(highscores)