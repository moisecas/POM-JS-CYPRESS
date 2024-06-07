Feature: Generate Liquidation

Background: Successful Login
    Given I enter in to the login from page 
    When I login with the valid username 
    Then I should be successfully logged in

Scenario: Open the payment page
    Given I go to the payments assistant menu option
    When I got to the salary option
    Then I should be loaded into the payments page
@focus 
Scenario: Add all employees without terminated employees option in salary Page
    Given I go to salary page in to the payment assistant
    And the switch inlude terminated is off
    When I click on Add all button for add al employees
    Then should be add all without terminated employees
