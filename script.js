// E16星系百科事典 - インタラクティブ機能

// 検索機能
class WikiSearch {
    constructor() {
        this.searchInput = document.getElementById('searchInput');
        this.searchBtn = document.getElementById('searchBtn');
        this.searchData = [];
        this.init();
    }

    init() {
        // 検索データベースの構築
        this.buildSearchDatabase();
        
        // イベントリスナーの設定
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
            this.searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.performSearch(e.target.value);
                }
            });
        }

        if (this.searchBtn) {
            this.searchBtn.addEventListener('click', () => {
                this.performSearch(this.searchInput.value);
            });
        }

        // ライブ検索結果表示用のコンテナ作成
        this.createSearchResults();
    }

    buildSearchDatabase() {
        // 主要な記事データ
        this.searchData = [
            // 人物
            { title: 'ティムール・シャー', url: 'people/timur-shah.html', category: '人物', description: '10次元ホラズム理論提唱者、移民団リーダー' },
            { title: 'エル・フォルハウス', url: 'people/el-forhouse.html', category: '人物', description: 'マーストリヒト革命指導者、新時代のルーキー' },
            { title: 'シルヴィア・クロウ', url: 'people/sylvia-crow.html', category: '人物', description: 'エスパー能力者、女性リーダー、搾取生物制御技術開発者' },
            { title: 'テミルタロン', url: 'people/temirtaron.html', category: '人物', description: 'サイケデリック・コスモロジー提唱者、次元極地平開発者' },
            { title: 'マリア・フォルハウス', url: 'people/maria-forhouse.html', category: '人物', description: '搾取技術洗練化指導者、エルの子孫' },
            { title: 'アリア・ソル', url: 'people/aria-sol.html', category: '人物', description: 'ニューヘルシンキ宣言提唱者、エルの盟友' },

            // 場所
            { title: '星々の交響曲', url: 'places/symphony-of-stars.html', category: '場所', description: 'E16星系中心惑星、ギガポリス所在地' },
            { title: 'Eros-7', url: 'places/eros-7.html', category: '場所', description: 'E16星系外縁惑星、マトリカル社会発達地' },
            { title: 'ギガポリス', url: 'places/gigapolis.html', category: '場所', description: '星々の交響曲の首都、超巨大都市' },
            { title: 'ネオンクレーター宮殿', url: 'places/neon-crater-palace.html', category: '場所', description: 'Eros-7の女性評議会統治センター、高さ1.2km' },
            { title: 'ネオンクレーター', url: 'places/neon-crater.html', category: '場所', description: 'Eros-7の地下都市、バイオ発光照明' },

            // 技術
            { title: '搾取生物', url: 'technology/squeezing-organisms.html', category: '技術', description: '性的エネルギー吸収寄生体、マトリカル社会基盤技術' },
            { title: '次元極地平', url: 'technology/dimension-horizon.html', category: '技術', description: '高次元アクセス技術、星間通信基盤' },
            { title: 'ペルセポネ', url: 'technology/persephone.html', category: '技術', description: 'ティムール設計の仮想多元宇宙システム' },
            { title: 'プライマリー・フィールド', url: 'technology/primary-field.html', category: '技術', description: '次元極地平による仮想多元宇宙プラットフォーム' },
            { title: 'コーポラタムパブリカ', url: 'technology/corporatum-publica.html', category: '技術', description: '企業国家体制、マーストリヒト革命により成立' },
            { title: 'A籍制度', url: 'technology/a-rank-system.html', category: '技術', description: '155段階階層制度、技術力・資産・貢献度評価' },
            { title: 'nトークン経済', url: 'technology/n-token-economy.html', category: '技術', description: '量子暗号化デジタル通貨経済システム' },

            // 事件・時代
            { title: 'マーストリヒト革命', url: 'events/maastricht-revolution.html', category: '事件', description: 'エル・フォルハウス指導の政治・経済革命（E150年）' },
            { title: '地球からの大移民', url: 'events/great-migration.html', category: '事件', description: 'E16星系植民開始事件（E1年）' },
            { title: '技術啓蒙時代', url: 'events/technological-enlightenment.html', category: '時代', description: '次元極地平・テクノ宗教運動発展期（E80-90年）' },
            { title: '第三次繁栄', url: 'events/third-prosperity.html', category: '時代', description: '人口1億2000万人突破・搾取生物危機（E97-101年）' },
            { title: '第四次繁栄', url: 'events/fourth-prosperity.html', category: '時代', description: '革命後の経済黄金期、2京nトークン経済（E153-201年）' },
            { title: 'コーラの疫病', url: 'events/cola-plague.html', category: '事件', description: 'アンドロメダ系移民を襲った疫病、社会分断拡大（E208年）' }
        ];
    }

    createSearchResults() {
        // 検索結果表示用のコンテナを作成
        const searchContainer = document.querySelector('.search-box');
        if (searchContainer) {
            const resultsDiv = document.createElement('div');
            resultsDiv.className = 'search-results';
            resultsDiv.style.display = 'none';
            searchContainer.appendChild(resultsDiv);
        }
    }

    handleSearch(query) {
        if (query.length < 2) {
            this.hideSearchResults();
            return;
        }

        const results = this.searchData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );

        this.displaySearchResults(results.slice(0, 8)); // 最大8件まで表示
    }

    displaySearchResults(results) {
        const resultsContainer = document.querySelector('.search-results');
        if (!resultsContainer) return;

        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="no-results">検索結果が見つかりませんでした</div>';
            resultsContainer.style.display = 'block';
            return;
        }

        const resultsHTML = results.map(item => `
            <div class="search-result-item" data-url="${item.url}">
                <div class="result-title">${item.title}</div>
                <div class="result-category">${item.category}</div>
                <div class="result-description">${item.description}</div>
            </div>
        `).join('');

        resultsContainer.innerHTML = resultsHTML;
        resultsContainer.style.display = 'block';

        // 結果アイテムにクリックイベントを追加
        resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
                const url = item.dataset.url;
                // 相対パスの調整
                const currentPath = window.location.pathname;
                const basePath = currentPath.includes('/') && !currentPath.endsWith('index.html') && !currentPath.endsWith('/') ? '../' : '';
                window.location.href = basePath + url;
            });
        });
    }

    hideSearchResults() {
        const resultsContainer = document.querySelector('.search-results');
        if (resultsContainer) {
            resultsContainer.style.display = 'none';
        }
    }

    performSearch(query) {
        if (query.length < 2) return;
        
        // より詳細な検索結果ページへ遷移（今回は簡単にアラート表示）
        const results = this.searchData.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        );

        if (results.length > 0) {
            // 最初の結果に遷移
            const url = results[0].url;
            const currentPath = window.location.pathname;
            const basePath = currentPath.includes('/') && !currentPath.endsWith('index.html') && !currentPath.endsWith('/') ? '../' : '';
            window.location.href = basePath + url;
        } else {
            alert(`"${query}"に関する記事が見つかりませんでした。`);
        }
    }
}

