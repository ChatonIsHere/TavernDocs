---
title: "PlayerUnlock.OrbProperties"
description: "One orb of a PlayerUnlock: the prefab, its weight and where it sits on the player's body."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerUnlock.OrbProperties

A **class** in `Root.Township`, no namespace.

One orb of a `PlayerUnlock`: the prefab, its weight and where it sits on the player's body. Read by `SpiritState` to place belt orbs.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Nested in** [`PlayerUnlock`](/game-api/types/global-p/playerunlock)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"OrbProperties()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" bone"}</code> | Backing field for `Bone`. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Backing field for `Position`. |
| <Link id="m-prefab" /><code>{"private GameObject prefab"}</code> | Backing field for `Prefab`. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Backing field for `Scale`. |
| <Link id="m-weight" /><code>{"private float weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bone-2" /><code><Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" Bone { get; }"}</code> | Body bone the orb attaches to. |
| <Link id="m-position-2" /><code>{"Vector3 Position { get; }"}</code> | Offset from that bone. |
| <Link id="m-prefab-2" /><code>{"GameObject Prefab { get; }"}</code> | Prefab spawned for the orb. |
| <Link id="m-scale-2" /><code>{"float Scale { get; }"}</code> | Scale of the orb (default 0.5). |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | Weight this orb adds; probably fed into the player's overridden weight while in spirit form. |

## Used in

Members of other types that take, return or hold a `OrbProperties`:

[`PlayerUnlock.orbs`](/game-api/types/global-p/playerunlock#m-orbs), [`PlayerUnlock.Orbs`](/game-api/types/global-p/playerunlock#m-orbs-2).
