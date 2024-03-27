var obj1 = { name: "Person1", age: 21, city: "Chennai" };
var obj2 = { age: 21, name: "Person2",  city: "Kovai" };

function EqualObjects( obj1, obj2) {
    var keys1 = Object.keys(obj1);
    var keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length){
        return false;
    }
    for (var i = 0; i < keys1.length; i++) {
        if( obj1[keys1[i]] !== obj2[keys2[i]]){
        return false;
    }
}
return true
}
console.log(EqualObjects(obj1, obj2)); // false