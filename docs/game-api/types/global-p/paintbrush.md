---
title: "PaintBrush"
description: "Client-side brush in the character customisation room: dip it in a colour board item, then touch the character dummy to paint that cosmetic part's primary..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaintBrush

A **class** in `Root.Township`, no namespace.

Client-side brush in the character customisation room: dip it in a colour board item, then touch the character dummy to paint that cosmetic part's primary or secondary colour.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PaintBrush()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color"}</code> | Backing field for `Color`. |
| <Link id="m-colorapplied" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ColorApplied"}</code> | Event fired after the brush changes a colour. |
| <Link id="m-defaultposition" /><code>{"private TransformSave defaultPosition"}</code> | The brush's starting transform. |
| <Link id="m-dippingshape" /><code>{"private "}<Link to="/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" dippingShape"}</code> | Trigger at the tip that detects colour board items and is the ray origin. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Pointer to the character dummy being painted. |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | Customisation handler whose dummy's cosmetic packer is repacked after painting. |
| <Link id="m-isprimary" /><code>{"private bool isPrimary"}</code> | True paints the primary colour, false the secondary. |
| <Link id="m-isselecting" /><code>{"private bool isSelecting"}</code> | Unused flag. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" manager"}</code> | Cosmetic customisation manager that holds the player's cosmetics. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | The brush's pickup. |
| <Link id="m-raylength" /><code>{"private float rayLength"}</code> | Length of the paint ray from the tip (0.05 by default). |
| <Link id="m-tip" /><code>{"private MeshRenderer tip"}</code> | Renderer of the brush tip, tinted to the current colour. |
| <Link id="m-uvraycaster" /><code>{"private "}<Link to="/game-api/types/global-t-x/uvraycaster">{"UvRaycaster"}</Link>{" uvRaycaster"}</code> | Raycaster that finds the UV coordinate hit on the dummy. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"static "}<Link to="/game-api/types/global-p/paintbrush">{"PaintBrush"}</Link>{" Active { get; private set; }"}</code> | The brush currently held, or null. |
| <Link id="m-color-2" /><code><Link to="/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" Color { get; set; }"}</code> | The brush's current colour. Setting it also tints the tip material. |

## Methods

<details>
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"private async void Apply()"}</code> | Each frame, raycasts from the tip onto the dummy and recolours the cosmetic part it hits, firing `ColorApplied` if anything changed. |
| <Link id="m-apply-2" /><code>{"private async Task Apply(Vector3 position, Vector3 direction, float distance)"}</code> | Each frame, raycasts from the tip onto the dummy and recolours the cosmetic part it hits, firing `ColorApplied` if anything changed. |
| <Link id="m-applycolor" /><code>{"private bool ApplyColor("}<Link to="/game-api/types/alta-customization/playercustomizationslot">{"PlayerCustomizationSlot"}</Link>{" slot)"}</code> | Sets the brush colour on a cosmetic slot or part's colour arguments; returns true if something changed. |
| <Link id="m-applycolor-2" /><code>{"private async Task<bool> ApplyColor("}<Link to="/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" part)"}</code> | Sets the brush colour on a cosmetic slot or part's colour arguments; returns true if something changed. |
| <Link id="m-dipped" /><code>{"private void Dipped(Collider collider)"}</code> | Takes the colour from a `ColorBoardItem` the dipping shape touched. |
| <Link id="m-interactended" /><code>{"private void InteractEnded("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Clears `Active` and stops painting when the brush is let go. |
| <Link id="m-interactstarted" /><code>{"private void InteractStarted("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | Sets `Active`, lifts the brush a little and starts painting when it's picked up. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cleans up the tip's material copy. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Draws the paint ray in the editor. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Saves the start position, makes the brush kinematic, hooks pickup events and copies the tip material. |
| <Link id="m-update" /><code>{"private void Update()"}</code> | Calls `Apply` every frame while held. |

</details>
