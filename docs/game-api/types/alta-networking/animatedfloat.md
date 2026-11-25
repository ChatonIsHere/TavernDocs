---
title: "AnimatedFloat"
description: "class AnimatedFloat in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedFloat

A **class** in `Root.Township`, `Alta.Networking.Animation`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedValue<float>`](/game-api/types/alta-networking/animatedvalue-t)
- **Derived types** [`AnimatedFloatLerp`](/game-api/types/alta-networking/animatedfloatlerp)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedFloat(string name)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-maximum" /><code>{"protected float maximum"}</code> |  |
| <Link id="m-minimum" /><code>{"protected float minimum"}</code> |  |
| <Link id="m-precision" /><code>{"protected float precision"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-changedcounter" /><code>{"override int ChangedCounter { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> |  |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `AnimatedFloat`:

[`AnimatedFloatAiHook.booleans`](/game-api/types/alta-intelligence/animatedfloataihook#m-booleans), [`AnimatedFloatTransitionAiHook.floats`](/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-floats), [`AttackDirectionAnimationFloatSettings.FloatAnimation.animatedProperty`](/game-api/types/alta-intelligence/attackdirectionanimationfloatsettings-floatanimation#m-animatedproperty), [`Schmeechee.runSpeed`](/game-api/types/alta-intelligence/schmeechee#m-runspeed), [`Schmeechee.RunSpeed`](/game-api/types/alta-intelligence/schmeechee#m-runspeed-2), [`ActiveSpit.angle`](/game-api/types/alta-intelligence/activespit#m-angle), [`NetworkAnimator.floatMap`](/game-api/types/alta-networking/networkanimator#m-floatmap), [`NetworkAnimator.floats`](/game-api/types/alta-networking/networkanimator#m-floats), [`NetworkAnimator.GetFloat`](/game-api/types/alta-networking/networkanimator#m-getfloat), [`WalkerAnimator.forwardSpeed`](/game-api/types/alta-intelligence/walkeranimator#m-forwardspeed), [`WalkerAnimator.GetFloat`](/game-api/types/alta-intelligence/walkeranimator#m-getfloat), [`WalkerAnimator.turnSpeed`](/game-api/types/alta-intelligence/walkeranimator#m-turnspeed).
