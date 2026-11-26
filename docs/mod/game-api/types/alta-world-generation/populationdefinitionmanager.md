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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`ISavable<PopulationDefinitionManagerData>`](/mod/game-api/types/global-i-l/isavable-t), [`ISavableSave<PopulationDefinitionManagerData>`](/mod/game-api/types/alta-world/isavablesave-outt), [`ISavableSaveBase`](/mod/game-api/types/alta-world/isavablesavebase)
- **Derived types** [`PopulationDefinitionManagerData`](/mod/game-api/types/alta-world-generation/populationdefinitionmanagerdata)
- **Documented in** [Populations and spawners](/mod/game-api/world/populations)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationDefinitionManager()"}</code> | <span className="api-desc">Creates a `PopulationDefinitionManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-currentvalues" /><code>{"private static Dictionary<uint, float> currentValues"}</code> | <span className="api-desc">Override tick times by definition hash.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-valuedupdated" /><code>{"static event Action<"}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{"> ValuedUpdated"}</code> | <span className="api-desc">Raised when a definition's override is set or removed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getvalue" /><code>{"static float GetValue("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">The overridden tick time for a definition, or its `BaseTickFrequency` when not overridden.</span> |
| <Link id="m-resetvalue" /><code>{"static float ResetValue("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition)"}</code> | <span className="api-desc">Removes a definition's override and returns its base tick time.</span> |
| <Link id="m-setvalue" /><code>{"static void SetValue("}<Link to="/mod/game-api/types/alta-world-generation/populationdefinition">{"PopulationDefinition"}</Link>{" definition, float value)"}</code> | <span className="api-desc">Overrides a definition's tick time in seconds and raises `ValuedUpdated`.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Clears all overrides.</span> |

</details>
