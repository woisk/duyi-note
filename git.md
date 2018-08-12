## GitHub
* 配置用户名和邮件
``` c
git config --global user.name "Your Name"
git config --global user.email "Your Email"
```
---
### 创建版本库
* 1、创建空目录，在一个合适的位置打开git bash
> 为了避免遇到各种莫名其妙的问题，请确保目录名（包括父目录）不包含中文。
``` c
mkdir dirName   //创建dirName目录
cd dirName      //进入dirName目录
pwd             //显示dirName路径
```
* 2、通过 `git init` 命令把目录变成git可以管理的仓库
``` c
git init        
Initialized empty Git repository in 目录地址    //成功提示
//当前目录下多了一个.git的目录
ls -ah      //查看隐藏的.git目录
```
### 把文件添加到版本库
> 只能跟踪文本文件的改动，最好UTF-8编码 \
> 二进制文件能管理，不能追踪变化

> 用 `git add` 命令把文件添加到仓库 \
> 用 `git commit` 命令把文件提交到仓库
``` c
git add 文件名          
git commit -m "add a file"  //-m 添加本次提交的说明
//以下是提交成功提示
[master (root-commit) cc8866c] 初始创建，增加readme文件     
 1 file changed, 0 insertions(+), 0 deletions(-)   
  //1个创建，0行增加，0行减少
 create mode 100644 readme.md
```