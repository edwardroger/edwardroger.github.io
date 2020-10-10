// Trần Quang Phong
//cau1 
var inputNumber;
inputNumber = prompt("Enter the number",0);
for(var i=2;i<Math.sqrt(inputNumber);i++)
{
    if(inputNumber%i==0)
    {
        alert(inputNumber + " isn’t Prime Number")
        break;
    }
    else
    {
        alert(inputNumber +" is Prime Number")
        break;
    }
    
}
//cau2
var inputNumber;
inputNumber=Number(prompt("Enter the number",0));
for(var i=0; i<=inputNumber;i++)
{
    alert(i)
}
//cau3
var inputNumber;
inputNumber=Number(prompt("Enter the number",0));
for(var i=0; i<=inputNumber;i++)
{
    alert(i)
    i++;
}
var inputNumber;
inputNumber=Number(prompt("Enter the number",0));
for(var i=0; i<=inputNumber;i++)
{
    alert(i)
    i++;
}
//cau4
var inputNumber;
inputNumber = prompt("Enter the number",0);
for(var i=2;i<=inputNumber;i++)
{
    for(var j=2;j<=i;j--)
    {
    if(i%j===0)
    {
        alert(i + " isn’t Prime Number")
        break;
    }
    else
    {
        alert(i +" is Prime Number")
        break;
    }
}
}
//cau5
var inputNumber;
inputNumber = Number(prompt("Enter the number", 0));
var sum = 0;
for (var i = 0; i <= inputNumber; i++) {
    sum += i;
    alert("Sumary is " + sum)
 
}
//cau6
var inputNumber;
inputNumber = Number(prompt("Enter the number", 0));
var sum = 0;
for (var i = 0; i <= inputNumber; i++) {
    sum=sum+i*i;
    alert("Sumary is " + sum)
 
}
//cau7
var inputNumber;
inputNumber = Number(prompt("Enter the number", 0));
var sum = 0;
for (var i = 0; i <= inputNumber; i++) {
if(i%2==0)
{
    sum+=i;
    alert("sumary is "+ sum)
}
}
//cau8
var n;
n = Number(prompt("Number: ",0));
var check=true
while(n>0)
{
    var remain=n%10
    if(remain % 2 == 0 )
    {
        check=false;
        break;
    }
    n = Math.floor(n/10)
    console.log("n: ",n, "remain", remain)
}
if(check)
{
    alert("N is combine of odd number")
}
else{
    alert("N is not combine of odd number")
}
//cau9 
var num;
var temp;
var r;
num = Number(prompt("Enter the number", 0));
var sum = 0;
for(temp=num;num!=0;num=num/10){
    r=num%10;
    sum=sum*10+r;
}
if(temp==sum)
    cout << temp << " is a palindrome";
else
    cout << temp << " is not a palindrome";

return 0;
}
//cau10
var plus=0;
for(var i=1;i<=9;i++)
{
    for(var j=1; j<=9;j++)
    {
        console.log(i+" * " +j+ i*j);
    }
}
//cau11
var count=0;
function countLeadingSpaces2(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i)===" ") {
           count+=1;
        }
        console.log(count)
    }

}
console.log(countLeadingSpaces2("Hello fuckin world"))
// cau12
var str="Hello fuckin da warudo"
var removeSpace=str.split(" ").join("")
console.log(removeSpace)
//cau13
function reverse(str) {
   var string=str.split("");
   var arrStr=string.reverse();
   return arrStr.join("");
  }
