!function(e){function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=4)}({4:function(e,n,t){e.exports=t(5)},5:function(e,n){Double_page_form=function(e){this.double_page_container=e.double_page_container,this.page1=this.double_page_container.find(".page1"),this.page2=this.double_page_container.find(".page2"),this.page1_btn=$(this.double_page_container.find(".top-btns-container .top-btns")[0]),this.page2_btn=$(this.double_page_container.find(".top-btns-container .top-btns")[1]);var n=this;this.current_page=1,this.swap_page=function(e){n.double_page_container.removeClass("focus-page2 focus-page1"),1==e?(n.double_page_container.addClass("focus-page1"),n.double_page_container.removeClass("focus-page2"),n.page1_btn.addClass("focus"),n.page2_btn.removeClass("focus"),n.current_page=1):(n.double_page_container.removeClass("focus-page1"),n.double_page_container.addClass("focus-page2"),n.page1_btn.removeClass("focus"),n.page2_btn.addClass("focus"),n.current_page=2)},this.init=function(){n.page1_btn.click(function(){n.swap_page(1)}),n.page2_btn.click(function(){n.swap_page(2)})},this.init()}}});