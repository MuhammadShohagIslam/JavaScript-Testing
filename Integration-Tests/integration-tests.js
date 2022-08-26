/*
    *** Integration-Test ***
        => If we have intergration test, we are combining multiple modules. 
        If we are combining multiple units or multiple functions and we 
        could call multiple funtions inside of a test instead of just acting on one function 
        and use the results of multiple functions in combination that would be an integration test.
        Or we test a function that already calls other functions

    * Why are intergration tests important? *
        =>  Beacuse, even if we test all units stand alone, and they all work correctly, 
        we could be combining them such that they still do not work correctly in combination

        => In the multiple calling function if any function inside main function is not work 
        beacuse of order of call of function inside the main function, it could be failed test, 
        so we should checked if it is work combination of function or not

        => They allow us to test the combination of function instead of just the function standalone, 
        beacuse testing function stand alone sometimes does not do the trick
*/

/*
    =>We should try to test, as many functions as possibile, stand-alone but 
        we should not start splitting our code into multiple stand-alone functions unnecessarily. 
        We should not start to write a couple of one line functions 
    => Typically, unit test more than integration test
*/