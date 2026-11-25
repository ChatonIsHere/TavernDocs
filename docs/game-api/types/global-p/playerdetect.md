---
title: "PlayerDetect"
description: "class PlayerDetect in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDetect

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<PlayerDetectSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PlayerDetectSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PlayerDetectSaveData`](/game-api/types/global-p/playerdetectsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerDetect()"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-boundsize" /><code>{"private Vector3 boundSize"}</code> |
| <Link id="m-firstentered" /><code>{"private UnityEvent firstEntered"}</code> |
| <Link id="m-inarea" /><code>{"private HashSet<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{"> inArea"}</code> |
| <Link id="m-isusingbounds" /><code>{"private bool isUsingBounds"}</code> |
| <Link id="m-lastleft" /><code>{"private UnityEvent lastLeft"}</code> |
| <Link id="m-playerentered" /><code>{"private "}<Link to="/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" playerEntered"}</code> |
| <Link id="m-playerinareadebug" /><code>{"private bool playerInAreaDebug"}</code> |
| <Link id="m-playerleft" /><code>{"private "}<Link to="/game-api/types/global-p/playerunityevent">{"PlayerUnityEvent"}</Link>{" playerLeft"}</code> |
| <Link id="m-radiussquared" /><code>{"private float radiusSquared"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-inarea-2" /><code>{"IReadOnlyCollection<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> InArea { get; }"}</code> |

## Events

| Member |
| --- |
| <Link id="m-playerentered-2" /><code>{"event UnityAction<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayerEntered"}</code> |
| <Link id="m-playerleft-2" /><code>{"event UnityAction<"}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{"> PlayerLeft"}</code> |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |
| <Link id="m-ondrawgizmosselected" /><code>{"private void OnDrawGizmosSelected()"}</code> |
| <Link id="m-update" /><code>{"private void Update()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `PlayerDetect`:

[`TrialLogic.playerDetector`](/game-api/types/global-t-x/triallogic#m-playerdetector).
