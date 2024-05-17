let obj = {};
obj[1] = "One";             // object with key->1 and value->One is initialized
obj["1"] = "String One";    // the above object is overwritten by changing the key from 1 to "1" as Ja
                            //JavaScript assignes data types implicitly

console.log(obj[1]);                   // It prints String One since the data type stored is already a string
console.log(obj["1"]);                  // It prints the same as 1 and "1" are the same thing
console.log(obj[1] === obj["1"]);       // The output is hence true

// This is due to the reason that JavaScript does not support explicitly declaring data types
// as this would have resulted with 1 and "1" being different.
