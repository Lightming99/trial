//*************************************************//
                  //Model_Solutiob_4
//*************************************************//

//1st step using wrap function
(function(){
    //2nd Step declare the variable
    var names = ['Tom','Jerry','Jim','Joy','Max','Paul','Ben','Sam','Tmjk','John'];

    //3rd Using function of sayHello and sayBye
    function sayHello(){
        var wordHello = 'Hello';
        console.log(wordHello+" "+names[i]);
    }
    function sayBye(){
        var wordBye = "Bye";
        console.log(wordBye+" " +names[i]);
    }

    for(i=0;i<names.length;i++){
        //Check if the name of first letter === 'j' 
        var firstLetter = names[i].charAt(0).toLowerCase();

        if(firstLetter === 'j'){
            
            sayBye();       //calling sayBye function
        }
        else{
            
            sayHello();     //calling sayHello function
        }
    }

})(); //calling wrap function
