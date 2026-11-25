---
title: "ConsoleEventsPatch"
description: "Harmony patches that raise the game's ConsoleEvents.PlayerJoined and PlayerLeft events when a player joins or leaves."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ConsoleEventsPatch

A **class** in `TavernLib`, `TavernLib.Patches`.

Harmony patches that raise the game's `ConsoleEvents.PlayerJoined` and `PlayerLeft` events when a player joins or leaves. Server.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [ConsoleEventsPatch](/tavernlib-api/types/patches/consoleeventspatch)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ConsoleEventsPatch()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playerjoinpatch" /><code>{"static void PlayerJoinPatch("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" __instance)"}</code> | Postfix on `Player.InitializePlayerOnServer` that raises `ConsoleEvents.PlayerJoined` for that player. |
| <Link id="m-playerleavepatch" /><code>{"static void PlayerLeavePatch("}<Link to="/game-api/types/alta-networking/serverplayerconnectionhandlerold">{"ServerPlayerConnectionHandlerOld"}</Link>{" __instance)"}</code> | Postfix on the `ServerPlayerConnectionHandlerOld` constructor that hooks `UserLeft` to raise `ConsoleEvents.PlayerLeft` when a player leaves. |
