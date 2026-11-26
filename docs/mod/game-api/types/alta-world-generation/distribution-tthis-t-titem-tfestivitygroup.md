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
| <Link id="m-ctor" /><code>{"Distribution()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-festivities" /><code>{"protected List<TFestivityGroup> festivities"}</code> | <span className="api-desc">Serialized festivity groups.</span> |
| <Link id="m-items" /><code>{"protected List<TItem> items"}</code> | <span className="api-desc">Serialized main items.</span> |
| <Link id="m-nullchance" /><code>{"protected float nullChance"}</code> | <span className="api-desc">Chance (0 to 1) of picking nothing, before attribute multipliers.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-globalmultipliers" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] globalMultipliers"}</code> | <span className="api-desc">Attribute curves that scale the overall chance of picking anything, based on the given attribute set.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-festivities-2" /><code>{"IReadOnlyCollection<TFestivityGroup> Festivities { get; }"}</code> | <span className="api-desc">Groups of extra items that count only while their festivity is active.</span> |
| <Link id="m-items-2" /><code>{"IReadOnlyCollection<TItem> Items { get; }"}</code> | <span className="api-desc">The main items and their weights.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getmultiplier" /><code>{"float GetMultiplier(int itemIndex, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | <span className="api-desc">The weight of a main item for the given attributes.</span> |
| <Link id="m-getpossibleresults" /><code>{"IEnumerable<"}<Link to="/mod/game-api/types/alta-world-generation/idistributionitem-outt">{"IDistributionItem"}</Link>{"<T>> GetPossibleResults() (iterator)"}</code> | <span className="api-desc">Every item that could come out right now, including active festivity items.</span> |
| <Link id="m-getrandom" /><code>{"T GetRandom("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | <span className="api-desc">Picks a weighted random item, or null by the null chance. Accepts your own random source.</span> |
| <Link id="m-getrandom-2" /><code>{"T GetRandom(Func<double> randomValue, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes = null)"}</code> | <span className="api-desc">Picks a weighted random item, or null by the null chance. Accepts your own random source.</span> |
| <Link id="m-getrandomindex" /><code>{"int GetRandomIndex("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, out TFestivityGroup festivity)"}</code> | <span className="api-desc">Like `GetRandom` but returns the index, and the festivity group it came from if any. -1 for nothing.</span> |
| <Link id="m-getrandomindex-2" /><code>{"int GetRandomIndex(Func<double> randomValue, "}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes, out TFestivityGroup festivity)"}</code> | <span className="api-desc">Like `GetRandom` but returns the index, and the festivity group it came from if any. -1 for nothing.</span> |
| <Link id="m-migrate" /><code>{"void Migrate<TThisOther, TOther, TItemOther, TFestivityGroupOther>(TThisOther other, Func<TOther, T> convert)"}</code> | <span className="api-desc">Copies another distribution's settings and items, converting each item's asset.</span> |
| <Link id="m-random" /><code>{"static double Random()"}</code> | <span className="api-desc">The default random source, Unity's `Random.value`.</span> |
