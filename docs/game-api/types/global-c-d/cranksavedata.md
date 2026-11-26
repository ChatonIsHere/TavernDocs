---
title: "CrankSaveData"
description: "Save structure (version 1) for a Crank: stores its current value."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CrankSaveData

A **internal class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Save structure (version 1) for a `Crank`: stores its current value. Internal; used by the save system.

- **Listed in** [No namespace: C to D](/game-api/types/global-c-d)
- **Inherits or implements** [`NewSaveData<Crank, CrankSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Crank`](/game-api/types/global-c-d/crank), [`CrankSaveData`](/game-api/types/global-c-d/cranksavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CrankSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-value" /><code>{"float value"}</code> | The crank's saved value. |
