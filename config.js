/**
 * Endspace Theme - Endfield Style Configuration
 * 重要配置项，默认值均为当前效果
 */
const CONFIG = {
  // ============================================
  // 核心配置 (Core Settings)
  // ============================================
  
  // 建站日期，用于计算运行天数
  ENDSPACE_SITE_CREATE_TIME: '2021-01-01',
  
  // 作者个人页路径 (点击头像跳转)
  ENDSPACE_AUTHOR_LINK: '/cloud09',
  
  // 主题强调色 (用于高亮、边框、动画等)
  ENDSPACE_ACCENT_COLOR: '#62F0F5',
  
  // ============================================
  // 加载动画 (Loading Animation)
  // ============================================
  ENDSPACE_LOADING_COVER: true,
  
  // 加载动画显示的站点名称 (右侧竖排大字)
  ENDSPACE_LOADING_SITE_NAME: 'CLOUD09_SPACE',
  
  // 加载进度文字 (不同阶段)
  ENDSPACE_LOADING_TEXT_INIT: 'INITIALIZING',
  ENDSPACE_LOADING_TEXT_LOADING: 'LOADING',
  ENDSPACE_LOADING_TEXT_COMPLETE: 'READY',
  ENDSPACE_LOADING_TEXT_SWEEPING: 'LAUNCHING',
  ENDSPACE_LOADING_TEXT_FADEOUT: 'WELCOME',
  
  // Custom Loading Image (Optional)
  // Displayed at right-center on desktop, top-center on mobile
  ENDSPACE_LOADING_IMAGE: '/svg/cloud.svg', // e.g., '/images/logo.png'

  // ============================================
  // 视觉美化 (Visual Aesthetics)
  // ============================================
  
  // 背景网格
  ENDSPACE_GRID_SIZE: 40, // 网格大小(px)
  ENDSPACE_GRID_COLOR: 'rgba(0,0,0,0.03)', // 网格颜色 (明亮模式)
  ENDSPACE_GRID_COLOR_DARK: 'rgba(255,255,255,0.02)', // 网格颜色 (暗黑模式)
  
  // 扫描线动画
  ENDSPACE_SCAN_LINE_ENABLED: true,
  ENDSPACE_SCAN_LINE_SPEED: 4, // 扫描线动画速度(秒)
  
  // HUD角标装饰
  ENDSPACE_HUD_CORNERS_ENABLED: true,
  ENDSPACE_HUD_CORNER_SIZE: '3rem',
  
  // 卡片悬停效果
  ENDSPACE_CARD_HOVER_LIFT: 2, // 悬停上移距离(px)
  ENDSPACE_CARD_HOVER_SHADOW: true, // 悬停阴影效果

  // ============================================
  // 菜单配置 (Menu)
  // ============================================
  ENDSPACE_MENU_CATEGORY: true,
  ENDSPACE_MENU_TAG: true,
  ENDSPACE_MENU_ARCHIVE: true,
  ENDSPACE_MENU_SEARCH: true,

  // ============================================
  // 文章列表 (Post List)
  // ============================================
  ENDSPACE_POST_LIST_COVER: true,
  ENDSPACE_POST_LIST_PREVIEW: true,
  ENDSPACE_POST_LIST_STYLE: 'card', // 'card' | 'list' | 'compact'

  // ============================================
  // 文章详情页 (Article Page)
  // ============================================
  ENDSPACE_ARTICLE_LAYOUT_VERTICAL: false,
  ENDSPACE_ARTICLE_ADJACENT: true,
  ENDSPACE_ARTICLE_HIDDEN_NOTIFICATION: false,

  // ============================================
  // 技术风格元素 (Tech Style)
  // ============================================
  ENDSPACE_SHOW_TIMESTAMP: true,
  ENDSPACE_SHOW_GRID_OVERLAY: true,
  ENDSPACE_SHOW_SPECTRUM_BAR: true
}
export default CONFIG
