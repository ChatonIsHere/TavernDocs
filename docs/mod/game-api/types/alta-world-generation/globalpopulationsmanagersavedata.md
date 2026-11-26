---
title: "GlobalPopulationsManagerSaveData"
description: "Save data (version 1) for the GlobalPopulationsManager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPopulationsManagerSaveData

A **class** in `Root.Township`, `Alta.Populations`.

Save data (version 1) for the `GlobalPopulationsManager`. The manager saves an empty one and ignores it on load in this build.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<GlobalPopulationsManager, GlobalPopulationsManagerSaveData>`](/mod/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GlobalPopulationsManager`](/mod/game-api/types/alta-world-generation/globalpopulationsmanager), [`GlobalPopulationsManagerSaveData`](/mod/game-api/types/alta-world-generation/globalpopulationsmanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalPopulationsManagerSaveData()"}</code> | <span className="api-desc">Creates a `GlobalPopulationsManagerSaveData` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentpopulations" /><code>{"int[] currentPopulations"}</code> | <span className="api-desc">Population counts, matched by index with `hashes`. Not written in this build.</span> |
| <Link id="m-hashes" /><code>{"uint[] hashes"}</code> | <span className="api-desc">Population definition hashes. Not written in this build.</span> |
