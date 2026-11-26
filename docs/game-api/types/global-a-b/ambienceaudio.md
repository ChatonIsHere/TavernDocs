---
title: "AmbienceAudio"
description: "A sound source for ambience that applies its own volume through the AmbienceManager volume RTPC and can be muted."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AmbienceAudio

A **class** in `Root.Township`, no namespace.

A sound source for ambience that applies its own volume through the `AmbienceManager` volume RTPC and can be muted. Client side; a component on ambience objects.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`SoundSource`](/game-api/types/global-s/soundsource)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AmbienceAudio()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ismuted" /><code>{"private bool isMuted"}</code> | Backing field for `IsMuted`. |
| <Link id="m-volume" /><code>{"private float volume"}</code> | Backing field for `Volume`. |
| <Link id="m-volumevalue" /><code>{"private RTPCValue volumeValue"}</code> | The prepared volume RTPC value attached to the playing sound. Null until first played. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-ismuted-2" /><code>{"bool IsMuted { get; set; }"}</code> | Mutes or unmutes the ambience by setting the RTPC to 0 or back to `Volume`. |
| <Link id="m-volume-2" /><code>{"float Volume { get; set; }"}</code> | Ambience volume. Setting it updates the RTPC right away unless muted. |

## Methods

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-assignvolumeproperty" /><code>{"private void AssignVolumeProperty()"}</code> | Runs on play: creates the volume RTPC value from `AmbienceManager` if needed and adds it to the sound's properties. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Hooks `AssignVolumeProperty` to the play event. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks the play event and stops the sound. |

</details>

## Used in

Members of other types that take, return or hold a `AmbienceAudio`:

[`AtmospherePlugin.mainSource`](/game-api/types/alta-world/atmosphereplugin#m-mainsource), [`DayTimeManager.nightSource`](/game-api/types/alta-world/daytimemanager#m-nightsource), [`RiverAudio.audioSource`](/game-api/types/alta-world-generation/riveraudio#m-audiosource).
