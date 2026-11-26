---
title: "SpawnedElement"
description: "Server: one slot of a global population in a location chunk."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# SpawnedElement

A **class** in `Root.Township`, `Alta.Populations`.

Server: one slot of a global population in a location chunk. It picks a spot, spawns the prefab when the chunk is fully loaded, and can decay after a set time.

- **Listed in** [World generation](/game-api/types/alta-world-generation)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"SpawnedElement("}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" locationChunk, "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" populationDefinition, float decayTime)"}</code> |

## Fields

<details>
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay" /><code>{"private "}<Link to="/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decay"}</code> | Timeline entry for the decay timer, or null when there is none. |
| <Link id="m-entity" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | Backing field for `Entity`. |
| <Link id="m-hasdecayed" /><code>{"private bool hasDecayed"}</code> | Set when the decay timer ended while the entity was alive. |
| <Link id="m-hasraycasted" /><code>{"private bool hasRaycasted"}</code> | Whether the spawn position and rotation were already picked. They're reused on later respawns. |
| <Link id="m-locationchunk" /><code>{"private "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" locationChunk"}</code> | Backing field for `LocationChunk`. |
| <Link id="m-populationdefinition" /><code>{"private "}<Link to="/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" populationDefinition"}</code> | The global population definition that owns this slot. |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | Picked spawn position. |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | Prefab spawned for this slot. |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | Picked spawn rotation: random yaw, aligned to the ground normal unless on A*. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | The spawned entity, or null when it isn't spawned (chunk not loaded, or it was destroyed). |
| <Link id="m-locationchunk-2" /><code><Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" "}<Link to="/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" { get; }"}</code> | The location chunk this slot belongs to. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | Spawns now if the chunk is fully loaded, and again each time it fully loads. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay-2" /><code>{"private void Decay()"}</code> | Runs when the decay timer ends. Removes the slot now if nothing is spawned, else marks it to go when the entity next unloads or dies. |
| <Link id="m-destroy" /><code>{"private void Destroy()"}</code> | Cancels the decay timer, removes the slot from its population definition and unhooks from the chunk. |
| <Link id="m-entitydestroyed" /><code>{"private void EntityDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | When the entity goes, ends the slot unless it was only a chunk unload of an undecayed slot. Clears `entity` either way. |
| <Link id="m-spawnelement" /><code>{"private void SpawnElement("}<Link to="/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | Finds a spot the first time (raycast, or nearest A* node), then spawns the prefab there with save mode set to ignore. |

</details>

## Used in

Members of other types that take, return or hold a `SpawnedElement`:

[`ElementDestroy.BeginInvoke`](/game-api/types/alta-world-generation/elementdestroy#m-begininvoke), [`ElementDestroy.Invoke`](/game-api/types/alta-world-generation/elementdestroy#m-invoke), [`GlobalPopulationDefinition.CleanElement`](/game-api/types/alta-world-generation/globalpopulationdefinition#m-cleanelement), [`GlobalPopulationDefinition.spawned`](/game-api/types/alta-world-generation/globalpopulationdefinition#m-spawned).
