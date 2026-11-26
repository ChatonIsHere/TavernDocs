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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NewSaveData<GlobalPopulationsManager, GlobalPopulationsManagerSaveData>`](/game-api/types/global-m-o/newsavedata-tsavable-tdata)
- **Derived types** [`GlobalPopulationsManager`](/game-api/types/alta-world-generation/globalpopulationsmanager), [`GlobalPopulationsManagerSaveData`](/game-api/types/alta-world-generation/globalpopulationsmanagersavedata)
- **Attributes** `SaveStructure`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalPopulationsManagerSaveData()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentpopulations" /><code>{"int[] currentPopulations"}</code> | Population counts, matched by index with `hashes`. Not written in this build. |
| <Link id="m-hashes" /><code>{"uint[] hashes"}</code> | Population definition hashes. Not written in this build. |
