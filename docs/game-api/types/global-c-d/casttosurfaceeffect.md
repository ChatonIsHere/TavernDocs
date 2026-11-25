---
title: "CastToSurfaceEffect"
description: "class CastToSurfaceEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CastToSurfaceEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`DestroyByTime`](/game-api/types/global-c-d/destroybytime), [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CastToSurfaceEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-castdirection" /><code>{"private Vector3 castDirection"}</code> |  |
| <Link id="m-castdistance" /><code>{"private float castDistance"}</code> |  |
| <Link id="m-groundlayers" /><code>{"private LayerMask groundLayers"}</code> |  |
| <Link id="m-groundparticle" /><code>{"private GameObject groundParticle"}</code> |  |
| <Link id="m-iscasting" /><code>{"private bool isCasting"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-casttoground" /><code>{"private void CastToGround("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
| <Link id="m-storecasted" /><code>{"private void StoreCasted("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
