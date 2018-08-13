
[Git教程](https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)
## GitHub 教程
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
---
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
> 总结： \
初始化一个Git仓库，使用git init命令。 \
添加文件到Git仓库，分两步： \
使用命令git add <file>，注意，可反复多次使用，添加多个文件； \
使用命令git commit -m <message>，完成。
---
### 时光机穿梭
* `git status` 命令可以让我们时刻掌握仓库当前的状态
``` c
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    modified:   readme.txt

no changes added to commit (use "git add" and/or "git commit -a")
```
* `git diff` 命令查看某个文件做了什么修改
``` c 
$ git diff readme.txt 
diff --git a/readme.txt b/readme.txt
index 46d49bf..9247db6 100644
--- a/readme.txt
+++ b/readme.txt
@@ -1,2 +1,2 @@
-Git is a version control system.
+Git is a distributed version control system.
 Git is free software.
```
* 查看了状态和修改能容后可以以放心提交了，`git add` 添加，`git commit` 提交
``` c
$ git add readme.txt
$ git status
On branch master
Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

    modified:   readme.txt

//git status告诉我们，将要被提交的修改包括readme.txt，下一步，就可以放心地提交了：
$ git commit -m "add distributed"
[master e475afc] add distributed
 1 file changed, 1 insertion(+), 1 deletion(-)

 //提交后，我们再用git status命令看看仓库的当前状态：
$ git status
On branch master
nothing to commit, working tree clean
```
> 小结  
要随时掌握工作区的状态，使用`git status`命令。  
如果`git status`告诉你有文件被修改过，用`git diff`可以查看修改内容。

### 版本回退
* 查看历史纪录
> git log ，查看所有记录  
> git log|HEAD ，查看最近一次的记录  
> git log --pretty=oneline ，每条记录在一行里显示
* 回退
> HEAD表示当前版本，上一个版本HEAD^，前面n个：HEAD~n  
> git reset --hard HEAD^ ，回退到上一个版本
* 回退到某个版本
> commit id（版本号），用16进制表示，
``` c
//版本号没必要写全，前几位就可以了
git reset --hard cbf2d //版本号
HEAD is now at fd70ee6 给readme.md添加一行测试句子
```
> 
* 查看文件内容
> cat 文件名.格式
* 查看commit 记录
``` c
git reflog
```
> 小结：  
HEAD 指向的是当前版本，因此，git允许我们在版本的历史之间穿梭，使用命令`git reset --hard HEAD^` 或者 `git reset --hard commit_id`  
穿梭前，用 `git log` 查看提交历史，以便确定要回到哪个版本  
要返回重来，用 `git reflog` 查看命令历史，以便确定要回到未来的哪个版本
---