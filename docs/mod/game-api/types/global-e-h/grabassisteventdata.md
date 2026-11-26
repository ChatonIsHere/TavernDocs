---
title: "GrabAssistEventData"
description: "Data sent with GrabAssistController.GrabAssistUpdated each time the grab assist target is rechecked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistEventData

A **struct** in `Root.Township`, the global namespace.

Data sent with `GrabAssistController.GrabAssistUpdated` each time the grab assist target is rechecked.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabAssistEventData(bool success, Vector3 origin, Vector3 target, float length)"}</code> | <span className="api-desc">Creates a `GrabAssistEventData` from `success`, `origin`, `target` and `length`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-length" /><code>{"readonly float length"}</code> | <span className="api-desc">Length of the assist search after checking for obstacles.</span> |
| <Link id="m-origin" /><code>{"Vector3 origin"}</code> | <span className="api-desc">Where the assist search starts.</span> |
| <Link id="m-success" /><code>{"readonly bool success"}</code> | <span className="api-desc">Whether a grab target was found.</span> |
| <Link id="m-target" /><code>{"Vector3 target"}</code> | <span className="api-desc">Target position: the found target, or the end of the search.</span> |

## Used in

Members of other types that take, return or hold a `GrabAssistEventData`:

<div className="api-used-in">

[`GrabAssistController.GrabAssistUpdated`](/mod/game-api/types/global-e-h/grabassistcontroller#m-grabassistupdated), [`GrabAssistView.IndicatePath`](/mod/game-api/types/global-e-h/grabassistview#m-indicatepath), [`GrabAssistView.IndicateTarget`](/mod/game-api/types/global-e-h/grabassistview#m-indicatetarget), [`GrabAssistView.OnUpdateGrabAssist`](/mod/game-api/types/global-e-h/grabassistview#m-onupdategrabassist).

</div>
