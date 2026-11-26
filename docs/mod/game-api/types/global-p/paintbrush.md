---
title: "PaintBrush"
description: "Client-side brush in the character customisation room: dip it in a colour board item, then touch the character dummy to paint that cosmetic part's primary..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PaintBrush

A **class** in `Root.Township`, the global namespace.

Client-side brush in the character customisation room: dip it in a colour board item, then touch the character dummy to paint that cosmetic part's primary or secondary colour.

- **Listed in** [Global namespace: P](/mod/game-api/types/global-p)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"PaintBrush()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" color"}</code> | <span className="api-desc">Backing field for `Color`.</span> |
| <Link id="m-colorapplied" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" ColorApplied"}</code> | <span className="api-desc">Event fired after the brush changes a colour.</span> |
| <Link id="m-defaultposition" /><code>{"private TransformSave defaultPosition"}</code> | <span className="api-desc">The brush's starting transform.</span> |
| <Link id="m-dippingshape" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/triggershape">{"TriggerShape"}</Link>{" dippingShape"}</code> | <span className="api-desc">Trigger at the tip that detects colour board items and is the ray origin.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Pointer to the character dummy being painted.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | <span className="api-desc">Customisation handler whose dummy's cosmetic packer is repacked after painting.</span> |
| <Link id="m-isprimary" /><code>{"private bool isPrimary"}</code> | <span className="api-desc">True paints the primary colour, false the secondary.</span> |
| <Link id="m-isselecting" /><code>{"private bool isSelecting"}</code> | <span className="api-desc">Unused flag.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/cosmeticcustomizationmanager">{"CosmeticCustomizationManager"}</Link>{" manager"}</code> | <span className="api-desc">Cosmetic customisation manager that holds the player's cosmetics.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">The brush's pickup.</span> |
| <Link id="m-raylength" /><code>{"private float rayLength"}</code> | <span className="api-desc">Length of the paint ray from the tip (0.05 by default).</span> |
| <Link id="m-tip" /><code>{"private MeshRenderer tip"}</code> | <span className="api-desc">Renderer of the brush tip, tinted to the current colour.</span> |
| <Link id="m-uvraycaster" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/uvraycaster">{"UvRaycaster"}</Link>{" uvRaycaster"}</code> | <span className="api-desc">Raycaster that finds the UV coordinate hit on the dummy.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-active" /><code>{"static "}<Link to="/mod/game-api/types/global-p/paintbrush">{"PaintBrush"}</Link>{" Active { get; private set; }"}</code> | <span className="api-desc">The brush currently held, or null.</span> |
| <Link id="m-color-2" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticcolor">{"CosmeticColor"}</Link>{" Color { get; set; }"}</code> | <span className="api-desc">The brush's current colour. Setting it also tints the tip material.</span> |

## Methods

<details className="api-private">
<summary>11 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"private async void Apply()"}</code> | <span className="api-desc">Each frame, raycasts from the tip onto the dummy and recolours the cosmetic part it hits, firing `ColorApplied` if anything changed.</span> |
| <Link id="m-apply-2" /><code>{"private async Task Apply(Vector3 position, Vector3 direction, float distance)"}</code> | <span className="api-desc">Each frame, raycasts from the tip onto the dummy and recolours the cosmetic part it hits, firing `ColorApplied` if anything changed.</span> |
| <Link id="m-applycolor" /><code>{"private bool ApplyColor("}<Link to="/mod/game-api/types/alta-customization/playercustomizationslot">{"PlayerCustomizationSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Sets the brush colour on a cosmetic slot or part's colour arguments; returns true if something changed.</span> |
| <Link id="m-applycolor-2" /><code>{"private async Task<bool> ApplyColor("}<Link to="/mod/game-api/types/alta-customization/cosmeticpacker-partid">{"CosmeticPacker.PartId"}</Link>{" part)"}</code> | <span className="api-desc">Sets the brush colour on a cosmetic slot or part's colour arguments; returns true if something changed.</span> |
| <Link id="m-dipped" /><code>{"private void Dipped(Collider collider)"}</code> | <span className="api-desc">Takes the colour from a `ColorBoardItem` the dipping shape touched.</span> |
| <Link id="m-interactended" /><code>{"private void InteractEnded("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Clears `Active` and stops painting when the brush is let go.</span> |
| <Link id="m-interactstarted" /><code>{"private void InteractStarted("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" arg1, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" arg2)"}</code> | <span className="api-desc">Sets `Active`, lifts the brush a little and starts painting when it's picked up.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Cleans up the tip's material copy.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the paint ray in the editor.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Saves the start position, makes the brush kinematic, hooks pickup events and copies the tip material.</span> |
| <Link id="m-update" /><code>{"private void Update()"}</code> | <span className="api-desc">Calls `Apply` every frame while held.</span> |

</details>
