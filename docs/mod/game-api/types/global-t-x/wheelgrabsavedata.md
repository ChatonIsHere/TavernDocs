---
title: "WheelGrabSaveData"
description: "Save data for a WheelGrab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WheelGrabSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data for a `WheelGrab`.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`NewSaveData<WheelGrab, WheelGrabSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`WheelGrab`](/mod/game-api/types/global-t-x/wheelgrab), [`WheelGrabSaveData`](/mod/game-api/types/global-t-x/wheelgrabsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WheelGrabSaveData()"}</code> | <span className="api-desc">Creates a `WheelGrabSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogresssaved" /><code>{"float currentProgressSaved"}</code> | <span className="api-desc">The wheel's current progress.</span> |
| <Link id="m-directionsaved" /><code>{"float directionSaved"}</code> | <span className="api-desc">The wheel's turning direction.</span> |
| <Link id="m-progressperrevolutionsaved" /><code>{"float progressPerRevolutionSaved"}</code> | <span className="api-desc">Progress gained per full turn.</span> |
