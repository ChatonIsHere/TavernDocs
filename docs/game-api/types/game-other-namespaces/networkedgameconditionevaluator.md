---
title: "NetworkedGameConditionEvaluator"
description: "class NetworkedGameConditionEvaluator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NetworkedGameConditionEvaluator

A **class** in `Root.Township`, `Features.Gameplay.GameConditions`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IGameCondition`](/game-api/types/game-other-namespaces/igamecondition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NetworkedGameConditionEvaluator()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-areallconditionsmet" /><code>{"private bool areAllConditionsMet"}</code> |
| <Link id="m-gameconditions" /><code>{"private Object[] gameConditions"}</code> |
| <Link id="m-syncconditionchange" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsyncstruct-t">{"MethodSyncStruct"}</Link>{"<bool> syncConditionChange"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-onconditionchanged" /><code>{"Action OnConditionChanged { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |
| <Link id="m-isconditionmet" /><code>{"bool IsConditionMet()"}</code> |
| <Link id="m-onconnected" /><code>{"override void OnConnected("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-areallconditionsmet-2" /><code>{"private bool AreAllConditionsMet()"}</code> |
| <Link id="m-conditionchanged" /><code>{"private void ConditionChanged()"}</code> |
| <Link id="m-initializeeventlisteners" /><code>{"private void InitializeEventListeners()"}</code> |
| <Link id="m-syncgameconditionchange" /><code>{"private void SyncGameConditionChange("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream, bool conditionsMet)"}</code> |

</details>
