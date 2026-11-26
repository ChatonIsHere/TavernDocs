---
title: "ObjectHistory.SnapshotType"
description: "Which update loop recorded an ObjectHistory snapshot: Update, LateUpdate, FixedUpdate or NetworkRigidbody."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ObjectHistory.SnapshotType

An **private enum** in `Root.Township`, `Alta.Populations`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Which update loop recorded an `ObjectHistory` snapshot: `Update`, `LateUpdate`, `FixedUpdate` or `NetworkRigidbody`. Bit flag values.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Nested in** [`ObjectHistory`](/mod/game-api/types/alta-world-generation/objecthistory)
- **Attributes** `Flags`

## Values

| Member |
| --- |
| <Link id="m-fixedupdate" /><code>{"FixedUpdate = 4"}</code> |
| <Link id="m-lateupdate" /><code>{"LateUpdate = 2"}</code> |
| <Link id="m-networkrigidbody" /><code>{"NetworkRigidbody = 8"}</code> |
| <Link id="m-update" /><code>{"Update = 1"}</code> |

## Used in

Members of other types that take, return or hold a `SnapshotType`:

<div className="api-used-in">

[`ObjectHistory.gizmosToShow`](/mod/game-api/types/alta-world-generation/objecthistory#m-gizmostoshow), [`ObjectHistory.RecordObject`](/mod/game-api/types/alta-world-generation/objecthistory#m-recordobject), [`ObjectHistory.ObjectSnapshot.UpdateMethod`](/mod/game-api/types/alta-world-generation/objecthistory-objectsnapshot#m-updatemethod).

</div>
