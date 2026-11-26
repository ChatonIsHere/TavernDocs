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

- **Listed in** [Players and characters](/mod/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/mod/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReturnToMainMenuAction()"}</code> | <span className="api-desc">Use `ScriptableObject.CreateInstance` instead of `new`; Unity loads the saved ones from assets.</span> |

## Fields

<details className="api-private">
<summary>10 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyph" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeGlyph"}</code> | <span className="api-desc">The pooled glyph shown with the orb.</span> |
| <Link id="m-activeorb" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" activeOrb"}</code> | <span className="api-desc">The `ActionOrb` component of the spawned orb.</span> |
| <Link id="m-activeorbobject" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOrbObject"}</code> | <span className="api-desc">The pooled orb object, null when none is out.</span> |
| <Link id="m-distancefromplayer" /><code>{"private float distanceFromPlayer"}</code> | <span className="api-desc">How far in front of the head the orb appears.</span> |
| <Link id="m-glyphdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" glyphDefinition"}</code> | <span className="api-desc">Pool definition for the glyph.</span> |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> | <span className="api-desc">Cached validity from the last state check.</span> |
| <Link id="m-maxdistancefromplayersquared" /><code>{"private float maxDistanceFromPlayerSquared"}</code> | <span className="api-desc">Squared distance after which the orb is removed (9, so 3 m).</span> |
| <Link id="m-orbprefabdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" orbPrefabDefinition"}</code> | <span className="api-desc">Pool definition for the orb.</span> |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> | <span className="api-desc">Where the orb was placed.</span> |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | <span className="api-desc">Handle for the registered distance check.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> | <span className="api-desc">True while the orb is out.</span> |
| <Link id="m-isvalid-2" /><code>{"override bool IsValid { get; }"}</code> | <span className="api-desc">True in the playing, equipment, spirit or customization states.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close()"}</code> | <span className="api-desc">Stops watching player state changes unless an orb is out.</span> |
| <Link id="m-open" /><code>{"override void Open()"}</code> | <span className="api-desc">Watches player state changes and works out whether the action is valid.</span> |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/mod/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> | <span className="api-desc">Spawns the orb and glyph in front of the player's head, or clears them if already out.</span> |

<details className="api-private">
<summary>7 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-clearorb" /><code>{"private void ClearOrb()"}</code> | <span className="api-desc">Removes the orb and glyph, unhooks the death and distance checks and refreshes the bubble.</span> |
| <Link id="m-letgovalid" /><code>{"private async void LetGoValid()"}</code> | <span className="api-desc">Handler for the orb's valid let go: clears the orb and stops the current game mode to return to the menu.</span> |
| <Link id="m-playerdied" /><code>{"private void PlayerDied("}<Link to="/mod/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" obj)"}</code> | <span className="api-desc">Clears the orb when the player is killed.</span> |
| <Link id="m-shouldbevalid" /><code>{"private bool ShouldBeValid()"}</code> | <span className="api-desc">True if the player state is playing, equipment, spirit or customization.</span> |
| <Link id="m-shouldbevalid-2" /><code>{"private bool ShouldBeValid("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">True if the player state is playing, equipment, spirit or customization.</span> |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> | <span className="api-desc">Budgeted update: clears the orb if the player moves too far from it.</span> |
| <Link id="m-updatestate" /><code>{"private void UpdateState("}<Link to="/mod/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> | <span className="api-desc">On a state change, updates validity and clears the orb if validity changed.</span> |

</details>
