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
| <Link id="m-ctor" /><code>{"CosmeticDefinitionSku(string sku)"}</code> | <span className="api-desc">Creates a `CosmeticDefinitionSku` from `sku`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code><Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments"}</code> | <span className="api-desc">Customization arguments applied with this SKU.</span> |
| <Link id="m-name" /><code>{"string name"}</code> | <span className="api-desc">Hidden display name for the entry in inspector lists.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticsku" /><code>{"private string cosmeticSKU"}</code> | <span className="api-desc">Backing field for `CosmeticSKU`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-cosmeticsku-2" /><code>{"string CosmeticSKU { get; }"}</code> | <span className="api-desc">The store SKU string for the cosmetic.</span> |

## Used in

Members of other types that take, return or hold a `CosmeticDefinitionSku`:

<div className="api-used-in">

[`LocalPlayerAdvertisingTrophy.advertised`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-advertised), [`LocalPlayerAdvertisingTrophy.baseBody`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-basebody), [`LocalPlayerAdvertisingTrophy.EnsureMinimumArgumentsPresent`](/mod/game-api/types/global-i-l/localplayeradvertisingtrophy#m-ensureminimumargumentspresent).

</div>
