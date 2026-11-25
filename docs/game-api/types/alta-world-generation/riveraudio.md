---
title: "RiverAudio"
description: "class RiverAudio in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# RiverAudio

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"RiverAudio()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-mindistance" /><code>{"float minDistance"}</code> |  |
| <Link id="m-audiosource" /><code>{"private "}<Link to="/game-api/types/global-a-b/ambienceaudio">{"AmbienceAudio"}</Link>{" audioSource"}</code> |  |
| <Link id="m-lastpath" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/riverpath">{"RiverPath"}</Link>{" lastPath"}</code> |  |
| <Link id="m-maxsize" /><code>{"private float maxSize"}</code> |  |
| <Link id="m-movespeed" /><code>{"private float moveSpeed"}</code> |  |
| <Link id="m-player" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player"}</code> |  |
| <Link id="m-river" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> |  |
| <Link id="m-rolloffcurve" /><code>{"private AnimationCurve rolloffCurve"}</code> |  |
| <Link id="m-rolloffscale" /><code>{"private float rolloffScale"}</code> |  |
| <Link id="m-volumespeed" /><code>{"private float volumeSpeed"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-disable" /><code>{"private void Disable("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-falloff" /><code>{"private float Falloff(float input)"}</code> |  |
| <Link id="m-localplayerset" /><code>{"private void LocalPlayerSet("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-update" /><code>{"private void Update()"}</code> |  |
