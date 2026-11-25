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

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`LogicValueSender<LogicBoolSaveData>`](/game-api/types/alta-items/logicvaluesender-tdata)
- **Derived types** [`BoolSenderInput`](/game-api/types/alta-items/boolsenderinput), [`LogicBoolSaveData`](/game-api/types/alta-items/logicboolsavedata)
- **Documented in** [Other systems](/game-api/game-systems/other-systems)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicBoolSender()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalue" /><code>{"private bool currentValue"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-readvalue" /><code>{"bool ReadValue()"}</code> | Current value. |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(bool value)"}</code> | Sets the value and pushes it to the shared data if it changed. |
| <Link id="m-readdatavalue" /><code>{"protected override void ReadDataValue()"}</code> | Reads the value from the shared data. Runs when it changes from elsewhere. |
| <Link id="m-writedatavalue" /><code>{"protected override void WriteDataValue()"}</code> | Writes the value into the shared data. |

## Used in

Members of other types that take, return or hold a `LogicBoolSender`:

[`Phase.active`](/game-api/types/global-p/phase#m-active), [`Phase.complete`](/game-api/types/global-p/phase#m-complete), [`TrialLogic.resetSender`](/game-api/types/global-t-x/triallogic#m-resetsender).
