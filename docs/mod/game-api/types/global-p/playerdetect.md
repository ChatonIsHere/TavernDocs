---
title: "PlayerDetect"
description: "Server: detects players whose feet are inside a sphere or box around this object and fires events as they enter and leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDetect

A **class** in `Root.Township`, the global namespace.

Server: detects players whose feet are inside a sphere or box around this object and fires events as they enter and leave. Its shape is saved with the object.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerDetectSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerDetectSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerDetectSaveData`](/mod/game-api/types/global-p/playerdetectsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDetect()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boundsize" /><code>{"private Vector3 boundSize"}</code> | <span className="api-desc">Size of the local space box, when `isUsingBounds` is on.</span> |
| <Link id="m-firstentered" /><code>{"private UnityEvent firstEntered"}</code> | <span className="api-desc">Unity event fired when the first player enters an empty area.</span> |
| <Link id="m-inarea" /><code>{"private HashSet<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{"> inArea"}</code> | <span className="api-desc">Backing set for `InArea`.</span> |
| <Link id="m-isusingbounds" /><code>{"private bool isUsingBounds"}</code> | <span className="api-desc">If true, uses a box of `boundSize` instead of a sphere.</span> |
| <Link id="m-lastleft" /><code>{"private UnityEvent lastLeft"}</code> | <span className="api-desc">Unity event fired when the last player leaves.</span> |
| <Link id="m-playerentered" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" playerEntered"}</code> | <span className="api-desc">Unity event behind `PlayerEntered`.</span> |
| <Link id="m-playerinareadebug" /><code>{"private bool playerInAreaDebug"}</code> | <span className="api-desc">Inspector flag showing if any player is in the area.</span> |
| <Link id="m-playerleft" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" playerLeft"}</code> | <span className="api-desc">Unity event behind `PlayerLeft`.</span> |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> | <span className="api-desc">The sphere's radius, stored squared.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inarea-2" /><code>{"IReadOnlyCollection<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> InArea { get; }"}</code> | <span className="api-desc">The players inside the area right now.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-playerentered-2" /><code>{"event UnityAction<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayerEntered"}</code> | <span className="api-desc">Fires with the player when one enters the area.</span> |
| <Link id="m-playerleft-2" /><code>{"event UnityAction<"}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayerLeft"}</code> | <span className="api-desc">Fires with the player when one leaves the area.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Turns the component off on clients, so it only runs on the server.</span> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | <span className="api-desc">Draws the detection sphere or box in the editor.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Checks every player the entity is spawned for each frame and updates the area list, firing the enter and leave events.</span> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerDetect`:

<div className="api-used-in">

[`TrialLogic.playerDetector`](/mod/game-api/types/global-t-x/triallogic#m-playerdetector).

</div>
