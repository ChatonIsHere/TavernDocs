---
title: "AnimatedFloat"
description: "A synced float parameter on a NetworkAnimator, sent compressed within a range and precision."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedFloat

A **class** in `Root.Township`, `Alta.Networking.Animation`.

A synced float parameter on a `NetworkAnimator`, sent compressed within a range and precision.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedValue<float>`](/mod/game-api/types/alta-networking/animatedvalue-t)
- **Derived types** [`AnimatedFloatLerp`](/mod/game-api/types/alta-networking/animatedfloatlerp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedFloat(string name)"}</code> | <span className="api-desc">Creates an `AnimatedFloat` from `name`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximum" /><code>{"protected float maximum"}</code> | <span className="api-desc">Highest value sent.</span> |
| <Link id="m-minimum" /><code>{"protected float minimum"}</code> | <span className="api-desc">Lowest value sent.</span> |
| <Link id="m-precision" /><code>{"protected float precision"}</code> | <span className="api-desc">Step size used to compress the value.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changedcounter" /><code>{"override int ChangedCounter { get; }"}</code> | <span className="api-desc">How many syncs a change is sent for: 2 here (the base default is 10).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/mod/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> | <span className="api-desc">Binds to the animator and reads the parameter's current value.</span> |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the value within the range; clients apply it.</span> |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | <span className="api-desc">Pushes the value to the Unity animator.</span> |

## Used in

Members of other types that take, return or hold a `AnimatedFloat`:

<div className="api-used-in">

[`AnimatedFloatAiHook.booleans`](/mod/game-api/types/alta-intelligence/animatedfloataihook#m-booleans), [`AnimatedFloatTransitionAiHook.floats`](/mod/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-floats), [`AttackDirectionAnimationFloatSettings.FloatAnimation.animatedProperty`](/mod/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation#m-animatedproperty), [`Schmeechee.runSpeed`](/mod/game-api/types/alta-intelligence/schmeechee#m-runspeed), [`Schmeechee.RunSpeed`](/mod/game-api/types/alta-intelligence/schmeechee#m-runspeed-2), [`ActiveSpit.angle`](/mod/game-api/types/alta-intelligence/activespit#m-angle), [`NetworkAnimator.floatMap`](/mod/game-api/types/alta-networking/networkanimator#m-floatmap), [`NetworkAnimator.floats`](/mod/game-api/types/alta-networking/networkanimator#m-floats), [`NetworkAnimator.GetFloat`](/mod/game-api/types/alta-networking/networkanimator#m-getfloat), [`WalkerAnimator.forwardSpeed`](/mod/game-api/types/alta-intelligence/walkeranimator#m-forwardspeed), [`WalkerAnimator.GetFloat`](/mod/game-api/types/alta-intelligence/walkeranimator#m-getfloat), [`WalkerAnimator.turnSpeed`](/mod/game-api/types/alta-intelligence/walkeranimator#m-turnspeed).

</div>
