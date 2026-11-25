---
title: "CharacterComponentControllerCollection"
description: "class CharacterComponentControllerCollection in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterComponentControllerCollection

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`CharacterComponentController`](/game-api/types/alta-player/charactercomponentcontroller)
- **Derived types** [`ArmIKControllerHelper`](/game-api/types/alta-player/armikcontrollerhelper)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterComponentControllerCollection()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-invertownedunownedorder" /><code>{"private bool invertOwnedUnownedOrder"}</code> |  |
| <Link id="m-ownedcontrollers" /><code>{"private List<"}<Link to="/game-api/types/alta-player/charactercomponentcontroller">{"CharacterComponentController"}</Link>{"> ownedControllers"}</code> |  |
| <Link id="m-unownedcontrollers" /><code>{"private List<"}<Link to="/game-api/types/alta-player/charactercomponentcontroller">{"CharacterComponentController"}</Link>{"> unownedControllers"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-controllers" /><code>{"List<"}<Link to="/game-api/types/alta-player/charactercomponentcontroller">{"CharacterComponentController"}</Link>{"> Controllers { get; }"}</code> |  |
| <Link id="m-islocal" /><code>{"override bool IsLocal { set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixedupdatecharactercomponent" /><code>{"override void FixedUpdateCharacterComponent()"}</code> |  |
| <Link id="m-getcontroller" /><code>{"T GetController<T>()"}</code> |  |
| <Link id="m-setactive" /><code>{"void SetActive(bool isActive)"}</code> |  |
| <Link id="m-updatecharactercomponent" /><code>{"override void UpdateCharacterComponent()"}</code> |  |

## Used in

Members of other types that take, return or hold a `CharacterComponentControllerCollection`:

[`CharacterDummy.controllerCollection`](/game-api/types/alta-player/characterdummy#m-controllercollection), [`CharacterDummy.ControllerCollection`](/game-api/types/alta-player/characterdummy#m-controllercollection-2), [`Hand.armIKControllers`](/game-api/types/alta-player/hand#m-armikcontrollers), [`Hand.ArmIKControllers`](/game-api/types/alta-player/hand#m-armikcontrollers-2), [`CharacterIKController.characterComponentControllers`](/game-api/types/global-c-d/characterikcontroller#m-charactercomponentcontrollers).
