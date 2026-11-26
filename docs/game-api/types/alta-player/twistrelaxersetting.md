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

- **Listed in** [Players and characters](/game-api/types/alta-player)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TwistRelaxerSetting()"}</code> | Creates a `TwistRelaxerSetting` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bone" /><code>{"private Transform bone"}</code> | Backing field for `Bone`. |
| <Link id="m-parentchildcrossfade" /><code>{"private float parentChildCrossfade"}</code> | Backing field for `ParentChildCrossfade`. |
| <Link id="m-weight" /><code>{"private float weight"}</code> | Backing field for `Weight`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bone-2" /><code>{"Transform Bone { get; set; }"}</code> | The bone transform to relax. `ArmIKControllerHelper` finds the elbow's entry by matching this bone's name. |
| <Link id="m-parentchildcrossfade-2" /><code>{"float ParentChildCrossfade { get; }"}</code> | From 0 to 1: how much the twist follows the parent bone versus the child bone. |
| <Link id="m-weight-2" /><code>{"float Weight { get; }"}</code> | From 0 to 1: how strongly the twist is relaxed on this bone. |

## Used in

Members of other types that take, return or hold a `TwistRelaxerSetting`:

[`ArmIKControllerHelper.clavicleTwistRelaxerSettings`](/game-api/types/alta-player/armikcontrollerhelper#m-clavicletwistrelaxersettings), [`TwistRelaxerControllerHelper.bonesToBeRelaxed`](/game-api/types/alta-player/twistrelaxercontrollerhelper#m-bonestoberelaxed), [`TwistRelaxerControllerHelper.BonesToBeRelaxed`](/game-api/types/alta-player/twistrelaxercontrollerhelper#m-bonestoberelaxed-2).
