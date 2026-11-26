---
title: "SafePositionSetter"
description: "A networked marker that, when triggered, sets a player's fall-recovery safe position to its target point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SafePositionSetter

A **class** in `Root.Township`, the global namespace.

A networked marker that, when triggered, sets a player's fall-recovery safe position to its target point. Only one is current per client; becoming current or not fires events and animates a 0 to 1 progress.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<SafePositionSetterData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<SafePositionSetterData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`SafePositionSetterData`](/mod/game-api/types/global-s/safepositionsetterdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SafePositionSetter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> | <span className="api-desc">Seconds the progress animation takes. Default 2.</span> |
| <Link id="m-animationupdate" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" animationUpdate"}</code> | <span className="api-desc">Float event fired with the progress value during the animation.</span> |
| <Link id="m-currentsafepositionsetter" /><code>{"private static "}<Link to="/mod/game-api/types/global-s/safepositionsetter">{"SafePositionSetter"}</Link>{" currentSafePositionSetter"}</code> | <span className="api-desc">The setter that last set the local player's safe position, if still active.</span> |
| <Link id="m-onbecameactive" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameActive"}</code> | <span className="api-desc">Event fired when this becomes the current setter.</span> |
| <Link id="m-onbecameinactive" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameInactive"}</code> | <span className="api-desc">Event fired when this stops being the current setter.</span> |
| <Link id="m-progress" /><code>{"private float progress"}</code> | <span className="api-desc">Current animation progress from 0 to 1.</span> |
| <Link id="m-progressanimation" /><code>{"private Coroutine progressAnimation"}</code> | <span className="api-desc">The running `Animate` coroutine, if any.</span> |
| <Link id="m-syncactivated" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivated"}</code> | <span className="api-desc">Method sync the server uses to tell a client to apply the safe position.</span> |
| <Link id="m-syncposition" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPosition"}</code> | <span className="api-desc">Method sync for the target's offset.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform marking the safe position. Its local position is saved and synced.</span> |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> | <span className="api-desc">Progress the animation is heading to: 1 when current, 0 when not.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the activation and position method syncs.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the target's offset to a joining player.</span> |
| <Link id="m-setsafeposition" /><code>{"void SetSafePosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">For a remote player the server tells their client to run it. For the local player, sets their smooth locomotion safe position to the target if the chunk allows it.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> | <span className="api-desc">Client: coroutine that moves `progress` toward `targetProgress` over `animationDuration` and fires `animationUpdate` each frame.</span> |
| <Link id="m-checkfordisable" /><code>{"private void CheckForDisable("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" obj)"}</code> | <span className="api-desc">When the local player changes chunk and the chunk no longer overrides the safe position, makes this setter inactive.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">If this is the current setter, marks it inactive and clears the static current setter.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: draws a line and sphere to the target point.</span> |
| <Link id="m-syncactivated-2" /><code>{"private void SyncActivated("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Client: on receiving the activation message, sets the safe position for the local player.</span> |
| <Link id="m-syncposition-2" /><code>{"private void SyncPosition("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Syncs the target's local position, within 10 units on each axis.</span> |
| <Link id="m-updateascurrent" /><code>{"private void UpdateAsCurrent(bool isCurrent, bool withAnimation = true)"}</code> | <span className="api-desc">Makes this the current setter or clears it, fires the matching event and starts the progress animation.</span> |

</details>
