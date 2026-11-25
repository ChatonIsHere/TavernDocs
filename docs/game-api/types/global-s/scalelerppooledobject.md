---
title: "ScaleLerpPooledObject"
description: "class ScaleLerpPooledObject in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ScaleLerpPooledObject

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Derived types** [`NameBoard`](/game-api/types/alta-player/nameboard), [`QuickAccessMenuBubble`](/game-api/types/alta-player/quickaccessmenububble), [`QuickAccessSettingsBoard`](/game-api/types/alta-player/quickaccesssettingsboard)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ScaleLerpPooledObject()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-fadespeed" /><code>{"private float fadeSpeed"}</code> |  |
| <Link id="m-scale" /><code>{"private "}<Link to="/game-api/types/alta-utilities/lerpingfloatvalue">{"LerpingFloatValue"}</Link>{" scale"}</code> |  |
| <Link id="m-startsize" /><code>{"private float startSize"}</code> |  |
| <Link id="m-update" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" update"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isalwaysupdating" /><code>{"protected virtual bool IsAlwaysUpdating { get; }"}</code> |  |
| <Link id="m-isreleasing" /><code>{"protected bool IsReleasing { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-release" /><code>{"override void Release()"}</code> |  |
| <Link id="m-animatestart" /><code>{"private void AnimateStart("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-fadefinished" /><code>{"protected virtual void FadeFinished()"}</code> |  |
| <Link id="m-lerp" /><code>{"protected void Lerp(float target, float speed)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-updatelerp" /><code>{"protected virtual void UpdateLerp()"}</code> |  |
