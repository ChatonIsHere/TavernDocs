---
title: "EyePickup"
description: "Customization pickup for eyes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EyePickup

A **class** in `Root.Township`, `Alta.Customization`.

Customization pickup for eyes. Shows the eye material coloured with the item's two colours.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationPickup`](/game-api/types/alta-customization/customizationpickup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EyePickup()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-meshrenderer" /><code>{"private MeshRenderer meshRenderer"}</code> | Renderer that shows the eye. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | Spawns the pickup, then gives its renderer a copy of the eye part's material coloured by the first argument. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Destroys the material made in `Spawn`. |

</details>
