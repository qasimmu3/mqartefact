!function(e,t){"use strict";var o={init:function(){t.hooks.addAction("frontend/element_ready/widget",o.ready),t.hooks.addAction("frontend/element_ready/section",o.ready),t.hooks.addAction("frontend/element_ready/column",o.ready),t.hooks.addAction("frontend/element_ready/container",o.ready)},ready:function(n){var r=n.data("settings"),i=n.data("model-cid"),s=n.data("id");i&&(r=t.config.elements.data[i].attributes),void 0!==r&&(n.on("mouseover",(function(t){if("yes"===r?.ekit_cursor_show){t.stopPropagation();var i=`<img class="ekit-cursor-image" src="${o.removeInlineJSEvents(r?.ekit_cursor_image_src?.url)}">`;"icon"==r?.ekit_cursor_type&&"svg"!==r?.ekit_cursor_icons?.library?i=`<i class="ekit-cursor-icon ${r?.ekit_cursor_icons?.value}"></i>`:"icon"==r?.ekit_cursor_type&&"svg"==r?.ekit_cursor_icons?.library?i=`<img class="ekit-cursor-svg" src="${r.ekit_cursor_icons.value.url}">`:"text"===r?.ekit_cursor_type&&(i=`<span class="ekit-cursor-text">${o.removeInlineJSEvents(r?.ekit_cursor_text_label)}</span>`),e(n.find(".ekit-cursor")).each((function(t,o){e(o).remove()})),e(this).append(`<div class="ekit-cursor ${r.ekit_cursor_type}">\n\t\t\t\t\t\t<div class="ekit-cursor-${s} ekit-cursor-settings" id="ekit-cursor-${s}" >\n\t\t\t\t\t\t\t${i}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>`),new Cotton(`#ekit-cursor-${s}`,{models:".ekit-cursor-enabled-yes",speed:1,centerMouse:!0,cottonActiveClass:"show"})}})),n.on("mouseleave mouseout",(function(){e(n.find(".ekit-cursor")).each((function(e,t){t.remove()}))})))},removeInlineJSEvents:function(e){return e?.replace(/\son\w*=(?:"[^"]*"|'[^']*'|[^ \t\n\r>]+)/gi,"")}};e(window).on("elementor/frontend/init",o.init),e(window).on("elementor/editor/init",o.init)}(jQuery,window.elementorFrontend);