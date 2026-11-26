---
title: "PositionedNetworkPrefab"
description: "A saved network prefab with its local position and rotation, for spawning dynamic content such as a skill's demo items or a shrine testing area."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionedNetworkPrefab

A **class** in `Root.Township`, the global namespace.

A saved network prefab with its local position and rotation, for spawning dynamic content such as a skill's demo items or a shrine testing area.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** [`PositionedPrefab<NetworkEntity>`](/mod/game-api/types/global-p/positionedprefab-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PositionedNetworkPrefab()"}</code> | <span className="api-desc">Creates a `PositionedNetworkPrefab` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canmove" /><code>{"private bool canMove"}</code> | <span className="api-desc">Backing field for `CanMove`.</span> |
| <Link id="m-saveddynamicobject" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" savedDynamicObject"}</code> | <span className="api-desc">Serialized save of the prefab and its children.</span> |
| <Link id="m-savemode" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode"}</code> | <span className="api-desc">Save mode given to the spawned entity (default ignore, so it isn't saved).</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canmove-2" /><code>{"bool CanMove { get; }"}</code> | <span className="api-desc">Whether the saved entity had a `NetworkRigidbody`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"override "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Load(Transform transformParent, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Spawns the saved entity under the parent at the saved position in the given chunk.</span> |
| <Link id="m-save" /><code>{"override void Save("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" scenePrefab)"}</code> | <span className="api-desc">Records the entity's position, whether it can move, and its saved object data.</span> |
| <Link id="m-gettransform" /><code>{"protected override Transform GetTransform("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" scenePrefab)"}</code> | <span className="api-desc">Returns the entity's transform for saving the position.</span> |

## Used in

Members of other types that take, return or hold a `PositionedNetworkPrefab`:

<div className="api-used-in">

[`ProfessionSkill.dynamicContentPrefabs`](/mod/game-api/types/global-p/professionskill#m-dynamiccontentprefabs), [`ProfessionSkill.DynamicContentPrefabs`](/mod/game-api/types/global-p/professionskill#m-dynamiccontentprefabs-2), [`SkillShrineTestingArea.SpawnedEntity.positionedPrefab`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-positionedprefab), [`SkillShrineTestingArea.SpawnedEntity.SpawnedEntity`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-ctor).

</div>
