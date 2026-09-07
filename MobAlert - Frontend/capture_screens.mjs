import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';

const docsDir = path.resolve('..', 'docs');
if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

async function capture() {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('1. Navigating to Sign In (/signin)...');
  await page.goto('http://localhost:5173/signin', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(docsDir, 'auth_login.png') });
  console.log('Saved auth_login.png');

  console.log('2. Performing login with sample account...');
  await page.type('#auth-email', 'admin@mobalert.com');
  await page.type('#auth-password', 'password123');
  await page.click('button[type="submit"]');

  await new Promise(r => setTimeout(r, 3000));

  console.log('3. Capturing Admin Home...');
  await page.screenshot({ path: path.join(docsDir, 'admin_operations_dashboard.png') });
  console.log('Saved admin_operations_dashboard.png');

  console.log('4. Navigating to Create Event...');
  await page.goto('http://localhost:5173/admin/create-event', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(docsDir, 'create_event_geofence.png') });
  console.log('Saved create_event_geofence.png');

  console.log('5. Navigating to Events List...');
  await page.goto('http://localhost:5173/admin/events', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(docsDir, 'admin_events_list.png') });
  console.log('Saved admin_events_list.png');

  console.log('6. Navigating to Settings...');
  await page.goto('http://localhost:5173/admin/settings', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(docsDir, 'admin_settings.png') });
  console.log('Saved admin_settings.png');

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(err => {
  console.error(err);
  process.exit(1);
});
