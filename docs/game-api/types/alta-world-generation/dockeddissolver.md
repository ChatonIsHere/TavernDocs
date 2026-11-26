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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DockedDissolver()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dematerializeduration" /><code>{"private float dematerializeDuration"}</code> | Length of the dissolve in seconds. |
| <Link id="m-dissolvetexture" /><code>{"private Texture dissolveTexture"}</code> | Noise texture used by the dissolve. |
| <Link id="m-shader" /><code>{"private Shader shader"}</code> | Dissolve shader applied to the visual double. |
| <Link id="m-targetdock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" targetDock"}</code> | The dock whose incoming items dissolve. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dissolveitem" /><code>{"private void DissolveItem("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Spawns a visual double of the docking pickup and dematerializes it with the dissolve shader. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Destroys this component on a headless server; otherwise hooks the dock's `PreItemDocked` event. |

</details>
