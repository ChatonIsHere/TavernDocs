---
title: "GrabAssistEventData"
description: "Data sent with GrabAssistController.GrabAssistUpdated each time the grab assist target is rechecked."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GrabAssistEventData

A **struct** in `Root.Township`, no namespace.

Data sent with `GrabAssistController.GrabAssistUpdated` each time the grab assist target is rechecked.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GrabAssistEventData(bool success, Vector3 origin, Vector3 target, float length)"}</code> | Creates a `GrabAssistEventData` from `success`, `origin`, `target` and `length`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-length" /><code>{"readonly float length"}</code> | Length of the assist search after checking for obstacles. |
| <Link id="m-origin" /><code>{"Vector3 origin"}</code> | Where the assist search starts. |
| <Link id="m-success" /><code>{"readonly bool success"}</code> | Whether a grab target was found. |
| <Link id="m-target" /><code>{"Vector3 target"}</code> | Target position: the found target, or the end of the search. |

## Used in

Members of other types that take, return or hold a `GrabAssistEventData`:

[`GrabAssistController.GrabAssistUpdated`](/game-api/types/global-e-h/grabassistcontroller#m-grabassistupdated), [`GrabAssistView.IndicatePath`](/game-api/types/global-e-h/grabassistview#m-indicatepath), [`GrabAssistView.IndicateTarget`](/game-api/types/global-e-h/grabassistview#m-indicatetarget), [`GrabAssistView.OnUpdateGrabAssist`](/game-api/types/global-e-h/grabassistview#m-onupdategrabassist).
