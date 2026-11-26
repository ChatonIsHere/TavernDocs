---
title: "CosmeticPresetApplier"
description: "Loads a preset when a preset trophy is released into its trigger, applying the saved look to a customization handler."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetApplier

A **class** in `Root.Township`, `Alta.Customization`.

Loads a preset when a preset trophy is released into its trigger, applying the saved look to a customization handler. Customization room, client side.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetApplier()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | Customization handler whose cosmetics get replaced. |
| <Link id="m-trophysource" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticpresettrophytrigger">{"CosmeticPresetTrophyTrigger"}</Link>{" trophySource"}</code> | Trigger that reports trophies being released inside it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-applytrophy" /><code>{"void ApplyTrophy("}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{" trophy)"}</code> | Loads the trophy's saved cosmetics onto the handler's manager, then sends the trophy back. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Subscribes `ApplyTrophy` to the trigger's `ReleasedTrophy` event. |

</details>
