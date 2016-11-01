package continuum.cucumber.Page;

import continuum.cucumber.Locator;
import continuum.cucumber.WebdriverWrapper;

import java.io.File;
import java.io.FileInputStream;
import java.util.Set;

import org.apache.poi.ss.usermodel.Workbook;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;

import continuum.cucumber.DriverFactory;
import continuum.cucumber.Locator;
import continuum.cucumber.Utilities;
import continuum.cucumber.WebdriverWrapper;

public class SLAMissedReport {
	
	WebdriverWrapper wd=new WebdriverWrapper();

	
	public Locator QuickReports = new  Locator ("QuickReports", "//table[@id='dm0m0i5it']/tbody/tr/td[2]");
	public Locator SLAMissedHourlyFlowReport = new  Locator ("SLAMissedHourlyFlowReport", "//table[@id='dm0m30i19it']/tbody/tr/td[2]");	
	public Locator Fromdate = new  Locator ("Fromdate", "//form[@id='frmSLAMissed']/div[2]/div/div[2]/span/span//input[@id='FromDate']");
	public Locator Todate = new Locator ("Todate", "//form[@id='frmSLAMissed']/div[2]/div[2]/div[2]/span/span//input[@id='ToDate']");
	public Locator ReportType = new Locator ("SLAMissedHourlyFlowReport", "//html/body/div[1]/form/div[2]/div[5]/div[2]/span/span"); 
	public Locator SwitchGroup = new Locator ("SLAMissedHourlyFlowReport", "//html/body/div[1]/form/div[2]/div[4]/div[2]/span/span/span[1]");
	public Locator Teams = new Locator ("Teams", "//html/body/div[1]/form/div[2]/div[6]/div[2]/span/span/span[1]");
	public Locator Family = new Locator ("Family", "//html/body/div[1]/form/div[2]/div[7]/div[2]/span/span/span[1]");
	public Locator EscalationCategory = new Locator ("EscalationCategory", "//html/body/div[1]/form/div[2]/div[10]/div[2]/span/span/span[1]");
	public Locator ReportFor = new Locator ("ReportFor", "//html/body/div[1]/form/div[2]/div[11]/div[2]/span/span/span[1]");
	public Locator TimeDurationGreaterThan = new Locator ("TimeDurationGreaterThan", "//html/body/div[1]/form/div[2]/div[15]/div[2]/span[1]/span/span");
	public Locator TimeDurationMinutes = new Locator ("TimeDurationMinutes", "//html/body/div[1]/form/div[2]/div[15]/div[2]/span[1]/span/span");
	public Locator TimeZone = new Locator ("TimeZone", "//html/body/div[1]/form/div[2]/div[16]/div[2]/span/span/span[1]");
	public Locator MSP = new Locator ("MSP", "//html/body/div[1]/form/div[2]/div[17]/div[2]/span/input");
	public Locator SubmitButton = new Locator ("SubmitButton", "//html/body/div[1]/form/div[2]/div[18]/div/input");
	
			
	
	public void ToOpenSLAMissedhourlyreport(){
		
        wd.mouseHover(QuickReports);
		wd.waitFor(200);
		
		wd.clickElement(SLAMissedHourlyFlowReport);
		wd.waitFor(8000);
		wd.switchToNewWindow();
		wd.waitFor(3000);
	
	}
		
public void ToVerifyElementLocatorSLAMissedhourlyreport(){
		
		Assert.assertEquals(wd.findElementPresent(Fromdate),true,"Fromdate Field is present");
		Assert.assertEquals(wd.findElementPresent(ReportType),true,"ReportType drop down is present");
		Assert.assertEquals(wd.findElementPresent(Todate ),true,"Todate  drop down is present");
		Assert.assertEquals(wd.findElementPresent(SwitchGroup  ),true,"SwitchGroup   drop down is present");
		Assert.assertEquals(wd.findElementPresent(Teams  ),true,"Teams   drop down is present");
		Assert.assertEquals(wd.findElementPresent(Family  ),true,"Family   drop down is present");
		Assert.assertEquals(wd.findElementPresent(EscalationCategory  ),true,"EscalationCategory   drop down is present");
		Assert.assertEquals(wd.findElementPresent(ReportFor  ),true,"ReportFor   drop down is present");
		Assert.assertEquals(wd.findElementPresent(TimeDurationGreaterThan  ),true,"TimeDurationGreaterThan   drop down is present");
		Assert.assertEquals(wd.findElementPresent(TimeDurationMinutes  ),true,"TimeDurationMinutes   drop down is present");
		Assert.assertEquals(wd.findElementPresent(TimeZone  ),true,"TimeZone   drop down is present");
		Assert.assertEquals(wd.findElementPresent(MSP  ),true,"MSP   drop down is present");
		Assert.assertEquals(wd.findElementPresent(SubmitButton  ),true,"SubmitButton   drop down is present");
			
}

public void ToGenerateSLAMissedhourlyreport(){
	   
	//wd.sendKeys(Utilities.getKeyValue("SLAData", "TC_001", "Fromdate"),Fromdate);
	
	wd.sendKeys(Utilities.getKeyValue("SLAData", "TC_001", "Switch Group"),SwitchGroup);
	
	wd.clickElement(SubmitButton);
	wd.getWebdriver().close();
	
}

}
	
		
	
		
		
	
		
		
		//Assert.assertEquals(wd.findElementPresent(ReportType),true,"Report Type drop down is present");
		//wd.getWebdriver().close();
		
		 //Set handles =wd.getWebdriver().getWindowHandles(); 
		 //System.out.println(handles);
		 
		 //for (String handle1 : wd.getWebdriver().getWindowHandles()) {
			 
	        	//System.out.println(handle1);

	        	//wd.getWebdriver().switchTo().window(handle1);
	       
	        	//}
		
		//System.out.println("SLA Report open");
		//wd.waitFor(10000);
		//wd.switchToNewWindow();
		//System.out.println("Switch to new window");	
		//String parentWindow = wd.getWebdriver().getWindowHandle();
		//Set<String> handles =  wd.getWebdriver().getWindowHandles();
		  // for(String windowHandle  : handles)
		    //   {
		      // if(!windowHandle.equals(parentWindow))
		        //  {
		    	  // wd.getWebdriver().switchTo().window(windowHandle);
		    	  
		    	   //wd.getWebdriver().manage().window().maximize();
		    	   //wd.waitFor(3000);
		    	   //wd.clickElement(ReportType);
		      
		    	  
		         //wd.getWebdriver().close();
		         //wd.getWebdriver().switchTo().window(parentWindow);
		         
		      
		       
		   
		   
		
		
	
		
		
		
		
		
	

