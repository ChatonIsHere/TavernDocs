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

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Attributes** `HarmonyPatch`
- **Documented in** [CommandResultPatches](/mod/tavernlib-api/types/patches/commandresultpatches)

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-typed" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{", string> Typed"}</code> | <span className="api-desc">The text typed for each `PlayerList` argument, kept so a refusal can quote it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-refuseemptyplayerlist" /><code>{"static bool RefuseEmptyPlayerList("}<Link to="/mod/game-api/types/alta-console/commandsearchresult">{"CommandSearchResult"}</Link>{" matchedCommand, ref Task<"}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> __result)"}</code> | <span className="api-desc">Prefix on `HandleMatchedCommand`: skips the command when a `PlayerList` argument is empty, answering "No online player matches" with what was typed.</span> |
| <Link id="m-remembertypedplayers" /><code>{"static void RememberTypedPlayers(object value, object __result)"}</code> | <span className="api-desc">Postfix on `PlayerListConverter.ConvertFrom` that keeps the typed text with the resulting `PlayerList`, for the refusal message.</span> |
| <Link id="m-unwrapcommanderror" /><code>{"static void UnwrapCommandError(ref Task<"}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> __result)"}</code> | <span className="api-desc">Postfix on `HandleMatchedCommand` that replaces a `TargetInvocationException` in the result with the command's own exception.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-unwrap" /><code>{"private static async Task<"}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> Unwrap(Task<"}<Link to="/mod/game-api/types/alta-console/commandresult">{"CommandResult"}</Link>{"> pending)"}</code> | <span className="api-desc">Awaits a command's result and swaps a `TargetInvocationException` for the exception inside it.</span> |

</details>
