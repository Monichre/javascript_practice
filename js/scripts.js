$(function() {

  var yearsArray = [];
  var leapArray = [];
  var leapYear = function(year1, year2) {

  if(typeof year1 === "number"){
    for(year1 = year1; year1 <= year2; year1++){
      yearsArray.push(year1);
    } //end of 'for' loop

    for(i=0; i <= yearsArray.length; i ++){
    if (((yearsArray[i] % 4 === 0) && (yearsArray[i] % 100 !== 0)) || ((yearsArray[i] % 4 === 0) && ((yearsArray[i] % 100 === 0) && (yearsArray[i] % 400 === 0)))){
      leapArray.push(yearsArray[i]);
      }//end of if statement
      }
  }

};//leapyear function declarations



//user-interface logic

  $("#leap-year").submit(function(event){
    event.preventDefault();
    var year1 = parseInt($("#year1").val());
    var year2 = parseInt($("#year2").val());
    leapYear(year1, year2);
    $("#result").text(leapArray);
    $("#result").show();



  });

});











var fundPrime = function(num) {
	var numArray = [];
  var primeArray = [];

  var prime = 2;

  for(i = 0; i < num; i++) { // setting up array from which to delete non-primes
  	prime += 1;
    numArray.push(prime);
    console.log(numArray); // this shouold be our array
  }

	for(k = 1; k <= numArray[j]; k++){
    numArray.map(function(x){
    if(x % k === 0 && (x === numArray[j] || x === 1 )) {
    	return x;
      }
     }
   });
 };

 fundPrime(30);



for (var j = num; j > 0; j--) {


  var num = 30;
  var value = 0;

  for (i = 1; i <= j; i++){

    if ( j % i === 0){
      value++
    }
  }

  if( value === 2){
    console.log( j +  "uee");
  }
}
