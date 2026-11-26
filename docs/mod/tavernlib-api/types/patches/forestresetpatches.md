---
title: "ForestResetPatches"
description: "Patches ForestGenerator.Wipe so a forest reset clears the forest and moves players out but keeps the running seed, saving the new seed for the next start."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestResetPatches

A **static class** in `TavernLib`, `TavernLib.Patches`.

Patches `ForestGenerator.Wipe` so a forest reset clears the forest and moves players out but keeps the running seed, saving the new seed for the next start. Server. Steps aside if another mod also prefixes `Wipe`.

- **Listed in** [TavernLib.Patches](/mod/tavernlib-api/types/patches)
- **Nested types** [`DeleteOldCaches`](/mod/tavernlib-api/types/patches/forestresetpatches-deleteoldcaches), [`SaveQueuedSeed`](/mod/tavernlib-api/types/patches/forestresetpatches-savequeuedseed)
- **Attributes** `HarmonyPatch`
- **Documented in** [ForestResetPatches](/mod/tavernlib-api/types/patches/forestresetpatches)

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-otherreset" /><code>{"private static bool? _otherReset"}</code> | Cached answer to whether another mod's prefix on `Wipe` replaces TavernLib's reset. |
| <Link id="m-queued" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{", StrongBox<int>> Queued"}</code> | The new seed waiting for the next start, per forest generator. |
| <Link id="m-resetting" /><code>{"private static readonly HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> Resetting"}</code> | Forests whose reset is running now, so a second call is ignored. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-answerreset" /><code>{"static bool AnswerReset("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest, ref Task __result)"}</code> | Prefix on `WorldCommandModule.ForestCommandModule.Reset` that skips it, runs the wipe and answers what happened. |
| <Link id="m-isqueued" /><code>{"static bool IsQueued("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest)"}</code> | True when a reset of this forest is waiting for the next server start. |
| <Link id="m-queuereset" /><code>{"static bool QueueReset("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" __instance, int newSeed, ref Task __result, MethodBase __originalMethod)"}</code> | Prefix on `ForestGenerator.Wipe` that skips it and queues the reset, unless another assembly also prefixes `Wipe`. A negative seed picks a random one. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-answer" /><code>{"private static async Task<string> Answer("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest)"}</code> | Runs the forest wipe and returns text saying whether TavernLib's reset or another mod's ran. |
| <Link id="m-otherreset-2" /><code>{"private static bool OtherReset(MethodBase wipe)"}</code> | True when a prefix from another assembly is patched onto `ForestGenerator.Wipe`, in which case TavernLib leaves the reset to it. |
| <Link id="m-queue" /><code>{"private static async Task Queue("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest, int newSeed)"}</code> | Clears the forest's chunks, moves players outside the forest, and records the new seed for the next start. |

</details>
