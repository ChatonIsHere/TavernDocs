---
title: "GameCommandPatches"
description: "Patches for game console commands that answered Success having done nothing: time set, time ofday, settings possible, select move/rotate exact, wacky..."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GameCommandPatches

A **static class** in `TavernLib`, `TavernLib.Patches`.

Patches for game console commands that answered Success having done nothing: `time set`, `time ofday`, `settings possible`, `select move/rotate exact`, `wacky destroy` and `world caves teleport`. Applied by hand in `OnLateInitializeMelon`, not by attribute.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Documented in** [GameCommandPatches](/tavernlib-api/types/patches/gamecommandpatches)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkdestroy" /><code>{"static void CheckDestroy(uint id)"}</code> | Prefix on `WackyCommandModule.Destroy`: throws when the id has no entity, the entity has a parent, or it isn't its prefab's root. |
| <Link id="m-checkmoveselection" /><code>{"static void CheckMoveSelection()"}</code> | Prefix on `SelectionCommandModule.MovingModule.Exact` that throws "Nothing is selected" when the console's context has no selection. |
| <Link id="m-checkpossiblevalues" /><code>{"static void CheckPossibleValues(string settingsTarget, string setting, object __result)"}</code> | Postfix on `SettingsCommandModules.ListPossivleValues` that throws when it found no such setting with a set of choices. |
| <Link id="m-checkrotateselection" /><code>{"static void CheckRotateSelection()"}</code> | Prefix on `SelectionCommandModule.RotatingModule.Exact` that throws "Nothing is selected" when the console's context has no selection. |
| <Link id="m-checktimeset" /><code>{"static void CheckTimeSet(string time)"}</code> | Prefix on `TimeCommandModule.Set`: throws for a word that isn't a time keyword, or when there's no `GameTimeManager`. Numbers pass. |
| <Link id="m-replacecaveteleport" /><code>{"static bool ReplaceCaveTeleport("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, int layer, ref Task __result)"}</code> | Prefix on `WorldCommandModule.CaveCommandModule.CaveTeleport` that skips it, making the layer if needed and teleporting the players to its portal. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"internal static void Apply(Harmony harmony)"}</code> | Internal: patches each command, and swaps `time ofday` for a version that returns the time. Logs a warning and skips any method the game lacks. |
| <Link id="m-patch" /><code>{"private static void Patch(Harmony harmony, Type type, string name, string prefix = null, string postfix = null)"}</code> |  |
| <Link id="m-replace" /><code>{"private static void Replace(string moduleName, string name, MethodInfo method)"}</code> |  |
| <Link id="m-requireselection" /><code>{"private static void RequireSelection()"}</code> |  |
| <Link id="m-teleporttocavelayer" /><code>{"private static async Task<string> TeleportToCaveLayer("}<Link to="/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, int layer)"}</code> |  |
| <Link id="m-timemanager" /><code>{"private static "}<Link to="/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" TimeManager()"}</code> |  |
| <Link id="m-timeofday" /><code>{"private static float TimeOfDay(bool isNormalised = false)"}</code> |  |

</details>
