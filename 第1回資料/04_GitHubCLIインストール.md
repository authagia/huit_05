# GitHub CLI インストールガイド

## Windowsの場合（wingetを使用）

### 1. インストール

PowerShell またはコマンドプロンプトで以下を実行:

```powershell
winget install GitHub.cli
```

### 2. 確認

```powershell
gh --version
```

---

## Macの場合

### Homebrewを使用

```bash
brew install gh
```

### 確認

```bash
gh --version
```

---

## 確認チェック

- [ ] `gh --version` でバージョンが表示される