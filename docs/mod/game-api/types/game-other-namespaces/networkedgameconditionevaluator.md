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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/mod/game-api/types/game-other-namespaces/igamecondition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NetworkedGameConditionEvaluator()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areallconditionsmet" /><code>{"private bool areAllConditionsMet"}</code> | <span className="api-desc">The current combined result.</span> |
| <Link id="m-gameconditions" /><code>{"private Object[] gameConditions"}</code> | <span className="api-desc">Objects implementing `IGameCondition` that must all be met.</span> |
| <Link id="m-syncconditionchange" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncConditionChange"}</code> | <span className="api-desc">Method sync on `SyncGameConditionChange` for the result.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> | <span className="api-desc">Callback run on remote clients when a new result arrives.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Creates the sync and, on the server or local test, hooks the conditions and computes the first result.</span> |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> | <span className="api-desc">The last computed (server) or received (client) result.</span> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Server: sends the current result to the joining player.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-areallconditionsmet-2" /><code>{"private bool AreAllConditionsMet()"}</code> | <span className="api-desc">Returns true if every listed condition is met.</span> |
| <Link id="m-conditionchanged" /><code>{"private void ConditionChanged()"}</code> | <span className="api-desc">Recomputes the result and sends it to chunks when it changes. Does not run `OnConditionChanged` on the server.</span> |
| <Link id="m-initializeeventlisteners" /><code>{"private void InitializeEventListeners()"}</code> | <span className="api-desc">Hooks `ConditionChanged` onto each condition's `OnConditionChanged`, without adding it twice.</span> |
| <Link id="m-syncgameconditionchange" /><code>{"private void SyncGameConditionChange("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool conditionsMet)"}</code> | <span className="api-desc">Writes the result, and on remote clients stores it and runs `OnConditionChanged`.</span> |

</details>
