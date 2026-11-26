---
title: "PlayerUnlock.OrbProperties"
description: "One orb of a PlayerUnlock: the prefab, its weight and where it sits on the player's body."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlock.OrbProperties

A **class** in `Root.Township`, the global namespace.

One orb of a `PlayerUnlock`: the prefab, its weight and where it sits on the player's body. Read by `SpiritState` to place belt orbs.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Nested in** [`PlayerUnlock`](/mod/game-api/types/global-p/playerunlock)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"OrbProperties()"}</code> | <span className="api-desc">Creates a `PlayerUnlock.OrbProperties` with default values.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | <span className="api-desc">Backing field for `Bone`.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Backing field for `Position`.</span> |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | <span className="api-desc">Backing field for `Prefab`.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Backing field for `Scale`.</span> |
| <Link id="m-weight" /><code>{"private float weight"}</code> | <span className="api-desc">Backing field for `Weight`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bone-2" /><code><Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" Bone { get; }"}</code> | <span className="api-desc">Body bone the orb attaches to.</span> |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | <span className="api-desc">Offset from that bone.</span> |
| <Link id="m-prefab-2" /><code>{"GameObject Prefab { get; }"}</code> | <span className="api-desc">Prefab spawned for the orb.</span> |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> | <span className="api-desc">Scale of the orb (default 0.5).</span> |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | <span className="api-desc">Weight this orb adds; probably fed into the player's overridden weight while in spirit form.</span> |

## Used in

Members of other types that take, return or hold a `OrbProperties`:

<div className="api-used-in">

[`PlayerUnlock.orbs`](/mod/game-api/types/global-p/playerunlock#m-orbs), [`PlayerUnlock.Orbs`](/mod/game-api/types/global-p/playerunlock#m-orbs-2).

</div>
