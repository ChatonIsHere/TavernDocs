---
title: "EcosystemSaveData"
description: "Save data (version 1) for an Ecosystem: the spawn point positions of each population in it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EcosystemSaveData

A **class** in `Root.Township`, `Alta.Populations`.

Save data (version 1) for an `Ecosystem`: the spawn point positions of each population in it.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<Ecosystem, EcosystemSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Ecosystem`](/mod/game-api/types/alta-world-generation/ecosystem), [`EcosystemSaveData`](/mod/game-api/types/alta-world-generation/ecosystemsavedata)
- **Nested types** [`Entry`](/mod/game-api/types/alta-world-generation/ecosystemsavedata-entry)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EcosystemSaveData()"}</code> | <span className="api-desc">Creates an `EcosystemSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code><Link to="/mod/game-api/types/alta-world-generation/ecosystemsavedata-entry">{"EcosystemSaveData.Entry"}</Link>{"[] entries"}</code> | <span className="api-desc">One entry per population, with its key and spawn point positions and rotations.</span> |
