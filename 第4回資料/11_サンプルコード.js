// document.addEventListener('DOMContentLoaded', function() {
// Instructor answer: Completed sample code with auto-item and persistence

// State
let playerName = '';
let clickCount = 0;
let autoCPS = 0; // automatic coins per second
const itemCost = 10;

// Update UI (safe: check elements exist)
function updateDisplay() {
  const coinEl = document.getElementById('coinCount');
  if (coinEl) coinEl.textContent = clickCount;
  const autoEl = document.getElementById('auto-count');
  if (autoEl) autoEl.textContent = autoCPS;
  const upgradeBtn = document.getElementById('upgrade-btn');
  if (upgradeBtn) upgradeBtn.disabled = clickCount < itemCost;
}

// Check unlock area
function checkUnlock() {
  const unlockArea = document.getElementById('unlockArea');
  if (!unlockArea) return;
  if (clickCount >= 100) {
    unlockArea.style.display = 'block';
  } else {
    unlockArea.style.display = 'none';
  }
}

// Core: increase coins
function plusCoin(amount = 1) {
  clickCount += amount;
  saveGame();
  updateDisplay();
  checkUnlock();
}

// Save to localStorage
function saveGame() {
  const nameInput = document.getElementById('playerName');
  if (nameInput) playerName = nameInput.value;
  const data = { playerName, clickCount, autoCPS };
  try {
    localStorage.setItem('myGameData', JSON.stringify(data));
  } catch (e) {
    console.warn('localStorage set failed', e);
  }
}

// Load from localStorage
function loadGame() {
  try {
    const saved = localStorage.getItem('myGameData');
    if (saved) {
      const data = JSON.parse(saved);
      playerName = data.playerName || '';
      clickCount = Number(data.clickCount) || 0;
      autoCPS = Number(data.autoCPS) || 0;
      const nameInput = document.getElementById('playerName');
      if (nameInput) nameInput.value = playerName;
      updateDisplay();
      checkUnlock();
    }
  } catch (e) {
    console.warn('localStorage read failed', e);
  }
}

// Purchase upgrade
function buyAuto() {
  if (clickCount >= itemCost) {
    clickCount -= itemCost;
    autoCPS += 1;
    saveGame();
    updateDisplay();
  }
}

// Auto increment loop
setInterval(() => {
  if (autoCPS > 0) plusCoin(autoCPS);
}, 1000);

// Wire events on load
document.addEventListener('DOMContentLoaded', function() {
  const clickBtn = document.getElementById('clickButton');
  if (clickBtn) clickBtn.addEventListener('click', () => plusCoin(1));

  const saveBtn = document.getElementById('saveButton');
  if (saveBtn) saveBtn.addEventListener('click', saveGame);

  const upgradeBtn = document.getElementById('upgrade-btn');
  if (upgradeBtn) upgradeBtn.addEventListener('click', buyAuto);

  loadGame();
  updateDisplay();
});
