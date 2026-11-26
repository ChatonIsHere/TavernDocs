---
title: "EventPatches"
description: "The Harmony patch behind TavernEvents.SocketCreated: a postfix on the Alta.Networking.Socket constructor."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EventPatches

A **class** in `TavernLib`, `TavernLib.Patches`.

The Harmony patch behind `TavernEvents.SocketCreated`: a postfix on the `Alta.Networking.Socket` constructor. Both sides.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [EventPatches](/tavernlib-api/types/patches/eventpatches)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EventPatches()"}</code> | Created by TavernLib; mods don't make one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-socketcreatedevent" /><code>{"static void SocketCreatedEvent()"}</code> | Postfix on the `Socket` constructor that raises `TavernEvents.SocketCreated` with `Socket.Current`, the socket just made. |
