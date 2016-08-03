## 安装 Semantic UI

Meteor 1.4+

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


使用到 kadirahq 全家桶

* flow-router
* react-mounter
* react-komposer
* dochead

[dochead](https://github.com/kadirahq/meteor-dochead) 是 Meteor 包
```
meteor add kadira:dochead
```

#### React Mounter
这个包是之前的 [Layout](https://github.com/kadirahq/meteor-react-layout) 替代品。作用是把 React 的组件加载到 DOM 上去。

特别之处是和 FlowRouter 一起使用可以支持 SSR - Server Side Rendering。

使用这个包就不再需要 Meteor 自动生成的 main.html 了，因为 react-mounter 可以为你创建一个根 DOM 节点。此后所有 HTML 和 CSS 都是由 JSX 生成

#### React komposer
替代 createContainer

#### 删除不必要的 Meteor 包

```
meteor remove autopublish insecure
```

#### 添加账号包

```
meteor add accounts-password
meteor add accounts-google
meteor add accounts-github
```
