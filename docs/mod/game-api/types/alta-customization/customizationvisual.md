---
title: "CustomizationVisual"
description: "Prefab component for one cosmetic's look: its visual parts plus the slots it takes as primary and the slots it disables."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationVisual

A **class** in `Root.Township`, `Alta.Customization`.

Prefab component for one cosmetic's look: its visual parts plus the slots it takes as primary and the slots it disables.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICustomizationVisual`](/mod/game-api/types/alta-customization/icustomizationvisual)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CustomizationVisual()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-additionalprimary" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" additionalPrimary"}</code> | <span className="api-desc">Extra slots treated as primary on top of the primary parts' own.</span> |
| <Link id="m-disableslots" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" disableSlots"}</code> | <span className="api-desc">Backing set for `DisableSlots`.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for validation errors.</span> |
| <Link id="m-parts" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationvisualpart">{"CustomizationVisualPart"}</Link>{"[] parts"}</code> | <span className="api-desc">Backing field for `Parts`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-definition" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; set; }"}</code> | <span className="api-desc">The cosmetic definition this visual belongs to.</span> |
| <Link id="m-disableslots-2" /><code>{"IEnumerable<int> DisableSlots { get; }"}</code> | <span className="api-desc">Slots disabled while this visual is worn.</span> |
| <Link id="m-parts-2" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{"[] Parts { get; }"}</code> | <span className="api-desc">The visual's parts.</span> |
| <Link id="m-primaryslots" /><code>{"IEnumerable<int> PrimarySlots { get; }"}</code> | <span className="api-desc">Slots of the primary parts plus `additionalPrimary`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> | <span className="api-desc">Fresh copies of every part's default arguments, one per part.</span> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Gives each part its index and a link back to this visual.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-hascircularreference" /><code>{"private bool HasCircularReference()"}</code> | <span className="api-desc">Editor check: whether any mesh part's copy-colour-from chain loops back to itself, which crashes painting.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Logs an error if there are no primary slots or there is a circular colour reference.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationVisual`:

<div className="api-used-in">

[`PlayerCosmeticDefinition.visualPrefab`](/mod/game-api/types/alta-customization/playercosmeticdefinition#m-visualprefab), [`PlayerEquipmentDefinition.visualPrefab`](/mod/game-api/types/alta-customization/playerequipmentdefinition#m-visualprefab).

</div>
