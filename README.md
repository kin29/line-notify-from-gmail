# line-notify-from-gmail

## how to use
- プロジェクトの設定 > スクリプト プロパティに`LINE_NOTIFY_TOKEN`, `TARGET_FROM_EMAIL_LIST`(カンマ区切り)を追加
```shell
// example
LINE_NOTIFY_TOKEN=xxx
TARGET_FROM_EMAIL_LIST=from1@localhost,from2@localhost,from3@localhost
```
- トリガーを設定(関数: `main`)

## clasp
```shell
# GASにコードを反映する(tests以下は除外される)
$ clasp push
└─ src/_utils.ts        //読み込み順序の都合上ファイル名に_をつけている
└─ src/appsscript.json
└─ src/code.ts
```

## test
```shell
$ npm test
```