// ナビゲーション機能
class Navigation {
    constructor() {
        this.init();
    }

    init() {
        // ハンバーガーメニューの設定（レスポンシブ対応）
        this.setupMobileMenu();
        
        // スムーススクロール
        this.setupSmoothScroll();
        
        // アクティブページのハイライト
        this.highlightActivePage();
        
        // 外部クリックで検索結果を閉じる
        this.setupClickOutside();
    }

    setupMobileMenu() {
        // モバイル用のハンバーガーメニューボタンを作成
        const header = document.querySelector('.main-header .container');
        if (header && window.innerWidth <= 768) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.style.display = 'block';
            
            const nav = document.querySelector('.main-nav');
            if (nav) {
                header.insertBefore(menuToggle, nav);
                
                menuToggle.addEventListener('click', () => {
                    nav.classList.toggle('active');
                });
            }
        }
    }

    setupSmoothScroll() {
        // ページ内アンカーリンクのスムーススクロール
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    highlightActivePage() {
        // 現在のページに対応するナビゲーションリンクをハイライト
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.main-nav a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && currentPath.includes(href.replace('../', '').replace('./', ''))) {
                link.classList.add('active');
            }
        });
    }

    setupClickOutside() {
        // 検索結果外をクリックした時に検索結果を閉じる
        document.addEventListener('click', (e) => {
            const searchBox = document.querySelector('.search-box');
            const searchResults = document.querySelector('.search-results');
            
            if (searchBox && searchResults && !searchBox.contains(e.target)) {
                searchResults.style.display = 'none';
            }
        });
    }
}

