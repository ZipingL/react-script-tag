import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ScriptTag from "../ScriptTag";
import { ScriptLoaderProps } from "../ScriptTag";

describe("<ScriptTag />", () => {
    test("should display script tag element, as well as a custom render jsx element", async () => {
        const { findByTestId } = renderScriptTag();
        const scriptTag = await findByTestId("script-tag-generated-tag");
        const customRender = await findByTestId("custom-render");
        expect(scriptTag).toBeDefined();
        expect(customRender).toBeDefined();

        const hisHonorableForm = await findByTestId("custom-render");
         
        expect(hisHonorableForm).toBeDefined();
    });
});

function renderScriptTag() {
    const props: ScriptLoaderProps = {
        src: "https://www.example.com/script.js",
        otherProps: {
            "data-testid": "script-tag-generated-tag"
        },
        children: (
            <div data-testid="custom-render">
            </div>  
        ),
    };

    return render(<ScriptTag {...props} />);
}
