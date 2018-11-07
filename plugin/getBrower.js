/**
 * Created by Administrator on 2017/3/28.
 */
let winWidth=0 , winHeight=0;
getwidth();
let ua = navigator.userAgent;
let dpr = window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI;
let switchbrowser = {
  isIe: ua.indexOf('Trident') > -1, //IE内核
  isOpera: ua.indexOf('Presto') > -1, //opera内核
  isChrome: ua.indexOf('Chrome') > -1, //Chrome
  isEdge: ua.indexOf('Edge') > -1, //Edge
  iswebKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
  isFirefox: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
  isMobile: !!ua.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
  isIos: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
  isMac:ua.indexOf("Mac OS") > -1, //Mac
  isAndroid: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1, //android终端或uc浏览器
  isIPhone: ua.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
  isIPad: ua.indexOf('iPad') > -1 //是否iPad
}
let category = getBrowser();
let browser = {
  width : winWidth,
  height : winHeight,
  navigator:navigator,
  ua:ua,
  browser:category,
  switcher:switchbrowser,
  dpr:dpr
};

function getwidth(){
  if (window.innerWidth){
    winWidth = window.innerWidth;
  }
  else if ((document.body) && (document.body.clientWidth))
    winWidth = document.body.clientWidth;
  // 获取窗口高度
  if (window.innerHeight)
    winHeight = window.innerHeight;
  else if ((document.body) && (document.body.clientHeight))
    winHeight = document.body.clientHeight;
  // 通过深入 Document 内部对 body 进行检测，获取窗口大小
}
function getBrowser(){
  switch (true){
    case (switchbrowser.isIe == true):
      return "IE";
      break;
    case (switchbrowser.isEdge == true):
      return "Edge";
      break;
    case (switchbrowser.isFirefox == true):
      return "Firefox";
      break;
    case (switchbrowser.isOpera == true):
      return "opera";
      break;
    case (switchbrowser.isChrome == true):
      return "Chrome";
      break;
    default :
      return "Unknown";
  }
}


module.exports = browser;

