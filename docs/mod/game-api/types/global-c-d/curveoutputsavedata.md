---
title: "CurveOutputSaveData"
description: "Save data for a CurveOutput logic component (save structure version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveOutputSaveData

A **class** in `Root.Township`, the global namespace.

Save data for a `CurveOutput` logic component (save structure version 1).

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<CurveOutput, CurveOutputSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CurveOutput`](/mod/game-api/types/global-c-d/curveoutput), [`CurveOutputSaveData`](/mod/game-api/types/global-c-d/curveoutputsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CurveOutputSaveData()"}</code> | <span className="api-desc">Creates a `CurveOutputSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrunning" /><code>{"bool isRunning"}</code> | <span className="api-desc">Whether the curve was still playing when saved.</span> |
| <Link id="m-progress" /><code>{"float progress"}</code> | <span className="api-desc">How far along its curve the output was when saved.</span> |

## Used in

Members of other types that take, return or hold a `CurveOutputSaveData`:

<div className="api-used-in">

[`CurveOutput.data`](/mod/game-api/types/global-c-d/curveoutput#m-data).

</div>
