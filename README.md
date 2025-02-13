# saucedemo cucumber tests

## How to run?

Run all tests:

`npm run test`

Headless mode:

`npm run test:headless`

## Execution result

```
» /features/login.feature
To test the login functionality in "Saucedemo"
The one where user fails to login without filling out the login
   ✅ Given the user is on login page
   ✅ When the user leaves the username "" blank and enters the password "secret_sauce"
   ✅ And clicks on Login button
   ✅ Then the user must remain on login page displaying a message "Epic sadface: Username is required"
4 passing (652ms)
```
