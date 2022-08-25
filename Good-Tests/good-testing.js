/*
    *** Writing Good Tests ***

    * What Should & Should not Tested *
        => We should test only our application code.
        => Do not test any third-party code.(third-party packages, 
            libraries, framework, or feature thats build into the 
            environemt we are working with)
        => Do not test those brower api, Nodejs packages.
        => Do not test what we can not change.
        => Do not test if it works as intended
        => Do not test our server-side code implicitly via our client-side code. 
        => if its our own API,our own backend API, we are taking to,
        then we would want to write separate tests that run independently from the front end tests in our backend project for our backend code.
        => Do test our client-side reaction to different responses and error.

*/

/*
        *** Recommendation to test of our code ***
            => should follow AAA(Arrange, Act, Assert) pattern, which is keeping our testing code organized, structured and understandable, helps we write simple, basic tests

            => Only test one thing (one test should test one unit, one
                behaviour or one expected outcome, or result of that
                unit or function)

            => We should keep our test simple not complex, focus one the essences of a test when arranging, test one things, that help our understand why they failed, if they fail.

            => Keep our number of assertions ("expect()") low

*/

/*
      *** What is "one thing"? *** 
            => One features, one behaviour to test of our code.
            => e.g validate input or transform it (not together test, individually test)
*/

/*
    *** Splitting Functions For Easier Testing & Better Code ***
            => Do avoid complex function, instead we just might want
             to call a bunch of the other functions in that function
            and those other functions do the individual tasks.
*/