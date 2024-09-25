Feature: LBS Individual 

Background:
    Given I enter in to the login from page
    And I login with the valid username
    And I should be successfully logged in

Scenario: Generate LBS 
    Given the user visits the employee's profile with ID "45440930"
    When the user clicks on the "LBS" button
    And the user clicks on "Generate LBS"
    Then the payslip should exist in the employee's folder