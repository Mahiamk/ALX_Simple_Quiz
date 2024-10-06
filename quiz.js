
function  checkAnswer(){
  const correctAnswer="4";
  const userAnswer = document.querySelector('input[name="quiz"]:checked');
  const feedback=document.getElementById('feedback');
  if (userAnswer){
    if (userAnswer.value === correctAnswer){
      feedback.textContent = "Correct! Well done.";
    }else{
      feedback.textContent ="That's incorrect. Try again!";
    }

  }else{
    feedback.textContent="Thatis is incorrect. Choose one answer at a time!"
  }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
