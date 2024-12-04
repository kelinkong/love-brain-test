export interface Option {
    text: string;
    score: number;
  }
  
  export interface Question {
    id: number;
    title: string;
    options: Option[];
  }
  
  export const questions: Question[] = [
    {
      id: 1,
      title: "当你和恋人约会迟到时，你会怎么做？",
      options: [
        { text: "提前道歉并说明原因", score: 1 },
        { text: "觉得Ta肯定会理解我", score: 2 },
        { text: "认为迟到是小事", score: 3 },
        { text: "完全不在意", score: 4 }
      ]
    },
    {
      id: 2,
      title: "恋人忘记了你们的纪念日，你会？",
      options: [
        { text: "理性沟通，表达自己的感受", score: 1 },
        { text: "生闷气，等Ta发现", score: 2 },
        { text: "觉得很受伤，大吵一架", score: 3 },
        { text: "认为这是不可原谅的事", score: 4 }
      ]
    },
    {
      id: 3,
      title: "恋人工作很忙，一整天没回消息，你会？",
      options: [
        { text: "理解Ta的工作压力", score: 1 },
        { text: "偶尔发消息表达关心", score: 2 },
        { text: "不停发消息直到Ta回复", score: 3 },
        { text: "生气并威胁分手", score: 4 }
      ]
    },
    {
      id: 4,
      title: "发现恋人和异性同事走得比较近，你会？",
      options: [
        { text: "相信Ta，保持理性", score: 1 },
        { text: "默默观察但不说破", score: 2 },
        { text: "要求Ta立即断绝来往", score: 3 },
        { text: "认定Ta一定出轨了", score: 4 }
      ]
    },
    {
      id: 5,
      title: "恋人想独自出门旅行，你的反应是？",
      options: [
        { text: "支持Ta的个人空间", score: 1 },
        { text: "有点不舍但尊重", score: 2 },
        { text: "要求一起去或者不准去", score: 3 },
        { text: "认为Ta不爱我了", score: 4 }
      ]
    },
    {
      id: 6,
      title: "和恋人吵架后，你会？",
      options: [
        { text: "冷静后好好沟通", score: 1 },
        { text: "等Ta来哄我", score: 2 },
        { text: "发朋友圈暗示", score: 3 },
        { text: "删除所有合照并拉黑", score: 4 }
      ]
    },
    {
      id: 7,
      title: "恋人买了一件你不喜欢的衣服，你会？",
      options: [
        { text: "尊重Ta的选择", score: 1 },
        { text: "委婉建议其他款式", score: 2 },
        { text: "要求Ta换掉", score: 3 },
        { text: "觉得Ta品味太差", score: 4 }
      ]
    },
    {
      id: 8,
      title: "恋人想和朋友聚会，你的想法是？",
      options: [
        { text: "支持Ta维系朋友关系", score: 1 },
        { text: "要求了解聚会详情", score: 2 },
        { text: "一定要跟着去", score: 3 },
        { text: "禁止Ta参加", score: 4 }
      ]
    },
    {
      id: 9,
      title: "看到恋人和前任的合照还没删，你会？",
      options: [
        { text: "理解这是Ta的过去", score: 1 },
        { text: "委婉提醒是否该删除", score: 2 },
        { text: "生气要求立刻删除", score: 3 },
        { text: "认为Ta还爱着前任", score: 4 }
      ]
    },
    {
      id: 10,
      title: "恋人忙于工作，减少约会次数，你会？",
      options: [
        { text: "理解并支持Ta的事业", score: 1 },
        { text: "偶尔表达想念", score: 2 },
        { text: "每天抱怨见面太少", score: 3 },
        { text: "威胁Ta在工作和爱情中选择", score: 4 }
      ]
    },
    {
      id: 11,
      title: "恋人的社交软件不给你看，你会？",
      options: [
        { text: "尊重Ta的隐私", score: 1 },
        { text: "觉得有点介意但不强求", score: 2 },
        { text: "一定要看到才放心", score: 3 },
        { text: "认为Ta一定有秘密", score: 4 }
      ]
    },
    {
      id: 12,
      title: "恋人送的礼物不是你想要的，你会？",
      options: [
        { text: "感谢Ta的心意", score: 1 },
        { text: "委婉表达自己的喜好", score: 2 },
        { text: "直接表达不满", score: 3 },
        { text: "认为Ta根本不了解我", score: 4 }
      ]
    },
    {
      id: 13,
      title: "恋人因为工作需要经常出差，你会？",
      options: [
        { text: "支持Ta的工作", score: 1 },
        { text: "希望Ta多和我视频", score: 2 },
        { text: "要求Ta换工作", score: 3 },
        { text: "怀疑Ta出差的真实性", score: 4 }
      ]
    },
    {
      id: 14,
      title: "恋人的异性朋友找Ta帮忙，你会？",
      options: [
        { text: "相信Ta的为人", score: 1 },
        { text: "希望能旁观帮忙过程", score: 2 },
        { text: "坚决反对", score: 3 },
        { text: "认为这是接近Ta的借口", score: 4 }
      ]
    },
    {
      id: 15,
      title: "恋人说想一个人静一静，你会？",
      options: [
        { text: "尊重并给予空间", score: 1 },
        { text: "担心但克制不打扰", score: 2 },
        { text: "一直追问原因", score: 3 },
        { text: "觉得这是分手前兆", score: 4 }
      ]
    }
  ];
  
  export const getResult = (totalScore: number) => {
    let title = "";
    let description = "";

    if (totalScore <= 20) {
      title = "理性恋爱型";
      description = "你在感情中非常理性和成熟，能够很好地平衡个人空间和亲密关系。你懂得尊重伴侣，相信彼此，这种态度有助于建立长久稳定的感情。继续保持这种健康的恋爱观！";
    } else if (totalScore <= 30) {
      title = "轻度恋爱脑";
      description = "你对感情有一定的依赖，但总体上还算理性。有时会因为小事感到不安，但能及时调整。建议多培养自己的兴趣爱好，让生活更加丰富多彩。";
    } else if (totalScore <= 40) {
      title = "中度恋爱脑";
      description = "你在感情中容易患得患失，对伴侣的依赖程度较高。建议学会给彼此适当的空间，培养独立人格，这样才能获得更健康的感情。";
    } else if (totalScore <= 50) {
      title = "重度恋爱脑";
      description = "你在感情中表现出强烈的占有欲和控制欲，这可能会给伴侣带来压力。建议及时调整心态，学会信任和放手，否则可能会影响感情的长远发展。";
    } else {
      title = "极度恋爱脑";
      description = "你对感情的依赖已经达到了不健康的程度，容易做出极端的事情。建议寻求专业心理咨询师的帮助，学习如何建立健康的情感关系。记住，真正的爱是建立在互相尊重和信任的基础上的。";
    }

    return {
      title,
      description
    };
  };