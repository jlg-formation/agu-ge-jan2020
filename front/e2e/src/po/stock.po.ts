import { by, element } from 'protractor';
import { Article } from 'src/app/interfaces/article';

export class StockPage {
  async clickOnAddBtn(): Promise<void> {
    const button = element(by.css('button[routerlink="add"]'));
    await button.click();
  }

  async getLastArticle(): Promise<Article> {
    const id = await element(by.css('tbody tr:last-child')).getAttribute('id');
    const name = await element(by.css('tbody tr:last-child td.name')).getText();
    const priceStr = await element(
      by.css('tbody tr:last-child td.price')
    ).getText();
    const qtyStr = await element(
      by.css('tbody tr:last-child td.qty')
    ).getText();

    const price1 = priceStr.substring(0, priceStr.length - 2);

    const price = +price1;
    const qty = +qtyStr;

    return { id, name, price, qty };
  }
}
