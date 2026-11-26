---
title: "DiggingImpactorSaveStructure"
description: "Save structure (version 1) for a DiggingImpactor: whether and how it is buried."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiggingImpactorSaveStructure

A **class** in `Root.Township`, the global namespace.

Save structure (version 1) for a `DiggingImpactor`: whether and how it is buried.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<DiggingImpactor, DiggingImpactorSaveStructure>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`DiggingImpactor`](/mod/game-api/types/global-c-d/diggingimpactor), [`DiggingImpactorSaveStructure`](/mod/game-api/types/global-c-d/diggingimpactorsavestructure)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiggingImpactorSaveStructure()"}</code> | <span className="api-desc">Creates a `DiggingImpactorSaveStructure` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-efficiencyratio" /><code>{"float efficiencyRatio"}</code> | <span className="api-desc">Hit efficiency when buried; -1 when not buried.</span> |
| <Link id="m-pivot" /><code>{"Vector3 pivot"}</code> | <span className="api-desc">Ground point the buried tool levers around.</span> |
