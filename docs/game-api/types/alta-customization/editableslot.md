---
title: "EditableSlot"
description: "class EditableSlot in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditableSlot

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`EditableCosmeticSlot`](/game-api/types/alta-customization/editablecosmeticslot), [`EditableEquipmentSlot`](/game-api/types/alta-customization/editableequipmentslot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditableSlot()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activewrapper" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" activeWrapper"}</code> |  |
| <Link id="m-addtrigger" /><code>{"private "}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" addTrigger"}</code> |  |
| <Link id="m-editablewith" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" editableWith"}</code> |  |
| <Link id="m-hovering" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{", int> hovering"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-remover" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" remover"}</code> |  |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" slots"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate("}<Link to="/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" wrapper)"}</code> |  |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> |  |
| <Link id="m-add" /><code>{"private bool Add("}<Link to="/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{" interactor, "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-attemptplace" /><code>{"private void AttemptPlace("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-canedit" /><code>{"private bool CanEdit("}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" hand)"}</code> |  |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-hover" /><code>{"private bool Hover("}<Link to="/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{" interactor, "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> |  |
| <Link id="m-interactedwith" /><code>{"private async void InteractedWith("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-isapplicable" /><code>{"private bool IsApplicable("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> |  |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> |  |
| <Link id="m-remove" /><code>{"protected uint Remove("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> |  |
| <Link id="m-triggerentered" /><code>{"private void TriggerEntered(Collider collider)"}</code> |  |
| <Link id="m-triggerexited" /><code>{"private void TriggerExited(Collider collider)"}</code> |  |
