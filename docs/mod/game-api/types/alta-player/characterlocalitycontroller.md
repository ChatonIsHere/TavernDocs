---
title: "CharacterLocalityController"
description: "The player character's locality controller: when a player is marked local or remote it picks the head transform and wires the head target, body, voice chat..."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterLocalityController

A **class** in `Root.Township`, `Alta.Character`.

The player character's locality controller: when a player is marked local or remote it picks the head transform and wires the head target, body, voice chat and ghost hands to it.

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`PlayerControllerLocalityController`](/mod/game-api/types/global-p/playercontrollerlocalitycontroller)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"CharacterLocalityController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodycontroller" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" bodyController"}</code> | <span className="api-desc">The body controller whose `Head` is set to the chosen head.</span> |
| <Link id="m-headnetworktransform" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networktransform">{"NetworkTransform"}</Link>{" headNetworkTransform"}</code> | <span className="api-desc">Network transform for the head. Not used in this class's code.</span> |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | <span className="api-desc">Transform re-parented under the chosen head.</span> |
| <Link id="m-localhead" /><code>{"private Transform localHead"}</code> | <span className="api-desc">Head object activated when the character is the local player.</span> |
| <Link id="m-remotehead" /><code>{"private Transform remoteHead"}</code> | <span className="api-desc">Head used by default (remote players).</span> |
| <Link id="m-voicechatfollow" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/lerpfollow">{"LerpFollow"}</Link>{" voiceChatFollow"}</code> | <span className="api-desc">Follower that keeps the voice chat source on the head.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"Transform Head { get; set; }"}</code> | <span className="api-desc">The head transform in use. Set to the remote head in `Awake`; the head target, body and voice chat follow it.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setlocality" /><code>{"override void SetLocality(bool isLocal)"}</code> | <span className="api-desc">Marks the character local or remote, sets up heads, turns ghost hands on only when local, and on Android fades in after cosmetics pack.</span> |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | <span className="api-desc">Starts with `Head` set to the remote head.</span> |
| <Link id="m-setuplocalandremoteheads" /><code>{"protected virtual void SetupLocalAndRemoteHeads(bool isLocalPlayer)"}</code> | <span className="api-desc">Parents the head target to `Head` and points the body controller and voice chat follower at it.</span> |

<details className="api-private">
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishedpackingcharactercosmetics" /><code>{"private void FinishedPackingCharacterCosmetics()"}</code> | <span className="api-desc">Android only: removes the screen fade lock a second after cosmetics finish packing, and hides the clothes on Quest when the app lacks input focus.</span> |

</details>

## Used in

Members of other types that take, return or hold a `CharacterLocalityController`:

<div className="api-used-in">

[`PlayerCharacter.localityController`](/mod/game-api/types/alta-player/playercharacter#m-localitycontroller), [`PlayerCharacter.LocalityController`](/mod/game-api/types/alta-player/playercharacter#m-localitycontroller-2).

</div>
