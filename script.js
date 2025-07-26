let lang = "en";

function switchLang() {
  if (lang === "en") {
    document.getElementById("greeting").innerText = "你好，我是李珏清（Murphy）。";
    document.getElementById("intro").innerHTML =
      "一名具有产品意识的教育传播者，正在探索 AI 工具、用户体验与教育影响力的交汇可能。";
    document.getElementById("aboutTitle").innerText = "关于我";
    document.getElementById("aboutText").innerHTML =
      "一名具有产品意识的教育传播者，热衷于用结构化与可视化的方式讲好每一个故事。<br/>" +
      "拥有跨文化教育背景与数字内容经验，善于整合用户需求、创意表达与技术工具，打造兼具深度与温度的作品。";
    lang = "zh";
  } else {
    document.getElementById("greeting").innerText = "Hi, I’m Murphy (Jueqing Li).";
    document.getElementById("intro").innerHTML =
      "I'm a bilingual product-minded educator and content strategist.<br/>" +
      "Currently exploring the intersection of AI tools, user experience, and educational impact.";
    document.getElementById("aboutTitle").innerText = "About";
    document.getElementById("aboutText").innerHTML =
      "A product-minded educator passionate about structured, visual storytelling.<br/>" +
      "Experienced in cross-cultural communication and digital content creation, building work that balances clarity and depth.";
    lang = "en";
  }
}
