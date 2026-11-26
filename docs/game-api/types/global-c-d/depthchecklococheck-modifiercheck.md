---
title: "DepthCheckLocoCheck.ModifierCheck"
description: "Per-player state in a DepthCheckLocoCheck: the surface height and how deep the player is."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DepthCheckLocoCheck.ModifierCheck

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Per-player state in a `DepthCheckLocoCheck`: the surface height and how deep the player is.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Nested in** [`DepthCheckLocoCheck`](/game-api/types/global-c-d/depthchecklococheck)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModifierCheck(Bounds bounds)"}</code> | Creates a `DepthCheckLocoCheck.ModifierCheck` from `bounds`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-depth" /><code><Link to="/game-api/types/global-c-d/depthchecklococheck-depth">{"DepthCheckLocoCheck.Depth"}</Link>{" "}<Link to="/game-api/types/global-c-d/depthchecklococheck-depth">{"Depth"}</Link>{" { get; set; }"}</code> | The player's current depth: out, shallow or deep. |
| <Link id="m-surface" /><code>{"float Surface { get; }"}</code> | Top of the volume's bounds, used as the surface height unless raycasting. |

## Used in

Members of other types that take, return or hold a `ModifierCheck`:

[`DepthCheckLocoCheck.checkingPlayers`](/game-api/types/global-c-d/depthchecklococheck#m-checkingplayers).
