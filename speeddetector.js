//declare a function speedDetector
function speedDetector(speed) {
    //declare two constant varibles speed limit and km above limit
    const speedLimit = 70;
    const kmAboveLimit = 5;
    //condition to check speed in less than 70,returns ok
    if (speed < speedLimit ) {
      return "Ok";
    //condition to calculate demerit points based on division of speed above the limit by the 5 km 
    } else {
      const demeritPoints = ((speed - speedLimit) / kmAboveLimit);
      //condition if demerit points is above 12 return license suspended
      if (demeritPoints >12) {
        return "License suspended";
      //else return string demerit points
      } else {
        return "Demerit points: " + demeritPoints;
      }
    }
  }
  