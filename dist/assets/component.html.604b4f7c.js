import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.b1ecf8d0.js";const t={},e=p(`<h2 id="vue-\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#vue-\u7EC4\u4EF6" aria-hidden="true">#</a> Vue \u7EC4\u4EF6</h2><h1 id="\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6</h1><p>Vue \u7684\u6838\u5FC3\u5C31\u5728\u4E8E\u7EC4\u4EF6,\u7EC4\u4EF6\u7684\u4F5C\u7528\u5C31\u662F:\u590D\u7528.</p><p>\u5C0F\u5230\u4E00\u4E2A\u6309\u94AE,\u5927\u5230\u4E00\u4E2A\u9875\u9762\u90FD\u53EF\u4EE5\u662F\u7EC4\u4EF6</p><h2 id="\u7EC4\u4EF6\u7684\u4E09\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u4E09\u5143\u7D20" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u4E09\u5143\u7D20</h2><p>\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u5FC5\u987B\u5305\u542B\u4E09\u5143\u7D20</p><ul><li><p>template(\u7528\u6765\u5B58\u653E html)</p></li><li><p>script(\u7528\u6765\u5199 js)</p></li><li><p>style(\u7528\u6765\u5199 css)</p></li><li><p>\u8FD9\u91CC\u5343\u4E07\u6CE8\u610F:\u7EC4\u4EF6\u5FC5\u987B\u90FD\u8981\u5927\u5199</p></li></ul><blockquote><p>\u7EC4\u4EF6\u5916\u9762\u5FC5\u987B\u6709\u4E00\u4E2A\u5305\u88F9\u5C42,\u5426\u5219\u76F4\u63A5\u62A5\u9519\u8BEF</p></blockquote><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>login<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loginbox_wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&quot;@/pages/common/Header&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&quot;@/pages/common/Footer&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> Main <span class="token keyword">from</span> <span class="token string">&quot;@/pages/Login/components/Main&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&quot;\u767B\u9646&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      Header<span class="token punctuation">,</span>
      Footer<span class="token punctuation">,</span>
      Main<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>less<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token comment">/*mobile*/</span>
  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 767px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.loginbox_wrap</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 200px - 73px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*pad*/</span>
  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.loginbox_wrap</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 108px - 150px - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
      <span class="token property">padding-top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">/*desktop*/</span>
  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1025px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
    <span class="token selector">.loginbox_wrap</span> <span class="token punctuation">{</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
      <span class="token property">min-height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>100vh - 108px - 150px - 50px<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token property">background</span><span class="token punctuation">:</span> #f3f3f3<span class="token punctuation">;</span>
      <span class="token property">padding-top</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u7EC4\u4EF6\u7684\u5F15\u5165\u5FC5\u987B\u4E09\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u7684\u5F15\u5165\u5FC5\u987B\u4E09\u70B9" aria-hidden="true">#</a> \u7EC4\u4EF6\u7684\u5F15\u5165\u5FC5\u987B\u4E09\u70B9</h1><ul><li><p>\u7B2C\u4E00\u6B65:\u5F15\u5165\u7EC4\u4EF6(import)</p></li><li><p>\u7B2C\u4E8C\u6B65:\u6CE8\u518C\u7EC4\u4EF6(components)</p></li><li><p>\u7B2C\u4E09\u6B65:\u4F7F\u7528\u7EC4\u4EF6(\u81EA\u5B9A\u4E49\u6807\u7B7E)</p></li><li><p>\u7EC4\u4EF6\u5FC5\u987B\u8981\u5927\u5199</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>header<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;login&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>Header<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>Header<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>main<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">import</span> Header <span class="token keyword">from</span> <span class="token string">&#39;@/pages/common/Header&#39;</span>
  <span class="token keyword">import</span> Footer <span class="token keyword">from</span> <span class="token string">&#39;@/pages/common/Footer&#39;</span>
  <span class="token keyword">import</span> Main <span class="token keyword">from</span> <span class="token string">&#39;@/pages/Login/components/Main&#39;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;\u767B\u9646&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      Header<span class="token punctuation">,</span>
      Footer<span class="token punctuation">,</span>
      Main
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">&quot;less&quot;</span> scoped<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[e];function l(c,i){return s(),a("div",null,o)}var k=n(t,[["render",l],["__file","component.html.vue"]]);export{k as default};
