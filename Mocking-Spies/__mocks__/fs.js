import { vi } from "vitest";

// writeFile is the mock
export const promises = {
    writeFile: vi.fn((path, data) => {
        return new Promise((resolve, reject)=>{
            resolve();
        })
    })
}