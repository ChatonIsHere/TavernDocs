---
title: "TransformScriptAnimation"
description: "Base for simple code-driven transform animations that tick through the budgeted update module."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TransformScriptAnimation

An **abstract class** in `Root.Township`, the global namespace.

Base for simple code-driven transform animations that tick through the budgeted update module. By default they don't run on a dedicated server.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`RotateOverTime`](/mod/game-api/types/alta-utilities/rotateovertime), [`AnimateScaleOverTime`](/mod/game-api/types/global-a-b/animatescaleovertime)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected TransformScriptAnimation()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-animatingtransform" /><code>{"protected Transform animatingTransform"}</code> | <span className="api-desc">The transform being animated, cached from this object.</span> |

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-autostart" /><code>{"private bool autoStart"}</code> | <span className="api-desc">When true, the animation starts in `Start` if it is allowed to run.</span> |
| <Link id="m-isallowedtorun" /><code>{"private bool isAllowedToRun"}</code> | <span className="api-desc">Set in `Start`: false on a dedicated server when `isDisabledOnServer` is on. Note it stays false (never auto-starts) when `isDisabledOnServer` is off.</span> |
| <Link id="m-isdisabledonserver" /><code>{"private bool isDisabledOnServer"}</code> | <span className="api-desc">When true (default), the animation does not run on a server unless it is a local test.</span> |
| <Link id="m-updater" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updater"}</code> | <span className="api-desc">Handle for the budgeted update callback while animating.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"bool IsActive { get; private set; }"}</code> | <span className="api-desc">True while the animation is registered for updates.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-animateonce" /><code>{"async void AnimateOnce()"}</code> | <span className="api-desc">Restarts the animation and stops it again after `GetLengthOfAnimationInSeconds`.</span> |
| <Link id="m-getlengthofanimationinseconds" /><code>{"virtual float GetLengthOfAnimationInSeconds()"}</code> | <span className="api-desc">Length of one run, used by `AnimateOnce`. Returns 0 unless overridden.</span> |
| <Link id="m-resetstate" /><code>{"virtual void ResetState()"}</code> | <span className="api-desc">Called when the animation stops, to put the transform back. Does nothing unless overridden.</span> |
| <Link id="m-startanimating" /><code>{"void StartAnimating()"}</code> | <span className="api-desc">Registers `UpdateAnimation` with the budgeted updater if not already running.</span> |
| <Link id="m-stopanimating" /><code>{"void StopAnimating()"}</code> | <span className="api-desc">Unregisters the update and calls `ResetState`.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Works out whether it may run on this side and starts animating if auto start is on.</span> |
| <Link id="m-updateanimation" /><code>{"protected abstract void UpdateAnimation()"}</code> | <span className="api-desc">Called each budgeted update while active. Subclasses move the transform here.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Stops the animation so its update is deregistered.</span> |

</details>
