---
title: "PlayerDetectSaveData"
description: "Save data (version 2) for a PlayerDetect trigger: its detection radius, or box bounds if it uses bounds."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PlayerDetectSaveData

A **internal class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save data (version 2) for a `PlayerDetect` trigger: its detection radius, or box bounds if it uses bounds.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`NewSaveData<PlayerDetect, PlayerDetectSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PlayerDetect`](/mod/game-api/types/global-p/playerdetect), [`PlayerDetectSaveData`](/mod/game-api/types/global-p/playerdetectsavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PlayerDetectSaveData()"}</code> | <span className="api-desc">Creates a `PlayerDetectSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-boundssizesaved" /><code>{"Vector3 boundsSizeSaved"}</code> | <span className="api-desc">Size of the detection box, used when `isUsingBoundsSaved` is true.</span> |
| <Link id="m-isusingboundssaved" /><code>{"bool isUsingBoundsSaved"}</code> | <span className="api-desc">True if the detector uses a box (`boundsSizeSaved`) instead of a radius.</span> |
| <Link id="m-radiussaved" /><code>{"float radiusSaved"}</code> | <span className="api-desc">Detection radius.</span> |
