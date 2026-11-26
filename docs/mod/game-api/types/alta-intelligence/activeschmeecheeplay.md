---
title: "ActiveSchmeecheePlay"
description: "Schmeechee action where it runs around at random, slowing as its energy runs down, then finishes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActiveSchmeecheePlay

A **class** in `Root.Township`, `Alta.Intelligence`.

Schmeechee action where it runs around at random, slowing as its energy runs down, then finishes.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`BasicActiveAction<Schmeechee, SchmeecheePlaySettings>`](/mod/game-api/types/alta-intelligence/basicactiveaction-tagent-tsettings)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActiveSchmeecheePlay()"}</code> | <span className="api-desc">Creates an `ActiveSchmeecheePlay` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-energy" /><code>{"private float energy"}</code> | <span className="api-desc">Starts at 1 and drains slowly; lower energy means slower running.</span> |
| <Link id="m-lastcache" /><code>{"private float lastCache"}</code> | <span className="api-desc">Time of the last stuck check.</span> |
| <Link id="m-lastposition" /><code>{"private Vector3 lastPosition"}</code> | <span className="api-desc">Position at the last stuck check.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-update" /><code>{"override void Update(bool hasTarget)"}</code> | <span className="api-desc">While grounded, steers randomly and pushes forward; cancels if stuck, finishes when energy runs out.</span> |
| <Link id="m-onstart" /><code>{"protected override void OnStart()"}</code> | <span className="api-desc">Records the start position and time, sets full energy and resets run speed.</span> |
