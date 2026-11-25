---
title: "DurabilityStateChangeEffect"
description: "class DurabilityStateChangeEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DurabilityStateChangeEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DurabilityStateChangeEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |  |
| <Link id="m-tricut" /><code>{"private static readonly int _TriCut"}</code> |  |
| <Link id="m-androidparticledefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" androidParticleDefinition"}</code> |  |
| <Link id="m-animationprogress" /><code>{"private "}<Link to="/game-api/types/global-c-d/durationcurve">{"DurationCurve"}</Link>{" animationProgress"}</code> |  |
| <Link id="m-animationroutine" /><code>{"private Coroutine animationRoutine"}</code> |  |
| <Link id="m-currentmaterial" /><code>{"private Material currentMaterial"}</code> |  |
| <Link id="m-filtertoset" /><code>{"private MeshFilter filterToSet"}</code> |  |
| <Link id="m-particledefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" particleDefinition"}</code> |  |
| <Link id="m-particleeffectdelay" /><code>{"private float particleEffectDelay"}</code> |  |
| <Link id="m-particlesystem" /><code>{"private "}<Link to="/game-api/types/global-p/pooledparticlesystemmeshemision">{"PooledParticleSystemMeshEmision"}</Link>{" particleSystem"}</code> |  |
| <Link id="m-progresstofullness" /><code>{"private AnimationCurve progressToFullness"}</code> |  |
| <Link id="m-renderertoanimate" /><code>{"private MeshRenderer rendererToAnimate"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-particledefinition-2" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" ParticleDefinition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-setmesh" /><code>{"void SetMesh(Renderer renderer)"}</code> |  |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-cleanup" /><code>{"private void CleanUp("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-getparticles" /><code>{"private void GetParticles()"}</code> |  |
| <Link id="m-onrequested" /><code>{"private void OnRequested("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-setmaterial" /><code>{"private void SetMaterial(float progress)"}</code> |  |
