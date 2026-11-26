---
title: "TouchScreenButtonOld"
description: "Older touch screen button that just flashes its pressed look for a quarter second when pressed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenButtonOld

A **class** in `Root.Township`, the global namespace.

Older touch screen button that just flashes its pressed look for a quarter second when pressed.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`BasicTouchScreenButton`](/mod/game-api/types/global-a-b/basictouchscreenbutton)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenButtonOld()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-enabledbasedongameobject" /><code>{"private bool enabledBasedOnGameObject"}</code> | <span className="api-desc">If true, the button counts as disabled while its object is inactive in the hierarchy.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isenabled" /><code>{"override bool IsEnabled { get; set; }"}</code> | <span className="api-desc">Base enabled state, but false while the object is inactive if `enabledBasedOnGameObject` is set.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-internalpress" /><code>{"protected override void InternalPress()"}</code> | <span className="api-desc">Starts the highlight flash.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-highlight" /><code>{"private IEnumerator Highlight() (iterator)"}</code> | <span className="api-desc">Coroutine that shows the pressed alpha for 0.25 seconds, then the normal alpha.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenButtonOld`:

<div className="api-used-in">

[`TouchScreenButtonGrower.button`](/mod/game-api/types/global-t-x/touchscreenbuttongrower#m-button).

</div>
