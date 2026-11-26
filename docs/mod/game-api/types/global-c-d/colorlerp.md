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
| <Link id="m-ctor" /><code>{"ColorLerp()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color0" /><code>{"private Color color0"}</code> | <span className="api-desc">Colour at 0.</span> |
| <Link id="m-color1" /><code>{"private Color color1"}</code> | <span className="api-desc">Colour at 1.</span> |
| <Link id="m-needstobeset" /><code>{"private bool needsToBeSet"}</code> | <span className="api-desc">True until `Set` is first called.</span> |
| <Link id="m-output" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/colorevent">{"ColorEvent"}</Link>{" output"}</code> | <span className="api-desc">Event that receives the blended colour.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-set" /><code>{"void Set(float value)"}</code> | <span className="api-desc">Lerps between the two colours by the value and invokes `output`. The int overload only gives either end.</span> |
| <Link id="m-set-2" /><code>{"void Set(int value)"}</code> | <span className="api-desc">Lerps between the two colours by the value and invokes `output`. The int overload only gives either end.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Outputs the first colour if nothing has set a value yet.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ColorLerp`:

<div className="api-used-in">

[`HandHoverPoint.attractingHandTouchColor`](/mod/game-api/types/global-e-h/handhoverpoint#m-attractinghandtouchcolor), [`SkillOrbHolder.colorLerp`](/mod/game-api/types/global-s/skillorbholder#m-colorlerp).

</div>
