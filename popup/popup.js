// 心情配置
const moodConfig = {
  happy: {
    name: '开心',
    color: '#FFD700',
    engine: 'https://www.google.com/search?q=',
    tips: '😊 开心时刻！搜索点好玩的内容吧～',
    bgGradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
    freeRecommendations: [
      { title: '🎬 搞笑视频合集', url: 'https://www.youtube.com/results?search_query=funny+videos' },
      { title: '😂 Reddit 笑话', url: 'https://www.reddit.com/r/funny/' },
      { title: '🎮 休闲小游戏', url: 'https://poki.com/' }
    ],
    proRecommendations: [
      { title: '🎵 欢快音乐歌单 (Spotify)', url: 'https://open.spotify.com/playlist/37i9dQZF1DXdPec7aLTmlC' },
      { title: '🐱 可爱动物视频', url: 'https://www.youtube.com/results?search_query=cute+animals' },
      { title: '🎪 脱口秀精选', url: 'https://www.bilibili.com/v/life/funny/' },
      { title: '🎨 创意手工 DIY', url: 'https://www.pinterest.com/search/pins/?q=diy+crafts' },
      { title: '🍳 美食制作视频', url: 'https://www.youtube.com/results?search_query=cooking+tutorials' }
    ]
  },
  calm: {
    name: '平静',
    color: '#87CEEB',
    engine: 'https://www.bing.com/search?q=',
    tips: '😌 心静如水，适合深度搜索和学习',
    bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    freeRecommendations: [
      { title: '📚 知乎深度阅读', url: 'https://www.zhihu.com/explore' },
      { title: '🎧 轻音乐歌单', url: 'https://open.spotify.com/playlist/37i9dQZF1DWZqd5JICZI0u' },
      { title: '📖 微信读书', url: 'https://weread.qq.com/' }
    ],
    proRecommendations: [
      { title: '🧘 冥想引导 (YouTube)', url: 'https://www.youtube.com/results?search_query=meditation+guide' },
      { title: '📰 深度新闻报道', url: 'https://www.thepaper.cn/' },
      { title: '🎓 Coursera 课程', url: 'https://www.coursera.org/' },
      { title: '📊 行业研究报告', url: 'https://www.reportlinker.com/' },
      { title: '🎨 艺术欣赏', url: 'https://artsandculture.google.com/' }
    ]
  },
  excited: {
    name: '兴奋',
    color: '#FF6B6B',
    engine: 'https://www.google.com/search?q=',
    tips: '🤩 充满能量！探索新鲜事物吧！',
    bgGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    freeRecommendations: [
      { title: '🚀 Product Hunt 新品', url: 'https://www.producthunt.com/' },
      { title: '🎢 刺激视频合集', url: 'https://www.youtube.com/results?search_query=extreme+sports' },
      { title: '🎉 活动/演出信息', url: 'https://www.damai.cn/' }
    ],
    proRecommendations: [
      { title: '🎮 新游戏发布', url: 'https://store.steampowered.com/' },
      { title: '🔥 Twitter 热门话题', url: 'https://twitter.com/explore' },
      { title: '🎬 最新电影预告', url: 'https://www.imdb.com/trailers/' },
      { title: '🎵 音乐节信息', url: 'https://www.songkick.com/' },
      { title: '🛍️ 限时优惠', url: 'https://www.dealnews.com/' }
    ]
  },
  sad: {
    name: '难过',
    color: '#9370DB',
    engine: 'https://www.bing.com/search?q=',
    tips: '😢 抱抱你～搜索点治愈的内容吧',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    freeRecommendations: [
      { title: '🎬 治愈系电影', url: 'https://movie.douban.com/tag/治愈' },
      { title: '🐱 萌宠视频', url: 'https://www.youtube.com/results?search_query=cute+pets' },
      { title: '🎵 温暖音乐', url: 'https://open.spotify.com/playlist/37i9dQZF1DX3YSRoSdA634' }
    ],
    proRecommendations: [
      { title: '📖 心灵鸡汤文章', url: 'https://www.jianshu.com/' },
      { title: '🌈 正能量视频', url: 'https://www.bilibili.com/v/life/daily/' },
      { title: '💆 放松按摩教程', url: 'https://www.youtube.com/results?search_query=relaxation+techniques' },
      { title: '🌸 治愈系动漫', url: 'https://www.bilibili.com/v/anime/slice_of_life/' },
      { title: '☕ 心理疏导文章', url: 'https://www.simplepsychology.org/' }
    ]
  },
  focused: {
    name: '专注',
    color: '#20B2AA',
    engine: 'https://scholar.google.com/scholar?q=',
    tips: '🤔 专注模式！学术搜索已开启',
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    freeRecommendations: [
      { title: '📑 Google 学术', url: 'https://scholar.google.com/' },
      { title: '📊 知乎专业讨论', url: 'https://www.zhihu.com/' },
      { title: '💻 GitHub 热门项目', url: 'https://github.com/trending' }
    ],
    proRecommendations: [
      { title: '📰 科技新闻', url: 'https://www.36kr.com/' },
      { title: '🎓 Coursera 课程', url: 'https://www.coursera.org/' },
      { title: '📚 学术论文数据库', url: 'https://arxiv.org/' },
      { title: '💼 行业数据分析', url: 'https://www.statista.com/' },
      { title: '🔬 科研工具推荐', url: 'https://www.researchgate.net/' }
    ]
  },
  tired: {
    name: '疲惫',
    color: '#DDA0DD',
    engine: 'https://www.bing.com/search?q=',
    tips: '😴 累了吧？搜索点轻松的内容休息一下',
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    freeRecommendations: [
      { title: '🎵 助眠音乐', url: 'https://www.youtube.com/results?search_query=sleep+music' },
      { title: '🌙 白噪音', url: 'https://www.youtube.com/results?search_query=white+noise' },
      { title: '🧘 放松瑜伽', url: 'https://www.youtube.com/results?search_query=relaxing+yoga' }
    ],
    proRecommendations: [
      { title: '📺 轻松综艺', url: 'https://www.mgtv.com/' },
      { title: '😌 呼吸练习', url: 'https://www.youtube.com/results?search_query=breathing+exercise' },
      { title: '🌊 自然风景视频', url: 'https://www.youtube.com/results?search_query=nature+scenery' },
      { title: '📖 睡前故事', url: 'https://www.storylineonline.net/' },
      { title: '💤 ASMR 放松', url: 'https://www.youtube.com/results?search_query=asmr+sleep' }
    ]
  }
};

