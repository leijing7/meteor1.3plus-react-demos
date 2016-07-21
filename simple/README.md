## Meteor + React reactive programming 响应式编程理解

这个简单的例子是让大家理解 Meteor 和 React 配合进行响应式编程的概念。基于 Meteor 1.3+

### 安装

1. 安装 Meteor 1.3+
1. git clone 或者下载该例子
2. 在程序的目录运行 meteor npm install 命名，安装 npm 包

### 运行

在程序目录运行 meteor。程序启动没问题后，用浏览器打开两个 tab，都输入地址 localhost:3000，然后点击按钮，可以观察到两个 tab 的点击次数都自动更新了。

### 解释

* Meteor 利用 pub、sub 机制完成了前端数据和后端数据库的自动同步

* React 配合 Meteor，利用 mixin 自动更新同步到的数据

代码里有更多详细注释
