---
title: "DiggingImpactorSaveStructure"
description: "Save structure (version 1) for a DiggingImpactor: whether and how it is buried."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DiggingImpactorSaveStructure

A **class** in `Root.Township`, no namespace.

Save structure (version 1) for a `DiggingImpactor`: whether and how it is buried.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<DiggingImpactor, DiggingImpactorSaveStructure>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`DiggingImpactor`](/game-api/types/global-c-d/diggingimpactor), [`DiggingImpactorSaveStructure`](/game-api/types/global-c-d/diggingimpactorsavestructure)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DiggingImpactorSaveStructure()"}</code> | Creates a `DiggingImpactorSaveStructure` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-efficiencyratio" /><code>{"float efficiencyRatio"}</code> | Hit efficiency when buried; -1 when not buried. |
| <Link id="m-pivot" /><code>{"Vector3 pivot"}</code> | Ground point the buried tool levers around. |
