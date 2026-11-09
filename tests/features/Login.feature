Feature: verify login

Scenario: verify login with valid credentials
Given user is on login page
When user enters valid username
And user enters valid password
And user clicks on login button
Then user should be navigated to the home page
