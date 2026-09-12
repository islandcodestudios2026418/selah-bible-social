// ===== Selah Bible Social App - Prototype JS =====

// ===== Word Study Database (原文詞彙資料庫) =====
const wordStudyData = {
    'bereshit': {
        original: 'בְּרֵאשִׁית',
        transliteration: 'Bereshit',
        pronunciation: 'beh-rey-SHEET',
        language: '希伯來文',
        partOfSpeech: '名詞',
        translation: '起初、開始',
        meanings: [
            {
                title: '時間的起點',
                description: '指一個全新的開始，不只是時間序列中的某個點，而是「萬物的源頭」。'
            },
            {
                title: '首要、最重要',
                description: '在希伯來思維中，「起初」也暗示「最重要的」。這個字的字根 רֹאשׁ (rosh) 意思是「頭」，引申為「首要的、最高的」。'
            },
            {
                title: '為了...的緣故',
                description: '拉比傳統解釋：神為了「reshit」（指以色列或妥拉）而創造世界。'
            }
        ],
        culturalContext: '在古代近東文化中，創世敘事通常以神明之間的衝突開始。但創世記開頭的「起初」直接宣告：只有一位神，祂從「無」創造「有」，沒有任何對手或競爭者。',
        relatedVerses: [
            { ref: '箴言 8:22', text: '在耶和華造化的起頭，在太初創造萬物之先，就有了我。' },
            { ref: '約翰福音 1:1', text: '太初有道，道與神同在，道就是神。（希臘文 Ἐν ἀρχῇ 對應希伯來文 בְּרֵאשִׁית）' }
        ]
    },
    'bara': {
        original: 'בָּרָא',
        transliteration: 'Bara',
        pronunciation: 'bah-RAH',
        language: '希伯來文',
        partOfSpeech: '動詞',
        translation: '創造',
        meanings: [
            {
                title: '從無到有的創造',
                description: '這個動詞在聖經中「只有神」是主詞，從不用於人類的製造活動。表示一種獨特的、神聖的創造行為。'
            },
            {
                title: '與「製造」(עָשָׂה asah) 不同',
                description: '人可以「製造」(asah)，但只有神能「創造」(bara)。Bara 暗示從完全的「無」帶出「有」。'
            }
        ],
        culturalContext: '古代近東的其他創世神話（如巴比倫的 Enuma Elish）描述神明用已存在的材料「塑造」世界。但希伯來文 bara 的獨特用法表明：以色列的神不需要任何原材料，祂的話語本身就有創造的能力。',
        relatedVerses: [
            { ref: '以賽亞書 45:18', text: '創造諸天的耶和華，製造成全大地的神...' },
            { ref: '詩篇 51:10', text: '神啊，求你為我造（bara）清潔的心...' }
        ]
    },
    'tohu': {
        original: 'תֹהוּ וָבֹהוּ',
        transliteration: 'Tohu va-Vohu',
        pronunciation: 'TO-hoo vah-VO-hoo',
        language: '希伯來文',
        partOfSpeech: '名詞片語',
        translation: '空虛混沌',
        meanings: [
            {
                title: '無形、荒廢',
                description: 'Tohu (תֹהוּ) 指「無形狀的」、「荒廢」、「虛空」。用來描述曠野或無法居住的地方。'
            },
            {
                title: '空虛、無物',
                description: 'Vohu (בֹהוּ) 加強 Tohu 的意思，兩個字押韻形成強調。描述一種完全沒有秩序、沒有生命的狀態。'
            },
            {
                title: '等待被充滿',
                description: '這不是「混亂」而是「尚未成形」。就像畫布等待畫家，這是充滿潛力的起點。'
            }
        ],
        culturalContext: '這個詞組只在聖經出現三次（創1:2、賽34:11、耶4:23）。在以賽亞書和耶利米書中，它描述神審判後的荒涼。這提醒讀者：離開神的創造秩序，世界會回到「空虛混沌」的狀態。',
        relatedVerses: [
            { ref: '耶利米書 4:23', text: '我觀看地，不料，地是空虛混沌...' },
            { ref: '以賽亞書 34:11', text: '耶和華必將空虛的準繩、混沌的線鉈...' }
        ]
    },
    'ruach': {
        original: 'רוּחַ',
        transliteration: 'Ruach',
        pronunciation: 'ROO-akh',
        language: '希伯來文',
        partOfSpeech: '名詞',
        translation: '靈、風、氣息',
        meanings: [
            {
                title: '風',
                description: '最基本的意思是「風」——看不見但能感受到的力量。'
            },
            {
                title: '氣息、生命力',
                description: '指使人或動物活著的「氣息」。當 ruach 離開，生命就結束（詩104:29）。'
            },
            {
                title: '靈、精神',
                description: '指人的內在本質、情緒狀態，或神的聖靈。同一個字涵蓋物質（風）和非物質（靈）的概念。'
            }
        ],
        culturalContext: '希伯來思維不像希臘哲學那樣嚴格區分「物質」和「靈性」。Ruach 同時是風、氣息、和靈，這反映出希伯來人認為：神的靈就像風一樣，看不見、摸不著，但絕對真實且充滿力量。',
        relatedVerses: [
            { ref: '以西結書 37:9', text: '氣息（ruach）啊，要從四方而來，吹在這些被殺的人身上，使他們活了。' },
            { ref: '約翰福音 3:8', text: '風（pneuma，對應 ruach）隨著意思吹...' }
        ]
    },
    'or': {
        original: 'אוֹר',
        transliteration: 'Or',
        pronunciation: 'OHR',
        language: '希伯來文',
        partOfSpeech: '名詞',
        translation: '光',
        meanings: [
            {
                title: '物理的光',
                description: '照亮黑暗的光線。注意：這光在太陽被造之前就存在（太陽在第四日才造），暗示這是超自然的光。'
            },
            {
                title: '啟示、知識',
                description: '在希伯來詩歌中，光常代表神的啟示、智慧和引導。「你的話是我腳前的燈」（詩119:105）。'
            },
            {
                title: '救恩、盼望',
                description: '先知常用光來描述彌賽亞的來臨和神的救恩（賽9:2「在黑暗中行走的百姓看見了大光」）。'
            }
        ],
        culturalContext: '在古代世界，光是最珍貴的資源之一。沒有電力的時代，日落後的黑暗是真實的威脅。因此「光」在聖經中幾乎總是正面的——代表生命、真理、神的同在。神的第一句話就是「要有光」，這不是偶然的選擇。',
        relatedVerses: [
            { ref: '詩篇 27:1', text: '耶和華是我的亮光（or），是我的拯救...' },
            { ref: '約翰福音 1:4-5', text: '生命在他裡頭，這生命就是人的光。光照在黑暗裡，黑暗卻不接受光。' }
        ]
    },
    'tov': {
        original: 'טוֹב',
        transliteration: 'Tov',
        pronunciation: 'TOHV',
        language: '希伯來文',
        partOfSpeech: '形容詞',
        translation: '好',
        meanings: [
            {
                title: '美好、令人愉悅',
                description: '描述某事物是美好的、正確的、令人滿意的。'
            },
            {
                title: '合適、恰當',
                description: 'Tov 不只是主觀的「好」，而是指事物「符合其設計目的」。光被造來照亮，它做到了，所以是 tov。'
            },
            {
                title: '道德上的良善',
                description: '「分別善（tov）惡」（創2:17）中的「善」。這個字同時涵蓋美學上的美和道德上的善。'
            }
        ],
        culturalContext: '創世記第一章重複「神看著是好的」（ki tov）七次。這個重複不是冗餘，而是一種詩意的強調：神創造的每一部分都是有意義的、美好的、符合祂心意的。這與其他古代創世神話形成對比——那些神話中的世界常是神明衝突的意外產物。',
        relatedVerses: [
            { ref: '詩篇 34:8', text: '你們要嘗嘗主恩的滋味，便知道他是美善（tov）...' },
            { ref: '彌迦書 6:8', text: '世人哪，耶和華已指示你何為善（tov）...' }
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // ===== Tab Navigation =====
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    const appHeader = document.getElementById('app-header');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const tabId = item.dataset.tab;
            
            // Update nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update content
            tabContents.forEach(tab => tab.classList.remove('active'));
            document.getElementById(`tab-${tabId}`).classList.add('active');
            
            // Update header
            if (tabId === 'read') {
                appHeader.style.display = 'none';
            } else {
                appHeader.style.display = 'flex';
            }
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });

    // ===== Amen Button (Like) =====
    const amenBtns = document.querySelectorAll('.amen-btn');
    
    amenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const countEl = btn.querySelector('.action-count');
            let count = parseInt(countEl.textContent);
            
            if (btn.classList.contains('active')) {
                btn.classList.remove('active');
                count--;
            } else {
                btn.classList.add('active');
                count++;
                
                // Add animation
                btn.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    btn.style.transform = 'scale(1)';
                }, 150);
            }
            
            countEl.textContent = count;
        });
    });

    // ===== Scripture Selection (Read Tab) =====
    const verses = document.querySelectorAll('.verse');
    const selectionPopup = document.getElementById('selection-popup');
    let selectedVerseText = '';
    let selectedVerseRef = '';

    verses.forEach(verse => {
        verse.addEventListener('click', (e) => {
            // Clear previous selection
            verses.forEach(v => v.classList.remove('selected'));
            
            // Select this verse
            verse.classList.add('selected');
            
            // Get verse info
            const verseNum = verse.dataset.verse;
            selectedVerseText = verse.textContent.replace(/^\d+\s*/, '').trim();
            selectedVerseRef = `創世記 1:${verseNum}`;
            
            // Show popup
            const rect = verse.getBoundingClientRect();
            selectionPopup.style.top = `${rect.top - 50}px`;
            selectionPopup.style.left = `${rect.left + (rect.width / 2) - 100}px`;
            selectionPopup.classList.add('active');
        });
    });

    // Hide popup when clicking elsewhere
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.verse') && !e.target.closest('.selection-popup')) {
            selectionPopup.classList.remove('active');
            verses.forEach(v => v.classList.remove('selected'));
        }
    });

    // ===== Write Reflection Modal =====
    const modalReflection = document.getElementById('modal-reflection');
    const btnWriteReflection = document.getElementById('btn-write-reflection');
    const btnScripturePost = document.getElementById('btn-scripture-post');
    
    btnWriteReflection?.addEventListener('click', () => {
        openReflectionModal();
    });

    btnScripturePost?.addEventListener('click', () => {
        // Default to a verse for demo
        selectedVerseRef = '創世記 1:3';
        selectedVerseText = '神說：「要有光」，就有了光。';
        openReflectionModal();
        
        // Switch to read tab first would be more realistic
        // but for demo, we just open the modal
    });

    function openReflectionModal() {
        // Update modal with selected verse
        const scriptureRef = modalReflection.querySelector('.scripture-ref');
        const scriptureText = modalReflection.querySelector('.scripture-text');
        
        scriptureRef.textContent = `📖 ${selectedVerseRef}`;
        scriptureText.textContent = `「${selectedVerseText}」`;
        
        selectionPopup.classList.remove('active');
        modalReflection.classList.add('active');
    }

    // ===== AI Card Generation Modal =====
    const modalAiCards = document.getElementById('modal-ai-cards');
    const btnGenerateCard = document.getElementById('btn-generate-card');
    const generatingText = document.getElementById('generating-text');
    const aiCardsGrid = document.getElementById('ai-cards-grid');
    const regenerateBtn = document.getElementById('regenerate-btn');

    btnGenerateCard?.addEventListener('click', () => {
        modalReflection.classList.remove('active');
        modalAiCards.classList.add('active');
        
        // Simulate AI generation
        generatingText.style.display = 'block';
        aiCardsGrid.style.display = 'none';
        regenerateBtn.style.display = 'none';
        
        setTimeout(() => {
            generatingText.style.display = 'none';
            aiCardsGrid.style.display = 'grid';
            regenerateBtn.style.display = 'block';
        }, 1500);
    });

    // Card selection
    const cardOptions = document.querySelectorAll('.ai-card-option');
    cardOptions.forEach(card => {
        card.addEventListener('click', () => {
            cardOptions.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
        });
    });

    // Regenerate cards (simulate)
    regenerateBtn?.addEventListener('click', () => {
        generatingText.textContent = '正在重新生成...';
        generatingText.style.display = 'block';
        aiCardsGrid.style.display = 'none';
        regenerateBtn.style.display = 'none';
        
        setTimeout(() => {
            generatingText.style.display = 'none';
            aiCardsGrid.style.display = 'grid';
            regenerateBtn.style.display = 'block';
        }, 1200);
    });

    // ===== Verse Reflections Modal =====
    const modalVerseReflections = document.getElementById('modal-verse-reflections');
    const viewAllBtns = document.querySelectorAll('.view-all-btn');
    const verseInsightsBadge = document.querySelector('.verse-insights-badge');

    viewAllBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalVerseReflections.classList.add('active');
        });
    });

    verseInsightsBadge?.addEventListener('click', () => {
        modalVerseReflections.classList.add('active');
    });

    // ===== Close Modals =====
    const modalCloses = document.querySelectorAll('.modal-close');
    
    modalCloses.forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal');
            modal.classList.remove('active');
        });
    });

    // Close modal on backdrop click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });

    // ===== Publish Post =====
    const btnPublish = document.getElementById('btn-publish');
    const toast = document.getElementById('toast');

    btnPublish?.addEventListener('click', () => {
        // Close modals
        modalReflection.classList.remove('active');
        modalAiCards.classList.remove('active');
        
        // Show toast
        toast.classList.add('active');
        
        setTimeout(() => {
            toast.classList.remove('active');
        }, 2500);
        
        // Switch to feed tab
        navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector('[data-tab="feed"]').classList.add('active');
        tabContents.forEach(tab => tab.classList.remove('active'));
        document.getElementById('tab-feed').classList.add('active');
    });

    // ===== AI Cards Modal - Use button =====
    const aiCardsSubmit = modalAiCards?.querySelector('.modal-submit');
    aiCardsSubmit?.addEventListener('click', () => {
        modalAiCards.classList.remove('active');
        modalReflection.classList.add('active');
        
        // Show indicator that card was selected
        const optionBtns = modalReflection.querySelectorAll('.option-btn');
        optionBtns[0].innerHTML = '<span>🎨</span> 圖卡已選擇 ✓';
        optionBtns[0].style.background = 'rgba(93, 78, 140, 0.1)';
        optionBtns[0].style.borderColor = 'var(--primary)';
    });

    // ===== Profile Tabs =====
    const profileTabs = document.querySelectorAll('.profile-tab');
    
    profileTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            profileTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
    });

    // ===== Stories Click =====
    const storyItems = document.querySelectorAll('.story-item.has-story');
    
    storyItems.forEach(story => {
        story.addEventListener('click', () => {
            // In a real app, this would open a story viewer
            // For demo, just show a visual feedback
            story.style.transform = 'scale(0.95)';
            setTimeout(() => {
                story.style.transform = 'scale(1)';
            }, 150);
        });
    });

    // ===== Add Story Click =====
    const addStory = document.querySelector('.add-story');
    addStory?.addEventListener('click', () => {
        // Navigate to post tab
        navItems.forEach(nav => nav.classList.remove('active'));
        document.querySelector('[data-tab="post"]').classList.add('active');
        tabContents.forEach(tab => tab.classList.remove('active'));
        document.getElementById('tab-post').classList.add('active');
    });

    // ===== Scripture Ref Click (in posts) =====
    const scriptureRefs = document.querySelectorAll('.post-scripture');
    
    scriptureRefs.forEach(ref => {
        ref.addEventListener('click', () => {
            // Navigate to read tab
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector('[data-tab="read"]').classList.add('active');
            tabContents.forEach(tab => tab.classList.remove('active'));
            document.getElementById('tab-read').classList.add('active');
            appHeader.style.display = 'none';
        });
    });

    // ===== Testimony Post Option =====
    const btnTestimonyPost = document.getElementById('btn-testimony-post');
    btnTestimonyPost?.addEventListener('click', () => {
        // In a real app, this would open a different modal for photo upload
        // For demo, just show toast
        toast.querySelector('.toast-message').textContent = '即將開放此功能！';
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
            toast.querySelector('.toast-message').textContent = '發布成功！';
        }, 2000);
    });

    // ===== Song Post Option =====
    const btnSongPost = document.getElementById('btn-song-post');
    btnSongPost?.addEventListener('click', () => {
        toast.querySelector('.toast-message').textContent = '即將開放此功能！';
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
            toast.querySelector('.toast-message').textContent = '發布成功！';
        }, 2000);
    });

    // ===== Double tap to Amen (like IG double tap) =====
    let lastTap = 0;
    const postCards = document.querySelectorAll('.post-card');
    
    postCards.forEach(card => {
        card.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            
            if (tapLength < 300 && tapLength > 0) {
                // Double tap detected
                const amenBtn = card.querySelector('.amen-btn');
                if (amenBtn && !amenBtn.classList.contains('active')) {
                    amenBtn.click();
                    
                    // Show floating amen animation
                    showFloatingAmen(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
                }
                e.preventDefault();
            }
            lastTap = currentTime;
        });
    });

    function showFloatingAmen(x, y) {
        const amen = document.createElement('div');
        amen.textContent = '🙏';
        amen.style.cssText = `
            position: fixed;
            left: ${x - 25}px;
            top: ${y - 25}px;
            font-size: 50px;
            pointer-events: none;
            animation: floatUp 1s ease-out forwards;
            z-index: 1000;
        `;
        document.body.appendChild(amen);
        
        setTimeout(() => {
            amen.remove();
        }, 1000);
    }

    // Add float animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
            100% {
                opacity: 0;
                transform: scale(1.5) translateY(-100px);
            }
        }
    `;
    document.head.appendChild(style);

    // ===== Notification Badge Clear =====
    const notifNav = document.querySelector('[data-tab="notifications"]');
    notifNav?.addEventListener('click', () => {
        const badge = notifNav.querySelector('.nav-badge');
        if (badge) {
            setTimeout(() => {
                badge.style.display = 'none';
            }, 1000);
        }
    });

    // ===== Pull to Refresh Simulation =====
    let startY = 0;
    const feedTab = document.getElementById('tab-feed');
    
    feedTab?.addEventListener('touchstart', (e) => {
        startY = e.touches[0].pageY;
    });

    feedTab?.addEventListener('touchmove', (e) => {
        const y = e.touches[0].pageY;
        const scrollTop = window.scrollY;
        
        if (scrollTop === 0 && y > startY + 100) {
            // Show refresh indicator
            if (!document.querySelector('.refresh-indicator')) {
                const indicator = document.createElement('div');
                indicator.className = 'refresh-indicator';
                indicator.innerHTML = '🔄 更新中...';
                indicator.style.cssText = `
                    text-align: center;
                    padding: 20px;
                    color: var(--primary);
                    font-size: 14px;
                `;
                feedTab.querySelector('.feed-posts').prepend(indicator);
                
                setTimeout(() => {
                    indicator.remove();
                }, 1500);
            }
        }
    });

    console.log('✨ Selah App Initialized');

    // ===== Follow Button =====
    const followBtns = document.querySelectorAll('.follow-btn');
    
    followBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (btn.classList.contains('following')) {
                btn.classList.remove('following');
                btn.textContent = '追蹤';
                showToast('已取消追蹤');
            } else {
                btn.classList.add('following');
                btn.textContent = '追蹤中';
                showToast('已追蹤！');
            }
        });
    });

    // ===== Comments Modal =====
    const modalComments = document.getElementById('modal-comments');
    const viewCommentsBtns = document.querySelectorAll('.view-comments-btn');
    const commentBtns = document.querySelectorAll('.comment-btn');
    
    viewCommentsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalComments.classList.add('active');
        });
    });

    commentBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalComments.classList.add('active');
        });
    });

    // Close comments modal
    modalComments?.querySelector('.modal-close')?.addEventListener('click', () => {
        modalComments.classList.remove('active');
    });

    // Send comment
    const sendCommentBtn = document.querySelector('.send-comment-btn');
    const commentInputFull = document.querySelector('.comment-input-full');
    
    sendCommentBtn?.addEventListener('click', () => {
        if (commentInputFull?.value.trim()) {
            // Add new comment to list
            const commentsList = document.querySelector('.comments-list');
            const newComment = document.createElement('div');
            newComment.className = 'comment-full';
            newComment.innerHTML = `
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=joshua" alt="" class="comment-avatar">
                <div class="comment-content">
                    <div class="comment-header">
                        <span class="comment-author">約書亞</span>
                        <span class="comment-time">剛剛</span>
                    </div>
                    <p class="comment-body">${commentInputFull.value}</p>
                    <div class="comment-actions">
                        <button class="comment-like">🙏 0</button>
                        <button class="comment-reply">回覆</button>
                    </div>
                </div>
            `;
            commentsList.appendChild(newComment);
            commentInputFull.value = '';
            showToast('留言已發送！');
        }
    });

    // Quick comment submit
    const quickCommentInputs = document.querySelectorAll('.comment-input');
    const quickCommentBtns = document.querySelectorAll('.comment-submit-btn');
    
    quickCommentBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const input = quickCommentInputs[index];
            if (input?.value.trim()) {
                showToast('留言已發送！');
                input.value = '';
            }
        });
    });

    // ===== Join Group =====
    const joinGroupBtns = document.querySelectorAll('.join-group-btn');
    
    joinGroupBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            btn.textContent = '已加入 ✓';
            btn.style.background = 'var(--primary)';
            btn.style.color = '#fff';
            btn.disabled = true;
            showToast('已加入小組！');
        });
    });

    // ===== Group Card Click =====
    const groupCards = document.querySelectorAll('.group-card');
    
    groupCards.forEach(card => {
        card.addEventListener('click', () => {
            // Switch to feed tab and show group feed
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector('[data-tab="feed"]').classList.add('active');
            tabContents.forEach(tab => tab.classList.remove('active'));
            document.getElementById('tab-feed').classList.add('active');
            appHeader.style.display = 'flex';
            showToast('顯示小組動態');
        });
    });

    // ===== FAB Post Button =====
    const fabPost = document.getElementById('fab-post');
    
    fabPost?.addEventListener('click', () => {
        // Open post modal
        selectedVerseRef = '選擇經文';
        selectedVerseText = '長按讀經頁面中的經文來選取';
        modalReflection.classList.add('active');
    });

    // ===== Toast Helper =====
    function showToast(message) {
        const toastEl = document.getElementById('toast');
        const toastMsg = toastEl.querySelector('.toast-message');
        toastMsg.textContent = message;
        toastEl.classList.add('active');
        
        setTimeout(() => {
            toastEl.classList.remove('active');
        }, 2000);
    }

    // ===== Word Study Feature (原文解析功能) =====
    const wordHighlights = document.querySelectorAll('.word-highlight');
    const modalWordStudy = document.getElementById('modal-word-study');
    const wordStudyContent = document.getElementById('word-study-content');

    wordHighlights.forEach(word => {
        word.addEventListener('click', (e) => {
            e.stopPropagation();
            const wordId = word.dataset.wordId;
            const wordData = wordStudyData[wordId];
            
            if (wordData) {
                showWordStudy(wordData);
            }
        });
    });

    function showWordStudy(data) {
        // Show loading first
        wordStudyContent.innerHTML = `
            <div class="word-loading">
                <div class="word-loading-icon">📖</div>
                <p class="word-loading-text">AI 正在分析原文...</p>
            </div>
        `;
        modalWordStudy.classList.add('active');

        // Simulate AI processing delay
        setTimeout(() => {
            const meaningsHTML = data.meanings.map(m => `
                <li>
                    <strong>${m.title}</strong>
                    ${m.description}
                </li>
            `).join('');

            const relatedVersesHTML = data.relatedVerses.map(v => `
                <div class="related-verse-item">
                    <span class="related-verse-ref">${v.ref}</span>
                    <span class="related-verse-text">${v.text}</span>
                </div>
            `).join('');

            wordStudyContent.innerHTML = `
                <div class="word-study-header">
                    <div class="original-word">${data.original}</div>
                    <div class="word-transliteration">${data.transliteration} [${data.pronunciation}]</div>
                    <div class="word-translation">${data.language} · ${data.partOfSpeech} · 「${data.translation}」</div>
                </div>

                <div class="word-study-section">
                    <h4>字義解析</h4>
                    <ul class="meaning-list">
                        ${meaningsHTML}
                    </ul>
                </div>

                <div class="word-study-section">
                    <h4>歷史文化背景</h4>
                    <div class="cultural-note">
                        <p>${data.culturalContext}</p>
                    </div>
                </div>

                <div class="word-study-section">
                    <h4>相關經文</h4>
                    <div class="related-verses">
                        ${relatedVersesHTML}
                    </div>
                </div>

                <div class="ai-badge">
                    <span>🤖</span>
                    <span>AI 原文解析 · 僅供參考，非神學詮釋</span>
                </div>
            `;
        }, 800);
    }

    // Close word study modal
    modalWordStudy?.querySelector('.modal-close')?.addEventListener('click', () => {
        modalWordStudy.classList.remove('active');
    });

    modalWordStudy?.addEventListener('click', (e) => {
        if (e.target === modalWordStudy) {
            modalWordStudy.classList.remove('active');
        }
    });
});
