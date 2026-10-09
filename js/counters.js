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
    (function (w, d, c) {
        (w[c] = w[c] || []).push(function() {
            var options = {
                project: 7752719,
                attributes_dataset: [ "data-block" ],
                trackHashes: true,
                user_id: null,
            };
            try {
                w.top100Counter = new top100(options);
            } catch(e) { }
        });
        var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src =
        (d.location.protocol == "https:" ? "https:" : "http:") +
        "//st.top100.ru/top100/top100.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(window, document, "_top100q");

    // 2.3. Фолбэк <noscript> — добавим картинку вручную,
    //      чтобы она была видна и без JS (для проверки в кабинете)
    container.insertAdjacentHTML("beforeend", `
    <!-- Top100 (Kraken) noscript fallback -->
    <a href="https://top100.rambler.ru/navi/7752719/" target="_blank">
        <img src="https://counter.rambler.ru/top100.cnt?pid=7752719"
            alt="Топ-100" width="88" height="31" border="0"/>
    </a>
    <!-- END Top100 fallback -->
    `);

    // 3. Рейтинг Mail.ru — позже
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();