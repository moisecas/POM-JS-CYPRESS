Feature: Navigate to CTS payment assistant

Background: 
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Open the advance page 
    When I go to section cts
    Then  I should be redirected to the "Asistente de CTS" page