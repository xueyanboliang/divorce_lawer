//用于存储所有的页面所需数据
const LIST = [
  {
    img_url:'../../../resources/pics/property.png',
    title: '财产分割问题',
    des: '包括婚前彩礼、离婚财产分割、\n房产纠纷等等',
    associate_question: 'property_dismemberment'
  },
  {
    img_url: '../../../resources/pics/damage.png',
    title: '损失赔偿问题',
    des: '如出轨、家暴、语言暴力等',
    associate_question: 'damage_compensation'
  },
  {
    img_url: '../../../resources/pics/divorce.png',
    title: '离婚手续/流程问题',
    des: '包括流程、管辖地等相关问题',
    associate_question: 'divorce_proceedings'
  },
  {
    img_url: '../../../resources/pics/child_right.png',
    title: '子女抚养权问题',
    des: '',
    associate_question: 'child_custody'
  },
  {
    img_url: '../../../resources/pics/child_fee.png',
    title: '子女抚养费问题',
    des: '',
    associate_question: 'childCare_expense'
  },
  {
    img_url: '../../../resources/pics/other.png',
    title: '其他问题',
    des: '如您的问题不属于以上任何情形，请直接咨询律师',
    associate_question: 'other_questions'
  }
]
let allQuestions = {
  property_dismemberment: [
    {
      pId: 0,
      title: '需要分割的财产类型是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 1,
          value: '彩礼',
          checked: false
        },
        {
          id: 2,
          value: '房产',
          checked: false
        },
        {
          id: 3,
          value: '其他财产(含债务)',
          checked: false
        },
        {
          id: 4,
          value: '被隐匿转移的财产(包括房产及其他财产)',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 1,
      title: "双方是否共同生活过？",
      types: '',
      explaination: '',
      opts: [
        {
          id: 5,
          value: '共同生活',
          checked: false,
        },
        {
          id: 6,
          value: '未共同生活',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 5,
      title: "您是否和对方已登记结婚",
      types: '',
      explaination: '',
      opts: [
        {
          id: 7,
          value: '还没有登记结婚',
          checked: false,
        },
        {
          id: 8,
          value: '已登记结婚，准备离婚',
          checked: false
        },
        {
          id: 9,
          value: '已登记结婚，但已经离婚',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 6,
      title: "您是否和对方已登记结婚",
      types: '',
      explaination: '',
      opts: [
        {
          id: 7,
          value: '还没有登记结婚',
          checked: false,
        },
        {
          id: 8,
          value: '已登记结婚，准备离婚',
          checked: false
        },
        {
          id: 9,
          value: '已登记结婚，但已经离婚',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 7,
      title: '彩礼金额是多少元',
      types: 'line',
      explaination: '如彩礼为实物，请估算为现金',
      opts: [
        {
          id: 10,
          value: '彩礼约',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 8,
      title: '彩礼金额是多少元',
      types: 'line',
      explaination: '如彩礼为实物，请估算为现金',
      opts: [
        {
          id: 10,
          value: '彩礼约',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 9,
      title: '彩礼金额是多少元',
      types: 'line',
      explaination: '如彩礼为实物，请估算为现金',
      opts: [
        {
          id: 10,
          value: '彩礼约',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 10,
      title: '您是否有其他补充说明？',
      types: 'line_frame',
      explaination: '律师可能对您的问题进行补充解答，补充解答将以电话的方式联系您',
      opts: [
        {
          id: 11,
          value: '请输入您的手机号码(必填):',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 2,
      title: "您是否和对方已登记结婚",
      types: '',
      explaination: '',
      opts: [
        {
          id: 12,
          value: '还没有登记结婚',
          checked: false
        },
        {
          id: 13,
          value: '已登记结婚，准备离婚',
          checked: false
        },
        {
          id: 14,
          value: '已登记结婚，但已经离婚',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: 12,
      title: '该房产的产权登记人是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 15,
          value: '购买人登记',
          checked: false
        },
        {
          id: 16,
          value: '双方登记',
          checked: false
        },
        {
          id: 17,
          value: '购买人配偶登记',
          checked: false
        }
      ],
      answer: ''
    }
  ],
  damage_compensation: [],
  divorce_proceedings: [],
  child_custody: [],
  childCare_expense: [],
  other_questions: []
}
module.exports = {
  list: LIST,
  allQuestions: allQuestions
}