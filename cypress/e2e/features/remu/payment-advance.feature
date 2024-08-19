Feature: Add employees

Background: 
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in
    And I go to the payments assistant menu option
    And I go to section advance
    And I should be loaded onto "Asistente de Anticipo" page

Scenario: Add all employees 
    When I add all employees
    Then I visualize the added employees modal "Se agregaron" 