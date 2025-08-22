let lang = "en";
let menuOpen = false;

// 菜单开关
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const content = document.getElementById("content");
  const overlay = document.getElementById("overlay");

  if (!menuOpen) {
    sidebar.style.left = "0";
    if (content) content.style.marginLeft = "200px";
    overlay.style.display = "block";
    menuOpen = true;
  } else {
    sidebar.style.left = "-220px";
    if (content) content.style.marginLeft = "0";
    overlay.style.display = "none";
    menuOpen = false;
  }
}

// 页面切换
function showPage(pageId, fromMenu=false) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));

  if (pageId === "home") {
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("homeLinks").classList.remove("hidden");
  } else {
    document.getElementById(pageId).classList.remove("hidden");
  }
   // ✅ 切换页面时回到顶部
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (fromMenu) toggleMenu();
}

// 双语切换
function switchLang() {
  if (lang === "en") {
    // ===== 中文 =====
    document.getElementById("greeting").innerText = "你好 👋";
    document.getElementById("subGreeting").innerText = "我是李珏清（Murphy）";
    document.getElementById("intro").innerHTML =
      "哥伦比亚大学在读研究生，正在积极探索 AI 工具、用户体验与教育影响力的交汇可能。";

      // Quick links 翻译
      document.getElementById("quickAbout").innerText = "🧑‍💻 关于我";
      document.getElementById("quickProjects").innerText = "🎯 项目展示";
      document.getElementById("quickResume").innerText = "📄 简历";

    // Buttons
      document.getElementById("langSwitch").innerText = "English / 中文";
      document.getElementById("learnMoreBtn").innerText = "了解更多";
    
    document.getElementById("aboutTitle").innerText = "关于我";
    document.getElementById("aboutBio").innerHTML =
      "跨界教育者与产品思维内容设计师，探索 AI 工具、用户体验与学习的结合。<br/>" +
      "拥有教育研究与数字内容创作背景，既有学术成果，也具备实际项目落地经验。";

    document.getElementById("skillsTitle").innerText = "技能";
    document.getElementById("skillsList").innerHTML = `
      <span class="skill-badge">Canva</span>
      <span class="skill-badge">秀米</span>
      <span class="skill-badge">Figma（基础）</span>
      <span class="skill-badge">HTML / CSS</span>
      <span class="skill-badge">JavaScript（基础）</span>
      <span class="skill-badge">AI 辅助原型设计</span>
      <span class="skill-badge">跨文化沟通表达</span>
    `;

      // Education
  document.getElementById("educationTitle").innerText = "教育 🎓";
  document.getElementById("educationList").innerHTML = `
    <div class="education-item">
      <strong>哥伦比亚大学</strong><br/>
      国际教育发展硕士 (2024 – 2026, 预计)
    </div>
    <div class="education-item">
      <strong>普渡大学</strong><br/>
      教育研究学士 (2020 – 2024)<br/>
      辅修学习科学 | GPA 3.91
    </div>
  `;

    document.getElementById("timelineTitle").innerText = "经历时间线";
    document.getElementById("timeline").innerHTML = `
      <div class="timeline-item"><div class="timeline-date">2025.05 – 2025.08</div><div class="timeline-content"><strong>内容策略实习生 @ 清柚教育</strong><br/>参与留学咨询矩阵号运营，策划并发布公众号与小红书内容，涵盖选校建议与学员案例。结合平台调性运用Canva设计本地化模板，响应热点与政策变动。累计20+内容获得500+收藏，显著提升平台曝光率。</div></div>
      <div class="timeline-item"><div class="timeline-date">2024.12 – 至今</div><div class="timeline-content"><strong>社媒运营实习生 @ 易思汇</strong><br/>独立运营哥大校园相关小红书账号，聚焦政策解读与校园热点。学期内每周发布视觉内容并优化标题与标签，提升留存率。单条地铁卡更新贴2小时破万浏览，账号总浏览达45,000+。</div></div>
      <div class="timeline-item"><div class="timeline-date">2025.03 – 2025.04</div><div class="timeline-content"><strong>论坛策划 @ 哥大中美教育论坛</strong><br/>参与哥大中美教育论坛内容与视觉落地，通过Canva完成协同排版。同时担任“AI与教育”分论坛负责人，负责嘉宾统筹与会议流程。最终项目成果覆盖6,000+受众，获嘉宾与组织方一致好评。</div></div>
      <div class="timeline-item"><div class="timeline-date">2022.08 – 2023.05</div><div class="timeline-content"><strong>本科研究助理 @ 普渡大学</strong><br/>参与四校联合的NSF研究项目，聚焦小学数学课程使用情况。采用混合方法分析教师访谈与课堂数据，并在普渡大学2022年秋季本科生研究大会上赢得学术型海报二等奖。</div></div>
    `;
    // 中文
document.getElementById("publicationTitle").innerText = "发表 ✍️";
document.getElementById("publicationList").innerHTML = `
  <div class="timeline-item">
    <div class="timeline-date">2023</div>
    <div class="timeline-content">
      <strong>小学数学课程材料使用情况的教师研究</strong><br/>
      以第一作者身份发表研究海报，发表于 <em>2023年印第安纳州STEM教育会议</em>。<br/>
      <a href="https://docs.lib.purdue.edu/instemed/2023/posters/2/" target="_blank">🔗 查看发表</a>
    </div>
  </div>
`;

    document.getElementById("projectsTitle").innerText = "项目展示 🎯";
    document.getElementById("projectsHint").innerText = "💡 点击项目图片即可使用或下载";
    document.getElementById("projectList").innerHTML = `
    <div class="project-card">
     <a href="https://murphy-lj09.github.io/timezone-converter/" target="_blank">
    <img src="https://github.com/Murphy-Lj09/Portfolio/blob/main/timezoneconverter.png?raw=true" alt="时区转换器截图" class="project-image">
    </a>
    <div class="project-text">
      <h4>🌍 时区转换器</h4>
      <p>面向留学生面试场景开发轻量时区转换器，解决跨时区时间计算难题。利用Luxon库支持自定义输入与全球全部时区精准转换。上线文本复制、常用时区标星、日历下载、深浅色自动适配等功能。根据用户反馈优化交互细节，并接入Google Analytics分析使用数据。</p>
    </div>
  </div>
  <div class="project-card">
   <a href="https://murphy-lj09.github.io/vibe-sniffer/" target="_blank">
    <img src="https://github.com/Murphy-Lj09/Portfolio/blob/main/vibesniffer.png?raw=true" alt="Vibe Sniffer 截图" class="project-image">
    </a>
    <div class="project-text">
      <h4>🎵 Vibe Sniffer</h4>
      <p>独立设计并开发轻量交互网页产品 Vibe Sniffer，用户输入歌曲关键词后系统识别情绪氛围，动态生成对应界面动画与提示元素，探索“情绪驱动型”交互体验。利用 AIGC 工具（如 GPT）辅助代码编写与页面调试，2 周内高效完成全部功能开发与上线。建立关键词与 10+ 情绪主题的匹配机制，完成视觉设计、动画逻辑与交互流程，实现页面效果与情感反馈一致性
</p>
    </div>
  </div>
  <div class="project-card">
   <a href="https://raw.githubusercontent.com/Murphy-Lj09/Portfolio/main/哥大中美教育论坛手册.pdf" target="_blank">
    <img src="https://github.com/Murphy-Lj09/Portfolio/blob/main/forum.png?raw=true" alt="哥大中美教育论坛截图" class="project-image">
    <div class="project-text">
    </a>
      <h4>📘 哥大中美教育论坛</h4>
      <p>参与哥大中美教育论坛内容与视觉落地，通过Canva完成协同排版。同时担任“AI与教育”分论坛负责人，负责嘉宾统筹与会议流程。最终项目成果覆盖6,000+受众，获嘉宾与组织方一致好评。</p>
    </div>
  </div>
`;

    document.getElementById("resumeTitle").innerText = "简历";
    document.getElementById("resumeLink").innerText = "📄 下载我的简历（PDF）";

    document.getElementById("contactTitle").innerText = "联系方式";
    document.getElementById("emailLabel").innerText = "邮箱：";
    document.getElementById("wechatLabel").innerText = "微信：";

    document.getElementById("menuHome").innerText = "主页";
    document.getElementById("menuAbout").innerText = "关于我";
    document.getElementById("menuProjects").innerText = "项目展示";
    document.getElementById("menuResume").innerText = "简历";
    document.getElementById("menuContact").innerText = "联系方式";

    lang = "zh";
  } else {
    // ===== 英文 =====
    document.getElementById("greeting").innerText = "Hello! 👋";
    document.getElementById("subGreeting").innerText = "My name is Jueqing Li";
    document.getElementById("intro").innerHTML =
      "A bilingual product-minded educator and content strategist.<br/>" +
      "Currently a graduate student at Columbia University (International Educational Development).<br/>" +
      "Exploring the intersection of AI tools, user experience, and educational impact.";
     document.getElementById("learnMoreBtn").innerText = "Learn More";
 

    document.getElementById("aboutTitle").innerText = "About Me";
    document.getElementById("aboutBio").innerHTML =
      "Bilingual educator and product-minded content strategist exploring the intersection of AI tools, user experience, and education.<br/>" +
      "Experienced in content strategy, cross-cultural communication, and digital product prototyping, with both academic and practical achievements.";

    document.getElementById("skillsTitle").innerText = "Skills";
    document.getElementById("skillsList").innerHTML = `
      <span class="skill-badge">Canva (Expert)</span>
      <span class="skill-badge">Xiumi (Advanced)</span>
      <span class="skill-badge">Figma (Basic)</span>
      <span class="skill-badge">HTML / CSS</span>
      <span class="skill-badge">JavaScript (Basic)</span>
      <span class="skill-badge">AI-assisted Prototyping</span>
      <span class="skill-badge">Bilingual Communication</span>
    `;
     // Education
  document.getElementById("educationTitle").innerText = "Education 🎓";
  document.getElementById("educationList").innerHTML = `
    <div class="education-item">
      <strong>Columbia University</strong><br/>
      M.A. in International Educational Development (2024 – 2026, Expected)
    </div>
    <div class="education-item">
      <strong>Purdue University</strong><br/>
      B.A. in Educational Studies (2020 – 2024)<br/>
      Minor in Learning Sciences | GPA: 3.91
    </div>
  `;

    document.getElementById("timelineTitle").innerText = "Experience Timeline";
    document.getElementById("timeline").innerHTML = `
      <div class="timeline-item"><div class="timeline-date">May 2025 – Aug 2025</div><div class="timeline-content"><strong>Marketing Content Strategy Intern @ CheersYou</strong><br/>Planned and published WeChat and Red posts on school selection and student success application stories. Designed attractive visual templates using Canva, aligning with trending topics and policy updates.Achieved 500+ saves across 20+ posts, significantly increasing platform visibility.</div></div>
      <div class="timeline-item"><div class="timeline-date">Dec 2024 – Present</div><div class="timeline-content"><strong>Social Media Growth Intern @ EasyTransfer</strong><br/>Designed and managed Red content targeting Columbia’s Chinese student community, integrating visual storytelling and localized policy insights to build high-retention audience funnels for future conversion. Published weekly visual content with SEO-optimized captions and high-retention formats during semesters.One MetroCard update post reached 10K+ views in 2 hours; total engagement exceeded 45K.</div></div>
      <div class="timeline-item"><div class="timeline-date">Mar 2025 – Apr 2025</div><div class="timeline-content"><strong>Content Strategist @ Columbia China–U.S. Education Forum</strong><br/>Designed bilingual 20-page handbook and coordinated cross-platform editing via Canva. Co-led the “AI in Education” subforum, managing guest list, flow, and technical logistics. Final deliverables reached 6,000+ attendees, with positive feedback from all guest speakers.</div></div>
      <div class="timeline-item"><div class="timeline-date">Aug 2022 – May 2023</div><div class="timeline-content"><strong>Research Assistant, Purdue URT Program</strong><br/>Joined NSF-funded project across four universities on elementary math curriculum use. Applied qualitative and quantitative methods to analyze interview and classroom data. Won second prize for academic posters at Purdue University's 2022 Fall Undergraduate Research Conference.</div></div>
    `;
    
// 英文
document.getElementById("publicationTitle").innerText = "Publication ✍️";
document.getElementById("publicationList").innerHTML = `
  <div class="timeline-item">
    <div class="timeline-date">2023</div>
    <div class="timeline-content">
      <strong>Investigating Elementary Teachers’ Use of Mathematics Curriculum Materials</strong><br/>
      Published research poster as the <em>first author</em> at the <em>2023 Indiana STEM Education Conference</em>.<br/>
      <a href="https://docs.lib.purdue.edu/instemed/2023/posters/2/" target="_blank">🔗 View Publication</a>
    </div>
  </div>
`;


    document.getElementById("projectsTitle").innerText = "Projects 🎯";
    document.getElementById("projectsHint").innerText = "💡 Click on a project image to use or download";
    document.getElementById("projectList").innerHTML = `
    <div class="project-card">
    <a href="https://murphy-lj09.github.io/timezone-converter/" target="_blank">
    <img src="https://github.com/Murphy-Lj09/Portfolio/blob/main/timezoneconverter.png?raw=true" alt="Time Zone Converter Screenshot" class="project-image">
    </a>
    <div class="project-text">
      <h4>🌍 Time Zone Converter</h4>
      <p>Developed a lightweight web app addressing cross-timezone interview pain points for international students. Integrated Luxon library for accurate timezone conversion with custom input. Supports text copy, starred timezone prioritization, .ics calendar export, and theme auto-detection. Iterated UI and tooltip design based on user feedback; added Google Analytics for user tracking.</p>
    </div>
    </div>
    <div class="project-card">
    <a href="https://murphy-lj09.github.io/vibe-sniffer/" target="_blank">
    <img src="https://github.com/Murphy-Lj09/Portfolio/blob/main/vibesniffer.png?raw=true" alt="Vibe Sniffer Screenshot" class="project-image">
    </a>
    <div class="project-text">
      <h4>🎵 Vibe Sniffer</h4>
      <p>Designed the product logic and user experience for a web tool that analyzes song sentiment (e.g., chill, happy, angry) based on keyword inputs; leveraged AI copilots (e.g., ChatGPT) to generate and debug code efficiently. Built and deployed a responsive front-end using HTML/CSS/JavaScript, integrating keyword-based sentiment mapping and AI-assisted logic for real-time genre classification and visualization.</p>
    </div>
    </div>
    <div class="project-card">
    <a href="https://raw.githubusercontent.com/Murphy-Lj09/Portfolio/main/哥大中美教育论坛手册.pdf" target="_blank">
    <img src="https://github.com/Murphy-Lj09/Portfolio/blob/main/forum.png?raw=true" alt="Columbia China–U.S. Education Forum Screenshot" class="project-image">
    </a>
    <div class="project-text">
      <h4>📘 Columbia China–U.S. Education Forum</h4>
      <p>Designed bilingual 20-page handbook and coordinated cross-platform editing via Canva. Co-led the “AI in Education” subforum, managing guest list, flow, and technical logistics. Final deliverables reached 6,000+ attendees, with positive feedback from all guest speakers.</p>
    </div>
  </div>`;

    document.getElementById("resumeTitle").innerText = "Resume";
    document.getElementById("resumeLink").innerText = "📄 Download Resume (PDF)";

    document.getElementById("contactTitle").innerText = "Contact";
    document.getElementById("emailLabel").innerText = "Email:";
    document.getElementById("wechatLabel").innerText = "WeChat:";

    document.getElementById("menuHome").innerText = "Home";
    document.getElementById("menuAbout").innerText = "About";
    document.getElementById("menuProjects").innerText = "Projects";
    document.getElementById("menuResume").innerText = "Resume";
    document.getElementById("menuContact").innerText = "Contact";
    // ✅ Quick links 翻译回英文
    document.getElementById("quickAbout").innerText = "🧑‍💻 About";
    document.getElementById("quickProjects").innerText = "🎯 Projects";
    document.getElementById("quickResume").innerText = "📄 Resume";
    lang = "en";
  }
}
