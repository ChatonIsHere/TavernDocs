---
title: "GrowerGroupSaveData.Item"
description: "Saved state of one growing item in a GrowerGroup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowerGroupSaveData.Item

A **class** in `Root.Township`, no namespace.

Saved state of one growing item in a `GrowerGroup`.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`GrowerGroupSaveData`](/game-api/types/global-e-h/growergroupsavedata)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Item()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childindex" /><code>{"int childIndex"}</code> | Child serializer index of the item's spawned entity, or -1 if it has none. |
| <Link id="m-currentstage" /><code>{"int currentStage"}</code> | The growth stage the item has reached. |
| <Link id="m-definition" /><code><Link to="/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition"}</code> | The growth definition the item follows. |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | Whether growth has started. |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | Saved position of the item. |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | Saved rotation of the item. |
| <Link id="m-spawnedstageindex" /><code>{"int spawnedStageIndex"}</code> | The stage whose object is currently spawned. |
| <Link id="m-startedtime" /><code>{"TimeSpan startedTime"}</code> | Timeline time when growth started. Stage progress on load is worked out from this. |

## Used in

Members of other types that take, return or hold a `Item`:

[`GrowerGroupSaveData.items`](/game-api/types/global-e-h/growergroupsavedata#m-items).
