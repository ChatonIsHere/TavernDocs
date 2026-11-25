---
title: "SteelSongEffect"
description: "class SteelSongEffect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SteelSongEffect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SteelSongEffect()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-colorprogress" /><code>{"protected readonly int _ColorProgress"}</code> |  |
| <Link id="m-progress" /><code>{"protected readonly int _Progress"}</code> |  |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |  |
| <Link id="m-basematerial" /><code>{"private Material baseMaterial"}</code> |  |
| <Link id="m-material" /><code>{"protected Material material"}</code> |  |
| <Link id="m-meshanimation" /><code>{"protected Coroutine meshAnimation"}</code> |  |
| <Link id="m-mesheffectdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" meshEffectDefinition"}</code> |  |
| <Link id="m-mesheffects" /><code>{"private List<"}<Link to="/game-api/types/global-m-o/mesheffect">{"MeshEffect"}</Link>{"> meshEffects"}</code> |  |
| <Link id="m-progress-2" /><code>{"private float progress"}</code> |  |
| <Link id="m-timeprogresstoanimationprogress" /><code>{"private AnimationCurve timeProgressToAnimationProgress"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-remainigtime" /><code>{"float RemainigTime { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initializeeffect" /><code>{"void InitializeEffect(Component component)"}</code> |  |
| <Link id="m-playeffect" /><code>{"void PlayEffect(float duration, float progress)"}</code> |  |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-animate" /><code>{"protected IEnumerator Animate() (iterator)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-cleaneffects" /><code>{"protected void CleanEffects()"}</code> |  |

## Used in

Members of other types that take, return or hold a `SteelSongEffect`:

[`SteelSong.activeEffects`](/game-api/types/global-s/steelsong#m-activeeffects).
