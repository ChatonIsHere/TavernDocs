---
title: "TransformScriptAnimation"
description: "abstract class TransformScriptAnimation in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformScriptAnimation

An **abstract class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RotateOverTime`](/game-api/types/alta-utilities/rotateovertime), [`AnimateScaleOverTime`](/game-api/types/global-a-b/animatescaleovertime)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TransformScriptAnimation()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animatingtransform" /><code>{"protected Transform animatingTransform"}</code> |  |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> |  |
| <Link id="m-isallowedtorun" /><code>{"private bool isAllowedToRun"}</code> |  |
| <Link id="m-isdisabledonserver" /><code>{"private bool isDisabledOnServer"}</code> |  |
| <Link id="m-updater" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updater"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animateonce" /><code>{"async void AnimateOnce()"}</code> |  |
| <Link id="m-getlengthofanimationinseconds" /><code>{"virtual float GetLengthOfAnimationInSeconds()"}</code> |  |
| <Link id="m-resetstate" /><code>{"virtual void ResetState()"}</code> |  |
| <Link id="m-startanimating" /><code>{"void StartAnimating()"}</code> |  |
| <Link id="m-stopanimating" /><code>{"void StopAnimating()"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> |  |
| <Link id="m-updateanimation" /><code>{"protected abstract void UpdateAnimation()"}</code> |  |
