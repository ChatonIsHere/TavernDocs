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
| <Link id="m-ctor" /><code>{"PositionedNetworkPrefab()"}</code> | Creates a `PositionedNetworkPrefab` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canmove" /><code>{"private bool canMove"}</code> | Backing field for `CanMove`. |
| <Link id="m-saveddynamicobject" /><code>{"private "}<Link to="/mod/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" savedDynamicObject"}</code> | Serialized save of the prefab and its children. |
| <Link id="m-savemode" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode"}</code> | Save mode given to the spawned entity (default ignore, so it isn't saved). |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-canmove-2" /><code>{"bool CanMove { get; }"}</code> | Whether the saved entity had a `NetworkRigidbody`. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-load" /><code>{"override "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Load(Transform transformParent, "}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Spawns the saved entity under the parent at the saved position in the given chunk. |
| <Link id="m-save" /><code>{"override void Save("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" scenePrefab)"}</code> | Records the entity's position, whether it can move, and its saved object data. |
| <Link id="m-gettransform" /><code>{"protected override Transform GetTransform("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" scenePrefab)"}</code> | Returns the entity's transform for saving the position. |

## Used in

Members of other types that take, return or hold a `PositionedNetworkPrefab`:

[`ProfessionSkill.dynamicContentPrefabs`](/mod/game-api/types/global-p/professionskill#m-dynamiccontentprefabs), [`ProfessionSkill.DynamicContentPrefabs`](/mod/game-api/types/global-p/professionskill#m-dynamiccontentprefabs-2), [`SkillShrineTestingArea.SpawnedEntity.positionedPrefab`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-positionedprefab), [`SkillShrineTestingArea.SpawnedEntity.SpawnedEntity`](/mod/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-ctor).
