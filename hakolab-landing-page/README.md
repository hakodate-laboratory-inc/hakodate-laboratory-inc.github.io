# Hakolab Landing Page

GitHub Pagesで公開するためのランディングページです。

## 機能

- モダンでレスポンシブなデザイン
- 各種WEBサイト・SNSリンクの表示
- アニメーション効果

## セットアップ

### GitHub Organizationでの公開方法

**方法1: Organization専用リポジトリ（推奨）**

1. GitHub Organization（[hakodate-laboratory-inc](https://github.com/orgs/hakodate-laboratory-inc)）で、`hakodate-laboratory-inc.github.io`という名前のリポジトリを作成
2. このプロジェクトのファイルをそのリポジトリにプッシュ
3. リポジトリのSettings > Pagesで、ソースを`main`ブランチの`/root`に設定
4. `https://hakodate-laboratory-inc.github.io` でアクセス可能になります

**方法2: 任意のリポジトリ名で公開**

1. このリポジトリをGitHub Organizationにプッシュ
2. GitHubリポジトリのSettings > Pagesで、ソースを`main`ブランチの`/root`に設定
3. `https://hakodate-laboratory-inc.github.io/hakolab-landing-page/` でアクセス可能になります

## カスタマイズ

### リンクの追加・編集

`script.js`ファイルの`links`配列を編集してください。

### スタイルの変更

`styles.css`ファイルで色やレイアウトをカスタマイズできます。

## ライセンス

MIT License