//declare function netSalaryCalculator
function netSalaryCalculator(basicSalary, benefits) {
 //using let declare output variables 
  let paye, nhifDeductions,nssfDeductions,grossSalary,netSalary;
//using condititonal statement find appropriate paye based on basic salary levels
  if (basicSalary <= 24000) {
    paye = basicSalary * 0.1;
  } else if (basicSalary <= 32333) {
    paye = basicSalary * 0.25;
  } else if (basicSalary <= 500000) {
    paye = basicSalary * 0.3;
  } else if (basicSalary <= 800000) {
    payee = basicSalary * 0.325;
  } else {
    paye = basicSalary * 0.35;
  }
//using condititonal statement find appropriate nhif deductions based on basic salary levels
  if (basicSalary <= 5999) {
    nhifDeductions = 150;
  } else if (basicSalary <= 7999) {
    nhifDeductions = 300;
  } else if (basicSalary <= 11999) {
    nhifDeductions = 400;
  } else if (basicSalary <= 14999) {
    nhifDeductions = 500;
  } else if (basicSalary<=19999) {
    nhifDeductions = 600;
  } else if (basicSalary<=24999) {
    nhifDeductions = 750;
  } else if (basicSalary<=29999) {
    nhifDeductions = 850;
  } else if (basicSalary<=34999) {
    nhifDeductions = 900;
  } else if (basicSalary<=39999) {
    nhifDeductions = 950;
  } else if (basicSalary<=44999) {
    nhifDeductions = 1000;
  } else if (basicSalary<=49999) {
    nhifDeductions = 1100;
  } else if (basicSalary<=59999) {
    nhifDeductions = 1200;
  } else if (basicSalary<=69999) {
    nhifDeductions = 1300;
  } else if (basicSalary<=79999) {
    nhifDeductions = 1400;
  } else if (basicSalary<=89999) {
    nhifDeductions = 1500;
  } else if (basicSalary<=99999) {
    nhifDeductions = 1600;
  } else {
    nhifDeductions = 1700;
  }
  //using let declare two varibles for calculation of nssf deduction
  let nssfEmployeeDeductions;
  //prompt user to enter appropraite nssf tier chosing between only two (Tier1 and Tier2)
  let nssfPensionablePay =prompt("choose Tier1 or Tier2")
  //use switch to find nssf dedcutuion based on choice of nssf tier
  switch(nssfPensionablePay){
  case "Tier1":
  nssfEmployeeDeductions=360
  break;
  case "Tier2":
  nssfEmployeeDeductions=720
  break;
  default:
  nssfEmployeeDeductions=0
  }
  
//forrmula to calculate nssf deductions,gross salary and net salary
  nssfDeductions = nssfEmployeeDeductions*2;
  grossSalary = basicSalary + benefits;
  netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;
//retunr values from  the calculations
  return {
    paye: paye,
    nhifDeductions: nhifDeductions,
    nssfDeductions:nssfDeductions,
    grossSalary:grossSalary,
    netSalary:netSalary
}
}
