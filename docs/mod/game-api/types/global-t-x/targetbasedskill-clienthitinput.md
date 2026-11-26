---
title: "TargetBasedSkill.ClientHitInput"
description: "A tool hit as the client saw it (position, direction, damage, impact type), serialized so a TargetBasedSkill can report it to the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetBasedSkill.ClientHitInput

A **protected class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A tool hit as the client saw it (position, direction, damage, impact type), serialized so a `TargetBasedSkill` can report it to the server.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Nested in** [`TargetBasedSkill`](/mod/game-api/types/global-t-x/targetbasedskill)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientHitInput()"}</code> | <span className="api-desc">Creates a `TargetBasedSkill.ClientHitInput` with default values.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | <span className="api-desc">Chunk the position is relative to when serialized.</span> |
| <Link id="m-damage" /><code>{"private float damage"}</code> | <span className="api-desc">Backing field for `Damage`.</span> |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | <span className="api-desc">Backing field for `Direction`.</span> |
| <Link id="m-impacttypeindex" /><code>{"private int impactTypeIndex"}</code> | <span className="api-desc">Backing field for `ImpactType`, as an int.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |
| <Link id="m-up" /><code>{"private Vector3 up"}</code> | <span className="api-desc">Backing field for `Up`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-damage-2" /><code>{"float Damage { get; }"}</code> | <span className="api-desc">Hit damage: the hit's base health damage times its effectiveness.</span> |
| <Link id="m-direction-2" /><code>{"Vector3 Direction { get; }"}</code> | <span className="api-desc">Direction of the hit.</span> |
| <Link id="m-impacttype" /><code><Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" "}<Link to="/mod/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" { get; }"}</code> | <span className="api-desc">The hit's impact type.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Hit position.</span> |
| <Link id="m-up-2" /><code>{"Vector3 Up { get; }"}</code> | <span className="api-desc">Up direction for the hit.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Reads or writes the chunk and position, both directions, damage (0 to 63) and impact type.</span> |
| <Link id="m-setup" /><code>{"void Setup(Vector3 position, Vector3 direction, Vector3 up, "}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | <span className="api-desc">Fills in the values from a tool hit, using the chunk the local player is in.</span> |

## Used in

Members of other types that take, return or hold a `ClientHitInput`:

<div className="api-used-in">

[`TargetBasedSkill.clientHitInput`](/mod/game-api/types/global-t-x/targetbasedskill#m-clienthitinput).

</div>
