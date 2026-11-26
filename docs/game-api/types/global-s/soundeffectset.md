---
title: "SoundEffectSet"
description: "A ScriptableObject pairing a SoundEffect type with a Wwise event."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SoundEffectSet

A **class** in `Root.Township`, no namespace.

A ScriptableObject pairing a `SoundEffect` type with a Wwise event. Plays through the `AudioManager` singleton, so it only makes sound where audio runs.

- **Listed in** [No namespace: S](/game-api/types/global-s)
- **Inherits or implements** `ScriptableObject`
- **Derived types** [`SoundEffectSet.Create`](/game-api/types/global-s/soundeffectset-create)
- **Nested types** [`Create`](/game-api/types/global-s/soundeffectset-create)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SoundEffectSet()"}</code> |

## Fields

<details>
<summary>2 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-soundeffecttype" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" soundEffectType"}</code> | Which kind of sound effect this is. |
| <Link id="m-soundevent" /><code>{"private Event soundEvent"}</code> | The Wwise event played. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-soundeffecttype-2" /><code><Link to="/game-api/types/global-s/soundeffect">{"SoundEffect"}</Link>{" SoundEffectType { get; }"}</code> | The `SoundEffect` value this set is for. |
| <Link id="m-soundevent-2" /><code>{"Event SoundEvent { get; }"}</code> | The Wwise event to post. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-play" /><code>{"void Play()"}</code> | Plays the sound with no position. |
| <Link id="m-playatobject" /><code>{"void PlayAtObject(Component position)"}</code> | Plays the sound at a component's current position, tied to its game object. |
| <Link id="m-playatposition" /><code>{"void PlayAtPosition(Vector3 position)"}</code> | Plays the sound at a world position. The rotation overload ignores the rotation. |
| <Link id="m-playatposition-2" /><code>{"void PlayAtPosition(Vector3 position, Quaternion rotation)"}</code> | Plays the sound at a world position. The rotation overload ignores the rotation. |
| <Link id="m-playonobject" /><code>{"void PlayOnObject(Component position)"}</code> | Plays the sound attached to a component's game object, or to a player's controller. |
| <Link id="m-playonobject-2" /><code>{"void PlayOnObject("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" position)"}</code> | Plays the sound attached to a component's game object, or to a player's controller. |

## Used in

Members of other types that take, return or hold a `SoundEffectSet`:

