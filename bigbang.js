const fs = require('fs');

function generateBigBangArray() {
     const result = [];

     // Looping from 1 to 100
     for (i = 1; i <= 100; i++) {
          // Check if the i (number) can be perfectly divided by 3 AND 5 with remainder in 0.
          // Will be asuming as "BIGBANG".
          if (i % 3 === 0 && i % 5 === 0) {
               result.push("BIGBANG");
          }
          // Check if the i (number) can be perfectly divided by 3 with remainder in 0.
          // Will be asuming as "BIG".
          else if (i % 3 === 0) {
               result.push("BIG");
          }
          // Check if the i (number) can be perfectly divided by 5 with remainder in 0.
          // Will be asuming as "BANG".
          else if (i % 5 === 0) {
               result.push("BANG");
          }
          // Check if the i (number) cannot be perfectly divided by 3 AND 5 with remainder in 0.
          // Will be directly convert into String data.
          else {
               result.push(String(i));
          }
     }

     return result;
}

function main(){
     try {
          const bigBangArray = generateBigBangArray(); // Call the function back in new declaration
          const jsonOutput = JSON.stringify(bigBangArray, null, 2); // 
          fs.writeFileSync('output.json', jsonOutput);

          console.log("Successfully generated 'output.json' with the array");
     } catch (error) {
          console.error("An error occured:", error);
     }
}

main();