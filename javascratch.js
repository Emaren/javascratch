x = 3
y = 4
z = x + y

x = "Tony"
y = "Blum"
z = x + " " + y

x = "Tony"
y = "Blum"
a = 3
b = 4
c = a * b
d = "Hello " + x + "! In case you forgot, " + a + " x " + b + " is " + c + "."
console.log(d)
document.write(d)

prompt("What is your name?")
alert("Hello, ")


var enter = confirm("Do you want to enter the safe?");

if(enter) {
var key = prompt("Enter the password to the safe: ");
if(key === "opensesame") {
alert("714");
} else {
alert("DENIED!");
}
} else {
  alert("Ok, Goodbye then.");
};


var enter = confirm("Do you want to enter the safe?");

if(enter) {
var key = prompt("Enter the password to the safe: ");
if(key === "opensesame") {
alert("714");
} else {
alert("DENIED!");
}
} else {
  alert("Ok, Goodbye then.");
}


var password = prompt("Enter a password: ");
p = password.length
if(p > 12) {
  alert("Too Long!");
} else if(p < 8){
  alert("Too Short!");
} else {
  alert("Just Right!");
}


var n = 0;

while(n <= 100) {
  console.log(n);
  n++;
}


var i = 10;

while(i > 5) {
  i -= 1;
}
console.log(i * 2)


var i = 0;
var x = 0;

while(i < 10) {
  x += i;
}


var n = 0

while(n <= 100) {
  if(n % 2 === 0) {
    console.log(n);
  };
  n += 1;
}


var beer = 100

while(beer > 0) {
  document.write(beer + " bottles of beer on the wall " + beer + " bottles of beer. ")
  beer -= 1;
  document.write("Take one down, pass it around, " + beer + " bottles of beer on the wall. ")
  }


  for(var beer = 100; beer > 0; beer -= 1) {
    console.log(beer + " bottles of beer on the wall " + beer + " bottles of beer. ");
    console.log("Take one down, pass it around " + " " + (beer - 1) + " bottles of beer on the wall. ");
  }


  for(n = 100; n > 0; n -= 1) {
    console.log(n);
  }

  // for(n = 99; n > 0; n += 1) {
  //   console.log(n + n);
  // }


  *********   for(n = 99; n > 0; n -= 1) {   **************
    console.log(n + n);
  }


  var n = parseInt(Math.random() * 100);
  console.log(n)

  while(true) {
  var user = prompt("Guess the random number: ")
    if(user > n) {
      alert("Too High.");
    } else if (user < n) {
      alert("Too Low.");
    } else {
      alert("Correct!");
      break;
    }
  }


  var a = [1,2,3,4]
  var total = 0;

  for( i = 0; i < array.length; i += 1) {
    total += array[i];
   }

   console.log(total);


   var words_array = ["guitar", "cookie", "pepper", "past"]

   for(var i = 0; i < words_array.length; i += 1) {
     console.log(array[i] + " has " + array[i].length + " characters.")
   }


   var myString = "Hello"
   var m = myString.split("")

   var user = prompt("Enter a sentence for a word count: ");
   var u = user.split(" ");

   for( i = 0; i < u.length; i++) {
     alert("There are " + u.length + " words in that sentence." );
     break;
   }

   var n = 101
   var m = Array.apply(null, {length: n}).map(Number.call, Number)
   var string = m.toString()


   var personalGreeting = function(name) {
     return "Hello " + name;
   }

   personalGreeting("Tony")


  //  array = [1,2,3,4,5]
  //  var revArray = function(array) {
  //     document.write(array.reverse());
  //  }

   revArray(array);


    var insult = function(name) {
      console.log( name + ", you nincompoop");
    }


    var increment = function(number) {
      return number + 1;
    }

    increment(79)


    var doubleArray = function(array) {
      for(var i = 0; i < array.length; i++) {
        array[i] = array[i] * 2;
      }
      return array;
    }
    var array = [1,2,3,4,5,6]
    console.log(doubleArray(array));

  var array = [1,2,3,4,5]
    var doubleArray = function(array) {
      for(var i = 0; i < array.length; i += 1) {
      array[i] = array[i] * 2;
    }
    return array;
  }
    console.log(doubleArray(array))


    var me = {
      name: "Tony",
      age: 30,
      occupation: "Developer",
    };

    Object.defineProperty(me, {occupation: "Javascript Expert"});


    var string = "Coding in javascript is really not that difficult..."

    var strlngth = function(sentence) {
      var words = sentence.split(" ");
      var result = {};
      for(var i = 0; i < words.length; i++) {
        result[words[i]] = words[i].length;
      }
      return result;
    }

    console.log(strlngth(string));



     var user = prompt("Input sentence to return word length: ")
     var wordLength = function(s) {
       var words = s.split(" ");
       var result = {};
       for(var i = 0; i < words.length; i++) {
         result[words[i]] = words[i].length;
       }
       return result;
     }

console.log(wordLength(user))


        var user = prompt("Input a sentence: ")
        var wordsLength = function(sentence) {
          var words = sentence.split(" ");
          var word_length = {};
          for(var i = 0; i < words.length; i += 1) {
            word_length[words[i]] = words[i].length
          }
          return word_length;
        }

        console.log(wordsLength(user));


        var name = prompt("Enter your name: ")
        var age = prompt("Enter your age: ")


        var userObject = function(input) {
          console.log( name + " is " + age + " years old")
        }


        console.log("Hello World");
        for(var i = 0; i < 5000000; i++) {}
        console.log("Goodbye");

        document.write("Hello World");
        for(var i = 0; i < 50000000; i++) {}
        document.write("Goodbye");

        var age = prompt("Age?")

        var person = function(age) {
          if(age > 50) {
            alert("Wise");
          } else {
            alert("Still Growing");
          };
        }

        var prognosis = alert(person(age))


        var forEach = function(array, func) {
          for(var i = 0; i < array.length; i++) {
            array[i] = func(array[i]);
          }
          return array;
        }

        var myArray = [1,2,3,4,5];
        console.log(forEach(myArray, function(x){ return x + 1}));

        var forEach = function(array, func) {
          for(var i = 0; i < array.length; i++) {
            array[i] = func(array[i]);
          }
          return array;
        }


        var sayLater = function(string) {
          setTimeout(function(){
            console.log(string);
          }, 5000);
        }

        var sayLater = function(string) {
          setTimeout(function(){
            console.log(string);
          }, 5000);
        }

        var sayLater = function(string) {
          setTimeout(function(){
          }
            console.log(string))
        }
















        


    ..
