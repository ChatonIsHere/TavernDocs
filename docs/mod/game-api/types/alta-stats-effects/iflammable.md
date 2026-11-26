---
title: "IFlammable"
description: "Something a spark or fire lighter can set alight, such as a Fire or a Fuse."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# IFlammable

An **interface** in `Root.Township`, `Alta.Heat`.

Something a spark or fire lighter can set alight, such as a `Fire` or a `Fuse`. Found with `GetComponent` on what was hit.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Derived types** [`Fire`](/mod/game-api/types/alta-stats-effects/fire), [`Fuse`](/mod/game-api/types/global-e-h/fuse)

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isignoringsparks" /><code>{"bool IsIgnoringSparks { get; }"}</code> | <span className="api-desc">When true, sparks from `Fire.SimulateSparks` skip this object.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-trylight" /><code>{"void TryLight()"}</code> | <span className="api-desc">Tries to light the object.</span> |
