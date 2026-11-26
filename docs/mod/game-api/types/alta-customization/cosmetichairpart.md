---
title: "CosmeticHairPart"
description: "Mesh part for hair."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticHairPart

A **class** in `Root.Township`, `Alta.Customization`.

Mesh part for hair. After a random roll it may remove the hair, or else copies the eyebrow colours onto it.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CosmeticMeshPart`](/mod/game-api/types/alta-customization/cosmeticmeshpart)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticHairPart()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-feminineremovechance" /><code>{"private float feminineRemoveChance"}</code> | <span className="api-desc">Chance (0 to 1) that randomizing leaves a feminine body type bald. Default 0.</span> |
| <Link id="m-masculineremovechance" /><code>{"private float masculineRemoveChance"}</code> | <span className="api-desc">Chance (0 to 1) that randomizing leaves a masculine body type bald. Default 0.2.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-postrandomize" /><code>{"override async Task PostRandomize("}<Link to="/mod/game-api/types/alta-customization/playercosmeticwrapper">{"PlayerCosmeticWrapper"}</Link>{" cosmeticWrapper)"}</code> | <span className="api-desc">After randomizing, rolls against the body type's remove chance to drop the hair; if kept, copies the eyebrow slot's two colours onto the hair.</span> |
