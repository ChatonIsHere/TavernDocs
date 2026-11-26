---
title: "VoiceChatMouthController"
description: "Animates a player's mouth from their voice chat volume: sets the Speaking layer weight and picks random mouth shapes."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# VoiceChatMouthController

A **class** in `Root.Township`, `Alta.Networking.Voice`.

Animates a player's mouth from their voice chat volume: sets the Speaking layer weight and picks random mouth shapes. Client only; turns itself on once linked to a player, never when headless.

- **Listed in** [Networking and servers](/mod/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"VoiceChatMouthController()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | The character dummy's animator. |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | The player controller this belongs to. |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | Pointer to the character dummy that holds the animator. |
| <Link id="m-lastchangevolume" /><code>{"private float lastChangeVolume"}</code> | Volume level at the last mouth shape change. |
| <Link id="m-mouthchangechance" /><code>{"private float mouthChangeChance"}</code> | Base chance per frame of a new mouth shape (default 0.2). |
| <Link id="m-mouthshapeid" /><code>{"private static readonly int MouthShapeID"}</code> | Animator hash for the `Mouth Shape` parameter. |
| <Link id="m-normalizedvolumeshiftchange" /><code>{"private float normalizedVolumeShiftChange"}</code> | Extra chance per unit of volume change since the last shape change. |
| <Link id="m-numberofmouthshapes" /><code>{"private int numberOfMouthShapes"}</code> | How many mouth shapes to pick from. |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | The network player whose voice is read. |
| <Link id="m-speakinglayer" /><code>{"private int speakingLayer"}</code> | Index of the animator's Speaking layer. |
| <Link id="m-voicemodulator" /><code>{"private AnimationCurve voiceModulator"}</code> | Curve that turns voice energy into layer weight. |

</details>

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the player controller, waits for it to link to a player, and disables itself until then. |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> | Gets the character animator and player, finds the Speaking layer and enables the component. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Sets the Speaking layer weight from voice energy and sometimes picks a new mouth shape. |

</details>
