---
title: "PopulationSetup"
description: "Asset defining a population: how fast it spawns and where its members may be placed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PopulationSetup

A **class** in `Root.Township`, `Alta.Populations`.

Asset defining a population: how fast it spawns and where its members may be placed. Looked up by hash; also used as a fill set when placing members.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<PopulationSetup>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`IFillSet`](/game-api/types/alta-world-generation/ifillset)
- **Derived types** [`PopulationSetup`](/game-api/types/alta-world-generation/populationsetup), [`PopulationSetup.Create`](/game-api/types/alta-world-generation/populationsetup-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/populationsetup-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PopulationSetup()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> |
| <Link id="m-maximumfailscore" /><code>{"private float maximumFailScore"}</code> |
| <Link id="m-minimumfailscore" /><code>{"private float minimumFailScore"}</code> |
| <Link id="m-spawnmodifiers" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" spawnModifiers"}</code> |
| <Link id="m-spawnrate" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/spawnrate">{"SpawnRate"}</Link>{" spawnRate"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclearingonunload" /><code>{"bool IsClearingOnUnload { get; }"}</code> | Always false. |
| <Link id="m-ismoving-2" /><code>{"bool IsMoving { get; }"}</code> | Whether the members move around (turn on for creatures). |
| <Link id="m-maximumfailscore-2" /><code>{"float MaximumFailScore { get; }"}</code> | Top of the random score range a spot must beat when placing. |
| <Link id="m-minimumfailscore-2" /><code>{"float MinimumFailScore { get; }"}</code> | Bottom of the random score range a spot must beat when placing. |
| <Link id="m-spawnmodifiers-2" /><code><Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | Rules that score and adjust spawn spots. The first (point) modifiers are not used. |
| <Link id="m-spawnrate-2" /><code><Link to="/game-api/types/alta-world-generation/spawnrate">{"SpawnRate"}</Link>{" "}<Link to="/game-api/types/alta-world-generation/spawnrate">{"SpawnRate"}</Link>{" { get; }"}</code> | Spawn rate settings: density, respawn interval, growth and emerge rate. |

## Used in

Members of other types that take, return or hold a `PopulationSetup`:

[`ForestPopulationCreator.definition`](/game-api/types/alta-world-generation/forestpopulationcreator#m-definition), [`BasicEcosystem.Get`](/game-api/types/alta-world-generation/basicecosystem#m-get), [`BasicEcosystem.populations`](/game-api/types/alta-world-generation/basicecosystem#m-populations), [`BasicPopulation.Definition`](/game-api/types/alta-world-generation/basicpopulation#m-definition), [`BasicPopulationFolder.definition`](/game-api/types/alta-world-generation/basicpopulationfolder#m-definition), [`BasicPopulationFolder.Definition`](/game-api/types/alta-world-generation/basicpopulationfolder#m-definition-2), [`BasicPopulationFolder.Setup`](/game-api/types/alta-world-generation/basicpopulationfolder#m-setup), [`BasicPopulationFolderSaveData.definition`](/game-api/types/alta-world-generation/basicpopulationfoldersavedata#m-definition), [`BasicPopulationItem.Definition`](/game-api/types/alta-world-generation/basicpopulationitem#m-definition), [`IPopulationFolder.Definition`](/game-api/types/alta-world-generation/ipopulationfolder#m-definition), [`PopulationPath.Definition`](/game-api/types/global-p/populationpath#m-definition), [`PopulationPathSaveData.definition`](/game-api/types/global-p/populationpathsavedata#m-definition).
