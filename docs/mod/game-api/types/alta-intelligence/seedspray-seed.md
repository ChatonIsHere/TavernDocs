---
title: "SeedSpray.Seed"
description: "One projectile in a SeedSpray shot: the pooled object, its impact tool, and whether it's still active."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SeedSpray.Seed

A **private class** in `Root.Township`, `Alta.Intelligence`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One projectile in a `SeedSpray` shot: the pooled object, its impact tool, and whether it's still active.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Nested in** [`SeedSpray`](/mod/game-api/types/alta-intelligence/seedspray)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Seed()"}</code> | <span className="api-desc">Creates a `SeedSpray.Seed` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isalive" /><code>{"bool isAlive"}</code> | <span className="api-desc">True from when the seed is fired until it's destroyed by the cutoff curve or cleanup.</span> |
| <Link id="m-pooledobject" /><code><Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject"}</code> | <span className="api-desc">The pooled seed object that was fired.</span> |
| <Link id="m-tool" /><code><Link to="/mod/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool"}</code> | <span className="api-desc">The seed's impact tool, with its `Entity` set to the spraying entity.</span> |

## Used in

Members of other types that take, return or hold a `Seed`:

<div className="api-used-in">

[`SeedSpray.currentShots`](/mod/game-api/types/alta-intelligence/seedspray#m-currentshots), [`SeedSpray.Destroy`](/mod/game-api/types/alta-intelligence/seedspray#m-destroy), [`SeedSpray.TimedShootItems`](/mod/game-api/types/alta-intelligence/seedspray#m-timedshootitems).

</div>
