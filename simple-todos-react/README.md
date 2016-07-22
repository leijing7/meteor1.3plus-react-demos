![logos](mr-logo.png)


# Simple Todo List

Meteor1.3 + React 的官方 todos 例子代码剖析。安装

1. 安装 Meteor 1.3+
1. git clone 或者下载该例子
2. 在程序的目录运行 meteor npm install 命名，安装 npm 包（需要翻墙）

可以根据这个 [Meteor 官方 Tutorial 链接](https://www.meteor.com/tutorials/react/creating-an-app) 学习从零开始一步一步创建你的第一个 Meteor React App。本 tutorial 基于 Meteor1.3+ 版本。

## App 功能
这个应用可以和你的朋友分享你们的代办事项。它可以自动实时更新任何修改，你也可以有不被他人看见的私有任务。


## Meteor 的安装

#### OSX / LINUX

安装最新的稳定版本，在你的终端里运行

<pre>curl https://install.meteor.com/ | sh</pre>

#### <strike> WINDOWS </strike>

下载 Meteor 的官方安装包 https://install.meteor.com/windows 。不推荐使用 Windows 来进行网络开发，因为 Windows 对网络开发很不友好，基本就和 Windows 的手机一样不通用，强行使用会让你在学习的路上遇到一大堆别人不存在的困难，可能和你一同开始的小伙伴都开发出功能强大的应用了而你还在苦苦学习如何安装调试开发环境。如果你只有 Windows 电脑，建议你安装 Linux，或者使用 Linux 虚拟机，或者 使用 Docker 之类的容器。

## 需要安装的包

```
meteor npm install --save react react-dom
```

上面命令安装两个最关键的 React 包: react 和 react-dom，然后把这两条的信息保存在了根目录的 package.json 文件里，这样可以更好地管理包的版本信息。

```
meteor npm install --save react-addons-pure-render-mixin
meteor add react-meteor-data
```

这两个包用来构建 React 容器来获得 Meteor 的响应式自动数据更新特性。这个容器的另外一个主要目的是把数据的获取和数据的展示分开，这样代码更清晰更易维护。

```
meteor add accounts-ui accounts-password
```

这两个包用来构建用户登录系统，非常简单，几行代码就能搞定一个自己的基于用户名、密码的登录系统

```
meteor remove insecure
meteor remove autopublish
```

去除 insecure 包。这个包是方便最初开发用的，没有考虑到安全性，因为可以让用户在客户端修改数据库。
autopublish 也只是方便大家起步的，它会同步数据库所有内容到客户端。

```
meteor npm install --save classnames
```

这个包解决 JSX 的 style className 拼接的问题


## 代码解释

```
client/main.jsx        # 客户端启动代码，在页面的 DOM 加载完毕并 ready 后运行 Meteor.startup
package.json          # npm 包的管理信息；npm 命令的配置文件
.meteor               # 所有和 meteor 有关的文件
.gitignore            # git 的忽略文件列表，就是该文件列出的所有文件不会被 git 收录
```

## 运行
在运行之前，你需要运行 <code> meteor npm install </code>。这一步是为了安装 meteor 使用到的 npm 包。然后运行 <code> meteor </code>。首次运行会比较慢，速度取决你的网速（建议科学上网）因为需要下载 meteor 的核心包。

下载结束并运行起来后，在浏览器里输入 http://localhost:3000 你就可以看到你的网站了。

![screenshot](screenshot.png)
