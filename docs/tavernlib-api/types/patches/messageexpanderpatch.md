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

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [MessageExpanderPatch](/tavernlib-api/types/patches/messageexpanderpatch)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MessageExpanderPatch()"}</code> | Created by TavernLib; mods don't make one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-logmessagehandler" /><code>{"static bool LogMessageHandler("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, ArraySegment<byte> data, "}<Link to="/game-api/types/alta-networking/connectionchannel">{"ConnectionChannel"}</Link>{" channel, out "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" messageType, ref int __result)"}</code> | Prefix on `MessageProcessor.ProcessSingleMessageFromData` that skips it, reading the type as 8 bits and handing the message on. |
| <Link id="m-startserializecustom" /><code>{"static bool StartSerializeCustom("}<Link to="/game-api/types/alta-networking/connection">{"Connection"}</Link>{" connection, "}<Link to="/game-api/types/alta-networking/messagetype">{"MessageType"}</Link>{" type, ref "}<Link to="/game-api/types/assembly-other/streamwriter">{"StreamWriter"}</Link>{" __result)"}</code> | Prefix on `OutgoingPacketManager.StartSerialize` that skips it, writing the message type as 8 bits. |
