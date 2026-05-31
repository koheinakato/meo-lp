import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const BUSINESS_EMAIL = 'info@platanus-p.com';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { storeName, name, phone, email, message } = body;

  if (!storeName || !name || !phone || !email) {
    return NextResponse.json({ error: '必須項目が未入力です' }, { status: 400 });
  }

  try {
    // 内部通知メール
    await resend.emails.send({
      from: BUSINESS_EMAIL,
      to: BUSINESS_EMAIL,
      subject: `【新規お問い合わせ】${storeName}`,
      html: `
        <h2>新規無料相談のお申し込みがありました</h2>
        <table style="border-collapse:collapse;width:100%">
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;width:30%">店舗名</td><td style="padding:8px;border:1px solid #ddd">${storeName}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5">担当者名</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5">電話番号</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5">メールアドレス</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5">ご相談内容</td><td style="padding:8px;border:1px solid #ddd">${message || 'なし'}</td></tr>
        </table>
      `,
    });

    // お客様への自動返信メール
    await resend.emails.send({
      from: BUSINESS_EMAIL,
      to: email,
      subject: '【Platanus Planning】無料相談のお申し込みありがとうございます',
      html: `
        <p>${name} 様</p>
        <p>このたびは無料相談にお申し込みいただき、誠にありがとうございます。</p>
        <p>内容を確認の上、担当者より2営業日以内にご連絡いたします。</p>
        <br>
        <p>─────────────────────</p>
        <p>【お申し込み内容】</p>
        <p>店舗名：${storeName}</p>
        <p>担当者名：${name}</p>
        <p>電話番号：${phone}</p>
        <p>メールアドレス：${email}</p>
        ${message ? `<p>ご相談内容：${message}</p>` : ''}
        <p>─────────────────────</p>
        <br>
        <p>Platanus Planning</p>
        <p>${BUSINESS_EMAIL}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return NextResponse.json({ error: 'メール送信に失敗しました' }, { status: 500 });
  }
}
