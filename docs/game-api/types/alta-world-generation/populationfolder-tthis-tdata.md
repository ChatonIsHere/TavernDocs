---
title: "PopulationFolder<TThis, TData>"
description: "Base for population folders with their own save data type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationFolder&lt;TThis, TData&gt;

A **class** in `Root.Township`, `Alta.Populations`.

Base for population folders with their own save data type. Saves and loads the population sample and the spawn point of each saved child.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`PopulationFolderBase`](/game-api/types/alta-world-generation/populationfolderbase), [`ISavable<TData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<TData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PopulationFolder`](/game-api/types/alta-world-generation/populationfolder), [`PopulationSpawnArea`](/game-api/types/alta-world-generation/populationspawnarea)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationFolder()"}</code> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-loadsetup" /><code>{"protected virtual void LoadSetup(TData data)"}</code> | Override to read extra settings from the save. Called first in load. |
| <Link id="m-savesetup" /><code>{"protected virtual void SaveSetup(TData data)"}</code> | Override to write extra settings to the save. |
| <Link id="m-serializesetup" /><code>{"protected virtual void SerializeSetup("}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Override hook to stream settings. Nothing in this build calls it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-registerchild" /><code>{"private void Registerchild("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" child, "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" parent, int childIndex)"}</code> | Links a loaded child to its saved spawn point entry and moves it to the spawner's default folder. |

</details>
