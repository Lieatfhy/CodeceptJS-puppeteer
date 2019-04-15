# puppeteer

安装codeceptjs的puppeteer
npm install codeceptjs puppeteer --save-dev 

安装codeceptjs的puppeteer同时忽略掉chromium的安装
npm install codeceptjs puppeteer --save-dev --ignore-scripts

创建项目
npx codeceptjs init 

新建测试案例
npx codeceptjs gt 

运行测试案例每一步的步骤的结果都显示出来
npx codeceptjs run --steps 

查看更详细的输出
codeceptjs run --debug

查看非常详细的输出系统
codeceptjs run --verbose

如果您提供此类文件的相对路径，则可以执行单个测试文件：
codeceptjs run github_test.js 
# or 
codeceptjs run admin/login_test.js

按名称使用--grep参数筛选测试。这将执行名称与正则表达式匹配的所有测试。
codeceptjs run --grep "slow"

更改使用的浏览器：
helpers: {
Puppeteer: {
show:true,
chrome:{
executablePath:'C://Users//19868//AppData//Local//Google//Chrome//Application//chrome'
}
}
},
