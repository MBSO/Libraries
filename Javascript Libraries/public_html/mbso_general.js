/***********************************************************************/
 //This JS files allows validation of inputs and selections
 // Author: MBSO
 // Last updated: 15/05/2017 16:33
 // Last update details: added 1 new function
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
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( window.location.href );
    if( results == null )
      return "";
    else
      return decodeURIComponent(results[1].replace(/\+/g, " "));
}
/***********************************************************************/

/***********************************************************************/
// Description: function to return a random number to a max of 'intUpTo'
// Author: Open source
// Last updated: 15/05/2017 16.33
// Use: 
//  var strDate=GenerateRandomNumber(intUpTo);
/***********************************************************************/
function GenerateRandomNumber ( intUpTo ){
    return Math.floor ( Math.random() * intUpTo );
}
/***********************************************************************/