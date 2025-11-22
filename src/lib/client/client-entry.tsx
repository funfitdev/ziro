"use client-entry";

import { fetchRSC, hydrate } from "@parcel/rsc/client";
import type { ReactNode } from "react";

const updateRoot = hydrate({
  // Setup a callback to perform server actions.
  // This sends a POST request to the server, and updates the page with the response.
  async callServer(id, args) {
    const { result, root } = await fetchRSC<{ root: ReactNode; result: any }>(
      `${location.pathname}}`,
      {
        method: "POST",
        headers: {
          "rsc-action-id": id,
        },
        body: args,
      }
    );
    updateRoot(root);
    return result;
  },
});
