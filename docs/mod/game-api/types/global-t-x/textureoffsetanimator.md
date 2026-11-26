---
title: "TextureOffsetAnimator"
description: "Scrolls a material's main texture offset over time on a renderer, using its own copy of the material."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TextureOffsetAnimator

A **class** in `Root.Township`, the global namespace.

Scrolls a material's main texture offset over time on a renderer, using its own copy of the material.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TextureOffsetAnimator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instanciatedmaterial" /><code>{"private Material instanciatedMaterial"}</code> | <span className="api-desc">The material copy being animated.</span> |
| <Link id="m-materialtoanimate" /><code>{"private Material materialToAnimate"}</code> | <span className="api-desc">Source material that gets copied.</span> |
| <Link id="m-offsetanimationpersecond" /><code>{"private Vector2 offsetAnimationPerSecond"}</code> | <span className="api-desc">Texture offset change per second.</span> |
| <Link id="m-targetrenderer" /><code>{"private Renderer targetRenderer"}</code> | <span className="api-desc">Renderer given the copied material.</span> |

</details>

## Methods

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Copies the material and puts the copy on the target renderer.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Moves the texture offset by `offsetAnimationPerSecond` times the frame time.</span> |

</details>
