import { it, expect, describe, vi } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
    it("should execute logFn if provided", () => {
        /*
            spies: 
                => they are often empty functions that
                do have some tracker that keeps track
                of if they have been executed
        */
        const logger = vi.fn();

        // logger.mockImplementation(() => {})
        // logger.mockImplementationOnce(() => {})

        // generateReportData(logger);

        // expect(logger).toBeCalled();

        generateReportData(logger);
        generateReportData(logger);

        expect(logger).toBeCalledTimes(2);
    });
});
