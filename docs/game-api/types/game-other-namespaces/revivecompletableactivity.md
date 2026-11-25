---
title: "ReviveCompletableActivity"
description: "class ReviveCompletableActivity in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReviveCompletableActivity

A **class** in `Root.Township`, `Township.Downed`.

- **Listed in** [ATT, Features and other game namespaces](/game-api/types/game-other-namespaces)
- **Inherits or implements** [`ICompletableActivity`](/game-api/types/game-other-namespaces/icompletableactivity)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReviveCompletableActivity("}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter, "}<Link to="/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings, Vector3 spawnPosition)"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-anglebetweenorbs" /><code>{"private float angleBetweenOrbs"}</code> |  |
| <Link id="m-consumedorbidentifiers" /><code>{"private HashSet<uint> consumedOrbIdentifiers"}</code> |  |
| <Link id="m-inprogress" /><code>{"private bool inProgress"}</code> |  |
| <Link id="m-orbpositionmodifiers" /><code>{"private List<"}<Link to="/game-api/types/game-other-namespaces/reviveorbmovementmodifier">{"ReviveOrbMovementModifier"}</Link>{"> orbPositionModifiers"}</code> |  |
| <Link id="m-playercharacter" /><code>{"private "}<Link to="/game-api/types/alta-player/playercharacter">{"PlayerCharacter"}</Link>{" playerCharacter"}</code> |  |
| <Link id="m-rotatorobject" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" rotatorObject"}</code> |  |
| <Link id="m-settings" /><code>{"private "}<Link to="/game-api/types/game-other-namespaces/downedstatesettings">{"DownedStateSettings"}</Link>{" settings"}</code> |  |
| <Link id="m-spawnedorbs" /><code>{"private readonly List<"}<Link to="/game-api/types/game-other-namespaces/eventorb">{"EventOrb"}</Link>{"> spawnedOrbs"}</code> |  |
| <Link id="m-spawnposition" /><code>{"private Vector3 spawnPosition"}</code> |  |
| <Link id="m-targetprogress" /><code>{"private const float TargetProgress"}</code> |  |
| <Link id="m-totalprogress" /><code>{"private float totalProgress"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-anglebetweenorbs-2" /><code>{"private float AngleBetweenOrbs { get; }"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-completed" /><code>{"event Action Completed"}</code> |  |
| <Link id="m-timeincreased" /><code>{"event Action<float> TimeIncreased"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addprogress" /><code>{"void AddProgress(float progress)"}</code> |  |
| <Link id="m-cancel" /><code>{"void Cancel()"}</code> |  |
| <Link id="m-destroyreviveactivityobjects" /><code>{"void DestroyReviveActivityObjects()"}</code> |  |
| <Link id="m-makeorbreachablefordownedplayer" /><code>{"void MakeOrbReachableForDownedPlayer("}<Link to="/game-api/types/game-other-namespaces/reviveorb">{"ReviveOrb"}</Link>{" orb)"}</code> |  |
| <Link id="m-restart" /><code>{"void Restart()"}</code> |  |
| <Link id="m-tryconsumeorb" /><code>{"bool TryConsumeOrb(uint orbId)"}</code> |  |
| <Link id="m-calculateallorbpositions" /><code>{"private Vector3[] CalculateAllOrbPositions(float orbDistanceFromCentre)"}</code> |  |
| <Link id="m-calculateorbposition" /><code>{"private Vector3 CalculateOrbPosition(int orbIndex, float distanceFromCentre)"}</code> |  |
| <Link id="m-createrotatorandorbs" /><code>{"private void CreateRotatorAndOrbs()"}</code> |  |
| <Link id="m-increasetimeforactivity" /><code>{"private void IncreaseTimeForActivity()"}</code> |  |
| <Link id="m-reset" /><code>{"private void Reset()"}</code> |  |
| <Link id="m-safedestroyreviveorbs" /><code>{"private void SafeDestroyReviveOrbs()"}</code> |  |
| <Link id="m-spawnreviveorb" /><code>{"private void SpawnReviveOrb(Transform spawnTransform)"}</code> |  |
| <Link id="m-startactivity" /><code>{"private async void StartActivity()"}</code> |  |

## Used in

Members of other types that take, return or hold a `ReviveCompletableActivity`:

[`DownedState.activity`](/game-api/types/alta-player/downedstate#m-activity), [`ReviveOrb.activity`](/game-api/types/game-other-namespaces/reviveorb#m-activity), [`ReviveOrb.LinkReviveActionToActivity`](/game-api/types/game-other-namespaces/reviveorb#m-linkreviveactiontoactivity).
