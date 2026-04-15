// E16カードバトラー - ゲームロジック

// カードデータベース
const CARD_DATABASE = [
    // AURALIS メンバー
    {
        id: 'mina',
        name: 'ミナ・エウレカ・アーネスト',
        faction: 'AURALIS',
        type: 'strategy',
        attack: 4,
        defense: 5,
        cost: 3,
        ability: '次元操作: 相手の盾を2減少させる',
        description: 'E528年の現在も活動を続けるAURALIS第二代総合プロデューサー。青き長身の才女。',
        emoji: '👩‍💻',
        era: 'E522-'
    },
    {
        id: 'layla',
        name: 'レイラ・ヴィレル・ノヴァ',
        faction: 'AURALIS',
        type: 'warrior',
        attack: 8,
        defense: 4,
        cost: 5,
        ability: 'Pink Voltage: 攻撃力+3 但し自身にも2ダメージ',
        description: 'Pink Voltageの異名を持つ最強戦士。凍眠保存から復活し今も戦う。',
        emoji: '⚡',
        era: 'E325-'
    },
    {
        id: 'kate',
        name: 'ケイト・パットン',
        faction: 'AURALIS',
        type: 'support',
        attack: 2,
        defense: 7,
        cost: 2,
        ability: '大地の安定: 味方に盾+2',
        description: '「大地の豊かさ・安定」を体現する。第二代。AURALISの基盤担当。',
        emoji: '🌍',
        era: 'E514-'
    },
    {
        id: 'lillie',
        name: 'リリー・アーデント',
        faction: 'AURALIS',
        type: 'art',
        attack: 3,
        defense: 4,
        cost: 2,
        ability: '情熱増幅: 次の味方の攻撃を2倍にする',
        description: '「情熱的で大胆」な芸術家。第二代。感情増幅担当。',
        emoji: '🎨',
        era: 'E514-'
    },
    {
        id: 'ninny',
        name: 'ニニー・オフェンバック',
        faction: 'AURALIS',
        type: 'speed',
        attack: 5,
        defense: 2,
        cost: 2,
        ability: '爆発活力: 召喚時、ランダムな味方を+2',
        description: '無邪気で爆発的な活力を持つ。Gigapolisに再帰還した存在。',
        emoji: '💫',
        era: 'E514-'
    },

    // Gigapolis / 戦士
    {
        id: 'jen',
        name: 'Jen',
        faction: 'Gigapolis',
        type: 'elite',
        attack: 9,
        defense: 8,
        cost: 6,
        ability: 'Valoriaの守護者: HPが30%以下で攻撃力2倍',
        description: 'Valoria宮殿を掌握するLv.938+の最強戦士。200年以上 активно.',
        emoji: '🏰',
        era: 'E319-'
    },
    {
        id: 'alpha_kane',
        name: 'アルファ・ケイン',
        faction: 'Gigapolis',
        type: 'warrior',
        attack: 7,
        defense: 5,
        cost: 4,
        ability: '戦士決定戦覇者: 召喚時相手に3ダメージ',
        description: '戦士決定戦の元チャンピオン。ネオクラン同盟の основатель.',
        emoji: '⚔️',
        era: 'E301-318'
    },
    {
        id: 'selia',
        name: 'セリア・ドミニクス',
        faction: 'Gigapolis',
        type: 'ruler',
        attack: 6,
        defense: 6,
        cost: 5,
        ability: '黄金時代: 自分の盾+4、攻撃+2',
        description: 'Selinopolis創設者。テリアン運動の精神的支柱。',
        emoji: '👑',
        era: 'E335-370'
    },

    // トリニティ / V7
    {
        id: 'iris',
        name: 'アイリス',
        faction: 'トリニティ',
        type: 'ruler',
        attack: 8,
        defense: 7,
        cost: 6,
        ability: 'Vaermillionの支配者: 毎ターン+1/+1',
        description: 'Vaermillion首脳。IRISランキング1位。トリニティ指導者。',
        emoji: '🌸',
        era: 'E500-'
    },
    {
        id: 'fiona',
        name: 'フィオナ',
        faction: 'V7',
        type: 'warrior',
        attack: 7,
        defense: 4,
        cost: 4,
        ability: 'スパッツ外交: 攻撃時相手の盾無視',
        description: 'ブルー・ローズ統率者。V7急先鋒。IRISランキング2位。',
        emoji: '🌹',
        era: 'E500-'
    },
    {
        id: 'marina',
        name: 'マリーナ・ボビン',
        faction: 'V7',
        type: 'support',
        attack: 3,
        defense: 8,
        cost: 3,
        ability: 'ミエルテンガ総統: 味方に盾+3',
        description: 'ミエルテンガ総統。IRISランキング3位。',
        emoji: '🎖️',
        era: 'E500-'
    },
    {
        id: 'sebastian',
        name: 'セバスチャン・ヴァレリウス',
        faction: 'V7',
        type: 'elite',
        attack: 8,
        defense: 5,
        cost: 5,
        ability: 'ボグダスジャベリン: 召喚時3ダメージ',
        description: 'ボグダス・ジャベリンリーダー。テクロサスの正統後継者。',
        emoji: '🗡️',
        era: 'E490-'
    },

    // Alpha Venom
    {
        id: 'alpha_venom',
        name: 'アルファ・ヴェノム',
        faction: 'Alpha Venom',
        type: 'villain',
        attack: 9,
        defense: 6,
        cost: 6,
        ability: '闇の支配: 相手全体3ダメージ',
        description: '両陣営共通の敵。エヴァトロンΣ-Unitの後継者。',
        emoji: '🦠',
        era: 'E500-'
    },
    {
        id: 'sigma_unit',
        name: 'Σ-ユニット',
        faction: 'Alpha Venom',
        type: 'soldier',
        attack: 5,
        defense: 4,
        cost: 3,
        ability: '精神操作: 相手の手札1枚DISCARD',
        description: '精神操作・生体改造技術を持つ極秘部隊。',
        emoji: '💀',
        era: 'E420-'
    },

    // 歴史的英雄
    {
        id: 'timur',
        name: 'ティムール・シャー',
        faction: '歴史',
        type: 'founder',
        attack: 5,
        defense: 6,
        cost: 4,
        ability: '10次元ホラズム: 次元の扉、盾+5',
        description: '10次元ホラズム理論提唱者。移民団リーダー。ペルセポネ設計者。',
        emoji: '🌌',
        era: 'E0-'
    },
    {
        id: 'temirtaron',
        name: 'テミルタロン',
        faction: '歴史',
        type: 'sage',
        attack: 4,
        defense: 5,
        cost: 4,
        ability: 'サイケコスモ: 全員+1/+1',
        description: 'サイケデリック・コスモロジー提唱者。次元理論の完成者。',
        emoji: '🔮',
        era: 'E80-90'
    },
    {
        id: 'el_forhouse',
        name: 'エル・フォルハウス',
        faction: '歴史',
        type: 'reformer',
        attack: 4,
        defense: 4,
        cost: 3,
        ability: 'マーストリヒト革命: 相手盾-3、自分盾+3',
        description: '「新時代のルーキー」。自由経済を確立した革命指導者。',
        emoji: '📜',
        era: 'E150'
    },
    {
        id: 'sylvia',
        name: 'シルヴィア・クロウ',
        faction: 'Eros-7',
        type: 'esper',
        attack: 6,
        defense: 5,
        cost: 4,
        ability: 'エスパー能力: 相手の手札ランダム1枚破棄',
        description: 'エスパー能力者。スライム危機を解決した女性リーダー。',
        emoji: '👁️',
        era: 'E101-'
    },
    {
        id: 'ayaka',
        name: 'アヤカ・リン',
        faction: 'Eros-7',
        type: 'hero',
        attack: 7,
        defense: 4,
        cost: 4,
        ability: 'ビキニバリア: 自身に盾+4、攻撃+2',
        description: 'Lv.842のハンター。ビキニブリーフス・スーパーヒーロー。',
        emoji: '🛡️',
        era: 'E380-'
    },
    {
        id: 'lilith',
        name: 'リリス・ヴェイン',
        faction: 'Eros-7',
        type: 'founder',
        attack: 3,
        defense: 6,
        cost: 3,
        ability: '搾取の支配者: 自分の盾+3、攻撃+1',
        description: 'Eros-7初期リーダー。搾取生物技術を確立した。',
        emoji: '🕷️',
        era: 'E0-'
    },

    // Slime Woman / 特殊
    {
        id: 'slime_woman',
        name: 'スライム・ウィメン',
        faction: '特殊',
        type: 'dimensional',
        attack: 8,
        defense: 3,
        cost: 5,
        ability: '次元干渉: 相手盾半減（端数切捨て）',
        description: '高次元世界から顕現した存在。E340年の実験事故で出現。',
        emoji: '🟣',
        era: 'E340-'
    }
];

