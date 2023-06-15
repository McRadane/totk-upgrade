import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Providers } from "./Providers";

describe("Providers", () => {
  it("should boot the application for the first time without crashing", async () => {
    render(<Providers />);

    expect((screen.getByTestId("footer-github") as HTMLAnchorElement).href).toBe("https://github.com/McRadane/totk-upgrade");

    expect(screen.getByTestId("armor-table-Mask of Awakening-name")).toHaveTextContent("Mask of Awakening");
    expect(screen.getByTestId("armor-Mask of Awakening-status-owned")).toHaveValue("0");
  });
});
