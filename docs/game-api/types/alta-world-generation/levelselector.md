---
title: "LevelSelector"
description: "class LevelSelector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LevelSelector

A **class** in `Root.Township`, `Alta.Caves`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelSelector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> |  |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> |  |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> |  |
| <Link id="m-animatingmaterial" /><code>{"private Material animatingMaterial"}</code> |  |
| <Link id="m-animationprogress" /><code>{"private AnimationCurve animationProgress"}</code> |  |
| <Link id="m-baserenderergroup" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" baseRendererGroup"}</code> |  |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> |  |
| <Link id="m-gauges" /><code>{"private Renderer[] gauges"}</code> |  |
| <Link id="m-isupdating" /><code>{"private bool isUpdating"}</code> |  |
| <Link id="m-lastpipposition" /><code>{"private Transform lastPipPosition"}</code> |  |
| <Link id="m-lerptoclosest" /><code>{"private Coroutine lerpToClosest"}</code> |  |
| <Link id="m-levelcount" /><code>{"private int levelCount"}</code> |  |
| <Link id="m-lineardistance" /><code>{"private float linearDistance"}</code> |  |
| <Link id="m-minimumlinearprogress" /><code>{"private float minimumLinearProgress"}</code> |  |
| <Link id="m-pipparent" /><code>{"private Transform pipParent"}</code> |  |
| <Link id="m-pipprefab" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleporterpip">{"CaveTeleporterPip"}</Link>{" pipPrefab"}</code> |  |
| <Link id="m-updatedlevel" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" updatedLevel"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; private set; }"}</code> |  |
| <Link id="m-levelcount-2" /><code>{"int LevelCount { get; }"}</code> |  |
| <Link id="m-pips" /><code><Link to="/game-api/types/alta-world-generation/caveteleporterpip">{"CaveTeleporterPip"}</Link>{"[] Pips { get; private set; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> |  |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishrotation" /><code>{"void FinishRotation()"}</code> |  |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-progress" /><code>{"void Progress(float linearProgress)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-lerptoclosest-2" /><code>{"private IEnumerator LerpToClosest() (iterator)"}</code> |  |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> |  |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> |  |
| <Link id="m-spawnpips" /><code>{"private void SpawnPips()"}</code> |  |
| <Link id="m-updatelevel" /><code>{"private void UpdateLevel(int newLevel)"}</code> |  |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LevelSelector`:

[`LevelSelectCaveTeleporter.levelSelector`](/game-api/types/alta-world-generation/levelselectcaveteleporter#m-levelselector).
