---
title: "LogicIntSet"
description: "Saved integer that is sent to onValueChanged once at start."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LogicIntSet

A **class** in `Root.Township`, the global namespace.

Saved integer that is sent to `onValueChanged` once at start. Saved and loaded through `LogicIntSetData`.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<LogicIntSetData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<LogicIntSetData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`AreaOfInfluenceSender`](/mod/game-api/types/global-a-b/areaofinfluencesender), [`LogicIntSetData`](/mod/game-api/types/global-i-l/logicintsetdata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LogicIntSet()"}</code> | <span className="api-desc">Creates a `LogicIntSet` with default values.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onvaluechanged" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/intunityevent">{"IntUnityEvent"}</Link>{" onValueChanged"}</code> | <span className="api-desc">Event that receives the value at start.</span> |
| <Link id="m-value" /><code>{"private int value"}</code> | <span className="api-desc">The saved integer.</span> |

</details>

## Methods

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Fires `onValueChanged` with the stored value.</span> |

</details>
