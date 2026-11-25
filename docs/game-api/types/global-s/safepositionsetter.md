---
title: "SafePositionSetter"
description: "class SafePositionSetter in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SafePositionSetter

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-animationduration" /><code>{"private float animationDuration"}</code> |
| <Link id="m-animationupdate" /><code>{"private "}<Link to="/game-api/types/global-e-h/floatevent">{"FloatEvent"}</Link>{" animationUpdate"}</code> |
| <Link id="m-currentsafepositionsetter" /><code>{"private static "}<Link to="/game-api/types/global-s/safepositionsetter">{"SafePositionSetter"}</Link>{" currentSafePositionSetter"}</code> |
| <Link id="m-onbecameactive" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameActive"}</code> |
| <Link id="m-onbecameinactive" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" onBecameInactive"}</code> |
| <Link id="m-progress" /><code>{"private float progress"}</code> |
| <Link id="m-progressanimation" /><code>{"private Coroutine progressAnimation"}</code> |
| <Link id="m-syncactivated" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncActivated"}</code> |
| <Link id="m-syncposition" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPosition"}</code> |
| <Link id="m-target" /><code>{"private Transform target"}</code> |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-setsafeposition" /><code>{"void SetSafePosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |

<details>
<summary>7 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-animate" /><code>{"private IEnumerator Animate() (iterator)"}</code> |
| <Link id="m-checkfordisable" /><code>{"private void CheckForDisable("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" obj)"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |
| <Link id="m-syncactivated-2" /><code>{"private void SyncActivated("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-syncposition-2" /><code>{"private void SyncPosition("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |
| <Link id="m-updateascurrent" /><code>{"private void UpdateAsCurrent(bool isCurrent, bool withAnimation = true)"}</code> |

</details>
