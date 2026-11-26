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
| <Link id="m-ctor" /><code>{"RopeGrabSaveData1()"}</code> | Creates a `RopeGrabSaveData1` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"float currentProgress"}</code> | Saved position of the grab along the rope. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"override "}<Link to="/mod/game-api/types/alta-world/savedata">{"SaveData"}</Link>{" Migrate()"}</code> | Converts to `RopeGrabSaveData`, keeping the progress and setting length to 0.8. |
