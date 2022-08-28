import { it, expect, vi } from "vitest";
import { promises as fs } from "fs";
import path from "path";

import writeData from "./io";

/*
    => which only affect test code , not production code
    => which hosited automatically on the top in the
    vitest but jest when have to call on the top like jest.mock()
*/

vi.mock("fs");
vi.mock("path", () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1];
            },
        },
    };
});

it("should execute writeFile method", () => {
    const data = "abc";
    const fileName = "text.txt";

    writeData(data, fileName);

    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(fileName, data)
});

it("should return a promise that resolves to no value if called correctly", () => {
    const data = "abc";
    const fileName = "text.txt";

    return expect(writeData(data, fileName)).resolves.toBeUndefined();
});
