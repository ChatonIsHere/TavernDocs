---
title: "LocomotionStatSettings"
description: "Asset with the stats that affect player movement speed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocomotionStatSettings

A **class** in `Root.Township`, the global namespace.

Asset with the stats that affect player movement speed. Used by `LocomotionController`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `ScriptableObject`
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocomotionStatSettings()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cripplestat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" crippleStat"}</code> | Backing field for `CrippleStat`. |
| <Link id="m-cripplevaluetospeedmodifier" /><code>{"private AnimationCurve crippleValueToSpeedModifier"}</code> | Curve from the cripple stat's fraction (0 to 1) to a speed modifier. |
| <Link id="m-speedstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" speedStat"}</code> | Backing field for `SpeedStat`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cripplestat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" CrippleStat { get; }"}</code> | The stat that slows the player as it changes. |
| <Link id="m-speedstat-2" /><code><Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" SpeedStat { get; }"}</code> | The movement speed stat. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcripplevalue" /><code>{"float GetCrippleValue("}<Link to="/mod/game-api/types/alta-stats-effects/stat">{"Stat"}</Link>{" stat)"}</code> | Returns the speed modifier for a stat, from a curve over its value divided by its maximum. |

## Used in

Members of other types that take, return or hold a `LocomotionStatSettings`:

[`LocomotionController.statSettings`](/mod/game-api/types/global-i-l/locomotioncontroller#m-statsettings).
