import { csv } from "csvtojson";
import fs from "fs";

const csvFilePath = "nodejs-hw1-ex1.csv";
const parameters = {
  output: "json",
};

const writeableStream = fs.createWriteStream("test.txt");

csv(parameters)
  .fromFile(csvFilePath)
  .subscribe((json) => {
    return new Promise((resolve, reject) => {
      if (json) {
        resolve(json);
      } else {
        reject("some error");
      }
    }).then((data) => {
      return data;
    });
  })
  .pipe(writeableStream);
