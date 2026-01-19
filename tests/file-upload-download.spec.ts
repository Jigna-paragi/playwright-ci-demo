import { test } from '@playwright/test';
import { FileUploadDownloadPage } from '../pages/FileUploadDownloadPage';
import path from 'path';

test('User can upload and download a file', async ({ page }) => {
  const filePage = new FileUploadDownloadPage(page);

  // Open page
  await filePage.open();

  // Prepare file path
  const filePath = path.resolve('test-data/sample-upload.txt');

  // Upload
  await filePage.uploadFile(filePath);
  await filePage.verifyUploadedFile('sample-upload.txt');

  // Download
  await filePage.downloadFile();
});
