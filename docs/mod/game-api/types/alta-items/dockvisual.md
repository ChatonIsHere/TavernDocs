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
| <Link id="m-ctor" /><code>{"DockVisual()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>14 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-activepooledvisual" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pooleddockvisual">{"PooledDockVisual"}</Link>{" activePooledVisual"}</code> | Pooled visual in use. Not set anywhere in this build. |
| <Link id="m-coloredmeshes" /><code>{"private static Dictionary<int, Mesh> coloredMeshes"}</code> | Static cache of coloured meshes. Not used in this build. |
| <Link id="m-countlabel3d" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" countLabel3D"}</code> | 3D text showing how many items the dock holds. |
| <Link id="m-distant" /><code>{"private int distant"}</code> | Backing field for `Distant`: frames to skip before this visual is evaluated again, so far docks update less often. |
| <Link id="m-dock" /><code>{"private "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> | Backing field for `Dock`, the `PickupDock` in a parent. |
| <Link id="m-dockbubble" /><code>{"private MeshRenderer dockBubble"}</code> | Backing field for `DockBubble`, the bubble mesh shown at the dock. |
| <Link id="m-hasnearbyscaler" /><code>{"private bool hasNearbyScaler"}</code> | True when a `NearbyPlayerScaler` was found in a parent. |
| <Link id="m-ispulsing" /><code>{"private bool isPulsing"}</code> | True while the bubble pulses for a hover. |
| <Link id="m-nearbyscaler" /><code>{"private "}<Link to="/mod/game-api/types/global-m-o/nearbyplayerscaler">{"NearbyPlayerScaler"}</Link>{" nearbyScaler"}</code> | Scaler in a parent that grows the dock near the player; enabled only while the player is near. |
| <Link id="m-pooleddockvisualdefinition" /><code>{"private "}<Link to="/mod/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledDockVisualDefinition"}</code> | Pool definition for dock visuals. Not read in this build. |
| <Link id="m-scalepulsator" /><code>{"private "}<Link to="/mod/game-api/types/global-s/scalepulsator">{"ScalePulsator"}</Link>{" scalePulsator"}</code> | Component that pulses the bubble's scale, added by `StartPulse`. |
| <Link id="m-updatedistance" /><code>{"private static "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> | Static handle for the shared `UpdateAllDistances` late update. |
| <Link id="m-updatingvisuals" /><code>{"private static HashSet<"}<Link to="/mod/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"> updatingVisuals"}</code> | Static set of all client dock visuals that `UpdateAllDistances` goes through. |
| <Link id="m-validatecamerahide" /><code>{"private Func<bool> validateCameraHide"}</code> | Check for whether to hide the bubble in hand camera photos, built in `Awake` from the screenshot hide setting. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distant-2" /><code>{"int Distant { get; set; }"}</code> | Distance bucket used to throttle updates: -1 when near, otherwise frames to skip before the next distance check. |
| <Link id="m-dock-2" /><code><Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" Dock { get; }"}</code> | The pickup dock this visual belongs to. |
| <Link id="m-dockbubble-2" /><code>{"MeshRenderer DockBubble { get; }"}</code> | The bubble mesh renderer whose material changes with distance. |
| <Link id="m-needstogetfrompool" /><code>{"bool NeedsToGetFromPool { get; private set; }"}</code> | Pooled visual flag. Nothing in this build sets it. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> | Bake order for build-time renderer baking, 10. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginnearplayer" /><code>{"void BeginNearPlayer()"}</code> | Called when the local player's head comes within range. Turns on the nearby scaler for client docks. |
| <Link id="m-clearvisual" /><code>{"void ClearVisual()"}</code> | Destroys the visual's game object. |
| <Link id="m-endnearplayer" /><code>{"void EndNearPlayer()"}</code> | Called when the local player's head leaves range. Turns off the nearby scaler. |
| <Link id="m-setisscaledup" /><code>{"void SetIsScaledUp(bool isScaledUp)"}</code> | Hook for when the dock scales up. Its pooling work is empty in this build. |
| <Link id="m-updatequantitystoredtext" /><code>{"void UpdateQuantityStoredText(int quantityStored, bool isCountHidden)"}</code> | Shows the stored count on the 3D label, or clears it when the count is hidden. |

