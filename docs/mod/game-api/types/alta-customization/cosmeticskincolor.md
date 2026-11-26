---
title: "CosmeticSkinColor"
description: "Customization part that sets the character's skin colour."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticSkinColor

A **class** in `Root.Township`, `Alta.Customization`.

Customization part that sets the character's skin colour.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationVisualPart<CustomizationArguments>`](/mod/game-api/types/alta-customization/customizationvisualpart-targuments)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticSkinColor()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-nosecolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" noseColor"}</code> | <span className="api-desc">Serialized nose colour. Not used in this file.</span> |
| <Link id="m-skincolor" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" skinColor"}</code> | <span className="api-desc">Backing field for `SkinColor`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-skincolor-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" SkinColor { get; }"}</code> | <span className="api-desc">The skin colour this part applies. `SkinColorPickup` shows it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-attach" /><code>{"protected override void Attach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Sets the dummy's skin colour and repacks the character.</span> |
| <Link id="m-changearguments" /><code>{"protected override void ChangeArguments("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{" arguments)"}</code> | <span className="api-desc">Does nothing; the colour comes from the part, not arguments.</span> |
| <Link id="m-detach" /><code>{"protected override void Detach("}<Link to="/mod/game-api/types/alta-customization/icustomizationhandler">{"ICustomizationHandler"}</Link>{" handler)"}</code> | <span className="api-desc">Does nothing; the next skin colour overwrites it.</span> |
