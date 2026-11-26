---
title: "CosmeticPresetTrophy"
description: "A small character figure that shows a saved cosmetic preset and can be picked up and placed in a preset slot."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetTrophy

A **class** in `Root.Township`, `Alta.Customization`.

A small character figure that shows a saved cosmetic preset and can be picked up and placed in a preset slot. Client-side (not a network entity); it burns away when destroyed.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetTrophy()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | Shader property ID for `_Progress`, the burn or fade amount. |
| <Link id="m-baseburnmaterial" /><code>{"private Material baseBurnMaterial"}</code> | Material used for the burn-away effect. |
| <Link id="m-basefadematerial" /><code>{"private Material baseFadeMaterial"}</code> | Material used for the fade out and in when it returns to its slot. |
| <Link id="m-burnduration" /><code>{"private float burnDuration"}</code> | Seconds the burn takes. |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | Seconds each half of the fade takes. |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | Customization handler for the dummy character the trophy shows. |
| <Link id="m-headjoint" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" headJoint"}</code> | Head bone reset to its rest pose after a preset is applied. |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> | Hover pickup that holds the trophy at its slot's position. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-originalmaterials" /><code>{"private Dictionary<Renderer, Material> originalMaterials"}</code> | Each renderer's material before the fade, restored afterwards. |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | Backing field for `Pickup`. |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | Extra renderers (besides the dummy's) that burn and fade with it. |
| <Link id="m-session" /><code>{"private "}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session"}</code> | Addressable session that loads the cosmetics; created on the first `Apply`. |
| <Link id="m-standardbody" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" standardBody"}</code> | Body cosmetic replaced on the trophy. |
| <Link id="m-trophybody" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" trophyBody"}</code> | Body cosmetic used in its place. |
| <Link id="m-uniquematerials" /><code>{"private Dictionary<Material, Material> uniqueMaterials"}</code> | Effect materials made for the trophy, keyed by the original material. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" Data { get; private set; }"}</code> | The cosmetic data last applied. |
| <Link id="m-dummy" /><code><Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" Dummy { get; }"}</code> | The character dummy that wears the cosmetics. |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; }"}</code> | Customisation manager for the figure's cosmetics. Uses a trophy body in place of the standard body. |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | The pickup used to hold the figure. |
| <Link id="m-slot" /><code><Link to="/game-api/types/alta-customization/icosmeticpresetslot">{"ICosmeticPresetSlot"}</Link>{" Slot { get; private set; }"}</code> | The preset slot the figure belongs to, or null. |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> Destroyed"}</code> | Raised when the burn finishes, just before the object is destroyed. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"async void Apply(uint[] cosmeticData, int cosmeticBytes)"}</code> | Loads packed cosmetic data onto the figure's dummy character and remembers it as `Data`. |
| <Link id="m-burn" /><code>{"void Burn()"}</code> | Drops the figure, turns off its colliders and plays the burn effect, then destroys it. |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | Takes the figure out of its slot and burns it. |
| <Link id="m-forceretreat" /><code>{"void ForceRetreat()"}</code> | Fades the figure out and back in at its slot, or burns it if it has no slot. |
| <Link id="m-reenablecolliders" /><code>{"void ReenableColliders()"}</code> | Turns the figure's colliders back on. |
| <Link id="m-registerslot" /><code>{"void RegisterSlot("}<Link to="/game-api/types/alta-customization/icosmeticpresetslot">{"ICosmeticPresetSlot"}</Link>{" slot)"}</code> | Sets the slot the figure belongs to and points its hover target at the slot. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Sets the body override (standard body to trophy body), attaches the customization manager to the dummy and hooks the ghost hand toggles. |
| <Link id="m-burnanimation" /><code>{"private IEnumerator BurnAnimation() (iterator)"}</code> | Coroutine: swaps every renderer to a burn material, runs its `_Progress` from 0 to 1 over `burnDuration`, raises `Destroyed` and destroys the object. |
| <Link id="m-disableghosthands" /><code>{"private void DisableGhostHands("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Hides the holding hand's ghost hand while the trophy is held. |
| <Link id="m-enableghosthands" /><code>{"private void EnableGhostHands("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Shows the ghost hand again when the trophy is let go. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Disposes the addressable session and cleans up the made materials. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Puts the original materials back on the renderers. |
| <Link id="m-preparerenderers" /><code>{"private void PrepareRenderers(Dictionary<Material, Material> uniqueMaterials, IEnumerable<Renderer> renderers, Material baseMaterial)"}</code> | Gives each renderer a copy of the base material set up from its own material (one copy per original), and widens skinned mesh bounds. |
| <Link id="m-retreatanimation" /><code>{"private IEnumerator RetreatAnimation() (iterator)"}</code> | Coroutine: fades the trophy out, moves it back to its slot, fades it in and restores the original materials. |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetTrophy`:

[`CosmeticPresetApplier.ApplyTrophy`](/game-api/types/alta-customization/cosmeticpresetapplier#m-applytrophy), [`CosmeticPresetDestroyer.CheckDestroy`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-checkdestroy), [`CosmeticPresetDestroyer.DestroyTrophy`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-destroytrophy), [`CosmeticPresetDestroyer.trackedTrophies`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trackedtrophies), [`CosmeticPresetDestroyer.TrophyEntered`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trophyentered), [`CosmeticPresetDestroyer.TrophyExited`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trophyexited), [`CosmeticPresetSlot.DeregisterTrophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-deregistertrophy), [`CosmeticPresetSlot.DisableEffects`](/game-api/types/alta-customization/cosmeticpresetslot#m-disableeffects), [`CosmeticPresetSlot.EnableEffects`](/game-api/types/alta-customization/cosmeticpresetslot#m-enableeffects), [`CosmeticPresetSlot.RegisterTrophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-registertrophy), [`CosmeticPresetSlot.RegisterTrophyInternal`](/game-api/types/alta-customization/cosmeticpresetslot#m-registertrophyinternal), [`CosmeticPresetSlot.SaveTrophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-savetrophy), [`CosmeticPresetSlot.Trophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-trophy), [`CosmeticPresetsManager.GetNewTrophy`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-getnewtrophy), [`CosmeticPresetsManager.latestTrophy`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-latesttrophy), [`CosmeticPresetsManager.trophyPrefab`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-trophyprefab), [`CosmeticPresetTrophyTrigger.CleanTrophy`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-cleantrophy), [`CosmeticPresetTrophyTrigger.CurrentTrophies`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-currenttrophies), [`CosmeticPresetTrophyTrigger.mappedTrophies`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-mappedtrophies), [`CosmeticPresetTrophyTrigger.ReleasedTrophy`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-releasedtrophy), [`CosmeticPresetTrophyTrigger.RemoveTrophy`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-removetrophy), [`CosmeticPresetTrophyTrigger.RemoveTrophyCollider`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-removetrophycollider), [`CosmeticPresetTrophyTrigger.trackedTrophies`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trackedtrophies), [`CosmeticPresetTrophyTrigger.TrophyEntered`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophyentered), [`CosmeticPresetTrophyTrigger.TrophyExited`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophyexited), [`CosmeticRotatingSlot.DeregisterTrophy`](/game-api/types/alta-customization/cosmeticrotatingslot#m-deregistertrophy), [`CosmeticRotatingSlot.DisableEffects`](/game-api/types/alta-customization/cosmeticrotatingslot#m-disableeffects), [`CosmeticRotatingSlot.EnableEffects`](/game-api/types/alta-customization/cosmeticrotatingslot#m-enableeffects), [`CosmeticRotatingSlot.GetDataFrom`](/game-api/types/alta-customization/cosmeticrotatingslot#m-getdatafrom-2), [`CosmeticRotatingSlot.SaveTrophy`](/game-api/types/alta-customization/cosmeticrotatingslot#m-savetrophy), [`CosmeticRotatingSlot.Setup`](/game-api/types/alta-customization/cosmeticrotatingslot#m-setup), [`CosmeticRotatingSlot.Trophy`](/game-api/types/alta-customization/cosmeticrotatingslot#m-trophy), [`ICosmeticPresetSlot.DeregisterTrophy`](/game-api/types/alta-customization/icosmeticpresetslot#m-deregistertrophy).
