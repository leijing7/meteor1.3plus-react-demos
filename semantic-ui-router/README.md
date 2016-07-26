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

在 client/lib/semantic-ui/custom.semantic.json 创建一个新的空文件，然后运行 meteor。

meteor 启动后删除自动生成的 client/lib/semantic-ui/.custom.semantic.json 文件，注意有一个点在前面。

现在你的 Semantic UI 就可以使用了。
