---
title: "LevelSelector"
description: "The dial on a level select cave teleporter."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LevelSelector

A **class** in `Root.Township`, `Alta.Caves`.

The dial on a level select cave teleporter. Turning it fills a gauge and picks a cave level, which `LevelSelectCaveTeleporter` listens for. The server owns the progress and syncs it.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/game-api/types/alta-networking/inetworkserialized), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelSelector()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | Shared timing stats for `PrepareForWrite` across all level selectors. |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | Shared timing stats for `Serialize` across all level selectors. |

<details>
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | Shader property ID for the gauge fill amount. |
| <Link id="m-animatingmaterial" /><code>{"private Material animatingMaterial"}</code> | Client copy of the gauge material that the fill is written to. |
| <Link id="m-animationprogress" /><code>{"private AnimationCurve animationProgress"}</code> | Curve from dial progress to gauge fill. |
| <Link id="m-baserenderergroup" /><code>{"private "}<Link to="/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" baseRendererGroup"}</code> | Renderer group the spawned pips' renderers are added to. |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | Dial progress from 0 to 1. |
| <Link id="m-gauges" /><code>{"private Renderer[] gauges"}</code> | Renderers that show the fill gauge. |
| <Link id="m-isupdating" /><code>{"private bool isUpdating"}</code> | True while the dial is being turned or easing, so it gets synced. |
| <Link id="m-lastpipposition" /><code>{"private Transform lastPipPosition"}</code> | Where the last pip goes. Pips are spread from `pipParent` to here. |
| <Link id="m-lerptoclosest" /><code>{"private Coroutine lerpToClosest"}</code> | The running `LerpToClosest` coroutine, if any. |
| <Link id="m-levelcount" /><code>{"private int levelCount"}</code> | Backing field for `LevelCount`. |
| <Link id="m-lineardistance" /><code>{"private float linearDistance"}</code> | How much turning (default 720) moves the progress from 0 to 1. |
| <Link id="m-minimumlinearprogress" /><code>{"private float minimumLinearProgress"}</code> | Smallest turn amount the server acts on. Smaller amounts are ignored. |
| <Link id="m-pipparent" /><code>{"private Transform pipParent"}</code> | Parent transform of the pips, and the first pip's position. |
| <Link id="m-pipprefab" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/caveteleporterpip">{"CaveTeleporterPip"}</Link>{" pipPrefab"}</code> | The `CaveTeleporterPip` prefab spawned for each level. |
| <Link id="m-updatedlevel" /><code>{"private "}<Link to="/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" updatedLevel"}</code> | Event fired with the new level whenever the selected level changes. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; private set; }"}</code> | The selected level, from 0 to `LevelCount` minus 1. Starts at -1 before any level is picked. |
| <Link id="m-levelcount-2" /><code>{"int LevelCount { get; }"}</code> | How many levels the dial can select (default 10). |
| <Link id="m-pips" /><code><Link to="/game-api/types/alta-world-generation/caveteleporterpip">{"CaveTeleporterPip"}</Link>{"[] Pips { get; private set; }"}</code> | The level marker pips spawned on clients. Null on a headless server. |

<details>
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | Bit budget declared for this component's network data (7). |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | Returns the shared static `prepareForWriteTimer`. |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | Returns the shared static `serializeTimer`. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishrotation" /><code>{"void FinishRotation()"}</code> | Starts easing the progress to the exact position of the current level. |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: works out the starting level from the current progress. |
| <Link id="m-progress" /><code>{"void Progress(float linearProgress)"}</code> | Turns the dial by the given amount. Server: moves the progress if the amount is above the minimum and updates the level. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client: gives the gauges their own material copy and spawns the level pips. |
| <Link id="m-lerptoclosest-2" /><code>{"private IEnumerator LerpToClosest() (iterator)"}</code> | Coroutine that moves the progress towards the current level's position, then stops marking the dial as updating. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Editor: draws a line from the first pip position to the last. |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | Removes null entries from `gauges` after the build bake. |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | Sends data only while the dial is being turned or easing to a level. |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Syncs progress and level. Clients update the gauge and selected pip when they read it. |
| <Link id="m-spawnpips" /><code>{"private void SpawnPips()"}</code> | Spawns one pip per level, spaced evenly from the pip parent to `lastPipPosition`. |
| <Link id="m-updatelevel" /><code>{"private void UpdateLevel(int newLevel)"}</code> | Changes the selected level, swaps which pip is lit on clients and fires `updatedLevel`. |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | Sets the gauge fill on clients. Server: rounds the progress to the nearest level and selects it. |

</details>

## Used in

Members of other types that take, return or hold a `LevelSelector`:

[`LevelSelectCaveTeleporter.levelSelector`](/game-api/types/alta-world-generation/levelselectcaveteleporter#m-levelselector).
