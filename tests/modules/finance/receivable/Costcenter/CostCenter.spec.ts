

import { test, expect,Page, request, APIResponse } from '@playwright/test';
import { CostCenterPage } from './CostCenter.pages';
import { Config } from '@tests/shared/environment-configuration';
//import { NtlmClient } from 'ntlm-client' // plz install --> npm install ntlm-client
//const sql = require('mssql');
let page:Page;
const RandomTxt = Math.random().toString(36).substring(2,6);

const costCenterCode:string='TestCostCenterCode-'+RandomTxt;
const costCenterEnName:string='TestCostCenterEnName-'+RandomTxt;
const costCenterArName:string='TestCostCenter-'+RandomTxt+' عربي';
const costCenterURL:string='/finance/general-ledger/setup/cost-center';
const conf=new Config;


test('AddCostCenter', async({page}) => {
  const CostCenter=new CostCenterPage(page);
  await CostCenter.gotoCostCenter(costCenterURL);

  await CostCenter.addCostCenter(costCenterCode,costCenterEnName,costCenterArName);
    
  test.slow();
  page.getByText(costCenterEnName, { exact: true });

  await CostCenter.filterCCEnName(costCenterEnName);
  page.getByText(costCenterEnName, { exact: true });

  CostCenter.successToaster.waitFor({state: "visible"});
  expect (CostCenter.successToaster).toHaveText('Saved Successfully');
  await CostCenter.successToaster.waitFor({state: "hidden"});


});

test('EditCostCenter', async({page}) => {
  const CostCenter=new CostCenterPage(page);
  await CostCenter.gotoCostCenter(costCenterURL);

  await CostCenter.filterCCEnName(costCenterEnName);
  page.getByText(costCenterEnName, { exact: true });

  await CostCenter.editCostCenter(costCenterCode+'-Edited',costCenterEnName+'-Edited',costCenterArName+'-Edited');
  
  test.slow();
  page.getByText(costCenterCode+'-Edited', { exact: true });

  test.slow();
  await CostCenter.filterCCEnName(costCenterCode+'-Edited');
  page.getByText(costCenterCode+'-Edited', { exact: true });

  CostCenter.successToaster.waitFor({state: "visible"});
  expect (CostCenter.successToaster).toHaveText('Saved Successfully');
  await CostCenter.successToaster.waitFor({state: "hidden"});

  });

  test('DeleteCostCenter', async({page}) => {
    const CostCenter=new CostCenterPage(page);
    await CostCenter.gotoCostCenter(costCenterURL);

    await CostCenter.filterCCEnName(costCenterCode+'-Edited');
    page.getByText(costCenterCode+'-Edited', { exact: true });

    CostCenter.deleteCostcenter();
    
    test.slow();
-
    /*
try 
{
  // Disable SSL certificate validation for testing (not recommended for production)
  await sql.connect({
    server: 'aws-systest-01\\mssqlserver19',
    port: 1433,
    database: 'System.Test.Env.HCMS.Main',
    user: 'readuser',
    password: 'readpass',
    encrypt: false,
    options: {
      trustServerCertificate: true,
    },
  });

  const sqlQuery = `SELECT TOP 1 cc.IsDeleted from finance.CostCenter cc WHERE cc.EnName LIKE '%TestCostCenter-${RandomTxt} Edited%' ORDER BY cc.ID DESC`;

  const sqlresult = await sql.query(sqlQuery);

  
  expect(sqlresult.recordset). toEqual([{ IsDeleted: true }]);

  console.debug(sqlresult.recordset);

   // Log the result data
} //end try

catch (err) 
{
  console.debug(err);
  // ... error checks
}//end catch
*/
    }); // delete costcenter
 
    
    test('api test', async ({request}) => {
      /*
      const TestURL = "https://disqus.com/api/3.0/forums/details?forum=koooora&attach=forumFeatures&api_key=E8Uh5l5fHZ6gD8U3KycjAIAk46f68Zw7C6eW8WSjZvCLXebZ7p0r1yrYDrLilk2F";
      const response = await request.get(TestURL);
      const statusCode = response.status(); //get the status code
     // expect(response.status()).toBe(200);
      console.debug('The Response Status --> '+statusCode);
      const responseBody = JSON.parse(await response.text());
      console.debug(responseBody);
      console.debug('ResponseBody with Name --> '+responseBody.response.twitterName); // using responseBody. you can do jsonpath to validate the value in the response
     
    */});



/*
      test('DotCare api test', async ({request}) => {
        const ntlmClient = new NtlmClient({
          username: Lc.Windowsusername,
          password: Lc.Windowspassword,
          Domain:Lc.Windowsdomain
        });

        async function performNtlmAuthentication(page: Page, credentials: any) {
          const ntlmClient = new NtlmClient(credentials);
        
          await ntlmClient.authenticate();
        }

        await performNtlmAuthentication(page,ntlmClient);

        
       /* 
        const TestURL = Lc.SystemURL+"/Finance.Service/odata/CostCenterOData?&$count=true&%24format=json&%24top=10&%24orderby=ID%20desc";
        const response = await request.get(TestURL);
        const statusCode = response.status(); //get the status code
        expect(response.status()).toBe(200);
  
        console.debug('The Response Status --> '+statusCode);
        const responseBody = JSON.parse(await response.text());
        console.debug(responseBody);
        console.debug('ResponseBody with Name --> '+responseBody.response.TestURL); // using responseBody. you can do jsonpath to validate the value in the response

        
        });
  */

       // test.afterAll(async ({page}) => {  await page.close();}  );

 