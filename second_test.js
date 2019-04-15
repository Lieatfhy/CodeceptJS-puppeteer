
Feature('Second test');

Scenario('test email login', async (I) => { 
    
    let login = '1986805565'
    let password = '0g2119nzxk'

    I.amOnPage('https://mail.qq.com/')
    I.see('QQ邮箱')
    I.click({xpath:'//*[@id="qqLoginTab"]'})
    I.click({xpath:'//*[@id="switcher_plogin"]'})
    I.wait(10)
    I.fillField('#u',login)
    I.fillField('#p',password)
    I.wait(10)
    I.click('登录')
    I.wait(10)
});