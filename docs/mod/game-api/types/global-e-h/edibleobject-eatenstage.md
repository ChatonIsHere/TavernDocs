---
title: "EdibleObject.EatenStage"
description: "Bite settings for an EdibleObject: how many bites, how long each takes and the effect each bite plays."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# EdibleObject.EatenStage

A **class** in `Root.Township`, the global namespace.

Bite settings for an `EdibleObject`: how many bites, how long each takes and the effect each bite plays.

- **Listed in** [Global namespace: E to H](/mod/game-api/types/global-e-h)
- **Nested in** [`EdibleObject`](/mod/game-api/types/global-e-h/edibleobject)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"EatenStage()"}</code> | <span className="api-desc">Creates an `EdibleObject.EatenStage` with default values.</span> |

## Fields

<details className="api-private">
<summary>3 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-biteduration" /><code>{"private float biteDuration"}</code> | <span className="api-desc">Backing field for `BiteDuration`.</span> |
| <Link id="m-biteeffect" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" biteEffect"}</code> | <span className="api-desc">Backing field for `BiteEffect`.</span> |
| <Link id="m-numberofbites" /><code>{"private int numberOfBites"}</code> | <span className="api-desc">Backing field for `NumberOfBites`.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-biteduration-2" /><code>{"float BiteDuration { get; }"}</code> | <span className="api-desc">Seconds between bites.</span> |
| <Link id="m-biteeffect-2" /><code><Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" BiteEffect { get; }"}</code> | <span className="api-desc">Pooled effect spawned at the mouth on each bite (not on headless servers).</span> |
| <Link id="m-numberofbites-2" /><code>{"int NumberOfBites { get; }"}</code> | <span className="api-desc">Bites needed to finish eating.</span> |

## Used in

Members of other types that take, return or hold a `EatenStage`:

<div className="api-used-in">

[`EdibleObject.biteEffects`](/mod/game-api/types/global-e-h/edibleobject#m-biteeffects).

</div>
