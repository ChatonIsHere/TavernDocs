---
title: "LogicBoolSender"
description: "Logic component that sends a bool to linked logic receivers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicBoolSender

A **class** in `Root.Township`, `Alta.Logic`.

Logic component that sends a bool to linked logic receivers. The value is stored in its shared logic save data.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender<LogicBoolSaveData>`](/mod/game-api/types/alta-items/logicvaluesender-tdata)
- **Derived types** [`BoolSenderInput`](/mod/game-api/types/alta-items/boolsenderinput), [`LogicBoolSaveData`](/mod/game-api/types/alta-items/logicboolsavedata)
- **Documented in** [Other systems](/mod/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicBoolSender()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> | <span className="api-desc">Private: the value being sent. Changed with `UpdateValue` and saved in the logic data.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readvalue" /><code>{"bool ReadValue()"}</code> | <span className="api-desc">Current value.</span> |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(bool value)"}</code> | <span className="api-desc">Sets the value and pushes it to the shared data if it changed.</span> |
| <Link id="m-readdatavalue" /><code>{"protected override void ReadDataValue()"}</code> | <span className="api-desc">Reads the value from the shared data. Runs when it changes from elsewhere.</span> |
| <Link id="m-writedatavalue" /><code>{"protected override void WriteDataValue()"}</code> | <span className="api-desc">Writes the value into the shared data.</span> |

## Used in

Members of other types that take, return or hold a `LogicBoolSender`:

<div className="api-used-in">

[`Phase.active`](/mod/game-api/types/global-p/phase#m-active), [`Phase.complete`](/mod/game-api/types/global-p/phase#m-complete), [`TrialLogic.resetSender`](/mod/game-api/types/global-t-x/triallogic#m-resetsender).

</div>
