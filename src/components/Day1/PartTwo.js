import { useEffect, useState } from "react";

import fileToArrayConverter from "../../helpers/fileToArrayConverter";
import { isNumberByCharCode, isNumberByLetters } from "../../helpers/isNumber";

import rawInput from "../../input_files/1.txt";

function PartTwo() {
  const [calculatedSumState, setCalculatedSumState] = useState(0);

  useEffect(() => {
    const resultArr = [];
    let calculatedSum = 0;
    
    const sumAllCalibrationValues = async () => {
      const arr = await fileToArrayConverter(rawInput);

      arr.forEach((el) => {
        const positionContainer = isNumberByLetters(el);

        for (let i = 0; i < el.length + 1; i++) {
          if (isNumberByCharCode(el.charCodeAt(i))) {
            positionContainer.push([el, i, el[i]]);
          }
        }

        let smallest = positionContainer[0];
        let largest = positionContainer[0];

        positionContainer.forEach(([el, index, val]) => {
          if (smallest[1] > index) {
            smallest = [el, index, val];
          }
          if (largest[1] < index) {
            largest = [el, index, val];
          }
        });

        const temp = smallest[2] + largest[2];

        resultArr.push(+temp);

        calculatedSum += +temp;
      });

      setCalculatedSumState(calculatedSum);
    };

    sumAllCalibrationValues(rawInput);
  }, []);

  return <>{calculatedSumState}</>;
}

export default PartTwo;
