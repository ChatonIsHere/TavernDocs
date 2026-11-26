---
title: "BlinkingController.EyeBlinker"
description: "Private helper in BlinkingController that triggers the blink animation for one eye."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BlinkingController.EyeBlinker

A **private struct** in `Root.Township`, `Alta.Character`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private helper in `BlinkingController` that triggers the blink animation for one eye. The constructor also sets that eye's blink speed on the animator.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Nested in** [`BlinkingController`](/mod/game-api/types/alta-player/blinkingcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EyeBlinker(Animator animator, float blinkSpeed, bool isLeftEye)"}</code> | <span className="api-desc">Creates a `BlinkingController.EyeBlinker` from `animator`, `blinkSpeed` and `isLeftEye`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">Animator that plays the blink.</span> |
| <Link id="m-triggerid" /><code>{"private int triggerID"}</code> | <span className="api-desc">Hash of the left or right eye blink trigger.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blink" /><code>{"void Blink()"}</code> | <span className="api-desc">Fires the eye's blink trigger on the animator.</span> |

## Used in

Members of other types that take, return or hold a `EyeBlinker`:

<div className="api-used-in">

[`BlinkingController.leftBlinker`](/mod/game-api/types/alta-player/blinkingcontroller#m-leftblinker), [`BlinkingController.rightBlinker`](/mod/game-api/types/alta-player/blinkingcontroller#m-rightblinker).

</div>
