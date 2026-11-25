---
title: "CharacterLocalityController"
description: "class CharacterLocalityController in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# CharacterLocalityController

A **class** in `Root.Township`, `Alta.Character`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`PlayerControllerLocalityController`](/game-api/types/global-p/playercontrollerlocalitycontroller)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"CharacterLocalityController()"}</code> |

## Fields

<details>
<summary>6 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-bodycontroller" /><code>{"private "}<Link to="/game-api/types/alta-player/bodycontroller">{"BodyController"}</Link>{" bodyController"}</code> |
| <Link id="m-headnetworktransform" /><code>{"private "}<Link to="/game-api/types/alta-networking/networktransform">{"NetworkTransform"}</Link>{" headNetworkTransform"}</code> |
| <Link id="m-headtarget" /><code>{"private Transform headTarget"}</code> |
| <Link id="m-localhead" /><code>{"private Transform localHead"}</code> |
| <Link id="m-remotehead" /><code>{"private Transform remoteHead"}</code> |
| <Link id="m-voicechatfollow" /><code>{"private "}<Link to="/game-api/types/global-i-l/lerpfollow">{"LerpFollow"}</Link>{" voiceChatFollow"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-head" /><code>{"Transform Head { get; set; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-setlocality" /><code>{"override void SetLocality(bool isLocal)"}</code> |
| <Link id="m-awake" /><code>{"protected void Awake()"}</code> |
| <Link id="m-setuplocalandremoteheads" /><code>{"protected virtual void SetupLocalAndRemoteHeads(bool isLocalPlayer)"}</code> |

<details>
<summary>1 private and internal method</summary>

| Member |
| --- |
| <Link id="m-finishedpackingcharactercosmetics" /><code>{"private void FinishedPackingCharacterCosmetics()"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `CharacterLocalityController`:

[`PlayerCharacter.localityController`](/game-api/types/alta-player/playercharacter#m-localitycontroller), [`PlayerCharacter.LocalityController`](/game-api/types/alta-player/playercharacter#m-localitycontroller-2).
