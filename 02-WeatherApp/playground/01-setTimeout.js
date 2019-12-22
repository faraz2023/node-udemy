console.log("start");

setTimeout(() => {
  console.log("hi after two seconds");
}, 2000);

//run and observe the behaivour
//watch video #30
setTimeout(() => {
  console.log("hi after 1 second");
}, 0);

console.log("finish");
