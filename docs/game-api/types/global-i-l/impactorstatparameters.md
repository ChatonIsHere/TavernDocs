---
title: "ImpactorStatParameters"
description: "Item component for items that, when struck by an impact tool, apply an impact modifier to whoever is holding them."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ImpactorStatParameters

A **class** in `Root.Township`, no namespace.

Item component for items that, when struck by an impact tool, apply an impact modifier to whoever is holding them.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`ItemComponent`](/game-api/types/global-i-l/itemcomponent)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ImpactorStatParameters()"}</code> |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-impactmodifier" /><code>{"private "}<Link to="/game-api/types/alta-items/impactmodifiercomponent">{"ImpactModifierComponent"}</Link>{" impactModifier"}</code> | Backing field for `ImpactModifier`. |
| <Link id="m-impactmodifiervaluemultiplier" /><code>{"private float impactModifierValueMultiplier"}</code> | Backing field for `ImpactModifierValueMultiplier`. |
| <Link id="m-istriggeredbyothers" /><code>{"private bool isTriggeredByOthers"}</code> | If false, only the holder's own strikes trigger the modifier. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-impactmodifier-2" /><code><Link to="/game-api/types/alta-items/impactmodifiercomponent">{"ImpactModifierComponent"}</Link>{" ImpactModifier { get; }"}</code> | Impact modifier applied to the holder when the item is struck. |
| <Link id="m-impactmodifiervaluemultiplier-2" /><code>{"float ImpactModifierValueMultiplier { get; }"}</code> | Multiplier on the modifier's value. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-confirmsettings" /><code>{"bool ConfirmSettings("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" otherInteractor, "}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" interactor)"}</code> | True if strikes from other players count, or the striker is the holder. |
