---
title: "RopeGrabSaveData1"
description: "Old save data (version 1) for a RopeGrab, migrated to RopeGrabSaveData on load."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeGrabSaveData1

A **class** in `Root.Township`, the global namespace.

Old save data (version 1) for a `RopeGrab`, migrated to `RopeGrabSaveData` on load.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`OldSaveData`](/mod/game-api/types/global-m-o/oldsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeGrabSaveData1()"}</code> | <span className="api-desc">Creates a `RopeGrabSaveData1` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"float currentProgress"}</code> | <span className="api-desc">Saved position of the grab along the rope.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | <span className="api-desc">Converts to `RopeGrabSaveData`, keeping the progress and setting length to 0.8.</span> |
