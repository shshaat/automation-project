
//const { test, expect } = require('@playwright/test');

import capturePatientPage from '@tests/shared/components/capture-patient/capture-patient.page'

export async function capturePatient(page){
  const capPatient = new capturePatientPage(page)
  capPatient.navigateToPage(page);
  capPatient.captureAction(page);
}

  
