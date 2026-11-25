---
title: "PositionedNetworkPrefab"
description: "class PositionedNetworkPrefab in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PositionedNetworkPrefab

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`PositionedPrefab<NetworkEntity>`](/game-api/types/global-p/positionedprefab-t)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PositionedNetworkPrefab()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-canmove" /><code>{"private bool canMove"}</code> |
| <Link id="m-saveddynamicobject" /><code>{"private "}<Link to="/game-api/types/global-s/serializedsaveddynamicobject">{"SerializedSavedDynamicObject"}</Link>{" savedDynamicObject"}</code> |
| <Link id="m-savemode" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/savemode">{"SaveMode"}</Link>{" saveMode"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-canmove-2" /><code>{"bool CanMove { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-load" /><code>{"override "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Load(Transform transformParent, "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |
| <Link id="m-save" /><code>{"override void Save("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" scenePrefab)"}</code> |
| <Link id="m-gettransform" /><code>{"protected override Transform GetTransform("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" scenePrefab)"}</code> |

## Used in

Members of other types that take, return or hold a `PositionedNetworkPrefab`:

[`ProfessionSkill.dynamicContentPrefabs`](/game-api/types/global-p/professionskill#m-dynamiccontentprefabs), [`ProfessionSkill.DynamicContentPrefabs`](/game-api/types/global-p/professionskill#m-dynamiccontentprefabs-2), [`SkillShrineTestingArea.SpawnedEntity.positionedPrefab`](/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-positionedprefab), [`SkillShrineTestingArea.SpawnedEntity.SpawnedEntity`](/game-api/types/global-s/skillshrinetestingarea-spawnedentity#m-ctor).
