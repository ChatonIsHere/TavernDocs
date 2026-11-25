---
title: "WyrmDigSettings"
description: "class WyrmDigSettings in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmDigSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveDig`](/game-api/types/alta-intelligence/activedig)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WyrmDigSettings()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-changesensedelay" /><code>{"private float changeSenseDelay"}</code> |
| <Link id="m-dugsenses" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] dugSenses"}</code> |
| <Link id="m-failchance" /><code>{"private float failChance"}</code> |
| <Link id="m-maxstrengthduration" /><code>{"private float maxStrengthDuration"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-changesensedelay-2" /><code>{"float ChangeSenseDelay { get; }"}</code> |
| <Link id="m-dugsenses-2" /><code><Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] DugSenses { get; }"}</code> |
| <Link id="m-failchance-2" /><code>{"float FailChance { get; }"}</code> |
| <Link id="m-maxstrengthduration-2" /><code>{"float MaxStrengthDuration { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |

## Used in

Members of other types that take, return or hold a `WyrmDigSettings`:

[`ActiveDig.GetAction`](/game-api/types/alta-intelligence/activedig#m-getaction).
