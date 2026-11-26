---
title: "ModellingCharacter.Definition"
description: "Private inspector entry on ModellingCharacter: a paid (non-free) player cosmetic and its colours, used for the randomized and advertising lists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter.Definition

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private inspector entry on `ModellingCharacter`: a paid (non-free) player cosmetic and its colours, used for the randomized and advertising lists.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`ModellingCharacter`](/game-api/types/global-m-o/modellingcharacter)
- **Inherits or implements** [`ModellingCharacter.IDefinition`](/game-api/types/global-m-o/modellingcharacter-idefinition)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"Definition()"}</code> | Creates a `ModellingCharacter.Definition` with default values. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | Hidden label for the entry. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"private "}<Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] arguments"}</code> | Backing field for `Arguments`. |
| <Link id="m-asset" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" asset"}</code> | Backing field for `Asset`; the inspector only offers non-free cosmetics. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments-2" /><code><Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] Arguments { get; set; }"}</code> | The colour pairs applied to the cosmetic. |
| <Link id="m-asset-2" /><code><Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Asset { get; set; }"}</code> | The cosmetic. Setting it casts to `PlayerCosmeticDefinition`. |

## Used in

Members of other types that take, return or hold a `Definition`:

[`ModellingCharacter.advertising`](/game-api/types/global-m-o/modellingcharacter#m-advertising), [`ModellingCharacter.randomized`](/game-api/types/global-m-o/modellingcharacter#m-randomized).
