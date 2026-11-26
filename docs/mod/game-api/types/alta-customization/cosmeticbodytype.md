---
title: "CosmeticBodyType"
description: "Customization part that sets the character's body type: animator body shape plus belt dock and stat bar spacing."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticBodyType

A **class** in `Root.Township`, `Alta.Customization`.

Customization part that sets the character's body type: animator body shape plus belt dock and stat bar spacing. Client-side visuals, part of a body type cosmetic definition.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationVisualPart<CustomizationArguments>`](/mod/game-api/types/alta-customization/customizationvisualpart-targuments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticBodyType()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-bodytype" /><code>{"static readonly int BodyType"}</code> | <span className="api-desc">Hash of the animator integer parameter `BodyType`.</span> |

<details className="api-private">
<summary>5 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodytypeindex" /><code>{"private int bodyTypeIndex"}</code> | <span className="api-desc">Backing field for `BodyTypeIndex`.</span> |
| <Link id="m-ismasculine" /><code>{"private bool isMasculine"}</code> | <span className="api-desc">Backing field for `IsMasculine`.</span> |
| <Link id="m-pouchbeltdocksdistanceratio" /><code>{"private float pouchBeltDocksDistanceRatio"}</code> | <span className="api-desc">Backing field for `PouchBeltDocksDistanceRatio`.</span> |
| <Link id="m-statbarsdistanceratio" /><code>{"private float statbarsDistanceRatio"}</code> | <span className="api-desc">Scale for how far the stat bars sit from the body; applied in `Attach`, no public getter.</span> |
| <Link id="m-toolbeltdocksdistanceratio" /><code>{"private float toolBeltDocksDistanceRatio"}</code> | <span className="api-desc">Backing field for `ToolBeltDocksDistanceRatio`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-bodytypeindex-2" /><code>{"int BodyTypeIndex { get; }"}</code> | <span className="api-desc">Index of this body type (0 to 7). Even indices are feminine shapes, odd are masculine, going small, medium, buff, large.</span> |
| <Link id="m-ismasculine-2" /><code>{"bool IsMasculine { get; }"}</code> | <span className="api-desc">Whether this is a masculine body type. `CosmeticHairPart` uses it to pick the chance of rolling no hair.</span> |
| <Link id="m-pouchbeltdocksdistanceratio-2" /><code>{"float PouchBeltDocksDistanceRatio { get; }"}</code> | <span className="api-desc">Scale for how far the pouch belt docks sit from the body.</span> |
| <Link id="m-toolbeltdocksdistanceratio-2" /><code>{"float ToolBeltDocksDistanceRatio { get; }"}</code> | <span className="api-desc">Scale for how far the tool belt docks sit from the body.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applytoanimator" /><code>{"static void ApplyToAnimator(Animator animator, int bodyTypeIndex)"}</code> | <span className="api-desc">Sets the animator's `BodyType` integer, jumps it to the matching state (F_small, M_small and so on up to index 7) and updates it once.</span> |
| <Link id="m-attach" /><code>{"protected override void Attach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Applies the body type to the handler's character dummy: animator integer, tool belt, pouch belt and stat bar distance ratios, and the cosmetic packer's body type index.</span> |
| <Link id="m-changearguments" /><code>{"protected override void ChangeArguments("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Does nothing; body types take no arguments.</span> |
| <Link id="m-detach" /><code>{"protected override void Detach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Does nothing; the next body type overwrites the values.</span> |
