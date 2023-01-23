import type { PartyKitServer } from "partykit/server";
import { onConnect } from "y-partykit";

export default {
  onConnect(ws, room) {
    onConnect(ws, room, { persist: true });
  },
} satisfies PartyKitServer;
