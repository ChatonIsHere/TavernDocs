---
title: "SetKinematicModifier"
description: "Forest fill entity modifier that sets a spawned entity's rigidbody to kinematic or not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetKinematicModifier

A **class** in `Root.Township`, the global namespace.

Forest fill entity modifier that sets a spawned entity's rigidbody to kinematic or not.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityModifiers`](/mod/game-api/types/global-m-o/networkentitymodifiers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetKinematicModifier()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskinematic" /><code>{"private bool isKinematic"}</code> | <span className="api-desc">Value to set. Default true.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/mod/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" point, ref float weight)"}</code> | <span className="api-desc">Sets `isKinematic` on the entity's `Rigidbody`, if it has one.</span> |
