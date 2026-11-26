---
title: "NetworkContactProjectile"
description: "Obsolete networked contact projectile."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkContactProjectile

A **class** in `Root.Township`, `Alta.Impact`.

Obsolete networked contact projectile. It logs an error on `Awake` telling you to use the new projectile, and its contact and effect methods are empty.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`ContactProjectile`](/mod/game-api/types/alta-items/contactprojectile), [`INetworkProjectile`](/mod/game-api/types/alta-items/inetworkprojectile)
- **Attributes** `RequireComponent`
- **Documented in** [Impacts and hit detection](/mod/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkContactProjectile()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destructioneffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestructionEffect"}</code> | Effect set in the inspector for destruction. Unused in this build. |
| <Link id="m-enableonmessage" /><code>{"private GameObject enableOnMessage"}</code> | Object set in the inspector. Unused in this build. |
| <Link id="m-finalscaleondestory" /><code>{"private float finalScaleOnDestory"}</code> | Scale setting for destruction. Unused in this build. |
| <Link id="m-hascontacted" /><code>{"private bool hasContacted"}</code> | Backing field for `HasContacted`. |
| <Link id="m-maincollider" /><code>{"private Collider mainCollider"}</code> | Backing field for `Collider`. |
| <Link id="m-scalereductionduration" /><code>{"private float scaleReductionDuration"}</code> | Duration setting for shrinking on destruction. Unused in this build. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collider" /><code>{"Collider Collider { get; }"}</code> | The main collider set in the inspector. |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | The projectile's network entity, set from outside. |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | This component's transform. |
| <Link id="m-hascontacted-2" /><code>{"protected override bool HasContacted { get; }"}</code> | Returns `hasContacted`, which is never set to true here. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haseffect" /><code>{"private bool HasEffect { get; set; }"}</code> | Private flag, unused in this build. |
| <Link id="m-wasenabled" /><code>{"private bool WasEnabled { get; set; }"}</code> | Private flag, unused in this build. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffects" /><code>{"void InitializeEffects()"}</code> | Empty in this build. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Registers with the impact generators, then logs that the class is obsolete. |
| <Link id="m-oncontact" /><code>{"protected override void OnContact()"}</code> | Empty in this build. |
