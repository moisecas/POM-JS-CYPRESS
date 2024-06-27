Feature: Add employees to salary payment assistant

Background: Successful Login
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Add all employees without terminated employees option in salary Page
    And I am on the payments page
    And the switch include terminated is off
    When I click on Add all button for add all employees
    Then should be add all without terminated employees