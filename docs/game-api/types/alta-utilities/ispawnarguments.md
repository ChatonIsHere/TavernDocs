---
title: "ISpawnArguments"
description: "Implemented by components on a prefab to read extra spawn arguments."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ISpawnArguments

An **interface** in `Root.Township`, `Alta.Utilities`.

Implemented by components on a prefab to read extra spawn arguments. The spawn console command and `PackageManager` pass them to every such component on the new entity.

- **Listed in** [Utilities and other Alta namespaces](/game-api/types/alta-utilities)
- **Derived types** [`ForgedModel<TB, TA>`](/game-api/types/alta-crafting/forgedmodel-tb-ta), [`PhysicalMaterialPart`](/game-api/types/global-p/physicalmaterialpart)

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkarguments" /><code>{"void CheckArguments(string[] arguments)"}</code> | Gets the extra spawn arguments and applies any it understands. `ForgedModel` implements it. |
