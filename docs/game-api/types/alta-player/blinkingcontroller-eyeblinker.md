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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Nested in** [`BlinkingController`](/game-api/types/alta-player/blinkingcontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EyeBlinker(Animator animator, float blinkSpeed, bool isLeftEye)"}</code> | Creates a `BlinkingController.EyeBlinker` from `animator`, `blinkSpeed` and `isLeftEye`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Animator that plays the blink. |
| <Link id="m-triggerid" /><code>{"private int triggerID"}</code> | Hash of the left or right eye blink trigger. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-blink" /><code>{"void Blink()"}</code> | Fires the eye's blink trigger on the animator. |

## Used in

Members of other types that take, return or hold a `EyeBlinker`:

[`BlinkingController.leftBlinker`](/game-api/types/alta-player/blinkingcontroller#m-leftblinker), [`BlinkingController.rightBlinker`](/game-api/types/alta-player/blinkingcontroller#m-rightblinker).
