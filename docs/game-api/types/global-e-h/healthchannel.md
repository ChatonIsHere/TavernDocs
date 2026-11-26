---
title: "HealthChannel"
description: "Impact asset that sets how much damage a channel deals to health, or whether it kills in one hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthChannel

A **class** in `Root.Township`, no namespace.

Impact asset that sets how much damage a channel deals to health, or whether it kills in one hit.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`HealthChannel.Create`](/game-api/types/global-e-h/healthchannel-create)
- **Nested types** [`Create`](/game-api/types/global-e-h/healthchannel-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthChannel()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isonehit" /><code>{"private bool isOneHit"}</code> | Backing field for `IsOneHit`. |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | Backing field for `Multiplier`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isonehit-2" /><code>{"bool IsOneHit { get; }"}</code> | True if a hit on this channel destroys the target in one go. |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; }"}</code> | Damage multiplier for this channel. |
