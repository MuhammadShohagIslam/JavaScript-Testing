import path from "path";
import fs from "fs";

import { it, vi, expect, beforeEach } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);

vi.stubGlobal("document", document);

beforeEach(() => {
    document.body.innerHTML = "";
    document.write(htmlDocumentContent);
});
it("should add error paragraph to the id='error' element", () => {
    showError("test");

    const errorElement = document.getElementById("errors");
    const errorParagraph = errorElement.firstElementChild;

    expect(errorParagraph).not.toBeNull();
});

it("should not contain error paragraph initialy", () => {
    const errorElement = document.getElementById("errors");
    const errorParagraph = errorElement.firstElementChild;

    expect(errorParagraph).toBeNull();
});

it("should output provided error message in the error paragraph", () => {
    const errorMessage = "Error Data";

    showError(errorMessage);

    const errorElement = document.getElementById("errors");
    const errorParagraph = errorElement.firstElementChild;

    expect(errorParagraph.textContent).toBe(errorMessage);
});
