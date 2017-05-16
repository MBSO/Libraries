/***********************************************************************/
//This JS files allows formatting of inputs and selections
// Author: MBSO
//  Version 1.0
// Last updated: 15/05/2017 16:33
// Last update details: added 1 new function
/***********************************************************************/

/***********************************************************************/
// Description: function to return a formatted date variable
// Author: Open source
// Last updated: 15/05/2017 16.33
// Use: 
//  var strDate=formatDate(dDate,'dd/mm/yy');
/***********************************************************************/
function formatDate(dDate,strFormat) {
    strBlank='';
     if ( Object.prototype.toString.call(dDate) === "[object Date]" ) {
       var strOutput=strBlank;
        //returns date in dd/mm/yyyy
       var month = dDate.getMonth()+1;
       var day = dDate.getDate();
       switch (strFormat){
            case 'dd/mm/yy':
            strOutput = ((strBlank+day).length<2 ? '0' : strBlank) + day + '/' + ((strBlank+month).length<2 ? '0' : strBlank) + month + '/' + dDate.getFullYear();
            break;
            case 'yy-mm-dd':
            strOutput = dDate.getFullYear()+ '-'+ ((strBlank+month).length<2 ? '0' : strBlank) + month +'-'+((strBlank+day).length<2 ? '0' : strBlank) + day;
            break;
            default: //'yyyy-mm-dd'
            strOutput = dDate.getFullYear()+ '-'+ ((strBlank+month).length<2 ? '0' : strBlank) + month +'-'+((strBlank+day).length<2 ? '0' : strBlank) + day;
       }
       return strOutput;
    }else{
        return 'Invalid Date';
    }
}
/***********************************************************************/

/***********************************************************************/
// Description: function to return a convert week number to a date
// Author: 
// Last updated: 15/05/2017 16.33
// Use: 
//  var strDate=convertWeekNumberToDate(dDate,'dd/mm/yy');
/***********************************************************************/
function convertWeekNumberToDate (intYear, intWeek, intMinusDays) {
 
  var objDate = new Date(intYear, 0, 1);
  var intdayNum = objDate.getDay();
  var intdiff = --intWeek * 7;

  // Add required number of days
  objDate.setDate(objDate.getDate() - objDate.getDay() + ++intdiff);
  
  if ( parseInt(intMinusDays) !== 0 ){
	objDate.setDate	( objDate.getDate() - parseInt( intMinusDays )  );  
  }
  
  return objDate;
}
/***********************************************************************/