Feature: To test the login functionality in "Saucedemo"

Background: 
   Given the user is on login page

Scenario: The one where user fails to login without filling out the login
   When the user leaves the username blank and enters the password "secret_sauce"
   And clicks on Login button
   Then the user must remain on login page displaying a message "<errorMessage>"

Examples:
| username | password     | errorMessage                       |
|          | secret_sauce | Epic sadface: Username is required |