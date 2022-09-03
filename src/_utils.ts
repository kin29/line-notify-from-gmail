// ファイル名に_がついてるのはgasの都合上、先に読み込まれるように
export class Utils {
    //検索対象にしたい送信元メールアドレスリスト(任意)
    public getTargetFromEmailList(): string[] { //privateでよさそう、テストの都合上public
        return [
            'hoict@hoict.jp', //保育園のやつ
        ];
    }

    // 直近１時間に受信したメールを検索する用のクエリーを作成する
    public createGmailSearchString(targetFromEmailList: string[]): string { //privateでよさそう、テストの都合上public
        let searchString = '(newer_than:1h';
        if (targetFromEmailList.length > 0) {
            searchString += ' from:' + targetFromEmailList.join(' OR from:');
        }
        searchString += ')';

        return searchString;
    }

    //対象のGmailメッセージを取得する
    public getTargetGmailMessages(): GoogleAppsScript.Gmail.GmailMessage[][] {
        //検索条件
        const searchString = this.createGmailSearchString(this.getTargetFromEmailList());
        //対象のGmail取得
        const myThreads = GmailApp.search(searchString);

        return GmailApp.getMessagesForThreads(myThreads);
    }

    // LINE通知用のメッセージを作る
    public createOutputMessages(gmailMessages: GoogleAppsScript.Gmail.GmailMessage[][]): string[] { //privateでよさそう、テストの都合上public
        let outputMessages = [];
        for(let i = 0; i < gmailMessages.length;i++){
            const message = gmailMessages[i].slice(-1)[0];
            outputMessages[i] = " " + (message.getDate().getMonth()+1) + "/"+ message.getDate().getDate()
                + " " + message.getDate().getHours() + ":" + message.getDate().getMinutes()
                + "\n[from]" + message.getFrom()
                + "\n\n[subject]" + message.getSubject()
                + "\n\n[body]" + message.getBody();
        }

        return outputMessages;
    }
}
