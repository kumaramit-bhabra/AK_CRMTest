package com.qa.TestPages;

import com.qa.Base.TestBase;
import com.qa.Pages.HomePage;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class HomePageTest extends TestBase
{
    HomePage homePage;

    public HomePageTest()
    {
        homePage = new HomePage();
    }

    @Then("Home Page should be displayed")
    public void validateTitleHomePageTest()
    {
        Assert.assertTrue("Title is incorrect", homePage.homePageTitle());
    }

    @Then("Logged in User name should be displayed")
    public void isUserNameDisplayedTest()
    {
        Assert.assertTrue("Looged in User Name is not getting displayed", homePage.userNameCheck());
    }

    @Then("User clicks on Calendar Link")
    public void calendarLinkTest()
    {
        homePage.clickOnCalendar();
    }

    @Then("User clicks on Companies Link")
    public void companiesLinkTest()
    {
        homePage.clickOnCompanies();
    }

    @Then("User clicks on Contacts Link")
    public void contactLinksTest()
    {
        homePage.clickOnContacts();
    }

    @Then("User clicks on Deals New Deals Link")
    public void dealLinksTest()
    {
        homePage.clickOnNewDealsLink();
    }

    @Then("User clicks on New Contacts link")
    public void clickOnNewContactsLinkTest()
    {
        homePage.clickOnNewContactsLink();
    }
}
