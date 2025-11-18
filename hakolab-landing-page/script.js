// リンクデータの設定
const links = [
    {
        title: 'X (@jumbo_hakodate)',
        description: 'Jumbo HakodateのXアカウント',
        url: 'https://x.com/jumbo_hakodate',
        icon: '🐦',
        qrCode: true
    },
    {
        title: 'X (@b_lab_hakodate)',
        description: 'B Lab HakodateのXアカウント',
        url: 'https://x.com/b_lab_hakodate',
        icon: '🐦',
        qrCode: true
    },
    {
        title: 'X (@mirai_base)',
        description: 'Mirai BaseのXアカウント',
        url: 'https://x.com/mirai_base',
        icon: '🐦',
        qrCode: true
    },
    {
        title: 'Instagram',
        description: 'ロボラボ函館のInstagram',
        url: 'https://www.instagram.com/robora_lab_hakodate/',
        icon: '📷',
        qrCode: true
    },
    {
        title: '公式WEBサイト',
        description: 'Hakolab公式サイト',
        url: 'https://hakolab.co.jp',
        icon: '🌐',
        qrCode: true
    }
];

// QRコードを生成する関数（QRコードAPIを使用）
function generateQRCode(url, size = 150) {
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
    return qrApiUrl;
}

// リンクカードを生成する関数
function createLinkCard(link) {
    const card = document.createElement('a');
    card.href = link.url;
    card.className = 'link-card';
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    let qrCodeHtml = '';
    if (link.qrCode) {
        qrCodeHtml = `
            <div class="qr-code-container">
                <img src="${generateQRCode(link.url)}" alt="QR Code" class="qr-code" />
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="link-icon">${link.icon}</div>
        <h3 class="link-title">${link.title}</h3>
        <p class="link-description">${link.description}</p>
        ${qrCodeHtml}
    `;
    
    return card;
}

// ページ読み込み時にリンクを表示
document.addEventListener('DOMContentLoaded', () => {
    const linksGrid = document.getElementById('linksGrid');
    
    if (linksGrid) {
        links.forEach(link => {
            const card = createLinkCard(link);
            linksGrid.appendChild(card);
        });
    }
});