import { Article } from './../../../src/app/interfaces/article';
import { by, element } from 'protractor';

export class AddPage {
  async fillForm(a1: Article): Promise<void> {
    for (const key of Object.keys(a1)) {
      if (key === 'id') {
        continue;
      }
      const input = element(by.css(`input[formcontrolname="${key}"]`));
      await input.clear();
      await input.sendKeys((a1 as any)[key]);
    }
  }

  async submit(): Promise<void> {
    const button = element(by.css('button[type="submit"]'));
    await button.click();
  }
}
