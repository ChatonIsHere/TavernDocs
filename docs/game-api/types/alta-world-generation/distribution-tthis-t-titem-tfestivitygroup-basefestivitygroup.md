---
title: "Distribution<TThis, T, TItem, TFestivityGroup>.BaseFestivityGroup"
description: "A set of distribution items tied to a Festivity; they are only included in random picks while that festivity is activated."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Distribution&lt;TThis, T, TItem, TFestivityGroup&gt;.BaseFestivityGroup

A **class** in `Root.Township`, `Alta.Caves`.

A set of distribution items tied to a `Festivity`; they are only included in random picks while that festivity is activated.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Nested in** [`Distribution<TThis, T, TItem, TFestivityGroup>`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup)
- **Derived types** [`Distribution.FestivityGroup`](/game-api/types/alta-world-generation/distribution-festivitygroup), [`GameObjectDistribution.FestivityGroup`](/game-api/types/alta-world-generation/gameobjectdistribution-festivitygroup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BaseFestivityGroup()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-festivity" /><code>{"private "}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" festivity"}</code> | Backing field for `Festivity`. |
| <Link id="m-items" /><code>{"private List<TItem> items"}</code> | Backing field for `Items`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-festivity-2" /><code><Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" "}<Link to="/game-api/types/global-e-h/festivity">{"Festivity"}</Link>{" { get; }"}</code> | The festivity that turns this group on. |
| <Link id="m-items-2" /><code>{"List<TItem> Items { get; }"}</code> | The weighted items in this group. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-migrate" /><code>{"void Migrate<TThisOther, TOther, TItemOther, TFestivityGroupOther>(TFestivityGroupOther other, Func<TOther, T> convert)"}</code> | Copies the festivity and converts each item from another distribution type. |
