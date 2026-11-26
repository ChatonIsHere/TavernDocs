---
title: "InteractableInspector"
description: "Debug bubble shown in the world for inspecting a prefab's components, methods and values in game."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractableInspector

A **class** in `Root.Township`, the global namespace.

Debug bubble shown in the world for inspecting a prefab's components, methods and values in game. Pooled, client side, and released when you move more than 5 m away.

- **Listed in** [Global namespace: I to L](/mod/game-api/types/global-i-l)
- **Inherits or implements** [`PooledObject`](/mod/game-api/types/global-p/pooledobject)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractableInspector()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>16 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-angletovariation" /><code>{"private AnimationCurve angleToVariation"}</code> | <span className="api-desc">Curve that maps hand twist angle to how far the value is rotated.</span> |
| <Link id="m-btninteract" /><code>{"private bool btnInteract"}</code> | <span className="api-desc">Inspector button that calls `Interact` from the editor.</span> |
| <Link id="m-bubblerenderer" /><code>{"private Renderer bubbleRenderer"}</code> | <span className="api-desc">Renderer of the bubble, coloured by inspector type.</span> |
| <Link id="m-canrotate" /><code>{"private bool canRotate"}</code> | <span className="api-desc">Copied from the inspector: whether twisting the hand rotates the value.</span> |
| <Link id="m-checkingcoroutine" /><code>{"private Coroutine checkingCoroutine"}</code> | <span className="api-desc">The running `CheckInteraction`, or null.</span> |
| <Link id="m-componentmaterial" /><code>{"private Material componentMaterial"}</code> | <span className="api-desc">Bubble material for component inspectors.</span> |
| <Link id="m-currentlist" /><code>{"private static Dictionary<"}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/mod/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{"> currentList"}</code> | <span className="api-desc">Static map of which bubble each interactor is currently using, so one hand drives one bubble at a time.</span> |
| <Link id="m-inspector" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/inspectorbase">{"InspectorBase"}</Link>{" inspector"}</code> | <span className="api-desc">The `InspectorBase` this bubble shows, set by `RegisterInspector`.</span> |
| <Link id="m-interactable" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> | <span className="api-desc">The `Interactable` on this object.</span> |
| <Link id="m-interactormaterial" /><code>{"private Material interactorMaterial"}</code> | <span className="api-desc">Bubble material for interactor inspectors.</span> |
| <Link id="m-methodmaterial" /><code>{"private Material methodMaterial"}</code> | <span className="api-desc">Bubble material for method inspectors.</span> |
| <Link id="m-prefab" /><code>{"private "}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> | <span className="api-desc">The inspected prefab, whose destruction cleans up the bubble.</span> |
| <Link id="m-root" /><code>{"private Component root"}</code> | <span className="api-desc">The component being inspected.</span> |
| <Link id="m-roottransform" /><code>{"private Transform rootTransform"}</code> | <span className="api-desc">Transform of `root`, used for the distance check.</span> |
| <Link id="m-text" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/textpopup">{"TextPopup"}</Link>{" text"}</code> | <span className="api-desc">The pooled text popup that shows the name.</span> |
| <Link id="m-valuematerial" /><code>{"private Material valueMaterial"}</code> | <span className="api-desc">Bubble material for value inspectors.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"void Clean()"}</code> | <span className="api-desc">Unhooks everything, releases its text and returns the bubble to the pool.</span> |
| <Link id="m-registerinspector" /><code>{"void RegisterInspector("}<Link to="/mod/game-api/types/global-i-l/inspectorbase">{"InspectorBase"}</Link>{" inspector, Component root)"}</code> | <span className="api-desc">Sets which component, method, value or interactor this bubble shows and colours it by type.</span> |
| <Link id="m-registerprefab" /><code>{"void RegisterPrefab("}<Link to="/mod/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> | <span className="api-desc">Cleans the bubble up when that prefab's entity is destroyed.</span> |

<details className="api-private">
<summary>8 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Caches the `Interactable` and bubble renderer, hooks the interaction filter and the pool's `Requested` event.</span> |
| <Link id="m-checkinteraction" /><code>{"private IEnumerator CheckInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> | <span className="api-desc">Coroutine while Interact is held: dragging moves the bubble (`inspector.Move`), twisting rotates (`inspector.Rotate`), holding still and releasing calls `Interact`.</span> |
| <Link id="m-distancerelease" /><code>{"private void DistanceRelease("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/mod/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> | <span className="api-desc">Client: releases the bubble and its label once the local player is more than 5 m from the inspected object.</span> |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> | <span className="api-desc">Interaction filter that blocks the normal interaction and starts `CheckInteraction` instead, one per interactor.</span> |
| <Link id="m-interact" /><code>{"private void Interact()"}</code> | <span className="api-desc">Runs the inspector's action on the inspected component.</span> |
| <Link id="m-onrequested" /><code>{"private void OnRequested("}<Link to="/mod/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> | <span className="api-desc">Pool callback: spawns the text label and starts watching the local player's distance. Releases itself if there's no local player.</span> |
| <Link id="m-targetdestroyed" /><code>{"private void TargetDestroyed("}<Link to="/mod/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> | <span className="api-desc">Calls `Clean` when the inspected prefab's entity is destroyed.</span> |
| <Link id="m-updatename" /><code>{"private void UpdateName(string addition = \"\")"}</code> | <span className="api-desc">Sets the label text to the inspector's name plus an optional suffix.</span> |

</details>

## Used in

Members of other types that take, return or hold a `InteractableInspector`:

<div className="api-used-in">

[`BubbleInspector.lastSpawned`](/mod/game-api/types/global-a-b/bubbleinspector#m-lastspawned), [`ComponentInspector.Interact`](/mod/game-api/types/global-c-d/componentinspector#m-interact), [`ComponentInspector.spawned`](/mod/game-api/types/global-c-d/componentinspector#m-spawned), [`InspectorBase.GetInteractable`](/mod/game-api/types/global-i-l/inspectorbase#m-getinteractable), [`InspectorBase.Interact`](/mod/game-api/types/global-i-l/inspectorbase#m-interact), [`InteractorInspector.Interact`](/mod/game-api/types/global-i-l/interactorinspector#m-interact), [`MethodMember.Interact`](/mod/game-api/types/global-m-o/methodmember#m-interact), [`ValueMember.currentInteractor`](/mod/game-api/types/global-t-x/valuemember#m-currentinteractor), [`ValueMember.currentInteractorInternal`](/mod/game-api/types/global-t-x/valuemember#m-currentinteractorinternal), [`ValueMember.Interact`](/mod/game-api/types/global-t-x/valuemember#m-interact).

</div>
