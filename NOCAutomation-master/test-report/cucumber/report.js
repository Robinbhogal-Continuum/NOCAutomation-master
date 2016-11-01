$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoSprint/SLAreport.feature");
formatter.feature({
  "line": 1,
  "name": "As a user I want to Test SLA Missed \u0026 Hourly flow report",
  "description": "",
  "id": "as-a-user-i-want-to-test-sla-missed-\u0026-hourly-flow-report",
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
  "duration": 3529445156,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_NOC_portal()"
});
formatter.result({
  "duration": 35774710123,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify that user is able to open SLA missed \u0026 Hourly flow report",
  "description": "",
  "id": "as-a-user-i-want-to-test-sla-missed-\u0026-hourly-flow-report;verify-that-user-is-able-to-open-sla-missed-\u0026-hourly-flow-report",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@SLA"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User clicks on SLA missed \u0026 Hourly flow report under Quick Reports Main Menu",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "System should open up SLA missed \u0026 Hourly flow report",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "All required menus, buttons and fields should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User should be able to click fields",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefination1.user_clicks_on_SLA_missed_Hourly_flow_report_under_Quick_Reports_Main_Menu()"
});
formatter.result({
  "duration": 18878495107,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.system_should_open_up_SLA_missed_Hourly_flow_report()"
});
formatter.result({
  "duration": 585759527,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.all_required_menus_buttons_and_fields_should_be_displayed()"
});
formatter.result({
  "duration": 522396378,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination1.user_should_be_able_to_click_fields()"
});
formatter.result({
  "duration": 4554437028,
  "status": "passed"
});
});