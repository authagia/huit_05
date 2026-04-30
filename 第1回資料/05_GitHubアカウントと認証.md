# GitHub CLI 認証 & 2FA設定

## 手順

### 1. GitHub CLIでログイン

ターミナル（PowerShell）で以下を実行:

```bash
gh auth login
```

### 2. 認証設定

```
? What account do you want to log into?  → GitHub.comを選択
? What is your preferred protocol for Git operations?  → HTTPSを選択
? Authenticate Git with your GitHub credentials?  → Yesを選択
? How would you like to authenticate GitHub CLI?  → Login with a web browserを選択
```

- ブラウザが開くので「Authorize GitHub CLI」をクリック
- ターミナルに戻って Success と表示されればOK

---

### 3. 二段階認証を設定


セキュリティを強化するため、2FAを設定します:

1. ブラウザで https://github.com/ にログイン
2. 画面右上のアバター → **Settings**
3. 左メニュー → **Password and authentication**
4. **「Two-factor authentication」** の **「Enable」** をクリック
5. 認証方法を選択:
   - **推奨**: **Authenticator app** （Google Authenticator や Authy 等）
   - 代替: **SMS** （電話番号によるSMS）
6. 画面の指示に従ってセットアップ
7. **恢复コード** を必ず保存！（なくすとログインできなくなります）

---

## 確認チェック

- [ ] `gh auth status` でログイン状態が表示される
- [ ] ユーザー名が正しく表示されている
- [ ] 2FAが有効になっている