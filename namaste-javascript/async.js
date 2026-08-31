// async functions always returns a promise.
// async and await are keyword in javascript
// await is only used in async function.
// easy way to handle promise.
// easy to read and easy to manage the code.
// async and await combo is best way to handle async functions
// if the function is async still the function will execute even await is not the function.

const p = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

const getData = async () => {
  // return p; // returns a promise.
  return "anyValue"; // returns value wrapped inside promise
  // return; // returns undefined
};

const dataPromise = getData();

console.log(dataPromise);

dataPromise
  .then((res) => {
    console.log("data :", res);
  })
  .catch((e) => {
    console.error(e);
  });

////// fetching API
async function gettingAPIData() {
  const apiData = await fetch("http://anyurl.com/user", { method: "GET" });
  const result = await apiData.json();
  return result;
}

gettingAPIData();
