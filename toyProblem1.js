function calculateGrade() {
    function gradeCalculate() {
      // Get marks using readLine so it can work in the terminal
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });
  
      readline.question("Enter the student's marks (between 0 and 100): ", (marks) => {
  
        // checks if the input is valid
        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.error("Invalid input. Please enter a number between 0 and 100.");
            readline.close();
            return;
        }
  
        // grade based on marks
        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60) {
            grade = 'B';
        } else if (marks >= 50) {
            grade = 'C';
        } else if (marks >= 40) {
            grade = 'D';
        } else {
            grade = 'E';
        }
  
        // output
        console.log(`The grade for ${marks} marks is: ${grade}`);
  
        readline.close();
      });
    }
  
    // calling of the function
    gradeCalculate();
  }
  
  calculateGrade();
  