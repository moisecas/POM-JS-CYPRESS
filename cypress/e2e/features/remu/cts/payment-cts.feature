Feature: Add employees cts

Background: 
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in
    And I go to section cts
    And I should be redirected to the "Asistente de CTS" page

Scenario: Add all employees cts
    When I include all employees for CTS
    Then I should visualize the "Se agregaron" modal 