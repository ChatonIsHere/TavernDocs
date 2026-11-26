---
title: "DockVisual"
description: "The bubble and item count label on a pickup dock."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockVisual

A **class** in `Root.Township`, `Alta.Inventory`.

The bubble and item count label on a pickup dock. Switches materials by distance to the local player's head, pulses while hovered, and can hide from the hand camera. Client only; does nothing on a headless server.

- **Listed in** [Items, inventory and logic](/mod/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/mod/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/mod/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockVisual()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activepooledvisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pooleddockvisual">{"PooledDockVisual"}</Link>{" activePooledVisual"}</code> | <span className="api-desc">Pooled visual in use. Not set anywhere in this build.</span> |
| <Link id="m-coloredmeshes" /><code>{"private static Dictionary<int, Mesh> coloredMeshes"}</code> | <span className="api-desc">Static cache of coloured meshes. Not used in this build.</span> |
| <Link id="m-countlabel3d" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" countLabel3D"}</code> | <span className="api-desc">3D text showing how many items the dock holds.</span> |
| <Link id="m-distant" /><code>{"private int distant"}</code> | <span className="api-desc">Backing field for `Distant`: frames to skip before this visual is evaluated again, so far docks update less often.</span> |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | <span className="api-desc">Backing field for `Dock`, the `PickupDock` in a parent.</span> |
| <Link id="m-dockbubble" /><code>{"private MeshRenderer dockBubble"}</code> | <span className="api-desc">Backing field for `DockBubble`, the bubble mesh shown at the dock.</span> |
| <Link id="m-hasnearbyscaler" /><code>{"private bool hasNearbyScaler"}</code> | <span className="api-desc">True when a `NearbyPlayerScaler` was found in a parent.</span> |
| <Link id="m-ispulsing" /><code>{"private bool isPulsing"}</code> | <span className="api-desc">True while the bubble pulses for a hover.</span> |
| <Link id="m-nearbyscaler" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/nearbyplayerscaler">{"NearbyPlayerScaler"}</Link>{" nearbyScaler"}</code> | <span className="api-desc">Scaler in a parent that grows the dock near the player; enabled only while the player is near.</span> |
| <Link id="m-pooleddockvisualdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledDockVisualDefinition"}</code> | <span className="api-desc">Pool definition for dock visuals. Not read in this build.</span> |
| <Link id="m-scalepulsator" /><code>{"private "}<Link to="/mod/game-api/types/global-s/scalepulsator">{"ScalePulsator"}</Link>{" scalePulsator"}</code> | <span className="api-desc">Component that pulses the bubble's scale, added by `StartPulse`.</span> |
| <Link id="m-updatedistance" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | <span className="api-desc">Static handle for the shared `UpdateAllDistances` late update.</span> |
| <Link id="m-updatingvisuals" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"> updatingVisuals"}</code> | <span className="api-desc">Static set of all client dock visuals that `UpdateAllDistances` goes through.</span> |
| <Link id="m-validatecamerahide" /><code>{"private Func<bool> validateCameraHide"}</code> | <span className="api-desc">Check for whether to hide the bubble in hand camera photos, built in `Awake` from the screenshot hide setting.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distant-2" /><code>{"int Distant { get; set; }"}</code> | <span className="api-desc">Distance bucket used to throttle updates: -1 when near, otherwise frames to skip before the next distance check.</span> |
| <Link id="m-dock-2" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" Dock { get; }"}</code> | <span className="api-desc">The pickup dock this visual belongs to.</span> |
| <Link id="m-dockbubble-2" /><code>{"MeshRenderer DockBubble { get; }"}</code> | <span className="api-desc">The bubble mesh renderer whose material changes with distance.</span> |
| <Link id="m-needstogetfrompool" /><code>{"bool NeedsToGetFromPool { get; private set; }"}</code> | <span className="api-desc">Pooled visual flag. Nothing in this build sets it.</span> |

<details className="api-private">
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | <span className="api-desc">Bake order for build-time renderer baking, 10.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginnearplayer" /><code>{"void BeginNearPlayer()"}</code> | <span className="api-desc">Called when the local player's head comes within range. Turns on the nearby scaler for client docks.</span> |
| <Link id="m-clearvisual" /><code>{"void ClearVisual()"}</code> | <span className="api-desc">Destroys the visual's game object.</span> |
| <Link id="m-endnearplayer" /><code>{"void EndNearPlayer()"}</code> | <span className="api-desc">Called when the local player's head leaves range. Turns off the nearby scaler.</span> |
| <Link id="m-setisscaledup" /><code>{"void SetIsScaledUp(bool isScaledUp)"}</code> | <span className="api-desc">Hook for when the dock scales up. Its pooling work is empty in this build.</span> |
| <Link id="m-updatequantitystoredtext" /><code>{"void UpdateQuantityStoredText(int quantityStored, bool isCountHidden)"}</code> | <span className="api-desc">Shows the stored count on the 3D label, or clears it when the count is hidden.</span> |

