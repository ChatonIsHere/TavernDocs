---
title: "GlobalPopulationsManager"
description: "Scene entity that runs the GlobalPopulationDefinition assets on the server: initializes them, starts them once the server has booted, and cleans them up..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPopulationsManager

A **class** in `Root.Township`, `Alta.Populations`.

Scene entity that runs the `GlobalPopulationDefinition` assets on the server: initializes them, starts them once the server has booted, and cleans them up when destroyed.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GlobalPopulationsManagerSaveData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<GlobalPopulationsManagerSaveData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GlobalPopulationsManagerSaveData`](/mod/game-api/types/alta-world-generation/globalpopulationsmanagersavedata)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalPopulationsManager()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-populations" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{"[] populations"}</code> | <span className="api-desc">The global population assets this manager runs.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | <span className="api-desc">Server: initializes every population and waits for `BootupFinished` to start them.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onscenedestroy" /><code>{"private void OnSceneDestroy("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Cleans every population when the entity is destroyed.</span> |
| <Link id="m-startup" /><code>{"private void StartUp()"}</code> | <span className="api-desc">Starts every population once the server finishes booting.</span> |

</details>
