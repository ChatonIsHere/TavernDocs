---
title: "NonHashedData"
description: "A ScriptableObject that holds one saved dynamic object's data outside the hashed asset data."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# NonHashedData

A **class** in `Root.Township`, no namespace.

A ScriptableObject that holds one saved dynamic object's data outside the hashed asset data.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `ScriptableObject`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"NonHashedData()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicdata" /><code>{"private "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" dynamicData"}</code> | Backing field for `DynamicData`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-dynamicdata-2" /><code><Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" DynamicData { get; set; }"}</code> | The saved object data held by this asset. |

## Used in

Members of other types that take, return or hold a `NonHashedData`:

[`GlobalLogicManager.defaultSetData`](/game-api/types/alta-items/globallogicmanager#m-defaultsetdata).
