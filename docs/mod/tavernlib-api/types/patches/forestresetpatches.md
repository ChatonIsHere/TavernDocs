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

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-otherreset" /><code>{"private static bool? _otherReset"}</code> | <span className="api-desc">Cached answer to whether another mod's prefix on `Wipe` replaces TavernLib's reset.</span> |
| <Link id="m-queued" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{", StrongBox<int>> Queued"}</code> | <span className="api-desc">The new seed waiting for the next start, per forest generator.</span> |
| <Link id="m-resetting" /><code>{"private static readonly HashSet<"}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> Resetting"}</code> | <span className="api-desc">Forests whose reset is running now, so a second call is ignored.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-answerreset" /><code>{"static bool AnswerReset("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest, ref Task __result)"}</code> | <span className="api-desc">Prefix on `WorldCommandModule.ForestCommandModule.Reset` that skips it, runs the wipe and answers what happened.</span> |
| <Link id="m-isqueued" /><code>{"static bool IsQueued("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest)"}</code> | <span className="api-desc">True when a reset of this forest is waiting for the next server start.</span> |
| <Link id="m-queuereset" /><code>{"static bool QueueReset("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" __instance, int newSeed, ref Task __result, MethodBase __originalMethod)"}</code> | <span className="api-desc">Prefix on `ForestGenerator.Wipe` that skips it and queues the reset, unless another assembly also prefixes `Wipe`. A negative seed picks a random one.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-answer" /><code>{"private static async Task<string> Answer("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest)"}</code> | <span className="api-desc">Runs the forest wipe and returns text saying whether TavernLib's reset or another mod's ran.</span> |
| <Link id="m-otherreset-2" /><code>{"private static bool OtherReset(MethodBase wipe)"}</code> | <span className="api-desc">True when a prefix from another assembly is patched onto `ForestGenerator.Wipe`, in which case TavernLib leaves the reset to it.</span> |
| <Link id="m-queue" /><code>{"private static async Task Queue("}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest, int newSeed)"}</code> | <span className="api-desc">Clears the forest's chunks, moves players outside the forest, and records the new seed for the next start.</span> |

</details>
