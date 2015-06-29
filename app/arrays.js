exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item)
  },

  sum : function(arr) {
    var total = arr.reduce( function(a, b) {
      return a + b;
    });
    return total
  },

  remove : function(arr, item) {

    // var newArr = arr.filter(function(el) {
    //   return el !== item
    // })
    // return newArr

    var newArr = arr.forEach(function(el,idx,arr) {
       if (el === item) {
         arr.splice(idx, 1)
       }
     })
     return arr
   },

  removeWithoutCopy : function(arr, item) {
    
  //  arr.forEach(function(el,idx,arr) {
  //     if (el === item) {
  //       arr.splice(idx, 1)
  //     }
  //   })
  //   return arr


  var i, len;

 for (i = 0, len = arr.length; i < len; i++) {
   if (arr[i] === item) {
     arr.splice(i, 1);
     i = i - 1;
     len = len - 1;
   }
 }

 return arr;
  },

  append : function(arr, item) {
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    arr.pop()
    return arr
  },

  prepend : function(arr, item) {
    arr.unshift(item)
    return arr
  },

  curtail : function(arr) {
    arr.shift()
    return arr
  },

  concat : function(arr1, arr2) {
    var newArr = arr1.concat(arr2)
    return newArr
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count : function(arr, item) {
    var howMany = arr.filter(function(el){
      return el === item
    })
    return howMany.length
  },

  duplicates : function(arr) {
    var duplicates = []
    var sorted = arr.sort()
    for (i=0; i < sorted.length; i++)
     {
      if (sorted[i+1] == sorted[i]) {
        duplicates.push(sorted[i])
      }
    }
    return _.uniq(duplicates)
  },

  square : function(arr) {
    var squared = []
    for (i=0; i<arr.length; i++) {
      var iSquared = arr[i] * arr[i]
      squared.push(iSquared)
    }
    return squared
  },

  findAllOccurrences : function(arr, target) {
    var occurrences = []
    for (i=0; i<arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i)
      }
    }
    return occurrences
  }
};
