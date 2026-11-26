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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<PopulationSetup>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), [`IFillSet`](/mod/game-api/types/alta-world-generation/ifillset)
- **Derived types** [`PopulationSetup`](/mod/game-api/types/alta-world-generation/populationsetup), [`PopulationSetup.Create`](/mod/game-api/types/alta-world-generation/populationsetup-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/populationsetup-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PopulationSetup()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismoving" /><code>{"private bool isMoving"}</code> | <span className="api-desc">Backing field for `IsMoving`. Turn on for creatures.</span> |
| <Link id="m-maximumfailscore" /><code>{"private float maximumFailScore"}</code> | <span className="api-desc">Backing field for `MaximumFailScore`, the top of the range the fill picks a random fail threshold from (0 to 1).</span> |
| <Link id="m-minimumfailscore" /><code>{"private float minimumFailScore"}</code> | <span className="api-desc">Backing field for `MinimumFailScore`, the bottom of the range the fill picks a random fail threshold from (0 to 1).</span> |
| <Link id="m-spawnmodifiers" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" spawnModifiers"}</code> | <span className="api-desc">Backing field for `SpawnModifiers`. The first (point) modifier isn't used.</span> |
| <Link id="m-spawnrate" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/spawnrate">{"SpawnRate"}</Link>{" spawnRate"}</code> | <span className="api-desc">Backing field for `SpawnRate`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isclearingonunload" /><code>{"bool IsClearingOnUnload { get; }"}</code> | <span className="api-desc">Always false.</span> |
| <Link id="m-ismoving-2" /><code>{"bool IsMoving { get; }"}</code> | <span className="api-desc">Whether the members move around (turn on for creatures).</span> |
| <Link id="m-maximumfailscore-2" /><code>{"float MaximumFailScore { get; }"}</code> | <span className="api-desc">Top of the random score range a spot must beat when placing.</span> |
| <Link id="m-minimumfailscore-2" /><code>{"float MinimumFailScore { get; }"}</code> | <span className="api-desc">Bottom of the random score range a spot must beat when placing.</span> |
| <Link id="m-spawnmodifiers-2" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/spawnmodifiers">{"SpawnModifiers"}</Link>{" { get; }"}</code> | <span className="api-desc">Rules that score and adjust spawn spots. The first (point) modifiers are not used.</span> |
| <Link id="m-spawnrate-2" /><code><Link to="/mod/game-api/types/alta-world-generation/spawnrate">{"SpawnRate"}</Link>{" "}<Link to="/mod/game-api/types/alta-world-generation/spawnrate">{"SpawnRate"}</Link>{" { get; }"}</code> | <span className="api-desc">Spawn rate settings: density, respawn interval, growth and emerge rate.</span> |

## Used in

Members of other types that take, return or hold a `PopulationSetup`:

<div className="api-used-in">

[`ForestPopulationCreator.definition`](/mod/game-api/types/alta-world-generation/forestpopulationcreator#m-definition), [`BasicEcosystem.Get`](/mod/game-api/types/alta-world-generation/basicecosystem#m-get), [`BasicEcosystem.populations`](/mod/game-api/types/alta-world-generation/basicecosystem#m-populations), [`BasicPopulation.Definition`](/mod/game-api/types/alta-world-generation/basicpopulation#m-definition), [`BasicPopulationFolder.definition`](/mod/game-api/types/alta-world-generation/basicpopulationfolder#m-definition), [`BasicPopulationFolder.Definition`](/mod/game-api/types/alta-world-generation/basicpopulationfolder#m-definition-2), [`BasicPopulationFolder.Setup`](/mod/game-api/types/alta-world-generation/basicpopulationfolder#m-setup), [`BasicPopulationFolderSaveData.definition`](/mod/game-api/types/alta-world-generation/basicpopulationfoldersavedata#m-definition), [`BasicPopulationItem.Definition`](/mod/game-api/types/alta-world-generation/basicpopulationitem#m-definition), [`IPopulationFolder.Definition`](/mod/game-api/types/alta-world-generation/ipopulationfolder#m-definition), [`PopulationPath.Definition`](/mod/game-api/types/global-p/populationpath#m-definition), [`PopulationPathSaveData.definition`](/mod/game-api/types/global-p/populationpathsavedata#m-definition).

</div>
