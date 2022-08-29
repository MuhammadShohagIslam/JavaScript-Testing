/*
    *** DOM (Frontend JavaScript Testing) ***
        --- Use Different Testing Environment ---
    
    *--- Default --- *
        => NodeJS
        => NodeJS API and modules area available
        => We can not interact with browser and browser
        and browser APIs for testing time(mocking object)

    * --- JSDOM --- *
        =>  We can interact with browser and browser
        and browser APIs for testing time
        => (Virtual) browser environment with browser APIs and the DOM
        => Ideal for testing frontend code and projects
        => For working: add command line interface:
            ---environment JSDOM(jest) or happy-dom(vitest)


    Note: if we want to create big project, JSDOM/happy-dom is 
    not sufficient and we have to write to much code, which is 
    not good as a developer
        --- So we can use conjuction jest like Testing Library,
        we can use as a virtual DOM. ---


*/