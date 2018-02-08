// pages/components/question/questions.js
let findQuestion = require("../../../utils/util.js").findQuestion
let index = 0
Component({
  properties: {
    theQuestions: {
      type: Object,
      value: []
    }
  },
  data: {
    currentQuestion: {},
    lastQuestion: {},
    order: index,
    checked: true,
    btnContent: "下一步",
    percent: 20,
    chosedValue: "2018-02-01",
    chosedOption: ''
  },
  ready: function () {
    this.setData({
      currentQuestion: this.data["theQuestions"][0]
    })
  },
  methods: {
    choose (e) {
      this.setData({
        chosedValue: e.detail.value
      })
    },
    radioChange: function (e){
      this.setData({
        checked: false,
        chosedOption: e.detail.value
      })
    },
    prev: function () {
      index--
      this.setData({
        currentQuestion: this.data.lastQuestion,
        checked: true,
        order: index
      })
    },
    next: function () {
      index++
      let tmp = this.data.currentQuestion
      let question = findQuestion(this.data.chosedOption, this.data["theQuestions"])
      if (question) {
        this.setData({
          lastQuestion: tmp,
          currentQuestion: question,
          checked: true,
          order: index
        })
      } else {
        index = 0
        this.setData({
          btnContent: '提交',
          order: index
        })
      }
    }
  }
})
