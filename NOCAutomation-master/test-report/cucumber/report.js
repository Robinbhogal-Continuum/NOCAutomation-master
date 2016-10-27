$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoSprint/BVT.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to check all sub Menus in all Main Menus of NOC Portal",
  "description": "",
  "id": "as-a-user-i-want-to-check-all-sub-menus-in-all-main-menus-of-noc-portal",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Open NOC application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User is login to NOC portal",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.openApplication()"
});
formatter.result({
  "duration": 3541364043,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_NOC_portal()"
});
formatter.result({
  "duration": 36006878996,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify all sub menus under Main Menu of NOC Portal",
  "description": "",
  "id": "as-a-user-i-want-to-check-all-sub-menus-in-all-main-menus-of-noc-portal;verify-all-sub-menus-under-main-menu-of-noc-portal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Robin"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User clicks on Activity  Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Verify Correct Sub menus get displayed  in Activity Main Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User clicks on Analysis  Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Verify Correct Sub menus get displayed in Analysis Main Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "User clicks on  ITS247 Tools Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Verify Correct Sub menus get displayed in ITS247Tools Main Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User clicks on Management  Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Verify Correct Sub menus get displayed in Management Main Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User clicks on Settings  Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Verify Correct Sub menus get displayed  in Settings Main Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User clicks on Report  Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Verify Correct Sub menus get displayed in Report Main Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "User clicks on DashboardInbox  Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "Verify Correct Sub menus get displayed  in DashboardInbox Main Menu",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User clicks on Quick Reports  Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "Verify Correct Sub menus get displayed  in Quick Reports Main Menu",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination1.user_clicks_on_Activity_Main_Menu()"
});
formatter.result({
  "duration": 3337647947,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.verify_Correct_Sub_menus_get_displayed_in_Activity_Main_Menu()"
});
formatter.result({
  "duration": 725035296,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.user_clicks_on_Analysis_Main_Menu()"
});
formatter.result({
  "duration": 3202197613,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.verify_Correct_Sub_menus_get_displayed_in_Analysis_Main_Menu()"
});
formatter.result({
  "duration": 411056957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "247",
      "offset": 19
    }
  ],
  "location": "StepDefination1.user_clicks_on_ITS_Tools_Main_Menu(int)"
});
formatter.result({
  "duration": 3158914135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "247",
      "offset": 45
    }
  ],
  "location": "StepDefination1.verify_Correct_Sub_menus_get_displayed_in_ITS_Tools_Main_Menu(int)"
});
formatter.result({
  "duration": 194060456,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.user_clicks_on_Management_Main_Menu()"
});
formatter.result({
  "duration": 3222662370,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.verify_Correct_Sub_menus_get_displayed_in_Management_Main_Menu()"
});
formatter.result({
  "duration": 752052757,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.user_clicks_on_Settings_Main_Menu()"
});
formatter.result({
  "duration": 3174844774,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.verify_Correct_Sub_menus_get_displayed_in_Settings_Main_Menu()"
});
formatter.result({
  "duration": 422511944,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.user_clicks_on_Report_Main_Menu()"
});
formatter.result({
  "duration": 3144551751,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.verify_Correct_Sub_menus_get_displayed_in_Report_Main_Menu()"
});
formatter.result({
  "duration": 910932524,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.user_clicks_on_DashboardInbox_Main_Menu()"
});
formatter.result({
  "duration": 3176054741,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.verify_Correct_Sub_menus_get_displayed_in_DashboardInbox_Main_Menu()"
});
formatter.result({
  "duration": 1306284402,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.user_clicks_on_Quick_Reports_Main_Menu()"
});
formatter.result({
  "duration": 3155812779,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.verify_Correct_Sub_menus_get_displayed_in_Quick_Reports_Main_Menu()"
});
formatter.result({
  "duration": 1182039396,
  "status": "passed"
});
});