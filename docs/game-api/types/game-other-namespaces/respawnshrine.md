---
title: "RespawnShrine"
description: "Base for a respawn shrine in the world that players touch to set as their spawn point."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrine

An **abstract class** in `Root.Township`, `ATT.Respawn`.

Base for a respawn shrine in the world that players touch to set as their spawn point. Listens to the respawn system model and shows a glyph colour for whether the local player is linked.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IRespawnShrine`](/game-api/types/game-other-namespaces/irespawnshrine)
- **Derived types** [`GlobalRespawnShrine`](/game-api/types/game-other-namespaces/globalrespawnshrine), [`PoweredRespawnShrine`](/game-api/types/game-other-namespaces/poweredrespawnshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected RespawnShrine()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-glyphcolorchanged" /><code>{"protected "}<Link to="/game-api/types/global-c-d/colorevent">{"ColorEvent"}</Link>{" glyphColorChanged"}</code> | Event that sets the glyph colour. |
| <Link id="m-handtouchinteractable" /><code>{"protected "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handTouchInteractable"}</code> | The hand-touch interactable players use on the shrine. |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | Shared logger. |
| <Link id="m-respawnsystem" /><code>{"protected "}<Link to="/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" RespawnSystem"}</code> | The respawn system, injected. |

<details>
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncplaysubscribeaudio" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlaySubscribeAudio"}</code> | Method sync (SyncB) used to play the subscribe sound on clients. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"protected abstract Guid ShrineId { get; }"}</code> | Subclass: the shrine's id. |
| <Link id="m-systemsettings" /><code>{"protected "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | Global respawn system settings (glyph colours, sounds). |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onsetspawnpointtoggle" /><code>{"virtual void OnSetSpawnPointToggle("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | Tells clients nearby to play the subscribe sound when a player toggles this shrine as their spawn. |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | Hooks the interaction filter and creates the audio sync. |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem)"}</code> | VContainer injection of the respawn system. |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | Stops listening to the model and unhooks the filter. |
| <Link id="m-oninteractionfilter" /><code>{"protected abstract void OnInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | Subclass: decides whether a touch is allowed. |
| <Link id="m-onmodelchanged" /><code>{"protected abstract void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | Subclass: reacts to a change in the respawn system model. |
| <Link id="m-playsoundeffectforplayer" /><code>{"protected void PlaySoundEffectForPlayer("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSfx)"}</code> | Client: plays a sound on the local player's head. |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | Starts listening to respawn model changes and applies the current model. |
| <Link id="m-updateshrineglyphcolor" /><code>{"protected void UpdateShrineGlyphColor(bool isSubscribedToShrine)"}</code> | Sets the glyph to the active or inactive colour. Skipped on a remote server. |

<details>
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canplaysfx" /><code>{"private bool CanPlaySfx("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSfx)"}</code> | True on clients when the sound is set and the local player has a controller. |
| <Link id="m-syncplaysubscribeaudio-2" /><code>{"private void SyncPlaySubscribeAudio("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | Method sync body; clients play the shrine subscribe sound when they read it. |

</details>
