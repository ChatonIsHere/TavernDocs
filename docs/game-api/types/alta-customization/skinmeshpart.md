---
title: "SkinMeshPart"
description: "Mesh part for bare skin (body parts)."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SkinMeshPart

A **class** in `Root.Township`, `Alta.Customization`.

Mesh part for bare skin (body parts). Always coloured with the character's skin colour and blitted with the skin shaders.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CosmeticMeshPartBase<CustomizationArguments>`](/game-api/types/alta-customization/cosmeticmeshpartbase-t)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SkinMeshPart()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impeded" /><code>{"private static "}<Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{" impeded"}</code> | Shared arguments marked impeded, used when the skin is covered. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-istexturesharingforced" /><code>{"override bool IsTextureSharingForced { get; }"}</code> | Always true, so skin textures share atlas space even when sharing is off. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-getcustompickupcolors" /><code>{"override void GetCustomPickupColors(out "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" primary, out "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" secondary)"}</code> | Uses the local player's skin colours for the pickup preview, when there is a local player. |
| <Link id="m-changearguments" /><code>{"protected override void ChangeArguments("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Updates the packer input to the skin colour, or the impeded marker when impeded, and repacks. |
| <Link id="m-createinput" /><code>{"protected override "}<Link to="/game-api/types/alta-customization/cosmeticpacker-input">{"CosmeticPacker.Input"}</Link>{" CreateInput("}<Link to="/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | Builds the packer input with the skin colour and copies of the dummy's skin blit materials. |
