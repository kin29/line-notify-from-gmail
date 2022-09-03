# line-notify-from-gmail

## how to use
- プロジェクトの設定 > スクリプト プロパティに`LINE_NOTIFY_TOKEN`を追加
- トリガーを設定(関数: `main`)

## clasp
```shell
# GASにコードを反映する(tests以下は除外される)
$ clasp push
└─ src/_utils.ts        //読み込み順序の都合上ファイル名に_をつけている
└─ src/appsscript.json
└─ src/code.ts
```
