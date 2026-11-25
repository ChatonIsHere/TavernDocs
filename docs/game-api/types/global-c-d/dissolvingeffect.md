---
title: "DissolvingEffect"
description: "class DissolvingEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DissolvingEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`DestroyByTime`](/game-api/types/global-c-d/destroybytime), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DissolvingEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentmaterial" /><code>{"private Material currentMaterial"}</code> |  |
| <Link id="m-dissolveid" /><code>{"private static readonly int dissolveID"}</code> |  |
| <Link id="m-dissolvematerial" /><code>{"private Material dissolveMaterial"}</code> |  |
| <Link id="m-dissolveprogress" /><code>{"private AnimationCurve dissolveProgress"}</code> |  |
| <Link id="m-isdissolving" /><code>{"private bool isDissolving"}</code> |  |
| <Link id="m-renderers" /><code>{"private MeshRenderer[] renderers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-destroy" /><code>{"protected override IEnumerator Destroy() (iterator)"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
