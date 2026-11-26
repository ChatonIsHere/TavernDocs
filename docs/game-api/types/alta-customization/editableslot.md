---
title: "EditableSlot"
description: "A spot on the customization mannequin for one group of slots."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EditableSlot

A **class** in `Root.Township`, `Alta.Customization`.

A spot on the customization mannequin for one group of slots. Grab it to pull the item off as a pickup, or drop a fitting pickup in its trigger to put it on. Client side.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`EditableCosmeticSlot`](/game-api/types/alta-customization/editablecosmeticslot), [`EditableEquipmentSlot`](/game-api/types/alta-customization/editableequipmentslot)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"EditableSlot()"}</code> |

## Fields

<details>
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activewrapper" /><code>{"private "}<Link to="/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" activeWrapper"}</code> | Customization wrapper being edited, or null when inactive. |
| <Link id="m-addtrigger" /><code>{"private "}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" addTrigger"}</code> | Trigger where pickups are dropped to add them. |
| <Link id="m-editablewith" /><code>{"private "}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" editableWith"}</code> | Which hand may edit this slot. Default both. |
| <Link id="m-hovering" /><code>{"private Dictionary<"}<Link to="/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{", int> hovering"}</code> | Pickups in the trigger and how many of their colliders are inside. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-remover" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" remover"}</code> | Interactable grabbed to take the item off. |
| <Link id="m-slots" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" slots"}</code> | Slot set this editable slot covers. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate("}<Link to="/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" wrapper)"}</code> | Starts editing a customization wrapper: hooks the trigger and remover and enables the object. |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | Stops editing: unhooks events, clears hovering pickups and disables the object. |
| <Link id="m-remove" /><code>{"protected uint Remove("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Removes the first item found in this slot's enabled slots, pushing history, and returns its hash (0 if none). |

<details>
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private bool Add("}<Link to="/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{" interactor, "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | Adds an item to the wrapper if the hand may edit and the item fits these slots. |
| <Link id="m-attemptplace" /><code>{"private void AttemptPlace("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When a hovering pickup is let go, tries to add a copy of its item and tells the pickup whether it worked. |
| <Link id="m-canedit" /><code>{"private bool CanEdit("}<Link to="/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" hand)"}</code> | Whether a hand may edit: needs an active wrapper and a matching hand if `editableWith` isn't both. |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Interaction filter on the remover; blocks the wrong hand and blocks grabbing when all its slots are disabled. |
| <Link id="m-hover" /><code>{"private bool Hover("}<Link to="/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{" interactor, "}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> | Whether a held item is one this slot would accept from that hand. |
| <Link id="m-interactedwith" /><code>{"private async void InteractedWith("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | When the remover is grabbed, removes the slot's item and swaps the hand to a new pickup of it. |
| <Link id="m-isapplicable" /><code>{"private bool IsApplicable("}<Link to="/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> | Whether any part of the item uses one of this slot's slots. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: fills `addTrigger` from the same object if empty. |
| <Link id="m-triggerentered" /><code>{"private void TriggerEntered(Collider collider)"}</code> | Starts tracking a held customization pickup that enters and fits, so dropping it places it. |
| <Link id="m-triggerexited" /><code>{"private void TriggerExited(Collider collider)"}</code> | Stops tracking a pickup once all its colliders have left. |

</details>
