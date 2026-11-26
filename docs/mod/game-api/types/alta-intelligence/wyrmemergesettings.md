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

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/mod/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveEmerge`](/mod/game-api/types/alta-intelligence/activeemerge)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WyrmEmergeSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbool" /><code>{"private string animatedBool"}</code> | <span className="api-desc">Backing field for `AnimatedBool`, the animator bool cleared on emerging (default `Burrowed`).</span> |
| <Link id="m-chance" /><code>{"private float chance"}</code> | <span className="api-desc">Backing field for `Chance`, the chance the emerge scores at all.</span> |
| <Link id="m-changesensedelay" /><code>{"private float changeSenseDelay"}</code> | <span className="api-desc">Backing field for `ChangeSenseDelay`, the delay before the emerged senses apply.</span> |
| <Link id="m-emergedsenses" /><code>{"private "}<Link to="/mod/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] emergedSenses"}</code> | <span className="api-desc">Backing field for `EmergedSenses`, the senses applied after emerging.</span> |
| <Link id="m-radius" /><code>{"private float radius"}</code> | <span className="api-desc">Backing field for `Radius`, the target distance within which it emerges.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatedbool-2" /><code>{"string AnimatedBool { get; }"}</code> | <span className="api-desc">Animator bool cleared when it emerges ("Burrowed" by default).</span> |
| <Link id="m-chance-2" /><code>{"float Chance { get; }"}</code> | <span className="api-desc">Chance rule for picking the action.</span> |
| <Link id="m-changesensedelay-2" /><code>{"float ChangeSenseDelay { get; }"}</code> | <span className="api-desc">Seconds after emerging before the emerged senses are applied.</span> |
| <Link id="m-emergedsenses-2" /><code><Link to="/mod/game-api/types/alta-intelligence/sensesetup">{"SenseSetup"}</Link>{"[] EmergedSenses { get; }"}</code> | <span className="api-desc">Senses applied once it has emerged.</span> |
| <Link id="m-radius-2" /><code>{"float Radius { get; }"}</code> | <span className="api-desc">A target must be within this distance.</span> |
| <Link id="m-radiussquared" /><code>{"float RadiusSquared { get; }"}</code> | <span className="api-desc">`Radius` squared.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Creates the `ActiveEmerge` action.</span> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | <span className="api-desc">Editor: fixes up the emerged sense setups.</span> |

## Used in

Members of other types that take, return or hold a `WyrmEmergeSettings`:

<div className="api-used-in">

[`ActiveEmerge.GetAction`](/mod/game-api/types/alta-intelligence/activeemerge#m-getaction).

</div>
