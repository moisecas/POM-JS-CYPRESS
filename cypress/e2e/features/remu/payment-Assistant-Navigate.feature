Feature: Navigate to salary payment assistant

Background: Successful Login
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Open the payment page
    When I go to the payments assistant menu option
    And I go to the salary option
    Then I should be loaded into the payments page 