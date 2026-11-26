---
title: "Distribution<TThis, T, TItem, TFestivityGroup>"
description: "A weighted random table of assets, used by world and cave generation."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Distribution&lt;TThis, T, TItem, TFestivityGroup&gt;

A **class** in `Root.Township`, `Alta.Caves`.

A weighted random table of assets, used by world and cave generation. Weights can depend on location attributes, and festivity groups add items while their festivity is active.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`HashedGeneralValue<TThis>`](/mod/game-api/types/assembly-other/hashedgeneralvalue-t), [`IDistribution<T>`](/mod/game-api/types/alta-world-generation/idistribution-outt)
- **Derived types** [`Distribution`](/mod/game-api/types/alta-world-generation/distribution), [`GameObjectDistribution`](/mod/game-api/types/alta-world-generation/gameobjectdistribution)
- **Nested types** [`BaseFestivityGroup`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-basefestivitygroup), [`BaseItem`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-baseitem)
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Distribution()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-festivities" /><code>{"protected List<TFestivityGroup> festivities"}</code> | Serialized festivity groups. |
| <Link id="m-items" /><code>{"protected List<TItem> items"}</code> | Serialized main items. |
| <Link id="m-nullchance" /><code>{"protected float nullChance"}</code> | Chance (0 to 1) of picking nothing, before attribute multipliers. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-globalmultipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] globalMultipliers"}</code> | Attribute curves that scale the overall chance of picking anything, based on the given attribute set. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-festivities-2" /><code>{"IReadOnlyCollection<TFestivityGroup> Festivities { get; }"}</code> | Groups of extra items that count only while their festivity is active. |
| <Link id="m-items-2" /><code>{"IReadOnlyCollection<TItem> Items { get; }"}</code> | The main items and their weights. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmultiplier" /><code>{"float GetMultiplier(int itemIndex, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | The weight of a main item for the given attributes. |
| <Link id="m-getpossibleresults" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/idistributionitem-outt">{"IDistributionItem"}</Link>{"<T>> GetPossibleResults() (iterator)"}</code> | Every item that could come out right now, including active festivity items. |
| <Link id="m-getrandom" /><code>{"T GetRandom("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | Picks a weighted random item, or null by the null chance. Accepts your own random source. |
| <Link id="m-getrandom-2" /><code>{"T GetRandom(Func<double> randomValue, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | Picks a weighted random item, or null by the null chance. Accepts your own random source. |
| <Link id="m-getrandomindex" /><code>{"int GetRandomIndex("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, out TFestivityGroup festivity)"}</code> | Like `GetRandom` but returns the index, and the festivity group it came from if any. -1 for nothing. |
| <Link id="m-getrandomindex-2" /><code>{"int GetRandomIndex(Func<double> randomValue, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, out TFestivityGroup festivity)"}</code> | Like `GetRandom` but returns the index, and the festivity group it came from if any. -1 for nothing. |
| <Link id="m-migrate" /><code>{"void Migrate<TThisOther, TOther, TItemOther, TFestivityGroupOther>(TThisOther other, Func<TOther, T> convert)"}</code> | Copies another distribution's settings and items, converting each item's asset. |
| <Link id="m-random" /><code>{"static double Random()"}</code> | The default random source, Unity's `Random.value`. |
