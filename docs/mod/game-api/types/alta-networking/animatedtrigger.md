---
title: "AnimatedTrigger"
description: "A networked animator trigger: the server sets it and clients fire the same trigger on their animator."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedTrigger

A **class** in `Root.Township`, `Alta.Networking.Animation`.

A networked animator trigger: the server sets it and clients fire the same trigger on their animator.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedValue<bool>`](/mod/game-api/types/alta-networking/animatedvalue-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedTrigger(string name)"}</code> | Creates an `AnimatedTrigger` from `name`. |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"override bool Value { get; set; }"}</code> | Setting it to a new value marks it changed, flags the animator and fires the trigger. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-force" /><code>{"void Force()"}</code> | Sets the trigger again even if it was already set. |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | Writes or reads the trigger in delta updates only (never in full syncs) and counts down the changed counter. |
| <Link id="m-updatechanged" /><code>{"void UpdateChanged()"}</code> | Counts down the changed counter and tells the animator once it reaches zero. |
| <Link id="m-serialize-2" /><code>{"protected override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Writes or reads the trigger in delta updates only (never in full syncs) and counts down the changed counter. |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | Fires the animator trigger when set; clients clear it straight after. |

## Used in

Members of other types that take, return or hold a `AnimatedTrigger`:

[`Schmeechee.popTrigger`](/mod/game-api/types/alta-intelligence/schmeechee#m-poptrigger), [`Schmeechee.PopTrigger`](/mod/game-api/types/alta-intelligence/schmeechee#m-poptrigger-2), [`NetworkAnimator.GetTrigger`](/mod/game-api/types/alta-networking/networkanimator#m-gettrigger), [`NetworkAnimator.triggerMap`](/mod/game-api/types/alta-networking/networkanimator#m-triggermap), [`NetworkAnimator.triggers`](/mod/game-api/types/alta-networking/networkanimator#m-triggers).