<details className="api-private">
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Client only: hooks the nearby scaler and count label, joins the shared distance update, hooks hover pulsing and the hand camera's screenshot hiding.</span> |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | <span className="api-desc">Explicit `IBuildRendererBakeable` implementation. Empty in this build.</span> |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | <span className="api-desc">Explicit `IBuildRendererBakeable` implementation. Empty in this build.</span> |
| <Link id="m-getraritymeshcolor" /><code>{"private void GetRarityMeshColor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Tints the bubble with the held pickup's dock colour. Does nothing visible since `UpdateMeshColor` is empty.</span> |
| <Link id="m-getspooledvisual" /><code>{"private void GetsPooledVisual()"}</code> | <span className="api-desc">Empty in this build; probably once fetched a pooled visual before showing the dock.</span> |
| <Link id="m-modifypulse" /><code>{"private void ModifyPulse("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int oldCount)"}</code> | <span className="api-desc">Starts the bubble pulsing when something hovers over the dock and stops it when nothing does.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Client: leaves the distance update set and unhooks the hand camera events.</span> |
| <Link id="m-postcamerarender" /><code>{"private void PostCameraRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Shows the bubble again after a hand camera photo.</span> |
| <Link id="m-precamerarender" /><code>{"private void PreCameraRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | <span className="api-desc">Hides the bubble before a hand camera photo, depending on the screenshot dock hide setting.</span> |
| <Link id="m-releasevisual" /><code>{"private void ReleaseVisual("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-resetmeshcolor" /><code>{"private void ResetMeshColor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | <span className="api-desc">Sets the bubble back to the dock's default colour. Does nothing visible since `UpdateMeshColor` is empty.</span> |
| <Link id="m-setbubbleenabled" /><code>{"private void SetBubbleEnabled(bool isEnabled)"}</code> | <span className="api-desc">Turns the bubble renderer on or off when `validateCameraHide` allows it.</span> |
| <Link id="m-startpulse" /><code>{"private void StartPulse()"}</code> | <span className="api-desc">Adds a `ScalePulsator` to the bubble on first use, set from the dock's hover settings, and starts it.</span> |
| <Link id="m-stoppulse" /><code>{"private void StopPulse()"}</code> | <span className="api-desc">Stops the bubble pulsing.</span> |
| <Link id="m-updatealldistances" /><code>{"private static void UpdateAllDistances()"}</code> | <span className="api-desc">Static late update: for each dock visual, counts down `distant` or lets the dock's visual settings evaluate it against the local player's head.</span> |
| <Link id="m-updatemeshcolor" /><code>{"private void UpdateMeshColor(Color targetColor)"}</code> | <span className="api-desc">Empty in this build.</span> |
| <Link id="m-updatenear" /><code>{"private void UpdateNear(bool isNear)"}</code> | <span className="api-desc">Shows the count label only while the player is near.</span> |

</details>

## Used in

Members of other types that take, return or hold a `DockVisual`:

<div className="api-used-in">

[`PickupDock.dockVisual`](/mod/game-api/types/alta-items/pickupdock#m-dockvisual), [`PickupDockVisualSettings.Evaluate`](/mod/game-api/types/alta-items/pickupdockvisualsettings#m-evaluate), [`PickupDockVisualSettings.EvaluateAndroid`](/mod/game-api/types/alta-items/pickupdockvisualsettings#m-evaluateandroid), [`CurveScaler.dockVisuals`](/mod/game-api/types/global-c-d/curvescaler#m-dockvisuals), [`CurveScaler.DockVisuals`](/mod/game-api/types/global-c-d/curvescaler#m-dockvisuals-2), [`PlayerSpecialEffectsController.destroyOnDeath`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-destroyondeath), [`RendererScaleAnimator.dockVisuals`](/mod/game-api/types/global-q-r/rendererscaleanimator#m-dockvisuals), [`RendererScaleAnimator.RendererScaleAnimator`](/mod/game-api/types/global-q-r/rendererscaleanimator#m-ctor).

</div>
