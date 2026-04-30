# GitHub Pages 公開手順書

## 手順

### 1. VS Codeで作業開始

1. VS Codeを開く
2. 「ファイル」 → 「フォルダを開く」
3. デスクトップなどに新規フォルダを作成（例: `my-page`）
4. そのフォルダを開く

---

### 2. テンプレートHTMLを配置

1. 配布した `06_テンプレート.html` をそのフォルダに入れる
2. ファイル名を `index.html` に変更
3. VS Codeのエクスプローラーから確認

---

### 3. Gitの設定 & コミット

VS Codeのターミナルを開く（Ctrl + `@`）

```bash
# ディレクトリをGitリポジトリとして初期化
git init

# Gitの初期設定（名前とメールはGitHubと同じもの）
git config user.name "あなたの名前"
git config user.email "あなたのメール"

# ステージに追加
git add .

# コミット
git commit -m "first commit"

```

> ℹ️ **メモ**: `git init` は `gh repo create` の「Push an existing local repository」で自動的に行われます

---

### 4. リポジトリを作成 & push

※ あらかじ `gh auth login` で認証されている必要があります（未の場合は [05_GitHubアカウントと認証.md](05_GitHubアカウントと認証.md) を参照）

ターミナルで以下を実行:

```bash
gh repo create
```

- **「Push an existing local repository to GitHub」** を選択
- Description: 「自己紹介ページ」

> ℹ️ **メモ**: `gh repo create` で作成すると、リモート（origin）が自動的に設定されます

---

### 7. GitHub Pages を有効化

1. ターミナルで以下を実行してリポジトリページを開く:
```bash
gh repo view --web
```

2. 「Settings」→「Pages」をクリック
3. **「Source」** がまだ無効の場合は **「Deploy from branch」** を選択
4. **「Branch」** を `main` （または `master`）に設定
5. **「/ (root)」** フォルダを選択
6. 「Save」をクリック

---

### 8. 公開URLを確認

**1〜2分待つ** と、上の画面にURLが表示されます:

```
Your site is live at https://ユーザー名.github.io/my-page/
```

またはターミナルで:

```bash
gh repo view --json url
```

---

### 9. 公開確認

表示されたURLをブラウザで開いて、テンプレートページが表示されればOK！

---

## 確認チェック

- [ ] VS Code でフォルダを開いた
- [ ] index.html を配置した
- [ ] git config で名前とメールを設定した
- [ ] git add & commit した
- [ ] git branch -M main でブランチ名を変更した
- [ ] `gh auth login` で認証した
- [ ] `gh repo create` で push した
- [ ] GitHub Pages を有効化した（Branch: main）
- [ ] 公開URLが表示された
- [ ] ブラウザでページが開いた