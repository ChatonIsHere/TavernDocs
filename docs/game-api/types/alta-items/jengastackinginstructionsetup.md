---
title: "JengaStackingInstructionSetup"
description: "Builds the stacking layout for the Jenga instruction: layers of items that turn 90 degrees each layer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# JengaStackingInstructionSetup

A **class** in `Root.Township`, `Alta.Inventory`.

Builds the stacking layout for the Jenga instruction: layers of items that turn 90 degrees each layer.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** [`StackingInstructionSetup<JengaStackingInstruction>`](/game-api/types/alta-items/stackinginstructionsetup-t)
- **Derived types** [`JengaStackingInstruction`](/game-api/types/alta-items/jengastackinginstruction)
- **Nested types** [`Level`](/game-api/types/alta-items/jengastackinginstructionsetup-level)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"JengaStackingInstructionSetup()"}</code> | Creates a `JengaStackingInstructionSetup` with default values. |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-instructions" /><code>{"private "}<Link to="/game-api/types/alta-items/jengastackinginstruction">{"JengaStackingInstruction"}</Link>{" instructions"}</code> | The instruction being set up. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setup" /><code>{"protected override void Setup(Bounds bounds, "}<Link to="/game-api/types/alta-items/jengastackinginstruction">{"JengaStackingInstruction"}</Link>{" instructions)"}</code> | Works out how many items fit per layer both ways and fills `Positions` layer by layer. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-getboundssize" /><code>{"private Vector3 GetBoundsSize(Quaternion rotation)"}</code> | Returns the item's bounds size after a rotation, with positive X and Z. |
| <Link id="m-setupposition" /><code>{"private Vector3 SetupPosition(Quaternion rotation, "}<Link to="/game-api/types/alta-items/jengastackinginstructionsetup-level">{"JengaStackingInstructionSetup.Level"}</Link>{" level, Vector3 boundsSize, Vector3 origin)"}</code> | Returns the corner start position for a layer. |

</details>
