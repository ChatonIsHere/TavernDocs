---
title: "LerpFollowBase<T>"
description: "abstract class LerpFollowBase<T> in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LerpFollowBase&lt;T&gt;

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`LerpFollow`](/game-api/types/global-i-l/lerpfollow), [`ScaledLerpFollow`](/game-api/types/global-s/scaledlerpfollow)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected LerpFollowBase()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cachedtransform" /><code>{"protected Transform cachedTransform"}</code> |  |
| <Link id="m-isdisabledonserver" /><code>{"private bool isDisabledOnServer"}</code> |  |
| <Link id="m-lerppersecond" /><code>{"private float lerpPerSecond"}</code> |  |
| <Link id="m-oldposition" /><code>{"protected Vector3 oldPosition"}</code> |  |
| <Link id="m-staticupdatemodule" /><code>{"private static "}<Link to="/game-api/types/global-t-x/updatemodule">{"UpdateModule"}</Link>{" staticUpdateModule"}</code> |  |
| <Link id="m-updatemodule" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateModule"}</code> |  |
| <Link id="m-worldoffset" /><code>{"private Vector3 worldOffset"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-target" /><code>{"abstract T Target { get; }"}</code> |  |
| <Link id="m-targetposition" /><code>{"protected abstract Vector3 TargetPosition { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-settarget" /><code>{"virtual void SetTarget(T target)"}</code> |  |
| <Link id="m-start" /><code>{"virtual void Start()"}</code> |  |
| <Link id="m-movementupdate" /><code>{"private void MovementUpdate()"}</code> |  |
| <Link id="m-moving" /><code>{"protected virtual void Moving(Vector3 from, Vector3 to)"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> |  |
