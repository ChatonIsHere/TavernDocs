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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`INetworkSerialized`](/mod/game-api/types/alta-networking/inetworkserialized), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LevelSelector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-prepareforwritetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" prepareForWriteTimer"}</code> | <span className="api-desc">Shared timing stats for `PrepareForWrite` across all level selectors.</span> |
| <Link id="m-serializetimer" /><code>{"static "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" serializeTimer"}</code> | <span className="api-desc">Shared timing stats for `Serialize` across all level selectors.</span> |

<details className="api-private">
<summary>15 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-fillprogress" /><code>{"private static readonly int _FillProgress"}</code> | <span className="api-desc">Shader property ID for the gauge fill amount.</span> |
| <Link id="m-animatingmaterial" /><code>{"private Material animatingMaterial"}</code> | <span className="api-desc">Client copy of the gauge material that the fill is written to.</span> |
| <Link id="m-animationprogress" /><code>{"private AnimationCurve animationProgress"}</code> | <span className="api-desc">Curve from dial progress to gauge fill.</span> |
| <Link id="m-baserenderergroup" /><code>{"private "}<Link to="/mod/game-api/types/global-q-r/renderergroup">{"RendererGroup"}</Link>{" baseRendererGroup"}</code> | <span className="api-desc">Renderer group the spawned pips' renderers are added to.</span> |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | <span className="api-desc">Dial progress from 0 to 1.</span> |
| <Link id="m-gauges" /><code>{"private Renderer[] gauges"}</code> | <span className="api-desc">Renderers that show the fill gauge.</span> |
| <Link id="m-isupdating" /><code>{"private bool isUpdating"}</code> | <span className="api-desc">True while the dial is being turned or easing, so it gets synced.</span> |
| <Link id="m-lastpipposition" /><code>{"private Transform lastPipPosition"}</code> | <span className="api-desc">Where the last pip goes. Pips are spread from `pipParent` to here.</span> |
| <Link id="m-lerptoclosest" /><code>{"private Coroutine lerpToClosest"}</code> | <span className="api-desc">The running `LerpToClosest` coroutine, if any.</span> |
| <Link id="m-levelcount" /><code>{"private int levelCount"}</code> | <span className="api-desc">Backing field for `LevelCount`.</span> |
| <Link id="m-lineardistance" /><code>{"private float linearDistance"}</code> | <span className="api-desc">How much turning (default 720) moves the progress from 0 to 1.</span> |
| <Link id="m-minimumlinearprogress" /><code>{"private float minimumLinearProgress"}</code> | <span className="api-desc">Smallest turn amount the server acts on. Smaller amounts are ignored.</span> |
| <Link id="m-pipparent" /><code>{"private Transform pipParent"}</code> | <span className="api-desc">Parent transform of the pips, and the first pip's position.</span> |
| <Link id="m-pipprefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/caveteleporterpip">{"CaveTeleporterPip"}</Link>{" pipPrefab"}</code> | <span className="api-desc">The `CaveTeleporterPip` prefab spawned for each level.</span> |
| <Link id="m-updatedlevel" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intevent">{"IntEvent"}</Link>{" updatedLevel"}</code> | <span className="api-desc">Event fired with the new level whenever the selected level changes.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-currentlevel" /><code>{"int CurrentLevel { get; private set; }"}</code> | <span className="api-desc">The selected level, from 0 to `LevelCount` minus 1. Starts at -1 before any level is picked.</span> |
| <Link id="m-levelcount-2" /><code>{"int LevelCount { get; }"}</code> | <span className="api-desc">How many levels the dial can select (default 10).</span> |
| <Link id="m-pips" /><code><Link to="/mod/game-api/types/alta-world-generation/caveteleporterpip">{"CaveTeleporterPip"}</Link>{"[] Pips { get; private set; }"}</code> | <span className="api-desc">The level marker pips spawned on clients. Null on a headless server.</span> |

<details className="api-private">
<summary>3 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-alta-networking-inetworkserialized-maximumbits" /><code>{"private int Alta.Networking.INetworkSerialized.MaximumBits { get; }"}</code> | <span className="api-desc">Bit budget declared for this component's network data (7).</span> |
| <Link id="m-alta-networking-inetworkserialized-prepareforwritetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.PrepareForWriteTimer { get; }"}</code> | <span className="api-desc">Returns the shared static `prepareForWriteTimer`.</span> |
| <Link id="m-alta-networking-inetworkserialized-serializetimer" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/accumulativeaveragecount">{"AccumulativeAverageCount"}</Link>{" Alta.Networking.INetworkSerialized.SerializeTimer { get; }"}</code> | <span className="api-desc">Returns the shared static `serializeTimer`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-finishrotation" /><code>{"void FinishRotation()"}</code> | <span className="api-desc">Starts easing the progress to the exact position of the current level.</span> |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Server: works out the starting level from the current progress.</span> |
| <Link id="m-progress" /><code>{"void Progress(float linearProgress)"}</code> | <span className="api-desc">Turns the dial by the given amount. Server: moves the progress if the amount is above the minimum and updates the level.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client: gives the gauges their own material copy and spawns the level pips.</span> |
| <Link id="m-lerptoclosest-2" /><code>{"private IEnumerator LerpToClosest() (iterator)"}</code> | <span className="api-desc">Coroutine that moves the progress towards the current level's position, then stops marking the dial as updating.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Editor: draws a line from the first pip position to the last.</span> |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">Removes null entries from `gauges` after the build bake.</span> |
| <Link id="m-prepareforwrite" /><code>{"private bool Alta.Networking.INetworkSerialized.PrepareForWrite(bool isWriteFull)"}</code> | <span className="api-desc">Sends data only while the dial is being turned or easing to a level.</span> |
| <Link id="m-serialize" /><code>{"private void Alta.Networking.INetworkSerialized.Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Syncs progress and level. Clients update the gauge and selected pip when they read it.</span> |
| <Link id="m-spawnpips" /><code>{"private void SpawnPips()"}</code> | <span className="api-desc">Spawns one pip per level, spaced evenly from the pip parent to `lastPipPosition`.</span> |
| <Link id="m-updatelevel" /><code>{"private void UpdateLevel(int newLevel)"}</code> | <span className="api-desc">Changes the selected level, swaps which pip is lit on clients and fires `updatedLevel`.</span> |
| <Link id="m-updateprogress" /><code>{"private void UpdateProgress()"}</code> | <span className="api-desc">Sets the gauge fill on clients. Server: rounds the progress to the nearest level and selects it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LevelSelector`:

<div className="api-used-in">

[`LevelSelectCaveTeleporter.levelSelector`](/mod/game-api/types/alta-world-generation/levelselectcaveteleporter#m-levelselector).

</div>
