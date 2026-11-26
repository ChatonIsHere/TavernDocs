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
| <Link id="m-ctor" /><code>{"VoiceChatMouthController()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-animator" /><code>{"private Animator animator"}</code> | <span className="api-desc">The character dummy's animator.</span> |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | <span className="api-desc">The player controller this belongs to.</span> |
| <Link id="m-dummy" /><code>{"private "}<Link to="/mod/game-api/types/global-c-d/characterdummypointer">{"CharacterDummyPointer"}</Link>{" dummy"}</code> | <span className="api-desc">Pointer to the character dummy that holds the animator.</span> |
| <Link id="m-lastchangevolume" /><code>{"private float lastChangeVolume"}</code> | <span className="api-desc">Volume level at the last mouth shape change.</span> |
| <Link id="m-mouthchangechance" /><code>{"private float mouthChangeChance"}</code> | <span className="api-desc">Base chance per frame of a new mouth shape (default 0.2).</span> |
| <Link id="m-mouthshapeid" /><code>{"private static readonly int MouthShapeID"}</code> | <span className="api-desc">Animator hash for the `Mouth Shape` parameter.</span> |
| <Link id="m-normalizedvolumeshiftchange" /><code>{"private float normalizedVolumeShiftChange"}</code> | <span className="api-desc">Extra chance per unit of volume change since the last shape change.</span> |
| <Link id="m-numberofmouthshapes" /><code>{"private int numberOfMouthShapes"}</code> | <span className="api-desc">How many mouth shapes to pick from.</span> |
| <Link id="m-player" /><code>{"private "}<Link to="/mod/game-api/types/global-p/player">{"Player"}</Link>{" player"}</code> | <span className="api-desc">The network player whose voice is read.</span> |
| <Link id="m-speakinglayer" /><code>{"private int speakingLayer"}</code> | <span className="api-desc">Index of the animator's Speaking layer.</span> |
| <Link id="m-voicemodulator" /><code>{"private AnimationCurve voiceModulator"}</code> | <span className="api-desc">Curve that turns voice energy into layer weight.</span> |

</details>

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Finds the player controller, waits for it to link to a player, and disables itself until then.</span> |
| <Link id="m-initialize" /><code>{"private void Initialize()"}</code> | <span className="api-desc">Gets the character animator and player, finds the Speaking layer and enables the component.</span> |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | <span className="api-desc">Sets the Speaking layer weight from voice energy and sometimes picks a new mouth shape.</span> |

</details>
