/*
    *** Spies and Mocks ***

        * --- Spies --- *
            => Spies are in the end "Wrappers" around our functions 
            or empty replacement functions for functions.That allow 
            our track it and how a function was called
            => We can use spies if we do not care about what a function does, 
            but you just want to know whether it was executed, then 
            we can either wrap the original function with such a spy object, 
            or we replace the function.
            => If we are only interested in finding out. whether something was 
            called and we do not need any ohter check or functionality, spie is 
            the perfect in such scenarios.
            => With replacement, we can rid side effects

        * --- Mocks --- *
            => Mocks are also about replacement, we also replace functions, 
            but mocks we often replace bigger parts of an API of certain module or code 
            that may provide some test-specific behavior instead.
            => We can easily replace functionalities, that are defined in modules(own module, fil, third party module).
             which are replace all the functions in the there with empty spy functions.

            => Often use to rid side effects.
*/