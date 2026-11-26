---
title: "CurveOutputSaveData"
description: "Save data for a CurveOutput logic component (save structure version 1)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CurveOutputSaveData

A **class** in `Root.Township`, no namespace.

Save data for a `CurveOutput` logic component (save structure version 1).

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<CurveOutput, CurveOutputSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`CurveOutput`](/game-api/types/global-c-d/curveoutput), [`CurveOutputSaveData`](/game-api/types/global-c-d/curveoutputsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CurveOutputSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-isrunning" /><code>{"bool isRunning"}</code> | Whether the curve was still playing when saved. |
| <Link id="m-progress" /><code>{"float progress"}</code> | How far along its curve the output was when saved. |

## Used in

Members of other types that take, return or hold a `CurveOutputSaveData`:

[`CurveOutput.data`](/game-api/types/global-c-d/curveoutput#m-data).
