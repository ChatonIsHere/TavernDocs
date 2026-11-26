---
title: "DrawBridgeRangeLogic"
description: "class DrawBridgeRangeLogic in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DrawBridgeRangeLogic

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DrawBridgeRangeLogicSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<DrawBridgeRangeLogicSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase), [`IPointTowards`](/game-api/types/global-i-l/ipointtowards)
- **Derived types** [`DrawBridgeRangeLogicSaveData`](/game-api/types/global-c-d/drawbridgerangelogicsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"DrawBridgeRangeLogic()"}</code> |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> |
| <Link id="m-lerpingrotation" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" lerpingRotation"}</code> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> |
| <Link id="m-saved" /><code>{"private "}<Link to="/game-api/types/global-c-d/drawbridgerangelogicsavedata">{"DrawBridgeRangeLogicSaveData"}</Link>{" saved"}</code> |
| <Link id="m-sync" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> |
| <Link id="m-target" /><code>{"private Transform target"}</code> |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-angle0" /><code>{"float Angle0 { get; set; }"}</code> |
| <Link id="m-angle1" /><code>{"float Angle1 { get; set; }"}</code> |

<details>
<summary>1 private and internal property</summary>

| Member |
| --- |
| <Link id="m-ipointtowards-origin" /><code>{"private Vector3 IPointTowards.Origin { get; }"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |
| <Link id="m-setprogress" /><code>{"void SetProgress(float progress)"}</code> |

<details>
<summary>5 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-lerprotation" /><code>{"private void LerpRotation()"}</code> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |
| <Link id="m-pointtowards" /><code>{"private void IPointTowards.PointTowards(Vector3 target)"}</code> |
| <Link id="m-setrotation" /><code>{"private void SetRotation()"}</code> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |

</details>