// ゲーム状態
let gameState = {
    playerHP: 30,
    opponentHP: 30,
    playerShield: 0,
    opponentShield: 0,
    playerHand: [],
    opponentHand: [],
    playerField: [],
    opponentField: [],
    playerDeck: [],
    opponentDeck: [],
    turn: 'player',
    isPlayerTurn: true,
    selectedCard: null,
    gold: 1000,
    isGameOver: false
};

// DOM要素
const screens = {
    menu: document.getElementById('menu-screen'),
    game: document.getElementById('game-screen'),
    deck: document.getElementById('deck-screen'),
    collection: document.getElementById('collection-screen'),
    lore: document.getElementById('lore-screen')
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
    loadPlayerData();
    renderCardShowcase();
    setupEventListeners();
});

// セーブデータ読み込み
function loadPlayerData() {
    const saved = localStorage.getItem('e16cardgame');
    if (saved) {
        const data = JSON.parse(saved);
        gameState.gold = data.gold || 1000;
        document.getElementById('player-gold').textContent = gameState.gold;
    }
}

// セーブデータ保存
function savePlayerData() {
    localStorage.setItem('e16cardgame', JSON.stringify({
        gold: gameState.gold
    }));
}

// スクリーン切り替え
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// メニューに戻る
function returnToMenu() {
    showScreen('menu');
    updateGoldDisplay();
}

