const fs = require("fs");
const path = require("path");

//fs 읽고 쓰기

// //Create folder
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("folder created");
// });

// //Create and wirte to file
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World",
//   (err) => {
//     if (err) throw err;
//     console.log("file written");
//     //file append
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       "Hello World one more time",
//       (err) => {
//         if (err) throw err;
//         console.log("file written");
//       }
//     );
//   }
// );

// Read file
fs.readFile(
  path.join(__dirname, "/test", "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

//Rename file
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "helloWorld.txt"),
  (err) => {
    if (err) throw err;
    console.log("Renamed");
  }
);
