Feature: Creating pets

  Scenario Outline: Create a pet
    When I create a pet with the following attributes
      | name   |
      | <NAME> |
    Then the response status is 200
    And the response contains the following attributes
      | name   |
      | <NAME> |

    Examples:
      | NAME   |
      | Lucy   |
      | Watson |
