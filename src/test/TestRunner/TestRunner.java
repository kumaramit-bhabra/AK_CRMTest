import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "C:\\Users\\Admin\\Documents\\GitHub Automation\\AK_CRMTest\\src\\test\\feature\\ContactsPage.feature",
        plugin = {"pretty", "html:test-output"},
        glue = {"com.qa.TestPages"},
        monochrome = true,
        dryRun = false
)
public class TestRunner {
}
