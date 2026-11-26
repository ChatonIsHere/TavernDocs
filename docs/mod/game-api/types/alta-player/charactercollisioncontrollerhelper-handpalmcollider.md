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
| <Link id="m-ctor" /><code>{"HandPalmCollider()"}</code> | <span className="api-desc">Creates a `CharacterCollisionControllerHelper.HandPalmCollider` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handindex" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" handIndex"}</code> | <span className="api-desc">Backing field for `HandIndex`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-handindex-2" /><code><Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" { get; }"}</code> | <span className="api-desc">Which hand this palm belongs to; the right hand gets its box centre mirrored.</span> |

## Used in

Members of other types that take, return or hold a `HandPalmCollider`:

<div className="api-used-in">

[`CharacterCollisionControllerHelper.CreateHandPalmCollider`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper#m-createhandpalmcollider), [`CharacterCollisionControllerHelper.handPalmColliders`](/mod/game-api/types/alta-player/charactercollisioncontrollerhelper#m-handpalmcolliders).

</div>
