Feature: Ecom Functionality Checked
In order to use the application
As a valid user
I want to check some functionality of ecom website

  Scenario: Successful login with valid credentials and checked others functionality
    Given I am on the ecom login  page
    When I log in with valid e com user credentials
    Then I should see the homepage
    Then Check search functionality working

  @test
  Scenario: Ordering products from the website
    Given I am on the ecom login  page
    When I log in with valid e com user credentials
    Then Added products to the cart
    Then Submit the order
