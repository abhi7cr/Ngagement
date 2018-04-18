let correctAnswers = 0
let totatQuestions = 3
const onCapitalQChange = () => {
  const answer = document.getElementById('capitalQ').value
  if (answer && answer.toLowerCase() === "antananarivo") {
    // document.getElementById('answer1').textContent = 'Correct Answer!'
    // document.getElementById('answer1').style.color = 'green'
    if(correctAnswers < totatQuestions) {
       correctAnswers++
    }
    areAllAnswersCorrect()
    document.getElementById('capitalQ').disabled = 'disabled'
  } else {
    // document.getElementById('answer1').textContent = 'Oops, Incorrect Answer, Try again!'
    // document.getElementById('answer1').style.color = 'red'
    areAllAnswersCorrect()
  }
}

const onSecondHighestMountainChange = () => {
    const answer = document.getElementById('secondHighestQ').value
    if (answer && answer.toLowerCase() === "k2" || answer.toLowerCase() === "godwin austin") {
      // document.getElementById('answer2').textContent = 'Correct Answer!'
      // document.getElementById('answer2').style.color = 'green'
      if(correctAnswers < totatQuestions) {
        correctAnswers++
     }
     areAllAnswersCorrect()
     document.getElementById('secondHighestQ').disabled = 'disabled'
    } else {
      // document.getElementById('answer2').textContent = 'Oops, Incorrect Answer, Try again!'
      // document.getElementById('answer2').style.color = 'red'
      areAllAnswersCorrect()
    }
  }

  const onFirstHorrorMovieChange = () => {
    const answer = document.getElementById('firstHorrorQ').value
    if (answer && answer.toLowerCase() === "conjuring") {
      // document.getElementById('answer3').textContent = 'Correct Answer!'
      // document.getElementById('answer3').style.color = 'green'
      if(correctAnswers < totatQuestions) {
        correctAnswers++
     }
     areAllAnswersCorrect()
     document.getElementById('firstHorrorQ').disabled = 'disabled'
    } else {
      // document.getElementById('answer3').textContent = 'Oops, Incorrect Answer, Try again!'
      // document.getElementById('answer3').style.color = 'red'
      areAllAnswersCorrect()
    }
  }

  const areAllAnswersCorrect = () => {
    if (correctAnswers === 1) {
      document.getElementById('congrats').style.display = 'none' 
      document.getElementById('tryAgain').style.display = 'none'
      document.getElementById('almostThere').style.display = 'none'    
      document.getElementById('notBad').style.display = 'block'
    }
    else if (correctAnswers === 2) {
      document.getElementById('congrats').style.display = 'none' 
      document.getElementById('tryAgain').style.display = 'none'    
      document.getElementById('notBad').style.display = 'none'
      document.getElementById('almostThere').style.display = 'block'
    }
    else if (correctAnswers ===  totatQuestions) {
      document.getElementById('notBad').style.display = 'none'
      document.getElementById('tryAgain').style.display = 'none'
      document.getElementById('almostThere').style.display = 'none'  
      document.getElementById('congrats').style.display = 'block'
      document.getElementsByTagName('body')[0].style.background = 'black url("assets/pattasu.gif") no-repeat center center fixed'
      document.getElementsByTagName('body')[0].style['background-size'] = 'cover'
      let questions = document.getElementsByTagName('question-element')
      for(let question of questions) {
        question.style.display = 'none'
      }
      document.getElementById('heading').style.display = 'none' 
      document.getElementById('instructions').style.display = 'none' 
    } else {
      document.getElementById('almostThere').style.display = 'none'
      document.getElementById('notBad').style.display = 'none'   
      document.getElementById('congrats').style.display = 'none'
      document.getElementById('tryAgain').style.display = 'block'    
    }
  }