console.log(reverse("Cyka Blyat"))
//cau 14
var string= "This is a beautiful day"
str= string.indexOf("is")
console.log(str)
//cau15
var string="puTang inA Mo"
var reString=string.split(string.charAt(0).toUpperCase(string.toLowerCase)).join(" ")
console.log(reString)
//cau 16
var string= "https://facebook.com/jarvis.ejr"
str= string.slice(21)
console.log(str)
//cau 17
var a=[2,4,7];
var min,max;
if(a[0]>a[1])
max=a[0]
else if (a[2]>a[0])
max=a[2]
else if(a[1]>a[2])
max=a[1]
console.log(max)
if(a[0]<a[1])
min=a[0]
else if(a[2]<a[0])
min=a[2]
else if(a[1]<a[2])
min=a[1]
console.log(min)
//cau 18 
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('bison', 2));
console.log(beasts.indexOf('giraffe'));
//cau 19
const sum=(a)=>{
    if(a===1)
    {
        return 1;
    }
    return sum(a-1)+a;
}
console.log(sum(5))
//Cau21 
var array21=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
var sum=array21.reduce((a,b)=>{
    console.log(a,b)
    return a+b
})
console.log(sum)
//cau22 
var a=[1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
var min=a[0]
    for(var i=1;i<a[i];i++)
    {
        if(a[i]<a[0])
        {
            min=a[i]
        }
    }
var max=a[1]
for(var i=1;i<a[i];i++)
{
    if(a[i]>a[1])
    {
        max=a[i]
    }
}
console.log(min)
console.log(max)
console.log("Trung bình: ", (min+max)/2)
//cau 23
var arr=[1,2,3,4,5,3,2,4,2,2]
var occurrences = arr.reduce(function(obj, item) {
    obj[item] = (obj[item] || 0) + 1;
    return obj;
  }, {});
  
  console.log(occurrences);
  var max=occurrences[0]
  for(var i=1;i<occurrences[i];i++)
  {
    if(occurrences[i]>max)
    {
        max=occurrences[i]
    }
  }
  console.log(max)
  //cau24
var array = [1,2,3,4,5,6,7,8,9];
var count = 1;
var array2 = [];
for (var i = 0; i < array.length; i++) {
    if (array[i] >= 2) {
        for (var x = 2; x <= array[i]; x++) {
            if (array[i] % x == 0) {
                count++;
            }
        }
        if (count <= 2) {
            array2.push(array[i]);
            count = 1;
        } else {
            count = 1;
        }
    }
}
console.log(array2);
  //cau 25
  var number=[1,2,3,4,5,6,7,8,9]
for(var i=2;i<number[i];i++)
{
    number[i]=number[i]*number[i];
}
console.log(number)
//cau26
var k;
k = prompt("Enter the number k:",0);
var array = [1,2,3,4,5,6,7,8,9];
var upper = [];
var lower = [];
var result = [];
for (var i = 0; i < array.length; i++) {
    if (k > array[i]) {
        lower.push(array[i]);
    } else if (k < array[i]) {
        upper.push(array[i]);
    } else if ( k = array[i]) {
        console.log(k + " belong to the array");
    }
}
if (lower.length === 0) {
    console.log("The nearest value: " + Math.min.apply(Math, upper));
} else if (upper.length === 0) {
    console.log("The nearest value: " + Math.max.apply(Math, lower));
} else if (lower.length != 0 && upper.length != 0) {
    result.push(Math.max.apply(Math, lower), Math.min.apply(Math, upper));
    console.log("The nearest value: " + result);
}
//cau 27
var students = [
    {
        id: "T3H001",
        firstName: "edWard",
        lastName: "jArVis Roger"
    },
    {
        id: "T3H002",
        firstName: "yaSuo",
        lastName: "hAsaGi"
    },
    {
        id: "T3H003",
        firstName: "JuGgerNaut",
        lastName: "OmNiBlaDe" 
    }];

var results = students.filter(student => student.firstName.length >= 3)
    .map(
        student => {
            return {
                id: student.id,
                firstName: student.firstName.toLowerCase().replace(student.firstName[0].toLowerCase(), student.firstName[0].toUpperCase()),
                lastName: student.lastName.toLowerCase().split(" ").map(item => item[0].toUpperCase() + item.slice(1)).join(" ")
            }});

console.log(results);
//cau28
var students = [
    {
        id: "T3H001",
        firstName: "edWard",
        lastName: "jArVis Roger"
    },
    {
        id: "T3H002",
        firstName: "yaSuo",
        lastName: "hAsaGi"
    },
    {
        id: "T3H003",
        firstName: "JuGgerNaut",
        lastName: "OmNiBlaDe" 
    }]
 var results = students.filter(student => student.lastName.split(" ")[0] === "hAsaGi");
 console.log(results);
 //cau29
 var students = [
    {
        id: "T3H001",
        firstName: "edWard",
        lastName: "jArVis Roger"
    },
    {
        id: "T3H002",
        firstName: "yaSuo",
        lastName: "hAsaGi"
    },
    {
        id: "T3H003",
        firstName: "JuGgerNaut",
        lastName: "OmNiBlaDe" 
    }]

var sortByName = students.slice(0)
    .sort(
        function(a,b) {
            var x = a.firstName;
            var y = b.firstName;
            if (x < y) {
                return -1;
            } else if (x > y) {
                return 1;
            } else {
                return 0;
            }});
console.log(sortByName);
var array = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1]
    var array2 = []

    for (var i = 0; i < array.length; i++) {
        if (array[i] < Math.max(...array)) {
            array2.push(array[i])
        }
    }
    var result = Math.max(...array2)
    if (result === -Infinity) {
        console.log(-1)
    } else {
        console.log(result)
    }
//cau31
var array = [9,1,8,3,4,15,19]
    var z = 18
    for (var a = 0; a < array.length; a++) {
        for (var b = a + 1; b < array.length; b++) {
            for (var c = b + 1; c < array.length; c++) {
                if (z == array[a] + array[b] + array[c]) {
                    var result = "yes";
                    break;
                }
            }
        }
    }

    if (result != "yes") {
        console.log("no")
    } else {
        console.log(result)
    }
//cau32
var array = [1,4,5,7,10,11,18,27]
var array2 = []
var k = Number(prompt("Enter number k: "))
var array3 = array
for ( var i = 0; i < array.length; i++) {
    if (array[i] < k) {
        array2.push(array[i])
    }
}
array3.splice(array2.length, 0, k)
console.log(array3)
//cau33
var array=[1,2,6,4,5,8,7,9,3];
var k
    for(var i = 0; i < array.length-1; i++)
    {
        for(var j = i + 1; j < array.length; j++){
            if(array[i] > array[j]){
            
                k = array[i];
                array[i] = array[j];
                array[j] = k;        
            }
        }
        console.log(array)
    }
  



