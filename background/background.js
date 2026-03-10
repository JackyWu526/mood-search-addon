// 后台脚本 - 处理扩展的后台逻辑

// 监听扩展安装/更新
chrome.runtime.onInstalled.addListener((details) => {
  console.log('心情搜索扩展已安装/更新', details.reason);
  
  // 初始化默认设置
  chrome.storage.local.set({
    currentMood: null,
    searchHistory: []
  });
});

// 监听来自 popup 的消息
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getMood') {
    chrome.storage.local.get(['currentMood'], (result) => {
      sendResponse({ mood: result.currentMood });
    });
    return true; // 保持消息通道开放
  }
  
  if (request.action === 'setMood') {
    chrome.storage.local.set({ currentMood: request.mood });
    sendResponse({ success: true });
  }
});

console.log('心情搜索后台脚本已加载');
