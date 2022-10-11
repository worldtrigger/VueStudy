import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.6060aef0.js";const t={},e=p(`<h2 id="\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#\u6DF7\u5165" aria-hidden="true">#</a> \u6DF7\u5165</h2><h3 id="\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840" aria-hidden="true">#</a> \u57FA\u7840</h3><p>\u6DF7\u5165 (mixin) \u63D0\u4F9B\u4E86\u4E00\u79CD\u975E\u5E38\u7075\u6D3B\u7684\u65B9\u5F0F\uFF0C\u6765\u5206\u53D1 Vue \u7EC4\u4EF6\u4E2D\u7684\u53EF\u590D\u7528\u529F\u80FD\u3002\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EFB\u610F\u7EC4\u4EF6\u9009\u9879\u3002\u5F53\u7EC4\u4EF6\u4F7F\u7528\u6DF7\u5165\u5BF9\u8C61\u65F6\uFF0C\u6240\u6709\u6DF7\u5165\u5BF9\u8C61\u7684\u9009\u9879\u5C06\u88AB\u201C\u6DF7\u5408\u201D\u8FDB\u5165\u8BE5\u7EC4\u4EF6\u672C\u8EAB\u7684\u9009\u9879\u3002</p><p>\u4E3E\u4F8B:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u6DF7\u5165\u5BF9\u8C61</span>
<span class="token keyword">var</span> myMixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">hello</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello from mixin!&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49\u4E00\u4E2A\u4F7F\u7528\u6DF7\u5165\u5BF9\u8C61\u7684\u7EC4\u4EF6</span>
<span class="token keyword">var</span> Component <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myMixin<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> component <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &quot;hello from mixin!&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9009\u9879\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u5408\u5E76" aria-hidden="true">#</a> \u9009\u9879\u5408\u5E76</h3><p>\u5F53\u7EC4\u4EF6\u548C\u6DF7\u5165\u5BF9\u8C61\u542B\u6709\u540C\u540D\u9009\u9879\u65F6\uFF0C\u8FD9\u4E9B\u9009\u9879\u5C06\u4EE5\u6070\u5F53\u7684\u65B9\u5F0F\u8FDB\u884C\u201C\u5408\u5E76\u201D\u3002</p><p>\u6BD4\u5982\uFF0C\u6570\u636E\u5BF9\u8C61\u5728\u5185\u90E8\u4F1A\u8FDB\u884C\u9012\u5F52\u5408\u5E76\uFF0C\u5E76\u5728\u53D1\u751F\u51B2\u7A81\u65F6\u4EE5<code>\u7EC4\u4EF6\u6570\u636E</code>\u4F18\u5148\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">var</span> mixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;goodbye&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;def&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$data<span class="token punctuation">)</span>
    <span class="token comment">// =&gt; { message: &quot;goodbye&quot;, foo: &quot;abc&quot;, bar: &quot;def&quot; }</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u540D\u94A9\u5B50\u51FD\u6570\u5C06\u5408\u5E76\u4E3A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u56E0\u6B64\u90FD\u5C06\u88AB\u8C03\u7528\u3002\u53E6\u5916\uFF0C\u6DF7\u5165\u5BF9\u8C61\u7684\u94A9\u5B50\u5C06\u5728\u7EC4\u4EF6\u81EA\u8EAB\u94A9\u5B50\u4E4B\u524D\u8C03\u7528\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">var</span> mixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6DF7\u5165\u5BF9\u8C61\u7684\u94A9\u5B50\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7EC4\u4EF6\u94A9\u5B50\u88AB\u8C03\u7528&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// =&gt; &quot;\u6DF7\u5165\u5BF9\u8C61\u7684\u94A9\u5B50\u88AB\u8C03\u7528&quot;</span>
<span class="token comment">// =&gt; &quot;\u7EC4\u4EF6\u94A9\u5B50\u88AB\u8C03\u7528&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u503C\u4E3A\u5BF9\u8C61\u7684\u9009\u9879\uFF0C\u4F8B\u5982 <code>methods</code>\u3001<code>components</code> \u548C <code>directives</code>\uFF0C\u5C06\u88AB\u5408\u5E76\u4E3A\u540C\u4E00\u4E2A\u5BF9\u8C61\u3002\u4E24\u4E2A\u5BF9\u8C61\u952E\u540D\u51B2\u7A81\u65F6\uFF0C\u53D6<code>\u7EC4\u4EF6\u5BF9\u8C61</code>\u7684\u952E\u503C\u5BF9\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">var</span> mixin <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">foo</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">conflicting</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;from mixin&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">bar</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;bar&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">conflicting</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;from self&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

vm<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &quot;foo&quot;</span>
vm<span class="token punctuation">.</span><span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &quot;bar&quot;</span>
vm<span class="token punctuation">.</span><span class="token function">conflicting</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; &quot;from self&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5168\u5C40\u6DF7\u5165" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u6DF7\u5165" aria-hidden="true">#</a> \u5168\u5C40\u6DF7\u5165</h3><p>\u6DF7\u5165\u4E5F\u53EF\u4EE5\u8FDB\u884C\u5168\u5C40\u6CE8\u518C\u3002\u4F7F\u7528\u65F6\u683C\u5916\u5C0F\u5FC3\uFF01\u4E00\u65E6\u4F7F\u7528\u5168\u5C40\u6DF7\u5165\uFF0C\u5B83\u5C06\u5F71\u54CD\u6BCF\u4E00\u4E2A\u4E4B\u540E\u521B\u5EFA\u7684 Vue \u5B9E\u4F8B\u3002\u4F7F\u7528\u6070\u5F53\u65F6\uFF0C\u8FD9\u53EF\u4EE5\u7528\u6765\u4E3A\u81EA\u5B9A\u4E49\u9009\u9879\u6CE8\u5165\u5904\u7406\u903B\u8F91\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token comment">// \u4E3A\u81EA\u5B9A\u4E49\u7684\u9009\u9879 &#39;myOption&#39; \u6CE8\u5165\u4E00\u4E2A\u5904\u7406\u5668\u3002</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> myOption <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$options<span class="token punctuation">.</span>myOption
    <span class="token keyword">if</span> <span class="token punctuation">(</span>myOption<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myOption<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">myOption</span><span class="token operator">:</span> <span class="token string">&#39;hello!&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// =&gt; &quot;hello!&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">\u5371\u9669</p><p>\u8BF7\u8C28\u614E\u4F7F\u7528\u5168\u5C40\u6DF7\u5165\uFF0C\u56E0\u4E3A\u5B83\u4F1A\u5F71\u54CD\u6BCF\u4E2A\u5355\u72EC\u521B\u5EFA\u7684 Vue \u5B9E\u4F8B (\u5305\u62EC\u7B2C\u4E09\u65B9\u7EC4\u4EF6)\u3002\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u53EA\u5E94\u5F53\u5E94\u7528\u4E8E\u81EA\u5B9A\u4E49\u9009\u9879\uFF0C\u5C31\u50CF\u4E0A\u9762\u793A\u4F8B\u4E00\u6837\u3002\u63A8\u8350\u5C06\u5176\u4F5C\u4E3A\u63D2\u4EF6\u53D1\u5E03\uFF0C\u4EE5\u907F\u514D\u91CD\u590D\u5E94\u7528\u6DF7\u5165\u3002</p></div>`,17),o=[e];function c(i,l){return s(),a("div",null,o)}var d=n(t,[["render",c],["__file","minxin.html.vue"]]);export{d as default};
