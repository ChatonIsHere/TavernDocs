---
title: "HealthChannel"
description: "Impact asset that sets how much damage a channel deals to health, or whether it kills in one hit."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HealthChannel

A **class** in `Root.Township`, the global namespace.

Impact asset that sets how much damage a channel deals to health, or whether it kills in one hit.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`HealthChannel.Create`](/mod/game-api/types/global-e-h/healthchannel-create)
- **Nested types** [`Create`](/mod/game-api/types/global-e-h/healthchannel-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HealthChannel()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-isonehit" /><code>{"private bool isOneHit"}</code> | <span className="api-desc">Backing field for `IsOneHit`.</span> |
| <Link id="m-multiplier" /><code>{"private float multiplier"}</code> | <span className="api-desc">Backing field for `Multiplier`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isonehit-2" /><code>{"bool IsOneHit { get; }"}</code> | <span className="api-desc">True if a hit on this channel destroys the target in one go.</span> |
| <Link id="m-multiplier-2" /><code>{"float Multiplier { get; }"}</code> | <span className="api-desc">Damage multiplier for this channel.</span> |
