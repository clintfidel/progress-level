module.exports = {
 sum : function(num1, num2){
   var myAnswer = num1 + num2;
   return myAnswer;
 }, 
 addFive: function(arr){
   for(var i=0 ; i<arr.length; ++i){
     arr[i]+=5;
   }
   return arr;
 },
 average: function(num1,num2,num3){
   var myAnswer= num1 + num2 + num3;
   var realAnwer=Math.floor(myAnswer/3);
   return realAnwer;
 },
 factorial: function(num){
  if(typeof num != "number"){
    return "expected a number";
  }
   trackFact= 1;
   for(var i=1; i<=num; i++){
     trackFact*=i;
   }
   return trackFact;
 },
 celToFar: function(temp){
   var far= temp * 9/5 + 32;
   return far;
 },
 farToCel : function(temp){
   var cel = (temp -32) * 5/9;
   return cel
 }
}
