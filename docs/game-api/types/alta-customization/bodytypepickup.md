---
title: "BodyTypePickup"
description: "Customization pickup for a body type, whose animator shows the chosen body type."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# BodyTypePickup

A **class** in `Root.Township`, `Alta.Customization`.

Customization pickup for a body type, whose animator shows the chosen body type. Client-side character customization.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationPickup`](/game-api/types/alta-customization/customizationpickup)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"BodyTypePickup()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | Animator that shows the body type. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-spawn" /><code>{"override "}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" definition, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | Spawns the pickup and sets its animator's body type from the definition's first visual part. |
