---
title: "NonHashedData"
description: "A ScriptableObject that holds one saved dynamic object's data outside the hashed asset data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonHashedData

A **class** in `Root.Township`, the global namespace.

A ScriptableObject that holds one saved dynamic object's data outside the hashed asset data.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"NonHashedData()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicdata" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" dynamicData"}</code> | <span className="api-desc">Backing field for `DynamicData`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicdata-2" /><code><Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" DynamicData { get; set; }"}</code> | <span className="api-desc">The saved object data held by this asset.</span> |

## Used in

Members of other types that take, return or hold a `NonHashedData`:

<div className="api-used-in">

[`GlobalLogicManager.defaultSetData`](/mod/game-api/types/alta-items/globallogicmanager#m-defaultsetdata).

</div>
