---
title: "LogicBoolSender"
description: "class LogicBoolSender in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicBoolSender

A **class** in `Root.Township`, `Alta.Logic`.

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
| <Link id="m-readvalue" /><code>{"bool ReadValue()"}</code> |  |
| <Link id="m-updatevalue" /><code>{"void UpdateValue(bool value)"}</code> |  |
| <Link id="m-readdatavalue" /><code>{"protected override void ReadDataValue()"}</code> |  |
| <Link id="m-writedatavalue" /><code>{"protected override void WriteDataValue()"}</code> |  |

## Used in

Members of other types that take, return or hold a `LogicBoolSender`:

[`Phase.active`](/game-api/types/global-p/phase#m-active), [`Phase.complete`](/game-api/types/global-p/phase#m-complete), [`TrialLogic.resetSender`](/game-api/types/global-t-x/triallogic#m-resetsender).