// ゲームスタート
function startGame() {
    gameState = {
        ...gameState,
        playerHP: 30,
        opponentHP: 30,
        playerShield: 0,
        opponentShield: 0,
        playerHand: [],
        opponentHand: [],
        playerField: [],
        opponentField: [],
        turn: 'player',
        isPlayerTurn: true,
        selectedCard: null,
        isGameOver: false
    };

    // デッキ作成
    gameState.playerDeck = createDeck();
    gameState.opponentDeck = createDeck();

    // 初期手札
    for (let i = 0; i < 5; i++) {
        drawCard('player');
        drawCard('opponent');
    }

    showScreen('game');
    updateGameUI();
    addLog('ゲーム开始！あなたのターンです。');
}

// デッキ作成（ランダム20枚）
function createDeck() {
    const deck = [...CARD_DATABASE];
    const shuffled = deck.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 20);
}

// カードを描く
function drawCard(who) {
    const deck = who === 'player' ? gameState.playerDeck : gameState.opponentDeck;
    const hand = who === 'player' ? gameState.playerHand : gameState.opponentHand;

    if (deck.length > 0 && hand.length < 7) {
        const card = deck.pop();
        hand.push(card);
    }
}

// カードを描画
function renderCard(card, isInHand = false, isDisabled = false) {
    const cardEl = document.createElement('div');
    cardEl.className = `game-card ${isInHand ? 'hand-card' : ''} ${isDisabled ? 'disabled' : ''}`;
    cardEl.dataset.cardId = card.id;

    cardEl.innerHTML = `
        <div class="card-header">${card.faction}</div>
        <div class="card-art">${card.emoji}</div>
        <div class="card-stats">
            <span class="card-attack">⚔️${card.attack}</span>
            <span class="card-defense">🛡️${card.defense}</span>
        </div>
    `;

    if (!isInHand) {
        cardEl.addEventListener('click', () => selectFieldCard(card, cardEl));
    } else {
        cardEl.addEventListener('click', () => selectHandCard(card, cardEl));
    }

    return cardEl;
}

// 手札カード選択
function selectHandCard(card, element) {
    if (!gameState.isPlayerTurn || gameState.isGameOver) return;

    // コストチェック
    if (gameState.playerHand.length >= 7) {
        addLog('手札が一杯です！');
        return;
    }

    // カードを選択状態にする
    document.querySelectorAll('.game-card.selected').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    gameState.selectedCard = card;

    // ダブルクリックでプレイ
    element.addEventListener('dblclick', () => playCard(card));
}

