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
| <Link id="m-ctor" /><code>{"AnimatedTrigger(string name)"}</code> | <span className="api-desc">Creates an `AnimatedTrigger` from `name`.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"override bool Value { get; set; }"}</code> | <span className="api-desc">Setting it to a new value marks it changed, flags the animator and fires the trigger.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-force" /><code>{"void Force()"}</code> | <span className="api-desc">Sets the trigger again even if it was already set.</span> |
| <Link id="m-serialize" /><code>{"override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool isWriteFull)"}</code> | <span className="api-desc">Writes or reads the trigger in delta updates only (never in full syncs) and counts down the changed counter.</span> |
| <Link id="m-updatechanged" /><code>{"void UpdateChanged()"}</code> | <span className="api-desc">Counts down the changed counter and tells the animator once it reaches zero.</span> |
| <Link id="m-serialize-2" /><code>{"protected override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Writes or reads the trigger in delta updates only (never in full syncs) and counts down the changed counter.</span> |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | <span className="api-desc">Fires the animator trigger when set; clients clear it straight after.</span> |

## Used in

Members of other types that take, return or hold a `AnimatedTrigger`:

<div className="api-used-in">

[`Schmeechee.popTrigger`](/mod/game-api/types/alta-intelligence/schmeechee#m-poptrigger), [`Schmeechee.PopTrigger`](/mod/game-api/types/alta-intelligence/schmeechee#m-poptrigger-2), [`NetworkAnimator.GetTrigger`](/mod/game-api/types/alta-networking/networkanimator#m-gettrigger), [`NetworkAnimator.triggerMap`](/mod/game-api/types/alta-networking/networkanimator#m-triggermap), [`NetworkAnimator.triggers`](/mod/game-api/types/alta-networking/networkanimator#m-triggers).

</div>
