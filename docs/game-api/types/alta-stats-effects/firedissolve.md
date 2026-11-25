---
title: "FireDissolve"
description: "class FireDissolve in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# FireDissolve

A **class** in `Root.Township`, `Alta.Heat`.

- **Listed in** [Stats, effects, heat and liquid](/game-api/types/alta-stats-effects)
- **Inherits or implements** [`Fire`](/game-api/types/alta-stats-effects/fire), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FireDissolve()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |
| <Link id="m-burningmaterial" /><code>{"private Material burningMaterial"}</code> |
| <Link id="m-material" /><code>{"private Material material"}</code> |
| <Link id="m-progresscurve" /><code>{"private AnimationCurve progressCurve"}</code> |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-renderers-2" /><code>{"MeshRenderer[] Renderers { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-light" /><code>{"protected override void Light()"}</code> |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> |
| <Link id="m-setprogress" /><code>{"protected override void SetProgress(float progress)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |

</details>
