// Promise: It is an object resulting of the asynchronous function.

// promise returns object {data, state}
// returning one of 3 states: pending, fulfilled, reject
// promise object is immutable.
// must use 'return' to get result of promise
// promise runs only once after given the callback function
// then and catch methods are used to get the error for the function

// Example of promise: given arguments resolve, reject
// 'resolve' function: to give success of promise
// 'reject' function: to give failure of promise

// note: settled : got result(executed)
//resolve= fulfilled, success, resolve
//reject = rejected, failed, reject

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("P1 Success");
    reject("P1 Failed");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P2 Success");
    reject("P2 Failed");
  }, 5000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("P3 Success");
    reject("P3 Failed");
  }, 1000);
});

// to get result from promise it has 4 methods:
// 1.all():  Promise.all([])
// it takes array as argument, can run multiple promises
// it waits for all the promises to finish and then returns the result
// if any of the promise settled as 'fail/reject' it quickly returns error of the promise

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log("All then", res);
  })
  .catch((e) => {
    console.log("All error", e);
    console.error(e);
  });

// 2.allsettled: Promise.allSettled([])
// will execute every promise and gives result
// it will wait to execute all the promise
// promise success/failed those will be returned

Promise.allSettled([p1, p2, p3])
  .then(function (res) {
    console.log("allSettled res", res);
  })
  .catch((e) => {
    console.error("allSettled error", e);
  });

// 3.race():  Promise.race([])
//  whatever promise settled 'first' success or failed it will return the result

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("race result", res);
  })
  .catch((e) => {
    console.error("race error", e);
  });

// 4. any(): Promise.any()
// it will return first success settle promise
// if all settled as failure then it will return aggregate error array

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("any result:", res);
  })
  .catch((e) => {
    console.error("error", e);
    console.info(e.errors);
  });
