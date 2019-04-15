
Feature('First test');

Scenario('test GitHub login', async (I) => { 
    
    let login = 'Lieatfhy'
    let password = 'lj330382'

    I.amOnPage('https://github.com/');
    I.see('GitHub');
    I.click({css:'body > div.position-relative.js-header-wrapper > header > div > div.d-flex.flex-justify-between.flex-items-center > div.d-flex.flex-items-center > button > svg'})
   // I.click({xpath:'/html/body/div[1]/header/div/div[1]/div[2]/button'})
    I.click({xpath:'/html/body/div[1]/header/div/div[2]/div[2]/a[1]'})
    I.see('Sign in to GitHub');
    I.fillField('login',login);
    I.fillField('password',password);
    I.click('Sign in');
    I.seeInCurrentUrl('https://github.com/','/html/body/div[1]/header/div/div[1]/div[1]/a')
    // await I.waitForElement('/html/body/div[1]/header/div[2]/button',10000)
    I.wait(10)
    I.click({xpath:'/html/body/div[1]/header/div[2]/button'});
    I.see(login,'body > div.position-relative.js-header-wrapper > header > div.Header-item.Header-item--full.flex-column.flex-lg-row.width-full.flex-order-2.flex-lg-order-none.mr-0.mr-lg-3.mt-3.mt-lg-0.Details-content--hidden > nav > a.Header-link.d-block.d-lg-none.mr-0.mr-lg-3.py-2.py-lg-0.border-top.border-lg-top-0.border-white-fade-15')
});