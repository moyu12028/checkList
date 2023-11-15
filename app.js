const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// bodyParserを使用してJSONデータを解析する
app.use(bodyParser.json());

// 静的ファイルを提供するための設定
app.use(express.static('public'));

// POSTリクエストを処理する
app.post('/submit-checklist', (req, res) => {
    const checklistData = req.body;
    console.log("受信したデータ:", checklistData);

    // 現在の日付を取得してフォーマットする
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD 形式

    // データを日付を含むファイル名で保存
    const filename = `data/${formattedDate}_checkList.json`;
    fs.writeFile(filename, JSON.stringify(checklistData, null, 2), err => {
        if (err) {
            console.error(err);
            res.status(500).send('データの保存中にエラーが発生しました');
            return;
        }
        res.send('データが正常に保存されました');
    });
});

// サーバーを起動する
app.listen(port, () => {
    console.log(`サーバーがポート${port}で起動しています...`);
});


