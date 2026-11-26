---
title: "Rule"
description: "A PAGaC placement rule: a grid of tag lists per configuration that must match before a part goes in, plus whether it can overlap itself in other rotations."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Rule

A **class** in `Root.Township`, `Alta.PAGaC`.

A PAGaC placement rule: a grid of tag lists per configuration that must match before a part goes in, plus whether it can overlap itself in other rotations. A ScriptableObject that flattens its 4D tag grid for Unity serialization.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`RuleBase`](/mod/game-api/types/alta-world-generation/rulebase), `ISerializationCallbackReceiver`
- **Nested types** [`RotationOverlap`](/mod/game-api/types/alta-world-generation/rule-rotationoverlap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Rule()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationoverlap" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/rule-rotationoverlap">{"Rule.RotationOverlap"}</Link>{" rotationOverlap"}</code> | <span className="api-desc">Backing field for `Overlap`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overlap" /><code><Link to="/mod/game-api/types/alta-world-generation/rule-rotationoverlap">{"Rule.RotationOverlap"}</Link>{" Overlap { get; }"}</code> | <span className="api-desc">Whether the same rule may be placed again in the same cells at another rotation (perpendicular, mirrored, either, all or none).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deserialize" /><code>{"static void DeSerialize(int configurations, int sizeX, int sizeY, int sizeZ, List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags, int[] serializedTagCounts)"}</code> | <span className="api-desc">Fills the 4D tag grid from the flat tag array and per-cell counts.</span> |
| <Link id="m-forcebeforeserialize" /><code>{"void ForceBeforeSerialize()"}</code> | <span className="api-desc">Runs the before-serialize step by hand, flattening the tag grid into the serialized arrays.</span> |
| <Link id="m-recreatetags" /><code>{"static void RecreateTags(ref List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, int configurations, int sizeX, int sizeY, int sizeZ)"}</code> | <span className="api-desc">Makes a fresh 4D grid of empty tag lists at the given sizes.</span> |
| <Link id="m-resize" /><code>{"static void Resize(bool isClearing, ref List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, int configurations, int sizeX, int sizeY, int sizeZ)"}</code> | <span className="api-desc">Recreates the tag grid if its sizes don't match, or clears every list when `isClearing` is set.</span> |
| <Link id="m-serialize" /><code>{"static void Serialize(int configurations, int sizeX, int sizeY, int sizeZ, List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, ref "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags, ref int[] serializedTagCounts)"}</code> | <span className="api-desc">Flattens the 4D tag grid into one tag array plus a count per cell.</span> |

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | <span className="api-desc">After Unity loads the asset, rebuilds the 4D tag grid from the flat arrays.</span> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | <span className="api-desc">Before Unity saves the asset, resizes the tag grid and flattens it into the serialized arrays.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: resizes the tag grid when sizes or configuration count change.</span> |

</details>

## Used in

Members of other types that take, return or hold a `Rule`:

<div className="api-used-in">

[`Part.rule`](/mod/game-api/types/alta-world-generation/part#m-rule), [`Part.Rule`](/mod/game-api/types/alta-world-generation/part#m-rule-2), [`RuleOptionSet.rule`](/mod/game-api/types/alta-world-generation/ruleoptionset#m-rule), [`RuleOptionSet.Rule`](/mod/game-api/types/alta-world-generation/ruleoptionset#m-rule-2).

</div>
