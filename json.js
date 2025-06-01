const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);//convert json string to object
console.log(jsonObject);

//use JSON.stringify(jsonObject) to convert object to json string
