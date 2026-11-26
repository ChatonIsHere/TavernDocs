---
title: "ButtonGroup"
description: "Group of hand camera touch buttons that expand out and fold back in when toggled."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ButtonGroup

A **class** in `Root.Township`, `Alta.ScreenshotCamera`.

Group of hand camera touch buttons that expand out and fold back in when toggled.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonGroup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds the expand or fold takes.</span> |
| <Link id="m-animationprogress" /><code>{"private float animationProgress"}</code> | <span className="api-desc">0 folded, 1 fully out.</span> |
| <Link id="m-basecamera" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" baseCamera"}</code> | <span className="api-desc">The hand camera the group belongs to.</span> |
| <Link id="m-buttons" /><code>{"private Object[] buttons"}</code> | <span className="api-desc">The touch buttons (`ITouchScreenButton`).</span> |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | <span className="api-desc">True when expanded or expanding.</span> |
| <Link id="m-isanimating" /><code>{"private bool isAnimating"}</code> | <span className="api-desc">True while animating.</span> |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | <span className="api-desc">Each button's expanded local position.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | <span className="api-desc">Expands or folds the buttons, unless already animating.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks the camera's owner change.</span> |
| <Link id="m-expandanimation" /><code>{"private IEnumerator ExpandAnimation() (iterator)"}</code> | <span className="api-desc">Coroutine that moves and scales the buttons out or in, enabling them once fully out and hiding them once in.</span> |
| <Link id="m-ownerupdate" /><code>{"private void OwnerUpdate(bool isowned)"}</code> | <span className="api-desc">When the camera becomes owned, records the buttons' positions and folds them away hidden.</span> |

</details>
