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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/mod/game-api/types/alta-networking/networkentitybehaviour), [`IRespawnShrine`](/mod/game-api/types/game-other-namespaces/irespawnshrine)
- **Derived types** [`GlobalRespawnShrine`](/mod/game-api/types/game-other-namespaces/globalrespawnshrine), [`PoweredRespawnShrine`](/mod/game-api/types/game-other-namespaces/poweredrespawnshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected RespawnShrine()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-glyphcolorchanged" /><code>{"protected "}<Link to="/mod/game-api/types/global-c-d/colorevent">{"ColorEvent"}</Link>{" glyphColorChanged"}</code> | <span className="api-desc">Event that sets the glyph colour.</span> |
| <Link id="m-handtouchinteractable" /><code>{"protected "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handTouchInteractable"}</code> | <span className="api-desc">The hand-touch interactable players use on the shrine.</span> |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> | <span className="api-desc">Shared logger.</span> |
| <Link id="m-respawnsystem" /><code>{"protected "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" RespawnSystem"}</code> | <span className="api-desc">The respawn system, injected.</span> |

<details className="api-private">
<summary>1 private and internal field</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-syncplaysubscribeaudio" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlaySubscribeAudio"}</code> | <span className="api-desc">Method sync (SyncB) used to play the subscribe sound on clients.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"protected abstract Guid ShrineId { get; }"}</code> | <span className="api-desc">Subclass: the shrine's id.</span> |
| <Link id="m-systemsettings" /><code>{"protected "}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> | <span className="api-desc">Global respawn system settings (glyph colours, sounds).</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onsetspawnpointtoggle" /><code>{"virtual void OnSetSpawnPointToggle("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> | <span className="api-desc">Tells clients nearby to play the subscribe sound when a player toggles this shrine as their spawn.</span> |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> | <span className="api-desc">Hooks the interaction filter and creates the audio sync.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem)"}</code> | <span className="api-desc">VContainer injection of the respawn system.</span> |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> | <span className="api-desc">Stops listening to the model and unhooks the filter.</span> |
| <Link id="m-oninteractionfilter" /><code>{"protected abstract void OnInteractionFilter("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Subclass: decides whether a touch is allowed.</span> |
| <Link id="m-onmodelchanged" /><code>{"protected abstract void OnModelChanged("}<Link to="/mod/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> | <span className="api-desc">Subclass: reacts to a change in the respawn system model.</span> |
| <Link id="m-playsoundeffectforplayer" /><code>{"protected void PlaySoundEffectForPlayer("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSfx)"}</code> | <span className="api-desc">Client: plays a sound on the local player's head.</span> |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> | <span className="api-desc">Starts listening to respawn model changes and applies the current model.</span> |
| <Link id="m-updateshrineglyphcolor" /><code>{"protected void UpdateShrineGlyphColor(bool isSubscribedToShrine)"}</code> | <span className="api-desc">Sets the glyph to the active or inactive colour. Skipped on a remote server.</span> |

<details className="api-private">
<summary>2 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-canplaysfx" /><code>{"private bool CanPlaySfx("}<Link to="/mod/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSfx)"}</code> | <span className="api-desc">True on clients when the sound is set and the local player has a controller.</span> |
| <Link id="m-syncplaysubscribeaudio-2" /><code>{"private void SyncPlaySubscribeAudio("}<Link to="/mod/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/mod/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> | <span className="api-desc">Method sync body; clients play the shrine subscribe sound when they read it.</span> |

</details>
