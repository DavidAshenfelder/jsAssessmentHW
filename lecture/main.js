// //1. Creation Phase
// function b() {
//   console.log("I am B");
// };
//
// //2. Execution Phase
//
// b();
//
// console.log(a);
//
// var a = "I am A"

// function b() {
//   console.log("Hello I am B");
// };
//
// function a() {
//   b();
//   console.log("Hello I am A");
// };
//
// a();
///////////////////////////////////


///////////////Scope///////////////

//
//
// function a() {
//   function b() {
//     console.log(myvar);
//   }
//   var myvar = 2;
//   b();
//   console.log(myvar);
// }
//
// var myvar = 1;
// a();
// console.log(myvar);

//Global Creation Phase
//GLobal Execution Phase -
  // a) global Execution phase for function a()
    //var myvar = 2
    // b) global execution phase for fucntion b()
    // var myvar = undefined
    //return undefined
  // a) I still have access to myvar = 2

///////////////////////////////////////


////////Primative Types///////////////

//   var a = "str";
//   var b = a;
//
//   b = 5;
// console.log(a);
//
// var myObj = {}
//
// myObj['name'] = "Sally"
// myObj['favFood'] = "Mushrooms and Nuts"
//
// console.log(myObj);
//
// var nathanObj = myObj
//
// nathanObj['name'] = "Nathan";
//
// console.log(myObj);
//
// console.log(3 > 2 > 1);
// //
// // logic would say true, but javascript says (true > 1)
// // this equals false so you get a false value
//
// console.log(false < true);
// // watch out for this because it returns true might give you
// // somethng that you don't intend
//
//
// function b() {
//   console.log("I am B");
// }
//
// // var a = undefined
// // b();
// // a();
//
// var a = function a() {
//   console.log("I am A");
// }
//////////////////////////////////

//////////'this'/////////////////

// var obj = {
//
//   name: "This is the Object",
//   somefunction: function() {
//     var that = this
//     console.log(this);
//     function setName(name) {
//       obj.name = name;
//       console.log("I should be the object", that);
//     };
//     setName("Final Object")
//     console.log("I should still be the object", this);
//   }
// };
//
// console.log("this is the", this);
// obj.somefunction("this is the", this)
///////////////////////////////////////////////////////


////////////////////////////////////////////////////
//Immediately Invoked Fuctional Expressions (IIFEs)
///////////////// IIFEs ////////////////

// function b() {
//   console.log("i am b");
// }
//
// var a = function() {
//   console.log("i am a");
// }
//
// b();
// a();
//
// (function c() {
//   console.log("i am c");
// })();
//
// (function giveName(name) {
//   console.log("I am have been given the name:", name);
// })("whatever Name you want to give");
//
// (function jQuery(global) {
//   var $$$JNAT = "HELLO";
//   global.$$$JNAT = $$$JNAT;
// })(window);
////////////////////////////////////////////////////////

///////////////////// Closures /////////////////////////

function sayHiToWhom(name) {
  return function greeting(language) {
    if (language === 'en') {
      console.log("Hello", name);
    } else if (language === 'es'){
      console.log("Hola", name);
    }
  };
}



var aNewgreeting = sayHiToWhom("Jimmy")('en');

//function greeting(language) {
//   if (language === 'en') {
//     console.log("Hello", "Jimmy");
//   } else if (language === 'es'){
//     console.log("Hola", "Jimmy");
//   }
// };

// aNewgreeting('es');
