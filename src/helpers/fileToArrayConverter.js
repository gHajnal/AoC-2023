/* Text file is splitted by returns.

Expect something similar:
  [ "1asdftwo",
    "1asdftwo35",
    "aaqwer3", 
    ...
  ]
*/

const fileToArrayConverter = async (raw) => {
  let arr = [];

  await fetch(raw)
    .then((r) => r.text())
    .then((text) => {
      arr = text.split("\r\n");
    });
  return arr;
};

export default fileToArrayConverter;