[`Smelter.smelterActiveAudio`](/game-api/types/alta-crafting/smelter#m-smelteractiveaudio), [`Smelter.whistleAudio`](/game-api/types/alta-crafting/smelter#m-whistleaudio), [`RecipePlacer.changePieceAudio`](/game-api/types/alta-crafting/recipeplacer#m-changepieceaudio), [`RecipePlacer.startWorkingAudio`](/game-api/types/alta-crafting/recipeplacer#m-startworkingaudio), [`RecipePlacer.stopWorkingAudio`](/game-api/types/alta-crafting/recipeplacer#m-stopworkingaudio), [`TimberBlock.destroyingSound`](/game-api/types/alta-crafting/timberblock#m-destroyingsound), [`TimberBlock.hittingSound`](/game-api/types/alta-crafting/timberblock#m-hittingsound), [`TimberPieceBase.hittingSound`](/game-api/types/alta-crafting/timberpiecebase#m-hittingsound), [`CaveTeleportSettings.teleportSoundEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-teleportsoundeffect), [`CaveTeleportSettings.TeleportSoundEffect`](/game-api/types/alta-world-generation/caveteleportsettings#m-teleportsoundeffect-2), [`WaterfallEffectGenerator.soundEffect`](/game-api/types/alta-world-generation/waterfalleffectgenerator#m-soundeffect), [`ImpactDetectorSettings.ImpactSettings.soundEffectSet`](/game-api/types/alta-items/impactdetectorsettings-impactsettings#m-soundeffectset), [`ImpactDetectorSettings.ImpactSettings.SoundEffectSet`](/game-api/types/alta-items/impactdetectorsettings-impactsettings#m-soundeffectset-2), [`ImpactModifierComponent.defaultSound`](/game-api/types/alta-items/impactmodifiercomponent#m-defaultsound), [`ImpactModifierComponent.SoundEffect`](/game-api/types/alta-items/impactmodifiercomponent#m-soundeffect), [`AnimationBasedSound.clips`](/game-api/types/alta-networking/animationbasedsound#m-clips), [`BookPageInstance.duplicatePageSound`](/game-api/types/alta-items/bookpageinstance#m-duplicatepagesound), [`BookPageInstance.removePageSound`](/game-api/types/alta-items/bookpageinstance#m-removepagesound), [`DownedState.CanPlaySfx`](/game-api/types/alta-player/downedstate#m-canplaysfx), [`DownedState.PlaySoundEffectForPlayer`](/game-api/types/alta-player/downedstate#m-playsoundeffectforplayer), [`SpiritState.CanPlaySfx`](/game-api/types/alta-player/spiritstate#m-canplaysfx), [`SpiritState.PlaySoundEffectForPlayer`](/game-api/types/alta-player/spiritstate#m-playsoundeffectforplayer), [`SpiritStateSettings.enterSpiritModeSfx`](/game-api/types/alta-player/spiritstatesettings#m-enterspiritmodesfx), [`SpiritStateSettings.EnterSpiritModeSfx`](/game-api/types/alta-player/spiritstatesettings#m-enterspiritmodesfx-2), [`SpiritStateSettings.exitSpiritModeSfx`](/game-api/types/alta-player/spiritstatesettings#m-exitspiritmodesfx), [`SpiritStateSettings.ExitSpiritModeSfx`](/game-api/types/alta-player/spiritstatesettings#m-exitspiritmodesfx-2), [`AnalyticalButton.pressedSound`](/game-api/types/global-a-b/analyticalbutton#m-pressedsound), [`AnalyticalButton.releasedSound`](/game-api/types/global-a-b/analyticalbutton#m-releasedsound), [`DownedStateSettings.enterDownedStateSfx`](/game-api/types/game-other-namespaces/downedstatesettings#m-enterdownedstatesfx), [`DownedStateSettings.EnterDownedStateSfx`](/game-api/types/game-other-namespaces/downedstatesettings#m-enterdownedstatesfx-2), [`DownedStateSettings.exitDownedStateSfx`](/game-api/types/game-other-namespaces/downedstatesettings#m-exitdownedstatesfx), [`DownedStateSettings.ExitDownedStateSfx`](/game-api/types/game-other-namespaces/downedstatesettings#m-exitdownedstatesfx-2), [`IRespawnSystemSettings.ShrineDeactivationSfx`](/game-api/types/game-other-namespaces/irespawnsystemsettings#m-shrinedeactivationsfx), [`IRespawnSystemSettings.ShrineSubscribeSfx`](/game-api/types/game-other-namespaces/irespawnsystemsettings#m-shrinesubscribesfx), [`RespawnShrine.CanPlaySfx`](/game-api/types/game-other-namespaces/respawnshrine#m-canplaysfx), [`RespawnShrine.PlaySoundEffectForPlayer`](/game-api/types/game-other-namespaces/respawnshrine#m-playsoundeffectforplayer), [`RespawnSystemSettings.shrineDeactivationSfx`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-shrinedeactivationsfx), [`RespawnSystemSettings.ShrineDeactivationSfx`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-shrinedeactivationsfx-2), [`RespawnSystemSettings.shrineSubscribeSfx`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-shrinesubscribesfx), [`RespawnSystemSettings.ShrineSubscribeSfx`](/game-api/types/game-other-namespaces/respawnsystemsettings#m-shrinesubscribesfx-2), [`AudioManager.GetSoundEventObject`](/game-api/types/global-a-b/audiomanager#m-getsoundeventobject), [`AudioManager.IsAudioValid`](/game-api/types/global-a-b/audiomanager#m-isaudiovalid), [`AudioManager.IsValidSoundCallThisFrame`](/game-api/types/global-a-b/audiomanager#m-isvalidsoundcallthisframe), [`AudioManager.PlayInternal`](/game-api/types/global-a-b/audiomanager#m-playinternal), [`AudioManager.PlayInternalOneShot`](/game-api/types/global-a-b/audiomanager#m-playinternaloneshot), [`AudioManager.PlaySoundEffect`](/game-api/types/global-a-b/audiomanager#m-playsoundeffect), [`AudioManager.PlaySoundEffectAt`](/game-api/types/global-a-b/audiomanager#m-playsoundeffectat), [`AudioManager.PlaySoundEffectOnObject`](/game-api/types/global-a-b/audiomanager#m-playsoundeffectonobject), [`AudioManager.Resolve`](/game-api/types/global-a-b/audiomanager#m-resolve), [`AudioManager.soundEffectCallerIds`](/game-api/types/global-a-b/audiomanager#m-soundeffectcallerids), [`Bellows.bellowSound`](/game-api/types/global-a-b/bellows#m-bellowsound), [`ButtonSoundSettings.onPressed`](/game-api/types/global-a-b/buttonsoundsettings#m-onpressed), [`ButtonSoundSettings.onReleased`](/game-api/types/global-a-b/buttonsoundsettings#m-onreleased), [`DurabilityGlobalSettings.defaultStateChangeSound`](/game-api/types/global-c-d/durabilityglobalsettings#m-defaultstatechangesound), [`DurabilityGlobalSettings.DefaultStateChangeSound`](/game-api/types/global-c-d/durabilityglobalsettings#m-defaultstatechangesound-2), [`DurabilityModule.overrideStateChangeSound`](/game-api/types/global-c-d/durabilitymodule#m-overridestatechangesound), [`SpiritModeDoorway.spiritDoorPassSfx`](/game-api/types/game-other-namespaces/spiritmodedoorway#m-spiritdoorpasssfx), [`LoopingSoundEffect.loopSoundEffect`](/game-api/types/global-i-l/loopingsoundeffect#m-loopsoundeffect), [`PhysicalButton.defaultSoundEffectSet`](/game-api/types/global-p/physicalbutton#m-defaultsoundeffectset), [`PhysicalButton.DefaultSoundEffectSet`](/game-api/types/global-p/physicalbutton#m-defaultsoundeffectset-2) and 27 more.
