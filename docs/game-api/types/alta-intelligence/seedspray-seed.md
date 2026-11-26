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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Nested in** [`SeedSpray`](/game-api/types/alta-intelligence/seedspray)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Seed()"}</code> | Creates a `SeedSpray.Seed` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isalive" /><code>{"bool isAlive"}</code> | True from when the seed is fired until it's destroyed by the cutoff curve or cleanup. |
| <Link id="m-pooledobject" /><code><Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject"}</code> | The pooled seed object that was fired. |
| <Link id="m-tool" /><code><Link to="/game-api/types/alta-items/impacttool">{"ImpactTool"}</Link>{" tool"}</code> | The seed's impact tool, with its `Entity` set to the spraying entity. |

## Used in

Members of other types that take, return or hold a `Seed`:

[`SeedSpray.currentShots`](/game-api/types/alta-intelligence/seedspray#m-currentshots), [`SeedSpray.Destroy`](/game-api/types/alta-intelligence/seedspray#m-destroy), [`SeedSpray.TimedShootItems`](/game-api/types/alta-intelligence/seedspray#m-timedshootitems).
