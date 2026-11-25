---
title: "MicroTutorialOrbInjector"
description: "class MicroTutorialOrbInjector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MicroTutorialOrbInjector

A **class** in `Root.Township`, `ATT.MicroTutorial`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MicroTutorialOrbInjector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-microtutorialfaceorb" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" microTutorialFaceOrb"}</code> |  |
| <Link id="m-orbspawndatabychunk" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", List<"}<Link to="/game-api/types/game-other-namespaces/orbspawndata">{"OrbSpawnData"}</Link>{">> orbSpawnDataByChunk"}</code> |  |
| <Link id="m-spawnedorbentitiesbychunk" /><code>{"private readonly Dictionary<"}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{", List<"}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{">> spawnedOrbEntitiesByChunk"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-settings" /><code>{"private static "}<Link to="/game-api/types/game-other-namespaces/microtutorialfaceorbspawnsettings">{"MicroTutorialFaceOrbSpawnSettings"}</Link>{" Settings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-despawnorbsforchunk" /><code>{"private void DespawnOrbsForChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-setuporbspawndata" /><code>{"private void SetupOrbSpawnData("}<Link to="/game-api/types/game-other-namespaces/orbinjectordata">{"OrbInjectorData"}</Link>{" data)"}</code> |  |
| <Link id="m-spawnorbsforchunk" /><code>{"private void SpawnOrbsForChunk("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |  |
