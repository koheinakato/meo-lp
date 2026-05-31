'use client';

import { useState } from 'react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [form, setForm] = useState({
    storeName: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setState('success');
        setForm({ storeName: '', name: '', phone: '', email: '', message: '' });
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  };

  if (state === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#3DBFB0' }}>
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-medium mb-3" style={{ color: '#333' }}>
          お問い合わせを受け付けました
        </h3>
        <p style={{ color: '#888' }}>
          担当者より2営業日以内にご連絡いたします。<br />
          しばらくお待ちください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
            店舗名 <span style={{ color: '#3DBFB0' }}>*</span>
          </label>
          <input
            type="text"
            name="storeName"
            required
            value={form.storeName}
            onChange={handleChange}
            placeholder="例：○○ラーメン 渋谷店"
            className="w-full px-4 py-3 border rounded-none text-sm outline-none transition-colors"
            style={{ borderColor: '#E5E5E5', color: '#333' }}
            onFocus={(e) => (e.target.style.borderColor = '#3DBFB0')}
            onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
            ご担当者名 <span style={{ color: '#3DBFB0' }}>*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="例：山田 太郎"
            className="w-full px-4 py-3 border rounded-none text-sm outline-none transition-colors"
            style={{ borderColor: '#E5E5E5', color: '#333' }}
            onFocus={(e) => (e.target.style.borderColor = '#3DBFB0')}
            onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
            電話番号 <span style={{ color: '#3DBFB0' }}>*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="例：03-1234-5678"
            className="w-full px-4 py-3 border rounded-none text-sm outline-none transition-colors"
            style={{ borderColor: '#E5E5E5', color: '#333' }}
            onFocus={(e) => (e.target.style.borderColor = '#3DBFB0')}
            onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
            メールアドレス <span style={{ color: '#3DBFB0' }}>*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="例：info@example.com"
            className="w-full px-4 py-3 border rounded-none text-sm outline-none transition-colors"
            style={{ borderColor: '#E5E5E5', color: '#333' }}
            onFocus={(e) => (e.target.style.borderColor = '#3DBFB0')}
            onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2" style={{ color: '#333' }}>
          ご相談内容
        </label>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="現在のお悩みや、ご希望のサービス内容などをお聞かせください。"
          className="w-full px-4 py-3 border rounded-none text-sm outline-none transition-colors resize-none"
          style={{ borderColor: '#E5E5E5', color: '#333' }}
          onFocus={(e) => (e.target.style.borderColor = '#3DBFB0')}
          onBlur={(e) => (e.target.style.borderColor = '#E5E5E5')}
        />
      </div>

      {state === 'error' && (
        <p className="text-sm text-red-500">
          送信に失敗しました。お手数ですが、時間をおいて再度お試しください。
        </p>
      )}

      <div className="text-center">
        <button
          type="submit"
          disabled={state === 'submitting'}
          className="inline-block px-12 py-4 text-white text-sm font-medium tracking-widest transition-opacity disabled:opacity-50 cursor-pointer"
          style={{ backgroundColor: '#3DBFB0' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#2EA89A')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#3DBFB0')}
        >
          {state === 'submitting' ? '送信中...' : '無料相談を申し込む'}
        </button>
        <p className="mt-4 text-xs" style={{ color: '#aaa' }}>
          ※ 送信後、2営業日以内に担当者よりご連絡いたします
        </p>
      </div>
    </form>
  );
}
