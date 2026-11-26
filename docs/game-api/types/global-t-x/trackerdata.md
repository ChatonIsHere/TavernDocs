---
title: "TrackerData"
description: "Save data for a Tracker, the component that registers a network entity under a name so it can be looked up later."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TrackerData

A **class** in `Root.Township`, no namespace.

Save data for a `Tracker`, the component that registers a network entity under a name so it can be looked up later.

- **Listed in** [No namespace: T to X](/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<Tracker, TrackerData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Tracker`](/game-api/types/global-t-x/tracker), [`TrackerData`](/game-api/types/global-t-x/trackerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TrackerData()"}</code> | Creates a `TrackerData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | Name the entity is tracked under. |

## Used in

Members of other types that take, return or hold a `TrackerData`:

[`Tracker.Load`](/game-api/types/global-t-x/tracker#m-load), [`Tracker.Save`](/game-api/types/global-t-x/tracker#m-save).