let currentMood = null;
let isProUser = false;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  loadCurrentMood();
  loadProStatus();
  loadHistory();
  setupEventListeners();
});

// 加载当前心情
function loadCurrentMood() {
  browser.storage.local.get(['currentMood']).then((result) => {
    if (result.currentMood) {
      currentMood = result.currentMood;
      applyMoodTheme(currentMood);
    }
  });
}

// 加载付费状态
function loadProStatus() {
  browser.storage.local.get(['isProUser', 'proExpireDate']).then((result) => {
    isProUser = result.isProUser || false;
    if (isProUser) {
      showProBadge();
    }
  });
}

// 显示 Pro 徽章
function showProBadge() {
  const badge = document.getElementById('proBadge');
  if (badge) {
    badge.style.display = 'block';
  }
}

// 应用心情主题
function applyMoodTheme(mood) {
  const config = moodConfig[mood];
  if (!config) return;
  
  document.body.style.background = config.bgGradient;
  
  // 安全地更新提示文字
  const tipsEl = document.getElementById('moodTips');
  tipsEl.textContent = config.tips;
  
  // 更新推荐内容（根据付费状态）
  const recommendations = isProUser 
    ? [...config.freeRecommendations, ...config.proRecommendations]
    : config.freeRecommendations;
  renderRecommendations(recommendations, isProUser);
  
  // 更新按钮选中状态
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.dataset.mood === mood) {
      btn.classList.add('selected');
    }
  });
}

// 渲染推荐内容（安全方式）
function renderRecommendations(recommendations, isPro) {
  const container = document.getElementById('recommendations');
  if (!container) return;
  
  // 清空容器
  container.innerHTML = '';
  
  // 创建标题
  const title = document.createElement('h3');
  title.textContent = isPro ? '✨ 为你推荐 (Pro)' : '✨ 为你推荐';
  container.appendChild(title);
  
  // 创建列表
  const list = document.createElement('div');
  list.className = 'recommendation-list';
  
  recommendations.forEach((item, index) => {
    const link = document.createElement('a');
    link.href = item.url;
    link.target = '_blank';
    link.className = 'recommendation-item';
    
    // 标记 Pro 内容
    const isProContent = index >= 3;
    if (isProContent && !isPro) {
      link.className += ' pro-content';
      link.innerHTML = '<span class="lock-icon">🔒</span> ' + item.title + ' <span class="pro-tag">Pro</span>';
      link.addEventListener('click', (e) => {
        e.preventDefault();
        showProModal();
      });
    } else {
      link.textContent = item.title;
    }
    
    list.appendChild(link);
  });
  
  // 如果不是 Pro 用户，显示升级提示
  if (!isPro) {
    const upgradeBtn = document.createElement('button');
    upgradeBtn.className = 'upgrade-btn';
    upgradeBtn.textContent = '🌟 解锁全部功能 - 升级 Pro';
    upgradeBtn.addEventListener('click', showProModal);
    list.appendChild(upgradeBtn);
  }
  
  container.appendChild(list);
}

