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
| <Link id="m-ctor" /><code>{"HandTouchVfxController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activatingvfxindex" /><code>{"private int activatingVfxIndex"}</code> | Index of the effect played while activating. Defaults to 0. |
| <Link id="m-completedvfxindex" /><code>{"private int completedVfxIndex"}</code> | Index of the effect played on completion. Defaults to 1. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-playactivatingeffect" /><code>{"void PlayActivatingEffect()"}</code> | Plays the effect at `activatingVfxIndex`. |
| <Link id="m-playcompletedeffect" /><code>{"void PlayCompletedEffect()"}</code> | Plays the effect at `completedVfxIndex`. |

## Used in

Members of other types that take, return or hold a `HandTouchVfxController`:

[`HandHoverPoint.handTouchVfxController`](/mod/game-api/types/global-e-h/handhoverpoint#m-handtouchvfxcontroller).
