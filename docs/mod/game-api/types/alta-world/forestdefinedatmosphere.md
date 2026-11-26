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

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour)
- **Documented in** [Time and environment](/mod/game-api/world/time-and-environment)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ForestDefinedAtmosphere()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-forest" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgenerator">{"ForestGenerator"}</Link>{" forest"}</code> | <span className="api-desc">The forest generator whose outline defines the area.</span> |
| <Link id="m-forestset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" forestSet"}</code> | <span className="api-desc">Atmosphere used deep in the forest.</span> |
| <Link id="m-fulldepth" /><code>{"private float fullDepth"}</code> | <span className="api-desc">Distance in from the forest border at which the forest set is fully applied.</span> |
| <Link id="m-generation" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/forestgeneration">{"ForestGeneration"}</Link>{" generation"}</code> | <span className="api-desc">The forest's generated layout, fetched once it exists.</span> |
| <Link id="m-laststrength" /><code>{"private float lastStrength"}</code> | <span className="api-desc">Last blend amount, 0 outside the forest to 1 at full depth.</span> |
| <Link id="m-overworldset" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" overworldSet"}</code> | <span className="api-desc">Atmosphere used outside the forest.</span> |
| <Link id="m-update" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> | <span className="api-desc">Registered per-frame update.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Client: registers the per-frame update. Also hooks the atmosphere manager's set resolving.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-resolve" /><code>{"private void Resolve(ref "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" set)"}</code> | <span className="api-desc">Swaps the overworld set for the forest set while the player is inside the forest.</span> |
| <Link id="m-updateatmosphere" /><code>{"private void UpdateAtmosphere()"}</code> | <span className="api-desc">Per frame: blends ambient, fog density and ambience audio by how far inside the forest the player's head is.</span> |

</details>
