---
title: "AnimatedFloatLerp"
description: "class AnimatedFloatLerp in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AnimatedFloatLerp

A **class** in `Root.Township`, `Alta.Networking.Animation`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** [`AnimatedFloat`](/game-api/types/alta-networking/animatedfloat)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AnimatedFloatLerp(string name)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> |  |
| <Link id="m-lerpprogress" /><code>{"private float lerpProgress"}</code> |  |
| <Link id="m-snapthreshold" /><code>{"private float snapThreshold"}</code> |  |
| <Link id="m-target" /><code>{"private float target"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"override float Value { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lerp" /><code>{"void Lerp()"}</code> |  |
| <Link id="m-serialize" /><code>{"protected override void Serialize("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-update" /><code>{"protected override void Update()"}</code> |  |

## Used in

Members of other types that take, return or hold a `AnimatedFloatLerp`:

[`NetworkAnimator.floatLerpMap`](/game-api/types/alta-networking/networkanimator#m-floatlerpmap), [`NetworkAnimator.floatsLerp`](/game-api/types/alta-networking/networkanimator#m-floatslerp), [`NetworkAnimator.GetFloatLerp`](/game-api/types/alta-networking/networkanimator#m-getfloatlerp).
