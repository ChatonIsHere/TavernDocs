---
title: "LocalPlayerAdvertisingTrophy"
description: "Dresses a character dummy in a base body plus a set of advertised cosmetics, loaded through its own customization manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayerAdvertisingTrophy

A **class** in `Root.Township`, no namespace.

Dresses a character dummy in a base body plus a set of advertised cosmetics, loaded through its own customization manager. Also runs in edit mode.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"LocalPlayerAdvertisingTrophy()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advertised" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> advertised"}</code> | Cosmetics being shown off. |
| <Link id="m-bakebtn" /><code>{"private bool bakeBtn"}</code> | Editor button for `BakeModelDebug`. |
| <Link id="m-basebody" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> baseBody"}</code> | Base body cosmetics put on first. |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | Customization handler for the character dummy. |
| <Link id="m-localmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" localManager"}</code> | Customization manager used for the dummy only. |
| <Link id="m-session" /><code>{"private "}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session"}</code> | Addressable session used to load the cosmetics. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> | Build bake order. Never set, so 0. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | Build bake step: runs the Android LOD fix. |
| <Link id="m-bakemodel" /><code>{"async void BakeModel()"}</code> | Resets the dummy, starts a cosmetics session and adds the base body and advertised cosmetics. |
| <Link id="m-bakemodeldebug" /><code>{"void BakeModelDebug()"}</code> | Editor button that calls `BakeModel`. |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | Empty build clean step. |

<details>
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidlodfix" /><code>{"private void AndroidLodFix()"}</code> | In the editor on Android only: drops the first LOD level when it has no skinned meshes and there are more than 3 levels. |
| <Link id="m-applyplayercosmetics" /><code>{"private async Task ApplyPlayerCosmetics()"}</code> | Copies the local player's own cosmetics onto the dummy. Not called in this file. |
| <Link id="m-aresametypes" /><code>{"private bool AreSameTypes<T>(T[] a, T[] b)"}</code> | True when two arrays have the same length and matching element types. |
| <Link id="m-endsession" /><code>{"private void EndSession()"}</code> | Unpauses the dummy's cosmetic packer and stops the cosmetics session. |
| <Link id="m-ensureminimumargumentspresent" /><code>{"private async Task EnsureMinimumArgumentsPresent(IEnumerable<"}<Link to="/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> list)"}</code> | Replaces each item's customization arguments with defaults when their types don't match the cosmetic. |
| <Link id="m-ensuresessionstarted" /><code>{"private async Task EnsureSessionStarted()"}</code> | Creates the customization manager and addressable session if needed, attaches the dummy and clears its cosmetics. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: names each listed item after its cosmetic, or `Empty`. |
| <Link id="m-resetdummy" /><code>{"private void ResetDummy()"}</code> | Pauses and cleans the dummy's cosmetic packer and detaches it from its manager. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Runs the Android LOD fix and builds the model. |

</details>

## Used in

Members of other types that take, return or hold a `LocalPlayerAdvertisingTrophy`:

[`QuestBoard.rewardsDisplayTrophy`](/game-api/types/global-q-r/questboard#m-rewardsdisplaytrophy).
