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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`GeneralValue`](/mod/game-api/types/assembly-other/generalvalue), `ISerializationCallbackReceiver`
- **Derived types** [`Element.Create`](/mod/game-api/types/alta-world-generation/element-create), [`ElementDoubleValue`](/mod/game-api/types/alta-world-generation/elementdoublevalue), [`ElementSingleValue`](/mod/game-api/types/alta-world-generation/elementsinglevalue)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/element-create), [`SerializedVariable`](/mod/game-api/types/alta-world-generation/element-serializedvariable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Element()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-attributeweightings" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/attributecurverange">{"AttributeCurveRange"}</Link>{"[] attributeWeightings"}</code> | <span className="api-desc">Attribute curves used by `GetEfficiency` to weight this element against an attribute set.</span> |
| <Link id="m-curvelessefficiency" /><code>{"private float curvelessEfficiency"}</code> | <span className="api-desc">Efficiency meant for when no curves are set. Not read by this class in this build.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{" prefab"}</code> | <span className="api-desc">Backing field for `Prefab`, the map chunk display spawned for this element.</span> |
| <Link id="m-serializedvariables" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/element-serializedvariable">{"Element.SerializedVariable"}</Link>{"> serializedVariables"}</code> | <span className="api-desc">Name and value pairs Unity saves in place of the `variables` dictionary.</span> |
| <Link id="m-variables" /><code>{"private Dictionary<string, "}<Link to="/mod/game-api/types/assembly-other/generalvalue">{"GeneralValue"}</Link>{"> variables"}</code> | <span className="api-desc">Backing field for `Variables`, named general values for this element.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-prefab-2" /><code><Link to="/mod/game-api/types/alta-world-generation/mapchunkdisplay">{"MapChunkDisplay"}</Link>{" Prefab { get; }"}</code> | <span className="api-desc">The map chunk display prefab for this element.</span> |
| <Link id="m-variables-2" /><code>{"Dictionary<string, "}<Link to="/mod/game-api/types/assembly-other/generalvalue">{"GeneralValue"}</Link>{"> Variables { get; }"}</code> | <span className="api-desc">Named values set on the element.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getefficiency" /><code>{"float GetEfficiency("}<Link to="/mod/game-api/types/global-a-b/attributeset">{"AttributeSet"}</Link>{" attributes)"}</code> | <span className="api-desc">How well this element suits the given attributes, from its weighting curves.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | <span className="api-desc">Rebuilds the `variables` dictionary from the serialized list.</span> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | <span className="api-desc">Copies the `variables` dictionary into the serialized list so Unity can save it.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Element`:

<div className="api-used-in">

[`Biome.GetElementMultiplier`](/mod/game-api/types/alta-world-generation/biome#m-getelementmultiplier), [`BiomeResources.elements`](/mod/game-api/types/alta-world-generation/biomeresources#m-elements), [`BiomeResources.Elements`](/mod/game-api/types/alta-world-generation/biomeresources#m-elements-2), [`GeneratedBiome.ElementChances`](/mod/game-api/types/alta-world-generation/generatedbiome#m-elementchances), [`GeneratedBiome.GeneratedBiome`](/mod/game-api/types/alta-world-generation/generatedbiome#m-ctor), [`GeneratingBiome.elementMultipliers`](/mod/game-api/types/alta-world-generation/generatingbiome#m-elementmultipliers), [`IBiomeValues.ElementChances`](/mod/game-api/types/alta-world-generation/ibiomevalues#m-elementchances), [`Plugin.element`](/mod/game-api/types/alta-world-generation/plugin#m-element), [`Plugin.Element`](/mod/game-api/types/alta-world-generation/plugin#m-element-2), [`ApplyElement.element`](/mod/game-api/types/alta-world-generation/applyelement#m-element), [`ApplyElement.Element`](/mod/game-api/types/alta-world-generation/applyelement#m-element-2), [`ApplyElementInstance.element`](/mod/game-api/types/alta-world-generation/applyelementinstance#m-element).

</div>
