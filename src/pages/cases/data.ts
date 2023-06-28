interface listType {
  id: number
  titleCh: string
  titleEn: string
  type: string
  path: string
  parentId: number
  childlist: childlistType[] | []
}

export interface childlistType {
  id: number
  titleCh: string
  type: string
  parentId: number
}

export const menuList: listType[] = [
  {
    id: 1171,
    titleCh: "住宅人居",
    titleEn: "Residence",
    type: "project",
    path: "/case",
    parentId: 0,
    childlist: [
      {
        id: 1181,
        titleCh: "生活體驗館",
        type: "project",
        parentId: 1171
      },
      {
        id: 1179,
        titleCh: "別墅合院",
        type: "project",
        parentId: 1171
      },
      {
        id: 1195,
        titleCh: "大平層",
        type: "project",
        parentId: 1171
      },
      {
        id: 1180,
        titleCh: "情景樣板間",
        type: "project",
        parentId: 1171
      },
      {
        id: 1178,
        titleCh: "鄰里社區",
        type: "project",
        parentId: 1171
      }
    ]
  },
  {
    id: 1172,
    titleCh: "辦公公共",
    titleEn: "Office public",
    type: "project",
    path: "/case",
    parentId: 0,
    childlist: [
      {
        id: 1183,
        titleCh: "總部辦公",
        type: "project",
        parentId: 1172
      },
      {
        id: 1185,
        titleCh: "中小型辦公",
        type: "project",
        parentId: 1172
      },
      {
        id: 1184,
        titleCh: "塔樓公區",
        type: "project",
        parentId: 1172
      },
      {
        id: 1182,
        titleCh: "城市展廳",
        type: "project",
        parentId: 1172
      }
    ]
  },
  {
    id: 1173,
    titleCh: "酒店度假",
    titleEn: "Hotel Resort",
    type: "project",
    path: "/case",
    parentId: 0,
    childlist: [
      {
        id: 1186,
        titleCh: "度假文旅",
        type: "project",
        parentId: 1173
      },
      {
        id: 1187,
        titleCh: "酒店",
        type: "project",
        parentId: 1173
      }
    ]
  },
  {
    id: 1174,
    titleCh: "文化教育",
    titleEn: "Cultural & Education",
    type: "project",
    path: "/case",
    parentId: 0,
    childlist: [
      {
        id: 1188,
        titleCh: "文化場館",
        type: "project",
        parentId: 1174
      },
      {
        id: 1189,
        titleCh: "教育",
        type: "project",
        parentId: 1174
      }
    ]
  },
  {
    id: 1175,
    titleCh: "康養醫美",
    titleEn: "Health Care",
    type: "project",
    path: "/case",
    parentId: 0,
    childlist: [
      {
        id: 1190,
        titleCh: "康養",
        type: "project",
        parentId: 1175
      },
      {
        id: 1191,
        titleCh: "医美",
        type: "project",
        parentId: 1175
      }
    ]
  },
  {
    id: 1176,
    titleCh: "商業零售",
    titleEn: "Commercial",
    type: "project",
    path: "/case",
    parentId: 0,
    childlist: [
      {
        id: 1192,
        titleCh: "商業",
        type: "project",
        parentId: 1176
      },
      {
        id: 1193,
        titleCh: "零售",
        type: "project",
        parentId: 1176
      }
    ]
  },
  {
    id: 1177,
    titleCh: "舊建築改造",
    titleEn: "Renovation",
    type: "project",
    path: "/case",
    parentId: 0,
    childlist: []
  }
]

export const contentList = [
  {
    id: 6387,
    title: "珠江弘陽广州時光薈",
    subTitle: "· 生活體驗館",
    homeBanner: "https://mimgs.matrixdesign.cn/site/1665547152188封面 (3).jpg",
    projectName: "珠江弘陽广州時光薈"
  },
  {
    id: 6532,
    title: "華潤成都崑崙御",
    subTitle: "· 生活體驗館",
    homeBanner:
      "https://mimgs.matrixdesign.cn/site/1666012348818Web 1920 – 5.jpg",
    projectName: "華潤成都崑崙御"
  },
  {
    id: 6465,
    title: "藍城鹹寧中國詩經文旅康養綜合體",
    subTitle: "· 生活體驗館",
    homeBanner: "https://mimgs.matrixdesign.cn/site/1665545084817封面 (12).jpg",
    projectName: "藍城鹹寧中國詩經文旅康養綜合體"
  },
  {
    id: 6389,
    title: "融創上海青雲路壹號",
    subTitle: "· 生活體驗館",
    homeBanner:
      "https://mimgs.matrixdesign.cn/site/1665557785207Web 1920 – 58.jpg",
    projectName: "融創上海青雲路壹號"
  },
  {
    id: 6519,
    title: "陽光城蘇州檀悅",
    subTitle: "· 生活體驗館",
    homeBanner: "https://mimgs.matrixdesign.cn/site/1665544155285封面 (20).jpg",
    projectName: "陽光城蘇州檀悅"
  },
  {
    id: 6537,
    title: "萬科紹興安瀾府",
    subTitle: "· 生活體驗館",
    homeBanner:
      "https://mimgs.matrixdesign.cn/site/1666014490917Web 1920 – 40.jpg",
    projectName: "萬科紹興安瀾府"
  },
  {
    id: 6480,
    title: "綠城成都鳳起蘭庭",
    subTitle: "· 生活體驗館",
    homeBanner:
      "https://mimgs.matrixdesign.cn/site/1665560483117Web 1920 – 41.jpg",
    projectName: "綠城成都鳳起蘭庭"
  },
  {
    id: 6515,
    title: "藍城新鄉鳳起潮鳴",
    subTitle: "· 生活體驗館",
    homeBanner: "https://mimgs.matrixdesign.cn/site/1665542396475封面 (49).jpg",
    projectName: "藍城新鄉鳳起潮鳴"
  },
  {
    id: 6451,
    title: "旭輝南昌中心",
    subTitle: "· 生活體驗館  ",
    homeBanner: "https://mimgs.matrixdesign.cn/site/1665542019496封面 (53).jpg",
    homeBannerEn:
      "https://mimgs.matrixdesign.cn/site/1665542020936封面 (53).jpg",
    projectName: "旭輝南昌中心"
  }
]
export default { menuList, contentList }