// フィールドカード選択（攻撃用）
function selectFieldCard(card, element) {
    if (!gameState.isPlayerTurn || gameState.isGameOver) return;
    if (gameState.opponentField.length === 0) return;

    // 攻撃モード開始
    document.querySelectorAll('.game-card.selected').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    gameState.selectedCard = card;
    addLog(`${card.name}で攻撃します！`);
}

// カードを出す
function playCard(card) {
    if (!gameState.selectedCard) return;

    const index = gameState.playerHand.findIndex(c => c.id === card.id);
    if (index === -1) return;

    // 手札から削除
    gameState.playerHand.splice(index, 1);
    // フィールドに追加
    gameState.playerField.push(card);

    addLog(`${card.name}を出した！ (${card.emoji} ATK:${card.attack} DEF:${card.defense})`);

    // 能力発動
    activateAbility(card, 'player');

    gameState.selectedCard = null;
    updateGameUI();
}

// 能力発動
function activateAbility(card, owner) {
    switch(card.id) {
        case 'el_forhouse':
            if (owner === 'player') {
                gameState.opponentShield = Math.max(0, gameState.opponentShield - 3);
                gameState.playerShield += 3;
            }
            break;
        case 'jen':
            if (owner === 'player' && gameState.playerHP <= 9) {
                card.attack *= 2;
            }
            break;
        case 'alpha_kane':
        case 'sebastian':
            dealDamage(owner === 'player' ? 'opponent' : 'player', 3);
            break;
        case 'sylvia':
        case 'sigma_unit':
            discardRandomCard(owner === 'player' ? 'opponent' : 'player');
            break;
        case 'slime_woman':
            if (owner === 'player') {
                gameState.opponentShield = Math.floor(gameState.opponentShield / 2);
            }
            break;
        case 'ayaka':
            if (owner === 'player') {
                gameState.playerShield += 4;
                card.attack += 2;
            }
            break;
        case 'kate':
            if (owner === 'player') {
                gameState.playerField.forEach(c => c.defense += 2);
            }
            break;
        case 'lillie':
            if (owner === 'player' && gameState.playerField.length > 1) {
                const target = gameState.playerField[gameState.playerField.length - 1];
                target.attack *= 2;
            }
            break;
        case 'ninny':
            if (owner === 'player' && gameState.playerField.length > 0) {
                const random = gameState.playerField[Math.floor(Math.random() * gameState.playerField.length)];
                random.attack += 2;
            }
            break;
        case 'temirtaron':
            // 全員+1/+1
            ['player', 'opponent'].forEach(side => {
                const field = side === 'player' ? gameState.playerField : gameState.opponentField;
                field.forEach(c => { c.attack++; c.defense++; });
            });
            break;
    }
}

// ダメージ処理
function dealDamage(target, amount) {
    const shield = target === 'player' ? gameState.playerShield : gameState.opponentShield;
    const hp = target === 'player' ? gameState.playerHP : gameState.opponentHP;

    if (shield > 0) {
        const shieldDamage = Math.min(shield, amount);
        const remainingDamage = amount - shieldDamage;

        if (target === 'player') {
            gameState.playerShield -= shieldDamage;
            gameState.playerHP -= remainingDamage;
        } else {
            gameState.opponentShield -= shieldDamage;
            gameState.opponentHP -= remainingDamage;
        }

        addLog(`${target === 'player' ? 'あなた' : '相手'}の盾${shieldDamage}を破壊！${remainingDamage}ダメージ！`);
    } else {
        if (target === 'player') {
            gameState.playerHP -= amount;
        } else {
            gameState.opponentHP -= amount;
        }
        addLog(`${target === 'player' ? 'あなた' : '相手'}に${amount}ダメージ！`);
    }

    checkGameOver();
}

// ランダム破棄
function discardRandomCard(who) {
    const hand = who === 'player' ? gameState.playerHand : gameState.opponentHand;
    if (hand.length > 0) {
        const idx = Math.floor(Math.random() * hand.length);
        const discarded = hand.splice(idx, 1)[0];
        addLog(`${who === 'player' ? 'あなたの' : '相手の'}${discarded.name}が破棄された！`);
    }
}

// ターン終了
function endTurn() {
    if (!gameState.isPlayerTurn) return;

    gameState.isPlayerTurn = false;
    gameState.turn = 'opponent';
    document.getElementById('turn-indicator').textContent = '相手のターン';

    // カードを1枚補充
    drawCard('player');

    // AIターン
    setTimeout(() => aiTurn(), 1000);
}

