---
title: "ColorLerp"
description: "Blends between two colours by a value and sends the result to a colour event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ColorLerp

A **class** in `Root.Township`, the global namespace.

Blends between two colours by a value and sends the result to a colour event. Wire it to other components in the inspector.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ColorLerp()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color0" /><code>{"private Color color0"}</code> | Colour at 0. |
| <Link id="m-color1" /><code>{"private Color color1"}</code> | Colour at 1. |
| <Link id="m-needstobeset" /><code>{"private bool needsToBeSet"}</code> | True until `Set` is first called. |
| <Link id="m-output" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colorevent">{"ColorEvent"}</Link>{" output"}</code> | Event that receives the blended colour. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(float value)"}</code> | Lerps between the two colours by the value and invokes `output`. The int overload only gives either end. |
| <Link id="m-set-2" /><code>{"void Set(int value)"}</code> | Lerps between the two colours by the value and invokes `output`. The int overload only gives either end. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Outputs the first colour if nothing has set a value yet. |

</details>

## Used in

Members of other types that take, return or hold a `ColorLerp`:

[`HandHoverPoint.attractingHandTouchColor`](/mod/game-api/types/global-e-h/handhoverpoint#m-attractinghandtouchcolor), [`SkillOrbHolder.colorLerp`](/mod/game-api/types/global-s/skillorbholder#m-colorlerp).
