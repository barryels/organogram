Feature: All

  Scenario: Shows a list of teams in an organisation
    When the user visits the "Home" page
    Then the "ACME" heading should be visible
    And the following list of teams should be visible
      | name                            |
      | No Lucks Given                  |
      | Agatha Crispy                   |
      | Baking Bad                      |
      | What's Louvre Got to Do With It |
      | We're On Mute                   |
      | Ambitious Bishes                |
      | Down for the Account            |
      | Slack Attack                    |
      | Mission Implausible             |
      | Watching Cat Videos At Work     |
      | Zoom-Crashing Pets              |

  Scenario: Shows a list of people in an organisation
    When the user visits the "Home" page
    Then the "ACME" heading should be visible
    And the following list of people should be visible
      | name               | title                 | tools                                          |
      | Anita N Smith      | CEO                   | People Management, Finance, Architecture       |
      | Jeremy Tamsin      | Executive Assistant   | People Management                              |
      | Yarik Aina         | CPO                   | People Management                              |
      | Juliet Boban       | Senior Talent Manager | People Management                              |
      | Mao Josie          | CFO                   | Finance                                        |
      | Ebba Titus         | Finance Admin         | Finance                                        |
      | Carson Rodriguez   | Finance Admin         | Finance                                        |
      | Itzel Leonard      | New Business          | People Management, Finance                     |
      | Paulina Rice       | CTO                   | People Management, Architecture                |
      | Damon Ross         | Business Head         | People Management, Finance                     |
      | Rhys Wolfe         | Business Head         | People Management, Finance                     |
      | Mathias Rowland    | Product Owner         | People Management, Finance, Project Management |
      | Cosme Calvo        | Product Owner         | People Management, Finance, Project Management |
      | Marshall Schaefer  | Product Owner         | People Management, Finance, Project Management |
      | Bentley French     | Designer              | Figma                                          |
      | Harper Guerra      | Designer              | Figma                                          |
      | In??s Ferrer        | Designer              | Figma                                          |
      | Aurora Cantu       | Designer              | Figma                                          |
      | Cayden Smith       | Designer              | Figma                                          |
      | Drake Collins      | Designer              | Photoshop                                      |
      | Ricardo Crespo     | Designer              | Photoshop                                      |
      | Mara Welch         | Designer              | Photoshop                                      |
      | Slade Logan        | Copywriter            | MS Word                                        |
      | Jovany Coffey      | Copywriter            | MS Word                                        |
      | Jaydon Dennis      | Copywriter            | MS Word                                        |
      | Daniel Santiago    | Copywriter            | Google Docs                                    |
      | Arnav Lam          | Copywriter            | Google Docs                                    |
      | Dax Joyce          | Copywriter            | Google Docs, Notion                            |
      | Aitor Pe??a         | Copywriter            | Google Docs                                    |
      | Marcos Dur??n       | Developer             | JavaScript                                     |
      | Damon Kaufman      | Developer             | JavaScript                                     |
      | Ifigenia Serrano   | Developer             | JavaScript                                     |
      | Arturo Mar??n       | Developer             | JavaScript                                     |
      | Carolina Velasquez | Developer             | JavaScript                                     |
      | Nehemiah Murphy    | Developer             | JavaScript                                     |
      | Marco Marks        | Developer             | JavaScript                                     |
      | Leandro Ortiz      | Developer             | JavaScript                                     |
      | Armando Mejia      | Developer             | JavaScript                                     |
      | Alberto Gregory    | Developer             | JavaScript                                     |
      | Amirah Sheppard    | Developer             | JavaScript                                     |
      | Chaim Hawkins      | Developer             | JavaScript                                     |
      | Makenna Lucas      | Developer             | Ruby                                           |
      | Dorian Osborne     | Developer             | Ruby                                           |
      | Luc??a Cambil       | Developer             | Ruby                                           |
      | Eduvigis Fern??ndez | Developer             | Ruby                                           |
      | Aaron Wise         | Developer             | Ruby                                           |
      | Dayanara Rosario   | Developer             | C#                                             |
      | Amya Greene        | Developer             | C#                                             |
      | Marin Terrell      | Developer             | C#                                             |
      | Jamie Ashley       | Developer             | C#                                             |
      | Dominique Burke    | Developer             | C#                                             |
      | Ascensi??n Cort??s   | Developer             | C#                                             |
      | Darien Novak       | Developer             | C#                                             |

  Scenario: Use search box to filter people by name
    When the user visits the "Home" page
    And they type "b" in the "Search by anything" input
    And the following list of people should be visible
      | name               |
      | Juliet Boban       |
      | Ebba Titus         |
      | Bentley French     |
      | Alberto Gregory    |
      | Makenna Lucas      |
      | Dorian Osborne     |
      | Luc??a Cambil       |
      | Eduvigis Fern??ndez |
      | Aaron Wise         |
      | Dominique Burke    |
    And they type "b" in the "Search by anything" input
    And the following list of people should be visible
      | name          |
      | Ebba Titus    |
    When they clear the "Search by anything" input
    And they type "ANI" in the "Search by anything" input
    And the following list of people should be visible
      | name            |
      | Anita N Smith   |
      | Daniel Santiago |

  Scenario: Use search box to filter people by tool
    When the user visits the "Home" page
    And they type "javasc" in the "Search by anything" input
    And the following list of people should be visible
      | name               |
      | Marcos Dur??n       |
      | Damon Kaufman      |
      | Ifigenia Serrano   |
      | Arturo Mar??n       |
      | Carolina Velasquez |
      | Nehemiah Murphy    |
      | Marco Marks        |
      | Leandro Ortiz      |
      | Armando Mejia      |
      | Alberto Gregory    |
      | Amirah Sheppard    |
      | Chaim Hawkins      |
