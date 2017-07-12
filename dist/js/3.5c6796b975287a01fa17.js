webpackJsonp([3],{275:function(n,e){n.exports='<h3 id="shellgit">一、设置Shell中Git的颜色和当前所在分支</h3>\n<h4 id="1cd">1. cd ~</h4>\n<h4 id="2vibashrc">2. vi .bashrc</h4>\n<h4 id="3">3. 设置文件内容如下，并保存</h4>\n<pre><code class="js language-js">function parse_git_dirty {\n    local git_status=$(git status 2&gt; /dev/null | tail -n1) || $(git status 2&gt; /dev/null | head -n 2 | tail -n1);\n    if [[ "$git_status" != "" ]]; then\n        local git_now; # 标示\n        if [[ "$git_status" =~ nothing\\ to\\ commit || "$git_status" =~  Your\\ branch\\ is\\ up\\-to\\-date\\ with ]]; then\n            git_now="=";\n        elif [[ "$git_status" =~ Changes\\ not\\ staged || "$git_status" =~ no\\ changes\\ added ]]; then\n            git_now=\'~\';\n        elif [[ "$git_status" =~ Changes\\ to\\ be\\ committed ]]; then #Changes to be committed\n            git_now=\'*\';\n        elif [[ "$git_status" =~ Untracked\\ files ]]; then\n            git_now="+";\n        elif [[ "$git_status" =~ Your\\ branch\\ is\\ ahead ]]; then\n            git_now="#";\n        fi\n        echo "${git_now}";\n    fi\n}\n\nfunction git_branch {\n    ref=$(git symbolic-ref HEAD 2&gt; /dev/null) || return;\n    echo "("${ref#refs/heads/}") ";\n}\n\nPS1="[\\[\\033[1;32m\\]\\w\\[\\033[0m\\]] \\[\\033[0m\\]\\[\\033[1;36m\\]\\$(git_branch)\\[\\033[0;31m\\]\\$(parse_git_dirty)\\[\\033[0m\\]$ "\n</code></pre>\n<h4 id="4sourcebashrc">4. 执行 source ./.bashrc</h4>\n<h4 id="5mac">5. 如果是mac，再执行如下命令,每次开机才会自动生效</h4>\n<pre><code class="bash language-bash">echo "[ -r ~/.bashrc ] &amp;&amp; source ~/.bashrc" &gt;&gt; .bash_profile\n</code></pre>\n<h3 id="git">二、设置Git常用别名</h3>\n<blockquote>\n  <p>1./etc/gitconfig 文件：包含了适用于系统所有用户和所有库的值。如果你传递参数选项’--system’ 给 git config，它将明确的读和写这个文件。</p>\n  <p>2.~/.gitconfig 文件 ：具体到你的用户。你可以通过传递--global 选项使Git 读或写这个特定的文件。</p>\n  <p>3.位于git目录的config文件 (也就是 .git/config) ：无论你当前在用的库是什么，特定指向该单一的库。每个级别重写前一个级别的值。因此，在.git/config中的值覆盖了在/etc/gitconfig中的同一个值。</p>\n</blockquote>\n<pre><code class="bash language-bash">[alias]\n  s = status\n  st = status\n  sb = status -s -b\n  #############\n  d = diff\n  di = diff\n  dc = diff --cached\n  dk = diff --check\n  dck = diff --cached --check\n  #############\n  c = commit\n  ca = commit -a\n  cm = commit -m\n  ci = commit\n  #############\n  l = log --oneline\n  lg = log --oneline --graph --decorate\n  #############\n  o = checkout\n  co = checkout\n  ob = checkout -b\n  cob = checkout -b\n  #############\n  b = branch\n  bv = branch -vv\n  ba = branch -a\n  bd = branch -d\n  br = branch -r\n  #############\n  f = fetch\n  fo = fetch origin\n  #############\n  m = merge\n  #############\n  ps = push\n  pl = pull\n  pb = pull --rebase\n  psf = push -f\n  psu = push -u\n  plu = pull -u\n  pso = push origin\n  plo = pull origin\n  pbo = pull --rebase origin\n  psfo = push -f origin\n  psuo = push -u origin\n  pluo = pull -u origin\n  #############\n  rb = rebase\n  #############\n  re = reset\n  rh = reset HEAD\n  reh = reset --hard\n  rem = reset --mixed\n  res = reset --soft\n  rehh = reset --hard HEAD\n  remh = reset --mixed HEAD\n  resh = reset --soft HEAD\n  #############\n  w = show\n  #############\n</code></pre>\n<h3 id="">三、常用命令介绍</h3>\n<h4 id="-1">撤销系列</h4>\n<h5 id="untracked">untracked撤销</h5>\n<pre><code class="bash language-bash">rm -rf [path]\n</code></pre>\n<pre><code class="bash language-bash"># 删除 untracked files\ngit clean -f\n\n# 连 untracked 的目录也一起删掉\ngit clean -fd\n</code></pre>\n<pre><code class="bash language-bash">git checkout --ours [path]\n</code></pre>\n<h5 id="add">add撤销</h5>\n<pre><code class="bash language-bash">git reset HEAD [file-name]\n</code></pre>\n<h5 id="commit">commit撤销</h5>\n<pre><code class="bash language-bash">git reset —soft [commit-id]\n</code></pre>\n<h5 id="commit-1">增补提交（不会产生新的commit）</h5>\n<pre><code class="bash language-bash">git commit -C HEAD -a --amend\n\n参数说明\n-m “提交的说明”\n-a 动把所有已经跟踪过的文件暂存,并提交.(工作目录中修改过的文件都提交到版本库，不需一个一个手动add了)\n–amend 增补提交\n-C 复用指定提交的提交留言\n-c 打开编辑器在已有的提交基础上编辑修改\n</code></pre>\n<h4 id="stash">stash系列</h4>\n<pre><code class="bash language-bash">git stash list\ngit stash\ngit stash show xxx\ngit stash drop xxx\ngit stash pop\n</code></pre>\n<h4 id="pushpull">push和pull分支默认匹配</h4>\n<pre><code class="bash language-bash">git config --global push.default matching\ngit branch --set-upstream-to=origin/master master\n</code></pre>\n<p>或在.git/config中配置</p>\n<pre><code class="bash language-bash"> [branch "test_20170209"]\n remote = origin\n merge = refs/heads/test_20170209\n</code></pre>\n<h4 id="gitignore">gitignore不起作用解决办法</h4>\n<blockquote>\n  <p>.gitignore只能忽略那些原来没有被track的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore是无效的</p>\n</blockquote>\n<pre><code class="shell language-shell">git rm -r --cached .\ngit add .\ngit commit -m \'update .gitignore\'\n</code></pre>'}});