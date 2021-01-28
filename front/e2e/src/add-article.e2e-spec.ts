import { a1 } from './../../src/app/test/data';
import { browser, logging } from 'protractor';
import { AppPage } from './po/app.po';
import { AddPage } from './po/add.po';
import { StockPage } from './po/stock.po';

describe('Add an article', () => {
  let page: AppPage;
  let stockPage: StockPage;
  let addPage: AddPage;

  beforeEach(() => {
    page = new AppPage();
    stockPage = new StockPage();
    addPage = new AddPage();
  });

  it('should add an article', async () => {
    await page.navigateTo();
    await page.clickOnStockBtn();
    await stockPage.clickOnAddBtn();
    await addPage.fillForm(a1);
    await addPage.submit();
    const article = await stockPage.getLastArticle();
    expect(article.name).toEqual(a1.name);
    expect(article.price).toEqual(a1.price);
    expect(article.qty).toEqual(a1.qty);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
