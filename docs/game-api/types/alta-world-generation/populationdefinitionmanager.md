---
title: "PopulationDefinitionManager"
description: "Saved per-definition overrides of the respawn time."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDefinitionManager

A **class** in `Root.Township`, `Alta.Populations`.

Saved per-definition overrides of the respawn time.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PopulationDefinitionManagerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PopulationDefinitionManagerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PopulationDefinitionManagerData`](/game-api/types/alta-world-generation/populationdefinitionmanagerdata)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationDefinitionManager()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalues" /><code>{"private static Dictionary<uint, float> currentValues"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valuedupdated" /><code>{"static event Action<"}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{"> ValuedUpdated"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"static float GetValue("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> |  |
| <Link id="m-resetvalue" /><code>{"static float ResetValue("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> |  |
| <Link id="m-setvalue" /><code>{"static void SetValue("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, float value)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
