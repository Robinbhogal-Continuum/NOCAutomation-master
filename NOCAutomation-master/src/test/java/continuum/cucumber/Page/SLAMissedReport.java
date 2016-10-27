package continuum.cucumber.Page;

import continuum.cucumber.Locator;
import continuum.cucumber.WebdriverWrapper;

import java.util.Set;

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
	
	public Locator Fromdate = new  Locator ("Fromdate", "//form[@id='frmSLAMissed']/div[2]/div/div[2]/span/span//input[@id='FromDate']");
	public Locator SLAMissedHourlyFlowReport = new  Locator ("SLAMissedHourlyFlowReport", "//table[@id='dm0m30i19it']/tbody/tr/td[2]");
	
	public Locator ReportType = new Locator ("SLAMissedHourlyFlowReport", "//html/body/div[1]/form/div[2]/div[5]/div[2]/span/span"); 
			
			
	
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
	
}
	public void ToGenerateSLAMissedhourlyreport(){
	   
		wd.clickElement(Fromdate);
		wd.clickElement(ReportType);
		wd.getWebdriver().close();
		
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
		         
		      
		       
		   
		   
		
		
	
		
		
		
		
		
	
}
