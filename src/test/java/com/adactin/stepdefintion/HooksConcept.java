package com.adactin.stepdefintion;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.Scenario;
public class HooksConcept {
	@Before("@RegressionTest")
	public void beforeScenario() {
		System.out.println("BEFORE:============RegressionTest============");

	}
	
	@After("@RegressionTest")
	public void afterScenario() {
        System.out.println("AFTER:============RegressionTest============");
	}

}
