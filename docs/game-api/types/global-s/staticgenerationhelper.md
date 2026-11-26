---
title: "StaticGenerationHelper"
description: "Runs every IStaticGeneration component on a GameObject, inside a pushed random state so results come from a seed (or a fresh random one)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StaticGenerationHelper

A **static class** in `Root.Township`, no namespace.

Runs every `IStaticGeneration` component on a GameObject, inside a pushed random state so results come from a seed (or a fresh random one).

- **Listed in** [No namespace: S](/game-api/types/global-s)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"static void Generate(GameObject target, int seed, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Calls `Generate` on one `IStaticGeneration` or on all of them on a GameObject, with a given seed or a random one pushed onto `RandomState`. |
| <Link id="m-generate-2" /><code>{"static void Generate("}<Link to="/game-api/types/global-i-l/istaticgeneration">{"IStaticGeneration"}</Link>{" staticGeneration, int seed, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Calls `Generate` on one `IStaticGeneration` or on all of them on a GameObject, with a given seed or a random one pushed onto `RandomState`. |
| <Link id="m-generate-3" /><code>{"static void Generate(GameObject target, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Calls `Generate` on one `IStaticGeneration` or on all of them on a GameObject, with a given seed or a random one pushed onto `RandomState`. |
| <Link id="m-generate-4" /><code>{"static void Generate("}<Link to="/game-api/types/global-i-l/istaticgeneration">{"IStaticGeneration"}</Link>{" staticGeneration, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" dynamicParent, "}<Link to="/game-api/types/global-s/spawndata">{"SpawnData"}</Link>{" spawnData)"}</code> | Calls `Generate` on one `IStaticGeneration` or on all of them on a GameObject, with a given seed or a random one pushed onto `RandomState`. |
| <Link id="m-testreset" /><code>{"static void TestReset(GameObject target)"}</code> | Calls `Reset` on every `IStaticGeneration` component on the target. |
