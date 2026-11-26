---
title: "PlayerLimitPatch"
description: "Postfixes the ServerHandler.PlayerLimit getter so the limit comes from server_settings.json."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerLimitPatch

A **class** in `TavernLib`, `TavernLib.Patches`.

Postfixes the `ServerHandler.PlayerLimit` getter so the limit comes from `server_settings.json`. Server.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [PlayerLimitPatch](/tavernlib-api/types/patches/playerlimitpatch)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerLimitPatch()"}</code> | Created by TavernLib; mods don't make one. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setplayerlimit" /><code>{"static void SetPlayerLimit(ref int __result)"}</code> | Returns the last-read server settings' `PlayerLimit`, or `DefaultMaxPlayers` if none were read. Needs `TavernManager` registered. |