// AIターン
function aiTurn() {
    addLog('相手の手番...');

    // フィールドカードで攻撃
    gameState.opponentField.forEach(card => {
        if (gameState.playerField.length > 0) {
            // ランダムな味方を攻撃
            const target = gameState.playerField[Math.floor(Math.random() * gameState.playerField.length)];
            const damage = Math.max(0, card.attack - target.defense);
            target.defense -= card.attack;

            if (target.defense <= 0) {
                const idx = gameState.playerField.indexOf(target);
                if (idx > -1) {
                    gameState.playerField.splice(idx, 1);
                    addLog(`${target.name}が破壊された！`);
                }
            }

            dealDamage('player', damage);
        } else {
            // プレイヤー直接攻撃
            dealDamage('player', card.attack);
        }
    });

    if (gameState.isGameOver) return;

    // コスト2以下のカードを出す
    const playableCards = gameState.opponentHand.filter(c => c.cost <= 3);
    if (playableCards.length > 0 && gameState.opponentField.length < 4) {
        const cardToPlay = playableCards[Math.floor(Math.random() * playableCards.length)];
        const idx = gameState.opponentHand.findIndex(c => c.id === cardToPlay.id);
        gameState.opponentHand.splice(idx, 1);
        gameState.opponentField.push(cardToPlay);
        activateAbility(cardToPlay, 'opponent');
        addLog(`相手は${cardToPlay.name}を出した！`);
    }

    // 補充
    drawCard('opponent');

    // ターン終了
    setTimeout(() => {
        gameState.isPlayerTurn = true;
        gameState.turn = 'player';
        document.getElementById('turn-indicator').textContent = 'あなたのターン';
        updateGameUI();
        addLog('あなたのターンです。');
    }, 500);
}

// 必殺技（相手全体にダメージ）
function useSpecial() {
    if (!gameState.isPlayerTurn || gameState.isGameOver) return;

    const hasUltimate = gameState.playerField.some(c => c.id === 'iris' || c.id === 'jen' || c.id === 'slime_woman');

    if (hasUltimate) {
        gameState.opponentField.forEach(card => {
            card.defense -= 5;
            if (card.defense <= 0) {
                const idx = gameState.opponentField.indexOf(card);
                if (idx > -1) {
                    gameState.opponentField.splice(idx, 1);
                }
            }
        });
        dealDamage('opponent', 3);
        addLog('✨ 必殺技発動！');
    } else {
        addLog('必殺技を使用するには特殊カードが必要です！');
    }
}

// ゲームオーバー判定
function checkGameOver() {
    if (gameState.playerHP <= 0) {
        gameState.isGameOver = true;
        document.getElementById('defeat-screen').classList.add('active');
    } else if (gameState.opponentHP <= 0) {
        gameState.isGameOver = true;
        gameState.gold += 500;
        savePlayerData();
        document.getElementById('victory-screen').classList.add('active');
    }
}

// UI更新
function updateGameUI() {
    // HP
    document.getElementById('player-hp').textContent = `${gameState.playerHP}/30`;
    document.getElementById('opponent-hp').textContent = `${gameState.opponentHP}/30`;
    document.getElementById('player-health').style.width = `${(gameState.playerHP / 30) * 100}%`;
    document.getElementById('opponent-health').style.width = `${(gameState.opponentHP / 30) * 100}%`;

    // 盾
    document.getElementById('player-shield').textContent = gameState.playerShield;
    document.getElementById('opponent-shield').textContent = gameState.opponentShield;

    // フィールド
    const playerFieldEl = document.getElementById('player-field');
    const opponentFieldEl = document.getElementById('opponent-field');
    const playerHandEl = document.getElementById('player-hand');
    const opponentHandEl = document.getElementById('opponent-hand');

    playerFieldEl.innerHTML = '';
    opponentFieldEl.innerHTML = '';
    playerHandEl.innerHTML = '';
    opponentHandEl.innerHTML = '';

    gameState.playerField.forEach(card => {
        playerFieldEl.appendChild(renderCard(card));
    });

    gameState.opponentField.forEach(card => {
        opponentFieldEl.appendChild(renderCard(card, false, true));
    });

    gameState.playerHand.forEach(card => {
        playerHandEl.appendChild(renderCard(card, true));
    });

    // 相手の手札は伏せ札
    gameState.opponentHand.forEach((_, idx) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'game-card hand-card disabled';
        cardEl.innerHTML = `
            <div class="card-header">???</div>
            <div class="card-art">🂠</div>
            <div class="card-stats">
                <span class="card-attack">?</span>
                <span class="card-defense">?</span>
            </div>
        `;
        opponentHandEl.appendChild(cardEl);
    });
}

