function netSalaryCalculator(basicSalary, benefits) {
  let payee, nhifDeductions;

  if (basicSalary <= 24000) {
    payee = basicSalary * 0.1;
  } else if (basicSalary <= 32333) {
    payee = basicSalary * 0.25;
  } else if (basicSalary <= 500000) {
    payee = basicSalary * 0.3;
  } else if (basicSalary <= 800000) {
    payee = basicSalary * 0.325;
  } else {
    payee = basicSalary * 0.35;
  }

  if (basicSalary <= 5999) {
    nhifDeductions = 150;
  } else if (basicSalary <= 7999) {
    nhifDeductions = 300;
  } else if (basicSalary <= 11999) {
    nhifDeductions = 400;
  } else {
    nhifDeductions = 0;
  }

 

  return {
    payee: payee,
    nhifDeductions: nhifDeductions,
    
  };
}
