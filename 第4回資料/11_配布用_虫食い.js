// 参加者用：虫食いテンプレートの JavaScript
// このファイルは「埋める部分」を残した配布用です。
// 目的: 実際に手を動かして、`plusCoin`, `saveGame`, `loadGame`, `checkUnlock` を完成させてください。

// 1) 状態の定義（変更しない）
let playerName = '';
let clickCount = 0;

// 2) 画面更新（変更しない）
function updateDisplay() {
  document.getElementById('coinCount').textContent = clickCount;
}

// 3) TODO: アンロック判定を実装してください
function checkUnlock() {
  // ヒント:
  // - unlockArea 要素を取得する: document.getElementById('unlockArea')
  // - もし clickCount が 100 以上なら表示する（style.display = 'block'）、そうでなければ非表示にする
  // ここに実装を書きましょう
}

// 4) TODO: コインを増やす共通処理を実装してください
function plusCoin() {
  // ヒント:
  // - clickCount を 1 増やす
  // - updateDisplay() を呼ぶ
  // - checkUnlock() を呼ぶ
  // ここに実装を書きましょう
}

// 5) TODO: 保存処理を実装してください
function saveGame() {
  // ヒント:
  // - playerName を入力欄から取得する（document.getElementById('playerName').value）
  // - オブジェクトにまとめて JSON に変換して localStorage に保存する
  // ここに実装を書きましょう
}

// 6) TODO: 読み込み処理を実装してください
function loadGame() {
  // ヒント:
  // - localStorage からデータを読む
  // - 存在する場合は playerName と clickCount を復元して、updateDisplay() と checkUnlock() を呼ぶ
  // ここに実装を書きましょう
}

// 7) 初期化: イベントをつなぐ（変更しない）
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('clickButton').addEventListener('click', plusCoin);
  document.getElementById('saveButton').addEventListener('click', saveGame);
  loadGame();
});
