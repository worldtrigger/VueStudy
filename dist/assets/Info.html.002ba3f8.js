import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.b1ecf8d0.js";const t={},i=e(`<h2 id="vue\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#vue\u7684\u5B89\u88C5" aria-hidden="true">#</a> VUE\u7684\u5B89\u88C5</h2><div class="custom-container info"><p class="custom-container-title">\u5907\u6CE8</p><p>\u5728VUE\u91CC\u9762\u5B89\u88C5\u65B9\u5F0F\u6709\u4E24\u79CD</p><p>1.\u7B2C\u4E00\u79CD\u7684\u5B89\u88C5\u65B9\u5F0F\u7684\u6253\u5305\u5DE5\u5177\u662Fwebpack</p><p>2.\u7B2C\u4E8C\u79CD\u5B89\u88C5\u65B9\u5F0F\u7684\u6253\u5305\u5DE5\u5177\u662Fvite(vite\u4E0D\u652F\u6301vue2)</p></div><h2 id="webpack-\u5B89\u88C5\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#webpack-\u5B89\u88C5\u65B9\u5F0F" aria-hidden="true">#</a> Webpack \u5B89\u88C5\u65B9\u5F0F</h2><h3 id="\u5148\u5B89\u88C5\u811A\u624B\u67B6" tabindex="-1"><a class="header-anchor" href="#\u5148\u5B89\u88C5\u811A\u624B\u67B6" aria-hidden="true">#</a> \u5148\u5B89\u88C5\u811A\u624B\u67B6</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">npm</span> i @vue/cli <span class="token parameter variable">-g</span>
or
<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
vue create \u9879\u76EE\u540D\u79F0<span class="token punctuation">(</span>\u5FC5\u987B\u5C0F\u5199<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6B63\u5F0F\u5B89\u88C5\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5F0F\u5B89\u88C5\u6B65\u9AA4" aria-hidden="true">#</a> \u6B63\u5F0F\u5B89\u88C5\u6B65\u9AA4</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Vue CLI v3.3.0
? Please pick a preset: <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> default <span class="token punctuation">(</span>babel, eslint<span class="token punctuation">)</span>
  Manually <span class="token keyword">select</span> features

\u5B83\u7684\u610F\u601D\u662F\u9009\u62E9\u9ED8\u8BA4\u8FD8\u662F\u624B\u52A8\u9009\u62E9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7A7A\u683C\u8868\u793A\u9009\u62E9-\u56DE\u8F66\u8868\u793A\u4E0B\u4E00\u6B65" tabindex="-1"><a class="header-anchor" href="#\u7A7A\u683C\u8868\u793A\u9009\u62E9-\u56DE\u8F66\u8868\u793A\u4E0B\u4E00\u6B65" aria-hidden="true">#</a> \u7A7A\u683C\u8868\u793A\u9009\u62E9,\u56DE\u8F66\u8868\u793A\u4E0B\u4E00\u6B65</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
Vue CLI v3.3.0
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select, <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all, <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert selection<span class="token punctuation">)</span>
<span class="token operator">&gt;</span><span class="token punctuation">(</span>*<span class="token punctuation">)</span> Babel
 <span class="token punctuation">(</span> <span class="token punctuation">)</span> TypeScript
 <span class="token punctuation">(</span> <span class="token punctuation">)</span> Progressive Web App <span class="token punctuation">(</span>PWA<span class="token punctuation">)</span> Support
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Router
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Vuex
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> CSS Pre-processors
 <span class="token punctuation">(</span>*<span class="token punctuation">)</span> Linter / Formatter
 <span class="token punctuation">(</span> <span class="token punctuation">)</span> Unit Testing
 <span class="token punctuation">(</span> <span class="token punctuation">)</span> E2E Testing


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8BA9\u4F60\u9009\u62E9\u662Fvue2\u8FD8\u662Fvue3" tabindex="-1"><a class="header-anchor" href="#\u8BA9\u4F60\u9009\u62E9\u662Fvue2\u8FD8\u662Fvue3" aria-hidden="true">#</a> \u8BA9\u4F60\u9009\u62E9\u662Fvue2\u8FD8\u662Fvue3</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Choose a version of Vue.js that you want to start the project with <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>
<span class="token operator">&gt;</span> <span class="token number">3</span>.x
  <span class="token number">2</span>.x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6A21\u5757\u5B89\u88C5\u8BE2\u95EE-\u56E0\u4E3A\u5B89\u88C5\u4E86router-\u6240\u4EE5\u4F1A\u5F39\u51FAy" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5B89\u88C5\u8BE2\u95EE-\u56E0\u4E3A\u5B89\u88C5\u4E86router-\u6240\u4EE5\u4F1A\u5F39\u51FAy" aria-hidden="true">#</a> \u6A21\u5757\u5B89\u88C5\u8BE2\u95EE \u56E0\u4E3A\u5B89\u88C5\u4E86router \u6240\u4EE5\u4F1A\u5F39\u51FAY</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
