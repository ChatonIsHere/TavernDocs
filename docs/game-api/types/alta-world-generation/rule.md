---
title: "Rule"
description: "class Rule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# Rule

A **class** in `Root.Township`, `Alta.PAGaC`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`RuleBase`](/game-api/types/alta-world-generation/rulebase), `ISerializationCallbackReceiver`
- **Nested types** [`RotationOverlap`](/game-api/types/alta-world-generation/rule-rotationoverlap)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"Rule()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member |
| --- |
| <Link id="m-rotationoverlap" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rule-rotationoverlap">{"Rule.RotationOverlap"}</Link>{" rotationOverlap"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-overlap" /><code><Link to="/game-api/types/alta-world-generation/rule-rotationoverlap">{"Rule.RotationOverlap"}</Link>{" Overlap { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-deserialize" /><code>{"static void DeSerialize(int configurations, int sizeX, int sizeY, int sizeZ, List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags, int[] serializedTagCounts)"}</code> |
| <Link id="m-forcebeforeserialize" /><code>{"void ForceBeforeSerialize()"}</code> |
| <Link id="m-recreatetags" /><code>{"static void RecreateTags(ref List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, int configurations, int sizeX, int sizeY, int sizeZ)"}</code> |
| <Link id="m-resize" /><code>{"static void Resize(bool isClearing, ref List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, int configurations, int sizeX, int sizeY, int sizeZ)"}</code> |
| <Link id="m-serialize" /><code>{"static void Serialize(int configurations, int sizeX, int sizeY, int sizeZ, List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, ref "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedTags, ref int[] serializedTagCounts)"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `Rule`:

[`Part.rule`](/game-api/types/alta-world-generation/part#m-rule), [`Part.Rule`](/game-api/types/alta-world-generation/part#m-rule-2), [`RuleOptionSet.rule`](/game-api/types/alta-world-generation/ruleoptionset#m-rule), [`RuleOptionSet.Rule`](/game-api/types/alta-world-generation/ruleoptionset#m-rule-2).
