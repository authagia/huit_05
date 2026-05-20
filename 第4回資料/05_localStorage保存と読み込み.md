# localStorage 保存と読み込み

## 1. localStorage とは
- ブラウザに簡単に文字列データを保存できる仕組み
- ページをリロードしても残る
- 同じサイト内であれば次回も使える

## 2. 保存するデータ
- `playerName`
- `clickCount`

## 3. 保存の基本
```js
function saveGame() {
  const data = {
    playerName: document.getElementById('playerName').value,
    clickCount: clickCount,
  };
  localStorage.setItem('myGameData', JSON.stringify(data));
}
```

## 4. 読み込みの基本
```js
function loadGame() {
  const saved = localStorage.getItem('myGameData');
  if (saved) {
    const data = JSON.parse(saved);
    document.getElementById('playerName').value = data.playerName || '';
    playerName = data.playerName || '';
    clickCount = data.clickCount || 0;
    updateDisplay();
    checkUnlock();
  }
}
```

## 5. 注意点
- `localStorage` は文字列しか保存できないので `JSON.stringify` / `JSON.parse` を使う
- 保存キーを統一する（例: `myGameData`）
- 保存されていない場合は `null` が返るので `if (saved)` でチェックする
