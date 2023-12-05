(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{363:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、vim-常用插件管理工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、vim-常用插件管理工具"}},[t._v("#")]),t._v(" 一、vim 常用插件管理工具")]),t._v(" "),s("ul",[s("li",[t._v("Vim-plug和Vundle都是流行的Vim插件管理器，用于简化在Vim编辑器中安装、更新和管理插件的过程；")]),t._v(" "),s("li",[t._v("提供了简单的配置方式和自动化工具来帮助用户管理Vim插件；")])]),t._v(" "),s("h3",{attrs:{id:"_1-vim-plug"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-vim-plug"}},[t._v("#")]),t._v(" 1，Vim-plug")]),t._v(" "),s("ul",[s("li",[t._v("Vim-plug 是一个轻量级、快速且易于使用的Vim插件管理器，它的设计目标是保持简单性和性能；")]),t._v(" "),s("li",[t._v("Vim-plug使用类似于Git的语法来指定插件来源，并可以按需加载插件，以避免对Vim的启动速度产生负面影响；")]),t._v(" "),s("li",[t._v("要使用Vim-plug，在Vim的配置文件（如~/.vimrc）中添加一些简单的配置即可，然后运行Vim-plug命令来安装和更新插件；")]),t._v(" "),s("li",[t._v("易于设置：单个文件，无需样板代码；")]),t._v(" "),s("li",[t._v("易于使用：简洁直观的语法；")]),t._v(" "),s("li",[t._v("按需加载，加快启动时间；")]),t._v(" "),s("li",[t._v("可以查看和回滚更新；")])]),t._v(" "),s("h3",{attrs:{id:"_2-vundle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-vundle"}},[t._v("#")]),t._v(" 2，Vundle")]),t._v(" "),s("ul",[s("li",[t._v("Vundle（Vim Bundle）是一个流行的Vim插件管理器，它的目标是通过简化配置和操作来提供轻松的插件管理体验；")]),t._v(" "),s("li",[t._v("Vundle使用类似于Git的语法来指定插件来源，并提供了一组命令来安装、更新和删除插件；")]),t._v(" "),s("li",[t._v("在Vim的配置文件中，用户可以使用Vundle提供的特定语法来列出需要安装的插件，并通过运行Vundle命令来执行插件的安装和更新操作；")])]),t._v(" "),s("h3",{attrs:{id:"_3-两者的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-两者的区别"}},[t._v("#")]),t._v(" 3，两者的区别")]),t._v(" "),s("ul",[s("li",[t._v("语法：Vim-plug和Vundle都使用类似于Git的语法来指定插件来源，但在某些细节上有所不同。")]),t._v(" "),s("li",[t._v("性能：Vim-plug在启动速度和加载插件上具有良好的性能特点，而Vundle相对较慢一些。")]),t._v(" "),s("li",[t._v("功能：Vim-plug提供了一些额外的功能，如并行安装、分组插件、按需加载等，而Vundle提供了一些其他的功能，如插件搜索等。")]),t._v(" "),s("li",[t._v("依赖：两者都依赖于 git 下载插件，所以使用该插件管理工具时，需要先安装 git。")]),t._v(" "),s("li",[t._v("社区：Vundle是一个成熟且广泛使用的插件管理器，有很多用户和社区支持。Vim-plug相对较新，但也有许多用户和活跃的开发者。")])]),t._v(" "),s("h2",{attrs:{id:"二、插件管理工具使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、插件管理工具使用方式"}},[t._v("#")]),t._v(" 二、插件管理工具使用方式")]),t._v(" "),s("ul",[s("li",[t._v("以 Vim-plug 举例")])]),t._v(" "),s("h3",{attrs:{id:"_1-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[t._v("#")]),t._v(" 1，安装")]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-fLo")]),t._v(" ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"_2-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置"}},[t._v("#")]),t._v(" 2，配置")]),t._v(" "),s("ul",[s("li",[t._v("编辑 "),s("strong",[t._v("~/.vimrc")]),t._v(" 文件，添加以下内容即可；")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("call plug"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#begin('~/.vim/plugged')")]),t._v("\nPlug "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'itchyny/lightline.vim'")]),t._v("\ncall plug"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#end()")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("ul",[s("li",[s("p",[t._v("必须以 "),s("strong",[t._v("plug#begin('~/.vim/plugged')")]),t._v(" 开头，以 "),s("strong",[t._v("plug#end()")]),t._v(" 结尾，中间填写需要安装的插件；")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("~/.vim/plugged")]),t._v(" 表示存放插件的目录；")])]),t._v(" "),s("li",[s("p",[t._v("通过访问 "),s("strong",[s("a",{attrs:{href:"https://vimawesome.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("vimawesome"),s("OutboundLink")],1)]),t._v("，查找自己需要安装的插件；")])]),t._v(" "),s("li",[s("p",[t._v("例如安装 "),s("strong",[t._v("lightline")]),t._v(" 插件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://jsd.cdn.zzko.cn/gh/erlangtui/img-bed@master/shell/vimawesome.1s5s9u2xu4m8.jpg",alt:"lightline"}})]),t._v(" "),s("ul",[s("li",[t._v("在搜索框查找 lightline，在左侧选择 "),s("strong",[t._v("VimPlug")]),t._v(" 侧边栏；")]),t._v(" "),s("li",[t._v("复制 "),s("code",[t._v("Plug 'itchyny/lightline.vim'")]),t._v(" 到 "),s("code",[t._v("plug#begin('~/.vim/plugged') 和 plug#end()")]),t._v(" 中间；")]),t._v(" "),s("li",[t._v("在 vim 命令行执行 "),s("code",[t._v(":source % 和 :PlugInstall")]),t._v(" 即可；")]),t._v(" "),s("li",[t._v("点击右上角 "),s("code",[t._v("GITHUB")]),t._v(" 即可跳转到该插件的github仓库，查看使用方法；")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用方法"}},[t._v("#")]),t._v(" 3，使用方法")]),t._v(" "),s("h4",{attrs:{id:"_1-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令"}},[t._v("#")]),t._v(" 1，命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("PlugInstall [name ...] [#threads]")])]),t._v(" "),s("td",[t._v("安装插件")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("PlugUpdate [name ...] [#threads]")])]),t._v(" "),s("td",[t._v("安装或更新插件")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("PlugClean[!]")])]),t._v(" "),s("td",[t._v("删除未列出的插件")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("PlugUpgrade")])]),t._v(" "),s("td",[t._v("更新 Vim-plug 本身")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("PlugStatus")])]),t._v(" "),s("td",[t._v("检查插件的状态")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("PlugDiff")])]),t._v(" "),s("td",[t._v("检查相比上次更新与挂起的更改")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("PlugSnapshot[!] [output path]")])]),t._v(" "),s("td",[t._v("生成恢复当前插件快照的脚本")])])])]),t._v(" "),s("ul",[s("li",[t._v("在命令行使用，如添加 "),s("code",[t._v("Plug 'itchyny/lightline.vim'")]),t._v(" 之后，执行 "),s("code",[t._v(":PlugInstall")]),t._v(" 安装该脚本；")])]),t._v(" "),s("h4",{attrs:{id:"_2-选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-选项"}},[t._v("#")]),t._v(" 2，选项")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("branch")]),t._v("/"),s("code",[t._v("tag")]),t._v("/"),s("code",[t._v("commit")])]),t._v(" "),s("td",[t._v("指定使用该仓库的Branch/tag/commit")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("rtp")])]),t._v(" "),s("td",[t._v("包含 Vim 插件的子目录")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("dir")])]),t._v(" "),s("td",[t._v("插件的自定义目录")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("as")])]),t._v(" "),s("td",[t._v("为插件使用不同的名称")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("do")])]),t._v(" "),s("td",[t._v("更新后钩子（字符串或函数引用），即插件安装或更新后的动作")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("on")])]),t._v(" "),s("td",[t._v("按需加载：命令或映射 "),s("code",[t._v("<Plug>")])])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("for")])]),t._v(" "),s("td",[t._v("按需加载：文件类型")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("frozen")])]),t._v(" "),s("td",[t._v("除非明确指定，否则不更新")])])])]),t._v(" "),s("ul",[s("li",[t._v("举例如下：")])]),t._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\" 当 NERDTreeToggle 命令首次被使用时，nerdtree 被加载\nPlug 'preservim/nerdtree', { 'on': 'NERDTreeToggle' }\n\n\"")]),t._v(" 多命令被执行\nPlug "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junegunn/vim-github-dashboard'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'on'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GHDashboard'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GHActivity'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\" 当 clojure 文件被打开时，vim-fireplace 被加载\nPlug 'tpope/vim-fireplace', { 'for': 'clojure' }\n\n\"")]),t._v(" 多文件被打开\nPlug "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kovisoft/paredit'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'for'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'clojure'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'scheme'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n” 打开文件并执行某个命令\nPlug "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'junegunn/vader.vim'")]),t._v(",  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'on'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Vader'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'for'")]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vader'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\" 安装后执行 make 命令\nPlug 'Shougo/vimproc.vim', { 'do': 'make' }\n\"")]),t._v(" 安装后执行 ./install.py"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("' 命令\nPlug '")]),t._v("ycm-core/YouCompleteMe"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("', { '")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("': '")]),t._v("./install.py' "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);