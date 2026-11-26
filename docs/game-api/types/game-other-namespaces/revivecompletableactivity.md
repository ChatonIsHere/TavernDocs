---
title: "ReviveCompletableActivity"
description: "The revive minigame for a downed player: spawns a rotating ring of revive orbs around the grave and counts progress as orbs are consumed."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReviveCompletableActivity

A **class** in `Root.Township`, `Township.Downed`.

The revive minigame for a downed player: spawns a rotating ring of revive orbs around the grave and counts progress as orbs are consumed. Created by `DownedState` on the server.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ICompletableActivity`](/game-api/types/game-other-namespaces/icompletableactivity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReviveCompletableActivity("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, "}<Link to="/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings, Vector3 spawnPosition)"}</code> | Creates a `ReviveCompletableActivity` from `playerCharacter`, `settings` and `spawnPosition`. |

## Fields

<details>
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglebetweenorbs" /><code>{"private float angleBetweenOrbs"}</code> | Cached angle between orbs. Never set in this build, so the computed value is used. |
| <Link id="m-consumedorbidentifiers" /><code>{"private HashSet<uint> consumedOrbIdentifiers"}</code> | Ids of orbs that have already counted. |
| <Link id="m-inprogress" /><code>{"private bool inProgress"}</code> | True while progress is being counted. |
| <Link id="m-orbpositionmodifiers" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/reviveorbmovementmodifier">{"ReviveOrbMovementModifier"}</Link>{"> orbPositionModifiers"}</code> | Movement modifiers on each orb anchor, in the same order as `spawnedOrbs`. |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> | The downed player's character. |
| <Link id="m-rotatorobject" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" rotatorObject"}</code> | The spawned entity that spins the orb anchors. |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings"}</code> | Downed state settings: orb count, distances, heights, speeds and time per orb. |
| <Link id="m-spawnedorbs" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/eventorb">{"EventOrb"}</Link>{"> spawnedOrbs"}</code> | The revive orbs spawned for this activity. |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | Centre of the ring, usually the grave. |
| <Link id="m-targetprogress" /><code>{"private const float TargetProgress"}</code> | Progress needed to finish (1). |
| <Link id="m-totalprogress" /><code>{"private float totalProgress"}</code> | Progress so far, from 0 to 1. |

</details>

## Properties

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglebetweenorbs-2" /><code>{"private float AngleBetweenOrbs { get; }"}</code> | Angle between orbs in the ring: 360 divided by the number of orbs from the settings. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completed" /><code>{"event Action Completed"}</code> | Raised when total progress reaches 1. |
| <Link id="m-timeincreased" /><code>{"event Action<float> TimeIncreased"}</code> | Raised with seconds to add to the revive timer each time progress is added. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addprogress" /><code>{"void AddProgress(float progress)"}</code> | Adds progress while the activity runs, adds time to the revive timer, and raises `Completed` once progress reaches 1. |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | Stops counting progress. Spawned orbs stay. |
| <Link id="m-destroyreviveactivityobjects" /><code>{"void DestroyReviveActivityObjects()"}</code> | Server: destroys the spawned orbs and the rotator. |
| <Link id="m-makeorbreachablefordownedplayer" /><code>{"void MakeOrbReachableForDownedPlayer("}<Link to="/game-api/types/game-other-namespaces/reviveorb">{"ReviveOrb"}</Link>{" orb)"}</code> | Moves an orb's anchor in to the downed-player distance and snaps the orb there. Called when an orb is put in a beacon. |
| <Link id="m-restart" /><code>{"void Restart()"}</code> | Resets, then spawns a new ring and starts again. |
| <Link id="m-tryconsumeorb" /><code>{"bool TryConsumeOrb(uint orbId)"}</code> | Records an orb id as consumed. False if it was already used, so each orb counts once. |

<details>
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateallorbpositions" /><code>{"private Vector3[] CalculateAllOrbPositions(float orbDistanceFromCentre)"}</code> | Local positions for every orb, evenly spaced on a circle of the given radius. |
| <Link id="m-calculateorbposition" /><code>{"private Vector3 CalculateOrbPosition(int orbIndex, float distanceFromCentre)"}</code> | Local position of one orb on the circle by index. |
| <Link id="m-createrotatorandorbs" /><code>{"private void CreateRotatorAndOrbs()"}</code> | Spawns the rotating object above the spawn position and one revive orb per anchor around it. |
| <Link id="m-increasetimeforactivity" /><code>{"private void IncreaseTimeForActivity()"}</code> | Raises `TimeIncreased` with the seconds the settings add per orb. |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | Clears progress and destroys the activity objects. |
| <Link id="m-safedestroyreviveorbs" /><code>{"private void SafeDestroyReviveOrbs()"}</code> | Reparents each live orb to the player's chunk and destroys it after a delay. |
| <Link id="m-spawnreviveorb" /><code>{"private void SpawnReviveOrb(Transform spawnTransform)"}</code> | Spawns a revive orb in the chunk at the player's feet, links it to this activity and sets it to follow an anchor. |
| <Link id="m-startactivity" /><code>{"private async void StartActivity()"}</code> | Spawns the rotator and orbs and marks the activity as in progress. |

</details>

## Used in

Members of other types that take, return or hold a `ReviveCompletableActivity`:

[`DownedState.activity`](/game-api/types/alta-player/downedstate#m-activity), [`ReviveOrb.activity`](/game-api/types/game-other-namespaces/reviveorb#m-activity), [`ReviveOrb.LinkReviveActionToActivity`](/game-api/types/game-other-namespaces/reviveorb#m-linkreviveactiontoactivity).
