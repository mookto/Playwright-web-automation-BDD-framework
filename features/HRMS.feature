Feature: Login
In order to use the application
As a valid user
I want to log in successfully

  @sanity
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I log in with valid credentials
    Then I should see the dashboard

  @smoke
  Scenario: Successful login with Supervisor
    Given I am on the login page
    When I log in with Supervisor  credentials
    Then I should see the dashboard
    Then View payslip details
    Then Check noticeboard view
