# README

## 问题

1. 动效同学给到的 lottie 包含两份信息，分别是  data.json 和一个 images 文件夹
2. 如果直接无脑引入， 在 webpack 打包的时候，会提示异常 「Multiple chunks emit assets to the same filename」
3. 所以一般文件我们需要手动修改一些信息
   1. 修改 data.json 文件名为  target.ts  【target 指你想改的不一样的名字】
   2. 修改images 目录下的图片名为 target_0.png  【动效直接导出的是 img_0.png】
   3. 修改 ts 文件中 assets 中的一些基本信息
4. 当动效比较多的时候，重复的改动就会很麻烦，需要一个工具来做



## 使用

```shell
1. npm install -g modify-lottie-name
2. modify-lottie -dir data.json -name jontyy 
// -dir 后面跟着 json 文件的全名  -name 后面跟着需要修改的名字， name 会影响到 ts 文件名和图片名
```

