---
title: "WyrmDigSettings"
description: "Wyrm action component for burrowing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmDigSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Wyrm action component for burrowing. The wyrm switches to its burrowed actions and senses, and gets more likely to dig the longer it has idled.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/mod/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveDig`](/mod/game-api/types/alta-intelligence/activedig)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WyrmDigSettings()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesensedelay" /><code>{"private float changeSenseDelay"}</code> | Backing field for `ChangeSenseDelay`. |
| <Link id="m-dugsenses" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] dugSenses"}</code> | Backing field for `DugSenses`. |
| <Link id="m-failchance" /><code>{"private float failChance"}</code> | Backing field for `FailChance`. |
| <Link id="m-maxstrengthduration" /><code>{"private float maxStrengthDuration"}</code> | Backing field for `MaxStrengthDuration`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changesensedelay-2" /><code>{"float ChangeSenseDelay { get; }"}</code> | Seconds after the dig starts before the senses switch to `DugSenses`. |
| <Link id="m-dugsenses-2" /><code><Link to="/mod/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] DugSenses { get; }"}</code> | Senses applied once the wyrm is underground (all others are zeroed). |
| <Link id="m-failchance-2" /><code>{"float FailChance { get; }"}</code> | Chance that the dig scores zero on a given check. |
| <Link id="m-maxstrengthduration-2" /><code>{"float MaxStrengthDuration { get; }"}</code> | Idle seconds after which the dig reaches full weight. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Returns the `ActiveDig` action for these settings. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: fixes up each entry in `dugSenses`. |

## Used in

Members of other types that take, return or hold a `WyrmDigSettings`:

[`ActiveDig.GetAction`](/mod/game-api/types/alta-intelligence/activedig#m-getaction).
