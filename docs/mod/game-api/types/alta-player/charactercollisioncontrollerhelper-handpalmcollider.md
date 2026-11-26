---
title: "CharacterCollisionControllerHelper.HandPalmCollider"
description: "A box collider set up on a hand's palm bone by CharacterCollisionControllerHelper."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionControllerHelper.HandPalmCollider

A **class** in `Root.Township`, `Alta.Character`.

A box collider set up on a hand's palm bone by `CharacterCollisionControllerHelper`. The box centre is flipped for the right hand.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`CharacterCollisionControllerHelper`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper)
- **Inherits or implements** [`CharacterCollisionControllerHelper.BoneBoxCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper-boneboxcollider)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandPalmCollider()"}</code> | Creates a `CharacterCollisionControllerHelper.HandPalmCollider` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | Backing field for `HandIndex`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handindex-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; }"}</code> | Which hand this palm belongs to; the right hand gets its box centre mirrored. |

## Used in

Members of other types that take, return or hold a `HandPalmCollider`:

[`CharacterCollisionControllerHelper.CreateHandPalmCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper#m-createhandpalmcollider), [`CharacterCollisionControllerHelper.handPalmColliders`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper#m-handpalmcolliders).