Vue <span class="token constant">CLI</span> v3<span class="token punctuation">.</span><span class="token number">3.0</span>
<span class="token operator">?</span> Please pick a preset<span class="token operator">:</span> Manually select features
<span class="token operator">?</span> Check the features needed <span class="token keyword">for</span> your project<span class="token operator">:</span> Babel<span class="token punctuation">,</span> Router<span class="token punctuation">,</span> Vuex<span class="token punctuation">,</span> <span class="token constant">CSS</span> Pre<span class="token operator">-</span>processors<span class="token punctuation">,</span> Linter
<span class="token operator">?</span> Use history mode <span class="token keyword">for</span> router<span class="token operator">?</span> <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token constant">Y</span><span class="token operator">/</span>n<span class="token punctuation">)</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540E\u9762\u8FD8\u6709\u51E0\u6B65\u6211\u5C31\u4E0D\u5217\u4E3E\u4E86-\u53D1\u4E2A\u6C47\u603B\u7248\u672C\u7684" tabindex="-1"><a class="header-anchor" href="#\u540E\u9762\u8FD8\u6709\u51E0\u6B65\u6211\u5C31\u4E0D\u5217\u4E3E\u4E86-\u53D1\u4E2A\u6C47\u603B\u7248\u672C\u7684" aria-hidden="true">#</a> \u540E\u9762\u8FD8\u6709\u51E0\u6B65\u6211\u5C31\u4E0D\u5217\u4E3E\u4E86 \u53D1\u4E2A\u6C47\u603B\u7248\u672C\u7684</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
Vue CLI v3.3.0
? Please pick a preset: Manually <span class="token keyword">select</span> features
? Check the features needed <span class="token keyword">for</span> your project: Babel, Router, Vuex, CSS Pre-processors, Linter
? Use <span class="token function">history</span> mode <span class="token keyword">for</span> router? <span class="token punctuation">(</span>Requires proper server setup <span class="token keyword">for</span> index fallback <span class="token keyword">in</span> production<span class="token punctuation">)</span> Yes
? Pick a CSS pre-processor <span class="token punctuation">(</span>PostCSS, Autoprefixer and CSS Modules are supported by default<span class="token punctuation">)</span>: Less
? Pick a linter / formatter config: Prettier
? Pick additional lint features: <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select, <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all, <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert selection<span class="token punctuation">)</span>Lint on save
? Where <span class="token keyword">do</span> you prefer placing config <span class="token keyword">for</span> Babel, PostCSS, ESLint, etc.? In package.json
? Save this as a preset <span class="token keyword">for</span> future projects? <span class="token punctuation">(</span>y/N<span class="token punctuation">)</span> N //\u662F\u5426\u8BB0\u5F55\u4E0B\uFF0C\u4EE5\u4FBF\u4E0B\u6B21\u7EE7\u7EED\u4F7F\u7528\u8FD9\u5957\u914D\u7F6E


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u6700\u540E\u4E00\u6B65" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u6700\u540E\u4E00\u6B65" aria-hidden="true">#</a> \u5B89\u88C5\u6700\u540E\u4E00\u6B65</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
cd demo1  <span class="token comment">// \u8FDB\u5165\u9879\u76EE\u76EE\u5F55 \u8FD9\u91CCdemo1\u5C31\u662F\u4F60\u4E00\u4E0A\u6765create \u90A3\u4E2A\u540D\u79F0</span>
npm run serve  <span class="token comment">// \u8FD9\u91CC\u548C2\u4E0D\u4E00\u6837\u4E86\u30022\u662Frun dev \u800C 3 \u662Frun serve</span>

