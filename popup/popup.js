// 心情配置
const moodConfig = {
  happy: {
    name: '开心',
    color: '#FFD700',
    engine: 'https://www.google.com/search?q=',
    tips: '😊 开心时刻！搜索点好玩的内容吧～',
    bgGradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)'
  },
  calm: {
    name: '平静',
    color: '#87CEEB',
    engine: 'https://www.bing.com/search?q=',
    tips: '😌 心静如水，适合深度搜索和学习',
    bgGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  },
  excited: {
    name: '兴奋',
    color: '#FF6B6B',
    engine: 'https://www.google.com/search?q=',
    tips: '🤩 充满能量！探索新鲜事物吧！',
    bgGradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
  },
  sad: {
    name: '难过',
    color: '#9370DB',
    engine: 'https://www.bing.com/search?q=',
    tips: '😢 抱抱你～搜索点治愈的内容吧',
    bgGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  },
  focused: {
    name: '专注',
    color: '#20B2AA',
    engine: 'https://scholar.google.com/scholar?q=',
    tips: '🤔 专注模式！学术搜索已开启',
    bgGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
  },
  tired: {
    name: '疲惫',
    color: '#DDA0DD',
    engine: 'https://www.bing.com/search?q=',
    tips: '😴 累了吧？搜索点轻松的内容休息一下',
    bgGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
  }
};

let currentMood = null;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  loadCurrentMood();
  loadHistory();
  setupEventListeners();
});

// 加载当前心情
function loadCurrentMood() {
  chrome.storage.local.get(['currentMood'], (result) => {
    if (result.currentMood) {
      currentMood = result.currentMood;
      applyMoodTheme(currentMood);
    }
  });
}

// 应用心情主题
function applyMoodTheme(mood) {
  const config = moodConfig[mood];
  if (!config) return;
  
  document.body.style.background = config.bgGradient;
  document.getElementById('moodTips').innerHTML = `<p>${config.tips}</p>`;
  
  // 更新按钮选中状态
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.classList.remove('selected');
    if (btn.dataset.mood === mood) {
      btn.classList.add('selected');
    }
  });
}

// 设置事件监听
function setupEventListeners() {
  // 心情按钮
  document.querySelectorAll('.mood-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const mood = btn.dataset.mood;
      currentMood = mood;
      
      // 保存心情
      chrome.storage.local.set({ currentMood: mood });
      
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
  chrome.tabs.create({ url: searchUrl });
  
  // 保存搜索历史
  saveHistory(query, currentMood);
  
  // 清空输入框
  document.getElementById('searchInput').value = '';
}

// 保存搜索历史
function saveHistory(query, mood) {
  chrome.storage.local.get(['searchHistory'], (result) => {
    let history = result.searchHistory || [];
    
    // 添加到开头
    history.unshift({
      query: query,
      mood: mood,
      timestamp: Date.now()
    });
    
    // 只保留最近 20 条
    history = history.slice(0, 20);
    
    chrome.storage.local.set({ searchHistory: history });
    loadHistory();
  });
}

// 加载搜索历史
function loadHistory() {
  chrome.storage.local.get(['searchHistory'], (result) => {
    const history = result.searchHistory || [];
    const historyList = document.getElementById('historyList');
    
    if (history.length === 0) {
      historyList.innerHTML = '<li style="text-align:center;color:#999;">暂无搜索历史</li>';
      return;
    }
    
    historyList.innerHTML = history.map(item => {
      const moodEmoji = item.mood ? moodConfig[item.mood]?.emoji || '😊' : '😊';
      return `<li data-query="${item.query}">${moodEmoji} ${item.query}</li>`;
    }).join('');
    
    // 点击历史项重新搜索
    historyList.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        document.getElementById('searchInput').value = li.dataset.query;
        performSearch();
      });
    });
  });
}

// 清空历史
function clearHistory() {
  chrome.storage.local.set({ searchHistory: [] });
  loadHistory();
}
