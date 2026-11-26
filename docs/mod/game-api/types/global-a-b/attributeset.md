---
title: "AttributeSet"
description: "Biome attribute values (such as for spawning) with an optional parent set to fall back on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttributeSet

A **class** in `Root.Township`, the global namespace.

Biome attribute values (such as for spawning) with an optional parent set to fall back on. Unset values are rolled from the attribute's default range on first read.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** `IEnumerable<KeyValuePair<BiomeAttribute, float>>`, `IEnumerable`
- **Documented in** [Caves](/mod/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{"("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" parent)"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{", float> attributes"}</code> | <span className="api-desc">This set's own attribute values. Missing ones fall back to the parent, or are rolled from the attribute's default range and stored.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parent" /><code><Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Parent { get; private set; }"}</code> | <span className="api-desc">The set to fall back on.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"float Get("}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, Random random = null)"}</code> | <span className="api-desc">Returns the value here, else the parent's; with no parent, rolls one in the default range and stores it.</span> |
| <Link id="m-getenumerator" /><code>{"IEnumerator<KeyValuePair<"}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{", float>> GetEnumerator() (iterator)"}</code> | <span className="api-desc">Lists values set here, then the parent's values not overridden here.</span> |
| <Link id="m-isset" /><code>{"bool IsSet("}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, bool isIncludingParent = true)"}</code> | <span className="api-desc">Whether the attribute has a value here (or in a parent, by default).</span> |
| <Link id="m-set" /><code>{"void Set("}<Link to="/mod/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, float value)"}</code> | <span className="api-desc">Sets a value in this set.</span> |
| <Link id="m-setparent" /><code>{"void SetParent("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" parent)"}</code> | <span className="api-desc">Changes the parent set.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | <span className="api-desc">Lists values set here, then the parent's values not overridden here.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AttributeSet`:

<div className="api-used-in">

[`CaveGeneratingBiome.GenerateAttributes`](/mod/game-api/types/alta-world-generation/cavegeneratingbiome#m-generateattributes), [`Distribution.GetRandomAs`](/mod/game-api/types/alta-world-generation/distribution#m-getrandomas), [`Distribution<TThis, T, TItem, TFestivityGroup>.GetMultiplier`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup#m-getmultiplier), [`Distribution<TThis, T, TItem, TFestivityGroup>.GetRandom`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup#m-getrandom), [`Distribution<TThis, T, TItem, TFestivityGroup>.GetRandomIndex`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup#m-getrandomindex), [`Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem.GetValue`](/mod/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-baseitem#m-getvalue), [`Element.GetEfficiency`](/mod/game-api/types/alta-world-generation/element#m-getefficiency), [`GeneratedBiome.Attributes`](/mod/game-api/types/alta-world-generation/generatedbiome#m-attributes), [`GeneratedBiome.GeneratedBiome`](/mod/game-api/types/alta-world-generation/generatedbiome#m-ctor), [`GeneratingBiome.GenerateAttributes`](/mod/game-api/types/alta-world-generation/generatingbiome#m-generateattributes), [`IBiomeValues.Attributes`](/mod/game-api/types/alta-world-generation/ibiomevalues#m-attributes), [`IDistribution<T>.GetRandom`](/mod/game-api/types/alta-world-generation/idistribution-outt#m-getrandom), [`IDistributionItem<T>.GetValue`](/mod/game-api/types/alta-world-generation/idistributionitem-outt#m-getvalue), [`IDistributionValue.Evaluate`](/mod/game-api/types/alta-world-generation/idistributionvalue#m-evaluate), [`Section.ApplyMultipliers`](/mod/game-api/types/alta-world-generation/section#m-applymultipliers), [`Edge.Attributes`](/mod/game-api/types/alta-world-generation/edge#m-attributes), [`Node<TNode, TPath>.Attributes`](/mod/game-api/types/alta-world-generation/node-tnode-tpath#m-attributes), [`AttributeImpact.GetImpact`](/mod/game-api/types/alta-world-generation/attributeimpact#m-getimpact), [`AttributeEvaluation.GetEfficiency`](/mod/game-api/types/global-a-b/attributeevaluation#m-getefficiency), [`AttributeUsage.GetValue`](/mod/game-api/types/global-a-b/attributeusage#m-getvalue), [`GenerationCore.Evaluate`](/mod/game-api/types/global-e-h/generationcore#m-evaluate), [`SpawnData.Attributes`](/mod/game-api/types/global-s/spawndata#m-attributes).

</div>
