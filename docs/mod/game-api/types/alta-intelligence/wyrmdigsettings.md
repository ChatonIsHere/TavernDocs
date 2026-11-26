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
| <Link id="m-ctor" /><code>{"WyrmDigSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-changesensedelay" /><code>{"private float changeSenseDelay"}</code> | <span className="api-desc">Backing field for `ChangeSenseDelay`.</span> |
| <Link id="m-dugsenses" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] dugSenses"}</code> | <span className="api-desc">Backing field for `DugSenses`.</span> |
| <Link id="m-failchance" /><code>{"private float failChance"}</code> | <span className="api-desc">Backing field for `FailChance`.</span> |
| <Link id="m-maxstrengthduration" /><code>{"private float maxStrengthDuration"}</code> | <span className="api-desc">Backing field for `MaxStrengthDuration`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changesensedelay-2" /><code>{"float ChangeSenseDelay { get; }"}</code> | <span className="api-desc">Seconds after the dig starts before the senses switch to `DugSenses`.</span> |
| <Link id="m-dugsenses-2" /><code><Link to="/mod/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] DugSenses { get; }"}</code> | <span className="api-desc">Senses applied once the wyrm is underground (all others are zeroed).</span> |
| <Link id="m-failchance-2" /><code>{"float FailChance { get; }"}</code> | <span className="api-desc">Chance that the dig scores zero on a given check.</span> |
| <Link id="m-maxstrengthduration-2" /><code>{"float MaxStrengthDuration { get; }"}</code> | <span className="api-desc">Idle seconds after which the dig reaches full weight.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Returns the `ActiveDig` action for these settings.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: fixes up each entry in `dugSenses`.</span> |

## Used in

Members of other types that take, return or hold a `WyrmDigSettings`:

<div className="api-used-in">

[`ActiveDig.GetAction`](/mod/game-api/types/alta-intelligence/activedig#m-getaction).

</div>
