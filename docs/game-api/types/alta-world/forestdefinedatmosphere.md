---
title: "ForestDefinedAtmosphere"
description: "Blends from the overworld atmosphere to a forest's own atmosphere as the local player goes deeper inside the forest's outline."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ForestDefinedAtmosphere

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Blends from the overworld atmosphere to a forest's own atmosphere as the local player goes deeper inside the forest's outline. Updates on clients.

- **Listed in** [World, chunks and saving](/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Time and environment](/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestDefinedAtmosphere()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | The forest generator whose outline defines the area. |
| <Link id="m-forestset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" forestSet"}</code> | Atmosphere used deep in the forest. |
| <Link id="m-fulldepth" /><code>{"private float fullDepth"}</code> | Distance in from the forest border at which the forest set is fully applied. |
| <Link id="m-generation" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" generation"}</code> | The forest's generated layout, fetched once it exists. |
| <Link id="m-laststrength" /><code>{"private float lastStrength"}</code> | Last blend amount, 0 outside the forest to 1 at full depth. |
| <Link id="m-overworldset" /><code>{"private "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" overworldSet"}</code> | Atmosphere used outside the forest. |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | Registered per-frame update. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Client: registers the per-frame update. Also hooks the atmosphere manager's set resolving. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"private void Resolve(ref "}<Link to="/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set)"}</code> | Swaps the overworld set for the forest set while the player is inside the forest. |
| <Link id="m-updateatmosphere" /><code>{"private void UpdateAtmosphere()"}</code> | Per frame: blends ambient, fog density and ambience audio by how far inside the forest the player's head is. |

</details>
