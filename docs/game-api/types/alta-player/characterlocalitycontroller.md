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

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerControllerLocalityController`](/game-api/types/global-p/playercontrollerlocalitycontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CharacterLocalityController()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-bodycontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" bodyController"}</code> | The body controller whose `Head` is set to the chosen head. |
| <Link id="m-headnetworktransform" /><code>{"private "}<Link to="/game-api/types/alta-networking/networktransform">{"NetworkTransform"}</Link>{" headNetworkTransform"}</code> | Network transform for the head. Not used in this class's code. |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> | Transform re-parented under the chosen head. |
| <Link id="m-localhead" /><code>{"private Transform localHead"}</code> | Head object activated when the character is the local player. |
| <Link id="m-remotehead" /><code>{"private Transform remoteHead"}</code> | Head used by default (remote players). |
| <Link id="m-voicechatfollow" /><code>{"private "}<Link to="/game-api/types/global-i-l/lerpfollow">{"LerpFollow"}</Link>{" voiceChatFollow"}</code> | Follower that keeps the voice chat source on the head. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-head" /><code>{"Transform Head { get; set; }"}</code> | The head transform in use. Set to the remote head in `Awake`; the head target, body and voice chat follow it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setlocality" /><code>{"override void SetLocality(bool isLocal)"}</code> | Marks the character local or remote, sets up heads, turns ghost hands on only when local, and on Android fades in after cosmetics pack. |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> | Starts with `Head` set to the remote head. |
| <Link id="m-setuplocalandremoteheads" /><code>{"protected virtual void SetupLocalAndRemoteHeads(bool isLocalPlayer)"}</code> | Parents the head target to `Head` and points the body controller and voice chat follower at it. |

<details>
<summary>1 private and internal method</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-finishedpackingcharactercosmetics" /><code>{"private void FinishedPackingCharacterCosmetics()"}</code> | Android only: removes the screen fade lock a second after cosmetics finish packing, and hides the clothes on Quest when the app lacks input focus. |

</details>

## Used in

Members of other types that take, return or hold a `CharacterLocalityController`:

[`PlayerCharacter.localityController`](/game-api/types/alta-player/playercharacter#m-localitycontroller), [`PlayerCharacter.LocalityController`](/game-api/types/alta-player/playercharacter#m-localitycontroller-2).
