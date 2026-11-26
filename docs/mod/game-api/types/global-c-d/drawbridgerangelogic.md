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
| <Link id="m-ctor" /><code>{"DrawBridgeRangeLogic()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>8 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"private float currentProgress"}</code> | <span className="api-desc">Progress currently shown.</span> |
| <Link id="m-islerping" /><code>{"private bool isLerping"}</code> | <span className="api-desc">Whether progress eases towards the target instead of jumping.</span> |
| <Link id="m-lerpingrotation" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" lerpingRotation"}</code> | <span className="api-desc">Handle of the registered per-frame lerp, null when not easing.</span> |
| <Link id="m-lerpspeed" /><code>{"private float lerpSpeed"}</code> | <span className="api-desc">Progress per second when easing.</span> |
| <Link id="m-saved" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/drawbridgerangelogicsavedata">{"DrawBridgeRangeLogicSaveData"}</Link>{" saved"}</code> | <span className="api-desc">Save data holding the two angles.</span> |
| <Link id="m-sync" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" sync"}</code> | <span className="api-desc">Method sync for the target progress.</span> |
| <Link id="m-target" /><code>{"private Transform target"}</code> | <span className="api-desc">Transform that is rotated.</span> |
| <Link id="m-targetprogress" /><code>{"private float targetProgress"}</code> | <span className="api-desc">Progress to reach, set by `SetProgress` or a sync.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-angle0" /><code>{"float Angle0 { get; set; }"}</code> | <span className="api-desc">Angle in degrees at progress 0, stored in the save data.</span> |
| <Link id="m-angle1" /><code>{"float Angle1 { get; set; }"}</code> | <span className="api-desc">Angle in degrees at progress 1, stored in the save data.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ipointtowards-origin" /><code>{"private Vector3 IPointTowards.Origin { get; }"}</code> | <span className="api-desc">World position of the rotated target.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the method sync for the progress.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Sends the target progress to a joining player.</span> |
| <Link id="m-setprogress" /><code>{"void SetProgress(float progress)"}</code> | <span className="api-desc">Sets the target progress, applies it now or starts easing, and on the server syncs it to the chunks.</span> |

<details className="api-private">
<summary>5 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-lerprotation" /><code>{"private void LerpRotation()"}</code> | <span className="api-desc">Per-frame update that moves the current progress towards the target and stops when close.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Removes the per-frame lerp update.</span> |
| <Link id="m-pointtowards" /><code>{"private void IPointTowards.PointTowards(Vector3 target)"}</code> | <span className="api-desc">Sets `Angle0` so the target points at a world position and applies the rotation.</span> |
| <Link id="m-setrotation" /><code>{"private void SetRotation()"}</code> | <span className="api-desc">Applies the current progress as a rotation around local Z on the target.</span> |
| <Link id="m-sync-2" /><code>{"private void Sync("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Sends the target progress from the server only, packed as a 0 to 1 float.</span> |

</details>
