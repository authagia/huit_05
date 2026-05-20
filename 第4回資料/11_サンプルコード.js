// ここから順番に書いていきます。

// 1) 状態の定義: コイン数とプレイヤー名
let playerName = '';
let clickCount = 0;

// 2) 画面を更新する関数
function updateDisplay() {
  document.getElementById('coinCount').textContent = clickCount;
}

// 3) アンロック判定の関数
function checkUnlock() {
  const unlockArea = document.getElementById('unlockArea');
  if (clickCount >= 100) {
    unlockArea.style.display = 'block';
  } else {
    unlockArea.style.display = 'none';
  }
}

// 4) コインを増やす共通処理
function plusCoin() {
  clickCount += 1;
  updateDisplay();
  checkUnlock();
}

// 5) 保存する関数
function saveGame() {
  playerName = document.getElementById('playerName').value;
  const data = {
    playerName: playerName,
    clickCount: clickCount,
  };
  localStorage.setItem('myGameData', JSON.stringify(data));
  alert('データを保存しました！');
}

// 6) 読み込む関数
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

// 7) ここから先は発展チャレンジ用のコメント
// TODO: 150枚で自動化アイテムを追加するなら、autoCPS を使った関数を作ります。
// TODO: CSS の animation や transition を使ってボタンを動かす練習もできます。

// 8) ページ読み込み時の処理
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('clickButton').addEventListener('click', plusCoin);
  document.getElementById('saveButton').addEventListener('click', saveGame);
  loadGame();
});
