---
title: "AnimatedFloatLerp"
description: "A synced animator float that clients ease towards the received value instead of jumping to it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedFloatLerp

A **class** in `Root.Township`, `Alta.Networking.Animation`.

A synced animator float that clients ease towards the received value instead of jumping to it. Big changes past `snapThreshold` snap straight away.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedFloat`](/mod/game-api/types/alta-networking/animatedfloat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedFloatLerp(string name)"}</code> | <span className="api-desc">Creates an `AnimatedFloatLerp` from `name`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> | <span className="api-desc">True while the shown value is still moving towards the target.</span> |
| <Link id="m-lerpprogress" /><code>{"private float lerpProgress"}</code> | <span className="api-desc">Fraction of the remaining gap closed per `Lerp` call. Default 0.1.</span> |
| <Link id="m-snapthreshold" /><code>{"private float snapThreshold"}</code> | <span className="api-desc">Change size at or above which the value snaps instead of easing. Off when 0 or less (default -1).</span> |
| <Link id="m-target" /><code>{"private float target"}</code> | <span className="api-desc">The value being eased towards, and the one that gets synced.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"override float Value { get; set; }"}</code> | <span className="api-desc">The target value. Setting it starts easing, or snaps when the change is tiny or over the snap threshold, and marks it changed for syncing.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp()"}</code> | <span className="api-desc">Moves the shown value a step towards the target and writes it to the animator. `NetworkAnimator` calls it each update.</span> |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the target value. Clients start easing towards it, or snap if the change is over the snap threshold.</span> |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> | <span className="api-desc">Writes the current eased value to the animator parameter.</span> |

## Used in

Members of other types that take, return or hold a `AnimatedFloatLerp`:

<div className="api-used-in">

[`NetworkAnimator.floatLerpMap`](/mod/game-api/types/alta-networking/networkanimator#m-floatlerpmap), [`NetworkAnimator.floatsLerp`](/mod/game-api/types/alta-networking/networkanimator#m-floatslerp), [`NetworkAnimator.GetFloatLerp`](/mod/game-api/types/alta-networking/networkanimator#m-getfloatlerp).

</div>
