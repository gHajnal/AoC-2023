import { useEffect, useState } from "react";

import fileToArrayConverter from "../../helpers/fileToArrayConverter";
import { isNumberByCharCode } from "../../helpers/isNumber";

import rawInput from "../../input_files/1.txt";

function PartOne() {
  const [calculatedSumState, setCalculatedSumState] = useState(0);

  useEffect(() => {
    const resultArr = [];
    let calculatedSum = 0;
    
    const sumAllCalibrationValues = async () => {
      const arr = await fileToArrayConverter(rawInput);
      arr.forEach((el) => {
        let fromFront, fromBack;
        for (let i = 0; i < el.length + 1; i++) {
          const backIndex = el.length - i;

          if (!fromFront || !fromBack) {
            if (isNumberByCharCode(el.charCodeAt(i)) && !fromFront) {
              fromFront = el[i];
            }
            if (isNumberByCharCode(el.charCodeAt(backIndex)) && !fromBack) {
              fromBack = el[backIndex];
            }
          }
        }
        if (!fromFront && !fromBack) {
          return;
        } else {
          const temp = fromFront + fromBack;
          resultArr.push(+temp);
          calculatedSum += +temp;
        }
      });
      setCalculatedSumState(calculatedSum);
    };
    sumAllCalibrationValues();
  }, []);

  return <>{calculatedSumState}</>;
}

export default PartOne;
