---
title: "DockedDissolver"
description: "Client effect for a PickupDock: when an item is about to dock, a visual copy of it plays a dissolve and is released."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockedDissolver

A **class** in `Root.Township`, `Alta.Caves`.

Client effect for a `PickupDock`: when an item is about to dock, a visual copy of it plays a dissolve and is released. Removes itself on a headless server.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockedDissolver()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dematerializeduration" /><code>{"private float dematerializeDuration"}</code> | <span className="api-desc">Length of the dissolve in seconds.</span> |
| <Link id="m-dissolvetexture" /><code>{"private Texture dissolveTexture"}</code> | <span className="api-desc">Noise texture used by the dissolve.</span> |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | <span className="api-desc">Dissolve shader applied to the visual double.</span> |
| <Link id="m-targetdock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" targetDock"}</code> | <span className="api-desc">The dock whose incoming items dissolve.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dissolveitem" /><code>{"private void DissolveItem("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Spawns a visual double of the docking pickup and dematerializes it with the dissolve shader.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Destroys this component on a headless server; otherwise hooks the dock's `PreItemDocked` event.</span> |

</details>
