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

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`RuleBase`](/game-api/types/alta-world-generation/rulebase), `ISerializationCallbackReceiver`
- **Nested types** [`RotationOverlap`](/game-api/types/alta-world-generation/rule-rotationoverlap)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Rule()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-rotationoverlap" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rule-rotationoverlap">{"Rule.RotationOverlap"}</Link>{" rotationOverlap"}</code> | Backing field for `Overlap`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-overlap" /><code><Link to="/game-api/types/alta-world-generation/rule-rotationoverlap">{"Rule.RotationOverlap"}</Link>{" Overlap { get; }"}</code> | Whether the same rule may be placed again in the same cells at another rotation (perpendicular, mirrored, either, all or none). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-deserialize" /><code>{"static void DeSerialize(int configurations, int sizeX, int sizeY, int sizeZ, List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags, int[] serializedTagCounts)"}</code> | Fills the 4D tag grid from the flat tag array and per-cell counts. |
| <Link id="m-forcebeforeserialize" /><code>{"void ForceBeforeSerialize()"}</code> | Runs the before-serialize step by hand, flattening the tag grid into the serialized arrays. |
| <Link id="m-recreatetags" /><code>{"static void RecreateTags(ref List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, int configurations, int sizeX, int sizeY, int sizeZ)"}</code> | Makes a fresh 4D grid of empty tag lists at the given sizes. |
| <Link id="m-resize" /><code>{"static void Resize(bool isClearing, ref List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, int configurations, int sizeX, int sizeY, int sizeZ)"}</code> | Recreates the tag grid if its sizes don't match, or clears every list when `isClearing` is set. |
| <Link id="m-serialize" /><code>{"static void Serialize(int configurations, int sizeX, int sizeY, int sizeZ, List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, ref "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags, ref int[] serializedTagCounts)"}</code> | Flattens the 4D tag grid into one tag array plus a count per cell. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | After Unity loads the asset, rebuilds the 4D tag grid from the flat arrays. |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | Before Unity saves the asset, resizes the tag grid and flattens it into the serialized arrays. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: resizes the tag grid when sizes or configuration count change. |

</details>

## Used in

Members of other types that take, return or hold a `Rule`:

[`Part.rule`](/game-api/types/alta-world-generation/part#m-rule), [`Part.Rule`](/game-api/types/alta-world-generation/part#m-rule-2), [`RuleOptionSet.rule`](/game-api/types/alta-world-generation/ruleoptionset#m-rule), [`RuleOptionSet.Rule`](/game-api/types/alta-world-generation/ruleoptionset#m-rule-2).
