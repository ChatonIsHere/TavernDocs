---
title: "DockVisual"
description: "class DockVisual in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# DockVisual

A **class** in `Root.Township`, `Alta.Inventory`.

- **Listed in** [Items, inventory and logic](/game-api/types/alta-items)
- **Inherits or implements** `MonoBehaviour`, [`IBuildRendererBakeable`](/game-api/types/assembly-other/ibuildrendererbakeable), [`IBuildBakeable`](/game-api/types/assembly-other/ibuildbakeable)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"DockVisual()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-activepooledvisual" /><code>{"private "}<Link to="/game-api/types/alta-items/pooleddockvisual">{"PooledDockVisual"}</Link>{" activePooledVisual"}</code> |  |
| <Link id="m-coloredmeshes" /><code>{"private static Dictionary<int, Mesh> coloredMeshes"}</code> |  |
| <Link id="m-countlabel3d" /><code>{"private "}<Link to="/game-api/types/global-t-x/textrenderer">{"TextRenderer"}</Link>{" countLabel3D"}</code> |  |
| <Link id="m-distant" /><code>{"private int distant"}</code> |  |
| <Link id="m-dock" /><code>{"private "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock"}</code> |  |
| <Link id="m-dockbubble" /><code>{"private MeshRenderer dockBubble"}</code> |  |
| <Link id="m-hasnearbyscaler" /><code>{"private bool hasNearbyScaler"}</code> |  |
| <Link id="m-ispulsing" /><code>{"private bool isPulsing"}</code> |  |
| <Link id="m-nearbyscaler" /><code>{"private "}<Link to="/game-api/types/global-m-o/nearbyplayerscaler">{"NearbyPlayerScaler"}</Link>{" nearbyScaler"}</code> |  |
| <Link id="m-pooleddockvisualdefinition" /><code>{"private "}<Link to="/game-api/types/global-p/pooledobjectdefinition">{"PooledObjectDefinition"}</Link>{" pooledDockVisualDefinition"}</code> |  |
| <Link id="m-scalepulsator" /><code>{"private "}<Link to="/game-api/types/global-s/scalepulsator">{"ScalePulsator"}</Link>{" scalePulsator"}</code> |  |
| <Link id="m-updatedistance" /><code>{"private static "}<Link to="/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateDistance"}</code> |  |
| <Link id="m-updatingvisuals" /><code>{"private static HashSet<"}<Link to="/game-api/types/alta-items/dockvisual">{"DockVisual"}</Link>{"> updatingVisuals"}</code> |  |
| <Link id="m-validatecamerahide" /><code>{"private Func<bool> validateCameraHide"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-distant-2" /><code>{"int Distant { get; set; }"}</code> |  |
| <Link id="m-dock-2" /><code><Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" Dock { get; }"}</code> |  |
| <Link id="m-dockbubble-2" /><code>{"MeshRenderer DockBubble { get; }"}</code> |  |
| <Link id="m-needstogetfrompool" /><code>{"bool NeedsToGetFromPool { get; private set; }"}</code> |  |
| <Link id="m-ibuildrendererbakeable-sortingorder" /><code>{"private int IBuildRendererBakeable.SortingOrder { get; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-beginnearplayer" /><code>{"void BeginNearPlayer()"}</code> |  |
| <Link id="m-clearvisual" /><code>{"void ClearVisual()"}</code> |  |
| <Link id="m-endnearplayer" /><code>{"void EndNearPlayer()"}</code> |  |
| <Link id="m-setisscaledup" /><code>{"void SetIsScaledUp(bool isScaledUp)"}</code> |  |
| <Link id="m-updatequantitystoredtext" /><code>{"void UpdateQuantityStoredText(int quantityStored, bool isCountHidden)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-bake" /><code>{"private void IBuildRendererBakeable.Bake(bool isSaving)"}</code> |  |
| <Link id="m-clean" /><code>{"private void IBuildRendererBakeable.Clean()"}</code> |  |
| <Link id="m-getraritymeshcolor" /><code>{"private void GetRarityMeshColor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-getspooledvisual" /><code>{"private void GetsPooledVisual()"}</code> |  |
| <Link id="m-modifypulse" /><code>{"private void ModifyPulse("}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock, int oldCount)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> |  |
| <Link id="m-postcamerarender" /><code>{"private void PostCameraRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |  |
| <Link id="m-precamerarender" /><code>{"private void PreCameraRender("}<Link to="/game-api/types/alta-customization/handcamera">{"HandCamera"}</Link>{" handCamera, "}<Link to="/game-api/types/alta-customization/handcameraevent">{"HandCameraEvent"}</Link>{" cameraEvent)"}</code> |  |
| <Link id="m-releasevisual" /><code>{"private void ReleaseVisual("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-resetmeshcolor" /><code>{"private void ResetMeshColor("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-p/pickup">{"Pickup"}</Link>{" pickup, "}<Link to="/game-api/types/alta-items/pickupdock">{"PickupDock"}</Link>{" dock)"}</code> |  |
| <Link id="m-setbubbleenabled" /><code>{"private void SetBubbleEnabled(bool isEnabled)"}</code> |  |
| <Link id="m-startpulse" /><code>{"private void StartPulse()"}</code> |  |
| <Link id="m-stoppulse" /><code>{"private void StopPulse()"}</code> |  |
| <Link id="m-updatealldistances" /><code>{"private static void UpdateAllDistances()"}</code> |  |
| <Link id="m-updatemeshcolor" /><code>{"private void UpdateMeshColor(Color targetColor)"}</code> |  |
| <Link id="m-updatenear" /><code>{"private void UpdateNear(bool isNear)"}</code> |  |

## Used in

Members of other types that take, return or hold a `DockVisual`:

[`PickupDock.dockVisual`](/game-api/types/alta-items/pickupdock#m-dockvisual), [`PickupDockVisualSettings.Evaluate`](/game-api/types/alta-items/pickupdockvisualsettings#m-evaluate), [`PickupDockVisualSettings.EvaluateAndroid`](/game-api/types/alta-items/pickupdockvisualsettings#m-evaluateandroid), [`CurveScaler.dockVisuals`](/game-api/types/global-c-d/curvescaler#m-dockvisuals), [`CurveScaler.DockVisuals`](/game-api/types/global-c-d/curvescaler#m-dockvisuals-2), [`PlayerSpecialEffectsController.destroyOnDeath`](/game-api/types/global-p/playerspecialeffectscontroller#m-destroyondeath), [`RendererScaleAnimator.dockVisuals`](/game-api/types/global-q-r/rendererscaleanimator#m-dockvisuals), [`RendererScaleAnimator.RendererScaleAnimator`](/game-api/types/global-q-r/rendererscaleanimator#m-ctor).
