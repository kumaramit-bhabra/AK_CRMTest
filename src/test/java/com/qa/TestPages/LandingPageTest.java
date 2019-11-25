package com.qa.TestPages;

import com.qa.Base.TestBase;
import com.qa.Pages.LandingPage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.net.MalformedURLException;

public class LandingPageTest extends TestBase
{
    LandingPage landingPage;

//    public LandingPageTest()
//    {
//        super();
//    }

    @Before
    // @Given("^user has launched the browser and entered the URL$")
    public void setUp() throws MalformedURLException {
        initialization();
        landingPage = new LandingPage();
        System.out.println("In Before Method");
    }

    @Then("^Landing Page having title should be displayed$")
    public void homePageTitleTest()
    {
        boolean landingPageTitleValidation = false;
        landingPageTitleValidation = landingPage.landingPageTitle();
        Assert.assertTrue("Title of the page is not correct", landingPageTitleValidation );
    }

    @And("^Options for UN and Password should be displayed and enabled$")
    public void optionForLoginTest()
    {
        Assert.assertTrue("One of the options for UN/PW is not enabled", landingPage.optionForUNAndPW() );
    }

    @And("^Login button should be enabled$")
    public void isLoginBttnEnabledTest()
    {
        Assert.assertTrue("Login Bttn is not enabled", landingPage.isLoginBttnEnabled());
    }

    @Then("^Enters the \"(.*)\" and \"(.*)\"$")
    public void enterUNAndPWTest(String useName, String passWd)
    {
        landingPage.entersUserNameAndPW(useName,passWd);
    }

    @And ("^Click on Login Button$")
    public void clickLoginBttnTest()
    {
        landingPage.clickLoginBttn();
    }

    @After
    //@Then( "^Closes the browser$")
    public void closes_the_browser()
    {
        System.out.println("In tear down method");
        driver.quit();
        System.out.println("In tear down method 123");
    }
}
