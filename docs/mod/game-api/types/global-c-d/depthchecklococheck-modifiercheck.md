---
title: "DepthCheckLocoCheck.ModifierCheck"
description: "Per-player state in a DepthCheckLocoCheck: the surface height and how deep the player is."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DepthCheckLocoCheck.ModifierCheck

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Per-player state in a `DepthCheckLocoCheck`: the surface height and how deep the player is.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Nested in** [`DepthCheckLocoCheck`](/mod/game-api/types/global-c-d/depthchecklococheck)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifierCheck(Bounds bounds)"}</code> | <span className="api-desc">Creates a `DepthCheckLocoCheck.ModifierCheck` from `bounds`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-depth" /><code><Link to="/mod/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" "}<Link to="/mod/game-api/types/global-c-d/depthchecklococheck-depth">{"Depth"}</Link>{" { get; set; }"}</code> | <span className="api-desc">The player's current depth: out, shallow or deep.</span> |
| <Link id="m-surface" /><code>{"float Surface { get; }"}</code> | <span className="api-desc">Top of the volume's bounds, used as the surface height unless raycasting.</span> |

## Used in

Members of other types that take, return or hold a `ModifierCheck`:

<div className="api-used-in">

[`DepthCheckLocoCheck.checkingPlayers`](/mod/game-api/types/global-c-d/depthchecklococheck#m-checkingplayers).

</div>
