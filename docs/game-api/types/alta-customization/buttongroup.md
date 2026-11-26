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

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ButtonGroup()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds the expand or fold takes. |
| <Link id="m-animationprogress" /><code>{"private float animationProgress"}</code> | 0 folded, 1 fully out. |
| <Link id="m-basecamera" /><code>{"private "}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" baseCamera"}</code> | The hand camera the group belongs to. |
| <Link id="m-buttons" /><code>{"private Object[] buttons"}</code> | The touch buttons (`ITouchScreenButton`). |
| <Link id="m-isactive" /><code>{"private bool isActive"}</code> | True when expanded or expanding. |
| <Link id="m-isanimating" /><code>{"private bool isAnimating"}</code> | True while animating. |
| <Link id="m-positions" /><code>{"private Vector3[] positions"}</code> | Each button's expanded local position. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-toggle" /><code>{"void Toggle()"}</code> | Expands or folds the buttons, unless already animating. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks the camera's owner change. |
| <Link id="m-expandanimation" /><code>{"private IEnumerator ExpandAnimation() (iterator)"}</code> | Coroutine that moves and scales the buttons out or in, enabling them once fully out and hiding them once in. |
| <Link id="m-ownerupdate" /><code>{"private void OwnerUpdate(bool isowned)"}</code> | When the camera becomes owned, records the buttons' positions and folds them away hidden. |

</details>
