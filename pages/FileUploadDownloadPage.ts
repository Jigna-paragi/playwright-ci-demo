import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class FileUploadDownloadPage extends BasePage {
  readonly uploadInput: Locator;
  readonly uploadedFilePath: Locator;
  readonly downloadBtn: Locator;

  constructor(page: Page) {
    super(page);

    this.uploadInput = page.locator('#uploadFile');
    this.uploadedFilePath = page.locator('#uploadedFilePath');
    this.downloadBtn = page.locator('#downloadButton');
  }

  async open() {
  await this.navigate('https://demoqa.com/upload-download');
}

  async uploadFile(filePath: string) {
    await this.uploadInput.setInputFiles(filePath);
  }

  async verifyUploadedFile(fileName: string) {
    await expect(this.uploadedFilePath).toContainText(fileName);
  }

  async downloadFile() {
    const downloadPromise = this.page.waitForEvent('download');
    await this.downloadBtn.click();
    const download = await downloadPromise;

    await download.saveAs(`downloads/${download.suggestedFilename()}`);
  }
}
