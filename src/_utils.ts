// ファイル名に_がついてるのはgasの都合上、先に読み込まれるように
export class Utils {
    // 直近１時間に受信したメールを検索する用のクエリーを作成する
    public createGmailSearchString(targetFromEmailList: string[]): string {
        let searchString = '(newer_than:1h';
        if (targetFromEmailList.length > 0) {
            searchString += ' from:' + targetFromEmailList.join(' OR from:');
        }
        searchString += ')';

        return searchString;
    }

    // LINE通知用のメッセージを作る
    public createMessageListForLINE(gmailMessageMultiList: GoogleAppsScript.Gmail.GmailMessage[][]): string[] {
        let outputMessages = [];
        for(let i = 0; i < gmailMessageMultiList.length; i++){
            const message = gmailMessageMultiList[i].slice(-1)[0]; //スレッドの最末尾(最新)のメッセージを使う
            outputMessages[i] = " "
                + (message.getDate().getMonth()+1)
                + "/"+ message.getDate().getDate()
                + " " + message.getDate().getHours()
                + ":" + message.getDate().getMinutes()
                + "\n[from]" + message.getFrom()
                + "\n\n[subject]" + message.getSubject()
                + "\n\n[body]" + message.getBody();
        }

        return outputMessages;
    }
}
