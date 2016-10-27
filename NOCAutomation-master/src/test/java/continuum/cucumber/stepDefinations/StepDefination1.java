package continuum.cucumber.stepDefinations;

import continuum.cucumber.Page.NocHomePage;
import continuum.cucumber.Page.PageFactory;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import continuum.cucumber.Page.SLAMissedReport;

public class StepDefination1 extends PageFactory { 

	@When("^User clicks on Activity  Main Menu$")
	public void user_clicks_on_Activity_Main_Menu() throws Throwable {
		nocHomePage.ToOpenActivity();
	}

	@Then("^Verify Correct Sub menus get displayed  in Activity Main Menu$")
	public void verify_Correct_Sub_menus_get_displayed_in_Activity_Main_Menu() throws Throwable {
		nocHomePage.ToVerifyElementActivity();
	}
	
	@When("^User clicks on Analysis  Main Menu$")
	public void user_clicks_on_Analysis_Main_Menu() throws Throwable {
		nocHomePage.ToOpenAnalysis();
	   
	}

	@Then("^Verify Correct Sub menus get displayed in Analysis Main Menu$")
	public void verify_Correct_Sub_menus_get_displayed_in_Analysis_Main_Menu() throws Throwable {
		nocHomePage.ToVerifyElementAnalysis();
	}
	
	@When("^User clicks on DashboardInbox  Main Menu$")
	public void user_clicks_on_DashboardInbox_Main_Menu() throws Throwable {
		nocHomePage.ToOpenDashboardInbox();
	}

	@Then("^Verify Correct Sub menus get displayed  in DashboardInbox Main Menu$")
	public void verify_Correct_Sub_menus_get_displayed_in_DashboardInbox_Main_Menu() throws Throwable {
		nocHomePage.ToVerifyDashboardInbox();
	}


@When("^User clicks on  ITS(\\d+) Tools Main Menu$")
public void user_clicks_on_ITS_Tools_Main_Menu(int arg1) throws Throwable {
	nocHomePage.ToOpenITS247tools();
}

@Then("^Verify Correct Sub menus get displayed in ITS(\\d+)Tools Main Menu$")
public void verify_Correct_Sub_menus_get_displayed_in_ITS_Tools_Main_Menu(int arg1) throws Throwable {
	nocHomePage.ToVerifyElementITS247tools();   
}

@When("^User clicks on Management  Main Menu$")
public void user_clicks_on_Management_Main_Menu() throws Throwable {
	nocHomePage.ToOpenManagement();
}

@Then("^Verify Correct Sub menus get displayed in Management Main Menu$")
public void verify_Correct_Sub_menus_get_displayed_in_Management_Main_Menu() throws Throwable {
	nocHomePage.ToVerifyElementManagement();
}
	
@When("^User clicks on Quick Reports  Main Menu$")
public void user_clicks_on_Quick_Reports_Main_Menu() throws Throwable {
	nocHomePage.ToOpenQuickReports();
}

@Then("^Verify Correct Sub menus get displayed  in Quick Reports Main Menu$")
public void verify_Correct_Sub_menus_get_displayed_in_Quick_Reports_Main_Menu() throws Throwable {
	nocHomePage.ToVerifyElementQuickReports();
}

@When("^User clicks on Report  Main Menu$")
public void user_clicks_on_Report_Main_Menu() throws Throwable {
	nocHomePage.ToOpenReport();
}

@Then("^Verify Correct Sub menus get displayed in Report Main Menu$")
public void verify_Correct_Sub_menus_get_displayed_in_Report_Main_Menu() throws Throwable {
	nocHomePage.ToVerifyElementReport();
}

@When("^User clicks on Settings  Main Menu$")
public void user_clicks_on_Settings_Main_Menu() throws Throwable {
	nocHomePage.ToOpenSettings();
}

@Then("^Verify Correct Sub menus get displayed  in Settings Main Menu$")
public void verify_Correct_Sub_menus_get_displayed_in_Settings_Main_Menu() throws Throwable {
	nocHomePage.ToVerifyElementSettings();  
}


@When("^User clicks on SLA missed & Hourly flow report under Quick Reports Main Menu$")
public void user_clicks_on_SLA_missed_Hourly_flow_report_under_Quick_Reports_Main_Menu() throws Throwable {
	SLAreport.ToOpenSLAMissedhourlyreport();
}

@Then("^System should open up SLA missed & Hourly flow report$")
public void system_should_open_up_SLA_missed_Hourly_flow_report() throws Throwable {
	SLAreport.ToVerifyElementLocatorSLAMissedhourlyreport();
}

@Then("^All required menus, buttons and fields should be displayed$")
public void all_required_menus_buttons_and_fields_should_be_displayed() throws Throwable {
	SLAreport.ToVerifyElementLocatorSLAMissedhourlyreport();
}

@Then("^User should be able to click fields$")
public void user_should_be_able_to_click_fields() throws Throwable {
	SLAreport.ToGenerateSLAMissedhourlyreport();
}




}
