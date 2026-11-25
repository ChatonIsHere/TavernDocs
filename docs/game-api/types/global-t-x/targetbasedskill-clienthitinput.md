---
title: "TargetBasedSkill.ClientHitInput"
description: "class TargetBasedSkill.ClientHitInput in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TargetBasedSkill.ClientHitInput

A **protected class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Nested in** [`TargetBasedSkill`](/game-api/types/global-t-x/targetbasedskill)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ClientHitInput()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-chunk" /><code>{"private "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk"}</code> |
| <Link id="m-damage" /><code>{"private float damage"}</code> |
| <Link id="m-direction" /><code>{"private Vector3 direction"}</code> |
| <Link id="m-impacttypeindex" /><code>{"private int impactTypeIndex"}</code> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |
| <Link id="m-up" /><code>{"private Vector3 up"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-damage-2" /><code>{"float Damage { get; }"}</code> |
| <Link id="m-direction-2" /><code>{"Vector3 Direction { get; }"}</code> |
| <Link id="m-impacttype" /><code><Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" "}<Link to="/game-api/types/alta-items/impacttype">{"ImpactType"}</Link>{" { get; }"}</code> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> |
| <Link id="m-up-2" /><code>{"Vector3 Up { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-serialize" /><code>{"void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-setup" /><code>{"void Setup(Vector3 position, Vector3 direction, Vector3 up, "}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit)"}</code> |

## Used in

Members of other types that take, return or hold a `ClientHitInput`:

[`TargetBasedSkill.clientHitInput`](/game-api/types/global-t-x/targetbasedskill#m-clienthitinput).
