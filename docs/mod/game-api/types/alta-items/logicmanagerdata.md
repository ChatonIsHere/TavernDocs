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

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** [`NewSaveData<GlobalLogicManager, LogicManagerData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GlobalLogicManager`](/mod/game-api/types/alta-items/globallogicmanager), [`LogicManagerData`](/mod/game-api/types/alta-items/logicmanagerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicManagerData()"}</code> | <span className="api-desc">Creates a `LogicManagerData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-nextid" /><code>{"uint nextId"}</code> | <span className="api-desc">The identifier the manager hands to the next new logic value.</span> |
| <Link id="m-set" /><code><Link to="/mod/game-api/types/alta-items/logicmanagerset">{"LogicManagerSet"}</Link>{" set"}</code> | <span className="api-desc">The manager's stored logic values, which senders and receivers link to by identifier.</span> |
