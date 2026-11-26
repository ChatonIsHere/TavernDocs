---
title: "HandTouchVfxController"
description: "A GenericVFXController with two named effects for something a hand touches: one while activating and one when completed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# HandTouchVfxController

A **class** in `Root.Township`, `Features`.

A `GenericVFXController` with two named effects for something a hand touches: one while activating and one when completed.

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`GenericVFXController`](/mod/game-api/types/game-other-namespaces/genericvfxcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"HandTouchVfxController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatingvfxindex" /><code>{"private int activatingVfxIndex"}</code> | <span className="api-desc">Index of the effect played while activating. Defaults to 0.</span> |
| <Link id="m-completedvfxindex" /><code>{"private int completedVfxIndex"}</code> | <span className="api-desc">Index of the effect played on completion. Defaults to 1.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playactivatingeffect" /><code>{"void PlayActivatingEffect()"}</code> | <span className="api-desc">Plays the effect at `activatingVfxIndex`.</span> |
| <Link id="m-playcompletedeffect" /><code>{"void PlayCompletedEffect()"}</code> | <span className="api-desc">Plays the effect at `completedVfxIndex`.</span> |

## Used in

Members of other types that take, return or hold a `HandTouchVfxController`:

<div className="api-used-in">

[`HandHoverPoint.handTouchVfxController`](/mod/game-api/types/global-e-h/handhoverpoint#m-handtouchvfxcontroller).

</div>
