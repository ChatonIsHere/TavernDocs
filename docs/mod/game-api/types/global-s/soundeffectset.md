---
title: "SoundEffectSet"
description: "A ScriptableObject pairing a SoundEffect type with a Wwise event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundEffectSet

A **class** in `Root.Township`, the global namespace.

A ScriptableObject pairing a `SoundEffect` type with a Wwise event. Plays through the `AudioManager` singleton, so it only makes sound where audio runs.

- **Listed in** [Global namespace: S](/mod/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`SoundEffectSet.Create`](/mod/game-api/types/global-s/soundeffectset-create)
- **Nested types** [`Create`](/mod/game-api/types/global-s/soundeffectset-create)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SoundEffectSet()"}</code> | Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets. |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-soundeffecttype" /><code>{"private "}<Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundEffectType"}</code> | Which kind of sound effect this is. |
| <Link id="m-soundevent" /><code>{"private Event soundEvent"}</code> | The Wwise event played. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-soundeffecttype-2" /><code><Link to="/mod/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" SoundEffectType { get; }"}</code> | The `SoundEffect` value this set is for. |
| <Link id="m-soundevent-2" /><code>{"Event SoundEvent { get; }"}</code> | The Wwise event to post. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play" /><code>{"void Play()"}</code> | Plays the sound with no position. |
| <Link id="m-playatobject" /><code>{"void PlayAtObject(Component position)"}</code> | Plays the sound at a component's current position, tied to its game object. |
| <Link id="m-playatposition" /><code>{"void PlayAtPosition(Vector3 position)"}</code> | Plays the sound at a world position. The rotation overload ignores the rotation. |
| <Link id="m-playatposition-2" /><code>{"void PlayAtPosition(Vector3 position, Quaternion rotation)"}</code> | Plays the sound at a world position. The rotation overload ignores the rotation. |
| <Link id="m-playonobject" /><code>{"void PlayOnObject(Component position)"}</code> | Plays the sound attached to a component's game object, or to a player's controller. |
| <Link id="m-playonobject-2" /><code>{"void PlayOnObject("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" position)"}</code> | Plays the sound attached to a component's game object, or to a player's controller. |

## Used in

Members of other types that take, return or hold a `SoundEffectSet`:

