function checkSpeed(speed) {
    if (isNaN(speed) || speed < 0) {
      console.error("Invalid input. Please enter a valid speed (number).");
      return;
    }
  
    const speedLimit = 70;
    let demeritPoints = 0;
  
    // check demerit pointsif speed limit is exceeded
    if (speed > speedLimit) {
      const excessSpeed = speed - speedLimit;
      demeritPoints = Math.floor(excessSpeed / 5);
      console.log(`Points: ${demeritPoints}`);
    } else {
      console.log("Ok");
    }
  }
  
  // user's speed
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  readline.question("Enter the car's speed (km/h): ", (speed) => {
    checkSpeed(speed);
    readline.close();
  });
  