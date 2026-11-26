---
title: "StatPlayerPair"
description: "A stat and the player it belongs to."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatPlayerPair

A **class** in `Root.Township`, `Alta.StatSystem`.

A stat and the player it belongs to. `StatList` is a list of these, built by `StatListConverter`.

- **Listed in** [Stats, effects, heat and liquid](/mod/game-api/types/alta-stats-effects)
- **Derived types** [`StatList`](/mod/game-api/types/alta-stats-effects/statlist)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatPlayerPair("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat, "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Creates a `StatPlayerPair` from `stat` and `player`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-player" /><code><Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" { get; }"}</code> | <span className="api-desc">The player who owns the stat.</span> |
| <Link id="m-stat" /><code><Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" "}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" { get; }"}</code> | <span className="api-desc">The stat.</span> |

## Used in

Members of other types that take, return or hold a `StatPlayerPair`:

<div className="api-used-in">

[`StatList.GetEnumerator`](/mod/game-api/types/alta-stats-effects/statlist#m-getenumerator), [`StatList.StatList`](/mod/game-api/types/alta-stats-effects/statlist#m-ctor), [`StatList.stats`](/mod/game-api/types/alta-stats-effects/statlist#m-stats).

</div>
