import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:4200',
    trace: 'on-first-retry',
  },
  webServer: process.env.BASE_URL
    ? undefined // Do not start a web server if BASE_URL is provided (against prod)
    : {
        command: 'npx serve -s ./dist/angular-portfolio-app/browser -l 4200',
        url: 'http://localhost:4200',
        reuseExistingServer: !process.env.BASE_URL,
        timeout: 180 * 1000,
        stdout: 'pipe',
        stderr: 'pipe',
      },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
