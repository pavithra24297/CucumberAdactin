package com.adactin.runner;

import java.io.FileInputStream;
import java.io.IOException;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.FileReaderManager;
import com.adactinpom.org.BaseClass2;

import cucumber.api.CucumberOptions;
import cucumber.api.Plugin;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\adactin\\feature", 
                 glue = "com\\adactin\\stepdefintion",
                 plugin={"pretty","html:Report",
                		 "com.cucumber.listener.ExtentCucumberFormatter:Report\\extentReport.html"},
                		 //"json:target1/cucumber.json",
                		 //"html:normal.html"},
                 monochrome = true,
                 dryRun=false,
                 strict=true,
                 tags = {"@RegressionTest"}
                 )

public class AdactinRunner {
	
	public static  WebDriver driver;
	
	@BeforeClass
	public static void setup() throws IOException {
		
		String browserlaunch = FileReaderManager.getInstance().crInstance().getBrowserlaunch();
		driver=BaseClass2.browserLaunch(browserlaunch);
	}
		@AfterClass
	public static void tearDown() {
		driver.close();
	}
	
	
	

}
	
	
			
