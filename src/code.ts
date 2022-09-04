import { Utils } from "./_utils";

const LINEToken = PropertiesService.getScriptProperties().getProperty('LINE_NOTIFY_TOKEN');
const targetFromEmailListString = PropertiesService.getScriptProperties().getProperty('TARGET_FROM_EMAIL_LIST');

function main(): void {
    try {
        const utils = new Utils();
        const searchString = utils.createGmailSearchString(targetFromEmailListString.split(','))
        const targetGmailThreads = GmailApp.search(searchString);
        const targetGmailMessageList = GmailApp.getMessagesForThreads(targetGmailThreads);
        const outputMessageList = utils.createOutputMessages(targetGmailMessageList);
        for(let i = 0; i < outputMessageList.length; i++) {
            sendToLINE(outputMessageList[i]);
        }
    } catch(error) {
        Logger.log(error);
    }
}

// LINEに転送する
function sendToLINE(message): void {
    const payload = {'message' : message};
    const options = {
        "method"  : "post",
        "payload" : payload,
        "headers" : {"Authorization" : "Bearer "+ LINEToken}
    };
    // @ts-ignore
    UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