[`Smelter.smelterActiveAudio`](/mod/game-api/types/alta-crafting/smelter#m-smelteractiveaudio), [`Smelter.whistleAudio`](/mod/game-api/types/alta-crafting/smelter#m-whistleaudio), [`RecipePlacer.changePieceAudio`](/mod/game-api/types/alta-crafting/recipeplacer#m-changepieceaudio), [`RecipePlacer.startWorkingAudio`](/mod/game-api/types/alta-crafting/recipeplacer#m-startworkingaudio), [`RecipePlacer.stopWorkingAudio`](/mod/game-api/types/alta-crafting/recipeplacer#m-stopworkingaudio), [`TimberBlock.destroyingSound`](/mod/game-api/types/alta-crafting/timberblock#m-destroyingsound), [`TimberBlock.hittingSound`](/mod/game-api/types/alta-crafting/timberblock#m-hittingsound), [`TimberPieceBase.hittingSound`](/mod/game-api/types/alta-crafting/timberpiecebase#m-hittingsound), [`CaveTeleportSettings.teleportSoundEffect`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-teleportsoundeffect), [`CaveTeleportSettings.TeleportSoundEffect`](/mod/game-api/types/alta-world-generation/caveteleportsettings#m-teleportsoundeffect-2), [`WaterfallEffectGenerator.soundEffect`](/mod/game-api/types/alta-world-generation/waterfalleffectgenerator#m-soundeffect), [`ImpactDetectorSettings.ImpactSettings.soundEffectSet`](/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings#m-soundeffectset), [`ImpactDetectorSettings.ImpactSettings.SoundEffectSet`](/mod/game-api/types/alta-items/impactdetectorsettings-impactsettings#m-soundeffectset-2), [`ImpactModifierComponent.defaultSound`](/mod/game-api/types/alta-items/impactmodifiercomponent#m-defaultsound), [`ImpactModifierComponent.SoundEffect`](/mod/game-api/types/alta-items/impactmodifiercomponent#m-soundeffect), [`AnimationBasedSound.clips`](/mod/game-api/types/alta-networking/animationbasedsound#m-clips), [`BookPageInstance.duplicatePageSound`](/mod/game-api/types/alta-items/bookpageinstance#m-duplicatepagesound), [`BookPageInstance.removePageSound`](/mod/game-api/types/alta-items/bookpageinstance#m-removepagesound), [`DownedState.CanPlaySfx`](/mod/game-api/types/alta-player/downedstate#m-canplaysfx), [`DownedState.PlaySoundEffectForPlayer`](/mod/game-api/types/alta-player/downedstate#m-playsoundeffectforplayer), [`SpiritState.CanPlaySfx`](/mod/game-api/types/alta-player/spiritstate#m-canplaysfx), [`SpiritState.PlaySoundEffectForPlayer`](/mod/game-api/types/alta-player/spiritstate#m-playsoundeffectforplayer), [`SpiritStateSettings.enterSpiritModeSfx`](/mod/game-api/types/alta-player/spiritstatesettings#m-enterspiritmodesfx), [`SpiritStateSettings.EnterSpiritModeSfx`](/mod/game-api/types/alta-player/spiritstatesettings#m-enterspiritmodesfx-2), [`SpiritStateSettings.exitSpiritModeSfx`](/mod/game-api/types/alta-player/spiritstatesettings#m-exitspiritmodesfx), [`SpiritStateSettings.ExitSpiritModeSfx`](/mod/game-api/types/alta-player/spiritstatesettings#m-exitspiritmodesfx-2), [`AnalyticalButton.pressedSound`](/mod/game-api/types/global-a-b/analyticalbutton#m-pressedsound), [`AnalyticalButton.releasedSound`](/mod/game-api/types/global-a-b/analyticalbutton#m-releasedsound), [`DownedStateSettings.enterDownedStateSfx`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-enterdownedstatesfx), [`DownedStateSettings.EnterDownedStateSfx`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-enterdownedstatesfx-2), [`DownedStateSettings.exitDownedStateSfx`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-exitdownedstatesfx), [`DownedStateSettings.ExitDownedStateSfx`](/mod/game-api/types/game-other-namespaces/downedstatesettings#m-exitdownedstatesfx-2), [`IRespawnSystemSettings.ShrineDeactivationSfx`](/mod/game-api/types/game-other-namespaces/irespawnsystemsettings#m-shrinedeactivationsfx), [`IRespawnSystemSettings.ShrineSubscribeSfx`](/mod/game-api/types/game-other-namespaces/irespawnsystemsettings#m-shrinesubscribesfx), [`RespawnShrine.CanPlaySfx`](/mod/game-api/types/game-other-namespaces/respawnshrine#m-canplaysfx), [`RespawnShrine.PlaySoundEffectForPlayer`](/mod/game-api/types/game-other-namespaces/respawnshrine#m-playsoundeffectforplayer), [`RespawnSystemSettings.shrineDeactivationSfx`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings#m-shrinedeactivationsfx), [`RespawnSystemSettings.ShrineDeactivationSfx`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings#m-shrinedeactivationsfx-2), [`RespawnSystemSettings.shrineSubscribeSfx`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings#m-shrinesubscribesfx), [`RespawnSystemSettings.ShrineSubscribeSfx`](/mod/game-api/types/game-other-namespaces/respawnsystemsettings#m-shrinesubscribesfx-2), [`AudioManager.GetSoundEventObject`](/mod/game-api/types/global-a-b/audiomanager#m-getsoundeventobject), [`AudioManager.IsAudioValid`](/mod/game-api/types/global-a-b/audiomanager#m-isaudiovalid), [`AudioManager.IsValidSoundCallThisFrame`](/mod/game-api/types/global-a-b/audiomanager#m-isvalidsoundcallthisframe), [`AudioManager.PlayInternal`](/mod/game-api/types/global-a-b/audiomanager#m-playinternal), [`AudioManager.PlayInternalOneShot`](/mod/game-api/types/global-a-b/audiomanager#m-playinternaloneshot), [`AudioManager.PlaySoundEffect`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffect), [`AudioManager.PlaySoundEffectAt`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffectat), [`AudioManager.PlaySoundEffectOnObject`](/mod/game-api/types/global-a-b/audiomanager#m-playsoundeffectonobject), [`AudioManager.Resolve`](/mod/game-api/types/global-a-b/audiomanager#m-resolve), [`AudioManager.soundEffectCallerIds`](/mod/game-api/types/global-a-b/audiomanager#m-soundeffectcallerids), [`Bellows.bellowSound`](/mod/game-api/types/global-a-b/bellows#m-bellowsound), [`ButtonSoundSettings.onPressed`](/mod/game-api/types/global-a-b/buttonsoundsettings#m-onpressed), [`ButtonSoundSettings.onReleased`](/mod/game-api/types/global-a-b/buttonsoundsettings#m-onreleased), [`DurabilityGlobalSettings.defaultStateChangeSound`](/mod/game-api/types/global-c-d/durabilityglobalsettings#m-defaultstatechangesound), [`DurabilityGlobalSettings.DefaultStateChangeSound`](/mod/game-api/types/global-c-d/durabilityglobalsettings#m-defaultstatechangesound-2), [`DurabilityModule.overrideStateChangeSound`](/mod/game-api/types/global-c-d/durabilitymodule#m-overridestatechangesound), [`SpiritModeDoorway.spiritDoorPassSfx`](/mod/game-api/types/game-other-namespaces/spiritmodedoorway#m-spiritdoorpasssfx), [`LoopingSoundEffect.loopSoundEffect`](/mod/game-api/types/global-i-l/loopingsoundeffect#m-loopsoundeffect), [`PhysicalButton.defaultSoundEffectSet`](/mod/game-api/types/global-p/physicalbutton#m-defaultsoundeffectset), [`PhysicalButton.DefaultSoundEffectSet`](/mod/game-api/types/global-p/physicalbutton#m-defaultsoundeffectset-2) and 27 more.
