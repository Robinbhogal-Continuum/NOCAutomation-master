Feature: As a user I want to Test SLA Missed & Hourly flow report

Background:
 Given Open NOC application 
 And User is login to NOC portal 
 
@SLA
Scenario: Verify that user is able to open SLA missed & Hourly flow report
 When  User clicks on SLA missed & Hourly flow report under Quick Reports Main Menu
 Then System should open up SLA missed & Hourly flow report
And All required menus, buttons and fields should be displayed
And  User should be able to click fields