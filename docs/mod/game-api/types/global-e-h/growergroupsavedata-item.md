---
title: "GrowerGroupSaveData.Item"
description: "Saved state of one growing item in a GrowerGroup."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrowerGroupSaveData.Item

A **class** in `Root.Township`, the global namespace.

Saved state of one growing item in a `GrowerGroup`.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`GrowerGroupSaveData`](/mod/game-api/types/global-e-h/growergroupsavedata)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Item()"}</code> | <span className="api-desc">Creates a `GrowerGroupSaveData.Item` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-childindex" /><code>{"int childIndex"}</code> | <span className="api-desc">Child serializer index of the item's spawned entity, or -1 if it has none.</span> |
| <Link id="m-currentstage" /><code>{"int currentStage"}</code> | <span className="api-desc">The growth stage the item has reached.</span> |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/global-e-h/growthdefinition">{"GrowthDefinition"}</Link>{" definition"}</code> | <span className="api-desc">The growth definition the item follows.</span> |
| <Link id="m-hasstarted" /><code>{"bool hasStarted"}</code> | <span className="api-desc">Whether growth has started.</span> |
| <Link id="m-position" /><code>{"Vector3 position"}</code> | <span className="api-desc">Saved position of the item.</span> |
| <Link id="m-rotation" /><code>{"Quaternion rotation"}</code> | <span className="api-desc">Saved rotation of the item.</span> |
| <Link id="m-spawnedstageindex" /><code>{"int spawnedStageIndex"}</code> | <span className="api-desc">The stage whose object is currently spawned.</span> |
| <Link id="m-startedtime" /><code>{"TimeSpan startedTime"}</code> | <span className="api-desc">Timeline time when growth started. Stage progress on load is worked out from this.</span> |

## Used in

Members of other types that take, return or hold a `Item`:

<div className="api-used-in">

[`GrowerGroupSaveData.items`](/mod/game-api/types/global-e-h/growergroupsavedata#m-items).

</div>
