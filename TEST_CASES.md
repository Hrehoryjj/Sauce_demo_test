# Test Cases — Saucedemo.com

---

## Login

### TC-01 — Valid Login

**Objective:** Verify login is possible with valid credentials

**Preconditions:** User is on the login page (https://www.saucedemo.com/)

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Enter valid login into "Login" field | `standard_user` | Data is entered to the field |
| 2 | Enter valid password into "Password" field | `secret_sauce` | Data is entered to the field, data is represented as dots instead of characters |
| 3 | Click "Login" button | — | User is redirected to the inventory page, products and cart are displayed |

---

### TC-02 — Login with invalid password

**Objective:** Verify login is not possible with invalid credentials

**Preconditions:** User is on the login page (https://www.saucedemo.com/)

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Enter valid login into "Login" field | `standard_user` | Data is entered to the field |
| 2 | Enter invalid password into "Password" field | any random value | Data is entered to the field |
| 3 | Click "Login" button | — | Login unsuccessful, user remains on the login page, error message _"Epic sadface: Username and password do not match any user in this service"_ is displayed |

---

### TC-03 — Login with locked out user

**Objective:** Verify locked out user cannot login

**Preconditions:** User is on the login page (https://www.saucedemo.com/)

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Enter valid login into "Login" field | `locked_out_user` | Data is entered to the field |
| 2 | Enter valid password into "Password" field | `secret_sauce` | Data is entered to the field, data is represented as dots instead of characters |
| 3 | Click "Login" button | — | "X" icons are displayed on the "Login" and "Password" fields highlighted with red. _"Epic sadface: Sorry, this user has been locked out."_ error message is displayed |

---

### TC-04 — Login with empty fields

**Objective:** Verify login is not possible with empty fields

**Preconditions:** User is on the login page (https://www.saucedemo.com/)

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click "Login" button | — | Login unsuccessful, user remains on the login page, error message _"Epic sadface: Username is required"_ is displayed |

---

### TC-05 — Logout

**Objective:** Verify logout functionality

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

#### Scenario A — Simple logout

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click on the "Burger" button at the top left corner | — | Menu is expanded, 4 items are displayed |
| 2 | Click on the "Logout" button | — | User is redirected to the "Login" page, "Username" and "Password" fields are empty |

#### Scenario B — Cart persists after logout and login

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click "Add to cart" button near any product | — | The number near the cart increases by 1, product is added to cart |
| 2 | Click on the "Burger" button at the top left corner | — | Menu is expanded, 4 items are displayed |
| 3 | Click on the "Logout" button | — | User is redirected to the "Login" page, "Username" and "Password" fields are empty |
| 4 | Login with the same valid credentials | `standard_user` / `secret_sauce` | User is redirected to the inventory page, products and cart are displayed |
| 5 | Click on the "Cart" button at the top right corner | — | Cart page is displayed, product is the same as added in step 1 |

---

## Sorting

### TC-06 — Sorting products

**Objective:** Verify all sorting options work correctly

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Choose sorting option from the dropdown | Price (low to high) | All products are sorted by price from lowest to highest |
| 2 | Choose sorting option from the dropdown | Price (high to low) | All products are sorted by price from highest to lowest |
| 3 | Choose sorting option from the dropdown | Name (A to Z) | All products are sorted alphabetically A to Z |
| 4 | Choose sorting option from the dropdown | Name (Z to A) | All products are sorted alphabetically Z to A |

---

## Footer

### TC-07 — Footer social links

**Objective:** Verify footer social links open correct pages in a new tab

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click on the "Twitter" icon in the footer | — | Twitter page of the company is opened in a new tab |
| 2 | Return to the main page and click on the "Facebook" icon in the footer | — | Facebook page of the company is opened in a new tab |
| 3 | Return to the main page and click on the "LinkedIn" icon in the footer | — | LinkedIn page of the company is opened in a new tab |

---

## Checkout

### TC-08 — Valid checkout with one product

**Objective:** Verify it is possible to complete checkout with one product and valid information

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click "Add to cart" button near any product | — | Number near the cart increases by 1, product is added to cart |
| 2 | Click on the "Cart" button at the top right corner | — | Cart page is displayed with the selected product |
| 3 | Click on the "Checkout" button | — | Checkout form is displayed |
| 4 | Fill the "First Name" field | `Tester` | Data is entered to the field |
| 5 | Fill the "Last Name" field | `Testerovic` | Data is entered to the field |
| 6 | Fill the "Postal Code" field | `00001` | Data is entered to the field |
| 7 | Click on the "Continue" button | — | User is redirected to the "Overview" page, product from step 1 is displayed, total price equals price of product |
| 8 | Click on the "Finish" button | — | User is redirected to the "Checkout Complete" page, _"Thank you for your order!"_ message is displayed |
| 9 | Click on the "Back Home" button | — | User is redirected to the inventory page, products are displayed, cart is empty |

---

### TC-09 — Valid checkout with multiple products

**Objective:** Verify it is possible to complete checkout with multiple products

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click "Add to cart" on the first three products | — | Products are added, cart icon shows 3 items |
| 2 | Click on the "Cart" button at the top right corner | — | Cart page is displayed with 3 selected products |
| 3 | Click on the "Checkout" button | — | Checkout form is displayed |
| 4 | Fill in valid information | `Tester` / `Testerovic` / `00001` | All fields are filled correctly |
| 5 | Click on the "Continue" button | — | User is redirected to the "Overview" page, all 3 products are displayed |
| 6 | Click on the "Finish" button | — | User is redirected to the "Checkout Complete" page, _"Thank you for your order!"_ message is displayed |

---

### TC-10 — Checkout with invalid information

**Objective:** Verify checkout is not possible with invalid field values

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

> ⚠️ **Known bug:** The application accepts numbers as first and last name and a single character as zip code — no validation error is shown and the user is able to proceed.

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click "Add to cart" on the first product | — | Product is added, cart icon shows 1 item |
| 2 | Click on the "Cart" button | — | Cart page is displayed with the selected product |
| 3 | Click on the "Checkout" button | — | Checkout form is displayed |
| 4 | Fill in invalid information | `111` / `111` / `a` | All fields are filled with invalid data |
| 5 | Click on the "Continue" button | — | Error message _"Error: invalid information"_ is displayed |

---

### TC-11 — Checkout with whitespace information

**Objective:** Verify checkout is not possible with whitespace-only fields

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

> ⚠️ **Known bug:** The application accepts whitespace as valid input — no validation error is shown and the user is able to proceed.

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click "Add to cart" on the first product | — | Product is added, cart icon shows 1 item |
| 2 | Click on the "Cart" button | — | Cart page is displayed with the selected product |
| 3 | Click on the "Checkout" button | — | Checkout form is displayed |
| 4 | Fill all fields with spaces | `" "` / `" "` / `" "` | Fields appear filled |
| 5 | Click on the "Continue" button | — | Error message _"Error: First Name is required"_ is displayed |

---

### TC-12 — Checkout with empty information

**Objective:** Verify checkout is not possible with empty fields

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click "Add to cart" on the first product | — | Product is added, cart icon shows 1 item |
| 2 | Click on the "Cart" button | — | Cart page is displayed with the selected product |
| 3 | Click on the "Checkout" button | — | Checkout form is displayed |
| 4 | Leave all fields empty | — | All fields remain empty |
| 5 | Click on the "Continue" button | — | Error message _"Error: First Name is required"_ is displayed |

---

### TC-13 — Checkout without products

**Objective:** Verify checkout is not possible with an empty cart

**Preconditions:** User is logged in (`standard_user`), user is on the inventory page

> ⚠️ **Known bug:** The Checkout button on an empty cart does not display an error — it proceeds to the next step. The expected result reflects the intended behaviour per the test case specification.

| # | Step | Data | Expected Result |
|---|------|------|-----------------|
| 1 | Click on the "Cart" button at the top right corner | — | Cart page is displayed, no products are shown |
| 2 | Click on the "Checkout" button | — | User remains on the Cart page, error message _"Cart is empty"_ is displayed |