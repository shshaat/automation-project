import { defineConfig, devices } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  //globalSetup: require.resolve('./tests/shared/global.setup'),
  /* Run tests in files in parallel */
  fullyParallel: true,
  timeout:150000,
  expect:{
    timeout: 50000,
  },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
     baseURL: 'http://backoffice-prelive.andalusiagroup.net:8090',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    launchOptions:{
      slowMo: 500,
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      testMatch: '*.spec.ts',
      use: { 
        ...devices['Desktop Chrome'],
        storageState: './authentication.json',
    },
      dependencies: ['setup'],
    },
    {
      name: 'setup',
      testMatch: /global.setup\.ts/,
    },
  ],

});
