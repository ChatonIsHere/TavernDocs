---
title: "TrackerData"
description: "Save data for a Tracker, the component that registers a network entity under a name so it can be looked up later."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrackerData

A **class** in `Root.Township`, the global namespace.

Save data for a `Tracker`, the component that registers a network entity under a name so it can be looked up later.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<Tracker, TrackerData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Tracker`](/mod/game-api/types/global-t-x/tracker), [`TrackerData`](/mod/game-api/types/global-t-x/trackerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrackerData()"}</code> | <span className="api-desc">Creates a `TrackerData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | <span className="api-desc">Name the entity is tracked under.</span> |

## Used in

Members of other types that take, return or hold a `TrackerData`:

<div className="api-used-in">

[`Tracker.Load`](/mod/game-api/types/global-t-x/tracker#m-load), [`Tracker.Save`](/mod/game-api/types/global-t-x/tracker#m-save).

</div>
