
// 保存服务器端渲染 SSR 页面，缓存 10 分钟
// SEO 优化
// 首屏加速
// 如果用户浏览器禁止了 JavaScript 还能看到首页

FlowRouter.setDeferScriptLoading(true);


const TEN_MINUTES = 1000 * 60 * 10;
FlowRouter.setPageCacheTimeout(TEN_MINUTES);
