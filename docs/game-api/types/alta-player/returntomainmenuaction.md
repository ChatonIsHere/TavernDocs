---
title: "ReturnToMainMenuAction"
description: "class ReturnToMainMenuAction in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ReturnToMainMenuAction

A **class** in `Root.Township`, `Alta.QuickAccessActions`.

- **Listed in** [Players and characters](/game-api/types/alta-player)
- **Inherits or implements** [`QuickAccessMenuAction`](/game-api/types/alta-player/quickaccessmenuaction)
- **Attributes** `CreateAssetMenu`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ReturnToMainMenuAction()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activeglyph" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeGlyph"}</code> |  |
| <Link id="m-activeorb" /><code>{"private "}<Link to="/game-api/types/global-a-b/actionorb">{"ActionOrb"}</Link>{" activeOrb"}</code> |  |
| <Link id="m-activeorbobject" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" activeOrbObject"}</code> |  |
| <Link id="m-distancefromplayer" /><code>{"private float distanceFromPlayer"}</code> |  |
| <Link id="m-glyphdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" glyphDefinition"}</code> |  |
| <Link id="m-isvalid" /><code>{"private bool isValid"}</code> |  |
| <Link id="m-maxdistancefromplayersquared" /><code>{"private float maxDistanceFromPlayerSquared"}</code> |  |
| <Link id="m-orbprefabdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" orbPrefabDefinition"}</code> |  |
| <Link id="m-targetposition" /><code>{"private Vector3 targetPosition"}</code> |  |
| <Link id="m-updatedistance" /><code>{"private "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-isactive" /><code>{"override bool IsActive { get; }"}</code> |  |
| <Link id="m-isvalid-2" /><code>{"override bool IsValid { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-close" /><code>{"override void Close()"}</code> |  |
| <Link id="m-open" /><code>{"override void Open()"}</code> |  |
| <Link id="m-run" /><code>{"override void Run("}<Link to="/game-api/types/global-c-d/controller">{"Controller"}</Link>{" controller)"}</code> |  |
| <Link id="m-clearorb" /><code>{"private void ClearOrb()"}</code> |  |
| <Link id="m-letgovalid" /><code>{"private async void LetGoValid()"}</code> |  |
| <Link id="m-playerdied" /><code>{"private void PlayerDied("}<Link to="/game-api/types/alta-items/damagedata">{"DamageData"}</Link>{" obj)"}</code> |  |
| <Link id="m-shouldbevalid" /><code>{"private bool ShouldBeValid()"}</code> |  |
| <Link id="m-shouldbevalid-2" /><code>{"private bool ShouldBeValid("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
| <Link id="m-updatedistance-2" /><code>{"private void UpdateDistance()"}</code> |  |
| <Link id="m-updatestate" /><code>{"private void UpdateState("}<Link to="/game-api/types/alta-player/iplayerstate">{"IPlayerState"}</Link>{" playerState)"}</code> |  |
