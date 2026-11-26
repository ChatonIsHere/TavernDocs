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

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkdestroy" /><code>{"static void CheckDestroy(uint id)"}</code> | <span className="api-desc">Prefix on `WackyCommandModule.Destroy`: throws when the id has no entity, the entity has a parent, or it isn't its prefab's root.</span> |
| <Link id="m-checkmoveselection" /><code>{"static void CheckMoveSelection()"}</code> | <span className="api-desc">Prefix on `SelectionCommandModule.MovingModule.Exact` that throws "Nothing is selected" when the console's context has no selection.</span> |
| <Link id="m-checkpossiblevalues" /><code>{"static void CheckPossibleValues(string settingsTarget, string setting, object __result)"}</code> | <span className="api-desc">Postfix on `SettingsCommandModules.ListPossivleValues` that throws when it found no such setting with a set of choices.</span> |
| <Link id="m-checkrotateselection" /><code>{"static void CheckRotateSelection()"}</code> | <span className="api-desc">Prefix on `SelectionCommandModule.RotatingModule.Exact` that throws "Nothing is selected" when the console's context has no selection.</span> |
| <Link id="m-checktimeset" /><code>{"static void CheckTimeSet(string time)"}</code> | <span className="api-desc">Prefix on `TimeCommandModule.Set`: throws for a word that isn't a time keyword, or when there's no `GameTimeManager`. Numbers pass.</span> |
| <Link id="m-replacecaveteleport" /><code>{"static bool ReplaceCaveTeleport("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, int layer, ref Task __result)"}</code> | <span className="api-desc">Prefix on `WorldCommandModule.CaveCommandModule.CaveTeleport` that skips it, making the layer if needed and teleporting the players to its portal.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"internal static void Apply(Harmony harmony)"}</code> | <span className="api-desc">Internal: patches each command, and swaps `time ofday` for a version that returns the time. Logs a warning and skips any method the game lacks.</span> |
| <Link id="m-patch" /><code>{"private static void Patch(Harmony harmony, Type type, string name, string prefix = null, string postfix = null)"}</code> | <span className="api-desc">Applies a prefix or postfix to a game method, and logs a warning instead of throwing if it is missing or can't be patched.</span> |
| <Link id="m-replace" /><code>{"private static void Replace(string moduleName, string name, MethodInfo method)"}</code> | <span className="api-desc">Swaps a console command for a new one built on the given method, keeping the old one's aliases, requirements and priority.</span> |
| <Link id="m-requireselection" /><code>{"private static void RequireSelection()"}</code> | <span className="api-desc">Throws a `CommandException` when nothing is selected.</span> |
| <Link id="m-teleporttocavelayer" /><code>{"private static async Task<string> TeleportToCaveLayer("}<Link to="/mod/game-api/types/global-p/playerlist">{"PlayerList"}</Link>{" players, int layer)"}</code> | <span className="api-desc">Teleports the players to a cave layer's portal, generating the layers first if needed, and answers who it moved.</span> |
| <Link id="m-timemanager" /><code>{"private static "}<Link to="/mod/game-api/types/global-e-h/gametimemanager">{"GameTimeManager"}</Link>{" TimeManager()"}</code> | <span className="api-desc">Returns `GameTimeManager.Instance`, or throws a `CommandException` if the server has no day and night.</span> |
| <Link id="m-timeofday" /><code>{"private static float TimeOfDay(bool isNormalised = false)"}</code> | <span className="api-desc">Replacement for the `time ofday` command; returns the current time, normalised if asked.</span> |

</details>
