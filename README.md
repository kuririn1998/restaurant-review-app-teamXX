# Restaurant Review App

This is a full-stack restaurant review application. The frontend is built with **Next.js** and the backend is powered by **NestJS**. Users can browse and submit reviews for various restaurants.

## Directory Structure
```bash
root/
├── backend/                             # バックエンドのディレクトリ
│   ├── src/                             # ソースコード
│   │   ├── app.controller.ts            # エンドポイントのロジックを定義
│   │   ├── app.module.ts                # アプリケーションモジュールの定義
│   │   ├── app.service.ts               # ビジネスロジックを担当するサービス層
│   │   ├── main.ts                      # アプリケーションのエントリーポイント
│   ├── test/                            # テスト関連ファイル
│   │   ├── app.e2e-spec.ts              # End-to-Endテストファイル
│   ├── .eslintrc.js                     # ESLintの設定ファイル
│   ├── package.json                     # バックエンドの依存関係とスクリプト
│   ├── tsconfig.json                    # TypeScriptのコンパイル設定
│   ├── tsconfig.build.json              # TypeScriptのビルド用設定
│   ├── dist/                            # コンパイル後の出力ディレクトリ
│   └── node_modules/                    # Node.jsの依存関係
├── frontend/                            # フロントエンドのディレクトリ
│   ├── src/                             # ソースコード
│   │   ├── pages/                       # Next.jsの各ページコンポーネント
│   │   └── styles/                      # CSSスタイル
│   ├── public/                          # 静的ファイル（画像やファビコンなど）
│   │   ├── favicon.ico                  # ファビコンファイル
│   │   └── next.svg                     # Next.jsのロゴ
│   ├── .env                             # 環境変数ファイル
│   ├── next.config.mjs                  # Next.jsのカスタム設定ファイル
│   ├── package.json                     # フロントエンドの依存関係とスクリプト
│   ├── tsconfig.json                    # フロントエンドのTypeScript設定
│   └── node_modules/                    # Node.jsの依存関係
├── .gitignore                           # Gitにコミットしないファイルを定義
├── .prettierrc                          # Prettierの設定ファイル
├── README.md                            # プロジェクトの概要と説明
├── package.json                         # ルートプロジェクトの依存関係とスクリプト
├── tsconfig.json                        # TypeScriptのルート設定ファイル
├── nest-cli.json                        # NestJS CLIの設定ファイル
└── node_modules/                        # ルートのNode.js依存関係

```

## Prerequisites

- Node.js (version 19.3.0 or higher)
- MySQL
- AWS account (for S3 storage)
- npm or yarn

## Project setup

```bash
$ npm install
```
