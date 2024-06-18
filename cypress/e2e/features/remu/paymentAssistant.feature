Feature: Generate Liquidation

Background: Successful Login
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Open the payment page
    When I go to the payments assistant menu option
    And I go to the salary option
    Then I should be loaded into the payments page

Scenario: Add all employees without terminated employees option in salary Page
    Given I am on the payments page
    And the switch include terminated is off
    When I click on Add all button for add all employees
    Then should be add all without terminated employees

