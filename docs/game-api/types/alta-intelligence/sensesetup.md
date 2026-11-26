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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SenseSetup()"}</code> | Creates a `SenseSetup` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-sense" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/senseold">{"SenseOld"}</Link>{" sense"}</code> | Obsolete legacy enum sense; should be left as `None`. |
| <Link id="m-type" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/basicsense">{"BasicSense"}</Link>{" type"}</code> | Backing field for `Sense`. |
| <Link id="m-value" /><code>{"private float value"}</code> | Backing field for `Value`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sense-2" /><code><Link to="/game-api/types/alta-intelligence/basicsense">{"BasicSense"}</Link>{" Sense { get; }"}</code> | The sense asset, falling back to the asset mapped from the old enum value. |
| <Link id="m-value-2" /><code>{"float Value { get; set; }"}</code> | The number paired with the sense. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fix" /><code>{"void Fix()"}</code> | Replaces an old enum sense with its asset and clears the enum once found. |

## Used in

Members of other types that take, return or hold a `SenseSetup`:

[`BasicSenseSet.Apply`](/game-api/types/alta-intelligence/basicsenseset#m-apply), [`Target.initialSenses`](/game-api/types/alta-intelligence/target#m-initialsenses), [`WyrmDigSettings.dugSenses`](/game-api/types/alta-intelligence/wyrmdigsettings#m-dugsenses), [`WyrmDigSettings.DugSenses`](/game-api/types/alta-intelligence/wyrmdigsettings#m-dugsenses-2), [`WyrmEmergeSettings.emergedSenses`](/game-api/types/alta-intelligence/wyrmemergesettings#m-emergedsenses), [`WyrmEmergeSettings.EmergedSenses`](/game-api/types/alta-intelligence/wyrmemergesettings#m-emergedsenses-2), [`FlyCamLocomotionController.SenseSetupSet.setup`](/game-api/types/global-e-h/flycamlocomotioncontroller-sensesetupset#m-setup).
