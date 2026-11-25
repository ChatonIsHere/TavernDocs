---
title: "ActionOrb"
description: "class ActionOrb in Root.Township."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionOrb

A **class** in `Root.Township`, no namespace.

- **Listed in** [No namespace: A to B](/game-api/types/global-a-b)
- **Inherits or implements** [`HoverPickup`](/game-api/types/global-e-h/hoverpickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionOrb()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cantriggerhaptic" /><code>{"private bool canTriggerHaptic"}</code> |  |
| <Link id="m-controller" /><code>{"private "}<Link to="/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> |  |
| <Link id="m-hasscreenfade" /><code>{"private bool hasScreenFade"}</code> |  |
| <Link id="m-ismovingkeyword" /><code>{"private const string IsMovingKeyword"}</code> |  |
| <Link id="m-minfadetocountdowntime" /><code>{"private float minFadeToCountDownTime"}</code> |  |
| <Link id="m-rendererstochange" /><code>{"private Renderer[] renderersToChange"}</code> |  |
| <Link id="m-squishablematerialgroup" /><code>{"private "}<Link to="/game-api/types/alta-utilities/materialinstancegroup">{"MaterialInstanceGroup"}</Link>{" squishableMaterialGroup"}</code> |  |
| <Link id="m-squishablerenderers" /><code>{"private Renderer[] squishableRenderers"}</code> |  |
| <Link id="m-squishdirectionpropertyname" /><code>{"private const string SquishDirectionPropertyName"}</code> |  |
| <Link id="m-squishdirectionshaderid" /><code>{"private static readonly int squishDirectionShaderId"}</code> |  |
| <Link id="m-startatzeroscale" /><code>{"private bool startAtZeroScale"}</code> |  |
| <Link id="m-timetoforcejoin" /><code>{"private float timeToForceJoin"}</code> |  |
| <Link id="m-updateselectionorb" /><code>{"private Coroutine updateSelectionOrb"}</code> |  |

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidletgo" /><code>{"event Action OnValidLetGo"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetvelocity" /><code>{"void ResetVelocity()"}</code> |  |
| <Link id="m-setcanreceivehapticfeedback" /><code>{"void SetCanReceiveHapticFeedback(bool canReceiveHaptic)"}</code> |  |
| <Link id="m-setmaterial" /><code>{"void SetMaterial(Material material)"}</code> |  |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> |  |
| <Link id="m-handlegrabbed" /><code>{"protected override void HandleGrabbed("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> |  |
| <Link id="m-onreturning" /><code>{"protected override void OnReturning(Vector3 direction, float velocity)"}</code> |  |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> |  |
| <Link id="m-startmovingback" /><code>{"protected override void StartMovingBack("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> |  |
| <Link id="m-startscreenfade" /><code>{"private void StartScreenFade(float from, float to, float duration)"}</code> |  |
| <Link id="m-triggerhaptic" /><code>{"private void TriggerHaptic(float strength)"}</code> |  |
| <Link id="m-updateselectionorb-2" /><code>{"private IEnumerator UpdateSelectionOrb() (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `ActionOrb`:

[`ReturnToMainMenuAction.activeOrb`](/game-api/types/alta-player/returntomainmenuaction#m-activeorb), [`EventOrb.actionOrb`](/game-api/types/game-other-namespaces/eventorb#m-actionorb), [`EventOrb.ActionOrb`](/game-api/types/game-other-namespaces/eventorb#m-actionorb-2), [`MicroTutorialFaceOrb.actionOrb`](/game-api/types/game-other-namespaces/microtutorialfaceorb#m-actionorb), [`ServerSelectionOrb.actionOrb`](/game-api/types/global-s/serverselectionorb#m-actionorb).
