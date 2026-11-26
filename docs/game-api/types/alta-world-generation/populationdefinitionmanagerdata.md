---
title: "PopulationDefinitionManagerData"
description: "Save data (version 1) for the PopulationDefinitionManager: a value per population definition."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDefinitionManagerData

A **class** in `Root.Township`, `Alta.Populations`.

Save data (version 1) for the `PopulationDefinitionManager`: a value per population definition.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<PopulationDefinitionManager, PopulationDefinitionManagerData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`PopulationDefinitionManager`](/game-api/types/alta-world-generation/populationdefinitionmanager), [`PopulationDefinitionManagerData`](/game-api/types/alta-world-generation/populationdefinitionmanagerdata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationDefinitionManagerData()"}</code> | Creates a `PopulationDefinitionManagerData` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-hashes" /><code>{"uint[] hashes"}</code> | Definition hashes. |
| <Link id="m-times" /><code>{"float[] times"}</code> | Saved value for each hash, matched by index. |