// アニメーション効果
class AnimationEffects {
    constructor() {
        this.init();
    }

    init() {
        // スクロール連動アニメーション
        this.setupScrollAnimations();
        
        // ローディングアニメーション
        this.setupLoadingAnimation();
        
        // ホバー効果の強化
        this.enhanceHoverEffects();
    }

    setupScrollAnimations() {
        // Intersection Observer API を使用したスクロールアニメーション
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // アニメーション対象要素を監視
        document.querySelectorAll('.timeline-item, .category-card, .featured-article, .achievement-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    setupLoadingAnimation() {
        // ページロード時のアニメーション
        window.addEventListener('load', () => {
            const header = document.querySelector('.main-header');
            const main = document.querySelector('main');
            
            if (header) {
                header.style.animation = 'slideInDown 0.8s ease';
            }
            
            if (main) {
                main.style.animation = 'fadeInUp 1s ease 0.3s both';
            }
        });
    }

    enhanceHoverEffects() {
        // カードホバー効果の強化
        document.querySelectorAll('.category-card, .featured-article').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(74, 144, 255, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            });
        });
    }
}

// テーマ切り替え機能（ダーク/ライトモード）
class ThemeToggle {
    constructor() {
        this.currentTheme = localStorage.getItem('e16-theme') || 'light';
        this.init();
    }

    init() {
        // テーマ切り替えボタンの作成
        this.createThemeToggle();
        
        // 保存されたテーマを適用
        this.applyTheme(this.currentTheme);
    }

    createThemeToggle() {
        const header = document.querySelector('.main-header .container');
        if (header) {
            const themeToggle = document.createElement('button');
            themeToggle.className = 'theme-toggle';
            themeToggle.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
            themeToggle.title = 'テーマを切り替える';
            
            // 検索ボックスの隣に配置
            const searchBox = document.querySelector('.search-box');
            if (searchBox) {
                searchBox.appendChild(themeToggle);
            } else {
                header.appendChild(themeToggle);
            }
            
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        localStorage.setItem('e16-theme', this.currentTheme);
        
        // ボタンアイコンの更新
        const toggleBtn = document.querySelector('.theme-toggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = this.currentTheme === 'dark' ? '☀️' : '🌙';
        }
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        if (theme === 'dark') {
            document.body.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #0f0f23 50%, #1a1a2e 100%)';
        } else {
            document.body.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #0f0f23 100%)';
        }
    }
}

// 統計表示機能
class WikiStats {
    constructor() {
        this.init();
    }

    init() {
        // ページビュー統計（シミュレート）
        this.updatePageViews();
        
        // 最終更新日時の表示
        this.showLastUpdated();
        
        // ランダムな記事提案
        this.showRandomArticle();
    }

