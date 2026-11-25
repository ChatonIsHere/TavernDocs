---
title: "Element"
description: "A cave generation element asset: a map chunk display prefab chosen by how well it suits a set of attributes, plus named variables."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Element

A **class** in `Root.Township`, `Alta.Caves`.

A cave generation element asset: a map chunk display prefab chosen by how well it suits a set of attributes, plus named variables.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/game-api/types/assembly-other/generalvalue), `ISerializationCallbackReceiver`
- **Derived types** [`Element.Create`](/game-api/types/alta-world-generation/element-create), [`ElementDoubleValue`](/game-api/types/alta-world-generation/elementdoublevalue), [`ElementSingleValue`](/game-api/types/alta-world-generation/elementsinglevalue)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/element-create), [`SerializedVariable`](/game-api/types/alta-world-generation/element-serializedvariable)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Element()"}</code> |

## Fields

<details>
<summary>5 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-attributeweightings" /><code>{"private "}<Link to="/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] attributeWeightings"}</code> |
| <Link id="m-curvelessefficiency" /><code>{"private float curvelessEfficiency"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{" prefab"}</code> |
| <Link id="m-serializedvariables" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/element-serializedvariable">{"Element.SerializedVariable"}</Link>{"> serializedVariables"}</code> |
| <Link id="m-variables" /><code>{"private Dictionary<string, "}<Link to="/game-api/types/assembly-other/generalvalue">{"GeneralValue"}</Link>{"> variables"}</code> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-prefab-2" /><code><Link to="/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{" Prefab { get; }"}</code> | The map chunk display prefab for this element. |
| <Link id="m-variables-2" /><code>{"Dictionary<string, "}<Link to="/game-api/types/assembly-other/generalvalue">{"GeneralValue"}</Link>{"> Variables { get; }"}</code> | Named values set on the element. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getefficiency" /><code>{"float GetEfficiency("}<Link to="/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | How well this element suits the given attributes, from its weighting curves. |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Element`:

[`Biome.GetElementMultiplier`](/game-api/types/alta-world-generation/biome#m-getelementmultiplier), [`BiomeResources.elements`](/game-api/types/alta-world-generation/biomeresources#m-elements), [`BiomeResources.Elements`](/game-api/types/alta-world-generation/biomeresources#m-elements-2), [`GeneratedBiome.ElementChances`](/game-api/types/alta-world-generation/generatedbiome#m-elementchances), [`GeneratedBiome.GeneratedBiome`](/game-api/types/alta-world-generation/generatedbiome#m-ctor), [`GeneratingBiome.elementMultipliers`](/game-api/types/alta-world-generation/generatingbiome#m-elementmultipliers), [`IBiomeValues.ElementChances`](/game-api/types/alta-world-generation/ibiomevalues#m-elementchances), [`Plugin.element`](/game-api/types/alta-world-generation/plugin#m-element), [`Plugin.Element`](/game-api/types/alta-world-generation/plugin#m-element-2), [`ApplyElement.element`](/game-api/types/alta-world-generation/applyelement#m-element), [`ApplyElement.Element`](/game-api/types/alta-world-generation/applyelement#m-element-2), [`ApplyElementInstance.element`](/game-api/types/alta-world-generation/applyelementinstance#m-element).
