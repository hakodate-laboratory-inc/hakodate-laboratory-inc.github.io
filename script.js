// リンクデータの設定
const links = [
    {
        title: 'GitHub',
        description: 'コードリポジトリ',
        url: 'https://github.com/deckeye',
        icon: '🔗'
    },
    {
        title: 'Twitter',
        description: 'Twitterアカウント',
        url: 'https://twitter.com',
        icon: '🐦'
    },
    {
        title: 'LinkedIn',
        description: 'LinkedInプロフィール',
        url: 'https://linkedin.com',
        icon: '💼'
    },
    {
        title: 'Portfolio',
        description: 'ポートフォリオサイト',
        url: '#',
        icon: '📁'
    },
    {
        title: 'Blog',
        description: 'ブログ',
        url: '#',
        icon: '📝'
    },
    {
        title: 'Email',
        description: 'お問い合わせ',
        url: 'mailto:your-email@example.com',
        icon: '✉️'
    }
];

// リンクカードを生成する関数
function createLinkCard(link) {
    const card = document.createElement('a');
    card.href = link.url;
    card.className = 'link-card';
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    
    card.innerHTML = `
        <div class="link-icon">${link.icon}</div>
        <h3 class="link-title">${link.title}</h3>
        <p class="link-description">${link.description}</p>
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