<details>
<summary>17 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Client only: hooks the nearby scaler and count label, joins the shared distance update, hooks hover pulsing and the hand camera's screenshot hiding. |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> | Explicit `IBuildRendererBakeable` implementation. Empty in this build. |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> | Explicit `IBuildRendererBakeable` implementation. Empty in this build. |
| <Link id="m-getraritymeshcolor" /><code>{"private void GetRarityMeshColor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Tints the bubble with the held pickup's dock colour. Does nothing visible since `UpdateMeshColor` is empty. |
| <Link id="m-getspooledvisual" /><code>{"private void GetsPooledVisual()"}</code> | Empty in this build; probably once fetched a pooled visual before showing the dock. |
| <Link id="m-modifypulse" /><code>{"private void ModifyPulse("}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int oldCount)"}</code> | Starts the bubble pulsing when something hovers over the dock and stops it when nothing does. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Client: leaves the distance update set and unhooks the hand camera events. |
| <Link id="m-postcamerarender" /><code>{"private void PostCameraRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Shows the bubble again after a hand camera photo. |
| <Link id="m-precamerarender" /><code>{"private void PreCameraRender("}<Link to="/mod/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/mod/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> | Hides the bubble before a hand camera photo, depending on the screenshot dock hide setting. |
| <Link id="m-releasevisual" /><code>{"private void ReleaseVisual("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | Empty in this build. |
| <Link id="m-resetmeshcolor" /><code>{"private void ResetMeshColor("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/mod/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> | Sets the bubble back to the dock's default colour. Does nothing visible since `UpdateMeshColor` is empty. |
| <Link id="m-setbubbleenabled" /><code>{"private void SetBubbleEnabled(bool isEnabled)"}</code> | Turns the bubble renderer on or off when `validateCameraHide` allows it. |
| <Link id="m-startpulse" /><code>{"private void StartPulse()"}</code> | Adds a `ScalePulsator` to the bubble on first use, set from the dock's hover settings, and starts it. |
| <Link id="m-stoppulse" /><code>{"private void StopPulse()"}</code> | Stops the bubble pulsing. |
| <Link id="m-updatealldistances" /><code>{"private static void UpdateAllDistances()"}</code> | Static late update: for each dock visual, counts down `distant` or lets the dock's visual settings evaluate it against the local player's head. |
| <Link id="m-updatemeshcolor" /><code>{"private void UpdateMeshColor(Color targetColor)"}</code> | Empty in this build. |
| <Link id="m-updatenear" /><code>{"private void UpdateNear(bool isNear)"}</code> | Shows the count label only while the player is near. |

</details>

## Used in

Members of other types that take, return or hold a `DockVisual`:

[`PickupDock.dockVisual`](/mod/game-api/types/alta-items/pickupdock#m-dockvisual), [`PickupDockVisualSettings.Evaluate`](/mod/game-api/types/alta-items/pickupdockvisualsettings#m-evaluate), [`PickupDockVisualSettings.EvaluateAndroid`](/mod/game-api/types/alta-items/pickupdockvisualsettings#m-evaluateandroid), [`CurveScaler.dockVisuals`](/mod/game-api/types/global-c-d/curvescaler#m-dockvisuals), [`CurveScaler.DockVisuals`](/mod/game-api/types/global-c-d/curvescaler#m-dockvisuals-2), [`PlayerSpecialEffectsController.destroyOnDeath`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-destroyondeath), [`RendererScaleAnimator.dockVisuals`](/mod/game-api/types/global-q-r/rendererscaleanimator#m-dockvisuals), [`RendererScaleAnimator.RendererScaleAnimator`](/mod/game-api/types/global-q-r/rendererscaleanimator#m-ctor).
