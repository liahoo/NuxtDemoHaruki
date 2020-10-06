
const filterByTag = (tag) => {
  const popularTsukemen = menus.tsukemen.filter(item => item.tags.includes(tag))
  const popularNoko = menus.noko.filter(item => item.tags.includes(tag))
  const popularWafu = menus.wafu.filter(item => item.tags.includes(tag))
  popularTsukemen.push(...popularNoko)
  popularTsukemen.push(...popularWafu)
  return popularTsukemen
}

const menus = {
  tsukemen: [
    {
      id: 1,
      category: 'tsukemen',
      tags: ['rec'],
      image: '/img/foodmenu_img01_01.jpg',
      titleImage: '/img/foodmenu_title01_01.jpg',
      title: '超濃厚とんこつつけ麺',
      subTitle: '魚介のうまみととんこつのコクが一体となった濃厚でまろやかなつけ汁。もちもちとした中太麺とよく絡む。つけ汁に投入された具材（チャーシュー・メンマ・煮卵）も大ぶりで食べ応え十分。',
      price: 880
    },
    {
      id: 2,
      category: 'tsukemen',
      tags: ['rec'],
      image: '/img/foodmenu_img01_02.jpg',
      titleImage: '/img/foodmenu_title01_02.jpg',
      title: '超濃厚魚介つけ麺スベシャル',
      subTitle: '超濃厚とんこつつけ麺に皿盛りの具材がついた豪華版。分厚い短冊切りのチャーシューが濃厚スープとよくあう。',
      price: 880
    },
    {
      id: 3,
      category: 'tsukemen',
      tags: ['pop'],
      image: '/img/foodmenu_img01_03.jpg',
      titleImage: '/img/foodmenu_title01_03.jpg',
      title: '超濃厚魚介辛つけ麺',
      subTitle: 'つけ汁は、ドロっと粘度の高い濃厚魚介豚骨で辛つけめんなので、ピリ辛味 、最初は、具材は何も入れずに食べ、その後は、魚粉をちょっとづつ入れて 、味を変えながら食べすすむ。',
      price: 880
    },
    {
      id: 4,
      category: 'tsukemen',
      tags: [],
      image: '/img/foodmenu_img01_04.jpg',
      titleImage: '/img/foodmenu_title01_04.jpg',
      title: '超濃厚魚介辛つけ麺スペシャル',
      subTitle: '超濃厚とんこつつけ麺に皿盛りの具材がついた豪華版。分厚い短冊切りのチャーシューが濃厚スープとよくあう。',
      price: 880
    },
    {
      id: 5,
      category: 'tsukemen',
      tags: ['new'],
      image: '/img/foodmenu_img01_05.jpg',
      titleImage: '/img/foodmenu_title01_05.jpg',
      title: '超濃厚魚介とんこつ野菜つけ麺',
      subTitle: '魚介のうまみととんこつのコクが一体となった濃厚でまろやかなつけ汁。もちもちとした中太麺とよく絡む。つけ汁に投入された具材（チャーシュー・メンマ・煮卵）も大ぶりで食べ応え十分。',
      price: 880
    },
    {
      id: 6,
      category: 'tsukemen',
      tags: [],
      image: '/img/foodmenu_img01_06.jpg',
      titleImage: '/img/foodmenu_title01_06.jpg',
      title: '超濃厚魚介とんこつ辛野菜つけ麺',
      subTitle: '超濃厚とんこつつけ麺に皿盛りの具材がついた豪華版。分厚い短冊切りのチャーシューが濃厚スープとよくあう。',
      price: 880
    }
  ],
  wafu: [
    {
      id: 21,
      category: 'wafu-ramen',
      tags: ['rec'],
      image: '/img/foodmenu_img02_01.jpg',
      titleImage: '/img/foodmenu_title02_01.jpg',
      title: '和風魚介醤油らーめん',
      subTitle: '',
      price: 880
    },
    {
      id: 22,
      category: 'wafu-ramen',
      tags: ['pop'],
      image: '/img/foodmenu_img02_01.jpg',
      titleImage: '/img/foodmenu_title02_02.jpg',
      title: '天然らーめん',
      subTitle: '',
      price: 880
    },
    {
      id: 23,
      category: 'wafu-ramen',
      tags: ['new'],
      image: '/img/foodmenu_img02_01.jpg',
      titleImage: '/img/foodmenu_title02_03.jpg',
      title: '三種合わせ味噌らーめん',
      subTitle: '',
      price: 880
    }
  ],
  noko: [
    {
      id: 31,
      category: 'noko-ramen',
      tags: ['rec'],
      image: '/img/foodmenu_img03_01.jpg',
      titleImage: '/img/foodmenu_title03_01.jpg',
      title: '濃厚とんこつ醤油',
      subTitle: '',
      price: 880
    },
    {
      id: 32,
      category: 'noko-ramen',
      tags: [],
      image: '/img/foodmenu_img03_01.jpg',
      titleImage: '/img/foodmenu_title03_02.jpg',
      title: '濃厚とんこつ醤油味玉',
      subTitle: '',
      price: 880
    },
    {
      id: 33,
      category: 'noko-ramen',
      tags: ['rec'],
      image: '/img/foodmenu_img03_01.jpg',
      titleImage: '/img/foodmenu_title03_03.jpg',
      title: '濃厚とんこつ醤油チャーシュー',
      subTitle: '',
      price: 880
    },
    {
      id: 34,
      category: 'noko-ramen',
      tags: ['rec'],
      image: '/img/foodmenu_img03_04.jpg',
      titleImage: '/img/foodmenu_title03_04.jpg',
      title: '濃厚とんこつ塩',
      subTitle: '',
      price: 880
    },
    {
      id: 35,
      category: 'noko-ramen',
      tags: [],
      image: '/img/foodmenu_img03_04.jpg',
      titleImage: '/img/foodmenu_title03_05.jpg',
      title: '濃厚とんこつ塩味玉',
      subTitle: '',
      price: 880
    },
    {
      id: 36,
      category: 'noko-ramen',
      tags: ['pop'],
      image: '/img/foodmenu_img03_04.jpg',
      titleImage: '/img/foodmenu_title03_06.jpg',
      title: '濃厚とんこつ塩チャーシュー',
      subTitle: '',
      price: 880
    },
    {
      id: 37,
      category: 'noko-ramen',
      tags: ['rec'],
      image: '/img/foodmenu_img03_07.jpg',
      titleImage: '/img/foodmenu_title03_07.jpg',
      title: 'コク辛とんこつ',
      subTitle: '',
      price: 880
    },
    {
      id: 38,
      category: 'noko-ramen',
      tags: ['pop'],
      image: '/img/foodmenu_img03_07.jpg',
      titleImage: '/img/foodmenu_title03_08.jpg',
      title: 'コク辛とんこつ味玉',
      subTitle: '',
      price: 880
    },
    {
      id: 39,
      category: 'noko-ramen',
      tags: ['new'],
      image: '/img/foodmenu_img03_07.jpg',
      titleImage: '/img/foodmenu_title03_09.jpg',
      title: 'コク辛とんこつチャーシュー',
      subTitle: '',
      price: 880
    }
  ],
  side: [
    {
      id: 41,
      category: 'side',
      tags: ['rec', 'pop'],
      image: '/img/foodmenu_img04_01.jpg',
      titleImage: '/img/foodmenu_title04_01.jpg',
      title: '焼き餃子',
      subTitle: '',
      price: 280
    },
    {
      id: 42,
      category: 'side',
      tags: ['rec'],
      image: '/img/foodmenu_img04_02.jpg',
      titleImage: '/img/foodmenu_title04_02.jpg',
      title: 'ネギチャーシュー丼',
      subTitle: '',
      price: 280
    },
    {
      id: 43,
      category: 'side',
      tags: ['rec', 'new'],
      image: '/img/foodmenu_img04_03.jpg',
      titleImage: '/img/foodmenu_title04_03.jpg',
      title: '炙りチャーシュー丼',
      subTitle: '',
      price: 280
    },
    {
      id: 44,
      category: 'side',
      tags: ['pop'],
      image: '/img/foodmenu_img04_04.jpg',
      titleImage: '/img/foodmenu_title04_04.jpg',
      title: 'チャーハン',
      subTitle: '',
      price: 580
    },
    {
      id: 45,
      category: 'side',
      tags: [],
      image: '/img/foodmenu_img04_05.jpg',
      titleImage: '/img/foodmenu_title04_05.jpg',
      title: '半チャーハン',
      subTitle: '',
      price: 350
    },
    {
      id: 46,
      category: 'side',
      tags: ['pop'],
      image: '/img/foodmenu_img04_06.jpg',
      titleImage: '/img/foodmenu_title04_06.jpg',
      title: 'おつまみセット',
      subTitle: '',
      price: 280
    },
    {
      id: 47,
      category: 'side',
      tags: ['new'],
      image: '/img/foodmenu_img04_07.jpg',
      titleImage: '/img/foodmenu_title04_07.jpg',
      title: '辛みそネギチャーシュー',
      subTitle: '',
      price: 280
    },
    {
      id: 48,
      category: 'side',
      tags: ['pop'],
      image: '/img/foodmenu_img04_08.jpg',
      titleImage: '/img/foodmenu_title04_08.jpg',
      title: 'お子様セット',
      subTitle: '',
      price: 400
    },
    {
      id: 49,
      category: 'side',
      tags: [],
      image: '/img/foodmenu_img04_09.jpg',
      titleImage: '/img/foodmenu_title04_09.jpg',
      title: 'ライス',
      subTitle: '',
      price: 100
    }
  ],
  topic: [
    {
      id: 51,
      category: 'topic',
      tags: [],
      image: '/img/foodmenu_img05_01.jpg',
      titleImage: '/img/foodmenu_title05_01.jpg',
      title: '味玉',
      subTitle: '',
      price: 100
    },
    {
      id: 52,
      category: 'topic',
      tags: [],
      image: '/img/foodmenu_img05_02.jpg',
      titleImage: '/img/foodmenu_title05_02.jpg',
      title: 'のり(5枚)',
      subTitle: '',
      price: 100
    },
    {
      id: 53,
      category: 'topic',
      tags: [],
      image: '/img/foodmenu_img05_03.jpg',
      titleImage: '/img/foodmenu_title05_03.jpg',
      title: '単品野菜(もやし・キャベツ)',
      subTitle: '',
      price: 100
    },
    {
      id: 54,
      category: 'topic',
      tags: [],
      image: '/img/foodmenu_img05_04.jpg',
      titleImage: '/img/foodmenu_title05_04.jpg',
      title: 'ネギ',
      subTitle: '',
      price: 100
    },
    {
      id: 55,
      category: 'topic',
      tags: [],
      image: '/img/foodmenu_img05_05.jpg',
      titleImage: '/img/foodmenu_title05_05.jpg',
      title: 'メンマ',
      subTitle: '',
      price: 100
    },
    {
      id: 56,
      category: 'topic',
      tags: [],
      image: '/img/foodmenu_img05_06.jpg',
      titleImage: '/img/foodmenu_title05_06.jpg',
      title: '十種野菜',
      subTitle: '',
      price: 100
    },
    {
      id: 57,
      category: 'topic',
      tags: [],
      image: '/img/foodmenu_img05_07.jpg',
      titleImage: '/img/foodmenu_title05_07.jpg',
      title: 'チャーシュー(3枚)',
      subTitle: '',
      price: 100
    },
    {
      id: 58,
      category: 'topic',
      tags: [],
      image: '/img/foodmenu_img05_06.jpg',
      titleImage: '/img/foodmenu_title05_06.jpg',
      title: '全部乗せ(チャーシュー・ネギ・味玉・メンマ増量)',
      subTitle: '',
      price: 100
    }
  ],
  drink: [
    {
      id: 61,
      category: 'drink',
      tags: [],
      image: '/img/foodmenu_img06_01.jpg',
      titleImage: '/img/foodmenu_title06_01.jpg',
      title: 'ウーロン茶',
      subTitle: '',
      price: 150
    },
    {
      id: 62,
      category: 'drink',
      tags: [],
      image: '/img/foodmenu_img06_02.jpg',
      titleImage: '/img/foodmenu_title06_02.jpg',
      title: 'コーラ',
      subTitle: '',
      price: 150
    },
    {
      id: 63,
      category: 'drink',
      tags: [],
      image: '/img/foodmenu_img06_03.jpg',
      titleImage: '/img/foodmenu_title06_03.jpg',
      title: 'オレンジジュース',
      subTitle: '',
      price: 150
    },
    {
      id: 64,
      category: 'drink',
      tags: ['pop'],
      image: '/img/foodmenu_img06_04.jpg',
      titleImage: '/img/foodmenu_title06_04.jpg',
      title: '生ビール(中)',
      subTitle: '',
      price: 480
    },
    {
      id: 65,
      category: 'drink',
      tags: [],
      image: '/img/foodmenu_img06_05.jpg',
      titleImage: '/img/foodmenu_title06_05.jpg',
      title: '生ビール(小)',
      subTitle: '',
      price: 350
    },
    {
      id: 66,
      category: 'drink',
      tags: [],
      image: '/img/foodmenu_img06_06.jpg',
      titleImage: '/img/foodmenu_title06_06.jpg',
      title: '瓶ビール',
      subTitle: '',
      price: 550
    },
    {
      id: 67,
      category: 'drink',
      tags: [],
      image: '/img/foodmenu_img06_07.jpg',
      titleImage: '/img/foodmenu_title06_07.jpg',
      title: 'ウーロンハイ',
      subTitle: '',
      price: 350
    },
    {
      id: 68,
      category: 'drink',
      tags: ['pop'],
      image: '/img/foodmenu_img06_08.jpg',
      titleImage: '/img/foodmenu_title06_08.jpg',
      title: 'ハイボール',
      subTitle: '',
      price: 350
    }
  ],
  recommend: () => filterByTag('rec'),
  popular: () => filterByTag('pop'),
  new: () => filterByTag('new')
}

export default menus
