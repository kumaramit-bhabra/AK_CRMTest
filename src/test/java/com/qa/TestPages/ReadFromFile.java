package com.qa.TestPages;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


import java.io.File;
import java.io.FileInputStream;
import java.util.Iterator;
import java.util.Properties;

public class ReadFromFile
{
    @BeforeMethod
    public void readFromFile()
    {
        try
        {
            
            String filePathName = "C:\\Users\\Admin\\Documents\\Test_Data.xlsx";
            FileInputStream inputStream = new FileInputStream(new File(filePathName));
            Workbook  workbook = new XSSFWorkbook(inputStream);
            Sheet firstSheet = workbook.getSheetAt(0);
            Iterator<Row> iterator = firstSheet.iterator();

            while (iterator.hasNext())
            {
                Row nextRow = iterator.next();
                Iterator<Cell> cellIterator = nextRow.cellIterator();

                while (cellIterator.hasNext()) {
                    Cell cell = cellIterator.next();

                    switch (cell.getCellType()) {
                        case Cell.CELL_TYPE_STRING:
                            System.out.print(cell.getStringCellValue());
                            break;
                        case Cell.CELL_TYPE_BOOLEAN:
                            System.out.print(cell.getBooleanCellValue());
                            break;
                        case Cell.CELL_TYPE_NUMERIC:
                            System.out.print(cell.getNumericCellValue());
                            break;
                    }
                    System.out.print(" - ");
                }
                System.out.println();
            }
            inputStream.close();

        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
    }
    @Test
    public void testMethod()
    {
        System.out.println("Hello World");
    }

}
