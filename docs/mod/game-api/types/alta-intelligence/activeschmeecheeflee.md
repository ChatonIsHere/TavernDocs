---
title: "ActiveSchmeecheeFlee"
description: "Schmeechee action that runs away from its target until far enough, cancelling if it gets stuck."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveSchmeecheeFlee

A **class** in `Root.Township`, `Alta.Intelligence`.

Schmeechee action that runs away from its target until far enough, cancelling if it gets stuck.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Schmeechee, SchmeecheeFleeSettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSchmeecheeFlee()"}</code> | <span className="api-desc">Creates an `ActiveSchmeecheeFlee` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lastcache" /><code>{"private float lastCache"}</code> | <span className="api-desc">Time of the last stuck check.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Position at the last stuck check.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">While grounded, steers away from the target and pushes forward; finishes when far away, cancels if it barely moved in a second.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Records the start position and time and resets run speed.</span> |
