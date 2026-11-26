---
title: "DissolvingEffect"
description: "A DestroyByTime pooled object whose renderers dissolve with a shader over its lifetime before it is released."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DissolvingEffect

A **class** in `Root.Township`, the global namespace.

A `DestroyByTime` pooled object whose renderers dissolve with a shader over its lifetime before it is released. Client visual.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`DestroyByTime`](/mod/game-api/types/global-c-d/destroybytime), [`IBuildRendererPostBake`](/mod/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DissolvingEffect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentmaterial" /><code>{"private Material currentMaterial"}</code> | <span className="api-desc">This instance's copy of the dissolve material.</span> |
| <Link id="m-dissolveid" /><code>{"private static readonly int dissolveID"}</code> | <span className="api-desc">Shader property ID for `_Progress`.</span> |
| <Link id="m-dissolvematerial" /><code>{"private Material dissolveMaterial"}</code> | <span className="api-desc">Material to copy for the dissolve.</span> |
| <Link id="m-dissolveprogress" /><code>{"private AnimationCurve dissolveProgress"}</code> | <span className="api-desc">Curve from lifetime (0 to 1) to dissolve amount.</span> |
| <Link id="m-isdissolving" /><code>{"private bool isDissolving"}</code> | <span className="api-desc">Whether there are renderers to dissolve; set at build time.</span> |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> | <span className="api-desc">Renderers that get the dissolve material.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | <span className="api-desc">If dissolving, gives the renderers a copy of the dissolve material and resets it each time the object is taken from the pool.</span> |
| <Link id="m-destroy" /><code>{"protected override IEnumerator Destroy() (iterator)"}</code> | <span className="api-desc">Runs the dissolve along `dissolveProgress` over `Time`, or just waits, then releases.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> | <span className="api-desc">At build time, drops null renderers and turns dissolving on only if any are left.</span> |

</details>