<span class="token constant">DONE</span>  Compiled successfully <span class="token keyword">in</span> 2232ms                                                                                                                                                                        App running at<span class="token operator">:</span>
  <span class="token operator">-</span> Local<span class="token operator">:</span>   http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">localhost:8080</span><span class="token regex-delimiter">/</span></span>
  <span class="token operator">-</span> Network<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">192.168.0.8:8080</span><span class="token regex-delimiter">/</span></span>

  Note that the development build is not optimized<span class="token punctuation">.</span>
  To create a production build<span class="token punctuation">,</span> run npm run build<span class="token punctuation">.</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAvue-config-js\u91CC\u9762\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAvue-config-js\u91CC\u9762\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAvue.config.js\u91CC\u9762\u7684\u914D\u7F6E</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
// vue.config.js \u914D\u7F6E\u8BF4\u660E
//\u5B98\u65B9vue.config.js \u53C2\u8003\u6587\u6863 https://cli.vuejs.org/zh/config/<span class="token comment">#css-loaderoptions</span>
// \u8FD9\u91CC\u53EA\u5217\u4E00\u90E8\u5206\uFF0C\u5177\u4F53\u914D\u7F6E\u53C2\u8003\u6587\u6863
module.exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  //\u522B\u540D\u8BBE\u7F6E
  configureWebpack: <span class="token punctuation">{</span>
    resolve: <span class="token punctuation">{</span>
      alias: <span class="token punctuation">{</span>
        assets: <span class="token string">&quot;@/assets&quot;</span>,
        components: <span class="token string">&quot;@/components&quot;</span>,
        views: <span class="token string">&quot;@/views&quot;</span>,
      <span class="token punctuation">}</span>,
    <span class="token punctuation">}</span>,
  <span class="token punctuation">}</span>,
  // \u90E8\u7F72\u751F\u4EA7\u73AF\u5883\u548C\u5F00\u53D1\u73AF\u5883\u4E0B\u7684URL\u3002
  // \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CVue CLI \u4F1A\u5047\u8BBE\u4F60\u7684\u5E94\u7528\u662F\u88AB\u90E8\u7F72\u5728\u4E00\u4E2A\u57DF\u540D\u7684\u6839\u8DEF\u5F84\u4E0A
  //\u4F8B\u5982 https://www.my-app.com/\u3002\u5982\u679C\u5E94\u7528\u88AB\u90E8\u7F72\u5728\u4E00\u4E2A\u5B50\u8DEF\u5F84\u4E0A\uFF0C\u4F60\u5C31\u9700\u8981\u7528\u8FD9\u4E2A\u9009\u9879\u6307\u5B9A\u8FD9\u4E2A\u5B50\u8DEF\u5F84\u3002\u4F8B\u5982\uFF0C\u5982\u679C\u4F60\u7684\u5E94\u7528\u88AB\u90E8\u7F72\u5728 https://www.my-app.com/my-app/\uFF0C\u5219\u8BBE\u7F6E baseUrl \u4E3A /my-app/\u3002
  baseUrl: p<wbr>rocess.env.NODE_ENV <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">&quot;production&quot;</span> ? <span class="token string">&quot;./&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;/&quot;</span>,

  // outputDir: \u5728npm run build \u6216 <span class="token function">yarn</span> build \u65F6 \uFF0C\u751F\u6210\u6587\u4EF6\u7684\u76EE\u5F55\u540D\u79F0\uFF08\u8981\u548CbaseUrl\u7684\u751F\u4EA7\u73AF\u5883\u8DEF\u5F84\u4E00\u81F4\uFF09
  outputDir: <span class="token string">&quot;dist&quot;</span>,
  //\u7528\u4E8E\u653E\u7F6E\u751F\u6210\u7684\u9759\u6001\u8D44\u6E90 <span class="token punctuation">(</span>js\u3001css\u3001img\u3001fonts<span class="token punctuation">)</span> \u7684\uFF1B\uFF08\u9879\u76EE\u6253\u5305\u4E4B\u540E\uFF0C\u9759\u6001\u8D44\u6E90\u4F1A\u653E\u5728\u8FD9\u4E2A\u6587\u4EF6\u5939\u4E0B\uFF09
  assetsDir: <span class="token string">&quot;assets&quot;</span>,
  //\u6307\u5B9A\u751F\u6210\u7684 index.html \u7684\u8F93\u51FA\u8DEF\u5F84  <span class="token punctuation">(</span>\u6253\u5305\u4E4B\u540E\uFF0C\u6539\u53D8\u7CFB\u7EDF\u9ED8\u8BA4\u7684index.html\u7684\u6587\u4EF6\u540D<span class="token punctuation">)</span>
  // indexPath: <span class="token string">&quot;myIndex.html&quot;</span>,
  //\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u751F\u6210\u7684\u9759\u6001\u8D44\u6E90\u5728\u5B83\u4EEC\u7684\u6587\u4EF6\u540D\u4E2D\u5305\u542B\u4E86 <span class="token builtin class-name">hash</span> \u4EE5\u4FBF\u66F4\u597D\u7684\u63A7\u5236\u7F13\u5B58\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u5C06\u8FD9\u4E2A\u9009\u9879\u8BBE\u4E3A <span class="token boolean">false</span> \u6765\u5173\u95ED\u6587\u4EF6\u540D\u54C8\u5E0C\u3002<span class="token punctuation">(</span>false\u7684\u65F6\u5019\u5C31\u662F\u8BA9\u539F\u6765\u7684\u6587\u4EF6\u540D\u4E0D\u6539\u53D8<span class="token punctuation">)</span>
  filenameHashing: false,

  //   lintOnSave\uFF1A<span class="token punctuation">{</span> type:Boolean default:true <span class="token punctuation">}</span> \u95EE\u4F60\u662F\u5426\u4F7F\u7528eslint
  lintOnSave: true,
  //\u5982\u679C\u4F60\u60F3\u8981\u5728\u751F\u4EA7\u6784\u5EFA\u65F6\u7981\u7528 eslint-loader\uFF0C\u4F60\u53EF\u4EE5\u7528\u5982\u4E0B\u914D\u7F6E
  // lintOnSave: p<wbr>rocess.env.NODE_ENV <span class="token operator">!=</span><span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>,

  //\u662F\u5426\u4F7F\u7528\u5305\u542B\u8FD0\u884C\u65F6\u7F16\u8BD1\u5668\u7684 Vue \u6784\u5EFA\u7248\u672C\u3002\u8BBE\u7F6E\u4E3A <span class="token boolean">true</span> \u540E\u4F60\u5C31\u53EF\u4EE5\u5728 Vue \u7EC4\u4EF6\u4E2D\u4F7F\u7528 template \u9009\u9879\u4E86\uFF0C\u4F46\u662F\u8FD9\u4F1A\u8BA9\u4F60\u7684\u5E94\u7528\u989D\u5916\u589E\u52A0 10kb \u5DE6\u53F3\u3002<span class="token punctuation">(</span>\u9ED8\u8BA4false<span class="token punctuation">)</span>
  // runtimeCompiler: false,

  /**
   * \u5982\u679C\u4F60\u4E0D\u9700\u8981\u751F\u4EA7\u73AF\u5883\u7684 <span class="token builtin class-name">source</span> map\uFF0C\u53EF\u4EE5\u5C06\u5176\u8BBE\u7F6E\u4E3A <span class="token boolean">false</span> \u4EE5\u52A0\u901F\u751F\u4EA7\u73AF\u5883\u6784\u5EFA\u3002
   *  \u6253\u5305\u4E4B\u540E\u53D1\u73B0map\u6587\u4EF6\u8FC7\u5927\uFF0C\u9879\u76EE\u6587\u4EF6\u4F53\u79EF\u5F88\u5927\uFF0C\u8BBE\u7F6E\u4E3Afalse\u5C31\u53EF\u4EE5\u4E0D\u8F93\u51FAmap\u6587\u4EF6
   *  map\u6587\u4EF6\u7684\u4F5C\u7528\u5728\u4E8E\uFF1A\u9879\u76EE\u6253\u5305\u540E\uFF0C\u4EE3\u7801\u90FD\u662F\u7ECF\u8FC7\u538B\u7F29\u52A0\u5BC6\u7684\uFF0C\u5982\u679C\u8FD0\u884C\u65F6\u62A5\u9519\uFF0C\u8F93\u51FA\u7684\u9519\u8BEF\u4FE1\u606F\u65E0\u6CD5\u51C6\u786E\u5F97\u77E5\u662F\u54EA\u91CC\u7684\u4EE3\u7801\u62A5\u9519\u3002
   *  \u6709\u4E86map\u5C31\u53EF\u4EE5\u50CF\u672A\u52A0\u5BC6\u7684\u4EE3\u7801\u4E00\u6837\uFF0C\u51C6\u786E\u7684\u8F93\u51FA\u662F\u54EA\u4E00\u884C\u54EA\u4E00\u5217\u6709\u9519\u3002
   * */
  productionSourceMap: false,

  // \u5B83\u652F\u6301webPack-dev-server\u7684\u6240\u6709\u9009\u9879
  devServer: <span class="token punctuation">{</span>
    /* \u8FD9\u91CC\u6709\u4E2A\u524D\u63D0\u5FC5\u987B\u5F15\u5165\u6587\u4EF6
     const appData <span class="token operator">=</span> require<span class="token punctuation">(</span><span class="token string">&quot;./data.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     const seller <span class="token operator">=</span> appData.seller<span class="token punctuation">;</span>
     const goods <span class="token operator">=</span> appData.goods<span class="token punctuation">;</span>
     const ratings <span class="token operator">=</span> appData.ratings<span class="token punctuation">;</span>
    */
    before<span class="token punctuation">(</span>app<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      app.get<span class="token punctuation">(</span><span class="token string">&quot;/api/seller&quot;</span>, <span class="token keyword">function</span> <span class="token punctuation">(</span>req, res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res.json<span class="token punctuation">(</span><span class="token punctuation">{</span>
          errno: <span class="token number">0</span>,
          data: seller,
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      app.get<span class="token punctuation">(</span><span class="token string">&quot;/api/goods&quot;</span>, <span class="token keyword">function</span> <span class="token punctuation">(</span>req, res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res.json<span class="token punctuation">(</span><span class="token punctuation">{</span>
          errno: <span class="token number">0</span>,
          data: goods,
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      app.get<span class="token punctuation">(</span><span class="token string">&quot;/api/ratings&quot;</span>, <span class="token keyword">function</span> <span class="token punctuation">(</span>req, res<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res.json<span class="token punctuation">(</span><span class="token punctuation">{</span>
          errno: <span class="token number">0</span>,
          data: ratings,
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>,
    host: <span class="token string">&quot;localhost&quot;</span>, //\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199IP\u5730\u5740\u8FD9\u6837\u65B9\u4FBF\u771F\u673A\u6D4B\u8BD5
    port: <span class="token number">8080</span>, // \u7AEF\u53E3\u53F7
    https: false, // https:<span class="token punctuation">{</span>type:Boolean<span class="token punctuation">}</span>
    open: true, //\u914D\u7F6E\u81EA\u52A8\u542F\u52A8\u6D4F\u89C8\u5668
    // proxy: <span class="token string">&#39;http://localhost:4000&#39;</span> // \u914D\u7F6E\u8DE8\u57DF\u5904\u7406,\u53EA\u6709\u4E00\u4E2A\u4EE3\u7406

    // \u914D\u7F6E\u591A\u4E2A\u4EE3\u7406
    proxy: <span class="token punctuation">{</span>
      <span class="token string">&quot;/api&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        target: <span class="token string">&quot;&lt;url&gt;&quot;</span>, //\u5199\u5730\u5740
        ws: true, // \u5141\u8BB8\u8DE8\u57DF
        changeOrigin: true, //\u5141\u8BB8\u8DE8\u57DF
        pathRewrite: <span class="token punctuation">{</span>
          <span class="token string">&quot;^/api&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
        <span class="token punctuation">}</span>,
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;/foo&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        target: <span class="token string">&quot;&lt;other_url&gt;&quot;</span>,
      <span class="token punctuation">}</span>,
    <span class="token punctuation">}</span>,
  <span class="token punctuation">}</span>,
<span class="token punctuation">}</span><span class="token punctuation">;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4FEE\u6539\u914D\u7F6E\u5728package-json\u91CC\u9762" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u914D\u7F6E\u5728package-json\u91CC\u9762" aria-hidden="true">#</a> \u4FEE\u6539\u914D\u7F6E\u5728package.json\u91CC\u9762</h3><ul><li>\u589E\u52A0\u4E86rules\u9009\u9879</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string-property property">&quot;eslintConfig&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;plugin:vue/essential&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;@vue/prettier&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;no-console&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token string-property property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babel-eslint&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vite\u7684\u5B89\u88C5\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#vite\u7684\u5B89\u88C5\u65B9\u5F0F" aria-hidden="true">#</a> vite\u7684\u5B89\u88C5\u65B9\u5F0F</h2><h3 id="\u547D\u4EE4\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4\u5B89\u88C5" aria-hidden="true">#</a> \u547D\u4EE4\u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">npm</span> init vue@latest

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E0B\u4E00\u6B65\u5F00\u59CB\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u4E00\u6B65\u5F00\u59CB\u9009\u62E9" aria-hidden="true">#</a> \u4E0B\u4E00\u6B65\u5F00\u59CB\u9009\u62E9</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
\u2714 Project name: \u2026 <span class="token operator">&lt;</span>your-project-name<span class="token operator">&gt;</span>
\u2714 Add TypeScript? \u2026 No / Yes
\u2714 Add JSX Support? \u2026 No / Yes
\u2714 Add Vue Router <span class="token keyword">for</span> Single Page Application development? \u2026 No / Yes
\u2714 Add Pinia <span class="token keyword">for</span> state management? \u2026 No / Yes
\u2714 Add Vitest <span class="token keyword">for</span> Unit testing? \u2026 No / Yes
\u2714 Add Cypress <span class="token keyword">for</span> both Unit and End-to-End testing? \u2026 No / Yes
\u2714 Add ESLint <span class="token keyword">for</span> code quality? \u2026 No / Yes
\u2714 Add Prettier <span class="token keyword">for</span> code formatting? \u2026 No / Yes

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5\u4F9D\u8D56\u5305\u5E76\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56\u5305\u5E76\u542F\u52A8" aria-hidden="true">#</a> \u5B89\u88C5\u4F9D\u8D56\u5305\u5E76\u542F\u52A8</h3><blockquote><p>\u5982\u679C\u4E0D\u786E\u5B9A\u662F\u5426\u5F00\u542F\u67D0\u4E2A\u529F\u80FD ,\u4F60\u53EF\u4EE5\u76F4\u63A5\u6309\u4E0B\u56DE\u8F66\u952E\u9009\u62E9No,\u5728\u9879\u76EE\u88AB\u521B\u5EFA\u540E,\u901A\u8FC7\u4E00\u4E0B\u6B65\u9AA4\u542F\u52A8</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token builtin class-name">cd</span> <span class="token operator">&lt;</span>your-project-name<span class="token operator">&gt;</span>
<span class="token operator">&gt;</span> <span class="token function">npm</span> <span class="token function">install</span>
<span class="token operator">&gt;</span> <span class="token function">npm</span> run dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),p=[i];function o(l,c){return s(),a("div",null,p)}var d=n(t,[["render",o],["__file","Info.html.vue"]]);export{d as default};
