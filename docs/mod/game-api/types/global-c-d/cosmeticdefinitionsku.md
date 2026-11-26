---
title: "CosmeticDefinitionSku"
description: "A cosmetic store SKU plus the customization arguments that go with it, set in the inspector."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticDefinitionSku

A **class** in `Root.Township`, the global namespace.

A cosmetic store SKU plus the customization arguments that go with it, set in the inspector.

- **Listed in** [Global namespace: C to D](/mod/game-api/types/global-c-d)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticDefinitionSku(string sku)"}</code> | Creates a `CosmeticDefinitionSku` from `sku`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments"}</code> | Customization arguments applied with this SKU. |
| <Link id="m-name" /><code>{"string name"}</code> | Hidden display name for the entry in inspector lists. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticsku" /><code>{"private string cosmeticSKU"}</code> | Backing field for `CosmeticSKU`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticsku-2" /><code>{"string CosmeticSKU { get; }"}</code> | The store SKU string for the cosmetic. |

## Used in

Members of other types that take, return or hold a `CosmeticDefinitionSku`:

[`LocalPlayerAdvertisingTrophy.advertised`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-advertised), [`LocalPlayerAdvertisingTrophy.baseBody`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-basebody), [`LocalPlayerAdvertisingTrophy.EnsureMinimumArgumentsPresent`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-ensureminimumargumentspresent).
