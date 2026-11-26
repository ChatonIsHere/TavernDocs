---
title: "LocalPlayerAdvertisingTrophy"
description: "Dresses a character dummy in a base body plus a set of advertised cosmetics, loaded through its own customization manager."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayerAdvertisingTrophy

A **class** in `Root.Township`, the global namespace.

Dresses a character dummy in a base body plus a set of advertised cosmetics, loaded through its own customization manager. Also runs in edit mode.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"LocalPlayerAdvertisingTrophy()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advertised" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> advertised"}</code> | <span className="api-desc">Cosmetics being shown off.</span> |
| <Link id="m-bakebtn" /><code>{"private bool bakeBtn"}</code> | <span className="api-desc">Editor button for `BakeModelDebug`.</span> |
| <Link id="m-basebody" /><code>{"private List<"}<Link to="/mod/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> baseBody"}</code> | <span className="api-desc">Base body cosmetics put on first.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | <span className="api-desc">Customization handler for the character dummy.</span> |
| <Link id="m-localmanager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" localManager"}</code> | <span className="api-desc">Customization manager used for the dummy only.</span> |
| <Link id="m-session" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session"}</code> | <span className="api-desc">Addressable session used to load the cosmetics.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> | <span className="api-desc">Build bake order. Never set, so 0.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> | <span className="api-desc">Build bake step: runs the Android LOD fix.</span> |
| <Link id="m-bakemodel" /><code>{"async void BakeModel()"}</code> | <span className="api-desc">Resets the dummy, starts a cosmetics session and adds the base body and advertised cosmetics.</span> |
| <Link id="m-bakemodeldebug" /><code>{"void BakeModelDebug()"}</code> | <span className="api-desc">Editor button that calls `BakeModel`.</span> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | <span className="api-desc">Empty build clean step.</span> |

<details className="api-private">
<summary>9 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidlodfix" /><code>{"private void AndroidLodFix()"}</code> | <span className="api-desc">In the editor on Android only: drops the first LOD level when it has no skinned meshes and there are more than 3 levels.</span> |
| <Link id="m-applyplayercosmetics" /><code>{"private async Task ApplyPlayerCosmetics()"}</code> | <span className="api-desc">Copies the local player's own cosmetics onto the dummy. Not called in this file.</span> |
| <Link id="m-aresametypes" /><code>{"private bool AreSameTypes<T>(T[] a, T[] b)"}</code> | <span className="api-desc">True when two arrays have the same length and matching element types.</span> |
| <Link id="m-endsession" /><code>{"private void EndSession()"}</code> | <span className="api-desc">Unpauses the dummy's cosmetic packer and stops the cosmetics session.</span> |
| <Link id="m-ensureminimumargumentspresent" /><code>{"private async Task EnsureMinimumArgumentsPresent(IEnumerable<"}<Link to="/mod/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> list)"}</code> | <span className="api-desc">Replaces each item's customization arguments with defaults when their types don't match the cosmetic.</span> |
| <Link id="m-ensuresessionstarted" /><code>{"private async Task EnsureSessionStarted()"}</code> | <span className="api-desc">Creates the customization manager and addressable session if needed, attaches the dummy and clears its cosmetics.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Editor: names each listed item after its cosmetic, or `Empty`.</span> |
| <Link id="m-resetdummy" /><code>{"private void ResetDummy()"}</code> | <span className="api-desc">Pauses and cleans the dummy's cosmetic packer and detaches it from its manager.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Runs the Android LOD fix and builds the model.</span> |

</details>

## Used in

Members of other types that take, return or hold a `LocalPlayerAdvertisingTrophy`:

<div className="api-used-in">

[`QuestBoard.rewardsDisplayTrophy`](/mod/game-api/types/global-q-r/questboard#m-rewardsdisplaytrophy).

</div>
