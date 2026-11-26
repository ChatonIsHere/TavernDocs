---
title: "ModellingCharacter"
description: "Editor tool that dresses a character dummy in chosen cosmetics, for modelling and promo shots."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter

A **class** in `Root.Township`, no namespace.

Editor tool that dresses a character dummy in chosen cosmetics, for modelling and promo shots. Runs in edit mode.

- **Listed in** [No namespace: M to O](/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Definition`](/game-api/types/global-m-o/modellingcharacter-definition), [`FreeDefinition`](/game-api/types/global-m-o/modellingcharacter-freedefinition), [`IDefinition`](/game-api/types/global-m-o/modellingcharacter-idefinition), [`ItemArguments`](/game-api/types/global-m-o/modellingcharacter-itemarguments), [`OverrideSet`](/game-api/types/global-m-o/modellingcharacter-overrideset)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ModellingCharacter()"}</code> |

## Fields

<details>
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advertising" /><code>{"private "}<Link to="/game-api/types/global-m-o/modellingcharacter-definition">{"ModellingCharacter.Definition"}</Link>{"[] advertising"}</code> | Cosmetics added last, for advertising shots. |
| <Link id="m-basics" /><code>{"private "}<Link to="/game-api/types/global-m-o/modellingcharacter-freedefinition">{"ModellingCharacter.FreeDefinition"}</Link>{"[] basics"}</code> | Base cosmetics added first. |
| <Link id="m-btnrandomize" /><code>{"private bool btnRandomize"}</code> | Inspector button flag for Randomize. |
| <Link id="m-btnreset" /><code>{"private bool btnReset"}</code> | Inspector button flag for Reset. |
| <Link id="m-free" /><code>{"private "}<Link to="/game-api/types/global-m-o/modellingcharacter-freedefinition">{"ModellingCharacter.FreeDefinition"}</Link>{"[] free"}</code> | Free cosmetics added to the dummy. |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | Customization handler on the dummy being dressed. |
| <Link id="m-isupdatingdynamically" /><code>{"private bool isUpdatingDynamically"}</code> | If true, the model rebuilds whenever an inspector value changes. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | Logger for errors while rebuilding the model. |
| <Link id="m-manager" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> | Customization manager created for the dummy. |
| <Link id="m-randomized" /><code>{"private "}<Link to="/game-api/types/global-m-o/modellingcharacter-definition">{"ModellingCharacter.Definition"}</Link>{"[] randomized"}</code> | Cosmetics added after the basics; meant to be filled by Randomize. |
| <Link id="m-session" /><code>{"private "}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session"}</code> | Addressables session the cosmetics load through. |
| <Link id="m-set" /><code>{"private "}<Link to="/game-api/types/global-m-o/modellingcharacter-overrideset">{"ModellingCharacter.OverrideSet"}</Link>{" set"}</code> | Optional cosmetic set whose items are all added, with per item colour overrides. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixeditoraddressables" /><code>{"void FixEditorAddressables()"}</code> | Context menu action that points the editor's Addressables runtime path at a fixed GUID. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add(IEnumerable<"}<Link to="/game-api/types/global-m-o/modellingcharacter-idefinition">{"ModellingCharacter.IDefinition"}</Link>{"> definitions)"}</code> | Adds each definition's cosmetic to the dummy, applying any primary and secondary colour overrides. |
| <Link id="m-fix" /><code>{"private void Fix(IEnumerable<"}<Link to="/game-api/types/global-m-o/modellingcharacter-idefinition">{"ModellingCharacter.IDefinition"}</Link>{"> definitions)"}</code> | Resizes each definition's colour argument list to match what its cosmetic expects. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Copies cosmetic names onto the inspector entries and refreshes the override set arguments. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Resets and rebuilds the model when Reset is pressed, or rebuilds it if dynamic updating is on. |
| <Link id="m-randomize" /><code>{"private void Randomize()"}</code> | Empty in this build. |
| <Link id="m-refreshmodel" /><code>{"private async void RefreshModel()"}</code> | Starts a customization session if needed, then clears and re-adds all configured cosmetics to the dummy. |
| <Link id="m-resetdummy" /><code>{"private void ResetDummy()"}</code> | Detaches the customization manager and cleans the dummy's cosmetics. |
| <Link id="m-start" /><code>{"private void Start()"}</code> | Resets the dummy and builds the model. |

</details>
