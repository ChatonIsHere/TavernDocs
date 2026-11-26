---
title: "LogicManagerData"
description: "Save data for GlobalLogicManager: every logic value it holds and the next free identifier."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicManagerData

A **class** in `Root.Township`, `Alta.Logic`.

Save data for `GlobalLogicManager`: every logic value it holds and the next free identifier.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<GlobalLogicManager, LogicManagerData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GlobalLogicManager`](/game-api/types/alta-items/globallogicmanager), [`LogicManagerData`](/game-api/types/alta-items/logicmanagerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LogicManagerData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nextid" /><code>{"uint nextId"}</code> | The identifier the manager hands to the next new logic value. |
| <Link id="m-set" /><code><Link to="/game-api/types/alta-items/logicmanagerset">{"LogicManagerSet"}</Link>{" set"}</code> | The manager's stored logic values, which senders and receivers link to by identifier. |
