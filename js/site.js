(function () {
  function onReady(fn) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  onReady(function () {
    var glow = document.getElementById("parallax-glow");
    if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var ticking = false;
    var cx = 0;
    var cy = 0;

    function update() {
      ticking = false;
      var x = cx / window.innerWidth - 0.5;
      var y = cy / window.innerHeight - 0.5;
      var moveX = x * 28;
      var moveY = y * 22;
      glow.style.transform = "translate3d(" + moveX + "px, " + moveY + "px, 0)";
    }

    document.addEventListener(
      "mousemove",
      function (e) {
        cx = e.clientX;
        cy = e.clientY;
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
  });
})();
