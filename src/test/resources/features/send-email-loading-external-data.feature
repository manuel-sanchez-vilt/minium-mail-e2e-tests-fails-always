# language: en
# ------------------------------------------------------------------------------
Feature: Send Emails (Loading External Data CSV)

  Background: 
    Given I'm at Minium Mail

  Scenario: Send an Email
    When I click on button "Compose"
    And I fill:
      # @source:data/data-table.csv
      | Recipients | Rui Figueira   |
      | Subject    | Minium Test    |
      | Message    | My new Message |
    And I click on button "Send"
    And I navigate to section "Sent"
    Then I should see an email with:
      # @source:data/data-table.csv
      | Recipients | Rui Figueira   |
      | Subject    | Minium Test    |
      | Message    | My new Message |

  Scenario Outline: Send simple emails
    When I click on button "Compose"
    And I fill:
      | Recipients | <to>      |
      | Subject    | <subject> |
      | Message    | <message> |
    And I click on button "Send"
    And I navigate to section "Sent"
    Then I should see an email with:
      | Recipients | <to>      |
      | Subject    | <subject> |
      | Message    | <message> |

    Examples: 
      # @source:data/data-for-examples.csv
      | to             | subject      | message                                                 |
      | Rui Figueira   | Minium Test  | My New messages                                         |
      | Mario Lameiras | BDD + Minium | Egestas morbi at. Curabitur aliquet et commodo nonummy  |
      | Mario Lameiras | Lorem ipsum  | Lorem ipsum dolor sit amet, consectetur adipiscing elit |
