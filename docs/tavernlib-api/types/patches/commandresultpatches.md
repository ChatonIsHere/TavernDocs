---
title: "CommandResultPatches"
description: "Harmony patches on CommandService.HandleMatchedCommand and PlayerListConverter.ConvertFrom, so every console command's result reads properly: a player list..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CommandResultPatches

A **static class** in `TavernLib`, `TavernLib.Patches`.

Harmony patches on `CommandService.HandleMatchedCommand` and `PlayerListConverter.ConvertFrom`, so every console command's result reads properly: a player list that matched nobody is refused, and a thrown error shows its own message.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [CommandResultPatches](/tavernlib-api/types/patches/commandresultpatches)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-typed" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{", string> Typed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refuseemptyplayerlist" /><code>{"static bool RefuseEmptyPlayerList("}<Link to="/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" matchedCommand, ref Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> __result)"}</code> | Prefix on `HandleMatchedCommand`: skips the command when a `PlayerList` argument is empty, answering "No online player matches" with what was typed. |
| <Link id="m-remembertypedplayers" /><code>{"static void RememberTypedPlayers(object value, object __result)"}</code> | Postfix on `PlayerListConverter.ConvertFrom` that keeps the typed text with the resulting `PlayerList`, for the refusal message. |
| <Link id="m-unwrapcommanderror" /><code>{"static void UnwrapCommandError(ref Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> __result)"}</code> | Postfix on `HandleMatchedCommand` that replaces a `TargetInvocationException` in the result with the command's own exception. |
| <Link id="m-unwrap" /><code>{"private static async Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> Unwrap(Task<"}<Link to="/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> pending)"}</code> |  |
