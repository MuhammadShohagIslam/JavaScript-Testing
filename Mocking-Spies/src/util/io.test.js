import { it, expect, vi } from "vitest";
import { promises as fs } from 'fs';

import writeData from "./io";

vi.mock("fs");

it("should execute writeFile method", () => {
    const data = "abc";
    const fileName = "text.txt";

    writeData(data, fileName);

    expect(fs.writeFile).toBeCalled();
});
