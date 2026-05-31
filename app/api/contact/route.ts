import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { storeName, name, phone, email, message } = body;

  if (!storeName || !name || !phone || !email) {
    return NextResponse.json({ error: '必須項目が未入力です' }, { status: 400 });
  }

  // TODO: メール送信サービス（SendGrid等）を設定する場合はここに実装
  // 現在はVercel環境変数 CONTACT_EMAIL にフォーム内容を転送する想定
  // 開発中はコンソールに出力
  console.log('新規お問い合わせ:', { storeName, name, phone, email, message });

  return NextResponse.json({ success: true });
}
