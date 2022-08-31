let dq = document.querySelector.bind(document);

function UI() {
  this.init();
}

UI.prototype.init = function () {
  console.log("欢迎使用小说整治插件");
};

UI.prototype.mounted = function () {
  this.body = document.body;
  this.new_bread_el = document.createElement("div");
  this.new_bread_el.className = "_bread";
  this.new_content_el = document.createElement("div");
  this.new_content_el.className = "_content";
  this.new_title_el = document.createElement("div");
  this.new_title_el.className = "_content_title";
  this.new_nav_el = document.createElement("div");
  this.new_nav_el.className = "_nav";
};

// 网站策略判定
UI.prototype.judge = function () {
  try {
    if (dq(".bread_728x90")) {
      this.kehuanNet();
      return false;
    }

    if (dq(".zhengwan_top")) {
      this.uukanshu();
      return false;
    }

    if (dq(".page_chapter")) {
      this.shuquge();
      return false;
    }

    if (dq(".modbg")) {
      this.shuba();
      return false;
    }

    this.biquge();
  } catch (error) {
    alert(error);
  }
};

// 各个网站的策略

UI.prototype.kehuanNet = function () {
  this.body.classList.add("kehuan");
  this.old_bread_el = dq("#container .topnav h2");
  this.old_title_el = dq("#container > h1");
  this.old_content_el = dq("#container .text");
  this.nav_prev = dq(".next a:nth-child(1)");
  this.nav_menu = dq(".next a:nth-child(2)");
  this.nav_next = dq(".next a:nth-child(3)");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

UI.prototype.uukanshu = function () {
  this.body.classList.add("uukanshu");
  this.old_bread_el = dq(".srcbox");
  this.old_title_el = dq(".h1title #timu");
  this.old_content_el = dq("#contentbox");
  this.nav_prev = dq(".fanye #prev");
  this.nav_menu = dq(".fanye #htmlmulu");
  this.nav_next = dq(".fanye #next");
  this.nav_space = "";
  this.ads = [".ad_content"];
  this.process();
};

UI.prototype.shuquge = function () {
  this.body.classList.add("shuquge");
  this.old_bread_el = dq(".path .p");
  this.old_title_el = dq(".content h1"); // title
  this.old_content_el = dq("#content");
  this.old_nav_el = dq(".page_chapter ul"); // btns
  this.nav_prev = dq(".page_chapter li:nth-child(1) a");
  this.nav_menu = dq(".page_chapter li:nth-child(2) a");
  this.nav_next = dq(".page_chapter li:nth-child(3) a");
  this.nav_space = dq(".page_chapter li:nth-child(4) a");
  this.ads = [".header", "div.box_con > div.bookname div.lm", ".info > .link", ".footer"];
  this.process();
};

UI.prototype.biquge = function () {
  this.body.classList.add("biquge");
  this.old_title_el = dq(".content_read .bookname h1"); // title
  this.old_content_el = dq(".content_read #content");
  this.old_nav_el = dq(".page_chapter ul"); // btns
  this.nav_prev = dq(".bottem2 a:nth-child(1)");
  this.nav_menu = dq(".bottem2 a:nth-child(2)");
  this.nav_next = dq(".bottem2 a:nth-child(3)");
  this.nav_space = dq(".bottem2 a:nth-child(4)");
  this.ads = ["#footer", ".header", "#listtj", ".box_con + script + div"];
  this.process();
};

UI.prototype.shuba = function () {
  this.body.classList.add("shuba");
  this.old_bread_el = dq(".bread");
  this.old_title_el = dq("h1.hide720"); // title
  this.old_content_el = dq(".txtnav");
  this.old_nav_el = dq(".page1"); // btns
  this.nav_prev = dq(".page1 a:nth-child(1)");
  this.nav_menu = dq(".page1 a:nth-child(3)");
  this.nav_next = dq(".page1 a:nth-child(4)");
  this.ads = [".hide720"];
  this.process();
};

// 开始处理
UI.prototype.process = function () {
  if (this.old_content_el) {
    this.mode = "read";
    this.processRead();
    this.body.classList.add("read");
  }
  this.processRemoveAD();
};

// 处理页面

UI.prototype.processRead = function () {
  this.processReadBread();
  this.processReadContent();
  this.processReadNav();
  this.body.innerHTML = "";
  this.body.appendChild(this.new_bread_el);
  this.body.appendChild(this.new_content_el);
  this.body.appendChild(this.new_nav_el);
  let p_list = document.querySelectorAll("._content > p");
  p_list.forEach((p) => {
    p.innerHTML = p.innerHTML.trim();
  });
};

// 去除广告
UI.prototype.processRemoveAD = function () {
  if (this.ads.length) {
    console.log(this.ads.length);
    this.ads.forEach((selector) => {
      let ad = dq(selector);
      console.log(ad);
      if (ad) ad.parentElement.removeChild(ad);
    });
  }
};

// 处理面包屑
UI.prototype.processReadBread = function () {
  this.breadCrumbs = this.old_bread_el && this.old_bread_el.getElementsByTagName("a");
  if (this.breadCrumbs && this.breadCrumbs.length) {
    Array.from(this.breadCrumbs).forEach((item, index) => {
      if (index < 3) this.new_bread_el.appendChild(item);
      if (index < 2) {
        let separate = document.createElement("span");
        separate.className += "separate";
        separate.innerText = ">";
        this.new_bread_el.appendChild(separate);
      }
    });
  }
};

// 处理正文

UI.prototype.processReadContent = function () {
  this.new_title_el.innerHTML = this.old_title_el.innerHTML;
  let txt = this.new_title_el.outerHTML + this.old_content_el.innerHTML;
  this.new_content_el.innerHTML = removeTextADS(txt);
  let mark = document.createElement("div");
  mark.className += "book-mark";
  this.new_content_el.appendChild(mark);
};

// 去除正文中的广告
function removeTextADS(txt) {
  let ads = [
    /(八一中文网).*com/,
    "请退出转码页面，请下载爱阅小说app 阅读最新章节。",
    "txt下载地址： ",
    "手机阅读："
  ];
  ads.forEach((item) => {
    txt = txt.replace(item, "");
  });
  return txt;
}

// 处理底部导航
UI.prototype.processReadNav = function () {
  if (this.nav_prev) {
    this.new_nav_el.appendChild(this.nav_prev);
  } else {
    this.new_nav_el.innerHTML += "<span>上一章</span>";
  }
  this.processReadNavSeparate();

  if (this.nav_menu) {
    this.new_nav_el.appendChild(this.nav_menu);
  } else {
    this.new_nav_el.innerHTML += "<span>目录</span>";
  }
  this.processReadNavSeparate();
  if (this.nav_next) {
    this.new_nav_el.appendChild(this.nav_next);
  } else {
    this.new_nav_el.innerHTML += "<span>下一章</span>";
  }
  this.processReadNavSeparate();
  if (this.nav_space) {
    this.new_nav_el.appendChild(this.nav_space);
  }
};

// 处理底部分割线
UI.prototype.processReadNavSeparate = function () {
  let separate = document.createElement("div");
  separate.className += "separate";
  this.new_nav_el.appendChild(separate);
};

export default UI;