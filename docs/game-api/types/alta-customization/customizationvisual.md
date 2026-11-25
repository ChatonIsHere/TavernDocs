---
title: "CustomizationVisual"
description: "class CustomizationVisual in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CustomizationVisual

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`, [`ICustomizationVisual`](/game-api/types/alta-customization/icustomizationvisual)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CustomizationVisual()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-additionalprimary" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" additionalPrimary"}</code> |
| <Link id="m-disableslots" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" disableSlots"}</code> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |
| <Link id="m-parts" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationvisualpart">{"CustomizationVisualPart"}</Link>{"[] parts"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-definition" /><code><Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Definition { get; set; }"}</code> |
| <Link id="m-disableslots-2" /><code>{"IEnumerable<int> DisableSlots { get; }"}</code> |
| <Link id="m-parts-2" /><code><Link to="/game-api/types/alta-customization/icustomizationpart">{"ICustomizationPart"}</Link>{"[] Parts { get; }"}</code> |
| <Link id="m-primaryslots" /><code>{"IEnumerable<int> PrimarySlots { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-createdefaultarguments" /><code><Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] CreateDefaultArguments()"}</code> |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |

<details>
<summary>2 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-hascircularreference" /><code>{"private bool HasCircularReference()"}</code> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CustomizationVisual`:

[`PlayerCosmeticDefinition.visualPrefab`](/game-api/types/alta-customization/playercosmeticdefinition#m-visualprefab), [`PlayerEquipmentDefinition.visualPrefab`](/game-api/types/alta-customization/playerequipmentdefinition#m-visualprefab).
