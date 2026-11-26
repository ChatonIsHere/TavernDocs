---
title: "ObjectHistory.ObjectSnapshot"
description: "One recorded position and rotation of a tracked object, with which update loop recorded it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectHistory.ObjectSnapshot

A **private class** in `Root.Township`, `Alta.Populations`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

One recorded position and rotation of a tracked object, with which update loop recorded it.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`ObjectHistory`](/mod/game-api/types/alta-world-generation/objecthistory)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ObjectSnapshot()"}</code> | <span className="api-desc">Creates an `ObjectHistory.ObjectSnapshot` with default values.</span> |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-position" /><code>{"Vector3 Position { get; internal set; }"}</code> | <span className="api-desc">World position at the time of the record.</span> |
| <Link id="m-rotation" /><code>{"Quaternion Rotation { get; internal set; }"}</code> | <span className="api-desc">World rotation at the time of the record.</span> |
| <Link id="m-updatemethod" /><code><Link to="/mod/game-api/types/alta-world-generation/objecthistory-snapshottype">{"ObjectHistory.SnapshotType"}</Link>{" UpdateMethod { get; internal set; }"}</code> | <span className="api-desc">Which loop took the record (update, late update, fixed update or network rigidbody).</span> |

## Used in

Members of other types that take, return or hold a `ObjectSnapshot`:

<div className="api-used-in">

[`ObjectHistory.AddObjectSnapshot`](/mod/game-api/types/alta-world-generation/objecthistory#m-addobjectsnapshot), [`ObjectHistory.objectHistory`](/mod/game-api/types/alta-world-generation/objecthistory#m-objecthistory).

</div>
