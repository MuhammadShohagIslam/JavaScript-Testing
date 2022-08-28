import { it, describe, expect } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
    // it("should generate a token value", (done) => {
    //     // Arrange
    //     const userEmail = "test@test.com";
    //     // Act
    //     generateToken(userEmail, (error, token) => {
    //         // Assert
    //         expect(token).toBeDefined(2);
    //         /*
    //             done(): if we use done, if we accept this extra
    //             parameter the call done in the place where we know
    //             that we will be done with all our testing related
    //             work and now vitest and jest will wait until done was called. and recognoze this call back funtion
    //             eventually is executed and it will execute this code
    //             as well.
    //         */
    //         done()
    //     });
    // });

    it("should generate a token value", (done) => {
        // Arrange
        const userEmail = "test@test.com";
        // Act
        generateToken(userEmail, (error, token) => {
            try {
                // expect(token).toBe(2);
                expect(token).toBeDefined();
                done();
            } catch (error) {
                done(error);
            }
        });
    });
});

describe("generateToken()", () => {
    it("should generate a token value", () => {
        const userEmail = "test@test.com";
        // expect(generateTokenPromise(userEmail)).rejects.toBeDefined();
        expect(generateTokenPromise(userEmail)).resolves.toBeDefined();

        /* 
            if your test fails, add "return" before expect(...)
            also take a look at the next lecture.
        */
        return expect(generateTokenPromise(userEmail)).resolves.toBeDefined();
    });

    it("should generate a token value", async () => {
        // Arrange
        const userEmail = "test@test.com";
        // Act
        const token = await generateTokenPromise(userEmail);
        // Assert
        expect(token).toBeDefined();
    });
});
