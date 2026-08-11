let crypto = require("crypto");

// bydefault libuv_threadpool size = 4

// setting libuv_threadpool size

process.env.UV_THREADPOOL_SIZE = 3;

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1 crypto logged");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2 crypto logged");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3 crypto logged");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4 crypto logged");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5 crypto logged");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("6 crypto logged");
});

// We can set the threadpool size as per requirement
// by default libuv_threadpool size = 4.
// Thread: container where we can run piece of code.
// Thread can be blocked
// Thread will be free when it's finished it's current job.

// ThreadPool: It used for following operations
// 1. fs
// 2. dns lookup
// 3. crypto
// 4. user specified input

// order of execution in the Threadpool is not gauranteed
// as the console log will give everytime random output instead sequential
// like 1,2,3,4 it will 2,1,3,4 | 4,3,1,2 |
// thread gets allocated to it and it executes
// if more than 4 calls are there (general case) then first 4 task will gets
// thread allocation to as they will execute next task will gets thread to execute

// Event loop = order of callback execution with priority based

// Q. Node JS is single threaded or multi-threaded?
// A. Depends on how? when? what code node will executes
// - it will behave as single and multi threaded
// - if passed sync code it will behave like single threaded
// - Node uses libuv threadpool for some task like fs,dns lookup, crypto
// if we are running program includes any of it then it will uses threadpool
// thus, making node js as multi-threaded.
