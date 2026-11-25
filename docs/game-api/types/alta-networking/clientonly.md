---
title: "ClientOnly"
description: "Alta.Networking.ClientOnly is a component that lists behaviours to switch off on a real server (renderers, audio, effects) and on everywhere else."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ClientOnly

A **class** in `Root.Township`, `Alta.Networking`.

`Alta.Networking.ClientOnly` is a component that lists behaviours to switch off on a real server (renderers, audio, effects) and on everywhere else. It runs in `Awake`.

- **Listed in** [Networking and servers](/game-api/types/alta-networking)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererPostBake`](/game-api/types/assembly-other/ibuildrendererpostbake), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)
- **Documented in** [Entity sync](/game-api/networking/entity-sync#clientonly)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ClientOnly()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-behaviours" /><code>{"private Behaviour[] behaviours"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-postbake" /><code>{"private void IBuildRendererPostBake.PostBake()"}</code> |  |
