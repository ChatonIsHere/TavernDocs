---
title: "DissolvingEffect"
description: "A DestroyByTime pooled object whose renderers dissolve with a shader over its lifetime before it is released."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DissolvingEffect

A **class** in `Root.Township`, no namespace.

A `DestroyByTime` pooled object whose renderers dissolve with a shader over its lifetime before it is released. Client visual.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`DestroyByTime`](/game-api/types/global-c-d/destroybytime), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DissolvingEffect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentmaterial" /><code>{"private Material currentMaterial"}</code> | This instance's copy of the dissolve material. |
| <Link id="m-dissolveid" /><code>{"private static readonly int dissolveID"}</code> | Shader property ID for `_Progress`. |
| <Link id="m-dissolvematerial" /><code>{"private Material dissolveMaterial"}</code> | Material to copy for the dissolve. |
| <Link id="m-dissolveprogress" /><code>{"private AnimationCurve dissolveProgress"}</code> | Curve from lifetime (0 to 1) to dissolve amount. |
| <Link id="m-isdissolving" /><code>{"private bool isDissolving"}</code> | Whether there are renderers to dissolve; set at build time. |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> | Renderers that get the dissolve material. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | If dissolving, gives the renderers a copy of the dissolve material and resets it each time the object is taken from the pool. |
| <Link id="m-destroy" /><code>{"protected override IEnumerator Destroy() (iterator)"}</code> | Runs the dissolve along `dissolveProgress` over `Time`, or just waits, then releases. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | At build time, drops null renderers and turns dissolving on only if any are left. |

</details>
