exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      show:true,
      chrome:{
        executablePath:'C://Program Files (x86)//Google//Chrome//Application//chrome',
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'let-me-cry',
  translation: 'zh-CN'
}