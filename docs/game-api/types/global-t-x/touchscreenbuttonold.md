---
title: "TouchScreenButtonOld"
description: "Older touch screen button that just flashes its pressed look for a quarter second when pressed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenButtonOld

A **class** in `Root.Township`, no namespace.

Older touch screen button that just flashes its pressed look for a quarter second when pressed.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`BasicTouchScreenButton`](/game-api/types/global-a-b/basictouchscreenbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenButtonOld()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enabledbasedongameobject" /><code>{"private bool enabledBasedOnGameObject"}</code> | If true, the button counts as disabled while its object is inactive in the hierarchy. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"override bool IsEnabled { get; set; }"}</code> | Base enabled state, but false while the object is inactive if `enabledBasedOnGameObject` is set. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalpress" /><code>{"protected override void InternalPress()"}</code> | Starts the highlight flash. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-highlight" /><code>{"private IEnumerator Highlight() (iterator)"}</code> | Coroutine that shows the pressed alpha for 0.25 seconds, then the normal alpha. |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenButtonOld`:

[`TouchScreenButtonGrower.button`](/game-api/types/global-t-x/touchscreenbuttongrower#m-button).
