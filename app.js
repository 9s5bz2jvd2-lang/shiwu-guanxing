/* ============================================================
   食物观星 · Food, Nutrition & Stargazing Learning Hub
   交互脚本（纯本地 JS，无任何外链 / CDN / fetch）
   作者位：作者 / Curated by 王润圆 Runyuan Wang
   ============================================================ */
(function () {
  "use strict";

  /* ---------- 1. 营养资料库数据 ---------- */
  /* 仅做主题导引，不复制公开指南或教材的大段原文。 */
  const LIBRARY_ITEMS = [
    {
      id: "adult-obesity-overview",
      cat: "adult-obesity",
      catLabel: "成人肥胖",
      title: "成人肥胖：从体重到代谢风险",
      body:
        "成人肥胖不只是“体重数字”问题，还与高血压、糖尿病、血脂异常、脂肪肝、关节负担和心理健康等多个方面相关。" +
        "评估时除 BMI 之外，还会同时看腰围、体成分、血糖、血脂、肝酶等指标；干预则强调饮食结构、运动、睡眠、压力等生活方式整体调整。",
      sources: "参考来源：国家卫生健康委员会、中国营养学会、世界卫生组织等成人体重管理科普资料。"
    },
    {
      id: "adult-obesity-redlines",
      cat: "adult-obesity",
      catLabel: "成人肥胖",
      title: "成人肥胖：不替代医生的几条红线",
      body:
        "减重药物（包括 GLP-1 类）、代谢手术、合并慢病的减重方案，均需主管医师评估后再决定；" +
        "营养师在科普层面可以帮助理解饮食、运动、行为习惯，但不开方、不调药、不替代医院的诊疗判断。",
      sources: "参考来源：国家相关临床诊疗规范与营养专业组织公开材料。"
    },
    {
      id: "child-obesity-overview",
      cat: "child-obesity",
      catLabel: "儿童青少年肥胖",
      title: "儿童青少年肥胖：不能简单沿用成人切点",
      body:
        "儿童青少年的身高、体重、体成分都在动态变化，因此判断“超重 / 肥胖”通常使用按年龄与性别的 BMI 百分位曲线，而不是直接套用成人切点。" +
        "在儿童期，关注重点更偏向饮食习惯、家庭饮食结构、屏幕时间与户外活动，而不是节食或追求快速减重。",
      sources: "参考来源：国家卫生健康委员会儿童青少年肥胖相关公开资料、世界卫生组织儿童生长标准。"
    },
    {
      id: "child-obesity-redlines",
      cat: "child-obesity",
      catLabel: "儿童青少年肥胖",
      title: "儿童青少年肥胖：避免被“成人化减重”伤害",
      body:
        "儿童青少年群体里，过度节食、极端低碳水、代餐替代正餐、随意进入减重药物使用，都可能影响生长发育、月经、心理健康。" +
        "面对面评估应由儿科与儿童青少年营养专业人员共同负责；本资料库只做家长侧的科普引导。",
      sources: "参考来源：儿科、儿童青少年营养相关专业组织公开材料。"
    },
    {
      id: "vitamin-d-basics",
      cat: "vitamin-d",
      catLabel: "维生素 D",
      title: "维生素 D：阳光、饮食与补充剂的三足关系",
      body:
        "维生素 D 来源主要包括：皮肤在日晒下合成、富含维生素 D 的食物（如脂肪较高的鱼类、蛋黄、强化乳制品等）以及补充剂。" +
        "缺乏与不足在中国不同地区与人群中都比较常见，但是否需要补充、补多少，要结合年龄、季节、户外时间、肤色、慢病等情况个体化判断。",
      sources: "参考来源：中国营养学会、国家卫生健康委员会、世界卫生组织维生素 D 相关公开科普。"
    },
    {
      id: "vitamin-d-cautions",
      cat: "vitamin-d",
      catLabel: "维生素 D",
      title: "维生素 D：高剂量长期补充并非越多越好",
      body:
        "维生素 D 是脂溶性的，长期高剂量补充并不等于“对身体更好”;过量可能导致高钙血症等问题。" +
        "市面上的部分自媒体把维生素 D 描述成“万能营养素”应保持克制——是否需要检测血清 25(OH)D、是否需要长期补充，请回到医师与营养师面对面评估。",
      sources: "参考来源：中国营养学会维生素 D 公开材料、临床营养相关专业指南。"
    },
    {
      id: "lifestyle-medicine-pillars",
      cat: "lifestyle",
      catLabel: "生活方式医学",
      title: "生活方式医学：六大支柱概览",
      body:
        "生活方式医学通常关注六个互相影响的方面——饮食、运动、睡眠、压力管理、戒烟限酒、社会连结。" +
        "在慢病管理（如高血压、2 型糖尿病、血脂异常、非酒精性脂肪肝、轻中度抑郁焦虑等）中，这六个方面常常被同时关注，而不是单独“补哪一项”。",
      sources: "参考来源：美国生活方式医学学会、国内健康中国与全民健康生活方式行动相关公开材料。"
    },
    {
      id: "lifestyle-sleep-light",
      cat: "lifestyle",
      catLabel: "生活方式医学",
      title: "昼夜节律：白天的阳光与夜里的安静",
      body:
        "规律的作息、白天充足的自然光暴露、夜里减少强光与屏幕刺激，与睡眠质量、代谢健康、情绪调节有关。" +
        "这是一条“健康生活方式”层面的提醒，而不是任何疾病的治疗手段——遇到睡眠障碍或情绪问题，请就诊于相关专科。",
      sources: "参考来源：世界卫生组织、生活方式医学公开科普材料。"
    },
    {
      id: "dietary-guideline-cn",
      cat: "guideline",
      catLabel: "膳食 / 食养指南",
      title: "《中国居民膳食指南（2022）》：八条核心推荐",
      body:
        "面向一般人群的中国居民膳食指南给出八条核心推荐，包括：食物多样合理搭配；吃动平衡；多吃蔬果、奶类、全谷、大豆；适量鱼禽蛋瘦肉；少盐少油、控糖限酒；规律进餐、足量饮水；会烹会选、会看标签；公筷分餐、杜绝浪费。" +
        "这些原则是大方向，不是个体处方。",
      sources: "公开来源：中国营养学会《中国居民膳食指南（2022）》及其面向公众的解读资料。"
    },
    {
      id: "food-medicine-guide",
      cat: "guideline",
      catLabel: "膳食 / 食养指南",
      title: "中国成人慢病食养指南：一个“食”字提醒的视角",
      body:
        "国家卫生健康委员会发布过面向高血压、糖尿病、血脂异常、脂肪肝、儿童青少年肥胖等的成人慢病食养指南，强调“以食物为基础”的生活方式调整，配合医生的临床方案。" +
        "对营养师来说，这些指南是和来访者一起“挑食材、改习惯”的常用参考，但不替代具体的临床方案。",
      sources: "公开来源：国家卫生健康委员会发布的成人慢病食养指南系列。"
    },
    {
      id: "dris-2023",
      cat: "guideline",
      catLabel: "膳食 / 食养指南",
      title: "中国 DRIs（2023 版）：能量与营养素的参考摄入量",
      body:
        "中国居民膳食营养素参考摄入量（DRIs）为不同年龄、性别和生理状态人群给出能量、宏量营养素、维生素与矿物质的参考摄入量，常被作为评估饮食与设定目标的依据。" +
        "DRIs 是“参考”而非“标准答案”；具体到个人时，需要由营养师结合饮食、运动、化验、慢病情况调整。",
      sources: "公开来源：中国营养学会《中国居民膳食营养素参考摄入量（2023 版）》及其公开解读材料。"
    }
  ];

  /* ---------- 2. 营养与星空卡片数据 ---------- */
  const COSMOS_CARDS = [
    {
      icon: "☉",
      title: "太阳系：我们脚下这艘船",
      body:
        "太阳是一颗中等大小的恒星；八大行星按距离从内到外排列，地球处在液态水可以稳定存在的“宜居带”附近。" +
        "围绕行星的还有卫星、矮行星、小行星、彗星等大量小天体。",
      src: "公开资料：NASA Solar System Exploration。"
    },
    {
      icon: "☾",
      title: "月相：月亮其实没有“自己亮”",
      body:
        "月亮本身不发光，我们看到的明暗变化，是月亮、地球、太阳三者相对位置变化时，月球被太阳照亮的部分朝向地球的不同比例。" +
        "一个完整的月相周期大约 29.5 天。",
      src: "公开资料：NASA Space Place（面向公众的入门科普）。"
    },
    {
      icon: "✦",
      title: "流星雨：地球穿过尘埃带",
      body:
        "多数流星雨是地球公转时穿过彗星或小行星留下的尘埃带，颗粒高速进入大气层燃烧发光。" +
        "每年都有相对稳定的活跃日期，例如英仙座、双子座、象限仪座流星雨等。",
      src: "公开资料：NASA Space Place / IAU 公众主题页。"
    },
    {
      icon: "★",
      title: "星座与季节：天空是一个会转的舞台",
      body:
        "国际天文学联合会（IAU）共认定了 88 个星座；不同季节夜晚抬头看到的星空不同，" +
        "是因为地球绕日公转时，夜晚朝向的“宇宙背景”在缓慢变化。",
      src: "公开资料：IAU Constellations 公众页。"
    },
    {
      icon: "◉",
      title: "系外行星：太阳系以外的世界",
      body:
        "系外行星指围绕其他恒星运行的行星，已确认数量超过五千颗。" +
        "其中部分位于其恒星的宜居带，但是否真的“宜居”，还取决于大气、磁场、稳定性等许多因素，远比“距离合适”复杂。",
      src: "公开资料：NASA Exoplanet Exploration。"
    },
    {
      icon: "☼",
      title: "光污染与公众观星",
      body:
        "夜晚天空越来越亮，许多城市居民已经很难肉眼看到银河。" +
        "减少不必要的户外照明、使用向下投光的灯具、参加“暗夜公园”或郊野观星活动，是公众可以参与的小事，对鸟类等夜行生物的节律也有益。",
      src: "公开资料：IAU 公众主题页 / 各地暗夜组织公开材料。"
    }
  ];

  /* ---------- 2b. 观星夜宵场景卡数据 ---------- */
  const NIGHT_SNACK_CARDS = [
    {
      icon: "☄",
      title: "流星雨守候夜",
      scene: "凌晨蹲守流星雨高峰，户外 4–6 小时，气温较低，可能伴随长时间静坐。",
      combo: "无糖酸奶或温牛奶 + 一片全麦面包 + 一小把杏仁 / 核桃；可备一小份香蕉或苹果。",
      why: "蛋白质 + 复合碳水有较稳的饱腹感，坚果提供少量脂肪与能量；避免巧克力派、奶油蛋糕等高糖高脂大份夜宵。",
      tip: "随身带保温杯装温水或淡茶；咖啡因控制在傍晚至前半夜一杯以内，凌晨不再补浓咖啡。"
    },
    {
      icon: "❆",
      title: "冬季高海拔观星",
      scene: "高原 / 山地冬夜目视或拍星，体感低温、活动量小、容易脱水。",
      combo: "热粥 / 杂粮糊 + 一颗水煮蛋 + 少量坚果；额外备一袋小面包或能量低糖的全谷棒。",
      why: "热的粥糊更暖胃也更易消化；蛋白质帮助维持夜间清醒度，碳水提供持续供能。",
      tip: "高海拔更需要补水，少量多次喝温水；避免大量酒精\"暖身\"——会加重脱水、影响判断与睡眠。"
    },
    {
      icon: "✦",
      title: "马路天文志愿者夜",
      scene: "城市 / 校园街边面向公众讲解 2–3 小时，需要清晰说话与较高专注度。",
      combo: "豆浆 / 牛奶 + 全麦三明治（鸡蛋或鸡胸/豆腐）+ 一份番茄或黄瓜；准备一瓶温水放手边。",
      why: "结构均衡、份量适中，不容易让人讲两句就口干或胃胀；蔬菜帮助补水与饱腹。",
      tip: "讲解前 30 分钟尽量不喝大量含气饮料；含糖饮料频繁喝会让喉咙更易干，反而难讲。"
    },
    {
      icon: "☾",
      title: "月圆轻食夜",
      scene: "短时间夜活动（1–2 小时阳台/小区观月、城市暗夜观测体验等）。",
      combo: "一杯热牛奶或无糖酸奶 + 一根香蕉 / 一份小份燕麦碗 / 几片全麦饼干。",
      why: "份量可以再小一些，不要把月圆当作大吃夜宵的理由；轻食足以撑过 1–2 小时活动。",
      tip: "如果第二天早起，今晚最好别再喝咖啡因；助眠从灯光、屏幕、室温入手，而不是靠加餐。"
    },
    {
      icon: "◐",
      title: "通宵拍星 / 值守夜",
      scene: "整夜操作设备或参与天文台 / 科普基地值守，需要在凌晨保持清醒。",
      combo: "把进食拆成 2–3 次小份：晚 9–10 点正餐之外，凌晨 1 点小份谷物 + 蛋白；4–5 点之后尽量只喝水或少量温饮。",
      why: "夜间消化能力下降，把夜宵切小、分次吃，比凌晨一顿大餐更舒服；午夜到凌晨 6 点之间尽量减少进食是文献里反复提到的方向（见下方来源）。",
      tip: "提前规划交班 / 下班后的睡眠时间；早晨回家前可以选清淡早餐，避免空腹睡或高油高糖夜宵后立刻入睡。"
    },
    {
      icon: "☼",
      title: "回家后助眠收尾",
      scene: "拍星 / 值守 / 长时间观星结束后，回到家准备入睡。",
      combo: "一小杯温牛奶或温水 + 少量水果（如香蕉、苹果）；或一小碗温热的小米粥。",
      why: "份量小、温度温和、容易消化，帮助从兴奋状态过渡到入睡；避免再吃辛辣、高油、大份甜食。",
      tip: "卧室光线调暗、屏幕亮度调低；如果连续失眠或情绪低落，请就诊于相关专科，不要靠加餐自我处理。"
    }
  ];

  /* ---------- 3. 工具函数 ---------- */
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((k) => {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    if (Array.isArray(children)) {
      children.forEach((c) => {
        if (c == null) return;
        node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
      });
    } else if (typeof children === "string") {
      node.textContent = children;
    }
    return node;
  }

  function fmt(n, digits) {
    if (n == null || isNaN(n)) return "—";
    const d = digits == null ? 1 : digits;
    return Number(n).toFixed(d);
  }

  /* ---------- 4. 渲染：营养资料库 ---------- */
  const libraryGrid = $("#libraryGrid");
  const filterBar = $(".filter-bar");
  const librarySearch = $("#librarySearch");
  let currentFilter = "all";
  let currentQuery = "";

  function renderLibrary() {
    if (!libraryGrid) return;
    libraryGrid.innerHTML = "";
    const q = currentQuery.trim().toLowerCase();
    const items = LIBRARY_ITEMS.filter((it) => {
      const catOk = currentFilter === "all" || it.cat === currentFilter;
      if (!catOk) return false;
      if (!q) return true;
      const hay = (it.title + " " + it.body + " " + it.catLabel).toLowerCase();
      return hay.indexOf(q) !== -1;
    });

    if (!items.length) {
      libraryGrid.appendChild(
        el("div", { class: "lib-card" }, [
          el("p", { class: "muted" }, "没有匹配的条目。可以试试切换标签或清空搜索框。")
        ])
      );
      return;
    }

    items.forEach((it) => {
      const card = el("article", { class: "lib-card", "data-cat": it.cat }, [
        el("span", { class: "lib-tag", text: it.catLabel }),
        el("h3", { text: it.title }),
        el("p", { text: it.body }),
        el("div", { class: "lib-sources", html: "<strong>来源：</strong>" + it.sources })
      ]);
      libraryGrid.appendChild(card);
    });
  }

  if (filterBar) {
    filterBar.addEventListener("click", function (e) {
      const btn = e.target.closest(".chip");
      if (!btn) return;
      $$(".chip", filterBar).forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      currentFilter = btn.getAttribute("data-filter") || "all";
      renderLibrary();
    });
  }
  if (librarySearch) {
    librarySearch.addEventListener("input", function (e) {
      currentQuery = e.target.value || "";
      renderLibrary();
    });
  }
  renderLibrary();

  /* ---------- 5. 渲染：营养与星空卡片 ---------- */
  const cosmosGrid = $("#cosmosGrid");
  if (cosmosGrid) {
    COSMOS_CARDS.forEach((c) => {
      const card = el("article", { class: "cosmos-card" }, [
        el("div", { class: "cosmos-icon", "aria-hidden": "true", text: c.icon }),
        el("h3", { text: c.title }),
        el("p", { text: c.body }),
        el("p", { class: "src", text: c.src })
      ]);
      cosmosGrid.appendChild(card);
    });
  }

  /* ---------- 6. 小工具 · BMI ---------- */
  const bmiOutput = $("#bmiOutput");
  const bmiH = $("#bmiHeight");
  const bmiW = $("#bmiWeight");

  function classifyBmi(b) {
    if (b < 18.5) return { label: "体重过低", cls: "out-warn" };
    if (b < 24) return { label: "正常范围", cls: "out-ok" };
    if (b < 28) return { label: "超重", cls: "out-warn" };
    return { label: "肥胖", cls: "out-danger" };
  }

  function computeBmi() {
    if (!bmiH || !bmiW || !bmiOutput) return;
    const h = parseFloat(bmiH.value);
    const w = parseFloat(bmiW.value);
    if (!h || !w || h < 80 || h > 230 || w < 20 || w > 250) {
      bmiOutput.className = "calc-output empty";
      bmiOutput.textContent = "请输入身高和体重";
      return;
    }
    const bmi = w / Math.pow(h / 100, 2);
    const cls = classifyBmi(bmi);
    bmiOutput.className = "calc-output";
    bmiOutput.innerHTML =
      '<span class="out-line"><span class="out-strong">BMI = ' +
      fmt(bmi, 1) +
      ' kg/m²</span></span>' +
      '<span class="out-line">分级：<span class="' +
      cls.cls +
      '">' +
      cls.label +
      "</span>（中国成人参考切点）</span>";
  }
  [bmiH, bmiW].forEach((n) => n && n.addEventListener("input", computeBmi));
  computeBmi();

  /* ---------- 7. 小工具 · 能量需求粗估 ---------- */
  const eeSex = $("#eeSex");
  const eeAge = $("#eeAge");
  const eeHeight = $("#eeHeight");
  const eeWeight = $("#eeWeight");
  const eeActivity = $("#eeActivity");
  const eeOutput = $("#eeOutput");

  function computeEnergy() {
    if (!eeOutput) return;
    const sex = eeSex ? eeSex.value : "female";
    const age = parseFloat(eeAge && eeAge.value);
    const h = parseFloat(eeHeight && eeHeight.value);
    const w = parseFloat(eeWeight && eeWeight.value);
    const act = parseFloat(eeActivity && eeActivity.value);
    if (!age || !h || !w || !act || age < 10 || age > 100 || h < 120 || h > 220 || w < 30 || w > 200) {
      eeOutput.className = "calc-output empty";
      eeOutput.textContent = "请填完上面四项";
      return;
    }
    // Mifflin-St Jeor
    let bmr = 10 * w + 6.25 * h - 5 * age;
    bmr += sex === "male" ? 5 : -161;
    const tdee = bmr * act;
    const protLo = Math.round((tdee * 0.10) / 4);
    const protHi = Math.round((tdee * 0.20) / 4);
    const fatLo = Math.round((tdee * 0.20) / 9);
    const fatHi = Math.round((tdee * 0.30) / 9);
    const carbLo = Math.round((tdee * 0.50) / 4);
    const carbHi = Math.round((tdee * 0.65) / 4);

    eeOutput.className = "calc-output";
    eeOutput.innerHTML =
      '<span class="out-line"><span class="out-strong">基础代谢 BMR ≈ ' +
      Math.round(bmr) +
      " kcal/天</span></span>" +
      '<span class="out-line"><span class="out-strong">一日能量需求 ≈ ' +
      Math.round(tdee) +
      " kcal/天</span>（粗估）</span>" +
      '<span class="out-line">蛋白质参考区间：' +
      protLo +
      "–" +
      protHi +
      " g/天；脂肪：" +
      fatLo +
      "–" +
      fatHi +
      " g/天；碳水化合物：" +
      carbLo +
      "–" +
      carbHi +
      " g/天。</span>";
  }
  [eeSex, eeAge, eeHeight, eeWeight, eeActivity].forEach(
    (n) => n && n.addEventListener("input", computeEnergy)
  );
  computeEnergy();

  /* ---------- 8. 小工具 · 三大宏量比例 ---------- */
  const macroEnergy = $("#macroEnergy");
  const macroPattern = $("#macroPattern");
  const macroOutput = $("#macroOutput");

  const PATTERNS = {
    balanced: { label: "均衡型", carb: 0.5, fat: 0.3, prot: 0.2 },
    "higher-protein": { label: "高蛋白型", carb: 0.45, fat: 0.3, prot: 0.25 },
    "moderate-low-carb": { label: "中低碳水型", carb: 0.4, fat: 0.35, prot: 0.25 }
  };

  function computeMacro() {
    if (!macroOutput) return;
    const kcal = parseFloat(macroEnergy && macroEnergy.value);
    const p = macroPattern && macroPattern.value;
    if (!kcal || kcal < 800 || kcal > 4000 || !PATTERNS[p]) {
      macroOutput.className = "calc-output empty";
      macroOutput.textContent = "请输入目标能量";
      return;
    }
    const pat = PATTERNS[p];
    const carbG = Math.round((kcal * pat.carb) / 4);
    const fatG = Math.round((kcal * pat.fat) / 9);
    const protG = Math.round((kcal * pat.prot) / 4);
    macroOutput.className = "calc-output";
    macroOutput.innerHTML =
      '<span class="out-line"><span class="out-strong">结构：' +
      pat.label +
      "</span>（碳水 " +
      Math.round(pat.carb * 100) +
      "% / 脂 " +
      Math.round(pat.fat * 100) +
      "% / 蛋白 " +
      Math.round(pat.prot * 100) +
      "%）</span>" +
      '<span class="out-line">碳水化合物 ≈ ' +
      carbG +
      " g/天；脂肪 ≈ " +
      fatG +
      " g/天；蛋白质 ≈ " +
      protG +
      " g/天。</span>" +
      '<span class="out-line">（基于目标能量 ' +
      Math.round(kcal) +
      " kcal 估算，1 g 碳水 / 蛋白 ≈ 4 kcal，1 g 脂肪 ≈ 9 kcal）</span>";
  }
  [macroEnergy, macroPattern].forEach((n) => n && n.addEventListener("input", computeMacro));
  computeMacro();

  /* ---------- 9. 小工具 · 钠 / 膳食纤维 ---------- */
  const saltGrams = $("#saltGrams");
  const fiberGrams = $("#fiberGrams");
  const naFiberOutput = $("#naFiberOutput");

  function computeNaFiber() {
    if (!naFiberOutput) return;
    const salt = parseFloat(saltGrams && saltGrams.value);
    const fiber = parseFloat(fiberGrams && fiberGrams.value);
    const hasSalt = !isNaN(salt) && salt >= 0;
    const hasFiber = !isNaN(fiber) && fiber >= 0;
    if (!hasSalt && !hasFiber) {
      naFiberOutput.className = "calc-output empty";
      naFiberOutput.textContent = "请填写一项或两项";
      return;
    }

    const lines = [];
    if (hasSalt) {
      const sodiumMg = Math.round(salt * 400); // 1 g 盐 ≈ 400 mg 钠
      let saltCls = "out-ok";
      let saltMsg = "在《中国居民膳食指南（2022）》建议范围内（&lt; 5 g/天）。";
      if (salt > 5 && salt <= 8) {
        saltCls = "out-warn";
        saltMsg = "略偏高（指南建议 &lt; 5 g/天），可以从家里的炒菜、外卖、加工食品的总盐量上一起观察。";
      } else if (salt > 8) {
        saltCls = "out-danger";
        saltMsg = "明显偏高（指南建议 &lt; 5 g/天），高血压、慢性肾病等人群更需要重点控盐。";
      }
      lines.push(
        '<span class="out-line">食盐 ≈ <span class="out-strong">' +
          fmt(salt, 1) +
          " g</span>（约相当于钠 " +
          sodiumMg +
          ' mg）<span class="out-line">→ <span class="' +
          saltCls +
          '">' +
          saltMsg +
          "</span></span></span>"
      );
    }
    if (hasFiber) {
      let fiberCls = "out-ok";
      let fiberMsg = "在 25–30 g 推荐范围附近。";
      if (fiber < 15) {
        fiberCls = "out-danger";
        fiberMsg = "明显偏低（推荐 25–30 g/天）。可以多增加全谷、蔬菜、豆类与水果。";
      } else if (fiber < 25) {
        fiberCls = "out-warn";
        fiberMsg = "略偏低（推荐 25–30 g/天）。可以从主食里加一些全谷或粗杂粮。";
      } else if (fiber > 50) {
        fiberCls = "out-warn";
        fiberMsg = "比较高；通常没问题，但消化系统较敏感的人需注意循序渐进、保证饮水。";
      }
      lines.push(
        '<span class="out-line">膳食纤维 ≈ <span class="out-strong">' +
          fmt(fiber, 1) +
          ' g</span><span class="out-line">→ <span class="' +
          fiberCls +
          '">' +
          fiberMsg +
          "</span></span></span>"
      );
    }
    naFiberOutput.className = "calc-output";
    naFiberOutput.innerHTML = lines.join("");
  }
  [saltGrams, fiberGrams].forEach((n) => n && n.addEventListener("input", computeNaFiber));
  computeNaFiber();

  /* ---------- 10. 渲染：观星夜宵场景卡 ---------- */
  const nightsnackGrid = $("#nightsnackGrid");
  if (nightsnackGrid) {
    NIGHT_SNACK_CARDS.forEach((c) => {
      const card = el("article", { class: "snack-card" }, [
        el("div", { class: "snack-icon", "aria-hidden": "true", text: c.icon }),
        el("h3", { text: c.title }),
        el("div", { class: "snack-row" }, [
          el("span", { class: "snack-key", text: "适合场景" }),
          el("span", { class: "snack-val", text: c.scene })
        ]),
        el("div", { class: "snack-row" }, [
          el("span", { class: "snack-key", text: "推荐搭配" }),
          el("span", { class: "snack-val", text: c.combo })
        ]),
        el("div", { class: "snack-row" }, [
          el("span", { class: "snack-key", text: "为什么这样吃" }),
          el("span", { class: "snack-val", text: c.why })
        ]),
        el("div", { class: "snack-row" }, [
          el("span", { class: "snack-key snack-key-tip", text: "提醒" }),
          el("span", { class: "snack-val", text: c.tip })
        ])
      ]);
      nightsnackGrid.appendChild(card);
    });
  }

  /* ---------- 11. 小工具 · 月相粗估（本地算法） ---------- */
  /* 基准朔月：2000-01-06 18:14 UTC；朔望月平均长度 29.530588853 天 */
  const SYNODIC_MONTH = 29.530588853;
  const NEW_MOON_REF_MS = Date.UTC(2000, 0, 6, 18, 14, 0); // 月份 0-based

  function moonAgeDays(dateObj) {
    const diffDays = (dateObj.getTime() - NEW_MOON_REF_MS) / 86400000;
    let age = diffDays % SYNODIC_MONTH;
    if (age < 0) age += SYNODIC_MONTH;
    return age;
  }

  function phaseFromAge(age) {
    // 把月龄映射到八个常见月相名（每相约 3.69 天宽窗口）
    const w = SYNODIC_MONTH / 8;
    if (age < w * 0.5 || age >= SYNODIC_MONTH - w * 0.5) return { name: "新月", icon: "○" };
    if (age < w * 1.5) return { name: "蛾眉月（盈）", icon: "🌒" };
    if (age < w * 2.5) return { name: "上弦月", icon: "🌓" };
    if (age < w * 3.5) return { name: "盈凸月", icon: "🌔" };
    if (age < w * 4.5) return { name: "满月", icon: "●" };
    if (age < w * 5.5) return { name: "亏凸月", icon: "🌖" };
    if (age < w * 6.5) return { name: "下弦月", icon: "🌗" };
    return { name: "残月（亏）", icon: "🌘" };
  }

  function illuminationPct(age) {
    // 近似：亮面比例 = (1 - cos(2π·月龄/朔望月)) / 2
    const frac = (1 - Math.cos((2 * Math.PI * age) / SYNODIC_MONTH)) / 2;
    return Math.round(frac * 100);
  }

  const moonDate = $("#moonDate");
  const moonOutput = $("#moonOutput");

  function pad2(n) { return n < 10 ? "0" + n : "" + n; }
  function todayLocalISO() {
    const d = new Date();
    return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
  }

  function renderMoon() {
    if (!moonOutput) return;
    const v = moonDate && moonDate.value;
    if (!v) {
      moonOutput.className = "calc-output skywatch-output empty";
      moonOutput.textContent = "请选择一个日期";
      return;
    }
    // 解析为本地 20:00（多数夜间观测发生在傍晚后）
    const parts = v.split("-");
    if (parts.length !== 3) {
      moonOutput.className = "calc-output skywatch-output empty";
      moonOutput.textContent = "日期格式不正确";
      return;
    }
    const y = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    const d = parseInt(parts[2], 10);
    if (!y || !m || !d) {
      moonOutput.className = "calc-output skywatch-output empty";
      moonOutput.textContent = "日期格式不正确";
      return;
    }
    const dateObj = new Date(y, m - 1, d, 20, 0, 0);
    const age = moonAgeDays(dateObj);
    const phase = phaseFromAge(age);
    const pct = illuminationPct(age);
    const trend = (() => {
      const nextAge = moonAgeDays(new Date(dateObj.getTime() + 86400000));
      const nextPct = illuminationPct(nextAge);
      if (nextPct > pct + 1) return "亮面趋势：盈（变亮）";
      if (nextPct < pct - 1) return "亏（变暗）";
      return "亮面趋势：接近峰值";
    })();

    moonOutput.className = "calc-output skywatch-output";
    moonOutput.innerHTML =
      '<span class="out-line"><span class="moon-icon" aria-hidden="true">' + phase.icon + "</span> " +
      '<span class="out-strong">' + phase.name + "</span></span>" +
      '<span class="out-line">月龄约 <strong>' + fmt(age, 1) + " 天</strong> · 亮面比例约 <strong>" + pct + "%</strong></span>" +
      '<span class="out-line">' + trend + "</span>" +
      '<span class="out-line muted">科普粗估，正式观测请查 NASA / Timeanddate / 当地天文台。</span>';
  }
  if (moonDate) {
    moonDate.value = todayLocalISO();
    moonDate.addEventListener("input", renderMoon);
    renderMoon();
  }

  /* ---------- 食谱快速查询 ---------- */
  const recipeSearch = document.querySelector("#recipeSearch");
  const recipeCards = Array.from(document.querySelectorAll(".recipe-card"));
  if (recipeSearch && recipeCards.length) {
    recipeSearch.addEventListener("input", function () {
      const q = this.value.trim().toLowerCase();
      recipeCards.forEach((card) => {
        const key = (card.getAttribute("data-recipe-key") || card.textContent || "").toLowerCase();
        card.style.display = !q || key.includes(q) ? "" : "none";
      });
    });
  }


  /* ---------- 原文与食谱查询库 ---------- */
  const sourceTextSearch = document.querySelector("#sourceTextSearch");
  const sourceTextCards = Array.from(document.querySelectorAll(".source-text-card"));
  if (sourceTextSearch && sourceTextCards.length) {
    sourceTextSearch.addEventListener("input", function () {
      const q = this.value.trim().toLowerCase();
      sourceTextCards.forEach((card) => {
        const key = (card.getAttribute("data-source-key") || card.textContent || "").toLowerCase();
        card.style.display = !q || key.includes(q) ? "" : "none";
      });
    });
  }
})();
