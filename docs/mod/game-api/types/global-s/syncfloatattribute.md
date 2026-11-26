---
title: "SyncFloatAttribute"
description: "Obsolete SyncAttribute that marks a float field for syncing, either full precision or packed into a range by bit count or precision."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SyncFloatAttribute

A **class** in `Root.Township`, the global namespace.

Obsolete `SyncAttribute` that marks a float field for syncing, either full precision or packed into a range by bit count or precision.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`SyncAttribute`](/mod/game-api/types/global-s/syncattribute)
- **Attributes** `Obsolete`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SyncFloatAttribute()"}</code> | Creates a `SyncFloatAttribute` from `minimum`, `maximum` and `precision`. |
| <Link id="m-ctor-2" /><code>{"SyncFloatAttribute(float minimum, float maximum, int bits)"}</code> | Creates a `SyncFloatAttribute` from `minimum`, `maximum` and `precision`. |
| <Link id="m-ctor-3" /><code>{"SyncFloatAttribute(float minimum, float maximum, float precision)"}</code> | Creates a `SyncFloatAttribute` from `minimum`, `maximum` and `precision`. |
