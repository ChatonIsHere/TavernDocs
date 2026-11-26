---
title: "AmbienceAudio"
description: "A sound source for ambience that applies its own volume through the AmbienceManager volume RTPC and can be muted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbienceAudio

A **class** in `Root.Township`, the global namespace.

A sound source for ambience that applies its own volume through the `AmbienceManager` volume RTPC and can be muted. Client side; a component on ambience objects.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`SoundSource`](/mod/game-api/types/global-s/soundsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmbienceAudio()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismuted" /><code>{"private bool isMuted"}</code> | <span className="api-desc">Backing field for `IsMuted`.</span> |
| <Link id="m-volume" /><code>{"private float volume"}</code> | <span className="api-desc">Backing field for `Volume`.</span> |
| <Link id="m-volumevalue" /><code>{"private RTPCValue volumeValue"}</code> | <span className="api-desc">The prepared volume RTPC value attached to the playing sound. Null until first played.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismuted-2" /><code>{"bool IsMuted { get; set; }"}</code> | <span className="api-desc">Mutes or unmutes the ambience by setting the RTPC to 0 or back to `Volume`.</span> |
| <Link id="m-volume-2" /><code>{"float Volume { get; set; }"}</code> | <span className="api-desc">Ambience volume. Setting it updates the RTPC right away unless muted.</span> |

## Methods

<details className="api-private">
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assignvolumeproperty" /><code>{"private void AssignVolumeProperty()"}</code> | <span className="api-desc">Runs on play: creates the volume RTPC value from `AmbienceManager` if needed and adds it to the sound's properties.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Hooks `AssignVolumeProperty` to the play event.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks the play event and stops the sound.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AmbienceAudio`:

<div className="api-used-in">

[`AtmospherePlugin.mainSource`](/mod/game-api/types/alta-world/atmosphereplugin#m-mainsource), [`DayTimeManager.nightSource`](/mod/game-api/types/alta-world/daytimemanager#m-nightsource), [`RiverAudio.audioSource`](/mod/game-api/types/alta-world-generation/riveraudio#m-audiosource).

</div>
