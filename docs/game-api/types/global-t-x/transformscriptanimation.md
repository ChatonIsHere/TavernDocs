---
title: "TransformScriptAnimation"
description: "Base for simple code-driven transform animations that tick through the budgeted update module."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformScriptAnimation

An **abstract class** in `Root.Township`, no namespace.

Base for simple code-driven transform animations that tick through the budgeted update module. By default they don't run on a dedicated server.

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
| <Link id="m-animatingtransform" /><code>{"protected Transform animatingTransform"}</code> | The transform being animated, cached from this object. |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> |  |
| <Link id="m-isallowedtorun" /><code>{"private bool isAllowedToRun"}</code> |  |
| <Link id="m-isdisabledonserver" /><code>{"private bool isDisabledOnServer"}</code> |  |
| <Link id="m-updater" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updater"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | True while the animation is registered for updates. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animateonce" /><code>{"async void AnimateOnce()"}</code> | Restarts the animation and stops it again after `GetLengthOfAnimationInSeconds`. |
| <Link id="m-getlengthofanimationinseconds" /><code>{"virtual float GetLengthOfAnimationInSeconds()"}</code> | Length of one run, used by `AnimateOnce`. Returns 0 unless overridden. |
| <Link id="m-resetstate" /><code>{"virtual void ResetState()"}</code> | Called when the animation stops, to put the transform back. Does nothing unless overridden. |
| <Link id="m-startanimating" /><code>{"void StartAnimating()"}</code> | Registers `UpdateAnimation` with the budgeted updater if not already running. |
| <Link id="m-stopanimating" /><code>{"void StopAnimating()"}</code> | Unregisters the update and calls `ResetState`. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Works out whether it may run on this side and starts animating if auto start is on. |
| <Link id="m-updateanimation" /><code>{"protected abstract void UpdateAnimation()"}</code> | Called each budgeted update while active. Subclasses move the transform here. |
