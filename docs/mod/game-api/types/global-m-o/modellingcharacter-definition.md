---
title: "ModellingCharacter.Definition"
description: "Private inspector entry on ModellingCharacter: a paid (non-free) player cosmetic and its colours, used for the randomized and advertising lists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter.Definition

A **private class** in `Root.Township`, the global namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private inspector entry on `ModellingCharacter`: a paid (non-free) player cosmetic and its colours, used for the randomized and advertising lists.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Nested in** [`ModellingCharacter`](/mod/game-api/types/global-m-o/modellingcharacter)
- **Inherits or implements** [`ModellingCharacter.IDefinition`](/mod/game-api/types/global-m-o/modellingcharacter-idefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Definition()"}</code> | <span className="api-desc">Creates a `ModellingCharacter.Definition` with default values.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | <span className="api-desc">Hidden label for the entry.</span> |

<details className="api-private">
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] arguments"}</code> | <span className="api-desc">Backing field for `Arguments`.</span> |
| <Link id="m-asset" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" asset"}</code> | <span className="api-desc">Backing field for `Asset`; the inspector only offers non-free cosmetics.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments-2" /><code><Link to="/mod/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] Arguments { get; set; }"}</code> | <span className="api-desc">The colour pairs applied to the cosmetic.</span> |
| <Link id="m-asset-2" /><code><Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Asset { get; set; }"}</code> | <span className="api-desc">The cosmetic. Setting it casts to `PlayerCosmeticDefinition`.</span> |

## Used in

Members of other types that take, return or hold a `Definition`:

<div className="api-used-in">

[`ModellingCharacter.advertising`](/mod/game-api/types/global-m-o/modellingcharacter#m-advertising), [`ModellingCharacter.randomized`](/mod/game-api/types/global-m-o/modellingcharacter#m-randomized).

</div>
