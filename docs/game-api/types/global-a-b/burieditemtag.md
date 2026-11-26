---
title: "BuriedItemTag"
description: "Item component that sets how the item sits when SpawnBuried spawns it underground, and how far it must be pulled out."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BuriedItemTag

A **class** in `Root.Township`, no namespace.

Item component that sets how the item sits when `SpawnBuried` spawns it underground, and how far it must be pulled out.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`ItemComponent`](/game-api/types/global-i-l/itemcomponent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"BuriedItemTag()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-buriedoffset" /><code>{"private Vector3 buriedOffset"}</code> | Backing field for `BuriedOffset`. |
| <Link id="m-buriedrotation" /><code>{"private Vector3 buriedRotation"}</code> | Backing field for `BuriedRotation`. |
| <Link id="m-overridepulldistance" /><code>{"private float overridePullDistance"}</code> | Backing field for `OverridePullDistance`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buriedoffset-2" /><code>{"Vector3 BuriedOffset { get; }"}</code> | Local position the buried item is placed at under its `SpawnBuried` parent. |
| <Link id="m-buriedrotation-2" /><code>{"Vector3 BuriedRotation { get; }"}</code> | Local rotation of the buried item, as Euler angles. |
| <Link id="m-overridepulldistance-2" /><code>{"float OverridePullDistance { get; }"}</code> | Pull distance given to the `PullUpPickup` instead of its default. 0 keeps the default. |
