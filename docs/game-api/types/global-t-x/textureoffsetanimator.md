---
title: "TextureOffsetAnimator"
description: "Scrolls a material's main texture offset over time on a renderer, using its own copy of the material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextureOffsetAnimator

A **class** in `Root.Township`, no namespace.

Scrolls a material's main texture offset over time on a renderer, using its own copy of the material.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"TextureOffsetAnimator()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instanciatedmaterial" /><code>{"private Material instanciatedMaterial"}</code> | The material copy being animated. |
| <Link id="m-materialtoanimate" /><code>{"private Material materialToAnimate"}</code> | Source material that gets copied. |
| <Link id="m-offsetanimationpersecond" /><code>{"private Vector2 offsetAnimationPerSecond"}</code> | Texture offset change per second. |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | Renderer given the copied material. |

</details>

## Methods

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Copies the material and puts the copy on the target renderer. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Moves the texture offset by `offsetAnimationPerSecond` times the frame time. |

</details>
