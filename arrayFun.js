// Higher order function: A function which is takes another function as argument or returns funtion from it is called as Higher order function.
// ex. map(), filter(), reduce() 

const users = [
  { id: 1, name: "window", age: 22 },
  { id: 2, name: "fire", age: 22 },
  { id: 3, name: "trust", age: 24 },
  { id: 4, name: "card", age: 29 },
  { id: 5, name: "listen", age: 32 },
  { id: 6, name: "frank", age: 32 },
];

// using of map()
const mapNameAge = users.map((item)=>{
 return item.name+" "+item.age
});
const nameMap = users.map(function(val){
   return val.name
});

console.log("name and age",mapNameAge);
console.log("only name",nameMap);

// using of filter()

const nameObj= users.filter(function(val){
    return val.name == "fire"; // returns object
});
console.log("fire name:",nameObj);

// combination using map() and filter()

const filterName = users.map((val)=> {
    return val.name
}).filter(function(res) {
    return res == "fire"
});

console.log(filterName);

//using reduce() 

// reduce(function(previous,current){},[])
// here function (prev, curr) is callback function 
// prev = stores the values(previous)
// current = denotes current values in loop
// [] is other agrument for the reduce function initial for function values

const nameAge = users.reduce((stor,cur)=>{
  if(cur.age > 30){
    stor.push(cur.name +" "+ cur.age)
  } 
  return stor;
},[]);
console.log(nameAge);

// using combination map() and reduce()

// map used to get the specific age data
// only numbers are in array not the pair key:value

const ageArr = users.map((val)=>{return val.age});
const freqAge = ageArr.reduce(function(st,cur){
  if(st[cur]){
    st[cur] = ++st[cur];
  } else{
    st[cur] = 1
  }
  return st;
},{});

console.log("using Reduce: number frequency:",freqAge)
