!function(){var e=document.querySelector(".form"),o=document.querySelector("[name=delay]"),n=document.querySelector("[name=step]"),t=document.querySelector("[name=amount]");e.addEventListener("submit",(function(e){e.preventDefault();setTimeout((function(){for(var e=0;e<t.value;e+=1){var a=+o.value+ +n.value*e;position=e+1,i(position,a).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n," ms"))})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n," ms"))}))}}),o.value)}));Number(n.value);function i(e,o){var n=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}}();
//# sourceMappingURL=03-promises.010c6332.js.map
