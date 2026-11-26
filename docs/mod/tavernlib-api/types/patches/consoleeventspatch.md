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

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ConsoleEventsPatch()"}</code> | <span className="api-desc">Created by TavernLib; mods don't make one.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playerjoinpatch" /><code>{"static void PlayerJoinPatch("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" __instance)"}</code> | <span className="api-desc">Postfix on `Player.InitializePlayerOnServer` that raises `ConsoleEvents.PlayerJoined` for that player.</span> |
| <Link id="m-playerleavepatch" /><code>{"static void PlayerLeavePatch("}<Link to="/mod/game-api/types/alta-networking/serverplayerconnectionhandlerold">{"ServerPlayerConnectionHandlerOld"}</Link>{" __instance)"}</code> | <span className="api-desc">Postfix on the `ServerPlayerConnectionHandlerOld` constructor that hooks `UserLeft` to raise `ConsoleEvents.PlayerLeft` when a player leaves.</span> |
