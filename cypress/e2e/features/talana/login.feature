Feature: Login Test

Scenario: Successful login
  Given I open the login page
  When I submit login credentials
  Then I should be logged in


