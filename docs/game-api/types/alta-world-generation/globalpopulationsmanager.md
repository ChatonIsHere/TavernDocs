---
title: "GlobalPopulationsManager"
description: "class GlobalPopulationsManager in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GlobalPopulationsManager

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`ISavable<GlobalPopulationsManagerSaveData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<GlobalPopulationsManagerSaveData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`GlobalPopulationsManagerSaveData`](/game-api/types/alta-world-generation/globalpopulationsmanagersavedata)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GlobalPopulationsManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-populations" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{"[] populations"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"override void Initialize()"}</code> |  |
| <Link id="m-onscenedestroy" /><code>{"private void OnSceneDestroy("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-startup" /><code>{"private void StartUp()"}</code> |  |
