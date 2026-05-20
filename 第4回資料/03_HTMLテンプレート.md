# HTMLテンプレートの解説

このテンプレートはコインクリッカーの基本形です。ボタンや数字、保存・復元の仕組みが揃っているので、あとから好きなテーマに変えて自分だけのクリッカーゲームにできます。

`10_テンプレート.html` は配布用の虫食いテンプレートとして使い、`11_サンプルコード.js` のコメントを見ながら必要な部分を埋めていきます。

## 1. 画面構成
- `input#playerName` : プレイヤー名を入力する欄
- `button#clickButton` : クリックするとコインが増えるボタン
- `p#coinCount` : 現在のコイン数を表示する場所
- `button#saveButton` : 名前とスコアを保存するボタン
- `div#unlockArea` : 100枚で表示されるアンロック領域

## 2. 主要な要素
```html
<input id="playerName" type="text" placeholder="名前を入力" />
<button id="clickButton">クリック！</button>
<p>コイン: <span id="coinCount">0</span></p>
<button id="saveButton">セーブ</button>
<div id="unlockArea" style="display:none;">
  <button id="specialButton">スペシャルアイテムを獲得</button>
</div>
```

## 3. テンプレートのポイント
- `id` 属性は JavaScript から操作するときに使います。
- `style.display` を使って、アンロック部分を隠したり表示したりします。
- `script` は最後に読み込むか、`defer` を使うことで要素が先に読み込まれてから実行できます。

## 4. 動作の流れ
1. ページを開く
2. `playerName` を入力
3. `クリック！` を押すと `coinCount` が増える
4. `セーブ` を押すとデータが `localStorage` に保存される
5. 100枚以上になると `unlockArea` が表示される
