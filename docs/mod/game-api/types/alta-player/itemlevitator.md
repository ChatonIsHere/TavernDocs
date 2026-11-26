---
title: "ItemLevitator"
description: "Makes a pickup float in place when it is let go: it drifts to a stop and then bobs up and down."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ItemLevitator

A **class** in `Root.Township`, `Alta.Progression.Skills`.

Makes a pickup float in place when it is let go: it drifts to a stop and then bobs up and down. Stops when picked up, docked or destroyed.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemLevitator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatehover" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" animateHover"}</code> | <span className="api-desc">Handle for the registered hover update.</span> |
| <Link id="m-hoverposition" /><code>{"private Vector3 hoverPosition"}</code> | <span className="api-desc">Centre point of the hover.</span> |
| <Link id="m-hoverspeed" /><code>{"private float hoverSpeed"}</code> | <span className="api-desc">Speed of the bob (default 0.5).</span> |
| <Link id="m-hoverstrength" /><code>{"private float hoverStrength"}</code> | <span className="api-desc">Height of the bob (default 0.03).</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The pickup on this object.</span> |
| <Link id="m-randomstartoffset" /><code>{"private float randomStartOffset"}</code> | <span className="api-desc">Random phase so items do not bob in step.</span> |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | <span className="api-desc">Drift velocity left over from when the item was released.</span> |
| <Link id="m-velocitydrag" /><code>{"private float velocityDrag"}</code> | <span className="api-desc">How fast the drift slows (default 1).</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-checkhover" /><code>{"event "}<Link to="/mod/game-api/types/global-q-r/refbooldelegate">{"RefBoolDelegate"}</Link>{" CheckHover"}</code> | <span className="api-desc">Raised with a ref bool before hovering starts; any handler can set it false to stop the hover.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stophovering-4" /><code>{"void StopHovering()"}</code> | <span className="api-desc">Stops the hover update. It does not turn kinematic back off.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatehover-2" /><code>{"private void AnimateHover()"}</code> | <span className="api-desc">Late update: slows the pickup's drift to a stop, then bobs it on a sine wave.</span> |
| <Link id="m-checkstarthovering" /><code>{"private void CheckStartHovering("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Starts hovering if every `CheckHover` handler allows it. Runs on start and when the pickup is let go.</span> |
| <Link id="m-ensurenotdocked" /><code>{"private void EnsureNotDocked(ref bool isValid)"}</code> | <span className="api-desc">`CheckHover` handler that blocks hovering while the pickup is docked.</span> |
| <Link id="m-ensurenotinteractedwith" /><code>{"private void EnsureNotInteractedWith(ref bool isValid)"}</code> | <span className="api-desc">`CheckHover` handler that blocks hovering while the pickup is held.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Hooks the pickup's grab, dock, release and destroy events and tries to start hovering.</span> |
| <Link id="m-starthovering" /><code>{"private void StartHovering()"}</code> | <span className="api-desc">Keeps the pickup's velocity, makes its rigidbody kinematic and starts the hover update.</span> |
| <Link id="m-stophovering" /><code>{"private void StopHovering("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Stops the hover update. It does not turn kinematic back off.</span> |
| <Link id="m-stophovering-2" /><code>{"private void StopHovering("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Stops the hover update. It does not turn kinematic back off.</span> |
| <Link id="m-stophovering-3" /><code>{"private void StopHovering("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Stops the hover update. It does not turn kinematic back off.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ItemLevitator`:

<div className="api-used-in">

[`ItemLevitatorExtension.levitator`](/mod/game-api/types/alta-player/itemlevitatorextension#m-levitator), [`RemoteObiturator.levitator`](/mod/game-api/types/alta-customization/remoteobiturator#m-levitator).

</div>
