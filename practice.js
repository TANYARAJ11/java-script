log1 = () => {
    
    console.log("tanya is a winner");
    createdElement= document.createElement('button');
    document.getElementById('web').appendChild(createdElement);
    createdElement.innerHTML="apaaar is chutiya";

}
/*/setInterval(log1,1000);
Object={ name:"tanya",length:"1"};
jso = JSON.stringify(Object);
console.log(Object);*/
var parsed = JSON.parse('{"name":"TANYA", "age":17,"nature":"sweet"}');

console.log("the name is"+parsed.name+ "the age is"+parsed.age+ "her nature is"+parsed.nature);


var a = 87;
console.log(`this is a number ${a}`);