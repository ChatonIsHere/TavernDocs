---
title: "NetworkContactProjectile"
description: "class NetworkContactProjectile in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkContactProjectile

A **class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`ContactProjectile`](/game-api/types/alta-items/contactprojectile), [`INetworkProjectile`](/game-api/types/alta-items/inetworkprojectile)
- **Attributes** `RequireComponent`
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkContactProjectile()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-destructioneffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" DestructionEffect"}</code> |  |
| <Link id="m-enableonmessage" /><code>{"private GameObject enableOnMessage"}</code> |  |
| <Link id="m-finalscaleondestory" /><code>{"private float finalScaleOnDestory"}</code> |  |
| <Link id="m-hascontacted" /><code>{"private bool hasContacted"}</code> |  |
| <Link id="m-maincollider" /><code>{"private Collider mainCollider"}</code> |  |
| <Link id="m-scalereductionduration" /><code>{"private float scaleReductionDuration"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-collider" /><code>{"Collider Collider { get; }"}</code> |  |
| <Link id="m-entity" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; set; }"}</code> |  |
| <Link id="m-transform" /><code>{"Transform Transform { get; }"}</code> |  |
| <Link id="m-hascontacted-2" /><code>{"protected override bool HasContacted { get; }"}</code> |  |
| <Link id="m-haseffect" /><code>{"private bool HasEffect { get; set; }"}</code> |  |
| <Link id="m-wasenabled" /><code>{"private bool WasEnabled { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffects" /><code>{"void InitializeEffects()"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-oncontact" /><code>{"protected override void OnContact()"}</code> |  |
