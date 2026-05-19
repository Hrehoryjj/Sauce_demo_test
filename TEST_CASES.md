# Test Cases — Saucedemo.com

## TC-01 — Login with valid credentials

**Objective:** Verify login is possible with valid credentials

**Preconditions:** User is on the home page (https://www.saucedemo.com/)

**Test Data:** Login: `standard_user` / Password: `secret_sauce`

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Insert valid Login | — |
| 2 | Insert valid Password | — |
| 3 | Click "Login" | Login successful, inventory page is displayed |

---

## TC-02 — Login with invalid credentials

**Objective:** Verify login is not possible with invalid credentials

**Preconditions:** User is on the home page (https://www.saucedemo.com/)

**Test Data:** Login: `error` / Password: `error`

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Insert invalid Login | — |
| 2 | Insert invalid Password | — |
| 3 | Click "Login" | Login unsuccessful, user remains on the Home page, error message: _"Epic sadface: Username and password do not match any user in this service"_ is displayed |

---

## TC-03 — Login with empty fields

**Objective:** Verify login is not possible with empty fields

**Preconditions:** User is on the home page (https://www.saucedemo.com/)

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Click "Login" | Login unsuccessful, user remains on the Home page, error message: _"Epic sadface: Username is required"_ is displayed |

---

## TC-04 — Checkout with one product and valid information

**Objective:** Verify it is possible to checkout with one product

**Preconditions:**
1. User is logged in (`standard_user`)
2. User is on the inventory page (`/inventory.html`)

**Test Data:** First Name: `Tester` / Last Name: `Testerovic` / Zip code: `00001`

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Click "Add to cart" on the first product | — |
| 2 | Click the Cart button (top right corner) | — |
| 3 | Click "Checkout" | — |
| 4 | Fill in valid information | — |
| 5 | Click "Continue" | Redirected to `/checkout-step-two.html` |
| 6 | Click "Finish" | Redirected to `/checkout-complete.html` |

---

## TC-05 — Checkout with multiple products and valid information

**Objective:** Verify it is possible to checkout with multiple products

**Preconditions:**
1. User is logged in (`standard_user`)
2. User is on the inventory page (`/inventory.html`)

**Test Data:** First Name: `Tester` / Last Name: `Testerovic` / Zip code: `00001`

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Click "Add to cart" on the first three products | — |
| 2 | Click the Cart button (top right corner) | — |
| 3 | Click "Checkout" | — |
| 4 | Fill in valid information | — |
| 5 | Click "Continue" | — |
| 6 | Click "Finish" | Redirected to `/checkout-complete.html` |

---

## TC-06 — Checkout with invalid information (numbers)

**Objective:** Verify it is not possible to checkout with invalid information

**Preconditions:**
1. User is logged in (`standard_user`)
2. User is on the inventory page (`/inventory.html`)

**Test Data:** First Name: `111` / Last Name: `111` / Zip code: `a`

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Click "Add to cart" on the first product | — |
| 2 | Click the Cart button (top right corner) | — |
| 3 | Click "Checkout" | — |
| 4 | Fill in invalid information | — |
| 5 | Click "Continue" | Error message: _"Error: invalid information"_ is displayed |

---

## TC-07 — Checkout with whitespace information

**Objective:** Verify it is not possible to checkout with whitespace-only fields

**Preconditions:**
1. User is logged in (`standard_user`)
2. User is on the inventory page (`/inventory.html`)

**Test Data:** First Name: `" "` / Last Name: `" "` / Zip code: `" "`

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Click "Add to cart" on the first product | — |
| 2 | Click the Cart button (top right corner) | — |
| 3 | Click "Checkout" | — |
| 4 | Fill in whitespace data | — |
| 5 | Click "Continue" | Error message: _"Error: First Name is required"_ is displayed |

---

## TC-08 — Checkout with empty information

**Objective:** Verify it is not possible to checkout with empty fields

**Preconditions:**
1. User is logged in (`standard_user`)
2. User is on the inventory page (`/inventory.html`)

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Click "Add to cart" on the first product | — |
| 2 | Click the Cart button (top right corner) | — |
| 3 | Click "Checkout" | — |
| 4 | Leave all fields empty | — |
| 5 | Click "Continue" | Error message: _"Error: First Name is required"_ is displayed |

---

## TC-09 — Checkout without products

**Objective:** Verify checkout is not possible with an empty cart

**Preconditions:**
1. User is logged in (`standard_user`)
2. User is on the inventory page (`/inventory.html`)

> ⚠️ **Known bug:** On saucedemo.com the Checkout button in an empty cart does not show an error — it proceeds to the next page. The expected result below reflects the intended behaviour per the test case specification, not the actual behaviour of the site.

| # | Step | Expected Result |
|---|------|-----------------|
| 1 | Click the Cart button (top right corner) | Cart page is displayed, no products shown |
| 2 | Click "Checkout" | User remains on the Cart page, error message: _"Cart is empty"_ is displayed |
