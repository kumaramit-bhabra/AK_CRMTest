package com.qa.Pages;

import com.qa.Base.TestBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class ContactsPage extends TestBase
{
    public String firstName = "tester12";
    public String lastName = "tester12";
    
    public boolean userOnContactPage()
    {
        boolean contactPgVal = false;
        contactPgVal = driver.findElement(By.xpath(prop.getProperty("contactPageContInfo"))).isDisplayed();
        return contactPgVal;
    }

    public void enterContactDetails()
    {
        WebElement titleDrpDwn = driver.findElement(By.name(prop.getProperty("contPgTitle")));
        Select select = new Select(titleDrpDwn);
        select.selectByVisibleText("Mr.");

        driver.findElement(By.id(prop.getProperty("contPgFirstName"))).sendKeys(firstName);
        driver.findElement(By.id(prop.getProperty("contPgLastName"))).sendKeys(lastName);
        driver.findElement(By.xpath(prop.getProperty("contPgSaveBttn"))).submit();
    }

    public boolean validateNewContactCreation()
    {
        boolean newContactCreated = false;
        //newContactCreated = driver.findElement(By.xpath(prop.getProperty("contPgConHdr"))).isDisplayed();
        newContactCreated = driver.findElement(By.xpath(prop.getProperty("contPgContDet")+"'"+firstName+" "+lastName+"')]")).isDisplayed();
        driver.findElement(By.xpath(prop.getProperty("contactsLink"))).click();
        newContactCreated = driver.findElement(By.xpath(prop.getProperty("contPgContNameContactsTbl")+"'"+firstName+" "+lastName+"']")).isDisplayed();
        return newContactCreated;
    }
}
