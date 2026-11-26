---
title: "AnimatedBool"
description: "A synced bool parameter on a NetworkAnimator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedBool

A **class** in `Root.Township`, `Alta.Networking.Animation`.

A synced bool parameter on a `NetworkAnimator`. Setting it updates the Unity animator and marks it to be sent to clients for the next few syncs.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedValue<bool>`](/game-api/types/alta-networking/animatedvalue-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AnimatedBool(string name)"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"override bool Value { get; set; }"}</code> | The bool. Setting a new value updates the animator and flags it as changed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize("}<Link to="/game-api/types/alta-networking/networkanimator">{"NetworkAnimator"}</Link>{" animator, int index)"}</code> | Binds to the animator and reads the parameter's current value. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isSendingAll)"}</code> | Writes or reads the value; clients apply what they receive. Counts down the changed flag on partial sends. |
| <Link id="m-updatechanged" /><code>{"void UpdateChanged(bool isSendingAll)"}</code> | Counts down the changed flag without writing. |
| <Link id="m-serialize-2" /><code>{"protected override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the value; clients apply what they receive. Counts down the changed flag on partial sends. |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | Pushes the value to the Unity animator. |

## Used in

Members of other types that take, return or hold a `AnimatedBool`:

[`ActiveNest.isSleeping`](/game-api/types/alta-intelligence/activenest#m-issleeping), [`AnimatedBoolAiHook.booleans`](/game-api/types/alta-intelligence/animatedboolaihook#m-booleans), [`AttackDirectionAnimationBoolSettings.BoolAnimation.animatedProperty`](/game-api/types/alta-intelligence/attackdirectionanimationboolsettings-boolanimation#m-animatedproperty), [`Schmeechee.groundedBool`](/game-api/types/alta-intelligence/schmeechee#m-groundedbool), [`Schmeechee.GroundedBool`](/game-api/types/alta-intelligence/schmeechee#m-groundedbool-2), [`Schmeechee.sleepingBool`](/game-api/types/alta-intelligence/schmeechee#m-sleepingbool), [`Schmeechee.SleepingBool`](/game-api/types/alta-intelligence/schmeechee#m-sleepingbool-2), [`AnimatedBoolAccess.animatedBool`](/game-api/types/alta-networking/animatedboolaccess#m-animatedbool), [`NetworkAnimator.boolMap`](/game-api/types/alta-networking/networkanimator#m-boolmap), [`NetworkAnimator.bools`](/game-api/types/alta-networking/networkanimator#m-bools), [`NetworkAnimator.GetBool`](/game-api/types/alta-networking/networkanimator#m-getbool), [`Book.bookOpenAnimation`](/game-api/types/alta-items/book#m-bookopenanimation), [`WalkerAnimator.GetBool`](/game-api/types/alta-intelligence/walkeranimator#m-getbool), [`WalkerAnimator.grounded`](/game-api/types/alta-intelligence/walkeranimator#m-grounded), [`WalkerAnimator.pivot`](/game-api/types/alta-intelligence/walkeranimator#m-pivot), [`WalkerAnimator.stopping`](/game-api/types/alta-intelligence/walkeranimator#m-stopping).
