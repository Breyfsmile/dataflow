(function () {
  function init() {
    const container = document.getElementById("counters");
    if (!container) {
      console.warn("[counters.js] Не найден #counters");
      return;
    }
    console.log("counters up");
    // 1. LiveInternet
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

    // 2. Рамблер/Топ-100 
    (function (w, d, c) {
        (w[c] = w[c] || []).push(function() {
            var options = {
                project: 7752719,
                attributes_dataset: [ "data-block" ],
                trackHashes: true,
                user_id: null,
                checkInit: true,
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

    container.insertAdjacentHTML("beforeend", `
    <!-- Top100 (Kraken) noscript fallback -->
        <noscript>
            <img src="//counter.rambler.ru/top100.cnt?pid=7752719" alt="Топ-100" />
        </noscript>
    <!-- END Top100 fallback -->
    `);

    // 3. Рейтинг Mail.ru
    container.insertAdjacentHTML("beforeend", `
        <noscript>
            <div>
                <img src="https://top-fwz1.mail.ru/counter?id=3800763;js=na" style="position:absolute;left:-9999px;" alt="Top.Mail.Ru" />
            </div>
        </noscript>
    `);

    var _tmr = window._tmr || (window._tmr = []);
    _tmr.push({id: "3800763", type: "pageView", start: (new Date()).getTime()});
    (function (d, w, id) {
    if (d.getElementById(id)) return;
    var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true; ts.id = id;
    ts.src = "https://top-fwz1.mail.ru/js/code.js";
    var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
    if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
    })(document, window, "tmr-code");

    function reachGoal(goalName) {
    if (typeof window.top100d === "function") {
        window.top100d(7752719, "reachGoal", goalName);
        console.log("[counters.js] reachGoal:", goalName);
    } else {
        console.warn("[counters.js] top100d недоступен, событие пропущено:", goalName);
    }
    }

    // 4.1. Клик по CTA-кнопкам
    document.querySelectorAll(".cta").forEach((btn) => {
    btn.addEventListener("click", () => reachGoal("cta_click"));
    });

    // 4.2. Отправка формы на странице контактов
    const form = document.querySelector("form");
    if (form) {
    form.addEventListener("submit", () => reachGoal("form_submit"));
    }

    document.addEventListener('initKraken7752719', function () {
    console.log("top100Counter");
    });

  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();