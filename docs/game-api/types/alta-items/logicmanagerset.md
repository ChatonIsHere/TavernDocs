---
title: "LogicManagerSet"
description: "Save wrapper for the global logic manager's values, stored in LogicManagerData.set."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicManagerSet

A **class** in `Root.Township`, `Alta.Logic`.

Save wrapper for the global logic manager's values, stored in `LogicManagerData.set`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Derived types** [`TypeSerializationHelper.LogicManagerSetSerialization`](/game-api/types/global-t-x/typeserializationhelper-logicmanagersetserialization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicManagerSet()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-datas" /><code><Link to="/game-api/types/alta-world/savedata">{"SaveData"}</Link>{"[] datas"}</code> | Save data of each logic value in the manager. |

## Used in

Members of other types that take, return or hold a `LogicManagerSet`:

[`LogicManagerData.set`](/game-api/types/alta-items/logicmanagerdata#m-set), [`TypeSerializationHelper.LogicManagerSetSerialization.Serialize`](/game-api/types/global-t-x/typeserializationhelper-logicmanagersetserialization#m-serialize).
