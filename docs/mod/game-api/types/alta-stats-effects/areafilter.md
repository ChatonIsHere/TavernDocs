---
title: "AreaFilter"
description: "Flags for which part of a player a stat area affects: None, Body or Mind."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AreaFilter

An **enum** in `Root.Township`, `Alta.StatSystem`.

Flags for which part of a player a stat area affects: `None`, `Body` or `Mind`. `StatAffectAccessor` matches it against the area's target.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)

## Values

| Member |
| --- |
| <Link id="m-body" /><code>{"Body = 2"}</code> |
| <Link id="m-mind" /><code>{"Mind = 4"}</code> |
| <Link id="m-none" /><code>{"None = 1"}</code> |

## Used in

Members of other types that take, return or hold a `AreaFilter`:

<div className="api-used-in">

[`StatAffectAccessor.filters`](/mod/game-api/types/alta-stats-effects/stataffectaccessor#m-filters), [`StatAffectAccessor.IsAffecting`](/mod/game-api/types/alta-stats-effects/stataffectaccessor#m-isaffecting), [`StatAffectingArea.target`](/mod/game-api/types/alta-stats-effects/stataffectingarea#m-target).

</div>
