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
| <Link id="m-ctor" /><code>{"NetworkContactProjectile()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-destructioneffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestructionEffect"}</code> | <span className="api-desc">Effect set in the inspector for destruction. Unused in this build.</span> |
| <Link id="m-enableonmessage" /><code>{"private GameObject enableOnMessage"}</code> | <span className="api-desc">Object set in the inspector. Unused in this build.</span> |
| <Link id="m-finalscaleondestory" /><code>{"private float finalScaleOnDestory"}</code> | <span className="api-desc">Scale setting for destruction. Unused in this build.</span> |
| <Link id="m-hascontacted" /><code>{"private bool hasContacted"}</code> | <span className="api-desc">Backing field for `HasContacted`.</span> |
| <Link id="m-maincollider" /><code>{"private Collider mainCollider"}</code> | <span className="api-desc">Backing field for `Collider`.</span> |
| <Link id="m-scalereductionduration" /><code>{"private float scaleReductionDuration"}</code> | <span className="api-desc">Duration setting for shrinking on destruction. Unused in this build.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collider" /><code>{"Collider Collider { get; }"}</code> | <span className="api-desc">The main collider set in the inspector.</span> |
| <Link id="m-entity" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> | <span className="api-desc">The projectile's network entity, set from outside.</span> |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> | <span className="api-desc">This component's transform.</span> |
| <Link id="m-hascontacted-2" /><code>{"protected override bool HasContacted { get; }"}</code> | <span className="api-desc">Returns `hasContacted`, which is never set to true here.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-haseffect" /><code>{"private bool HasEffect { get; set; }"}</code> | <span className="api-desc">Private flag, unused in this build.</span> |
| <Link id="m-wasenabled" /><code>{"private bool WasEnabled { get; set; }"}</code> | <span className="api-desc">Private flag, unused in this build.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffects" /><code>{"void InitializeEffects()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">Registers with the impact generators, then logs that the class is obsolete.</span> |
| <Link id="m-oncontact" /><code>{"protected override void OnContact()"}</code> | <span className="api-desc">Empty in this build.</span> |
