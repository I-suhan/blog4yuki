(() => {
  "use strict";

  const STORAGE_KEY = "yukinei-theme";
  const AVAILABLE_THEMES = ["theme-peach", "theme-night"];
  const DEFAULT_THEME = "theme-peach";

  const applyTheme = (theme) => {
    document.body.classList.remove(...AVAILABLE_THEMES);

    const nextTheme = AVAILABLE_THEMES.includes(theme)
      ? theme
      : DEFAULT_THEME;

    document.body.classList.add(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  /*
   * 当前版本固定展示桃雪温酥。
   * localStorage 保留，未来开放夜雪时可直接读取。
   */
  applyTheme(DEFAULT_THEME);

  /*
   * 未来开启夜雪时可改为：

   const savedTheme =
     localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;

   applyTheme(savedTheme);

   同时在 HTML 加入主题切换按钮，并调用：
   applyTheme("theme-night");
  */
})();
