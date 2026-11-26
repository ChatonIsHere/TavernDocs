---
title: "RopeGrabSaveData"
description: "Save data (version 2) for a RopeGrab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RopeGrabSaveData

A **class** in `Root.Township`, the global namespace.

Save data (version 2) for a `RopeGrab`.

- **Listed in** [Global namespace: Q to R](/mod/game-api/types/global-q-r)
- **Inherits or implements** [`NewSaveData<RopeGrab, RopeGrabSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`RopeGrab`](/mod/game-api/types/global-q-r/ropegrab), [`RopeGrabSaveData`](/mod/game-api/types/global-q-r/ropegrabsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RopeGrabSaveData()"}</code> | <span className="api-desc">Creates a `RopeGrabSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentprogress" /><code>{"float currentProgress"}</code> | <span className="api-desc">Saved position of the grab along the rope.</span> |
| <Link id="m-isgrabclampedsaved" /><code>{"bool isGrabClampedSaved"}</code> | <span className="api-desc">Saved clamp state of the grab.</span> |
| <Link id="m-length" /><code>{"float length"}</code> | <span className="api-desc">Saved rope length.</span> |
