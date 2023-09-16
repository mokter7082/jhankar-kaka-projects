function stopWatch() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const counter1 = stopWatch();
console.log(counter1());
console.log(counter1());
console.log(counter1());
