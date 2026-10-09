/**
 * Счётчики статистики: LiveInternet, Рамблер/Топ-100, Рейтинг Mail.ru.
 * Коды вставляются в <div id="counters"> в footer.
 */
(function () {
  const container = document.getElementById("counters");
 // if (!container) return;

  // ============================================================
  // 1. LiveInternet
  // ============================================================
  // ВСТАВЬТЕ СЮДА КОД ИЗ ЛИЧНОГО КАБИНЕТА LIVeINTERNET
  // Пример (замените на свой):
  container.insertAdjacentHTML("beforeend", `
    <!--LiveInternet counter--><a href="https://www.liveinternet.ru/click"
    target="_blank"><img id="licnt78E1" width="88" height="31" style="border:0" 
    title="LiveInternet: показано число просмотров и посетителей за 24 часа"
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"
    alt=""/></a><script>(function(d,s){d.getElementById("licnt78E1").src=
    "https://counter.yadro.ru/hit?t52.6;r"+escape(d.referrer)+
    ((typeof(s)=="undefined")?"":";s"+s.width+"*"+s.height+"*"+
    (s.colorDepth?s.colorDepth:s.pixelDepth))+";u"+escape(d.URL)+
    ";h"+escape(d.title.substring(0,150))+";"+Math.random()})
    (document,screen)</script><!--/LiveInternet-->
  `);

  // ============================================================
  // 2. Рамблер/Топ-100
  // ============================================================
  // ВСТАВЬТЕ СЮДА КОД ИЗ ЛИЧНОГО КАБИНЕТА РАМБЛЕР/ТОП-100
  /*
  container.insertAdjacentHTML("beforeend", `
    <!-- Rambler Top100 -->
    <a href="https://top100.rambler.ru/navi/XXXXXXX/" target="_blank">
      <img src="https://counter.rambler.ru/top100.cnt?XXXXXXX"
           alt="Rambler's Top100" width="88" height="31" border="0"/>
    </a>
  `);
  */

  // ============================================================
  // 3. Рейтинг Mail.ru
  // ============================================================
  // ВСТАВЬТЕ СЮДА КОД ИЗ ЛИЧНОГО КАБИНЕТА РЕЙТИНГ MAIL.RU
  /*
  container.insertAdjacentHTML("beforeend", `
    <!-- Rating Mail.ru counter -->
    <a href="https://rating.mail.ru/..." target="_blank">
      <img src="https://counter.rambler.ru/..." width="88" height="31" border="0"/>
    </a>
  `);
  */
})();