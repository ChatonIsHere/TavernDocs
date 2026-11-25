---
title: "ContactProjectile"
description: "abstract class ContactProjectile in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ContactProjectile

An **abstract class** in `Root.Township`, `Alta.Impact`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IToolHitDependant`](/game-api/types/alta-items/itoolhitdependant), [`IImpactorResetEffect`](/game-api/types/alta-items/iimpactorreseteffect)
- **Derived types** [`NetworkContactProjectile`](/game-api/types/alta-items/networkcontactprojectile)
- **Documented in** [Impacts and hit detection](/game-api/items/impacts)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"protected ContactProjectile()"}</code> |

## Properties

| Member |
| --- |
| <Link id="m-rigidbody" /><code>{"Rigidbody Rigidbody { get; set; }"}</code> |
| <Link id="m-hascontacted" /><code>{"protected abstract bool HasContacted { get; }"}</code> |
| <Link id="m-lasthitrotation" /><code>{"protected Quaternion LastHitRotation { get; private set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-oncollided" /><code>{"void OnCollided(Collision collision, bool isHitting, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |
| <Link id="m-onhit" /><code>{"void OnHit("}<Link to="/game-api/types/alta-items/impacthitwithtool">{"ImpactHitWithTool"}</Link>{" hit, "}<Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool)"}</code> |
| <Link id="m-reseteffect" /><code>{"void ResetEffect()"}</code> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |
| <Link id="m-oncontact" /><code>{"protected abstract void OnContact()"}</code> |