// 显示 Pro 弹窗
function showProModal() {
  const modal = document.getElementById('proModal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

// 关闭 Pro 弹窗
function closeProModal() {
  const modal = document.getElementById('proModal');
  if (modal) {
    modal.style.display = 'none';
  }
}

// 设置事件监听
function setupEventListeners() {
  // 心情按钮
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset.mood;
      currentMood = mood;
      
      // 保存心情
      browser.storage.local.set({ currentMood: mood });
      
      // 应用主题
      applyMoodTheme(mood);
    });
  });
  
  // 搜索按钮
  document.getElementById('searchBtn').addEventListener('click', performSearch);
  
  // 回车搜索
  document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
  
  // 清空历史
  document.getElementById('clearHistory').addEventListener('click', clearHistory);
  
  // 关闭 Pro 弹窗
  const closeBtn = document.getElementById('closeProModal');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProModal);
  }
  
  // 点击弹窗外部关闭
  const modal = document.getElementById('proModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProModal();
      }
    });
  }
  
  // 激活 Pro 按钮
  const activateBtn = document.getElementById('activateProBtn');
  if (activateBtn) {
    activateBtn.addEventListener('click', activatePro);
  }
}

// 激活 Pro
function activatePro() {
  const codeInput = document.getElementById('proCodeInput');
  const code = codeInput.value.trim();
  
  if (!code) {
    alert('请输入激活码');
    return;
  }
  
  // 这里可以添加验证逻辑（实际项目需要服务器验证）
  // 示例：简单的本地验证
  if (code.startsWith('PRO-')) {
    browser.storage.local.set({
      isProUser: true,
      proExpireDate: Date.now() + 365 * 24 * 60 * 60 * 1000 // 1 年后过期
    }).then(() => {
      isProUser = true;
      showProBadge();
      alert('🎉 激活成功！感谢支持！');
      closeProModal();
      // 重新渲染推荐内容
      if (currentMood) {
        applyMoodTheme(currentMood);
      }
    });
  } else {
    alert('激活码无效，请检查后重试');
  }
}

// 执行搜索
function performSearch() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return;
  
  // 获取搜索引擎
  let engine = 'https://www.google.com/search?q=';
  if (currentMood && moodConfig[currentMood]) {
    engine = moodConfig[currentMood].engine;
  }
  
  const searchUrl = engine + encodeURIComponent(query);
  
  // 在新标签页打开搜索结果
  browser.tabs.create({ url: searchUrl });
  
  // 保存搜索历史
  saveHistory(query, currentMood);
  
  // 清空输入框
  document.getElementById('searchInput').value = '';
}

// 保存搜索历史
function saveHistory(query, mood) {
  browser.storage.local.get(['searchHistory']).then((result) => {
    let history = result.searchHistory || [];
    
    // 添加到开头
    history.unshift({
      query: query,
      mood: mood,
      timestamp: Date.now()
    });
    
    // 只保留最近 20 条
    history = history.slice(0, 20);
    
    browser.storage.local.set({ searchHistory: history });
    loadHistory();
  });
}

// 加载搜索历史
function loadHistory() {
  browser.storage.local.get(['searchHistory']).then((result) => {
    const history = result.searchHistory || [];
    const historyList = document.getElementById('historyList');
    
    if (history.length === 0) {
      historyList.innerHTML = '<li style="text-align:center;color:#999;">暂无搜索历史</li>';
      return;
    }
    
    historyList.innerHTML = '';
    history.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.query;
      li.dataset.query = item.query;
      li.addEventListener('click', () => {
        document.getElementById('searchInput').value = item.query;
        performSearch();
      });
      historyList.appendChild(li);
    });
  });
}

// 清空历史
function clearHistory() {
  browser.storage.local.set({ searchHistory: [] });
  loadHistory();
}
