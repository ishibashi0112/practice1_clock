// 関数 時間データ作成
function createDate(){
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const Day = now.getDate();
  const week = now.getDay();
  const weeks = ["(日)","(月)","(火)","(水)","(木)","(金)","(土)"];
  const hourData =  now.getHours();
  const minuteData = now.getMinutes();
  const secondData = now.getSeconds();
  return {Date:{year: year, month: month, Day: Day, week: weeks[week], hour: hourData, minute: minuteData,second: secondData}};
};
// 関数 桁変換(条件分岐)
function digitChangedCheck(data){
  if(data < 10){
    data = "0" + data
  } 
  return data ;
};
// 関数 桁変換(実行)
function digitChangedAction(minute,second){
  const changedMinute = digitChangedCheck(minute);
  const changedSecond = digitChangedCheck(second);
  return {minutes: changedMinute, second:changedSecond}
};
// 関数 表示データ作成
function createClock(Date,minutes,second){
  const Clock = Date.Date.year + "年" 
              + Date.Date.month + "月" 
              + Date.Date.Day + "日" 
              + Date.Date.week + " " 
              + Date.Date.hour + ":" + minutes + ":" + second ;
  return Clock ;
};

// 時間データ作成
const nowDate = createDate();
const changedDate = digitChangedAction(nowDate.Date.minute,nowDate.Date.second);

// 時計デフォルト表示
const Time = document.getElementById("time");
const addClock = document.createElement("div");
addClock.setAttribute("id","clock");
addClock.innerText = createClock(nowDate,changedDate.minutes,changedDate.second) ;
Time.appendChild(addClock);

// 時計動作
setInterval(function(){
  const afterDate = createDate();
  const changedAfterDate = digitChangedAction(afterDate.Date.minute,afterDate.Date.second);
  addClock.innerText = createClock(afterDate,changedAfterDate.minutes, changedAfterDate.second) ;
},"1000");
