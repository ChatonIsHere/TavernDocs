---
title: "InteractableInspector"
description: "class InteractableInspector in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# InteractableInspector

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: I to L](/game-api/types/global-i-l)
- **Inherits or implements** [`PooledObject`](/game-api/types/global-p/pooledobject)
- **Attributes** `RequireComponent`

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"InteractableInspector()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-angletovariation" /><code>{"private AnimationCurve angleToVariation"}</code> |  |
| <Link id="m-btninteract" /><code>{"private bool btnInteract"}</code> |  |
| <Link id="m-bubblerenderer" /><code>{"private Renderer bubbleRenderer"}</code> |  |
| <Link id="m-canrotate" /><code>{"private bool canRotate"}</code> |  |
| <Link id="m-checkingcoroutine" /><code>{"private Coroutine checkingCoroutine"}</code> |  |
| <Link id="m-componentmaterial" /><code>{"private Material componentMaterial"}</code> |  |
| <Link id="m-currentlist" /><code>{"private static Dictionary<"}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{", "}<Link to="/game-api/types/global-i-l/interactableinspector">{"InteractableInspector"}</Link>{"> currentList"}</code> |  |
| <Link id="m-inspector" /><code>{"private "}<Link to="/game-api/types/global-i-l/inspectorbase">{"InspectorBase"}</Link>{" inspector"}</code> |  |
| <Link id="m-interactable" /><code>{"private "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable"}</code> |  |
| <Link id="m-interactormaterial" /><code>{"private Material interactorMaterial"}</code> |  |
| <Link id="m-methodmaterial" /><code>{"private Material methodMaterial"}</code> |  |
| <Link id="m-prefab" /><code>{"private "}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab"}</code> |  |
| <Link id="m-root" /><code>{"private Component root"}</code> |  |
| <Link id="m-roottransform" /><code>{"private Transform rootTransform"}</code> |  |
| <Link id="m-text" /><code>{"private "}<Link to="/game-api/types/alta-utilities/textpopup">{"TextPopup"}</Link>{" text"}</code> |  |
| <Link id="m-valuematerial" /><code>{"private Material valueMaterial"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-clean" /><code>{"void Clean()"}</code> |  |
| <Link id="m-registerinspector" /><code>{"void RegisterInspector("}<Link to="/game-api/types/global-i-l/inspectorbase">{"InspectorBase"}</Link>{" inspector, Component root)"}</code> |  |
| <Link id="m-registerprefab" /><code>{"void RegisterPrefab("}<Link to="/game-api/types/alta-networking/networkprefab">{"NetworkPrefab"}</Link>{" prefab)"}</code> |  |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> |  |
| <Link id="m-checkinteraction" /><code>{"private IEnumerator CheckInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor) (iterator)"}</code> |  |
| <Link id="m-distancerelease" /><code>{"private void DistanceRelease("}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player, Vector3 oldPosition, Vector3 newPosition, "}<Link to="/game-api/types/global-i-l/locomotionfunction">{"LocomotionFunction"}</Link>{" function)"}</code> |  |
| <Link id="m-filterinteraction" /><code>{"private void FilterInteraction("}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor, "}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, ref bool result)"}</code> |  |
| <Link id="m-interact" /><code>{"private void Interact()"}</code> |  |
| <Link id="m-onrequested" /><code>{"private void OnRequested("}<Link to="/game-api/types/global-p/pooledobject">{"PooledObject"}</Link>{" pooledObject)"}</code> |  |
| <Link id="m-targetdestroyed" /><code>{"private void TargetDestroyed("}<Link to="/game-api/types/alta-networking/networkentity">{"NetworkEntity"}</Link>{" entity, bool isUnload)"}</code> |  |
| <Link id="m-updatename" /><code>{"private void UpdateName(string addition = \"\")"}</code> |  |

## Used in

Members of other types that take, return or hold a `InteractableInspector`:

[`BubbleInspector.lastSpawned`](/game-api/types/global-a-b/bubbleinspector#m-lastspawned), [`ComponentInspector.Interact`](/game-api/types/global-c-d/componentinspector#m-interact), [`ComponentInspector.spawned`](/game-api/types/global-c-d/componentinspector#m-spawned), [`InspectorBase.GetInteractable`](/game-api/types/global-i-l/inspectorbase#m-getinteractable), [`InspectorBase.Interact`](/game-api/types/global-i-l/inspectorbase#m-interact), [`InteractorInspector.Interact`](/game-api/types/global-i-l/interactorinspector#m-interact), [`MethodMember.Interact`](/game-api/types/global-m-o/methodmember#m-interact), [`ValueMember.currentInteractor`](/game-api/types/global-t-x/valuemember#m-currentinteractor), [`ValueMember.currentInteractorInternal`](/game-api/types/global-t-x/valuemember#m-currentinteractorinternal), [`ValueMember.Interact`](/game-api/types/global-t-x/valuemember#m-interact).
