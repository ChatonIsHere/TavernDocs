---
title: "SafePositionSetter"
description: "A networked marker that, when triggered, sets a player's fall-recovery safe position to its target point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SafePositionSetter

A **class** in `Root.Township`, no namespace.

A networked marker that, when triggered, sets a player's fall-recovery safe position to its target point. Only one is current per client; becoming current or not fires events and animates a 0 to 1 progress.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<SafePositionSetterData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<SafePositionSetterData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SafePositionSetterData`](/game-api/types/global-s/safepositionsetterdata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SafePositionSetter()"}</code> |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | Seconds the progress animation takes. Default 2. |
| <Link id="m-animationupdate" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" animationUpdate"}</code> | Float event fired with the progress value during the animation. |
| <Link id="m-currentsafepositionsetter" /><code>{"private static "}<Link to="/game-api/types/global-s/safepositionsetter">{"SafePositionSetter"}</Link>{" currentSafePositionSetter"}</code> | The setter that last set the local player's safe position, if still active. |
| <Link id="m-onbecameactive" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameActive"}</code> | Event fired when this becomes the current setter. |
| <Link id="m-onbecameinactive" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameInactive"}</code> | Event fired when this stops being the current setter. |
| <Link id="m-progress" /><code>{"private float progress"}</code> | Current animation progress from 0 to 1. |
| <Link id="m-progressanimation" /><code>{"private Coroutine progressAnimation"}</code> | The running `Animate` coroutine, if any. |
| <Link id="m-syncactivated" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivated"}</code> | Method sync the server uses to tell a client to apply the safe position. |
| <Link id="m-syncposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPosition"}</code> | Method sync for the target's offset. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform marking the safe position. Its local position is saved and synced. |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> | Progress the animation is heading to: 1 when current, 0 when not. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the activation and position method syncs. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the target's offset to a joining player. |
| <Link id="m-setsafeposition" /><code>{"void SetSafePosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | For a remote player the server tells their client to run it. For the local player, sets their smooth locomotion safe position to the target if the chunk allows it. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> | Client: coroutine that moves `progress` toward `targetProgress` over `animationDuration` and fires `animationUpdate` each frame. |
| <Link id="m-checkfordisable" /><code>{"private void CheckForDisable("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" obj)"}</code> | When the local player changes chunk and the chunk no longer overrides the safe position, makes this setter inactive. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | If this is the current setter, marks it inactive and clears the static current setter. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws a line and sphere to the target point. |
| <Link id="m-syncactivated-2" /><code>{"private void SyncActivated("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Client: on receiving the activation message, sets the safe position for the local player. |
| <Link id="m-syncposition-2" /><code>{"private void SyncPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Syncs the target's local position, within 10 units on each axis. |
| <Link id="m-updateascurrent" /><code>{"private void UpdateAsCurrent(bool isCurrent, bool withAnimation = true)"}</code> | Makes this the current setter or clears it, fires the matching event and starts the progress animation. |

</details>