// ログ追加
function addLog(message) {
    const logEl = document.getElementById('battle-log');
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.textContent = message;
    logEl.insertBefore(entry, logEl.firstChild);

    // 最大10件
    while (logEl.children.length > 10) {
        logEl.removeChild(logEl.lastChild);
    }
}

// ゴールド表示更新
function updateGoldDisplay() {
    document.getElementById('player-gold').textContent = gameState.gold;
}

// テーマ切り替え
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}

// カードショーケース描画
function renderCardShowcase() {
    const showcase = document.querySelector('.card-showcase');
    if (!showcase) return;

    const featured = ['mina', 'layla', 'iris'];
    featured.forEach(id => {
        const card = CARD_DATABASE.find(c => c.id === id);
        if (card) {
            const cardEl = showcase.querySelector(`[data-card="${id}"]`);
            if (cardEl) {
                cardEl.querySelector('.card-name').textContent = card.name;
                cardEl.querySelector('.card-type').textContent = card.faction;
            }
        }
    });
}

// デッキビルダー
function showDeckBuilder() {
    showScreen('deck');
    renderDeckBuilder();
}

function renderDeckBuilder() {
    const deckEl = document.getElementById('current-deck');
    const poolEl = document.getElementById('available-cards');

    deckEl.innerHTML = '';
    poolEl.innerHTML = '';

    document.getElementById('deck-count').textContent = gameState.playerDeck.length;

    // プールに全カード表示
    CARD_DATABASE.forEach(card => {
        const cardEl = createCollectionCard(card);
        poolEl.appendChild(cardEl);
    });

    // フィルター機能
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            filterCards(e.target.dataset.filter);
        });
    });
}

function filterCards(faction) {
    const poolEl = document.getElementById('available-cards');
    poolEl.innerHTML = '';

    const filtered = faction === 'all'
        ? CARD_DATABASE
        : CARD_DATABASE.filter(c => c.faction === faction);

    filtered.forEach(card => {
        const cardEl = createCollectionCard(card);
        poolEl.appendChild(cardEl);
    });
}

function createCollectionCard(card) {
    const cardEl = document.createElement('div');
    cardEl.className = 'game-card hand-card';
    cardEl.innerHTML = `
        <div class="card-header">${card.faction}</div>
        <div class="card-art">${card.emoji}</div>
        <div class="card-stats">
            <span class="card-attack">⚔️${card.attack}</span>
            <span class="card-defense">🛡️${card.defense}</span>
        </div>
    `;

    cardEl.addEventListener('click', () => showCardModal(card));
    return cardEl;
}

// カードコレクション
function showCardCollection() {
    showScreen('collection');
    renderCollection();
}

function renderCollection() {
    const grid = document.getElementById('all-cards');
    grid.innerHTML = '';

    document.getElementById('owned-count').textContent = CARD_DATABASE.length;
    document.getElementById('total-count').textContent = CARD_DATABASE.length;

    CARD_DATABASE.forEach(card => {
        const cardEl = createCollectionCard(card);
        grid.appendChild(cardEl);
    });
}

