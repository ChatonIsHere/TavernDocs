---
title: "PlayerDetectSaveData"
description: "Save data (version 2) for a PlayerDetect trigger: its detection radius, or box bounds if it uses bounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDetectSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for a `PlayerDetect` trigger: its detection radius, or box bounds if it uses bounds.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerDetect, PlayerDetectSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerDetect`](/game-api/types/global-p/playerdetect), [`PlayerDetectSaveData`](/game-api/types/global-p/playerdetectsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PlayerDetectSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boundssizesaved" /><code>{"Vector3 boundsSizeSaved"}</code> | Size of the detection box, used when `isUsingBoundsSaved` is true. |
| <Link id="m-isusingboundssaved" /><code>{"bool isUsingBoundsSaved"}</code> | True if the detector uses a box (`boundsSizeSaved`) instead of a radius. |
| <Link id="m-radiussaved" /><code>{"float radiusSaved"}</code> | Detection radius. |
