---
title: "ParticleMeshReplacePooledObject"
description: "class ParticleMeshReplacePooledObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ParticleMeshReplacePooledObject

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`MeshReplacePooledObject`](/game-api/types/global-m-o/meshreplacepooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ParticleMeshReplacePooledObject()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-releaseroutine" /><code>{"private "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" releaseRoutine"}</code> |  |
| <Link id="m-releasetime" /><code>{"private float releaseTime"}</code> |  |
| <Link id="m-renderers" /><code>{"private ParticleSystemRenderer[] renderers"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"override void Setup(Mesh mesh, Material material)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-delayedrelease" /><code>{"private IEnumerator DelayedRelease(float releaseTime) (iterator)"}</code> |  |
| <Link id="m-delayrelease" /><code>{"private void DelayRelease("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
