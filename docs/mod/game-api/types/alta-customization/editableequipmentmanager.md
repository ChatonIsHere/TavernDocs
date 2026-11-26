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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditableEquipmentManager()"}</code> | <span className="api-desc">Creates an `EditableEquipmentManager` with default values.</span> |

## Fields

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-slots" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/editableequipmentslot">{"EditableEquipmentSlot"}</Link>{"[] slots"}</code> | <span className="api-desc">The editable equipment slots.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate("}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player)"}</code> | <span className="api-desc">Activates every slot against the player's `Customization.Equipment`.</span> |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | <span className="api-desc">Deactivates every slot.</span> |

## Used in

Members of other types that take, return or hold a `EditableEquipmentManager`:

<div className="api-used-in">

[`PlayerCustomizationHandler.editableEquipmentManager`](/mod/game-api/types/alta-customization/playercustomizationhandler#m-editableequipmentmanager), [`PlayerCustomizationHandler.EditableEquipmentManager`](/mod/game-api/types/alta-customization/playercustomizationhandler#m-editableequipmentmanager-2).

</div>
