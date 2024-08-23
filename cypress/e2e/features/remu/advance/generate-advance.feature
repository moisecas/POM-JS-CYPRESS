Feature: Generate advance

Background:
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in
    And I go to the payments assistant menu option
    And I go to section advance
    And I should be loaded onto "Asistente de Anticipo" page
    And I add all employees
    And I visualize the added employees modal "Se agregaron" 

Scenario: Generate advance for employees 
    When I want to generate the payroll advance 
    Then I visualize the progress window to continue with the generation advance
    And I confirm the generation of payroll advance
