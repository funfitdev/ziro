"use client-entry";

import { fetchRSC, hydrate } from "@parcel/rsc/client";
import type { ReactNode } from "react";

const getDelay = () => {
  const timePreference = localStorage.getItem("rsc-wait");
  return timePreference ? parseInt(timePreference, 10) : 250;
};

const updateRoot = hydrate({
  // Setup a callback to perform server actions.
  // This sends a POST request to the server, and updates the page with the response.
  async callServer(id, args) {
    const { result, root } = await fetchRSC<{ root: ReactNode; result: any }>(
      `${location.pathname}?delay=${getDelay()}`,
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
  // Intercept HMR window reloads, and do it with RSC instead.
  onHmrReload() {
    navigate(location.pathname);
  },
});

async function navigate(pathname: string, push = false) {
  const root = await fetchRSC<ReactNode>(`${pathname}?delay=${getDelay()}`);
  return new Promise<void>((resolve) => {
    updateRoot(root, () => {
      if (push) {
        history.pushState(null, "", pathname);
        resolve();
      }
    });
  });
}
