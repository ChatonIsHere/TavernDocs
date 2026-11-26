---
title: "ActionOrb"
description: "A hovering orb the player grabs and pulls to their face to trigger an action, with haptics and a screen fade as it gets closer."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# ActionOrb

A **class** in `Root.Township`, the global namespace.

A hovering orb the player grabs and pulls to their face to trigger an action, with haptics and a screen fade as it gets closer. Used for menu, revive and server selection orbs.

- **Listed in** [Global namespace: A to B](/mod/game-api/types/global-a-b)
- **Inherits or implements** [`HoverPickup`](/mod/game-api/types/global-e-h/hoverpickup)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"ActionOrb()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

<details>
<summary>13 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cantriggerhaptic" /><code>{"private bool canTriggerHaptic"}</code> | Whether haptics play; set with `SetCanReceiveHapticFeedback`. |
| <Link id="m-controller" /><code>{"private "}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" controller"}</code> | Player controller of whoever last grabbed the orb. |
| <Link id="m-hasscreenfade" /><code>{"private bool hasScreenFade"}</code> | Whether bringing the orb to the head fades the screen. |
| <Link id="m-ismovingkeyword" /><code>{"private const string IsMovingKeyword"}</code> | Shader keyword turned on while the orb is moving back. |
| <Link id="m-minfadetocountdowntime" /><code>{"private float minFadeToCountDownTime"}</code> | Fade amount above which the force-join countdown runs. |
| <Link id="m-rendererstochange" /><code>{"private Renderer[] renderersToChange"}</code> | Renderers whose material `SetMaterial` replaces. |
| <Link id="m-squishablematerialgroup" /><code>{"private "}<Link to="/mod/game-api/types/alta-utilities/materialinstancegroup">{"MaterialInstanceGroup"}</Link>{" squishableMaterialGroup"}</code> | Material instances on the squishable renderers, made on awake and disposed on destroy. |
| <Link id="m-squishablerenderers" /><code>{"private Renderer[] squishableRenderers"}</code> | Renderers that squish in the direction the orb moves. |
| <Link id="m-squishdirectionpropertyname" /><code>{"private const string SquishDirectionPropertyName"}</code> | Shader property name for the squish direction. |
| <Link id="m-squishdirectionshaderid" /><code>{"private static readonly int squishDirectionShaderId"}</code> | Shader ID of the squish direction property. |
| <Link id="m-startatzeroscale" /><code>{"private bool startAtZeroScale"}</code> | Starts the orb at zero scale so it can grow in. |
| <Link id="m-timetoforcejoin" /><code>{"private float timeToForceJoin"}</code> | Seconds the orb must be held close to the head before it lets go by itself. |
| <Link id="m-updateselectionorb" /><code>{"private Coroutine updateSelectionOrb"}</code> | The running `UpdateSelectionOrb` coroutine, if any. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-onvalidletgo" /><code>{"event Action OnValidLetGo"}</code> | Raised when the orb is released near the head, or held there long enough to force it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-resetvelocity" /><code>{"void ResetVelocity()"}</code> | Clears the squish effect. |
| <Link id="m-setcanreceivehapticfeedback" /><code>{"void SetCanReceiveHapticFeedback(bool canReceiveHaptic)"}</code> | Turns the distance-based controller vibration on or off. |
| <Link id="m-setmaterial" /><code>{"void SetMaterial(Material material)"}</code> | Sets the shared material on the orb's swappable renderers. |
| <Link id="m-awake" /><code>{"protected override void Awake()"}</code> | Creates material instances for the squish effect. |
| <Link id="m-handlegrabbed" /><code>{"protected override void HandleGrabbed("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | Remembers the grabbing player and starts tracking the orb's distance to their head. |
| <Link id="m-ondestroy" /><code>{"protected override void OnDestroy()"}</code> | Disposes the squish material instances. |
| <Link id="m-onreturning" /><code>{"protected override void OnReturning(Vector3 direction, float velocity)"}</code> | Client: drives the squish shader by the direction and speed the orb flies back. |
| <Link id="m-start" /><code>{"protected override void Start()"}</code> | Starts the orb at zero scale if set to. |
| <Link id="m-startmovingback" /><code>{"protected override void StartMovingBack("}<Link to="/mod/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable, "}<Link to="/mod/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor)"}</code> | On release, raises `OnValidLetGo` if it was let go close enough to the head, else clears the fade. |

<details>
<summary>3 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-startscreenfade" /><code>{"private void StartScreenFade(float from, float to, float duration)"}</code> | Fades the holder's screen between the given values, if `hasScreenFade` is on. |
| <Link id="m-triggerhaptic" /><code>{"private void TriggerHaptic(float strength)"}</code> | Pulses the holding controller at the given strength, unless haptics are turned off. |
| <Link id="m-updateselectionorb-2" /><code>{"private IEnumerator UpdateSelectionOrb() (iterator)"}</code> | Coroutine while held: haptics and screen fade grow as the orb nears the head; held close long enough, it lets go and fires `OnValidLetGo`. |

</details>

## Used in

Members of other types that take, return or hold a `ActionOrb`:

[`ReturnToMainMenuAction.activeOrb`](/mod/game-api/types/alta-player/returntomainmenuaction#m-activeorb), [`EventOrb.actionOrb`](/mod/game-api/types/game-other-namespaces/eventorb#m-actionorb), [`EventOrb.ActionOrb`](/mod/game-api/types/game-other-namespaces/eventorb#m-actionorb-2), [`MicroTutorialFaceOrb.actionOrb`](/mod/game-api/types/game-other-namespaces/microtutorialfaceorb#m-actionorb), [`ServerSelectionOrb.actionOrb`](/mod/game-api/types/global-s/serverselectionorb#m-actionorb).
