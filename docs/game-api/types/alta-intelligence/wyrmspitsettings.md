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

- **Listed in** [Creatures and AI](/game-api/types/alta-intelligence)
- **Inherits or implements** [`TimedActionComponent`](/game-api/types/alta-intelligence/timedactioncomponent)
- **Derived types** [`ActiveSpit`](/game-api/types/alta-intelligence/activespit)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"WyrmSpitSettings()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatedangle" /><code>{"private string animatedAngle"}</code> | Backing field for `AnimatedAngle`, the animator float set to the aim angle (default `Aim Angle`). |
| <Link id="m-bestrange" /><code>{"private float bestRange"}</code> | Backing field for `BestRange`, the distance that scores best for spitting. |
| <Link id="m-changetargetmultiplier" /><code>{"private float changeTargetMultiplier"}</code> | Backing field for `ChangeTargetMultiplier`. |
| <Link id="m-hurtweighting" /><code>{"private float hurtWeighting"}</code> | Backing field for `HurtWeighting`. |
| <Link id="m-maximumrange" /><code>{"private float maximumRange"}</code> | Backing field for `MaximumRange`, beyond which targets score zero. |
| <Link id="m-sametargetmultiplier" /><code>{"private float sameTargetMultiplier"}</code> | Backing field for `SameTargetMultiplier`. |
| <Link id="m-spittriggers" /><code>{"private string[] spitTriggers"}</code> | Animator triggers, one picked at random per spit. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-animatedangle-2" /><code>{"string AnimatedAngle { get; }"}</code> | Animator float for the aim angle. |
| <Link id="m-bestrange-2" /><code>{"float BestRange { get; }"}</code> | Distance it most likes to spit from. |
| <Link id="m-changetargetmultiplier-2" /><code>{"float ChangeTargetMultiplier { get; }"}</code> | Score multiplier when the target is a new one. |
| <Link id="m-hurtweighting-2" /><code>{"float HurtWeighting { get; }"}</code> | Weight of the hurt rule, so targets that hurt it score higher. |
| <Link id="m-maximumrange-2" /><code>{"float MaximumRange { get; }"}</code> | Furthest distance it spits from. |
| <Link id="m-sametargetmultiplier-2" /><code>{"float SameTargetMultiplier { get; }"}</code> | Score multiplier when the target is the same as before. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getrandomspittrigger" /><code>{"string GetRandomSpitTrigger()"}</code> | Picks one of the spit animator triggers at random. |
| <Link id="m-getaction" /><code>{"protected override "}<Link to="/game-api/types/alta-intelligence/iaction">{"IAction"}</Link>{" GetAction()"}</code> | Creates the `ActiveSpit` action. |

## Used in

Members of other types that take, return or hold a `WyrmSpitSettings`:

[`ActiveSpit.GetAction`](/game-api/types/alta-intelligence/activespit#m-getaction).
