---
title: "ForestResetPatches.DeleteOldCaches"
description: "Postfixes ForestGenerator's explicit Load method to delete forest and river cache files named after any other seed, left over from a reset."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestResetPatches.DeleteOldCaches

A **static class** in `TavernLib`, `TavernLib.Patches`.

Postfixes `ForestGenerator`'s explicit `Load` method to delete forest and river cache files named after any other seed, left over from a reset. Server.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Nested in** [`ForestResetPatches`](/tavernlib-api/types/patches/forestresetpatches)
- **Attributes** `HarmonyPatch`
- **Documented in** [ForestResetPatches.DeleteOldCaches](/tavernlib-api/types/patches/forestresetpatches-deleteoldcaches)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postfix" /><code>{"static void Postfix("}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" __instance, "}<Link to="/game-api/types/alta-world-generation/forestgeneratorsavedata">{"ForestGeneratorSaveData"}</Link>{" data)"}</code> | Deletes the forest's cache files whose seed isn't the loaded one. Logs a warning if that fails. |
| <Link id="m-targetmethod" /><code>{"static MethodBase TargetMethod()"}</code> | Finds `ForestGenerator`'s explicit `Load` method that takes `ForestGeneratorSaveData`. |
