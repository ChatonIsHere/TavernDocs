---
title: "Distribution<TThis, T, TItem, TFestivityGroup>"
description: "A weighted list (of prefabs, materials) whose weights depend on biome attributes. GetRandomAs<T>(AttributeSet). Populations and material parts use it."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Distribution&lt;TThis, T, TItem, TFestivityGroup&gt;

A **class** in `Root.Township`, `Alta.Caves`.

A weighted list (of prefabs, materials) whose weights depend on biome attributes. `GetRandomAs<T>(AttributeSet)`. Populations and material parts use it.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<TThis>`](/game-api/types/assembly-other/hashedgeneralvalue-t), [`IDistribution<T>`](/game-api/types/alta-world-generation/idistribution-outt)
- **Derived types** [`Distribution`](/game-api/types/alta-world-generation/distribution), [`GameObjectDistribution`](/game-api/types/alta-world-generation/gameobjectdistribution)
- **Nested types** [`BaseFestivityGroup`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-basefestivitygroup), [`BaseItem`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-baseitem)
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Distribution()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-festivities" /><code>{"protected List<TFestivityGroup> festivities"}</code> |  |
| <Link id="m-globalmultipliers" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] globalMultipliers"}</code> |  |
| <Link id="m-items" /><code>{"protected List<TItem> items"}</code> |  |
| <Link id="m-nullchance" /><code>{"protected float nullChance"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-festivities-2" /><code>{"IReadOnlyCollection<TFestivityGroup> Festivities { get; }"}</code> |  |
| <Link id="m-items-2" /><code>{"IReadOnlyCollection<TItem> Items { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmultiplier" /><code>{"float GetMultiplier(int itemIndex, "}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> |  |
| <Link id="m-getpossibleresults" /><code>{"IEnumerable<"}<Link to="/game-api/types/alta-world-generation/idistributionitem-outt">{"IDistributionItem"}</Link>{"<T>> GetPossibleResults() (iterator)"}</code> |  |
| <Link id="m-getrandom" /><code>{"T GetRandom("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> |  |
| <Link id="m-getrandom-2" /><code>{"T GetRandom(Func<double> randomValue, "}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> |  |
| <Link id="m-getrandomindex" /><code>{"int GetRandomIndex("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, out TFestivityGroup festivity)"}</code> |  |
| <Link id="m-getrandomindex-2" /><code>{"int GetRandomIndex(Func<double> randomValue, "}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, out TFestivityGroup festivity)"}</code> |  |
| <Link id="m-migrate" /><code>{"void Migrate<TThisOther, TOther, TItemOther, TFestivityGroupOther>(TThisOther other, Func<TOther, T> convert)"}</code> |  |
| <Link id="m-random" /><code>{"static double Random()"}</code> |  |
