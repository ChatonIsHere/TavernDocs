---
title: "TwistRelaxerSetting"
description: "One bone entry for the twist relaxer, which spreads forearm or arm twist across bones so they don't look wrung."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TwistRelaxerSetting

A **class** in `Root.Township`, `Alta.Character`.

One bone entry for the twist relaxer, which spreads forearm or arm twist across bones so they don't look wrung. Listed in `TwistRelaxerControllerHelper.BonesToBeRelaxed`.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TwistRelaxerSetting()"}</code> | <span className="api-desc">Creates a `TwistRelaxerSetting` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private Transform bone"}</code> | <span className="api-desc">Backing field for `Bone`.</span> |
| <Link id="m-parentchildcrossfade" /><code>{"private float parentChildCrossfade"}</code> | <span className="api-desc">Backing field for `ParentChildCrossfade`.</span> |
| <Link id="m-weight" /><code>{"private float weight"}</code> | <span className="api-desc">Backing field for `Weight`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bone-2" /><code>{"Transform Bone { get; set; }"}</code> | <span className="api-desc">The bone transform to relax. `ArmIKControllerHelper` finds the elbow's entry by matching this bone's name.</span> |
| <Link id="m-parentchildcrossfade-2" /><code>{"float ParentChildCrossfade { get; }"}</code> | <span className="api-desc">From 0 to 1: how much the twist follows the parent bone versus the child bone.</span> |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | <span className="api-desc">From 0 to 1: how strongly the twist is relaxed on this bone.</span> |

## Used in

Members of other types that take, return or hold a `TwistRelaxerSetting`:

<div className="api-used-in">

[`ArmIKControllerHelper.clavicleTwistRelaxerSettings`](/mod/game-api/types/alta-player/armikcontrollerhelper#m-clavicletwistrelaxersettings), [`TwistRelaxerControllerHelper.bonesToBeRelaxed`](/mod/game-api/types/alta-player/twistrelaxercontrollerhelper#m-bonestoberelaxed), [`TwistRelaxerControllerHelper.BonesToBeRelaxed`](/mod/game-api/types/alta-player/twistrelaxercontrollerhelper#m-bonestoberelaxed-2).

</div>
