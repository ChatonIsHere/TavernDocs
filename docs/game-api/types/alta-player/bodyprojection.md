---
title: "BodyProjection"
description: "Places and turns a body renderer under the head so it follows where the player is looking, and on first use splits the body into a shadow-only original and..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BodyProjection

A **class** in `Root.Township`, `Alta.Character`.

Places and turns a body renderer under the head so it follows where the player is looking, and on first use splits the body into a shadow-only original and a visible copy hidden from the player's own headset view. Runs in edit mode too.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BodyProjection()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angleinterpolation" /><code>{"private AnimationCurve angleInterpolation"}</code> | Curve from angle difference (0 to 180 degrees) to how fast the body turns to catch up with the head. |
| <Link id="m-body" /><code>{"private Renderer body"}</code> | The body renderer. Cleared to null once the hidden copy has been made. |
| <Link id="m-head" /><code>{"private Transform head"}</code> | The head transform the body follows. |
| <Link id="m-lefthand" /><code>{"private Transform leftHand"}</code> | Left hand transform. Not used by this code. |
| <Link id="m-lerptime" /><code>{"private float lerpTime"}</code> | Running turn speed, built up from `angleInterpolation` and slowly decayed each frame. |
| <Link id="m-righthand" /><code>{"private Transform rightHand"}</code> | Right hand transform. Not used by this code. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Each frame while the head is active, moves the body to sit below the head and eases its rotation toward the head's heading, tilting it as the head lowers. The first time, it also makes the copy of the body. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Turns shadow casting and receiving on for the body renderer. |

</details>
