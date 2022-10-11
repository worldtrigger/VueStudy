import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,a as n,b as d,e,d as r,r as o}from"./app.b1ecf8d0.js";const c={},t=e('<h2 id="nvm-\u8BED\u6CD5\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#nvm-\u8BED\u6CD5\u603B\u7ED3" aria-hidden="true">#</a> Nvm \u8BED\u6CD5\u603B\u7ED3</h2><h3 id="nvm-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#nvm-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> NVM \u662F\u4EC0\u4E48?</h3><p>nvm \u662F\u4E00\u4E2A node \u7684\u7248\u672C\u7BA1\u7406\u5DE5\u5177,\u53EF\u4EE5\u7B80\u5355\u64CD\u4F5C node \u7684\u7248\u672C\u5207\u6362,\u5B89\u88C5,\u67E5\u770B...\u7B49\u7B49.\u4E0E npm \u4E0D\u540C\u7684\u662F,npm \u662F\u4F9D\u8D56\u5305\u7684\u7BA1\u7406\u5DE5\u5177</p><h3 id="nvm-\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#nvm-\u7684\u5B89\u88C5" aria-hidden="true">#</a> nvm \u7684\u5B89\u88C5</h3>',4),u={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},v=r("\u70B9\u51FB\u6211"),m=n("li",null,[n("p",null,"\u53CC\u51FB\u540E\u4E00\u8DEF next \u5C31\u53EF\u4EE5(\u4E0D\u8981\u66F4\u6539\u8DEF\u5F84)")],-1),p=e(`<h3 id="\u66F4\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#\u66F4\u6362\u6E90" aria-hidden="true">#</a> \u66F4\u6362\u6E90</h3><ul><li><p>\u663E\u793A\u9690\u85CF\u6587\u4EF6\u5939</p></li><li><p>\u56FD\u5185\u7531\u4E8E\u4E0D\u80FD\u79D1\u5B66\u4E0A\u7F51,\u6240\u4EE5\u5FC5\u987B\u6362\u6210\u6DD8\u5B9D\u6E90</p></li><li><p>\u627E\u5230\u521A\u624D nvm \u6587\u4EF6\u7684\u4F4D\u7F6E,\u70B9\u5F00 setting.txt \u6587\u4EF6</p></li></ul><blockquote><p>\u8981\u662F\u6CA1\u6539\u53D8\u8DEF\u5F84\u7684\u8BDD,\u5730\u5740\u662F C:\\Users\\\u4F60\u672C\u673A\u7684\u7528\u6237\u540D\\AppData\\Roaming\\nvm</p></blockquote><ul><li>\u91CC\u9762\u7684\u6587\u4EF6\u53D8\u6210\u5982\u4E0B \u540E\u9762\u4E24\u4E2A\u662F\u65B0\u589E\u52A0\u7684</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
root: C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>\u4F60\u672C\u673A\u7684\u7528\u6237\u540D<span class="token punctuation">\\</span>AppData<span class="token punctuation">\\</span>Roaming<span class="token punctuation">\\</span>nvm
path: C:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>nodejs
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><ul><li><p>\u5148\u5378\u8F7D\u4E4B\u524D\u7684 node.js\uFF0C\u5378\u8F7D\u5B8C\u4E4B\u540E\u8BB0\u5F97\u91CD\u542F\u7535\u8111</p></li><li><p>\u7136\u540E\u4EE5\u7BA1\u7406\u5458\u7684\u8EAB\u4EFD\u8FD0\u884C windowsPower</p></li><li><p>\u5728 cmd \u91CC\u9762 \u67E5\u770B nvm \u53EF\u4EE5\u5B89\u88C5\u7684 node \u7248\u672C</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
nvm <span class="token function">ls</span>                      // \u770B\u5B89\u88C5\u7684\u6240\u6709node.js\u7684\u7248\u672C,\u5F53\u524D\u4F7F\u7528\u7684\u4F1A\u5728\u524D\u9762\u6709\u4E2A*\u53F7

nvm list available          // \u67E5\u663E\u793A\u53EF\u4EE5\u5B89\u88C5\u7684\u6240\u6709node.js\u7684\u7248\u672C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7136\u540E\u5B89\u88C5\u6240\u5BF9\u5E94\u7684\u7248\u672C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
nvm <span class="token function">install</span> \u7248\u672C\u53F7 // \u4F8B\u5982\uFF1Anvm <span class="token function">install</span> <span class="token number">14.19</span>.0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5207\u6362\u7248\u672C\u7684\u65F6\u5019\u6CE8\u610F \u5FC5\u987B\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u6765\u8FD0\u884C Windows Power</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
nvm use \u7248\u672C\u53F7           // \u5207\u6362\u5230\u4F7F\u7528\u6307\u5B9A\u7684nodejs\u7248\u672C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u68C0\u6D4B\u5207\u6362\u662F\u5426\u5B8C\u6210,\u65B0\u5F00\u4E00\u4E2A cmd</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">node</span> <span class="token parameter variable">-v</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5378\u8F7D\u6307\u5B9A\u7684\u7248\u672C</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
nvm uninstall <span class="token operator">&lt;</span>version<span class="token operator">&gt;</span> \u5378\u8F7D\u5236\u5B9A\u7684\u7248\u672C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function h(b,g){const s=o("ExternalLinkIcon");return i(),l("div",null,[t,n("ul",null,[n("li",null,[n("p",null,[n("a",u,[v,d(s)])])]),m]),p])}var f=a(c,[["render",h],["__file","Info.html.vue"]]);export{f as default};