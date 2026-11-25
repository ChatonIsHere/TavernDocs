---
title: "CosmeticPresetTrophy"
description: "class CosmeticPresetTrophy in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CosmeticPresetTrophy

A **class** in `Root.Township`, `Alta.Customization`.

- **Listed in** [Customization and screenshots](/game-api/types/alta-customization)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CosmeticPresetTrophy()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-progress" /><code>{"private static readonly int _Progress"}</code> |  |
| <Link id="m-baseburnmaterial" /><code>{"private Material baseBurnMaterial"}</code> |  |
| <Link id="m-basefadematerial" /><code>{"private Material baseFadeMaterial"}</code> |  |
| <Link id="m-burnduration" /><code>{"private float burnDuration"}</code> |  |
| <Link id="m-fadeduration" /><code>{"private float fadeDuration"}</code> |  |
| <Link id="m-handler" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercustomizationhandler">{"PlayerCustomizationHandler"}</Link>{" handler"}</code> |  |
| <Link id="m-headjoint" /><code>{"private "}<Link to="/game-api/types/global-a-b/boneidentifier">{"BoneIdentifier"}</Link>{" headJoint"}</code> |  |
| <Link id="m-hoverpickup" /><code>{"private "}<Link to="/game-api/types/global-e-h/hoverpickup">{"HoverPickup"}</Link>{" hoverPickup"}</code> |  |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> |  |
| <Link id="m-originalmaterials" /><code>{"private Dictionary<Renderer, Material> originalMaterials"}</code> |  |
| <Link id="m-pickup" /><code>{"private "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup"}</code> |  |
| <Link id="m-renderers" /><code>{"private Renderer[] renderers"}</code> |  |
| <Link id="m-session" /><code>{"private "}<Link to="/game-api/types/global-a-b/addressablesession">{"AddressableSession"}</Link>{" session"}</code> |  |
| <Link id="m-standardbody" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" standardBody"}</code> |  |
| <Link id="m-trophybody" /><code>{"private "}<Link to="/game-api/types/alta-customization/playercosmeticdefinition">{"PlayerCosmeticDefinition"}</Link>{" trophyBody"}</code> |  |
| <Link id="m-uniquematerials" /><code>{"private Dictionary<Material, Material> uniqueMaterials"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-data" /><code><Link to="/game-api/types/alta-customization/cosmeticpresetdata">{"CosmeticPresetData"}</Link>{" Data { get; private set; }"}</code> |  |
| <Link id="m-dummy" /><code><Link to="/game-api/types/alta-player/characterdummy">{"CharacterDummy"}</Link>{" Dummy { get; }"}</code> |  |
| <Link id="m-manager" /><code><Link to="/game-api/types/alta-customization/playercharactercustomizationmanager">{"PlayerCharacterCustomizationManager"}</Link>{" Manager { get; }"}</code> |  |
| <Link id="m-pickup-2" /><code><Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" { get; }"}</code> |  |
| <Link id="m-slot" /><code><Link to="/game-api/types/alta-customization/icosmeticpresetslot">{"ICosmeticPresetSlot"}</Link>{" Slot { get; private set; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-destroyed" /><code>{"event Action<"}<Link to="/game-api/types/alta-customization/cosmeticpresettrophy">{"CosmeticPresetTrophy"}</Link>{"> Destroyed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-apply" /><code>{"async void Apply(uint[] cosmeticData, int cosmeticBytes)"}</code> |  |
| <Link id="m-burn" /><code>{"void Burn()"}</code> |  |
| <Link id="m-destroy" /><code>{"void Destroy()"}</code> |  |
| <Link id="m-forceretreat" /><code>{"void ForceRetreat()"}</code> |  |
| <Link id="m-reenablecolliders" /><code>{"void ReenableColliders()"}</code> |  |
| <Link id="m-registerslot" /><code>{"void RegisterSlot("}<Link to="/game-api/types/alta-customization/icosmeticpresetslot">{"ICosmeticPresetSlot"}</Link>{" slot)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-burnanimation" /><code>{"private IEnumerator BurnAnimation() (iterator)"}</code> |  |
| <Link id="m-disableghosthands" /><code>{"private void DisableGhostHands("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-enableghosthands" /><code>{"private void EnableGhostHands("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> |  |
| <Link id="m-preparerenderers" /><code>{"private void PrepareRenderers(Dictionary<Material, Material> uniqueMaterials, IEnumerable<Renderer> renderers, Material baseMaterial)"}</code> |  |
| <Link id="m-retreatanimation" /><code>{"private IEnumerator RetreatAnimation() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `CosmeticPresetTrophy`:

[`CosmeticPresetApplier.ApplyTrophy`](/game-api/types/alta-customization/cosmeticpresetapplier#m-applytrophy), [`CosmeticPresetDestroyer.CheckDestroy`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-checkdestroy), [`CosmeticPresetDestroyer.DestroyTrophy`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-destroytrophy), [`CosmeticPresetDestroyer.trackedTrophies`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trackedtrophies), [`CosmeticPresetDestroyer.TrophyEntered`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trophyentered), [`CosmeticPresetDestroyer.TrophyExited`](/game-api/types/alta-customization/cosmeticpresetdestroyer#m-trophyexited), [`CosmeticPresetSlot.DeregisterTrophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-deregistertrophy), [`CosmeticPresetSlot.DisableEffects`](/game-api/types/alta-customization/cosmeticpresetslot#m-disableeffects), [`CosmeticPresetSlot.EnableEffects`](/game-api/types/alta-customization/cosmeticpresetslot#m-enableeffects), [`CosmeticPresetSlot.RegisterTrophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-registertrophy), [`CosmeticPresetSlot.RegisterTrophyInternal`](/game-api/types/alta-customization/cosmeticpresetslot#m-registertrophyinternal), [`CosmeticPresetSlot.SaveTrophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-savetrophy), [`CosmeticPresetSlot.Trophy`](/game-api/types/alta-customization/cosmeticpresetslot#m-trophy), [`CosmeticPresetsManager.GetNewTrophy`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-getnewtrophy), [`CosmeticPresetsManager.latestTrophy`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-latesttrophy), [`CosmeticPresetsManager.trophyPrefab`](/game-api/types/alta-customization/cosmeticpresetsmanager#m-trophyprefab), [`CosmeticPresetTrophyTrigger.CleanTrophy`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-cleantrophy), [`CosmeticPresetTrophyTrigger.CurrentTrophies`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-currenttrophies), [`CosmeticPresetTrophyTrigger.mappedTrophies`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-mappedtrophies), [`CosmeticPresetTrophyTrigger.ReleasedTrophy`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-releasedtrophy), [`CosmeticPresetTrophyTrigger.RemoveTrophy`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-removetrophy), [`CosmeticPresetTrophyTrigger.RemoveTrophyCollider`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-removetrophycollider), [`CosmeticPresetTrophyTrigger.trackedTrophies`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trackedtrophies), [`CosmeticPresetTrophyTrigger.TrophyEntered`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophyentered), [`CosmeticPresetTrophyTrigger.TrophyExited`](/game-api/types/alta-customization/cosmeticpresettrophytrigger#m-trophyexited), [`CosmeticRotatingSlot.DeregisterTrophy`](/game-api/types/alta-customization/cosmeticrotatingslot#m-deregistertrophy), [`CosmeticRotatingSlot.DisableEffects`](/game-api/types/alta-customization/cosmeticrotatingslot#m-disableeffects), [`CosmeticRotatingSlot.EnableEffects`](/game-api/types/alta-customization/cosmeticrotatingslot#m-enableeffects), [`CosmeticRotatingSlot.GetDataFrom`](/game-api/types/alta-customization/cosmeticrotatingslot#m-getdatafrom-2), [`CosmeticRotatingSlot.SaveTrophy`](/game-api/types/alta-customization/cosmeticrotatingslot#m-savetrophy), [`CosmeticRotatingSlot.Setup`](/game-api/types/alta-customization/cosmeticrotatingslot#m-setup), [`CosmeticRotatingSlot.Trophy`](/game-api/types/alta-customization/cosmeticrotatingslot#m-trophy), [`ICosmeticPresetSlot.DeregisterTrophy`](/game-api/types/alta-customization/icosmeticpresetslot#m-deregistertrophy).
