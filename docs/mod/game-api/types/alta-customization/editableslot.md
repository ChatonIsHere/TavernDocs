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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`
- **Derived types** [`EditableCosmeticSlot`](/mod/game-api/types/alta-customization/editablecosmeticslot), [`EditableEquipmentSlot`](/mod/game-api/types/alta-customization/editableequipmentslot)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EditableSlot()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>7 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activewrapper" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" activeWrapper"}</code> | <span className="api-desc">Customization wrapper being edited, or null when inactive.</span> |
| <Link id="m-addtrigger" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" addTrigger"}</code> | <span className="api-desc">Trigger where pickups are dropped to add them.</span> |
| <Link id="m-editablewith" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" editableWith"}</code> | <span className="api-desc">Which hand may edit this slot. Default both.</span> |
| <Link id="m-hovering" /><code>{"private Dictionary<"}<Link to="/mod/game-api/types/alta-customization/customizationpickup">{"CustomizationPickup"}</Link>{", int> hovering"}</code> | <span className="api-desc">Pickups in the trigger and how many of their colliders are inside.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-remover" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" remover"}</code> | <span className="api-desc">Interactable grabbed to take the item off.</span> |
| <Link id="m-slots" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationslotset">{"PlayerCustomizationSlotSet"}</Link>{" slots"}</code> | <span className="api-desc">Slot set this editable slot covers.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-activate" /><code>{"void Activate("}<Link to="/mod/game-api/types/alta-customization/customizationwrapper">{"CustomizationWrapper"}</Link>{" wrapper)"}</code> | <span className="api-desc">Starts editing a customization wrapper: hooks the trigger and remover and enables the object.</span> |
| <Link id="m-deactivate" /><code>{"void Deactivate()"}</code> | <span className="api-desc">Stops editing: unhooks events, clears hovering pickups and disables the object.</span> |
| <Link id="m-remove" /><code>{"protected uint Remove("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, out "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Removes the first item found in this slot's enabled slots, pushing history, and returns its hash (0 if none).</span> |

<details className="api-private">
<summary>10 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private bool Add("}<Link to="/mod/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item, "}<Link to="/mod/game-api/types/alta-customization/customizationarguments">{"CustomizationArguments"}</Link>{"[] arguments)"}</code> | <span className="api-desc">Adds an item to the wrapper if the hand may edit and the item fits these slots.</span> |
| <Link id="m-attemptplace" /><code>{"private void AttemptPlace("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When a hovering pickup is let go, tries to add a copy of its item and tells the pickup whether it worked.</span> |
| <Link id="m-canedit" /><code>{"private bool CanEdit("}<Link to="/mod/game-api/types/global-e-h/handindex">{"HandIndex"}</Link>{" hand)"}</code> | <span className="api-desc">Whether a hand may edit: needs an active wrapper and a matching hand if `editableWith` isn't both.</span> |
| <Link id="m-filter" /><code>{"private void Filter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter on the remover; blocks the wrong hand and blocks grabbing when all its slots are disabled.</span> |
| <Link id="m-hover" /><code>{"private bool Hover("}<Link to="/mod/game-api/types/global-c-d/controllerextension">{"ControllerExtension"}</Link>{" interactor, "}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> | <span className="api-desc">Whether a held item is one this slot would accept from that hand.</span> |
| <Link id="m-interactedwith" /><code>{"private async void InteractedWith("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">When the remover is grabbed, removes the slot's item and swaps the hand to a new pickup of it.</span> |
| <Link id="m-isapplicable" /><code>{"private bool IsApplicable("}<Link to="/mod/game-api/types/alta-customization/icustomizationdefinition">{"ICustomizationDefinition"}</Link>{" item)"}</code> | <span className="api-desc">Whether any part of the item uses one of this slot's slots.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: fills `addTrigger` from the same object if empty.</span> |
| <Link id="m-triggerentered" /><code>{"private void TriggerEntered(Collider collider)"}</code> | <span className="api-desc">Starts tracking a held customization pickup that enters and fits, so dropping it places it.</span> |
| <Link id="m-triggerexited" /><code>{"private void TriggerExited(Collider collider)"}</code> | <span className="api-desc">Stops tracking a pickup once all its colliders have left.</span> |

</details>
