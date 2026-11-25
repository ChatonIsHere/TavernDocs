---
title: "WaterfallEffectGenerator"
description: "class WaterfallEffectGenerator in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# WaterfallEffectGenerator

A **class** in `Root.Township`, `Alta.Forests`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)
- **Inherits or implements** `MonoBehaviour`, [`IRiverVisual`](/game-api/types/alta-world-generation/irivervisual)
- **Documented in** [Forest](/game-api/world/forest)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"WaterfallEffectGenerator()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-btnregenerate" /><code>{"private bool btnRegenerate"}</code> |  |
| <Link id="m-effect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" effect"}</code> |  |
| <Link id="m-heightrtpc" /><code>{"private RTPC heightRTPC"}</code> |  |
| <Link id="m-heightvolume" /><code>{"private AnimationCurve heightVolume"}</code> |  |
| <Link id="m-pooled" /><code>{"private Dictionary<"}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{", "}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{"> pooled"}</code> |  |
| <Link id="m-river" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/rivergenerator">{"RiverGenerator"}</Link>{" river"}</code> |  |
| <Link id="m-sizertpc" /><code>{"private RTPC sizeRTPC"}</code> |  |
| <Link id="m-sizevolume" /><code>{"private AnimationCurve sizeVolume"}</code> |  |
| <Link id="m-soundeffect" /><code>{"private "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" soundEffect"}</code> |  |
| <Link id="m-sounds" /><code>{"private List<"}<Link to="/game-api/types/global-a-b/audiocontrol">{"AudioControl"}</Link>{"> sounds"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-generate" /><code>{"void Generate("}<Link to="/game-api/types/alta-world-generation/rivergeneration">{"RiverGeneration"}</Link>{" generation)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
