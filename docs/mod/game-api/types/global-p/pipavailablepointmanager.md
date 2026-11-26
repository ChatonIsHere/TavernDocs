---
title: "PipAvailablePointManager"
description: "Shows a player's free progression points as a ring of pips that light up or dim."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PipAvailablePointManager

A **class** in `Root.Township`, the global namespace.

Shows a player's free progression points as a ring of pips that light up or dim. Client-side; it makes no pips on a headless server.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`AvailablePointVisualizerManager`](/mod/game-api/types/global-a-b/availablepointvisualizermanager)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PipAvailablePointManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglegap" /><code>{"private float angleGap"}</code> | <span className="api-desc">Degrees between pips.</span> |
| <Link id="m-instantiated" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/availablepointbar">{"AvailablePointBar"}</Link>{"[] instantiated"}</code> | <span className="api-desc">The spawned pips.</span> |
| <Link id="m-pipprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/availablepointbar">{"AvailablePointBar"}</Link>{" pipPrefab"}</code> | <span className="api-desc">Prefab for one pip.</span> |
| <Link id="m-startpipangle" /><code>{"private float startPipAngle"}</code> | <span className="api-desc">Angle of the first pip.</span> |
| <Link id="m-temporarypips" /><code>{"private Queue<int> temporaryPips"}</code> | <span className="api-desc">Indexes of pips lit by `OpenTemporary`.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-cleantemporary" /><code>{"override void CleanTemporary()"}</code> | <span className="api-desc">Dims every pip that `OpenTemporary` lit.</span> |
| <Link id="m-opentemporary" /><code>{"override void OpenTemporary(int index)"}</code> | <span className="api-desc">Lights a pip and remembers it so `CleanTemporary` can dim it.</span> |
| <Link id="m-openvisual" /><code>{"override void OpenVisual(int index)"}</code> | <span className="api-desc">Lights the pip at the given index.</span> |
| <Link id="m-updateavailablepointsvisual" /><code>{"override void UpdateAvailablePointsVisual(int freePoints)"}</code> | <span className="api-desc">Lights the first pips up to the free point count and dims the rest.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ensuresetup" /><code>{"private void EnsureSetup()"}</code> | <span className="api-desc">Spawns one pip per possible free point the first time it's needed, if not headless.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws where the pips will go in the editor.</span> |
| <Link id="m-placepips" /><code>{"private void PlacePips(Action<int, Quaternion> positionMethod)"}</code> | <span className="api-desc">Works out each pip's rotation around the forward axis and passes it to the callback.</span> |

</details>
