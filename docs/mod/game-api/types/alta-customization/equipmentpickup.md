---
title: "EquipmentPickup"
description: "Customization pickup for equipment, backed by a networked entity spawned from the pickup's prefab."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EquipmentPickup

A **class** in `Root.Township`, `Alta.Customization`.

Customization pickup for equipment, backed by a networked entity spawned from the pickup's prefab.

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** [`CustomizationPickup`](/mod/game-api/types/alta-customization/customizationpickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EquipmentPickup()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-handleplacementresult" /><code>{"override void HandlePlacementResult(bool wasAdded)"}</code> | <span className="api-desc">Only runs the base handling (destroying the pickup) when the item was added.</span> |
| <Link id="m-spawn" /><code>{"override "}<Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{" Spawn("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments, Transform parent)"}</code> | <span className="api-desc">Spawns a new copy of the entity's prefab through the network spawner and gives it the definition; arguments and parent are ignored.</span> |
| <Link id="m-destroypickup" /><code>{"protected override void DestroyPickup()"}</code> | <span className="api-desc">Destroys the pickup's entity across the network scene.</span> |
