---
title: "ContactProjectile"
description: "Base for an old projectile that reacts when its impactor hits something."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ContactProjectile

An **abstract class** in `Root.Township`, `Alta.Impact`.

Base for an old projectile that reacts when its impactor hits something. It records the hit direction and calls `OnContact` when the impactor resets. Only `NetworkContactProjectile` derives from it, and that is obsolete.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IToolHitDependant`](/mod/game-api/types/alta-items/itoolhitdependant), [`IImpactorResetEffect`](/mod/game-api/types/alta-items/iimpactorreseteffect)
- **Derived types** [`NetworkContactProjectile`](/mod/game-api/types/alta-items/networkcontactprojectile)
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected ContactProjectile()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; set; }"}</code> | The projectile's rigidbody, stopped in `ResetEffect`. Must be set before a hit resets. |
| <Link id="m-hascontacted" /><code>{"protected abstract bool HasContacted { get; }"}</code> | Whether the projectile has already hit something. Set by the subclass. |
| <Link id="m-lasthitrotation" /><code>{"protected Quaternion LastHitRotation { get; private set; }"}</code> | Rotation facing back along the last hit direction or collision normal, for placing a hit effect. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-oncollided" /><code>{"void OnCollided(Collision collision, bool isHitting, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Records the first contact's normal as `LastHitRotation`. |
| <Link id="m-onhit" /><code>{"void OnHit("}<Link to="/mod/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> | Records the reverse of the tool hit's direction as `LastHitRotation`, or straight up if the hit had no direction. |
| <Link id="m-reseteffect" /><code>{"void ResetEffect()"}</code> | Called by the impactor on reset: stops the rigidbody and calls `OnContact`. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Registers this projectile with every `ImpactGenerator` in its children so their reset calls `ResetEffect`. |
| <Link id="m-oncontact" /><code>{"protected abstract void OnContact()"}</code> | Subclass hook run when the impactor resets after a hit. |
