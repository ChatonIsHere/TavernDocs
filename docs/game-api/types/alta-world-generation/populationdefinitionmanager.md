---
title: "PopulationDefinitionManager"
description: "Holds per population respawn time overrides (set by a console command) and saves them with the scene."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationDefinitionManager

A **class** in `Root.Township`, `Alta.Populations`.

Holds per population respawn time overrides (set by a console command) and saves them with the scene. All members are static.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PopulationDefinitionManagerData>`](/game-api/types/global-i-l/isavable-t), [`ISavableSave<PopulationDefinitionManagerData>`](/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PopulationDefinitionManagerData`](/game-api/types/alta-world-generation/populationdefinitionmanagerdata)
- **Documented in** [Populations and spawners](/game-api/world/populations)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationDefinitionManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalues" /><code>{"private static Dictionary<uint, float> currentValues"}</code> | Override tick times by definition hash. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valuedupdated" /><code>{"static event Action<"}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{"> ValuedUpdated"}</code> | Raised when a definition's override is set or removed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"static float GetValue("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | The overridden tick time for a definition, or its `BaseTickFrequency` when not overridden. |
| <Link id="m-resetvalue" /><code>{"static float ResetValue("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | Removes a definition's override and returns its base tick time. |
| <Link id="m-setvalue" /><code>{"static void SetValue("}<Link to="/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, float value)"}</code> | Overrides a definition's tick time in seconds and raises `ValuedUpdated`. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Clears all overrides. |

</details>
