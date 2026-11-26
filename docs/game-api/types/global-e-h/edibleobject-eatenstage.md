---
title: "EdibleObject.EatenStage"
description: "Bite settings for an EdibleObject: how many bites, how long each takes and the effect each bite plays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EdibleObject.EatenStage

A **class** in `Root.Township`, no namespace.

Bite settings for an `EdibleObject`: how many bites, how long each takes and the effect each bite plays.

- **Listed in** [No namespace: E to H](/game-api/types/global-e-h)
- **Nested in** [`EdibleObject`](/game-api/types/global-e-h/edibleobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EatenStage()"}</code> | Creates an `EdibleObject.EatenStage` with default values. |

## Fields

<details>
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biteduration" /><code>{"private float biteDuration"}</code> | Backing field for `BiteDuration`. |
| <Link id="m-biteeffect" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" biteEffect"}</code> | Backing field for `BiteEffect`. |
| <Link id="m-numberofbites" /><code>{"private int numberOfBites"}</code> | Backing field for `NumberOfBites`. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biteduration-2" /><code>{"float BiteDuration { get; }"}</code> | Seconds between bites. |
| <Link id="m-biteeffect-2" /><code><Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BiteEffect { get; }"}</code> | Pooled effect spawned at the mouth on each bite (not on headless servers). |
| <Link id="m-numberofbites-2" /><code>{"int NumberOfBites { get; }"}</code> | Bites needed to finish eating. |

## Used in

Members of other types that take, return or hold a `EatenStage`:

[`EdibleObject.biteEffects`](/game-api/types/global-e-h/edibleobject#m-biteeffects).
