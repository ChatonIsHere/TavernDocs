---
title: "RespawnShrine"
description: "abstract class RespawnShrine in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RespawnShrine

An **abstract class** in `Root.Township`, `ATT.Respawn`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`NetworkEntityBehaviour`](/game-api/types/alta-networking/networkentitybehaviour), [`IRespawnShrine`](/game-api/types/game-other-namespaces/irespawnshrine)
- **Derived types** [`GlobalRespawnShrine`](/game-api/types/game-other-namespaces/globalrespawnshrine), [`PoweredRespawnShrine`](/game-api/types/game-other-namespaces/poweredrespawnshrine)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"protected RespawnShrine()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-glyphcolorchanged" /><code>{"protected "}<Link to="/game-api/types/global-c-d/colorevent">{"ColorEvent"}</Link>{" glyphColorChanged"}</code> |  |
| <Link id="m-handtouchinteractable" /><code>{"protected "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" handTouchInteractable"}</code> |  |
| <Link id="m-logger" /><code>{"protected static Logger logger"}</code> |  |
| <Link id="m-respawnsystem" /><code>{"protected "}<Link to="/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" RespawnSystem"}</code> |  |
| <Link id="m-syncplaysubscribeaudio" /><code>{"private "}<Link to="/game-api/types/alta-networking/methodsync">{"MethodSync"}</Link>{" syncPlaySubscribeAudio"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-shrineid" /><code>{"protected abstract Guid ShrineId { get; }"}</code> |  |
| <Link id="m-systemsettings" /><code>{"protected "}<Link to="/game-api/types/game-other-namespaces/irespawnsystemsettings">{"IRespawnSystemSettings"}</Link>{" SystemSettings { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-onsetspawnpointtoggle" /><code>{"virtual void OnSetSpawnPointToggle("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player)"}</code> |  |
| <Link id="m-awake" /><code>{"protected virtual void Awake()"}</code> |  |
| <Link id="m-canplaysfx" /><code>{"private bool CanPlaySfx("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSfx)"}</code> |  |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/game-api/types/game-other-namespaces/irespawnsystem">{"IRespawnSystem"}</Link>{" respawnSystem)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected virtual void OnDestroy()"}</code> |  |
| <Link id="m-oninteractionfilter" /><code>{"protected abstract void OnInteractionFilter("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-onmodelchanged" /><code>{"protected abstract void OnModelChanged("}<Link to="/game-api/types/game-other-namespaces/irespawnsystemmodel">{"IRespawnSystemModel"}</Link>{" model)"}</code> |  |
| <Link id="m-playsoundeffectforplayer" /><code>{"protected void PlaySoundEffectForPlayer("}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" shrineSfx)"}</code> |  |
| <Link id="m-start" /><code>{"protected virtual void Start()"}</code> |  |
| <Link id="m-syncplaysubscribeaudio-2" /><code>{"private void SyncPlaySubscribeAudio("}<Link to="/game-api/types/alta-networking/iplayer">{"IPlayer"}</Link>{" player, "}<Link to="/game-api/types/assembly-other/stream">{"Stream"}</Link>{" stream)"}</code> |  |
| <Link id="m-updateshrineglyphcolor" /><code>{"protected void UpdateShrineGlyphColor(bool isSubscribedToShrine)"}</code> |  |
