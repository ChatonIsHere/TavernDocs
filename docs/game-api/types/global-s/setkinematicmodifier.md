---
title: "SetKinematicModifier"
description: "Forest fill entity modifier that sets a spawned entity's rigidbody to kinematic or not."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SetKinematicModifier

A **class** in `Root.Township`, no namespace.

Forest fill entity modifier that sets a spawned entity's rigidbody to kinematic or not.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityModifiers`](/game-api/types/global-m-o/networkentitymodifiers)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SetKinematicModifier()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-iskinematic" /><code>{"private bool isKinematic"}</code> | Value to set. Default true. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-filter" /><code>{"override void Filter("}<Link to="/game-api/types/alta-world-generation/forestfillcore-setup">{"ForestFillCore.Setup"}</Link>{" setup, ref "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" point, ref float weight)"}</code> | Sets `isKinematic` on the entity's `Rigidbody`, if it has one. |
