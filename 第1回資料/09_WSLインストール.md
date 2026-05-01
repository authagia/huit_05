# WSL インストールガイド

> この資料は、おまけです。必須ではありません。Linux環境をWindows上で使いたい場合にのみインストールしてください。

## はじめに

WSL（Windows Subsystem for Linux）とは、Windows上でLinuxを実行できる機能です。Linuxのコマンドラインツールを使いたい場合に便利です。

---

## インストール手順

### 1. WSLのインストール

PowerShellを管理者として実行し、以下を入力:

```powershell
wsl --install
```

このコマンドで以下が自動で行われます：
- WSL機能の有効化
- 仮想マシンプラットフォームの有効化
- Linuxカーネルのインストール
- Ubuntuのインストール

### 2. 再起動

インストール完了後、コンピュータを再起動してください。

### 3. Ubuntuの起動

再起動後、スタートメニューから「Ubuntu」をクリックして起動。ユーザー名とパスワードを設定すれば完了です。

### 4. 確認

```bash
wsl -l -v
```

でインストール状況を確認できます。

> **Ubuntuが自動でインストールされなかった場合**
>
> 上記の手順でUbuntuが開かない場合は、以下のコマンドでディストリビューションを確認してインストールしてください：
>
> ```powershell
> wsl --list --online
> wsl --install -d Ubuntu
> ```

---

## 確認チェック

- [ ] `wsl -l -v` でUbuntuが一覧表示される
- [ ] Ubuntuターミナルでコマンドが入力できる

---

## WSLを使うメリット

| メリット | 説明 |
|----------|------|
| Linuxコマンドが使える | `grep`, `awk`, `sed` などのUnixツール |
| 開発環境が整う | Python, Node.js, Ruby などの環境構築が容易 |
| Dockerが使える | Docker Desktop for Windowsで利用可能 |

---

## よく使うWSLコマンド

```bash
# インストール済みLinux一覧
wsl -l -v

# Linuxを起動
wsl -d Ubuntu

# シャットダウン
wsl --terminate Ubuntu
```

---

## トラブルシューティング

### 「仮想化が無効になっています」と表示される場合

BIOS設定で仮想化（Virtualization Technology）を有効にする必要があります。

### インストールが遅い場合

Microsoft StoreからUbuntuアプリを直接インストールしてみてください。