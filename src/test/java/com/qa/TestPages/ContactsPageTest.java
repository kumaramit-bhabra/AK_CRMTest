package com.qa.TestPages;

import com.qa.Base.TestBase;
import com.qa.Pages.ContactsPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class ContactsPageTest extends TestBase
{
    ContactsPage contactsPage = new ContactsPage();

    @Given("^User is on the New Contact Page$")
    public void validateUserOnContactsPage()
    {
        Assert.assertTrue("User is not on the Contacts Page", contactsPage.userOnContactPage());
    }

    @And("^enters the \"(.*)\" and \"(.*)\" for new contact$")
    public void enterContactInformationTest(String firstName, String lastName)
    {
        contactsPage.enterContactDetails(firstName, lastName);
    }

    @Then("^new contact should be created$")
    public void isNewContactCreatedTest()
    {
        Assert.assertTrue("Contact is not getting created",contactsPage.validateNewContactCreation());
    }


}
