Feature: Generate liquidation 

Background:
    Given I am logged in and on the payments assistant page
    When I have added all employees without terminated ones

Scenario: Generate liquidation for employees 
    When I click on the step one
    And I confirm the generation of payroll liquidations
    And I click on the step two
    And I see the payroll liquidation processing window
    And I click on the step three
    Then I should see the payroll generation processing window
    And I visualize the print liquidations button