Feature: Add employees to salary payment assistant

Background: Successful Login
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in
    And I go to the payments assistant menu option
    And I go to the salary option
    And I should be loaded into the payments page

Scenario: Add all employees without terminated employees option in salary Page
    And the switch include terminated is off
    When I click on Add all button for add all employees
    Then should be add all without terminated employees 