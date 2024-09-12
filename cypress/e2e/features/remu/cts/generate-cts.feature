Feature: Generate CTS 

Background:
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in
    And I go to section cts
    And I should be redirected to the "Asistente de CTS" page
    And I include all employees for CTS
    And I should visualize the "Se agregaron" modal 

Scenario: Generate CTS for all employees 
    When I want to generate the payroll CTS 
    Then I visualize the progress window to continue with the generation CTS
    And I confirm the generation of payroll CTS "Asistente de CTS - Resultado"