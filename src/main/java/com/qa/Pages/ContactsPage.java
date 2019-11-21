package com.qa.Pages;

import com.qa.Base.TestBase;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class ContactsPage extends TestBase
{
    public String valFirstName = "";
    public String valLastName = "";
    
    public boolean userOnContactPage()
    {
        boolean contactPgVal = false;
        contactPgVal = driver.findElement(By.xpath(prop.getProperty("contactPageContInfo"))).isDisplayed();
        return contactPgVal;
    }

    public void enterContactDetails(String firstName, String lastName)
    {
        valFirstName = firstName;
        valLastName = lastName;
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
        newContactCreated = driver.findElement(By.xpath(prop.getProperty("contPgContDet")+"'"+valFirstName+" "+valLastName+"')]")).isDisplayed();
        driver.findElement(By.xpath(prop.getProperty("contactsLink"))).click();
        newContactCreated = driver.findElement(By.xpath(prop.getProperty("contPgContNameContactsTbl")+"'"+valFirstName+" "+valLastName+"']")).isDisplayed();
        return newContactCreated;
    }
}
