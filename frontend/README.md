## next-v18-template 概要

app router を使用しない next.js-v18 のテンプレートリポジトリ
required: nodejs 20.9.0

## Usage

環境変数の設定
`cp .env.example .env` を実行し、Firebase のクレデンシャルを設定をする。

ローカルサーバーの起動

```zsh
yarn install
yarn dev
```

## 構成など

機能を feature ごとにディレクトリ区切って実装していく。
feature の中身は api, components が基本となる。

feature から横断的に使われるような機能は src 配下の components, hooks などに書く。
`features/components`は Atomic Design で機能スコープで有効なコンポーネントを配置。

依存しているライブラリ(ex. axios, react-query, auth...)の設定、実装は libs 配下に記述する。

`src/components`は Atomic Design でグローバルに有効なコンポーネントを配置

## API 連携

API との連携は OpenAPI スキーマで行なっています。
スキーマファイルは buychat-ns-newshop-backend をローカルで立ち上げると生成されます。
バックエンドのリポジトリでターミナルを 2 つ用意してそれぞれ `yarn debug`, `yarn start:dev` を実行し、フロントのリポジトリで `yarn gen:openapi-type` を実行するとスキーマから TypeScript の API クライアント・型が自動生成されます。
aspida というツールによって実現されています。

## S3

ファイルのアップロードには AWS S3, アップロードしたファイルの配信には CloudFront を使用しています。
また Next.js の Route Handler を使用してフロントエンドからファイルをアップロードしています。

以下の手順でローカルから AWS の develop 環境に接続してください。

1. AWS の SSO にログインし、 `dev+dev-newsystem` の Systems Manager に入る
2. .env の環境変数に以下の値を入力する
   a. AWS_ACCESS_KEY_ID: Systems Manager の `s3-user-access-key-id`
   b. AWS_SECRET_ACCESS_KEY: Systems Manager の `s3-user-secret-access-key`

### S3 の実装方針

- `src/libs/s3.ts` に作成している共通の処理でファイルをアップロードする
- ファイル名は `uuid` を使用して一意のファイル名にする
- ショップ ID ごとにオブジェクトを分ける
- 保存対象ごとにオブジェクトを分ける（商品・ユーザー・自動応答等）
- アップロードして返ってきた key を DB に保存し、CloudFront から表示する
- 更新時は更新前のファイルと拡張子が同じ限り、同じ key でアップロードして上書きをする

商品画像をアップロードする例

```
const file: File = selectedImages[0]?.file
if (file) {
  const key = await uploadShopFile(file, `${shopId}/items`)
}
```

アップロードした画像を CloudFront 経由で表示する例

```
<Image src=`${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/${key}` />
```

## Deploy

Vercel で自動デプロイされます。
デプロイ結果は Slack の buychat\_\_deploy_notif チャンネルに通知されます。
develop ブランチにマージされるとリリース用の `Release YYYY-mm-dd` という Pull Request が自動で作成されます。

feature/〇〇 ブランチから develop ブランチに Pull Request を作成 → PR ごとにプレビュー環境を自動デプロイ
develop ブランチにマージ → develop 環境に自動デプロイ
main ブランチにマージ → production 環境に自動デプロイ

## Sentry

Sentry でエラーの監視をしています。
エラー時の処理を作成したときは `src/lib/sentry.ts` の `capture` を使用してエラーを送信してください。
第 1 引数にはエラーオブジェクトを、第 2 引数ではエラーの検索をしやすくするために category を渡してください。

```
import { capture } from '@/libs/sentry'

try {
  …
} catch (err) {
  capture(err, 'SignUp')
}
```
