$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DemoSprint/TicketGenerate.feature");
formatter.feature({
  "line": 1,
  "name": "As a user status I want to create ticket on NOC with different status",
  "description": "",
  "id": "as-a-user-status-i-want-to-create-ticket-on-noc-with-different-status",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify ticket created in NOC",
  "description": "",
  "id": "as-a-user-status-i-want-to-create-ticket-on-noc-with-different-status;verify-ticket-created-in-noc",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@BVTTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is able to create ticket in NOC portal for \"\u003cMember\u003e\", \"\u003cSite\u003e\",\"\u003cResource\u003e\" with status in \"\u003cStatus\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify ticket created in Database",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "as-a-user-status-i-want-to-create-ticket-on-noc-with-different-status;verify-ticket-created-in-noc;",
  "rows": [
    {
      "cells": [
        "Member",
        "Site",
        "Status"
      ],
      "line": 14,
      "id": "as-a-user-status-i-want-to-create-ticket-on-noc-with-different-status;verify-ticket-created-in-noc;;1"
    },
    {
      "cells": [
        "CMSPL32",
        "Georgia",
        "New"
      ],
      "line": 15,
      "id": "as-a-user-status-i-want-to-create-ticket-on-noc-with-different-status;verify-ticket-created-in-noc;;2"
    }
  ],
  "keyword": "Examples"
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
  "duration": 3536670480,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_is_login_to_NOC_portal()"
});
formatter.result({
  "duration": 35310727706,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify ticket created in NOC",
  "description": "",
  "id": "as-a-user-status-i-want-to-create-ticket-on-noc-with-different-status;verify-ticket-created-in-noc;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@BVTTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is able to create ticket in NOC portal for \"CMSPL32\", \"Georgia\",\"\u003cResource\u003e\" with status in \"New\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Verify ticket created in Database",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "CMSPL32",
      "offset": 49
    },
    {
      "val": "Georgia",
      "offset": 60
    },
    {
      "val": "\u003cResource\u003e",
      "offset": 70
    },
    {
      "val": "New",
      "offset": 98
    }
  ],
  "location": "StepDefinations.user_is_able_to_create_ticket_in_NOC_portal_for_with_status_in(String,String,String,String)"
});
formatter.result({
  "duration": 42768963730,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //table[@id\u003d\u0027innertable\u0027]/tbody/tr[2]/td (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 295 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027RMM-LT-654\u0027, ip: \u002710.2.14.173\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, enablePersistentHover\u003dfalse, ie.forceCreateProcessApi\u003dfalse, ie.usePerProcessProxy\u003dfalse, ignoreZoomSetting\u003dfalse, handlesAlerts\u003dtrue, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:48182/, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dtrue, enableElementCacheCleanup\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: 58990e30-321b-4263-bf67-7ffaf1e18fa8\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027innertable\u0027]/tbody/tr[2]/td}\nCommand duration or timeout: 542 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-654\u0027, ip: \u002710.2.14.173\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{browserAttachTimeout\u003d0, enablePersistentHover\u003dfalse, ie.forceCreateProcessApi\u003dfalse, ie.usePerProcessProxy\u003dfalse, ignoreZoomSetting\u003dfalse, handlesAlerts\u003dtrue, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, webdriver.remote.sessionid\u003d9c673180-8c61-4716-a4e1-e70b3546836d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:48182/, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dtrue, enableElementCacheCleanup\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: 9c673180-8c61-4716-a4e1-e70b3546836d\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027innertable\u0027]/tbody/tr[2]/td}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat continuum.cucumber.Page.NOCGenerateTicketPage.createTicket(NOCGenerateTicketPage.java:50)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_is_able_to_create_ticket_in_NOC_portal_for_with_status_in(StepDefinations.java:79)\r\n\tat ✽.When User is able to create ticket in NOC portal for \"CMSPL32\", \"Georgia\",\"\u003cResource\u003e\" with status in \"New\"(DemoSprint/TicketGenerate.feature:9)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-654\u0027, ip: \u002710.2.14.173\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat continuum.cucumber.Page.NOCGenerateTicketPage.createTicket(NOCGenerateTicketPage.java:50)\r\n\tat continuum.cucumber.stepDefinations.StepDefinations.user_is_able_to_create_ticket_in_NOC_portal_for_with_status_in(StepDefinations.java:79)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.model.CucumberScenarioOutline.run(CucumberScenarioOutline.java:46)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat continuum.cucumber.testRunner.TestRunner.feature(TestRunner.java:73)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.apache.maven.surefire.testng.TestNGExecutor.run(TestNGExecutor.java:295)\r\n\tat org.apache.maven.surefire.testng.TestNGXmlTestSuite.execute(TestNGXmlTestSuite.java:84)\r\n\tat org.apache.maven.surefire.testng.TestNGProvider.invoke(TestNGProvider.java:90)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.invokeProviderInSameClassLoader(ForkedBooter.java:203)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:155)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:103)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //table[@id\u003d\u0027innertable\u0027]/tbody/tr[2]/td (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 295 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1\u0027, time: \u00272016-06-30 17:37:03\u0027\nSystem info: host: \u0027RMM-LT-654\u0027, ip: \u002710.2.14.173\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities [{browserAttachTimeout\u003d0, enablePersistentHover\u003dfalse, ie.forceCreateProcessApi\u003dfalse, ie.usePerProcessProxy\u003dfalse, ignoreZoomSetting\u003dfalse, handlesAlerts\u003dtrue, version\u003d11, platform\u003dWINDOWS, nativeEvents\u003dtrue, ie.ensureCleanSession\u003dfalse, elementScrollBehavior\u003d0, ie.browserCommandLineSwitches\u003d, requireWindowFocus\u003dfalse, browserName\u003dinternet explorer, initialBrowserUrl\u003dhttp://localhost:48182/, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, ignoreProtectedModeSettings\u003dtrue, enableElementCacheCleanup\u003dtrue, cssSelectorsEnabled\u003dtrue, unexpectedAlertBehaviour\u003ddismiss}]\nSession ID: 58990e30-321b-4263-bf67-7ffaf1e18fa8\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027innertable\u0027]/tbody/tr[2]/td}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027RMM-LT-654\u0027, ip: \u002710.2.14.173\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat sun.reflect.GeneratedMethodAccessor15.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:103)\r\n\tat com.sun.proxy.$Proxy1.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:188)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:266)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\r\n\tat java.lang.Thread.run(Thread.java:745)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.verify_ticket_created_in_Database()"
});
formatter.result({
  "status": "skipped"
});
});