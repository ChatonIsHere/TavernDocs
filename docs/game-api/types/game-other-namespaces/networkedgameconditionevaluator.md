---
title: "NetworkedGameConditionEvaluator"
description: "Networked AND of several IGameConditions."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedGameConditionEvaluator

A **class** in `Root.Township`, `Features.Gameplay.GameConditions`.

Networked AND of several `IGameCondition`s. The server watches them and sends the combined result to clients, so clients can use it as a condition too.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/game-api/types/game-other-namespaces/igamecondition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedGameConditionEvaluator()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areallconditionsmet" /><code>{"private bool areAllConditionsMet"}</code> | The current combined result. |
| <Link id="m-gameconditions" /><code>{"private Object[] gameConditions"}</code> | Objects implementing `IGameCondition` that must all be met. |
| <Link id="m-syncconditionchange" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncConditionChange"}</code> | Method sync on `SyncGameConditionChange` for the result. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | Callback run on remote clients when a new result arrives. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Creates the sync and, on the server or local test, hooks the conditions and computes the first result. |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | The last computed (server) or received (client) result. |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Server: sends the current result to the joining player. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areallconditionsmet-2" /><code>{"private bool AreAllConditionsMet()"}</code> | Returns true if every listed condition is met. |
| <Link id="m-conditionchanged" /><code>{"private void ConditionChanged()"}</code> | Recomputes the result and sends it to chunks when it changes. Does not run `OnConditionChanged` on the server. |
| <Link id="m-initializeeventlisteners" /><code>{"private void InitializeEventListeners()"}</code> | Hooks `ConditionChanged` onto each condition's `OnConditionChanged`, without adding it twice. |
| <Link id="m-syncgameconditionchange" /><code>{"private void SyncGameConditionChange("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool conditionsMet)"}</code> | Writes the result, and on remote clients stores it and runs `OnConditionChanged`. |

</details>
