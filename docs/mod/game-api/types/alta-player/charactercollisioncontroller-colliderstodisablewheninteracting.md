---
title: "CharacterCollisionController.CollidersToDisableWhenInteracting"
description: "Inspector pairing of a hand Controller with the body colliders to turn off while that hand holds a pickup, so the held item doesn't hit the player's own body."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterCollisionController.CollidersToDisableWhenInteracting

A **class** in `Root.Township`, `Alta.Character`.

Inspector pairing of a hand `Controller` with the body colliders to turn off while that hand holds a pickup, so the held item doesn't hit the player's own body.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`CharacterCollisionController`](/mod/game-api/types/alta-player/charactercollisioncontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CollidersToDisableWhenInteracting()"}</code> | <span className="api-desc">Creates a `CharacterCollisionController.CollidersToDisableWhenInteracting` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstodisable" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" collidersToDisable"}</code> | <span className="api-desc">Backing field for `CollidersToDisable`.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller"}</code> | <span className="api-desc">Backing field for `Controller`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-colliderstodisable-2" /><code><Link to="/mod/game-api/types/global-c-d/collidergroup">{"ColliderGroup"}</Link>{" CollidersToDisable { get; set; }"}</code> | <span className="api-desc">The collider group ignored while that hand holds a pickup, then re-enabled after a short delay when it lets go.</span> |
| <Link id="m-controller-2" /><code><Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" { get; }"}</code> | <span className="api-desc">The hand controller whose `Interactor` is watched for interactions starting and ending.</span> |

## Used in

Members of other types that take, return or hold a `CollidersToDisableWhenInteracting`:

<div className="api-used-in">

[`CharacterCollisionController.collidersToDisableWhenInteracting`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-colliderstodisablewheninteracting), [`CharacterCollisionController.CollidersToDisableWhenInteractingList`](/mod/game-api/types/alta-player/charactercollisioncontroller#m-colliderstodisablewheninteractinglist).

</div>
