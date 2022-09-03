const LINEToken = PropertiesService.getScriptProperties().getProperty('LINE_NOTIFY_TOKEN');

function main() {
  try {
    const messageList = getMessageListLastOneHour();
    for(let i = 0; i < messageList.length; i++) {
      sendToLINE(messageList[i]);
    }
  } catch(error) {
    Logger.log(error);
  } 
}


//検索対象にしたい送信元メールアドレスリスト(任意)
function getTargetFromEmailList() {
  return [
    'hoict@hoict.jp', //保育園のやつ
  ];
}  

//直近１時間に受信したメールを検索して取得する
function getMessageListLastOneHour() {
 //検索条件
 let searchString = '(newer_than:1h';
 const fromEmailList = getTargetFromEmailList();
 if (fromEmailList.length > 0) {
   searchString += 'from:' + fromEmailList.join(' OR from:');
 }
 searchString += ')';
 
 //取得
 const myThreads = GmailApp.search(searchString);
 const myMsgs = GmailApp.getMessagesForThreads(myThreads);
 let targetMsgs = [];
 for(let i = 0; i < myMsgs.length;i++){
  const message = myMsgs[i].slice(-1)[0];
  targetMsgs[i] = " " + (message.getDate().getMonth()+1) + "/"+ message.getDate().getDate()
  + " " + message.getDate().getHours() + ":" + message.getDate().getMinutes()
  + "\n[from]" + message.getFrom()
  + "\n\n[subject]" + message.getSubject()
  + "\n\n[body]" + message.getBody(); 
 }
  
 return targetMsgs;
}

// LINEに転送する
function sendToLINE(message) {
 const payload = {'message' : message};
 const options ={
   "method"  : "post",
   "payload" : payload,
   "headers" : {"Authorization" : "Bearer "+ LINEToken}  
 };
 UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}