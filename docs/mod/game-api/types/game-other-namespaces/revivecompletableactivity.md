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

- **Listed in** [ATT, Features and other game namespaces](/mod/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ICompletableActivity`](/mod/game-api/types/game-other-namespaces/icompletableactivity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReviveCompletableActivity("}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings, Vector3 spawnPosition)"}</code> | <span className="api-desc">Creates a `ReviveCompletableActivity` from `playerCharacter`, `settings` and `spawnPosition`.</span> |

## Fields

<details className="api-private">
<summary>11 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglebetweenorbs" /><code>{"private float angleBetweenOrbs"}</code> | <span className="api-desc">Cached angle between orbs. Never set in this build, so the computed value is used.</span> |
| <Link id="m-consumedorbidentifiers" /><code>{"private HashSet<uint> consumedOrbIdentifiers"}</code> | <span className="api-desc">Ids of orbs that have already counted.</span> |
| <Link id="m-inprogress" /><code>{"private bool inProgress"}</code> | <span className="api-desc">True while progress is being counted.</span> |
| <Link id="m-orbpositionmodifiers" /><code>{"private List<"}<Link to="/mod/game-api/types/game-other-namespaces/reviveorbmovementmodifier">{"ReviveOrbMovementModifier"}</Link>{"> orbPositionModifiers"}</code> | <span className="api-desc">Movement modifiers on each orb anchor, in the same order as `spawnedOrbs`.</span> |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/mod/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> | <span className="api-desc">The downed player's character.</span> |
| <Link id="m-rotatorobject" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" rotatorObject"}</code> | <span className="api-desc">The spawned entity that spins the orb anchors.</span> |
| <Link id="m-settings" /><code>{"private "}<Link to="/mod/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings"}</code> | <span className="api-desc">Downed state settings: orb count, distances, heights, speeds and time per orb.</span> |
| <Link id="m-spawnedorbs" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/game-other-namespaces/eventorb">{"EventOrb"}</Link>{"> spawnedOrbs"}</code> | <span className="api-desc">The revive orbs spawned for this activity.</span> |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> | <span className="api-desc">Centre of the ring, usually the grave.</span> |
| <Link id="m-targetprogress" /><code>{"private const float TargetProgress"}</code> | <span className="api-desc">Progress needed to finish (1).</span> |
| <Link id="m-totalprogress" /><code>{"private float totalProgress"}</code> | <span className="api-desc">Progress so far, from 0 to 1.</span> |

</details>

## Properties

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-anglebetweenorbs-2" /><code>{"private float AngleBetweenOrbs { get; }"}</code> | <span className="api-desc">Angle between orbs in the ring: 360 divided by the number of orbs from the settings.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completed" /><code>{"event Action Completed"}</code> | <span className="api-desc">Raised when total progress reaches 1.</span> |
| <Link id="m-timeincreased" /><code>{"event Action<float> TimeIncreased"}</code> | <span className="api-desc">Raised with seconds to add to the revive timer each time progress is added.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addprogress" /><code>{"void AddProgress(float progress)"}</code> | <span className="api-desc">Adds progress while the activity runs, adds time to the revive timer, and raises `Completed` once progress reaches 1.</span> |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> | <span className="api-desc">Stops counting progress. Spawned orbs stay.</span> |
| <Link id="m-destroyreviveactivityobjects" /><code>{"void DestroyReviveActivityObjects()"}</code> | <span className="api-desc">Server: destroys the spawned orbs and the rotator.</span> |
| <Link id="m-makeorbreachablefordownedplayer" /><code>{"void MakeOrbReachableForDownedPlayer("}<Link to="/mod/game-api/types/game-other-namespaces/reviveorb">{"ReviveOrb"}</Link>{" orb)"}</code> | <span className="api-desc">Moves an orb's anchor in to the downed-player distance and snaps the orb there. Called when an orb is put in a beacon.</span> |
| <Link id="m-restart" /><code>{"void Restart()"}</code> | <span className="api-desc">Resets, then spawns a new ring and starts again.</span> |
| <Link id="m-tryconsumeorb" /><code>{"bool TryConsumeOrb(uint orbId)"}</code> | <span className="api-desc">Records an orb id as consumed. False if it was already used, so each orb counts once.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-calculateallorbpositions" /><code>{"private Vector3[] CalculateAllOrbPositions(float orbDistanceFromCentre)"}</code> | <span className="api-desc">Local positions for every orb, evenly spaced on a circle of the given radius.</span> |
| <Link id="m-calculateorbposition" /><code>{"private Vector3 CalculateOrbPosition(int orbIndex, float distanceFromCentre)"}</code> | <span className="api-desc">Local position of one orb on the circle by index.</span> |
| <Link id="m-createrotatorandorbs" /><code>{"private void CreateRotatorAndOrbs()"}</code> | <span className="api-desc">Spawns the rotating object above the spawn position and one revive orb per anchor around it.</span> |
| <Link id="m-increasetimeforactivity" /><code>{"private void IncreaseTimeForActivity()"}</code> | <span className="api-desc">Raises `TimeIncreased` with the seconds the settings add per orb.</span> |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> | <span className="api-desc">Clears progress and destroys the activity objects.</span> |
| <Link id="m-safedestroyreviveorbs" /><code>{"private void SafeDestroyReviveOrbs()"}</code> | <span className="api-desc">Reparents each live orb to the player's chunk and destroys it after a delay.</span> |
| <Link id="m-spawnreviveorb" /><code>{"private void SpawnReviveOrb(Transform spawnTransform)"}</code> | <span className="api-desc">Spawns a revive orb in the chunk at the player's feet, links it to this activity and sets it to follow an anchor.</span> |
| <Link id="m-startactivity" /><code>{"private async void StartActivity()"}</code> | <span className="api-desc">Spawns the rotator and orbs and marks the activity as in progress.</span> |

</details>

## Used in

Members of other types that take, return or hold a `ReviveCompletableActivity`:

<div className="api-used-in">

[`DownedState.activity`](/mod/game-api/types/alta-player/downedstate#m-activity), [`ReviveOrb.activity`](/mod/game-api/types/game-other-namespaces/reviveorb#m-activity), [`ReviveOrb.LinkReviveActionToActivity`](/mod/game-api/types/game-other-namespaces/reviveorb#m-linkreviveactiontoactivity).

</div>
