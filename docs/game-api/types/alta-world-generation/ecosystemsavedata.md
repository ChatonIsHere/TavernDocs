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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<Ecosystem, EcosystemSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`Ecosystem`](/game-api/types/alta-world-generation/ecosystem), [`EcosystemSaveData`](/game-api/types/alta-world-generation/ecosystemsavedata)
- **Nested types** [`Entry`](/game-api/types/alta-world-generation/ecosystemsavedata-entry)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EcosystemSaveData()"}</code> | Creates an `EcosystemSaveData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-entries" /><code><Link to="/game-api/types/alta-world-generation/ecosystemsavedata-entry">{"EcosystemSaveData.Entry"}</Link>{"[] entries"}</code> | One entry per population, with its key and spawn point positions and rotations. |
