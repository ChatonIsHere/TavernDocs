---
title: "EditableEquipmentManager"
description: "The set of editable equipment slots on a player's customisation handler, switched on and off together."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditableEquipmentManager

A **class** in `Root.Township`, `Alta.Customization`.

The set of editable equipment slots on a player's customisation handler, switched on and off together. Found on `PlayerCustomizationHandler.EditableEquipmentManager`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EditableEquipmentManager()"}</code> |

## Fields

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-customization/editableequipmentslot">{"EditableEquipmentSlot"}</Link>{"[] slots"}</code> | The editable equipment slots. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate("}<Link to="/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | Activates every slot against the player's `Customization.Equipment`. |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | Deactivates every slot. |

## Used in

Members of other types that take, return or hold a `EditableEquipmentManager`:

[`PlayerCustomizationHandler.editableEquipmentManager`](/game-api/types/alta-customization/playercustomizationhandler#m-editableequipmentmanager), [`PlayerCustomizationHandler.EditableEquipmentManager`](/game-api/types/alta-customization/playercustomizationhandler#m-editableequipmentmanager-2).
