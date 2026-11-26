---
title: "WyrmSpitSettings"
description: "Action settings for a wyrm's spit attack (ActiveSpit), scored by distance, hurt and whether the target is the same as before."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WyrmSpitSettings

A **class** in `Root.Township`, `Alta.Intelligence.Wyrms`.

Action settings for a wyrm's spit attack (`ActiveSpit`), scored by distance, hurt and whether the target is the same as before.

- **Listed in** [Creatures and AI](/mod/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/mod/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveSpit`](/mod/game-api/types/alta-intelligence/activespit)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WyrmSpitSettings()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedangle" /><code>{"private string animatedAngle"}</code> | <span className="api-desc">Backing field for `AnimatedAngle`, the animator float set to the aim angle (default `Aim Angle`).</span> |
| <Link id="m-bestrange" /><code>{"private float bestRange"}</code> | <span className="api-desc">Backing field for `BestRange`, the distance that scores best for spitting.</span> |
| <Link id="m-changetargetmultiplier" /><code>{"private float changeTargetMultiplier"}</code> | <span className="api-desc">Backing field for `ChangeTargetMultiplier`.</span> |
| <Link id="m-hurtweighting" /><code>{"private float hurtWeighting"}</code> | <span className="api-desc">Backing field for `HurtWeighting`.</span> |
| <Link id="m-maximumrange" /><code>{"private float maximumRange"}</code> | <span className="api-desc">Backing field for `MaximumRange`, beyond which targets score zero.</span> |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> | <span className="api-desc">Backing field for `SameTargetMultiplier`.</span> |
| <Link id="m-spittriggers" /><code>{"private string[] spitTriggers"}</code> | <span className="api-desc">Animator triggers, one picked at random per spit.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatedangle-2" /><code>{"string AnimatedAngle { get; }"}</code> | <span className="api-desc">Animator float for the aim angle.</span> |
| <Link id="m-bestrange-2" /><code>{"float BestRange { get; }"}</code> | <span className="api-desc">Distance it most likes to spit from.</span> |
| <Link id="m-changetargetmultiplier-2" /><code>{"float ChangeTargetMultiplier { get; }"}</code> | <span className="api-desc">Score multiplier when the target is a new one.</span> |
| <Link id="m-hurtweighting-2" /><code>{"float HurtWeighting { get; }"}</code> | <span className="api-desc">Weight of the hurt rule, so targets that hurt it score higher.</span> |
| <Link id="m-maximumrange-2" /><code>{"float MaximumRange { get; }"}</code> | <span className="api-desc">Furthest distance it spits from.</span> |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> | <span className="api-desc">Score multiplier when the target is the same as before.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomspittrigger" /><code>{"string GetRandomSpitTrigger()"}</code> | <span className="api-desc">Picks one of the spit animator triggers at random.</span> |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/mod/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | <span className="api-desc">Creates the `ActiveSpit` action.</span> |

## Used in

Members of other types that take, return or hold a `WyrmSpitSettings`:

<div className="api-used-in">

[`ActiveSpit.GetAction`](/mod/game-api/types/alta-intelligence/activespit#m-getaction).

</div>