    updatePageViews() {
        // シミュレートされたページビュー数
        const views = Math.floor(Math.random() * 10000) + 1000;
        const viewCounter = document.createElement('div');
        viewCounter.className = 'page-views';
        viewCounter.innerHTML = `📊 ${views.toLocaleString()} views`;
        viewCounter.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(74, 144, 255, 0.1);
            padding: 8px 12px;
            border-radius: 15px;
            font-size: 0.8rem;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(74, 144, 255, 0.3);
        `;
        document.body.appendChild(viewCounter);
    }

    showLastUpdated() {
        const footer = document.querySelector('footer');
        if (footer) {
            const lastUpdated = new Date().toLocaleDateString('ja-JP');
            const updateInfo = document.createElement('div');
            updateInfo.innerHTML = `最終アクセス: ${lastUpdated}`;
            updateInfo.style.cssText = 'font-size: 0.8rem; color: #999; margin-top: 10px;';
            footer.appendChild(updateInfo);
        }
    }

    showRandomArticle() {
        // フッターにランダム記事提案を追加
        const footer = document.querySelector('footer .container');
        if (footer) {
            const randomArticle = document.createElement('div');
            randomArticle.className = 'random-article';
            randomArticle.innerHTML = `
                <button id="randomBtn" style="
                    background: linear-gradient(45deg, #4a90ff, #00d4ff);
                    border: none;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 20px;
                    cursor: pointer;
                    margin: 10px 0;
                    font-weight: 600;
                    transition: transform 0.3s ease;
                ">🎲 ランダム記事</button>
            `;
            footer.appendChild(randomArticle);
            
            document.getElementById('randomBtn').addEventListener('click', () => {
                const searchInstance = new WikiSearch();
                const articles = searchInstance.searchData;
                const randomArticle = articles[Math.floor(Math.random() * articles.length)];
                
                // 相対パス調整
                const currentPath = window.location.pathname;
                const basePath = currentPath.includes('/') && !currentPath.endsWith('index.html') && !currentPath.endsWith('/') ? '../' : '';
                window.location.href = basePath + randomArticle.url;
            });
        }
    }
}

// メイン初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌌 E16星系百科事典システム起動中...');
    
    // 各機能クラスの初期化
    new WikiSearch();
    new Navigation();
    new AnimationEffects();
    new ThemeToggle();
    new WikiStats();
    
    console.log('✨ E16星系百科事典システム起動完了！');
});

// CSS動的追加（検索結果用）
const searchStyles = document.createElement('style');
searchStyles.textContent = `
    .search-results {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(15px);
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
        margin-top: 10px;
        border: 2px solid rgba(74, 144, 255, 0.3);
    }
    
    .search-result-item {
        padding: 15px;
        cursor: pointer;
        border-bottom: 1px solid rgba(74, 144, 255, 0.1);
        transition: all 0.3s ease;
    }
    
    .search-result-item:hover {
        background: linear-gradient(45deg, rgba(74, 144, 255, 0.1), rgba(0, 212, 255, 0.1));
        transform: translateX(5px);
    }
    
    .search-result-item:last-child {
        border-bottom: none;
    }
    
    .result-title {
        font-weight: bold;
        color: #2c3e50;
        margin-bottom: 5px;
    }
    
    .result-category {
        font-size: 0.8rem;
        color: #4a90ff;
        margin-bottom: 3px;
        font-weight: 600;
    }
    
    .result-description {
        font-size: 0.9rem;
        color: #666;
        line-height: 1.4;
    }
    
    .no-results {
        padding: 20px;
        text-align: center;
        color: #999;
    }
    
    .search-box {
        position: relative;
    }
    
    .theme-toggle {
        background: none;
        border: 2px solid #4a90ff;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: 10px;
        transition: all 0.3s ease;
    }
    
    .theme-toggle:hover {
        background: linear-gradient(45deg, #4a90ff, #00d4ff);
        transform: scale(1.1);
    }
    
    @media (max-width: 768px) {
        .search-results {
            position: fixed;
            top: 70px;
            left: 20px;
            right: 20px;
            max-height: 300px;
        }
        
        .theme-toggle {
            width: 35px;
            height: 35px;
            font-size: 1rem;
        }
    }
    
    /* ダークテーマ対応 */
    [data-theme="dark"] .search-results {
        background: rgba(20, 20, 50, 0.95);
        border-color: rgba(74, 144, 255, 0.5);
    }
    
    [data-theme="dark"] .result-title {
        color: #e0e0e0;
    }
    
    [data-theme="dark"] .result-description {
        color: #bbb;
    }
    
    [data-theme="dark"] .search-result-item:hover {
        background: linear-gradient(45deg, rgba(74, 144, 255, 0.2), rgba(0, 212, 255, 0.2));
    }
    
    /* アニメーション追加 */
    @keyframes slideInDown {
        from {
            opacity: 0;
            transform: translateY(-100px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(searchStyles);