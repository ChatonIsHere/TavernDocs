---
title: "MovingLandmark"
description: "A landmark on something that moves."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# MovingLandmark

A **class** in `Root.Township`, `Alta.Map`.

A landmark on something that moves. Besides registering it re-syncs its position to players every second. Server side.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`Landmark`](/mod/game-api/types/alta-world/landmark)
- **Derived types** [`PlayerLandmark`](/mod/game-api/types/alta-world/playerlandmark)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"MovingLandmark()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-entry" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" entry"}</code> | <span className="api-desc">The `Timeline` entry for the once-a-second sync.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"protected override void Destroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Deregisters the landmark (unless it is kept after unload and this is an unload) and, on the server, stops the sync timer.</span> |
| <Link id="m-register" /><code>{"protected override void Register()"}</code> | <span className="api-desc">Registers with the `LandmarkManager` and starts a repeating `ForceSync` every second.</span> |
