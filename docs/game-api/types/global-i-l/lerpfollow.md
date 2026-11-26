---
title: "LerpFollow"
description: "Smoothly moves this object toward a target Transform's position."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpFollow

A **class** in `Root.Township`, no namespace.

Smoothly moves this object toward a target `Transform`'s position. The movement is in `LerpFollowBase`.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`LerpFollowBase<Transform>`](/game-api/types/global-i-l/lerpfollowbase-t)
- **Derived types** [`PooledLerpFollow`](/game-api/types/global-p/pooledlerpfollow), [`TrailRendererLerpFollow`](/game-api/types/global-t-x/trailrendererlerpfollow)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LerpFollow()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Backing field for `Target`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target-2" /><code>{"override Transform Target { get; }"}</code> | The transform being followed. |
| <Link id="m-targetposition" /><code>{"protected override Vector3 TargetPosition { get; }"}</code> | The target's world position. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"override void SetTarget(Transform target)"}</code> | Sets the transform to follow. |

## Used in

Members of other types that take, return or hold a `LerpFollow`:

[`CharacterLocalityController.voiceChatFollow`](/game-api/types/alta-player/characterlocalitycontroller#m-voicechatfollow), [`TrailLerper.lerpers`](/game-api/types/global-t-x/traillerper#m-lerpers).
