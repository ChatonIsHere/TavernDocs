---
title: "ReturnToMainMenuAction"
description: "Quick access action that spawns an orb in front of the player; letting go of it in the right way leaves the game for the main menu."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReturnToMainMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

Quick access action that spawns an orb in front of the player; letting go of it in the right way leaves the game for the main menu. Client only.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"ReturnToMainMenuAction()"}</code> |

## Fields

<details>
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyph" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeGlyph"}</code> | The pooled glyph shown with the orb. |
| <Link id="m-activeorb" /><code>{"private "}<Link to="/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" activeOrb"}</code> | The `ActionOrb` component of the spawned orb. |
| <Link id="m-activeorbobject" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOrbObject"}</code> | The pooled orb object, null when none is out. |
| <Link id="m-distancefromplayer" /><code>{"private float distanceFromPlayer"}</code> | How far in front of the head the orb appears. |
| <Link id="m-glyphdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" glyphDefinition"}</code> | Pool definition for the glyph. |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> | Cached validity from the last state check. |
| <Link id="m-maxdistancefromplayersquared" /><code>{"private float maxDistanceFromPlayerSquared"}</code> | Squared distance after which the orb is removed (9, so 3 m). |
| <Link id="m-orbprefabdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" orbPrefabDefinition"}</code> | Pool definition for the orb. |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> | Where the orb was placed. |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | Handle for the registered distance check. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | True while the orb is out. |
| <Link id="m-isvalid-2" /><code>{"override bool IsValid { get; }"}</code> | True in the playing, equipment, spirit or customization states. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close()"}</code> | Stops watching player state changes unless an orb is out. |
| <Link id="m-open" /><code>{"override void Open()"}</code> | Watches player state changes and works out whether the action is valid. |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | Spawns the orb and glyph in front of the player's head, or clears them if already out. |

<details>
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearorb" /><code>{"private void ClearOrb()"}</code> | Removes the orb and glyph, unhooks the death and distance checks and refreshes the bubble. |
| <Link id="m-letgovalid" /><code>{"private async void LetGoValid()"}</code> | Handler for the orb's valid let go: clears the orb and stops the current game mode to return to the menu. |
| <Link id="m-playerdied" /><code>{"private void PlayerDied("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" obj)"}</code> | Clears the orb when the player is killed. |
| <Link id="m-shouldbevalid" /><code>{"private bool ShouldBeValid()"}</code> | True if the player state is playing, equipment, spirit or customization. |
| <Link id="m-shouldbevalid-2" /><code>{"private bool ShouldBeValid("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | True if the player state is playing, equipment, spirit or customization. |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> | Budgeted update: clears the orb if the player moves too far from it. |
| <Link id="m-updatestate" /><code>{"private void UpdateState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | On a state change, updates validity and clears the orb if validity changed. |

</details>
