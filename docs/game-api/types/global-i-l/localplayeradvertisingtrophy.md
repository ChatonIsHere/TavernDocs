---
title: "LocalPlayerAdvertisingTrophy"
description: "class LocalPlayerAdvertisingTrophy in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# LocalPlayerAdvertisingTrophy

A **class** in `Root.Township`, no namespace.

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

| Member |
| --- |
| <Link id="m-advertised" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> advertised"}</code> |
| <Link id="m-bakebtn" /><code>{"private bool bakeBtn"}</code> |
| <Link id="m-basebody" /><code>{"private List<"}<Link to="/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> baseBody"}</code> |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> |
| <Link id="m-localmanager" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" localManager"}</code> |
| <Link id="m-session" /><code>{"private "}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-sortingorder" /><code>{"int SortingOrder { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-bake" /><code>{"void Bake(bool isSaving)"}</code> |
| <Link id="m-bakemodel" /><code>{"async void BakeModel()"}</code> |
| <Link id="m-bakemodeldebug" /><code>{"void BakeModelDebug()"}</code> |
| <Link id="m-clean" /><code>{"void Clean()"}</code> |

<details>
<summary>9 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-androidlodfix" /><code>{"private void AndroidLodFix()"}</code> |
| <Link id="m-applyplayercosmetics" /><code>{"private async Task ApplyPlayerCosmetics()"}</code> |
| <Link id="m-aresametypes" /><code>{"private bool AreSameTypes<T>(T[] a, T[] b)"}</code> |
| <Link id="m-endsession" /><code>{"private void EndSession()"}</code> |
| <Link id="m-ensureminimumargumentspresent" /><code>{"private async Task EnsureMinimumArgumentsPresent(IEnumerable<"}<Link to="/game-api/types/global-c-d/cosmeticdefinitionsku">{"CosmeticDefinitionSku"}</Link>{"> list)"}</code> |
| <Link id="m-ensuresessionstarted" /><code>{"private async Task EnsureSessionStarted()"}</code> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> |
| <Link id="m-resetdummy" /><code>{"private void ResetDummy()"}</code> |
| <Link id="m-start" /><code>{"private void Start()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `LocalPlayerAdvertisingTrophy`:

[`QuestBoard.rewardsDisplayTrophy`](/game-api/types/global-q-r/questboard#m-rewardsdisplaytrophy).
