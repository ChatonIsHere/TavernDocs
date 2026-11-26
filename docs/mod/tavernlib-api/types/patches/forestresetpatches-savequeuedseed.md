---
title: "ForestResetPatches.SaveQueuedSeed"
description: "Postfixes ForestGenerator's explicit Save method so the save holds a queued reset's new seed, and the next start builds that forest."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestResetPatches.SaveQueuedSeed

A **static class** in `TavernLib`, `TavernLib.Patches`.

Postfixes `ForestGenerator`'s explicit `Save` method so the save holds a queued reset's new seed, and the next start builds that forest. Server.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Nested in** [`ForestResetPatches`](/mod/tavernlib-api/types/patches/forestresetpatches)
- **Attributes** `HarmonyPatch`
- **Documented in** [ForestResetPatches.SaveQueuedSeed](/mod/tavernlib-api/types/patches/forestresetpatches-savequeuedseed)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postfix" /><code>{"static void Postfix("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" __instance, "}<Link to="/mod/game-api/types/alta-world-generation/forestgeneratorsavedata">{"ForestGeneratorSaveData"}</Link>{" __result)"}</code> | Writes the queued seed into the returned `ForestGeneratorSaveData`, when a reset is queued. |
| <Link id="m-targetmethod" /><code>{"static MethodBase TargetMethod()"}</code> | Finds `ForestGenerator`'s explicit `Save` method that returns `ForestGeneratorSaveData`. |
