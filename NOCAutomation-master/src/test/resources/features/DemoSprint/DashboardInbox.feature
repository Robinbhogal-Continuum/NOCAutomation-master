Feature: As a user I want to check all sub Menus in DashboardInbox Main Menu

Background:
 Given Open NOC application 
 And User is login to NOC portal 


Scenario: Verify sub menus in  DashboardInbox Main Menu
 When  User clicks on DashboardInbox  Main Menu
 Then Verify Correct Sub menus get displayed  in DashboardInbox Main Menu

  