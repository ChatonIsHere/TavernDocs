---
title: "TargetBasedSkill.ClientHitInput"
description: "A tool hit as the client saw it (position, direction, damage, impact type), serialized so a TargetBasedSkill can report it to the server."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetBasedSkill.ClientHitInput

A **protected class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

A tool hit as the client saw it (position, direction, damage, impact type), serialized so a `TargetBasedSkill` can report it to the server.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TargetBasedSkill`](/game-api/types/global-t-x/targetbasedskill)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientHitInput()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> | Chunk the position is relative to when serialized. |
| <Link id="m-damage" /><code>{"private float damage"}</code> | Backing field for `Damage`. |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> | Backing field for `Direction`. |
| <Link id="m-impacttypeindex" /><code>{"private int impactTypeIndex"}</code> | Backing field for `ImpactType`, as an int. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |
| <Link id="m-up" /><code>{"private Vector3 up"}</code> | Backing field for `Up`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-damage-2" /><code>{"float Damage { get; }"}</code> | Hit damage: the hit's base health damage times its effectiveness. |
| <Link id="m-direction-2" /><code>{"Vector3 Direction { get; }"}</code> | Direction of the hit. |
| <Link id="m-impacttype" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" { get; }"}</code> | The hit's impact type. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | Hit position. |
| <Link id="m-up-2" /><code>{"Vector3 Up { get; }"}</code> | Up direction for the hit. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Reads or writes the chunk and position, both directions, damage (0 to 63) and impact type. |
| <Link id="m-setup" /><code>{"void Setup(Vector3 position, Vector3 direction, Vector3 up, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> | Fills in the values from a tool hit, using the chunk the local player is in. |

## Used in

Members of other types that take, return or hold a `ClientHitInput`:

[`TargetBasedSkill.clientHitInput`](/game-api/types/global-t-x/targetbasedskill#m-clienthitinput).
