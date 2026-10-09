(function () {
  function init() {
    const container = document.getElementById("counters");
    if (!container) {
      console.warn("[counters.js] Не найден #counters");
      return;
    }
    console.log("counters up");
    // 1. LiveInternet — только видимая часть
    container.insertAdjacentHTML("beforeend", `
        <!--LiveInternet counter--><a href="https://www.liveinternet.ru/click"
        target="_blank"><img id="licnt78E1" width="88" height="31" style="border:0" 
        title="LiveInternet: показано число просмотров и посетителей за 24 часа"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
        alt=""/></a><!--/LiveInternet-->
    `);

    (function (d, s) {
    var img = d.getElementById("licnt78E1");
    if (!img) {
        console.log("LiveInt F");
        return};
        
    console.log("liveInt up");
    img.src = "https://counter.yadro.ru/hit?t52.6;r" + escape(d.referrer) +
        ((typeof (s) == "undefined") ? "" : ";s" + s.width + "*" + s.height + "*" +
        (s.colorDepth ? s.colorDepth : s.pixelDepth)) +
        ";u" + escape(d.URL) +
        ";h" + escape(d.title.substring(0, 150)) + ";" + Math.random();
    })(document, screen);

    // 2. Рамблер/Топ-100 — позже
    // 3. Рейтинг Mail.ru — позже
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();