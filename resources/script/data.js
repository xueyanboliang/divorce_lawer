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
      pId: [0],
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
      pId: [1],
      title: '双方是否共同生活过？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 5,
          value: '共同生活',
          checked: false
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
      pId: [5, 6],
      title: '您是否和对方已登记结婚？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 7,
          value: '还没有登记结婚',
          checked: false
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
      pId: [7, 8, 9],
      title: '彩礼金额是？',
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
      pId: [10, 18, 48, 49, 50, 51, 52, 53, 54, 58],
      title: '您是否还有其他补充说明？',
      types: 'line_frame',
      explaination: '律师可能对您的问题进行补充解答，补充解答将以电话的方式联系您',
      opts: [
        {
          id: 11,
          value: '请输入您的手机号码（必填）',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [2],
      title: '您是否和对方已登记结婚？',
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
      pId: [12, 23, 26, 27, 39, 40],
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
    },
    {
      pId: [15, 16, 17, 30, 31, 32, 33, 34, 41, 44, 45],
      title: '该房产的大致估值是？',
      types: 'line',
      explaination: '',
      opts: [
        {
          id: 18,
          value: '万元',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [13],
      title: '结婚登记日期是？',
      types: 'dateSelect',
      explaination: '结婚登记日期指领结婚证的日期',
      opts: [
        {
          id: 19,
          value: '',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [19],
      title: '该房产属于',
      types: '',
      explaination: '特殊房产指房改房/经济适用房/限售期内的两限房',
      opts: [
        {
          id: 20,
          value: '婚前购买房产',
          checked: false
        },
        {
          id: 21,
          value: '婚后购买房产',
          checked: false
        },
        {
          id: 22,
          value: '特殊房产',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [20],
      title: '该房产的出资情况是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 23,
          value: '一方全款购买',
          checked: false
        },
        {
          id: 24,
          value: '双方共同全款购买',
          checked: false
        },
        {
          id: 25,
          value: '双方共同首付购买，共同还贷',
          checked: false
        },
        {
          id: 26,
          value: '一方支付首付，婚前取得房产证，共同还贷',
          checked: false
        },
        {
          id: 27,
          value: '一方支付首付，婚后取得房产证，共同还贷',
          checked: false
        },
        {
          id: 28,
          value: '一方父母全款',
          checked: false
        },
        {
          id: 29,
          value: '一方或双方父母共同出资',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [24, 25],
      title: '该房产的登记人是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 30,
          value: '其中一方登记',
          checked: false
        },
        {
          id: 31,
          value: '双方共同登记',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [28, 29, 35, 36, 37, 38],
      title: '该房产的产权登记人是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 32,
          value: '出资方子女登记',
          checked: false
        },
        {
          id: 33,
          value: '出资方子女双方登记',
          checked: false
        },
        {
          id: 34,
          value: '出资方子女配偶登记',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [21],
      title: '该房产的出资情况是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 35,
          value: '一方父母全款',
          checked: false
        },
        {
          id: 36,
          value: '一方父母部分出资',
          checked: false
        },
        {
          id: 37,
          value: '双方父母全款',
          checked: false
        },
        {
          id: 38,
          value: '双方父母部分出资',
          checked: false
        },
        {
          id: 39,
          value: '一方以婚前财产出资购买',
          checked: false
        },
        {
          id: 40,
          value: '婚内购房，离婚后取得房产证',
          checked: false
        },
        {
          id: 41,
          value: '婚内购房，并将房产证加上配偶名',
          checked: false
        },
        {
          id: 42,
          value: '婚内一方将房产赠与配偶',
          checked: false
        },
        {
          id: 43,
          value: '离婚将房产赠与子女',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [42, 43],
      title: '该房产是否进行过户登记',
      types: '',
      explaination: '',
      opts: [
        {
          id: 44,
          value: '未进行过户登记',
          checked: false
        },
        {
          id: 45,
          value: '已进行过户登记',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [22],
      title: '该房产的性质属于',
      types: '',
      explaination: '',
      opts: [
        {
          id: 46,
          value: '离婚取得所有权的房改房',
          checked: false
        },
        {
          id: 47,
          value: '经济适用房及两限房在限售期内的分割',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [46],
      title: '该房产的登记人是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 48,
          value: '婚后以共同财产购买，登记在夫妻一方名下',
          checked: false
        },
        {
          id: 49,
          value: '婚后以共同财产购买，登记在父母名下',
          checked: false
        },
        {
          id: 50,
          value: '婚后以个人财产购买，登记在夫妻一方名下',
          checked: false
        },
        {
          id: 51,
          value: '双方或一方主张所有权',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [47],
      title: '夫妻对该房屋的处理意见是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 52,
          value: '双方均不主张房屋所有权',
          checked: false
        },
        {
          id: 53,
          value: '双方均主张房屋所有权且不同意回购或转让',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [14],
      title: '离婚的日期是？',
      types: 'dateSelect',
      explaination: '离婚日期指民政局办理离婚证书的日期',
      opts: [
        {
          id: 54,
          value: '',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [3],
      title: '您是否和对方已登记结婚？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 55,
          value: '还没有登记结婚',
          checked: false
        },
        {
          id: 56,
          value: '已登记结婚，准备离婚',
          checked: false
        },
        {
          id: 57,
          value: '已登记结婚，但已经离婚',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [55, 61, 62, 63, 64, 65, 66, 67, 70, 71],
      title: '财产的大致估值是？',
      types: 'line',
      explaination: '此处的财产指现金、房产及其他不动产、股权、投资收益、债务等',
      opts: [
        {
          id: 58,
          value: '财产估值？万元',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [56],
      title: '结婚登记日期是？',
      types: 'dateSelect',
      explaination: '结婚登记日期指领结婚证的日期',
      opts: [
        {
          id: 59,
          value: '',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [59],
      title: '双方是否共同生活过？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 60,
          value: '共同生活',
          checked: false
        },
        {
          id: 61,
          value: '未共同生活',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [60],
      title: '双方是否存在以下情形？（多选）',
      types: 'multiple_choice',
      explaination: '',
      opts: [
        {
          id: 62,
          value: '家庭暴力',
          checked: false
        },
        {
          id: 63,
          value: '重婚',
          checked: false
        },
        {
          id: 64,
          value: '与他人同居',
          checked: false
        },
        {
          id: 65,
          value: '虐待、遗弃家庭成员',
          checked: false
        },
        {
          id: 66,
          value: '无',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [57],
      title: '离婚的日期是？',
      types: 'dateSelect',
      explaination: '离婚日期指民政局办理离婚证书的日期',
      opts: [
        {
          id: 67,
          value: '',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [4],
      title: '您在什么时候发现财产被转移？',
      types: '',
      explaination: '离婚日期指民政局办理离婚证书的日期',
      opts: [
        {
          id: 68,
          value: '离婚前发现转移',
          checked: false
        },
        {
          id: 69,
          value: '离婚后发现转移',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [68, 69],
      title: '财产被转移的时间是？',
      types: '',
      explaination: '离婚前一年即办理离婚手续之前的一年',
      opts: [
        {
          id: 70,
          value: '离婚前一年内被转移',
          checked: false
        },
        {
          id: 71,
          value: '离婚前一年以上被转移',
          checked: false
        }
      ],
      answer: ''
    },
  ],
  damage_compensation: [
    {
      pId: [0],
      title: '您目前所处的阶段是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 1,
          value: '已登记结婚，准备离婚',
          checked: false
        },
        {
          id: 2,
          value: '已登记结婚，但已经离婚',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [1, 2],
      title: '您受到以下哪种伤害？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 3,
          value: '家庭暴力',
          checked: false
        },
        {
          id: 4,
          value: '被出轨',
          checked: false
        },
        {
          id: 5,
          value: '其他',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [3],
      title: '请问是否有相关证据？',
      types: '',
      explaination: '证据包括但不限于录音、视频、照片、报警回执、医院诊断证明等',
      opts: [
        {
          id: 6,
          value: '有证据',
          checked: false
        },
        {
          id: 7,
          value: '无证据',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [6, 7, 12, 13],
      title: '财产的大致估值是？',
      types: 'line',
      explaination: '此处的财产指现金、房产及其他不动产、股权、投资收益、债务等',
      opts: [
        {
          id: 8,
          value: '财产估值？万元',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [8],
      title: '您现在所处的阶段是？',
      types: '',
      explaination: '',
      opts: [
        {
          id: 9,
          value: '想马上离婚',
          checked: false
        },
        {
          id: 10,
          value: '先了解情况',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [9, 10],
      title: '您是否还有其他补充说明？',
      types: 'line_frame',
      explaination: '律师可能对您的问题进行补充解答，补充解答将以电话的方式联系您',
      opts: [
        {
          id: 11,
          value: '请输入您的手机号码（必填）',
          checked: false
        }
      ],
      answer: ''
    },
    {
      pId: [4, 5],
      title: '请问是否有相关证据',
      types: '',
      explaination: '证据包括但不限于录音、视频、照片等',
      opts: [
        {
          id: 12,
          value: '有证据',
          checked: false
        },
        {
          id: 13,
          value: '无证据',
          checked: false
        }
      ],
      answer: ''
    },
  ],
  divorce_proceedings: [],
  child_custody: [],
  childCare_expense: [],
  other_questions: []
}
module.exports = {
  list: LIST,
  allQuestions: allQuestions
}