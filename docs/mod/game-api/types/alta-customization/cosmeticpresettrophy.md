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

- **Listed in** [Customization and screenshots](/mod/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetTrophy()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> | <span className="api-desc">Shader property ID for `_Progress`, the burn or fade amount.</span> |
| <Link id="m-baseburnmaterial" /><code>{"private Material baseBurnMaterial"}</code> | <span className="api-desc">Material used for the burn-away effect.</span> |
| <Link id="m-basefadematerial" /><code>{"private Material baseFadeMaterial"}</code> | <span className="api-desc">Material used for the fade out and in when it returns to its slot.</span> |
| <Link id="m-burnduration" /><code>{"private float burnDuration"}</code> | <span className="api-desc">Seconds the burn takes.</span> |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> | <span className="api-desc">Seconds each half of the fade takes.</span> |
| <Link id="m-handler" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> | <span className="api-desc">Customization handler for the dummy character the trophy shows.</span> |
| <Link id="m-headjoint" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" headJoint"}</code> | <span className="api-desc">Head bone reset to its rest pose after a preset is applied.</span> |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> | <span className="api-desc">Hover pickup that holds the trophy at its slot's position.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-originalmaterials" /><code>{"private Dictionary<Renderer, Material> originalMaterials"}</code> | <span className="api-desc">Each renderer's material before the fade, restored afterwards.</span> |
| <Link id="m-pickup" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> | <span className="api-desc">Backing field for `Pickup`.</span> |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> | <span className="api-desc">Extra renderers (besides the dummy's) that burn and fade with it.</span> |
| <Link id="m-session" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session"}</code> | <span className="api-desc">Addressable session that loads the cosmetics; created on the first `Apply`.</span> |
| <Link id="m-standardbody" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" standardBody"}</code> | <span className="api-desc">Body cosmetic replaced on the trophy.</span> |
| <Link id="m-trophybody" /><code>{"private "}<Link to="/mod/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" trophyBody"}</code> | <span className="api-desc">Body cosmetic used in its place.</span> |
| <Link id="m-uniquematerials" /><code>{"private Dictionary<Material, Material> uniqueMaterials"}</code> | <span className="api-desc">Effect materials made for the trophy, keyed by the original material.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/mod/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" Data { get; private set; }"}</code> | <span className="api-desc">The cosmetic data last applied.</span> |
| <Link id="m-dummy" /><code><Link to="/mod/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" Dummy { get; }"}</code> | <span className="api-desc">The character dummy that wears the cosmetics.</span> |
| <Link id="m-manager" /><code><Link to="/mod/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; }"}</code> | <span className="api-desc">Customisation manager for the figure's cosmetics. Uses a trophy body in place of the standard body.</span> |
| <Link id="m-pickup-2" /><code><Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> | <span className="api-desc">The pickup used to hold the figure.</span> |
| <Link id="m-slot" /><code><Link to="/mod/game-api/types/alta-customization/icosmeticpresetslot">{"ICosmeticPresetSlot"}</Link>{" Slot { get; private set; }"}</code> | <span className="api-desc">The preset slot the figure belongs to, or null.</span> |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"event Action<"}<Link to="/mod/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> Destroyed"}</code> | <span className="api-desc">Raised when the burn finishes, just before the object is destroyed.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"async void Apply(uint[] cosmeticData, int cosmeticBytes)"}</code> | <span className="api-desc">Loads packed cosmetic data onto the figure's dummy character and remembers it as `Data`.</span> |
| <Link id="m-burn" /><code>{"void Burn()"}</code> | <span className="api-desc">Drops the figure, turns off its colliders and plays the burn effect, then destroys it.</span> |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> | <span className="api-desc">Takes the figure out of its slot and burns it.</span> |
| <Link id="m-forceretreat" /><code>{"void ForceRetreat()"}</code> | <span className="api-desc">Fades the figure out and back in at its slot, or burns it if it has no slot.</span> |
| <Link id="m-reenablecolliders" /><code>{"void ReenableColliders()"}</code> | <span className="api-desc">Turns the figure's colliders back on.</span> |
| <Link id="m-registerslot" /><code>{"void RegisterSlot("}<Link to="/mod/game-api/types/alta-customization/icosmeticpresetslot">{"ICosmeticPresetSlot"}</Link>{" slot)"}</code> | <span className="api-desc">Sets the slot the figure belongs to and points its hover target at the slot.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets the body override (standard body to trophy body), attaches the customization manager to the dummy and hooks the ghost hand toggles.</span> |
| <Link id="m-burnanimation" /><code>{"private IEnumerator BurnAnimation() (iterator)"}</code> | <span className="api-desc">Coroutine: swaps every renderer to a burn material, runs its `_Progress` from 0 to 1 over `burnDuration`, raises `Destroyed` and destroys the object.</span> |
| <Link id="m-disableghosthands" /><code>{"private void DisableGhostHands("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Hides the holding hand's ghost hand while the trophy is held.</span> |
| <Link id="m-enableghosthands" /><code>{"private void EnableGhostHands("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | <span className="api-desc">Shows the ghost hand again when the trophy is let go.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Disposes the addressable session and cleans up the made materials.</span> |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | <span className="api-desc">Puts the original materials back on the renderers.</span> |
| <Link id="m-preparerenderers" /><code>{"private void PrepareRenderers(Dictionary<Material, Material> uniqueMaterials, IEnumerable<Renderer> renderers, Material baseMaterial)"}</code> | <span className="api-desc">Gives each renderer a copy of the base material set up from its own material (one copy per original), and widens skinned mesh bounds.</span> |
| <Link id="m-retreatanimation" /><code>{"private IEnumerator RetreatAnimation() (iterator)"}</code> | <span className="api-desc">Coroutine: fades the trophy out, moves it back to its slot, fades it in and restores the original materials.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CosmeticPresetTrophy`:

<div className="api-used-in">

[`CosmeticPresetApplier.ApplyTrophy`](/mod/game-api/types/alta-customization/cosmeticpresetapplier#m-applytrophy), [`CosmeticPresetDestroyer.CheckDestroy`](/mod/game-api/types/alta-customization/cosmeticpresetdestroyer#m-checkdestroy), [`CosmeticPresetDestroyer.DestroyTrophy`](/mod/game-api/types/alta-customization/cosmeticpresetdestroyer#m-destroytrophy), [`CosmeticPresetDestroyer.trackedTrophies`](/mod/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trackedtrophies), [`CosmeticPresetDestroyer.TrophyEntered`](/mod/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trophyentered), [`CosmeticPresetDestroyer.TrophyExited`](/mod/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trophyexited), [`CosmeticPresetSlot.DeregisterTrophy`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-deregistertrophy), [`CosmeticPresetSlot.DisableEffects`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-disableeffects), [`CosmeticPresetSlot.EnableEffects`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-enableeffects), [`CosmeticPresetSlot.RegisterTrophy`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-registertrophy), [`CosmeticPresetSlot.RegisterTrophyInternal`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-registertrophyinternal), [`CosmeticPresetSlot.SaveTrophy`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-savetrophy), [`CosmeticPresetSlot.Trophy`](/mod/game-api/types/alta-customization/cosmeticpresetslot#m-trophy), [`CosmeticPresetsManager.GetNewTrophy`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-getnewtrophy), [`CosmeticPresetsManager.latestTrophy`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-latesttrophy), [`CosmeticPresetsManager.trophyPrefab`](/mod/game-api/types/alta-customization/cosmeticpresetsmanager#m-trophyprefab), [`CosmeticPresetTrophyTrigger.CleanTrophy`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-cleantrophy), [`CosmeticPresetTrophyTrigger.CurrentTrophies`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-currenttrophies), [`CosmeticPresetTrophyTrigger.mappedTrophies`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-mappedtrophies), [`CosmeticPresetTrophyTrigger.ReleasedTrophy`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-releasedtrophy), [`CosmeticPresetTrophyTrigger.RemoveTrophy`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-removetrophy), [`CosmeticPresetTrophyTrigger.RemoveTrophyCollider`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-removetrophycollider), [`CosmeticPresetTrophyTrigger.trackedTrophies`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trackedtrophies), [`CosmeticPresetTrophyTrigger.TrophyEntered`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophyentered), [`CosmeticPresetTrophyTrigger.TrophyExited`](/mod/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophyexited), [`CosmeticRotatingSlot.DeregisterTrophy`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-deregistertrophy), [`CosmeticRotatingSlot.DisableEffects`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-disableeffects), [`CosmeticRotatingSlot.EnableEffects`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-enableeffects), [`CosmeticRotatingSlot.GetDataFrom`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-getdatafrom-2), [`CosmeticRotatingSlot.SaveTrophy`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-savetrophy), [`CosmeticRotatingSlot.Setup`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-setup), [`CosmeticRotatingSlot.Trophy`](/mod/game-api/types/alta-customization/cosmeticrotatingslot#m-trophy), [`ICosmeticPresetSlot.DeregisterTrophy`](/mod/game-api/types/alta-customization/icosmeticpresetslot#m-deregistertrophy).

</div>
