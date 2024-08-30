Feature: Generate liquidation 

Background:
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in
    And I go to the payments assistant menu option
    And I go to the salary option
    And I should be loaded into the payments page
    And I click on Add all button for add all employees
    And should be add all without terminated employees

Scenario: Generate liquidation for employees 
    When I want to generate the payroll liquidations
    Then I visualize the progress window to continue with the generation
    And I confirm the generation of payroll liquidations