# Saucedemo Test Automation

E2E test automation framework for [saucedemo.com](https://www.saucedemo.com) built with WebdriverIO and TypeScript.

## Tech Stack

- [WebdriverIO](https://webdriver.io/) — test automation framework
- TypeScript — language
- Mocha — test runner
- Page Object Model — design pattern
- Allure — test reporting

## Project Structure

```
saucedemo-wdio/
├── test/
│   ├── pageobjects/
│   │   ├── page.ts            # base page class
│   │   ├── login.page.ts      # login page selectors & methods
│   │   ├── inventory.page.ts  # inventory page selectors & methods
│   │   ├── cart.page.ts       # cart page selectors & methods
│   │   └── checkout.page.ts   # checkout page selectors & methods
│   └── specs/
│       ├── 01.login.spec.ts
│       ├── 02.inventory.spec.ts
│       ├── 03.cart.spec.ts
│       └── 04.checkout.spec.ts
├── TEST_CASES.md
├── wdio.conf.ts
├── tsconfig.json
└── package.json
```

## Prerequisites

- Node.js >= 18
- Google Chrome (latest)

## Installation

```bash
npm install
```

## Running Tests

Run all tests:
```bash
npx wdio run wdio.conf.ts
```

Run a specific spec file:
```bash
npx wdio run wdio.conf.ts --spec ./test/specs/01.login.spec.ts
```

## Test Reports

Generate and open Allure report after test run:
```bash
npx allure serve allure-results
```

## Test Cases

See [TEST_CASES.md](./TEST_CASES.md) for the full list of test cases.

| ID | Title | Area |
|----|-------|------|
| TC-01 | Login with valid credentials | Login |
| TC-02 | Login with invalid credentials | Login |
| TC-03 | Login with empty fields | Login |
| TC-04 | Checkout with one product and valid information | Checkout |
| TC-05 | Checkout with multiple products and valid information | Checkout |
| TC-06 | Checkout with invalid information | Checkout |
| TC-07 | Checkout with whitespace information | Checkout |
| TC-08 | Checkout with empty information | Checkout |
| TC-09 | Checkout without products | Checkout |

## Known Bugs

**TC-09:** The Checkout button on an empty cart does not display an error message — it proceeds to the next step instead. The test reflects the expected behaviour per the test case specification.
