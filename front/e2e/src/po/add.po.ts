import { Article } from './../../../src/app/interfaces/article';
import { browser, by, element } from 'protractor';

export class AddPage {
  async fillForm(a1: Article) {
    for (const key of Object.keys(a1)) {
      if (key === 'id') {
        continue;
      }
      const input = element(by.css(`input[formcontrolname="${key}"]`));
      await input.clear();
      await input.sendKeys((a1 as any)[key]);
    }
  }

  async submit() {
    const button = element(by.css('button[type="submit"]'));
    await button.click();
  }
}
