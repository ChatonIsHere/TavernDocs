---
title: "AttributeSet"
description: "Biome attribute values (such as for spawning) with an optional parent set to fall back on."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AttributeSet

A **class** in `Root.Township`, no namespace.

Biome attribute values (such as for spawning) with an optional parent set to fall back on. Unset values are rolled from the attribute's default range on first read.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** `IEnumerable<KeyValuePair<BiomeAttribute, float>>`, `IEnumerable`
- **Documented in** [Caves](/game-api/world/caves)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code><Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{"("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" parent)"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributes" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{", float> attributes"}</code> | This set's own attribute values. Missing ones fall back to the parent, or are rolled from the attribute's default range and stored. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-parent" /><code><Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" Parent { get; private set; }"}</code> | The set to fall back on. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-get" /><code>{"float Get("}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, Random random = null)"}</code> | Returns the value here, else the parent's; with no parent, rolls one in the default range and stores it. |
| <Link id="m-getenumerator" /><code>{"IEnumerator<KeyValuePair<"}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{", float>> GetEnumerator() (iterator)"}</code> | Lists values set here, then the parent's values not overridden here. |
| <Link id="m-isset" /><code>{"bool IsSet("}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, bool isIncludingParent = true)"}</code> | Whether the attribute has a value here (or in a parent, by default). |
| <Link id="m-set" /><code>{"void Set("}<Link to="/game-api/types/global-a-b/biomeattribute">{"BiomeAttribute"}</Link>{" attribute, float value)"}</code> | Sets a value in this set. |
| <Link id="m-setparent" /><code>{"void SetParent("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" parent)"}</code> | Changes the parent set. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getenumerator-2" /><code>{"private IEnumerator System.Collections.IEnumerable.GetEnumerator()"}</code> | Lists values set here, then the parent's values not overridden here. |

</details>

## Used in

Members of other types that take, return or hold a `AttributeSet`:

[`CaveGeneratingBiome.GenerateAttributes`](/game-api/types/alta-world-generation/cavegeneratingbiome#m-generateattributes), [`Distribution.GetRandomAs`](/game-api/types/alta-world-generation/distribution#m-getrandomas), [`Distribution<TThis, T, TItem, TFestivityGroup>.GetMultiplier`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup#m-getmultiplier), [`Distribution<TThis, T, TItem, TFestivityGroup>.GetRandom`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup#m-getrandom), [`Distribution<TThis, T, TItem, TFestivityGroup>.GetRandomIndex`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup#m-getrandomindex), [`Distribution<TThis, T, TItem, TFestivityGroup>.BaseItem.GetValue`](/game-api/types/alta-world-generation/distribution-tthis-t-titem-tfestivitygroup-baseitem#m-getvalue), [`Element.GetEfficiency`](/game-api/types/alta-world-generation/element#m-getefficiency), [`GeneratedBiome.Attributes`](/game-api/types/alta-world-generation/generatedbiome#m-attributes), [`GeneratedBiome.GeneratedBiome`](/game-api/types/alta-world-generation/generatedbiome#m-ctor), [`GeneratingBiome.GenerateAttributes`](/game-api/types/alta-world-generation/generatingbiome#m-generateattributes), [`IBiomeValues.Attributes`](/game-api/types/alta-world-generation/ibiomevalues#m-attributes), [`IDistribution<T>.GetRandom`](/game-api/types/alta-world-generation/idistribution-outt#m-getrandom), [`IDistributionItem<T>.GetValue`](/game-api/types/alta-world-generation/idistributionitem-outt#m-getvalue), [`IDistributionValue.Evaluate`](/game-api/types/alta-world-generation/idistributionvalue#m-evaluate), [`Section.ApplyMultipliers`](/game-api/types/alta-world-generation/section#m-applymultipliers), [`Edge.Attributes`](/game-api/types/alta-world-generation/edge#m-attributes), [`Node<TNode, TPath>.Attributes`](/game-api/types/alta-world-generation/node-tnode-tpath#m-attributes), [`AttributeImpact.GetImpact`](/game-api/types/alta-world-generation/attributeimpact#m-getimpact), [`AttributeEvaluation.GetEfficiency`](/game-api/types/global-a-b/attributeevaluation#m-getefficiency), [`AttributeUsage.GetValue`](/game-api/types/global-a-b/attributeusage#m-getvalue), [`GenerationCore.Evaluate`](/game-api/types/global-e-h/generationcore#m-evaluate), [`SpawnData.Attributes`](/game-api/types/global-s/spawndata#m-attributes).
