---
title: "PlayerDetect"
description: "Server: detects players whose feet are inside a sphere or box around this object and fires events as they enter and leave."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDetect

A **class** in `Root.Township`, no namespace.

Server: detects players whose feet are inside a sphere or box around this object and fires events as they enter and leave. Its shape is saved with the object.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerDetectSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerDetectSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerDetectSaveData`](/game-api/types/global-p/playerdetectsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDetect()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-boundsize" /><code>{"private Vector3 boundSize"}</code> | Size of the local space box, when `isUsingBounds` is on. |
| <Link id="m-firstentered" /><code>{"private UnityEvent firstEntered"}</code> | Unity event fired when the first player enters an empty area. |
| <Link id="m-inarea" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> inArea"}</code> | Backing set for `InArea`. |
| <Link id="m-isusingbounds" /><code>{"private bool isUsingBounds"}</code> | If true, uses a box of `boundSize` instead of a sphere. |
| <Link id="m-lastleft" /><code>{"private UnityEvent lastLeft"}</code> | Unity event fired when the last player leaves. |
| <Link id="m-playerentered" /><code>{"private "}<Link to="/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" playerEntered"}</code> | Unity event behind `PlayerEntered`. |
| <Link id="m-playerinareadebug" /><code>{"private bool playerInAreaDebug"}</code> | Inspector flag showing if any player is in the area. |
| <Link id="m-playerleft" /><code>{"private "}<Link to="/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" playerLeft"}</code> | Unity event behind `PlayerLeft`. |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> | The sphere's radius, stored squared. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-inarea-2" /><code>{"IReadOnlyCollection<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> InArea { get; }"}</code> | The players inside the area right now. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-playerentered-2" /><code>{"event UnityAction<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayerEntered"}</code> | Fires with the player when one enters the area. |
| <Link id="m-playerleft-2" /><code>{"event UnityAction<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayerLeft"}</code> | Fires with the player when one leaves the area. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Turns the component off on clients, so it only runs on the server. |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> | Draws the detection sphere or box in the editor. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Checks every player the entity is spawned for each frame and updates the area list, firing the enter and leave events. |

</details>

## Used in

Members of other types that take, return or hold a `PlayerDetect`:

[`TrialLogic.playerDetector`](/game-api/types/global-t-x/triallogic#m-playerdetector).
