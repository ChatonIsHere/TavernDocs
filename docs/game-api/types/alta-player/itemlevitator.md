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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ItemLevitator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatehover" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" animateHover"}</code> | Handle for the registered hover update. |
| <Link id="m-hoverposition" /><code>{"private Vector3 hoverPosition"}</code> | Centre point of the hover. |
| <Link id="m-hoverspeed" /><code>{"private float hoverSpeed"}</code> | Speed of the bob (default 0.5). |
| <Link id="m-hoverstrength" /><code>{"private float hoverStrength"}</code> | Height of the bob (default 0.03). |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The pickup on this object. |
| <Link id="m-randomstartoffset" /><code>{"private float randomStartOffset"}</code> | Random phase so items do not bob in step. |
| <Link id="m-velocity" /><code>{"private Vector3 velocity"}</code> | Drift velocity left over from when the item was released. |
| <Link id="m-velocitydrag" /><code>{"private float velocityDrag"}</code> | How fast the drift slows (default 1). |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-checkhover" /><code>{"event "}<Link to="/game-api/types/global-q-r/refbooldelegate">{"RefBoolDelegate"}</Link>{" CheckHover"}</code> | Raised with a ref bool before hovering starts; any handler can set it false to stop the hover. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-stophovering-4" /><code>{"void StopHovering()"}</code> | Stops the hover update. It does not turn kinematic back off. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animatehover-2" /><code>{"private void AnimateHover()"}</code> | Late update: slows the pickup's drift to a stop, then bobs it on a sine wave. |
| <Link id="m-checkstarthovering" /><code>{"private void CheckStartHovering("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Starts hovering if every `CheckHover` handler allows it. Runs on start and when the pickup is let go. |
| <Link id="m-ensurenotdocked" /><code>{"private void EnsureNotDocked(ref bool isValid)"}</code> | `CheckHover` handler that blocks hovering while the pickup is docked. |
| <Link id="m-ensurenotinteractedwith" /><code>{"private void EnsureNotInteractedWith(ref bool isValid)"}</code> | `CheckHover` handler that blocks hovering while the pickup is held. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Hooks the pickup's grab, dock, release and destroy events and tries to start hovering. |
| <Link id="m-starthovering" /><code>{"private void StartHovering()"}</code> | Keeps the pickup's velocity, makes its rigidbody kinematic and starts the hover update. |
| <Link id="m-stophovering" /><code>{"private void StopHovering("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Stops the hover update. It does not turn kinematic back off. |
| <Link id="m-stophovering-2" /><code>{"private void StopHovering("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Stops the hover update. It does not turn kinematic back off. |
| <Link id="m-stophovering-3" /><code>{"private void StopHovering("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Stops the hover update. It does not turn kinematic back off. |

</details>

## Used in

Members of other types that take, return or hold a `ItemLevitator`:

[`ItemLevitatorExtension.levitator`](/game-api/types/alta-player/itemlevitatorextension#m-levitator), [`RemoteObiturator.levitator`](/game-api/types/alta-customization/remoteobiturator#m-levitator).
