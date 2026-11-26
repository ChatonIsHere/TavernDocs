---
title: "BuriedItemTag"
description: "Item component that sets how the item sits when SpawnBuried spawns it underground, and how far it must be pulled out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuriedItemTag

A **class** in `Root.Township`, the global namespace.

Item component that sets how the item sits when `SpawnBuried` spawns it underground, and how far it must be pulled out.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`ItemComponent`](/mod/game-api/types/global-i-l/itemcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuriedItemTag()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buriedoffset" /><code>{"private Vector3 buriedOffset"}</code> | <span className="api-desc">Backing field for `BuriedOffset`.</span> |
| <Link id="m-buriedrotation" /><code>{"private Vector3 buriedRotation"}</code> | <span className="api-desc">Backing field for `BuriedRotation`.</span> |
| <Link id="m-overridepulldistance" /><code>{"private float overridePullDistance"}</code> | <span className="api-desc">Backing field for `OverridePullDistance`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buriedoffset-2" /><code>{"Vector3 BuriedOffset { get; }"}</code> | <span className="api-desc">Local position the buried item is placed at under its `SpawnBuried` parent.</span> |
| <Link id="m-buriedrotation-2" /><code>{"Vector3 BuriedRotation { get; }"}</code> | <span className="api-desc">Local rotation of the buried item, as Euler angles.</span> |
| <Link id="m-overridepulldistance-2" /><code>{"float OverridePullDistance { get; }"}</code> | <span className="api-desc">Pull distance given to the `PullUpPickup` instead of its default. 0 keeps the default.</span> |
