---
title: "MessageExpanderPatch"
description: "Replaces the game's network message type header with an 8-bit one, for 256 message types, so TavernLib and mods have room for their own."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MessageExpanderPatch

A **class** in `TavernLib`, `TavernLib.Patches`.

Replaces the game's network message type header with an 8-bit one, for 256 message types, so TavernLib and mods have room for their own. It changes the wire format, so server and client both need it.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MessageExpanderPatch()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logmessagehandler" /><code>{"static bool LogMessageHandler("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ArraySegment<byte> data, "}<Link to="/mod/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, out "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" messageType, ref int __result)"}</code> | <span className="api-desc">Prefix on `MessageProcessor.ProcessSingleMessageFromData` that skips it, reading the type as 8 bits and handing the message on.</span> |
| <Link id="m-startserializecustom" /><code>{"static bool StartSerializeCustom("}<Link to="/mod/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/mod/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, ref "}<Link to="/mod/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" __result)"}</code> | <span className="api-desc">Prefix on `OutgoingPacketManager.StartSerialize` that skips it, writing the message type as 8 bits.</span> |
