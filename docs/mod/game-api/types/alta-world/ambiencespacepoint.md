---
title: "AmbienceSpacePoint"
description: "Client: a point in a SpaceDefinedAtmosphere area that blends between two atmosphere sets as the player moves through it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbienceSpacePoint

A **class** in `Root.Township`, `Alta.Environmental.Atmosphere`.

Client: a point in a `SpaceDefinedAtmosphere` area that blends between two atmosphere sets as the player moves through it.

- **Listed in** [World, chunks and saving](/mod/game-api/types/alta-world)
- **Inherits or implements** [`SpacePoint`](/mod/game-api/types/global-s/spacepoint)
- **Derived types** [`SpaceDefinedAtmosphere`](/mod/game-api/types/alta-world/spacedefinedatmosphere)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmbienceSpacePoint()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-from" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" from"}</code> | <span className="api-desc">Backing field for `From`.</span> |
| <Link id="m-to" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" to"}</code> | <span className="api-desc">Backing field for `To`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-from-2" /><code><Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" From { get; }"}</code> | <span className="api-desc">Atmosphere set used at the start of the blend (progress below 0.5).</span> |
| <Link id="m-to-2" /><code><Link to="/mod/game-api/types/alta-world/atmosphereset">{"AtmosphereSet"}</Link>{" To { get; }"}</code> | <span className="api-desc">Atmosphere set used at the end of the blend (progress above 0.5).</span> |

## Used in

Members of other types that take, return or hold a `AmbienceSpacePoint`:

<div className="api-used-in">

[`SpaceDefinedAtmosphere.ambientPoints`](/mod/game-api/types/alta-world/spacedefinedatmosphere#m-ambientpoints), [`SpaceDefinedAtmosphere.Points`](/mod/game-api/types/alta-world/spacedefinedatmosphere#m-points), [`SpaceDefinedAtmosphere.SendNewCloserPoint`](/mod/game-api/types/alta-world/spacedefinedatmosphere#m-sendnewcloserpoint).

</div>
