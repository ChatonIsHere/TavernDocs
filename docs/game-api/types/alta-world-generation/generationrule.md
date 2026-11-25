---
title: "GenerationRule"
description: "class GenerationRule in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationRule

A **class** in `Root.Township`, `Alta.PAGaC`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** [`RuleBase`](/game-api/types/alta-world-generation/rulebase), `ISerializationCallbackReceiver`
- **Derived types** [`GenerationRule.Create`](/game-api/types/alta-world-generation/generationrule-create)
- **Nested types** [`Create`](/game-api/types/alta-world-generation/generationrule-create), [`Step`](/game-api/types/alta-world-generation/generationrule-step)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"GenerationRule()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-serializedsteptagcounts" /><code>{"private int[] serializedStepTagCounts"}</code> |
| <Link id="m-serializedsteptags" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedStepTags"}</code> |
| <Link id="m-steps" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/generationrule-step">{"GenerationRule.Step"}</Link>{"> steps"}</code> |
| <Link id="m-steptags" /><code>{"private List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] stepTags"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-steps-2" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/generationrule-step">{"GenerationRule.Step"}</Link>{"> Steps { get; }"}</code> |
| <Link id="m-steptags-2" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] StepTags { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-forcebeforeserialize" /><code>{"void ForceBeforeSerialize()"}</code> |
| <Link id="m-getsteptags" /><code>{"List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> GetStepTags(int step, int x, int y, int z)"}</code> |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> |

<details>
<summary>3 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> |
| <Link id="m-resize" /><code>{"private void Resize(bool isClearing, ref List<"}<Link to="/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, int configurations, int sizeX, int sizeY, int sizeZ)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `GenerationRule`:

[`ApplyGenerationRule.generationRules`](/game-api/types/alta-world-generation/applygenerationrule#m-generationrules), [`Constructor.Apply`](/game-api/types/alta-world-generation/constructor#m-apply).
