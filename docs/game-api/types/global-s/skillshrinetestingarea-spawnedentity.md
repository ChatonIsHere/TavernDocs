---
title: "SkillShrineTestingArea.SpawnedEntity"
description: "class SkillShrineTestingArea.SpawnedEntity in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkillShrineTestingArea.SpawnedEntity

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Nested in** [`SkillShrineTestingArea`](/game-api/types/global-s/skillshrinetestingarea)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnedEntity("}<Link to="/game-api/types/global-p/positionednetworkprefab">{"PositionedNetworkPrefab"}</Link>{" positionedPrefab, "}<Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea)"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-positionedprefab" /><code>{"private "}<Link to="/game-api/types/global-p/positionednetworkprefab">{"PositionedNetworkPrefab"}</Link>{" positionedPrefab"}</code> |
| <Link id="m-spawnedentity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" spawnedEntity"}</code> |
| <Link id="m-testingarea" /><code>{"private "}<Link to="/game-api/types/global-s/skillshrinetestingarea">{"SkillShrineTestingArea"}</Link>{" testingArea"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-needtocheck" /><code>{"bool NeedToCheck { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-checkdistance" /><code>{"void CheckDistance(Vector3 center)"}</code> |
| <Link id="m-clear" /><code>{"void Clear()"}</code> |
| <Link id="m-resetifneeded" /><code>{"void ResetIfNeeded()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-destroyandrestart" /><code>{"private void DestroyAndRestart("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-spawnentity" /><code>{"private void SpawnEntity()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SpawnedEntity`:

[`SkillShrineTestingArea.spawnedEntities`](/game-api/types/global-s/skillshrinetestingarea#m-spawnedentities).
