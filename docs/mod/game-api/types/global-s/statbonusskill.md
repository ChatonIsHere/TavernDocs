---
title: "StatBonusSkill"
description: "Profession skill asset that changes one of the player's stats while unlocked: multiplies, adds to or sets its max, base value or min."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# StatBonusSkill

A **class** in `Root.Township`, the global namespace.

Profession skill asset that changes one of the player's stats while unlocked: multiplies, adds to or sets its max, base value or min. Reapplied whenever the player gets a new body.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** [`ProfessionSkill`](/mod/game-api/types/global-p/professionskill)
- **Nested types** [`OperationTarget`](/mod/game-api/types/global-s/statbonusskill-operationtarget), [`OperationType`](/mod/game-api/types/global-s/statbonusskill-operationtype)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"StatBonusSkill()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultvalues" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{", float> defaultValues"}</code> | Per player, the stat value from before a `Set` operation, restored on lock. |
| <Link id="m-operationtarget" /><code>{"private "}<Link to="/mod/game-api/types/global-s/statbonusskill-operationtarget">{"StatBonusSkill.OperationTarget"}</Link>{" operationTarget"}</code> | Which part of the stat changes: max, base value or min. |
| <Link id="m-operationtype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/statbonusskill-operationtype">{"StatBonusSkill.OperationType"}</Link>{" operationType"}</code> | How `value` is applied: multiply, add or set. |
| <Link id="m-targetstat" /><code>{"private "}<Link to="/mod/game-api/types/alta-stats-effects/statdefinition">{"StatDefinition"}</Link>{" targetStat"}</code> | The stat to change. |
| <Link id="m-value" /><code>{"private float value"}</code> | The amount used by the operation. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-lock" /><code>{"override void Lock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | Stops listening for new player controllers and undoes the change on the current one. |
| <Link id="m-unlock" /><code>{"override void Unlock("}<Link to="/mod/game-api/types/global-p/playerprogressionmanager">{"PlayerProgressionManager"}</Link>{" player)"}</code> | Applies the bonus now and again each time the player's controller is set. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-preparegetset" /><code>{"private void PrepareGetSet("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController, out Func<float> get, out Action<float> set)"}</code> | Builds getter and setter functions for the chosen part (max, base or min) of the target stat. |
| <Link id="m-removevalue" /><code>{"private void RemoveValue("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | Undoes the change: divides, subtracts, or restores the value saved before a set. |
| <Link id="m-setvalue" /><code>{"private void SetValue("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player, "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" playerController)"}</code> | On the next frame, applies the operation to the stat on the given player controller. |

</details>
