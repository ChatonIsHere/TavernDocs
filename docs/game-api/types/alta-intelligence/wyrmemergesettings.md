---
title: "WyrmEmergeSettings"
description: "Action settings for a burrowed wyrm coming up when a target is close (ActiveEmerge)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmEmergeSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Action settings for a burrowed wyrm coming up when a target is close (`ActiveEmerge`). After emerging it switches to its emerged senses.

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveEmerge`](/game-api/types/alta-intelligence/activeemerge)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WyrmEmergeSettings()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbool" /><code>{"private string animatedBool"}</code> | Backing field for `AnimatedBool`, the animator bool cleared on emerging (default `Burrowed`). |
| <Link id="m-chance" /><code>{"private float chance"}</code> | Backing field for `Chance`, the chance the emerge scores at all. |
| <Link id="m-changesensedelay" /><code>{"private float changeSenseDelay"}</code> | Backing field for `ChangeSenseDelay`, the delay before the emerged senses apply. |
| <Link id="m-emergedsenses" /><code>{"private "}<Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] emergedSenses"}</code> | Backing field for `EmergedSenses`, the senses applied after emerging. |
| <Link id="m-radius" /><code>{"private float radius"}</code> | Backing field for `Radius`, the target distance within which it emerges. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbool-2" /><code>{"string AnimatedBool { get; }"}</code> | Animator bool cleared when it emerges ("Burrowed" by default). |
| <Link id="m-chance-2" /><code>{"float Chance { get; }"}</code> | Chance rule for picking the action. |
| <Link id="m-changesensedelay-2" /><code>{"float ChangeSenseDelay { get; }"}</code> | Seconds after emerging before the emerged senses are applied. |
| <Link id="m-emergedsenses-2" /><code><Link to="/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] EmergedSenses { get; }"}</code> | Senses applied once it has emerged. |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | A target must be within this distance. |
| <Link id="m-radiussquared" /><code>{"float RadiusSquared { get; }"}</code> | `Radius` squared. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Creates the `ActiveEmerge` action. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: fixes up the emerged sense setups. |

## Used in

Members of other types that take, return or hold a `WyrmEmergeSettings`:

[`ActiveEmerge.GetAction`](/game-api/types/alta-intelligence/activeemerge#m-getaction).
