---
title: "LerpFollow"
description: "Smoothly moves this object toward a target Transform's position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpFollow

A **class** in `Root.Township`, the global namespace.

Smoothly moves this object toward a target `Transform`'s position. The movement is in `LerpFollowBase`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`LerpFollowBase<Transform>`](/mod/game-api/types/global-i-l/lerpfollowbase-t)
- **Derived types** [`PooledLerpFollow`](/mod/game-api/types/global-p/pooledlerpfollow), [`TrailRendererLerpFollow`](/mod/game-api/types/global-t-x/trailrendererlerpfollow)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LerpFollow()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Backing field for `Target`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target-2" /><code>{"override Transform Target { get; }"}</code> | <span className="api-desc">The transform being followed.</span> |
| <Link id="m-targetposition" /><code>{"protected override Vector3 TargetPosition { get; }"}</code> | <span className="api-desc">The target's world position.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"override void SetTarget(Transform target)"}</code> | <span className="api-desc">Sets the transform to follow.</span> |

## Used in

Members of other types that take, return or hold a `LerpFollow`:

<div className="api-used-in">

[`CharacterLocalityController.voiceChatFollow`](/mod/game-api/types/alta-player/characterlocalitycontroller#m-voicechatfollow), [`TrailLerper.lerpers`](/mod/game-api/types/global-t-x/traillerper#m-lerpers).

</div>
