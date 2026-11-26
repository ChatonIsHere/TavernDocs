---
title: "DrawBridgeRangeLogic"
description: "Networked drawbridge that sets a target transform's Z angle between two saved angles from a 0 to 1 progress value, optionally easing towards it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DrawBridgeRangeLogic

A **class** in `Root.Township`, the global namespace.

Networked drawbridge that sets a target transform's Z angle between two saved angles from a 0 to 1 progress value, optionally easing towards it. The server syncs the progress.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<DrawBridgeRangeLogicSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<DrawBridgeRangeLogicSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase), [`IPointTowards`](/mod/game-api/types/global-i-l/ipointtowards)
- **Derived types** [`DrawBridgeRangeLogicSaveData`](/mod/game-api/types/global-c-d/drawbridgerangelogicsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DrawBridgeRangeLogic()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | Progress currently shown. |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> | Whether progress eases towards the target instead of jumping. |
| <Link id="m-lerpingrotation" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" lerpingRotation"}</code> | Handle of the registered per-frame lerp, null when not easing. |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | Progress per second when easing. |
| <Link id="m-saved" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/drawbridgerangelogicsavedata">{"DrawBridgeRangeLogicSaveData"}</Link>{" saved"}</code> | Save data holding the two angles. |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | Method sync for the target progress. |
| <Link id="m-target" /><code>{"private Transform target"}</code> | Transform that is rotated. |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> | Progress to reach, set by `SetProgress` or a sync. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angle0" /><code>{"float Angle0 { get; set; }"}</code> | Angle in degrees at progress 0, stored in the save data. |
| <Link id="m-angle1" /><code>{"float Angle1 { get; set; }"}</code> | Angle in degrees at progress 1, stored in the save data. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ipointtowards-origin" /><code>{"private Vector3 IPointTowards.Origin { get; }"}</code> | World position of the rotated target. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the method sync for the progress. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Sends the target progress to a joining player. |
| <Link id="m-setprogress" /><code>{"void SetProgress(float progress)"}</code> | Sets the target progress, applies it now or starts easing, and on the server syncs it to the chunks. |

<details>
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerprotation" /><code>{"private void LerpRotation()"}</code> | Per-frame update that moves the current progress towards the target and stops when close. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Removes the per-frame lerp update. |
| <Link id="m-pointtowards" /><code>{"private void IPointTowards.PointTowards(Vector3 target)"}</code> | Sets `Angle0` so the target points at a world position and applies the rotation. |
| <Link id="m-setrotation" /><code>{"private void SetRotation()"}</code> | Applies the current progress as a rotation around local Z on the target. |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Sends the target progress from the server only, packed as a 0 to 1 float. |

</details>
