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

- **Listed in** [World generation](/mod/game-api/types/alta-world-generation)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"SpawnedElement("}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" locationChunk, "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab, "}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" populationDefinition, float decayTime)"}</code> | <span className="api-desc">Creates a `SpawnedElement` from `locationChunk`, `prefab`, `populationDefinition` and `decayTime`.</span> |

## Fields

<details className="api-private">
<summary>9 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/timeline-ientry">{"Timeline.IEntry"}</Link>{" decay"}</code> | <span className="api-desc">Timeline entry for the decay timer, or null when there is none.</span> |
| <Link id="m-entity" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity"}</code> | <span className="api-desc">Backing field for `Entity`.</span> |
| <Link id="m-hasdecayed" /><code>{"private bool hasDecayed"}</code> | <span className="api-desc">Set when the decay timer ended while the entity was alive.</span> |
| <Link id="m-hasraycasted" /><code>{"private bool hasRaycasted"}</code> | <span className="api-desc">Whether the spawn position and rotation were already picked. They're reused on later respawns.</span> |
| <Link id="m-locationchunk" /><code>{"private "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" locationChunk"}</code> | <span className="api-desc">Backing field for `LocationChunk`.</span> |
| <Link id="m-populationdefinition" /><code>{"private "}<Link to="/mod/game-api/types/alta-world-generation/globalpopulationdefinition">{"GlobalPopulationDefinition"}</Link>{" populationDefinition"}</code> | <span className="api-desc">The global population definition that owns this slot.</span> |
| <Link id="m-position" /><code>{"private Vector3 position"}</code> | <span className="api-desc">Picked spawn position.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">Prefab spawned for this slot.</span> |
| <Link id="m-rotation" /><code>{"private Quaternion rotation"}</code> | <span className="api-desc">Picked spawn rotation: random yaw, aligned to the ground normal unless on A*.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-entity-2" /><code><Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" Entity { get; }"}</code> | <span className="api-desc">The spawned entity, or null when it isn't spawned (chunk not loaded, or it was destroyed).</span> |
| <Link id="m-locationchunk-2" /><code><Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" "}<Link to="/mod/game-api/types/alta-world/locationchunk">{"LocationChunk"}</Link>{" { get; }"}</code> | <span className="api-desc">The location chunk this slot belongs to.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-initialize" /><code>{"void Initialize()"}</code> | <span className="api-desc">Spawns now if the chunk is fully loaded, and again each time it fully loads.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-decay-2" /><code>{"private void Decay()"}</code> | <span className="api-desc">Runs when the decay timer ends. Removes the slot now if nothing is spawned, else marks it to go when the entity next unloads or dies.</span> |
| <Link id="m-destroy" /><code>{"private void Destroy()"}</code> | <span className="api-desc">Cancels the decay timer, removes the slot from its population definition and unhooks from the chunk.</span> |
| <Link id="m-entitydestroyed" /><code>{"private void EntityDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">When the entity goes, ends the slot unless it was only a chunk unload of an undecayed slot. Clears `entity` either way.</span> |
| <Link id="m-spawnelement" /><code>{"private void SpawnElement("}<Link to="/mod/game-api/types/alta-world/chunk">{"Chunk"}</Link>{" chunk)"}</code> | <span className="api-desc">Finds a spot the first time (raycast, or nearest A* node), then spawns the prefab there with save mode set to ignore.</span> |

</details>

## Used in

Members of other types that take, return or hold a `SpawnedElement`:

<div className="api-used-in">

[`ElementDestroy.BeginInvoke`](/mod/game-api/types/alta-world-generation/elementdestroy#m-begininvoke), [`ElementDestroy.Invoke`](/mod/game-api/types/alta-world-generation/elementdestroy#m-invoke), [`GlobalPopulationDefinition.CleanElement`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition#m-cleanelement), [`GlobalPopulationDefinition.spawned`](/mod/game-api/types/alta-world-generation/globalpopulationdefinition#m-spawned).

</div>
