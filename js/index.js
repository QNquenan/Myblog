// //Vue
// const App = {
//     data() {
//         return {
//             jiLu: false
//         }
//     },
//     methods:{
// 		yiRu(){
// 			this.jiLu = true
// 		},

//         yiChu(){
//             this.jiLu = false
//         }
// 	}
// };

// //Vue

//打字机
const text = $('.title-box-text'); // 获取.title-box-text元素

const txt = ["Nice to see you","Welcome to my home"]; // 定义数组，里面放上文本

let index = 0; // 定义当前要显示的字符串的第几个字符

let xiaBiao = 0; // 定义文本数组的下标

let huan = true; // 定义huan，拿来判断是要实现打字还是删除字效果，初始为真

setInterval(function () { // 定义一个定时器，200毫秒执行一次

  if (huan) { // huan为真
    text.html(txt[xiaBiao].slice(0, ++index)); // 给.title-box-text元素添加字符，用.slice方法
  } else {
    text.html(txt[xiaBiao].slice(0, index--)); // 给.title-box-text元素删除字符，用.slice方法
  }

  if (index == txt[xiaBiao].length + 3) { // 判断当前index是否为当前字符串长度加3了，+3是为了打完后多等会，多走3个啥也不做的轮回
    huan = false; // huan变为假，开始执行删除文字效果
  } else if (index < 0) { // 如果删完了
    index = 0; // index=0，huan为真，从头开始打字
    huan = true;
    xiaBiao++; // 数组下标加1
    if (xiaBiao >= txt.length) {
      xiaBiao = 0; // 如果数组下标超过了，又回到0
    }
  }

}, 200);


//打字机
