// pages/components/tofu/tofu.js
Component({
  properties: {
   content: {
    type: Object,
    value: null
   }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    enter: function (e) {
      let ques = e.currentTarget.id
      wx.navigateTo({
        url: `../questions/questions?key=${ques}`
      })
     }
  }
})