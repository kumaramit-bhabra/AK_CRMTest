package com.qa.TestPages;

import com.qa.Base.TestBase;
import com.qa.Pages.DealsPage;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

import java.util.List;

public class DealsPageTest extends TestBase
{
    DealsPage dealsPage = new DealsPage();

    @Given("user is on the Deals Page")
    public void user_is_on_the_Deals_Page()
    {
        Assert.assertTrue("User is not on the Deals Page",dealsPage.userOnDealsPage()) ;
    }

    @Then("user enters the details for the Deals")
    public void user_enters_the_details_for_the_Deals(DataTable dataTable)
    {
        dealsPage.enterDealDetails(dataTable);
    }

    @Then("Clicks on Save button to create deal")
    public void clicks_on_Save_button_to_create_deal()
    {
        dealsPage.clickOnSaveBttnToCreateDeal();
    }

    @Then("user enters the details for the Deals and click on Save")
    public void userEntersTheDetailsForTheDealsAndClickOnSave(DataTable dataTable)
    {
        dealsPage.enterDealDetailsForMultRecAndSave(dataTable);
    }
}
