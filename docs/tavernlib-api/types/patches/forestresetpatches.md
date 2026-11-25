---
title: "ForestResetPatches"
description: "A static class in TavernLib, TavernLib.Patches."
displayed_sidebar: tavernlib
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestResetPatches

A **static class** in `TavernLib`, `TavernLib.Patches`.

A **static class** in `TavernLib`, `TavernLib.Patches`.

- **Listed in** [TavernLib.Patches](/tavernlib-api/types/patches)
- **Nested types** [`DeleteOldCaches`](/tavernlib-api/types/patches/forestresetpatches-deleteoldcaches), [`SaveQueuedSeed`](/tavernlib-api/types/patches/forestresetpatches-savequeuedseed)
- **Attributes** `HarmonyPatch`
- **Documented in** [ForestResetPatches](/tavernlib-api/types/patches/forestresetpatches)

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-otherreset" /><code>{"private static bool? _otherReset"}</code> |  |
| <Link id="m-queued" /><code>{"private static readonly ConditionalWeakTable<"}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{", StrongBox<int>> Queued"}</code> |  |
| <Link id="m-resetting" /><code>{"private static readonly HashSet<"}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{"> Resetting"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-answerreset" /><code>{"static bool AnswerReset("}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest, ref Task __result)"}</code> |  |
| <Link id="m-isqueued" /><code>{"static bool IsQueued("}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest)"}</code> |  |
| <Link id="m-queuereset" /><code>{"static bool QueueReset("}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" __instance, int newSeed, ref Task __result, MethodBase __originalMethod)"}</code> |  |
| <Link id="m-answer" /><code>{"private static async Task<string> Answer("}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest)"}</code> |  |
| <Link id="m-otherreset-2" /><code>{"private static bool OtherReset(MethodBase wipe)"}</code> |  |
| <Link id="m-queue" /><code>{"private static async Task Queue("}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest, int newSeed)"}</code> |  |