// カードモーダル
function showCardModal(card) {
    const modal = document.getElementById('card-modal');
    const content = document.getElementById('modal-card-content');

    content.innerHTML = `
        <div class="modal-card-large">
            <div class="card-art">${card.emoji}</div>
            <h3>${card.name}</h3>
            <div class="card-faction">${card.faction} | ${card.type}</div>
            <div class="modal-stats">
                <div class="modal-stat">
                    <div class="modal-stat-value">${card.attack}</div>
                    <div class="modal-stat-label">攻撃力</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-value">${card.defense}</div>
                    <div class="modal-stat-label">防御力</div>
                </div>
                <div class="modal-stat">
                    <div class="modal-stat-value">${card.cost}</div>
                    <div class="modal-stat-label">コスト</div>
                </div>
            </div>
            <div class="modal-description">
                <p><strong>能力:</strong> ${card.ability}</p>
                <p>${card.description}</p>
                <p><em>活動期: ${card.era}</em></p>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

function closeCardModal() {
    document.getElementById('card-modal').classList.remove('active');
}

// 世界観
function showLore() {
    showScreen('lore');
}

const LORE_DATA = {
    intro: {
        title: '🌌 E16星系とは',
        content: `
            <p>E16星系は、M104銀河（ソンブレロ銀河）のハロー領域に位置する二重連星系です。</p>
            <p><strong>恒星:</strong> Ea16（主星、K2型）とEb16（伴星、M3型）</p>
            <p><strong>主要惑星:</strong> シンフォニー・オブ・スターズ（Symphony of Stars）</p>
            <p><strong>暦法:</strong> E暦（E1 = AD 3501）</p>
            <p>西暦3500年（E0年）、地球からの大移民により植民化が始まりました。</p>
        `
    },
    auralis: {
        title: '🎵 AURALIS Коллектив',
        content: `
            <p>「光と音を永遠にする」——芸術 коллектив。</p>
            <p><strong>ミッション:</strong> Where Light and Sound Become Eternal</p>
            <p><strong>第二世代メンバー (E528):</strong></p>
            <ul>
                <li>ミナ・エウレカ・アーネスト - 総合プロデューサー</li>
                <li>レイラ・ヴィレル・ノヴァ - Pink Voltage</li>
                <li>ケイト・パットン（新代）- 安定化担当</li>
                <li>リリー・アーデント（新代）- 感情増幅担当</li>
                <li>ニニー・オフェンバック - 拡散担当</li>
            </ul>
            <p><strong>リミナル・フォージ:</strong> E528年から地球AD2026年への時相放送プロジェクト</p>
        `
    },
    gigapolis: {
        title: '🏙️ ギガポリス',
        content: `
            <p>ジュラメット川流域に広がる超巨大都市。GDP14京ドル。</p>
            <p><strong>6地区:</strong> Chem / Abrivo / Troyane / Ronve / Poitiers / Lille</p>
            <p><strong>特徴:</strong></p>
            <ul>
                <li>ネオンコロシアム - 戦士決定戦開催地</li>
                <li>セントラル・タワー - 行政中枢</li>
                <li>地下街（深度6層）</li>
            </ul>
            <p><strong>Valoria地区:</strong> Ronve北岸の独立企業圏（Jen支配）</p>
        `
    },
    crescent: {
        title: '🌙 クレセント大地方',
        content: `
            <p>シンフォニー・オブ・スターズの東大陸。三日月型地形。</p>
            <p><strong>加盟国 (V7):</strong></p>
            <ul>
                <li>ヴァーミリオン - アイリス首脳（IRISランキング1位）</li>
                <li>クロセヴィア - カスチーナ首脳</li>
                <li>ブルー・ローズ - フィオナ統率</li>
                <li>ミエルテンガ - マリーナ・ボビン総統</li>
                <li>テクロサス - セバスチャン・ヴァレリウス</li>
                <li>SSレンジ / アイアン・シンジケート</li>
            </ul>
        `
    }
};

function showLoreDetail(key) {
    const lore = LORE_DATA[key];
    if (!lore) return;

    document.getElementById('lore-detail').innerHTML = `
        <h3>${lore.title}</h3>
        ${lore.content}
    `;
}

// イベントリスナー設定
function setupEventListeners() {
    // モーダル外クリックで閉じる
    document.getElementById('card-modal').addEventListener('click', (e) => {
        if (e.target.id === 'card-modal') {
            closeCardModal();
        }
    });

    // キーボード
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCardModal();
        }
    });

    // カードダブルクリックでプレイ
    document.getElementById('player-hand').addEventListener('dblclick', (e) => {
        const cardEl = e.target.closest('.game-card');
        if (cardEl && gameState.selectedCard) {
            playCard(gameState.selectedCard);
        }
    });
}

// グローバル関数暴露
window.startGame = startGame;
window.returnToMenu = returnToMenu;
window.showDeckBuilder = showDeckBuilder;
window.showCardCollection = showCardCollection;
window.showLore = showLore;
window.showCardModal = showCardModal;
window.closeCardModal = closeCardModal;
window.showLoreDetail = showLoreDetail;
window.endTurn = endTurn;
window.useSpecial = useSpecial;
window.toggleTheme = toggleTheme;
window.playCard = playCard;
