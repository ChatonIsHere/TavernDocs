---
title: "ModellingCharacter.FreeDefinition"
description: "Private inspector entry on ModellingCharacter: a free player cosmetic and its colours, used for the basics and free lists."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter.FreeDefinition

A **private class** in `Root.Township`, no namespace. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Private inspector entry on `ModellingCharacter`: a free player cosmetic and its colours, used for the basics and free lists.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Nested in** [`ModellingCharacter`](/game-api/types/global-m-o/modellingcharacter)
- **Inherits or implements** [`ModellingCharacter.IDefinition`](/game-api/types/global-m-o/modellingcharacter-idefinition)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"FreeDefinition()"}</code> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-name" /><code>{"string name"}</code> | Hidden label for the entry. |

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-arguments" /><code>{"private "}<Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] arguments"}</code> | Backing field for `Arguments`. |
| <Link id="m-asset" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" asset"}</code> | Backing field for `Asset`; the inspector only offers free cosmetics. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-arguments-2" /><code><Link to="/game-api/types/alta-customization/twocolors">{"TwoColors"}</Link>{"[] Arguments { get; set; }"}</code> | The colour pairs applied to the cosmetic. |
| <Link id="m-asset-2" /><code><Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" Asset { get; set; }"}</code> | The cosmetic. Setting it casts to `PlayerCosmeticDefinition`. |

## Used in

Members of other types that take, return or hold a `FreeDefinition`:

[`ModellingCharacter.basics`](/game-api/types/global-m-o/modellingcharacter#m-basics), [`ModellingCharacter.free`](/game-api/types/global-m-o/modellingcharacter#m-free).
