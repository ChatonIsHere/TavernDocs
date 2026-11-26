---
title: "SenseSetup"
description: "A serialized pair of a sense and a value, used in AI settings."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SenseSetup

A **class** in `Root.Township`, `Alta.Intelligence`.

A serialized pair of a sense and a value, used in AI settings. Still supports the old `SenseOld` enum for older assets.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SenseSetup()"}</code> | <span className="api-desc">Creates a `SenseSetup` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sense" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense"}</code> | <span className="api-desc">Obsolete legacy enum sense; should be left as `None`.</span> |
| <Link id="m-type" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/basicsense">{"BasicSense"}</Link>{" type"}</code> | <span className="api-desc">Backing field for `Sense`.</span> |
| <Link id="m-value" /><code>{"private float value"}</code> | <span className="api-desc">Backing field for `Value`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sense-2" /><code><Link to="/mod/game-api/types/alta-intelligence/basicsense">{"BasicSense"}</Link>{" Sense { get; }"}</code> | <span className="api-desc">The sense asset, falling back to the asset mapped from the old enum value.</span> |
| <Link id="m-value-2" /><code>{"float Value { get; set; }"}</code> | <span className="api-desc">The number paired with the sense.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fix" /><code>{"void Fix()"}</code> | <span className="api-desc">Replaces an old enum sense with its asset and clears the enum once found.</span> |

## Used in

Members of other types that take, return or hold a `SenseSetup`:

<div className="api-used-in">

[`BasicSenseSet.Apply`](/mod/game-api/types/alta-intelligence/basicsenseset#m-apply), [`Target.initialSenses`](/mod/game-api/types/alta-intelligence/target#m-initialsenses), [`WyrmDigSettings.dugSenses`](/mod/game-api/types/alta-intelligence/wyrmdigsettings#m-dugsenses), [`WyrmDigSettings.DugSenses`](/mod/game-api/types/alta-intelligence/wyrmdigsettings#m-dugsenses-2), [`WyrmEmergeSettings.emergedSenses`](/mod/game-api/types/alta-intelligence/wyrmemergesettings#m-emergedsenses), [`WyrmEmergeSettings.EmergedSenses`](/mod/game-api/types/alta-intelligence/wyrmemergesettings#m-emergedsenses-2), [`FlyCamLocomotionController.SenseSetupSet.setup`](/mod/game-api/types/global-e-h/flycamlocomotioncontroller-sensesetupset#m-setup).

</div>
