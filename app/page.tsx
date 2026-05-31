'use client';

import Image from 'next/image';
import ContactForm from './components/ContactForm';

const serviceAreas = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Googleビジネスプロフィール最適化',
    desc: 'カテゴリ・説明文・写真・営業時間など、Googleの評価ロジックに合わせた情報整備を実施。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'レビュー獲得施策',
    desc: 'QRコード設置・インセンティブ設計・返信テンプレートの提供。継続的なレビュー蓄積で集客資産を構築。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    ),
    title: '多言語MEO',
    desc: '英語・中国語・韓国語など多言語でのビジネスプロフィール最適化。インバウンド客の集客を強化します。',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '口コミ獲得の仕組み（現場オペレーション）',
    desc: 'スタッフへのレクチャー・声かけスクリプト・現場QRフロー設計まで。店舗運営に組み込める仕組みを構築。',
    highlight: true,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Googleポスト・投稿管理',
    desc: '新メニュー・イベント・お知らせを月2〜4回投稿。アルゴリズム評価を維持・向上させます。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: '競合分析・月次レポート',
    desc: '検索インプレッション・経路案内数・電話クリック数を毎月計測。競合との比較分析を提供します。',
  },
];

const roadmap = [
  {
    month: 'Month 1',
    label: '基盤構築',
    desc: 'QRコード設置・インセンティブ設計。Googleビジネスプロフィール最適化。初期レビュー投稿が始まる。',
    active: true,
  },
  {
    month: 'Month 2',
    label: '蓄積加速',
    desc: 'レビュー数が増加。Googleマップでの露出が改善し始める。投稿・返信のPDCAが回り始める。',
    active: false,
  },
  {
    month: 'Month 3',
    label: '効果検証',
    desc: '検索順位向上を確認。3か月の成果を数値で評価し、次のフェーズへの判断が可能に。',
    active: false,
  },
  {
    month: 'Month 4+',
    label: '継続成長',
    desc: 'レビュー蓄積が継続。永続的な集客資産として機能し続け、新規来客が自然に積み上がっていく。',
    active: false,
  },
];

const plans = [
  {
    name: 'エントリー',
    price: '19,800',
    description: '初めてMEO対策に取り組む店舗向け',
    features: [
      'Googleビジネスプロフィール最適化',
      '基本情報・写真の整備',
      'QRコード作成・設置サポート',
      '月次パフォーマンスレポート',
      'メールサポート',
    ],
    recommended: false,
  },
  {
    name: 'スタンダード',
    price: '29,800',
    description: '本格的な集客強化を目指す店舗向け',
    features: [
      'エントリープランの全内容',
      'インセンティブ設計・キャンペーン実施',
      'Googleポスト投稿管理（月4回）',
      'レビュー返信代行',
      '競合分析レポート',
      '月1回オンライン打ち合わせ',
    ],
    recommended: true,
  },
  {
    name: 'プレミアム',
    price: '69,800',
    description: '地域No.1を目指す店舗向け',
    features: [
      'スタンダードプランの全内容',
      '多言語MEO対応（英・中・韓）',
      '口コミ獲得オペレーション構築',
      'スタッフレクチャー・スクリプト提供',
      '投稿管理（週2回）',
      '専任担当者アサイン',
    ],
    recommended: false,
  },
];

