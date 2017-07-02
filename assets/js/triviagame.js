// start quiz

    function check() {

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
    var correct=0;

	    if (question1 == " Margo, Edith, Agnes") {
	        correct ++;
	    }
	    if (question2 == " Orange") {
	        correct ++;
	    }
	    if (question3 == " Moon") {
	        correct ++;
	    }
	    if (question4 == "Agnes") {
	        correct ++;
	    }
	    if (question5 == "Steve Carrell") {
	        correct ++;
	    }
    // messages for response with video

    var message = ["Great job! ", "That's okay, just keep trying!", "I think you can do better"];
    var pictures = ["assets/images/greatjob.gif", "assets/images/itsokbut.gif", "assets/images/needtodobetter.gif"]; 

	 var range;
	 var updateRange;
	 
	    if (correct == 1){
	    range = 2;
	    }
	    if (correct > 3 || correct < 4){
	    range = 1;
	    }
	    if (correct > 4){
	    range = 0;
	    }

	    function updateRange() {
	    	idPost=docuemnt.getElementById("range").innerHTML;
	    }
      
    document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = message[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct answers";
    document.getElementById("pictures").src = pictures[range];


}      
	
	
