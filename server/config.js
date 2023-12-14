/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 1,
    text: "特等奖",
    title: "笔记本电脑",
    img: "../img/mbp.jpg"
  },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: "任天堂Switch",
    img: "../img/rentiantang.webp"
  },
  {
    type: 3,
    count: 3,
    text: "二等奖",
    title: "无线键盘鼠标套件",
    img: "../img/jianpanshubiao.webp"
  },
  {
    type: 4,
    count: 10,
    text: "三等奖",
    title: "小米电动牙刷",
    img: "../img/xiaomiyashua.webp"
  },
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 1, 1];

/**
 * 卡片公司名称标识
 */
const COMPANY = "NGLE";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
