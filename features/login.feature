Feature: To test the login functionality in "Saucedemo"

   Background:
      Given User is located on the main page of saucedemo website

   Scenario: User fails to login without filling out the login form
      When User clicks "Login" button
      Then User should see "Epic sadface: Username is required" error message
