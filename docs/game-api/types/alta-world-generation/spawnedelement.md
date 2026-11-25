---
title: "SpawnedElement"
description: "class SpawnedElement in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnedElement

A **class** in `Root.Township`, `Alta.Populations`.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnedElement("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" locationChunk, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" populationDefinition, float decayTime)"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member |
| --- |
| <Link id="m-decay" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decay"}</code> |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> |
| <Link id="m-hasdecayed" /><code>{"private bool hasDecayed"}</code> |
| <Link id="m-hasraycasted" /><code>{"private bool hasRaycasted"}</code> |
| <Link id="m-locationchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" locationChunk"}</code> |
| <Link id="m-populationdefinition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" populationDefinition"}</code> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> |

</details>

## Properties

| Member |
| --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> |
| <Link id="m-locationchunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" { get; }"}</code> |

## Methods

| Member |
| --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> |

<details>
<summary>4 private and internal methods</summary>

| Member |
| --- |
| <Link id="m-decay-2" /><code>{"private void Decay()"}</code> |
| <Link id="m-destroy" /><code>{"private void Destroy()"}</code> |
| <Link id="m-entitydestroyed" /><code>{"private void EntityDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |
| <Link id="m-spawnelement" /><code>{"private void SpawnElement("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> |

</details>

## Used in

Members of other types that take, return or hold a `SpawnedElement`:

[`ElementDestroy.BeginInvoke`](/game-api/types/alta-world-generation/elementdestroy#m-begininvoke), [`ElementDestroy.Invoke`](/game-api/types/alta-world-generation/elementdestroy#m-invoke), [`GlobalPopulationDefinition.CleanElement`](/game-api/types/alta-world-generation/globalpopulationdefinition#m-cleanelement), [`GlobalPopulationDefinition.spawned`](/game-api/types/alta-world-generation/globalpopulationdefinition#m-spawned).
