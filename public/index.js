onCapitalQChange = () => {
  const answer = document.getElementById('capitalQ').value
  if (answer && answer.toLowerCase() === "antananarivo") {
    document.getElementById('answer1').textContent = 'Correct Answer!'
    document.getElementById('answer1').style.color = 'green'
  } else {
    document.getElementById('answer1').textContent = 'Oops, Incorrect Answer, Try again!'
    document.getElementById('answer1').style.color = 'red'
  }
}

onSecondHighestMountainChange = () => {
    const answer = document.getElementById('secondHighestQ').value
    if (answer && answer.toLowerCase() === "k2" || answer.toLowerCase() === "godwin austin") {
      document.getElementById('answer2').textContent = 'Correct Answer!'
      document.getElementById('answer2').style.color = 'green'
    } else {
      document.getElementById('answer2').textContent = 'Oops, Incorrect Answer, Try again!'
      document.getElementById('answer2').style.color = 'red'
    }
  }