/*
    *** JavaScript Testing ***
        => It's typicaly means that we want to verify whether something
        works as intended.
        => When writing software or building websites, then we
         typically want to test whether that software or that website 
         we are building is working the way we expect it to work.
*/

/*
    *** Two way test of out Software ***
        --- Manual Testing ---
            => Tedious and cumbersome
            => Error-prone
            => Often incomplete (not all scenarios covered)

        --- Automated Testing ---
            => Write your code then test your code
            => inital effort (write tests), no effort thereafter
            => Predictable and consistent
            => High / complete code and scenario coverage can achieved.
*/

/*
        *** Different kind of Automate Testing ***
                --- Unit Testing ---
            => A building block of our app
            => Ideally, the smallest possibile building block
            => eg. function, a class, a component.

        *Application made up with all of the Unit*
            => App = combination of all units
                => If all units were tested, the overall app should work -> Backed up by integration tests
                => changes are always tested against all units to avoid bugs.

        *** Why Unit Testing ***
            => Avoids endless amount of manual testing
            => Allows we to cover(close to) 100% of our code and scenarios
            => code changes are tested against all scenarios almost instantly
            => Write cleaner and better code (beacuse testing then becomes easier)
*/

/*
    *** Unit, Integration, End-to-End(E2E) Testing ***
         --- Unit Testing ---
            => small individual test e.g test 1 function(Learn with Sumit)
            => Test the individual buildling blocks of an application
            => Every building block(unit) is tested standalone
            => If all building blocks work, the overall app works

        --- Integration Testing ---
            => test with dependiency. e.g test function that calls another function(Learn with Sumit)
            => Test the combination of building blocks
            => Verify if the building blocks units work together.
            => Even if all units work standalone, the combination could fail.

        --- End-To-End(E2E) Testing ---
            => complete test e.g automate browser events
            => Test entire flows and application features.
            => Test the actual things real users would do
            => Real users use our app and its feature, not individual units.

        Note: We should combine all kinds of test in our application.

        Complexity flow => Unit Test -> Integration Test -> E2E
        Quantity => E2E -> Integration Test -> Unit Test


        *** How To Test ***
            --- Test Runner ---
                => which runs the test and gives result(mocca)
            --- Assertion Library ---
                => Sets testing condition, matches and logic(cay)
            --- Handless Browser ---
                => simulate the browser activity (puppeteer)
            
            mocca and cay combination of Jest

            Credit by (Learn with Sumit)

*/