const voices = [
  {
    name: '田中 様',
    store: '居酒屋／東京・渋谷',
    rating: 5,
    text: '導入から2ヶ月で「渋谷 居酒屋」の検索でマップ3位以内に入りました。電話の問い合わせが明らかに増え、週末の予約が埋まるようになってきています。スタッフへの口コミ依頼の仕方まで丁寧に教えてもらえたのが大きかったです。',
  },
  {
    name: '鈴木 様',
    store: 'カフェ／神奈川・横浜',
    rating: 5,
    text: 'Googleマップを全然意識していなかったのですが、プロフィールを整えてもらっただけで来客数が変わりました。写真の選び方や投稿のタイミングまでアドバイスをもらえて、自分たちでも継続できる仕組みが整った感じがします。',
  },
  {
    name: '山本 様',
    store: '焼肉店／大阪・梅田',
    rating: 5,
    text: '口コミ数が3ヶ月で倍以上になりました。QRコードを置いて声かけするだけでここまで変わるとは思いませんでした。月次レポートで数字が可視化されるので、何が効いているか分かりやすく、安心して任せられています。',
  },
  {
    name: '伊藤 様',
    store: 'バー／東京・新宿',
    rating: 5,
    text: '多言語対応もしてもらい、外国人のお客様の来店が増えました。インバウンドを狙っていたのでまさに求めていたサービスでした。英語・中国語でのプロフィール最適化は自分ではとても対応できなかったと思います。',
  },
];


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b" style={{ borderColor: '#E5E5E5' }}>
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="https://platanus-p.com/" className="text-sm font-medium tracking-widest" style={{ color: '#333' }}>
            ぷらたなすきかく
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: '#about', label: 'MEOとは' },
              { href: '#service', label: '対応領域' },
              { href: '#tactics', label: '施策内容' },
              { href: '#plans', label: '料金' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest transition-colors"
                style={{ color: '#888' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3DBFB0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden md:block text-xs tracking-widest px-5 py-2 text-white transition-opacity hover:opacity-80"
            style={{ backgroundColor: '#3DBFB0' }}
          >
            無料相談する
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-bg pt-14 min-h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center gap-0">

            {/* Left: Text */}
            <div className="w-full md:w-[480px] flex-shrink-0 md:pr-8 z-10">

              {/* 権威性バッジ */}
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  { icon: '📍', text: 'MEO施策実績 100店舗以上' },
                  { icon: '⭐', text: '顧客満足度 98%' },
                  { icon: '🏆', text: 'MAP3達成率 82%' },
                ].map((badge) => (
                  <span
                    key={badge.text}
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 border font-medium"
                    style={{ borderColor: '#3DBFB0', color: '#3DBFB0', backgroundColor: 'rgba(61,191,176,0.06)' }}
                  >
                    <span>{badge.icon}</span>
                    {badge.text}
                  </span>
                ))}
              </div>

              {/* 飲食店特化ラベル */}
              <p className="text-xs tracking-widest mb-4" style={{ color: '#666' }}>
                飲食店特化 MAP ENGINE OPTIMIZATION
              </p>

              {/* メインコピー */}
              <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6 tracking-tight">
                ダイニングバー・居酒屋・カフェ……<br />
                <span style={{ color: '#3DBFB0' }}>Googleマップから</span><br />
                お客様を呼び込む。
              </h1>

              <p className="text-sm leading-loose mb-4 max-w-md" style={{ color: '#AAAAAA' }}>
                飲食店に特化したMEO対策で、地域検索の上位表示を実現。<br />
                来店し続ける集客資産を、専門家が構築します。
              </p>
              <p className="text-sm leading-loose mb-8" style={{ color: '#555' }}>
                広告は止めれば消える。レビューは積み上がり続ける。
              </p>

              {/* 業態タグ */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['ダイニングバー', '居酒屋', 'カフェ', '焼肉', '寿司・和食', 'イタリアン', '焼き鳥', 'その他飲食'].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 border tracking-wide"
                    style={{ borderColor: '#3a3a3a', color: '#777' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTAボタン */}
              <div className="flex flex-row gap-3 mb-12">
                <a
                  href="#contact"
                  className="inline-block px-6 py-4 text-white text-sm tracking-wider text-center whitespace-nowrap transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#3DBFB0' }}
                >
                  無料相談を申し込む
                </a>
                <a
                  href="#about"
                  className="inline-block px-6 py-4 text-sm tracking-wider text-center whitespace-nowrap border transition-colors"
                  style={{ borderColor: '#555', color: '#AAAAAA' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#3DBFB0';
                    e.currentTarget.style.color = '#3DBFB0';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#555';
                    e.currentTarget.style.color = '#AAAAAA';
                  }}
                >
                  サービスを詳しく見る
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-10 border-t pt-8" style={{ borderColor: '#2e2e2e' }}>
                {[
                  { value: '100+', label: 'MEO施策実績（店舗）' },
                  { value: '98%', label: '顧客満足度' },
                  { value: '82%', label: 'MAP3達成率' },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-light mb-1" style={{ color: '#3DBFB0' }}>{stat.value}</p>
                    <p className="text-xs tracking-wider" style={{ color: '#555' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div
              className="flex-1 mt-10 md:mt-0 flex items-center justify-center md:justify-end"
              style={{ filter: 'drop-shadow(0 0 64px rgba(61,191,176,0.15))' }}
            >
              <Image
                src="/main-visual.png"
                alt="GoogleMap MEO対策イメージ"
                width={780}
                height={585}
                priority
                className="w-full h-auto max-w-[780px] select-none"
                style={{ mixBlendMode: 'screen', opacity: 0.93 }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* MEOとは */}
      <section id="about" className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>WHAT IS MEO</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>MEOとは？</h2>
            <div className="section-divider"></div>
            <p className="text-sm leading-loose max-w-xl mx-auto" style={{ color: '#888' }}>
              MEO（Map Engine Optimization）とは、Googleマップ上での店舗表示を最適化する施策です。
              地域名を含む検索で上位表示されることで、来店意欲の高いユーザーへダイレクトにリーチできます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border mb-12" style={{ borderColor: '#E5E5E5' }}>
            {[
              {
                step: '01',
                title: '検索',
                desc: 'ユーザーが「渋谷 ラーメン」「新宿 居酒屋」など地域名＋業種で検索。',
              },
              {
                step: '02',
                title: 'Googleマップ表示',
                desc: '検索結果にGoogleマップが表示され、上位3店舗（MAP3）が特に目立つ形で掲載。',
              },
              {
                step: '03',
                title: '来店',
                desc: '経路案内・電話・予約ボタンから直接来店へ。SEOよりも素早くコンバージョン。',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 border-b md:border-b-0 md:border-r last:border-r-0"
                style={{ borderColor: '#E5E5E5' }}
              >
                <p className="text-4xl font-light mb-4" style={{ color: '#3DBFB0' }}>{item.step}</p>
                <h3 className="text-base font-medium mb-3" style={{ color: '#333' }}>{item.title}</h3>
                <p className="text-sm leading-loose" style={{ color: '#888' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 広告 vs レビュー */}
          <h3 className="text-center text-base font-medium mb-8" style={{ color: '#333' }}>
            なぜレビュー施策なのか
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: '#E5E5E5' }}>
            <div className="bg-white p-10">
              <p className="text-xs tracking-widest mb-4" style={{ color: '#888' }}>通常の集客（広告）</p>
              <p className="text-2xl font-light mb-6" style={{ color: '#333' }}>広告 = <span style={{ color: '#e05a5a' }}>消費</span></p>
              <ul className="space-y-3">
                {[
                  '広告費を止めると集客も止まる',
                  '毎月のコストが経営を圧迫',
                  '広告費はコストでしかない',
                  '一時的な効果しか得られない',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 w-4 h-4 flex-shrink-0 flex items-center justify-center rounded-full border" style={{ borderColor: '#ddd' }}>
                      <svg className="w-2 h-2" viewBox="0 0 8 8" fill="none">
                        <path d="M2 4h4" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </span>
                    <span className="text-sm" style={{ color: '#888' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10" style={{ borderTop: '3px solid #3DBFB0' }}>
              <p className="text-xs tracking-widest mb-4" style={{ color: '#3DBFB0' }}>レビュー施策</p>
              <p className="text-2xl font-light mb-6" style={{ color: '#333' }}>レビュー = <span style={{ color: '#3DBFB0' }}>投資</span></p>
              <ul className="space-y-3">
                {[
                  'レビューが蓄積し順位が向上し続ける',
                  '広告費ゼロで継続的な集客が可能',
                  'レビューは永遠の集客資産として機能',
                  '一度構築すれば複利的に効果が拡大',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="#3DBFB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm" style={{ color: '#555' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 対応領域 */}
      <section id="service" className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>SERVICE AREAS</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>対応領域</h2>
            <div className="section-divider"></div>
            <p className="text-sm" style={{ color: '#888' }}>
              GoogleMap最適化に必要なすべての施策をワンストップで対応します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8"
                style={item.highlight
                  ? { borderTop: '3px solid #3DBFB0' }
                  : { borderTop: '3px solid #E5E5E5' }
                }
              >
                <div className="mb-4" style={{ color: item.highlight ? '#3DBFB0' : '#888' }}>
                  {item.icon}
                </div>
                <h3
                  className="text-sm font-medium mb-3 leading-snug"
                  style={{ color: item.highlight ? '#3DBFB0' : '#333' }}
                >
                  {item.title}
                  {item.highlight && (
                    <span
                      className="ml-2 text-xs px-2 py-0.5 align-middle"
                      style={{ backgroundColor: '#3DBFB0', color: '#fff', fontSize: '10px' }}
                    >
                      特徴
                    </span>
                  )}
                </h3>
                <p className="text-xs leading-loose" style={{ color: '#888' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 成長ロードマップ */}
      <section className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>ROADMAP</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>成長ロードマップ</h2>
            <div className="section-divider"></div>
            <p className="text-sm" style={{ color: '#888' }}>
              申し込みから最短2週間でレビュー施策がスタート。3か月で確実な成果を確認できます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-px" style={{ backgroundColor: '#E5E5E5' }}>
            {roadmap.map((item, i) => (
              <div key={i} className="bg-white p-8" style={i === 0 ? { borderTop: '3px solid #3DBFB0' } : {}}>
                <p className="text-xs tracking-widest mb-2" style={{ color: i === 0 ? '#3DBFB0' : '#888' }}>{item.month}</p>
                <h3 className="text-base font-medium mb-4" style={{ color: '#333' }}>{item.label}</h3>
                <p className="text-xs leading-loose" style={{ color: '#888' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 期待できる効果 */}
          <div className="mt-12 p-10 text-center" style={{ backgroundColor: '#1e2e2d' }}>
            <p className="text-xs tracking-widest mb-8" style={{ color: '#3DBFB0' }}>EXPECTED RESULTS</p>
            <p className="text-sm mb-8" style={{ color: '#aaa' }}>
              月間来客100人・客単価5,000円の店舗での想定値（導入3か月以降）
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: '+15名/月', label: '月間新規来客数（導入3か月以降）' },
                { value: '¥225,000', label: '3か月間の売上増加額（想定）' },
                { value: '2.4倍', label: '平均インプレッション増加率' },
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-3xl font-light mb-2" style={{ color: '#3DBFB0' }}>{item.value}</p>
                  <p className="text-xs" style={{ color: '#666' }}>{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-8" style={{ color: '#555' }}>
              ※ 上記は想定値です。立地・業態・既存レビュー数により実際の効果は異なります。
            </p>
          </div>
        </div>
      </section>

      {/* ユーザーボイス */}
      <section className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>USER VOICE</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>ご利用店舗の声</h2>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {voices.map((v, i) => (
              <div key={i} className="p-8 border" style={{ borderColor: '#E5E5E5' }}>
                {/* 星 */}
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-4 h-4" viewBox="0 0 16 16" fill="#3DBFB0">
                      <path d="M8 1l2.163 4.38 4.837.703-3.5 3.411.826 4.815L8 12l-4.326 2.309.826-4.815L1 6.083l4.837-.703z"/>
                    </svg>
                  ))}
                </div>
                {/* テキスト */}
                <p className="text-sm leading-loose mb-6" style={{ color: '#555' }}>
                  &ldquo;{v.text}&rdquo;
                </p>
                {/* 店舗情報 */}
                <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: '#F0F0F0' }}>
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0"
                    style={{ backgroundColor: '#3DBFB0' }}
                  >
                    {v.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: '#333' }}>{v.name}</p>
                    <p className="text-xs" style={{ color: '#aaa' }}>{v.store}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 総合評価 */}
          <div className="mt-10 py-8 text-center border-t border-b" style={{ borderColor: '#E5E5E5' }}>
            <p className="text-xs tracking-widest mb-3" style={{ color: '#aaa' }}>OVERALL SATISFACTION</p>
            <div className="flex items-center justify-center gap-3">
              <div className="flex gap-1">
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} className="w-6 h-6" viewBox="0 0 16 16" fill="#3DBFB0">
                    <path d="M8 1l2.163 4.38 4.837.703-3.5 3.411.826 4.815L8 12l-4.326 2.309.826-4.815L1 6.083l4.837-.703z"/>
                  </svg>
                ))}
              </div>
              <p className="text-3xl font-light" style={{ color: '#333' }}>4.9 <span className="text-base" style={{ color: '#aaa' }}>/ 5.0</span></p>
            </div>
            <p className="text-xs mt-2" style={{ color: '#aaa' }}>※ 導入店舗へのアンケート結果（n=52）</p>
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section id="plans" className="py-24" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>PRICING</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>料金プラン</h2>
            <div className="section-divider"></div>
            <p className="text-sm" style={{ color: '#888' }}>
              すべてのプランに初期費用・解約違約金はありません。まずはお気軽にご相談ください。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`plan-card bg-white flex flex-col ${plan.recommended ? 'relative' : ''}`}
                style={plan.recommended ? { border: '2px solid #3DBFB0' } : { border: '1px solid #E5E5E5' }}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="text-white text-xs px-4 py-1 tracking-widest" style={{ backgroundColor: '#3DBFB0' }}>
                      おすすめ
                    </span>
                  </div>
                )}
                <div className="p-8 border-b" style={{ borderColor: '#E5E5E5' }}>
                  <h3 className="text-sm font-medium tracking-wider mb-1" style={{ color: '#333' }}>
                    {plan.name}
                  </h3>
                  <p className="text-xs mb-5" style={{ color: '#888' }}>{plan.description}</p>
                  <div className="flex items-end gap-1">
                    <span className="text-3xl font-light" style={{ color: '#333' }}>¥{plan.price}</span>
                    <span className="text-xs mb-1" style={{ color: '#888' }}>/月（税別）</span>
                  </div>
                </div>
                <ul className="p-8 space-y-3 flex-1">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 4" stroke="#3DBFB0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-sm" style={{ color: '#555' }}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <div className="px-8 pb-8">
                  <a
                    href="#contact"
                    className="block text-center py-3 text-sm tracking-widest transition-colors"
                    style={plan.recommended
                      ? { backgroundColor: '#3DBFB0', color: '#fff' }
                      : { border: '1px solid #3DBFB0', color: '#3DBFB0' }
                    }
                    onMouseEnter={(e) => {
                      if (!plan.recommended) {
                        e.currentTarget.style.backgroundColor = '#3DBFB0';
                        e.currentTarget.style.color = '#fff';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!plan.recommended) {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#3DBFB0';
                      }
                    }}
                  >
                    このプランで相談する
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs mt-8" style={{ color: '#aaa' }}>
            ※ プランの内容はご要望に合わせてカスタマイズ可能です。まずはお気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* 問い合わせ */}
      <section id="contact" className="py-24" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-widest mb-3" style={{ color: '#3DBFB0' }}>CONTACT</p>
            <h2 className="text-2xl md:text-3xl font-light mb-4" style={{ color: '#333' }}>無料相談・お問い合わせ</h2>
            <div className="section-divider"></div>
            <p className="text-sm" style={{ color: '#888' }}>
              現在の集客状況や目標をお聞かせください。最適なプランをご提案いたします。
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ borderColor: '#E5E5E5', backgroundColor: '#fff' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-sm font-medium tracking-widest mb-1" style={{ color: '#333' }}>ぷらたなすきかく株式会社</p>
              <p className="text-xs" style={{ color: '#aaa' }}>Platanus Planning Inc.</p>
            </div>
            <div className="flex items-center gap-8">
              <a
                href="https://platanus-p.com/"
                className="text-xs tracking-wider transition-colors"
                style={{ color: '#888' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3DBFB0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                会社ホームページ
              </a>
              <a
                href="#contact"
                className="text-xs tracking-wider transition-colors"
                style={{ color: '#888' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3DBFB0')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
              >
                お問い合わせ
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: '#E5E5E5' }}>
            <p className="text-xs" style={{ color: '#ccc' }}>
              © {new Date().getFullYear()} ぷらたなすきかく株式会社. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
