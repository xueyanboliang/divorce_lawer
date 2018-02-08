const findQuestion = (id, questions) => {
  for (let i = 0; i < questions.length; i++) {
    console.log(id, questions)
    if (questions[i].pId === 1*id) {
      return questions[i]
    }
  }
}
module.exports = {
  findQuestion: findQuestion
}