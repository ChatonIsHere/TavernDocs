---
title: "ModellingCharacter"
description: "Editor tool that dresses a character dummy in chosen cosmetics, for modelling and promo shots."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ModellingCharacter

A **class** in `Root.Township`, the global namespace.

Editor tool that dresses a character dummy in chosen cosmetics, for modelling and promo shots. Runs in edit mode.

- **Listed in** [Global namespace: M to O](/mod/game-api/types/global-m-o)
- **Inherits or implements** `MonoBehaviour`
- **Nested types** [`Definition`](/mod/game-api/types/global-m-o/modellingcharacter-definition), [`FreeDefinition`](/mod/game-api/types/global-m-o/modellingcharacter-freedefinition), [`IDefinition`](/mod/game-api/types/global-m-o/modellingcharacter-idefinition), [`ItemArguments`](/mod/game-api/types/global-m-o/modellingcharacter-itemarguments), [`OverrideSet`](/mod/game-api/types/global-m-o/modellingcharacter-overrideset)
- **Attributes** `ExecuteInEditMode`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ModellingCharacter()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>12 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-advertising" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/modellingcharacter-definition">{"ModellingCharacter.Definition"}</Link>{"[] advertising"}</code> | <span className="api-desc">Cosmetics added last, for advertising shots.</span> |
| <Link id="m-basics" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/modellingcharacter-freedefinition">{"ModellingCharacter.FreeDefinition"}</Link>{"[] basics"}</code> | <span className="api-desc">Base cosmetics added first.</span> |
| <Link id="m-btnrandomize" /><code>{"private bool btnRandomize"}</code> | <span className="api-desc">Inspector button flag for Randomize.</span> |
| <Link id="m-btnreset" /><code>{"private bool btnReset"}</code> | <span className="api-desc">Inspector button flag for Reset.</span> |
| <Link id="m-free" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/modellingcharacter-freedefinition">{"ModellingCharacter.FreeDefinition"}</Link>{"[] free"}</code> | <span className="api-desc">Free cosmetics added to the dummy.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | <span className="api-desc">Customization handler on the dummy being dressed.</span> |
| <Link id="m-isupdatingdynamically" /><code>{"private bool isUpdatingDynamically"}</code> | <span className="api-desc">If true, the model rebuilds whenever an inspector value changes.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">Logger for errors while rebuilding the model.</span> |
| <Link id="m-manager" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" manager"}</code> | <span className="api-desc">Customization manager created for the dummy.</span> |
| <Link id="m-randomized" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/modellingcharacter-definition">{"ModellingCharacter.Definition"}</Link>{"[] randomized"}</code> | <span className="api-desc">Cosmetics added after the basics; meant to be filled by Randomize.</span> |
| <Link id="m-session" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session"}</code> | <span className="api-desc">Addressables session the cosmetics load through.</span> |
| <Link id="m-set" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/modellingcharacter-overrideset">{"ModellingCharacter.OverrideSet"}</Link>{" set"}</code> | <span className="api-desc">Optional cosmetic set whose items are all added, with per item colour overrides.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-fixeditoraddressables" /><code>{"void FixEditorAddressables()"}</code> | <span className="api-desc">Context menu action that points the editor's Addressables runtime path at a fixed GUID.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-add" /><code>{"private void Add(IEnumerable<"}<Link to="/mod/game-api/types/global-m-o/modellingcharacter-idefinition">{"ModellingCharacter.IDefinition"}</Link>{"> definitions)"}</code> | <span className="api-desc">Adds each definition's cosmetic to the dummy, applying any primary and secondary colour overrides.</span> |
| <Link id="m-fix" /><code>{"private void Fix(IEnumerable<"}<Link to="/mod/game-api/types/global-m-o/modellingcharacter-idefinition">{"ModellingCharacter.IDefinition"}</Link>{"> definitions)"}</code> | <span className="api-desc">Resizes each definition's colour argument list to match what its cosmetic expects.</span> |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | <span className="api-desc">Copies cosmetic names onto the inspector entries and refreshes the override set arguments.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Resets and rebuilds the model when Reset is pressed, or rebuilds it if dynamic updating is on.</span> |
| <Link id="m-randomize" /><code>{"private void Randomize()"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-refreshmodel" /><code>{"private async void RefreshModel()"}</code> | <span className="api-desc">Starts a customization session if needed, then clears and re-adds all configured cosmetics to the dummy.</span> |
| <Link id="m-resetdummy" /><code>{"private void ResetDummy()"}</code> | <span className="api-desc">Detaches the customization manager and cleans the dummy's cosmetics.</span> |
| <Link id="m-start" /><code>{"private void Start()"}</code> | <span className="api-desc">Resets the dummy and builds the model.</span> |

</details>
