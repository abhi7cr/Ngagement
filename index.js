onCapitalQChange = () => {
  const answer = document.getElementById('capitalQ').value
  if (answer && answer.toLowerCase() === "antananarivo") {
    document.getElementById('answer').textContent = 'Correct Answer!'
    document.getElementById('answer').style.color = 'green'
  } else {
    document.getElementById('answer').textContent = 'Oops, Incorrect Answer, Try again!'
    document.getElementById('answer').style.color = 'red'
  }
}