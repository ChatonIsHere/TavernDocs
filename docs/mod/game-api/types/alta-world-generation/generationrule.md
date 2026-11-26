---
title: "GenerationRule"
description: "A PAGaC rule asset that, where its pattern matches, edits the tag grid with a list of steps (set, remove or clear tags per cell)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# GenerationRule

A **class** in `Root.Township`, `Alta.PAGaC`.

A PAGaC rule asset that, where its pattern matches, edits the tag grid with a list of steps (set, remove or clear tags per cell). Used by the generation `Constructor`.

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)
- **Inherits or implements** [`RuleBase`](/mod/game-api/types/alta-world-generation/rulebase), `ISerializationCallbackReceiver`
- **Derived types** [`GenerationRule.Create`](/mod/game-api/types/alta-world-generation/generationrule-create)
- **Nested types** [`Create`](/mod/game-api/types/alta-world-generation/generationrule-create), [`Step`](/mod/game-api/types/alta-world-generation/generationrule-step)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"GenerationRule()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-serializedsteptagcounts" /><code>{"private int[] serializedStepTagCounts"}</code> | Flattened tag count per step cell, used for Unity serialization. |
| <Link id="m-serializedsteptags" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"[] serializedStepTags"}</code> | Flattened step tags, used for Unity serialization. |
| <Link id="m-steps" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/generationrule-step">{"GenerationRule.Step"}</Link>{"> steps"}</code> | Backing field for `Steps`. |
| <Link id="m-steptags" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] stepTags"}</code> | Backing field for `StepTags`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-steps-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/generationrule-step">{"GenerationRule.Step"}</Link>{"> Steps { get; }"}</code> | The steps run in order on a match. `Set` puts the first tag in the cell, `Remove` clears the cell if its tag is listed, `Clear` empties it. |
| <Link id="m-steptags-2" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] StepTags { get; }"}</code> | Tag lists indexed by step, x, y and z. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-forcebeforeserialize" /><code>{"void ForceBeforeSerialize()"}</code> | Runs the serialize callback by hand to flatten the tag grids into the serialized arrays. |
| <Link id="m-getsteptags" /><code>{"List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{"> GetStepTags(int step, int x, int y, int z)"}</code> | The tags a given step uses at one cell of the rule. |
| <Link id="m-onvalidate" /><code>{"void OnValidate()"}</code> | Resizes the tag grids to the current size, configuration and step counts. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-onafterdeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnAfterDeserialize()"}</code> | Rebuilds the match and step tag grids from the flattened serialized arrays. |
| <Link id="m-onbeforeserialize" /><code>{"private void UnityEngine.ISerializationCallbackReceiver.OnBeforeSerialize()"}</code> | Resizes and flattens the match and step tag grids into the serialized arrays. |
| <Link id="m-resize" /><code>{"private void Resize(bool isClearing, ref List<"}<Link to="/mod/game-api/types/alta-world-generation/tag">{"Tag"}</Link>{">[,,,] tags, int configurations, int sizeX, int sizeY, int sizeZ)"}</code> | Resizes a four dimensional tag grid, optionally clearing it. |

</details>

## Used in

Members of other types that take, return or hold a `GenerationRule`:

[`ApplyGenerationRule.generationRules`](/mod/game-api/types/alta-world-generation/applygenerationrule#m-generationrules), [`Constructor.Apply`](/mod/game-api/types/alta-world-generation/constructor#m-apply).
