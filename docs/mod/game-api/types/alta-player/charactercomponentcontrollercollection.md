---
title: "CharacterComponentControllerCollection"
description: "Character controller that runs a list of child controllers: owned ones only when the character is local, unowned ones always."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterComponentControllerCollection

A **class** in `Root.Township`, `Alta.Character`.

Character controller that runs a list of child controllers: owned ones only when the character is local, unowned ones always.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/mod/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`ArmIKControllerHelper`](/mod/game-api/types/alta-player/armikcontrollerhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterComponentControllerCollection()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-invertownedunownedorder" /><code>{"private bool invertOwnedUnownedOrder"}</code> | Updates the unowned controllers before the owned ones instead of after. |
| <Link id="m-ownedcontrollers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/charactercomponentcontroller">{"CharacterComponentController"}</Link>{"> ownedControllers"}</code> | Controllers that only update on the local player's character. Backing field for `Controllers`. |
| <Link id="m-unownedcontrollers" /><code>{"private List<"}<Link to="/mod/game-api/types/alta-player/charactercomponentcontroller">{"CharacterComponentController"}</Link>{"> unownedControllers"}</code> | Controllers that update on every copy of the character, local or remote. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controllers" /><code>{"List<"}<Link to="/mod/game-api/types/alta-player/charactercomponentcontroller">{"CharacterComponentController"}</Link>{"> Controllers { get; }"}</code> | The owned controllers, updated only when `IsLocal`. |
| <Link id="m-islocal" /><code>{"override bool IsLocal { set; }"}</code> | Setting it also sets it on every child controller. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> | Runs fixed update on enabled children, owned ones only if local. The owned and unowned order can be inverted. |
| <Link id="m-getcontroller" /><code>{"T GetController<T>()"}</code> | First owned or unowned controller of type `T`, or null with a warning. |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> | Enables or disables this and every child controller. |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> | Same as `FixedUpdateCharacterComponent`, for the per-frame update. |

## Used in

Members of other types that take, return or hold a `CharacterComponentControllerCollection`:

[`CharacterDummy.controllerCollection`](/mod/game-api/types/alta-player/characterdummy#m-controllercollection), [`CharacterDummy.ControllerCollection`](/mod/game-api/types/alta-player/characterdummy#m-controllercollection-2), [`Hand.armIKControllers`](/mod/game-api/types/alta-player/hand#m-armikcontrollers), [`Hand.ArmIKControllers`](/mod/game-api/types/alta-player/hand#m-armikcontrollers-2), [`CharacterIKController.characterComponentControllers`](/mod/game-api/types/global-c-d/characterikcontroller#m-charactercomponentcontrollers).
