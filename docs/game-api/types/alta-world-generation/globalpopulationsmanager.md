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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GlobalPopulationsManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GlobalPopulationsManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GlobalPopulationsManagerSaveData`](/game-api/types/alta-world-generation/globalpopulationsmanagersavedata)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GlobalPopulationsManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-populations" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{"[] populations"}</code> | The global population assets this manager runs. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> | Server: initializes every population and waits for `BootupFinished` to start them. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onscenedestroy" /><code>{"private void OnSceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Cleans every population when the entity is destroyed. |
| <Link id="m-startup" /><code>{"private void StartUp()"}</code> | Starts every population once the server finishes booting. |

</details>
