/***********************************************************************/
//This JS files allows validation of inputs and selections
// Author: MBSO
// Version 1.0
// Last updated: 15/05/2017 16:33
// Last update details: added 1 new function
/***********************************************************************/
/***********************************************************************/

/***********************************************************************/
// Description: function to get the parameters from a URL
// Author: Open source
// Last updated: 15/05/2017 16.33
// Use: 
//  Call using in the JS OnLoad:
//  <script>
//  var strReturn =getParameterByName('formID);
//  </script>
/***********************************************************************/
function getParameterByName(name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if ( results == null )
       return "";
    else
      return decodeURIComponent(results[1].replace(/\+/g, " "));
}
/***********************************************************************/

/***********************************************************************/
// Description: function to return absolute URL and append to it the param
// Author: Open source
// Last updated: 15/05/2017 16.33
// Use: if current URL is http://www.fexco.com/test1/test2
//  getAbsoluteUrl(/test3); returns http://www.fexco.com/test3
/***********************************************************************/
var getAbsoluteUrl = (function() {
    var a;
    return function(url) {
        if(!a) a = document.createElement('a');
        a.href = url;

        return a.href;
    };
})();
/***********************************************************************/

/***********************************************************************/
// Description: function to return a random number to a max of 'intUpTo'
// Author: Open source
// Last updated: 15/05/2017 16.33
// Use: 
//  var strDate=GenerateRandomNumber(intUpTo);
/***********************************************************************/
function generateRandomNumber ( intUpTo ){
    return Math.floor ( Math.random() * intUpTo );
}
/***********************************************************************/

/***********************************************************************/
// Removes an item from a given array
// arr = array
// item = variable to remove
/***********************************************************************/
function removeArrayItem(arr, item) {
    var i = 0;
    while (i < arr.length) {
        if (arr[i] == item) {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
};

/***********************************************************************/
// Return the unique values in an array
/***********************************************************************/
function getArrayUniques(array) {
    var unique_array = [];
    for (var i=0, l=array.length; i<l; i++)
        if (unique_array.indexOf(array[i]) === -1 && array[i] !== '')
            unique_array.push(array[i]);
    return unique_array;
}

/***********************************************************************/
// Does a given array contain a item
/***********************************************************************/
function arrayContains(array, obj) {
    var arrayLength = array.length;
    while (arrayLength--) {
        if (array[arrayLength] === obj) {
            return true;
        }
    }
    return false;
};

/***********************************************************************/
//HTML Element functions
//Toggle an element to show or hide
/***********************************************************************/

function handleOpenClose(htmlElement) {
            var get_element = document.getElementById(htmlElement);
            get_element.style.display 
                    = (get_element.style.display === "none" ? "inline" : "none");
}

