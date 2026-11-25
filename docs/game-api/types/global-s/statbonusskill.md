---
title: "StatBonusSkill"
description: "class StatBonusSkill in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBonusSkill

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** [`ProfessionSkill`](/game-api/types/global-p/professionskill)
- **Nested types** [`OperationTarget`](/game-api/types/global-s/statbonusskill-operationtarget), [`OperationType`](/game-api/types/global-s/statbonusskill-operationtype)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"StatBonusSkill()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-defaultvalues" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{", float> defaultValues"}</code> |
| <Link id="m-operationtarget" /><code>{"private "}<Link to="/game-api/types/global-s/statbonusskill-operationtarget">{"StatBonusSkill.OperationTarget"}</Link>{" operationTarget"}</code> |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/game-api/types/global-s/statbonusskill-operationtype">{"StatBonusSkill.OperationType"}</Link>{" operationType"}</code> |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> |
| <Link id="m-value" /><code>{"private float value"}</code> |

</details>

## Methods

| Member |
| --- |
| <Link id="m-lock" /><code>{"override void Lock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-preparegetset" /><code>{"private void PrepareGetSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, out Func<float> get, out Action<float> set)"}</code> |
| <Link id="m-removevalue" /><code>{"private void RemoveValue("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |
| <Link id="m-setvalue" /><code>{"private void SetValue("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> |

</details>
