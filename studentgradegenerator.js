//declare a function  studentGrade based on input
function studentGrade() {
    //assign variable"marks",use let so as to allow change,use prompt to
    //ask user to input marks
    let marks = prompt("Enter student marks (0-100):");
    //if condition to ensure input is between 0 and 100
    if (marks < 0 || marks > 100) {
        //if number is beyond range give message invalid
      return "Invalid input. Please enter a number between 0 and 100.";
      //checks range of mark to be from 80 to 100,grade A
    } else if (marks > 79) {
      return "A";
       //checks range of mark to be from 60 to 79,grade B
    } else if (marks > 59) {
      return "B";
      //checks range of mark to be from 50 to 69,grade c
    } else if (marks > 49) {
      return "C";
      //checks range of mark to be from  to 40 to 49,grade D
    } else if (marks > 39) {
      return "D";
      //checks range of mark to be from 0 to 39 ,grade E
    } else {
      return "E";
    }
  }
  