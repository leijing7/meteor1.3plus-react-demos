# Meteor + React + WeUI 实现 mobile web app

>**使用了 mantra-cli 生成基本框架**

## 如何添加微信的基础样式库 WeUI 到 Meteor 应用

先下载 weui 到本地

```
meteor npm i --save weui
```
然后在你要使用 weui 的组件里 引入 (css 只需要引入一次，然后可以全局使用)

```
import 'weui/dist/style/weui.min.css';
```

这样你就可以使用 weui 了，记得把 weui 提供的例子里的 class 改为 React 使用的 className。还有需要添加 scale 信息适配移动屏。请添加 Meteor 的 DocHead 包。

```
const metaInfo = {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"
};
DocHead.addMeta(metaInfo);
```

另外注意

```
<a href="javascript:;" className="weui_btn weui_btn_primary">绿色按钮</a>

```

<code> href="javascript:;" </code>相当于 <code> javascript:void(0) ; // return undefined </code>避免 href 导致刷新页面

## 安装 Semantic UI

Meteor 1.3+

```
meteor remove standard-minifier-css

meteor add semantic:ui juliancwirko:postcss less jquery
```

在 package.json 加入:

```
{
  "devDependencies": {
    "autoprefixer": "^6.3.1"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {"browsers": ["last 2 versions"]}
    }
  }
}
```

然后运行

```
meteor npm install
```

创建一个新的空文件 client/lib/semantic-ui/custom.semantic.json ，注意不要更改位置，因为 Meteor 对文件位置敏感。然后运行 meteor。

meteor 启动后删除自动生成的 client/lib/semantic-ui/.custom.semantic.json 文件，注意有一个点在前面。然后停止 Meteor 程序再次启动。

现在你的 Semantic UI 就可以使用了。

部署

```
npm -g install git+https://github.com/RockaLabs/meteor-up.git#muprockanew // 安装
muprockanew setup --config mupx.json  //设置

muprockanew deploy --config mupx.json --settings settings-staging.json
```
