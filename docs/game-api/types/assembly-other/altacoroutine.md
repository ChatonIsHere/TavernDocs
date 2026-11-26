---
title: "AltaCoroutine"
description: "A wrapper around a Unity coroutine that tracks its state, catches exceptions and supports cancellation and awaiting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaCoroutine

A **class** in `Alta.Coroutines`, no namespace.

A wrapper around a Unity coroutine that tracks its state, catches exceptions and supports cancellation and awaiting. Runs on the given MonoBehaviour, or on the global `AltaCoroutineHandler` singleton if none is given.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`EditorCoroutine`](/game-api/types/assembly-other/editorcoroutine)
- **Documented in** [Threads, coroutines and the timeline](/game-api/console-and-utilities/threads-coroutines-and-timeline#altacoroutine), [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"AltaCoroutine()"}</code> |

## Fields

<details>
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancellation" /><code>{"private CancellationToken cancellation"}</code> | Token checked after each step; when cancelled the coroutine calls `Stop`. |
| <Link id="m-delaycalls" /><code>{"private static List<Action> delayCalls"}</code> | Calls queued by `DelayCall` for the end of this frame. |
| <Link id="m-delaycallsswap" /><code>{"private static List<Action> delayCallsSwap"}</code> | Second list swapped with `delayCalls` while queued calls run, so calls added meanwhile wait for the next frame. |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | NLog logger for this class. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"Coroutine Coroutine { get; private set; }"}</code> | The underlying Unity coroutine once started. |
| <Link id="m-isinitialized" /><code>{"static bool IsInitialized { get; }"}</code> | Static: true once the global `AltaCoroutineHandler` exists. |
| <Link id="m-onerror" /><code>{"Action<Exception> OnError { get; set; }"}</code> | Called with the exception if the coroutine throws. When unset, the error is logged instead. |
| <Link id="m-onfinished" /><code>{"Action OnFinished { get; set; }"}</code> | Called when the enumerator runs to the end. |
| <Link id="m-onstopped" /><code>{"Action OnStopped { get; set; }"}</code> | Called when the coroutine is stopped or its cancellation token fires. |
| <Link id="m-state" /><code><Link to="/game-api/types/assembly-other/altacoroutinestate">{"AltaCoroutineState"}</Link>{" State { get; protected set; }"}</code> | Running, finished, stopped or error. |
| <Link id="m-enumerator" /><code>{"protected IEnumerator Enumerator { get; set; }"}</code> | The enumerator the coroutine steps through. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-altacoroutinehandler" /><code>{"private static "}<Link to="/game-api/types/assembly-other/altacoroutinehandler">{"AltaCoroutineHandler"}</Link>{" "}<Link to="/game-api/types/assembly-other/altacoroutinehandler">{"AltaCoroutineHandler"}</Link>{" { get; }"}</code> | The `AltaCoroutineHandler` singleton that runs coroutines with no target object. |
| <Link id="m-targetobject" /><code>{"private MonoBehaviour TargetObject { get; set; }"}</code> | The behaviour the Unity coroutine runs on; defaults to the handler singleton. If it is destroyed, the coroutine stops with it. |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Create(IEnumerator enumerator, MonoBehaviour targetObject = null, CancellationToken cancellation = null)"}</code> | Static: makes a coroutine without starting it. Call `Start` on the result later. |
| <Link id="m-delaycall" /><code>{"static void DelayCall(Action call)"}</code> | Static: runs an action at the end of the current frame (all such calls are batched), or after a number of seconds with the delay overload. |
| <Link id="m-delaycall-2" /><code>{"static void DelayCall(float delaySeconds, Action call)"}</code> | Static: runs an action at the end of the current frame (all such calls are batched), or after a number of seconds with the delay overload. |
| <Link id="m-duodelaycall" /><code>{"static void DuoDelayCall(Action call)"}</code> | Static: runs an action after the end of this frame and the next fixed update. |
| <Link id="m-gettask" /><code>{"Task<bool> GetTask()"}</code> | Returns a task that completes true when finished, false when stopped, or faults on an error. Adding it also replaces the default error log. |
| <Link id="m-start" /><code>{"static "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Start(IEnumerator enumerator, MonoBehaviour targetObject = null, CancellationToken cancellation = null)"}</code> | Static version creates and starts a coroutine. The instance version starts it, warning if it is already running. |
| <Link id="m-start-2" /><code>{"virtual "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Start()"}</code> | Static version creates and starts a coroutine. The instance version starts it, warning if it is already running. |
| <Link id="m-stop" /><code>{"virtual void Stop()"}</code> | Stops a running coroutine and calls `OnStopped`. |

<details>
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutinehandler" /><code>{"private IEnumerator CoroutineHandler(IEnumerator enumerator) (iterator)"}</code> | Wraps the enumerator: steps it, catches exceptions (calling `OnError` or logging), stops on cancellation and calls `OnFinished` at the end. |
| <Link id="m-delay" /><code>{"private static IEnumerator Delay() (iterator)"}</code> | Coroutine bodies for `DelayCall`: one runs all queued calls at the end of the frame, the other waits the given seconds then calls back. |
| <Link id="m-delay-2" /><code>{"private static IEnumerator Delay(float delaySeconds, Action callback) (iterator)"}</code> | Coroutine bodies for `DelayCall`: one runs all queued calls at the end of the frame, the other waits the given seconds then calls back. |
| <Link id="m-duodelay" /><code>{"private static IEnumerator DuoDelay(Action callback) (iterator)"}</code> | Coroutine body for `DuoDelayCall`: waits for the end of the frame and the next fixed update, then calls back. |

</details>

## Used in

Members of other types that take, return or hold a `AltaCoroutine`:

[`EffectHandler.unitsToRegen`](/game-api/types/alta-stats-effects/effecthandler#m-unitstoregen), [`RecipePlacer.coroutineHandler`](/game-api/types/alta-crafting/recipeplacer#m-coroutinehandler), [`ChunkSync.running`](/game-api/types/alta-world/chunksync#m-running), [`RepeatCommandModule.running`](/game-api/types/alta-console/repeatcommandmodule#m-running), [`CookingPot.checkingForConversionTemperature`](/game-api/types/alta-crafting/cookingpot#m-checkingforconversiontemperature), [`FruitNinja.spawningRoutine`](/game-api/types/alta-crafting/fruitninja#m-spawningroutine), [`EquipmentCustomizationRoom.playerLeftBoundaryChecker`](/game-api/types/alta-customization/equipmentcustomizationroom#m-playerleftboundarychecker), [`EquipmentCustomizationRoom.poseCheckingDelay`](/game-api/types/alta-customization/equipmentcustomizationroom#m-posecheckingdelay), [`HeatSourceBase.extinguishCoroutine`](/game-api/types/alta-stats-effects/heatsourcebase#m-extinguishcoroutine), [`HeatSourceBase.lightingCoroutine`](/game-api/types/alta-stats-effects/heatsourcebase#m-lightingcoroutine), [`ActiveNest.coroutine`](/game-api/types/alta-intelligence/activenest#m-coroutine), [`AnimatedFloatTransitionAiHook.coroutine`](/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-coroutine), [`StabilizePickupJoint.recreateJointRoutine`](/game-api/types/alta-items/stabilizepickupjoint#m-recreatejointroutine), [`PourableContainer.pouringCoroutine`](/game-api/types/alta-stats-effects/pourablecontainer#m-pouringcoroutine), [`TouchScreenButtonVisual.growRoutine`](/game-api/types/alta-menus/touchscreenbuttonvisual#m-growroutine), [`INetworkEntity.StartCoroutine`](/game-api/types/alta-networking/inetworkentity#m-startcoroutine), [`NetworkColliderGroup.onConnectDelay`](/game-api/types/alta-networking/networkcollidergroup#m-onconnectdelay), [`NetworkEntity.StartCoroutine`](/game-api/types/alta-networking/networkentity#m-startcoroutine), [`HapticWhileHeld.haptic`](/game-api/types/alta-items/hapticwhileheld#m-haptic), [`CombatState.getOutOfCombatCoroutine`](/game-api/types/alta-player/combatstate#m-getoutofcombatcoroutine), [`DeadState.animationCoroutine`](/game-api/types/alta-player/deadstate#m-animationcoroutine), [`DeadState.handleDeathCoroutine`](/game-api/types/alta-player/deadstate#m-handledeathcoroutine), [`DownedState.deathCountdownRoutine`](/game-api/types/alta-player/downedstate#m-deathcountdownroutine), [`ShowNames.NameBoardHandler.delayToActivate`](/game-api/types/alta-player/shownames-nameboardhandler#m-delaytoactivate), [`ToggleEnemyHealthBars.rotationUpdater`](/game-api/types/alta-player/toggleenemyhealthbars#m-rotationupdater), [`DiscreteStatBarVisual.pingCoroutine`](/game-api/types/alta-stats-effects/discretestatbarvisual#m-pingcoroutine), [`StatBarSimple.changeAnimation`](/game-api/types/alta-stats-effects/statbarsimple#m-changeanimation), [`AutoContainerLid.relidCoroutine`](/game-api/types/global-a-b/autocontainerlid#m-relidcoroutine), [`BowString.activeCoroutine`](/game-api/types/global-a-b/bowstring#m-activecoroutine), [`BowStringPullbackInputMethod.timeoutCoroutine`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-timeoutcoroutine), [`BowStringPullbackInputMethod.waitForTime`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-waitfortime), [`ButtonCounter.downButtonPressed`](/game-api/types/global-a-b/buttoncounter#m-downbuttonpressed), [`ButtonCounter.upButtonPressed`](/game-api/types/global-a-b/buttoncounter#m-upbuttonpressed), [`ButtonCounter.waitingForChangeToFinish`](/game-api/types/global-a-b/buttoncounter#m-waitingforchangetofinish), [`CapPickup.checkingPop`](/game-api/types/global-c-d/cappickup#m-checkingpop), [`CharacterRigPoser.posingAnimation`](/game-api/types/global-c-d/characterrigposer#m-posinganimation), [`ColliderGroup.IgnoreCollisionsForDuration`](/game-api/types/global-c-d/collidergroup#m-ignorecollisionsforduration), [`CurveOutput.coroutine`](/game-api/types/global-c-d/curveoutput#m-coroutine), [`DestroyByTime.destroyCoroutine`](/game-api/types/global-c-d/destroybytime#m-destroycoroutine), [`DragTrigger.dragUpdater`](/game-api/types/global-c-d/dragtrigger#m-dragupdater), [`EquipmentRoomAnimator.boundaryAnimation`](/game-api/types/global-e-h/equipmentroomanimator#m-boundaryanimation), [`EruptAreaAttack.attacking`](/game-api/types/global-e-h/eruptareaattack#m-attacking), [`Fuse.fuseCoroutine`](/game-api/types/global-e-h/fuse#m-fusecoroutine), [`GarbageCollectTimer.runGcCollect`](/game-api/types/global-e-h/garbagecollecttimer#m-rungccollect), [`InGameInspector.displayingMessage`](/game-api/types/global-i-l/ingameinspector#m-displayingmessage), [`ItemShooter.coroutine`](/game-api/types/global-i-l/itemshooter#m-coroutine), [`MaterialToggler.running`](/game-api/types/global-m-o/materialtoggler#m-running), [`MRK_ActivationLever.columnAnimation`](/game-api/types/global-m-o/mrk_activationlever#m-columnanimation), [`NetworkingUtilities.StartEntityCoroutine`](/game-api/types/global-m-o/networkingutilities#m-startentitycoroutine), [`ParticleMeshReplacePooledObject.releaseRoutine`](/game-api/types/global-p/particlemeshreplacepooledobject#m-releaseroutine), [`PickupDockingChecker.currentCheckingCoroutine`](/game-api/types/global-p/pickupdockingchecker#m-currentcheckingcoroutine), [`PickupInteractionScaler.scalingAnimation`](/game-api/types/global-p/pickupinteractionscaler#m-scalinganimation), [`PlayerMessageDisplay.messageDisplayCoroutine`](/game-api/types/global-p/playermessagedisplay#m-messagedisplaycoroutine), [`PlayerScreenFader.currentFade`](/game-api/types/global-p/playerscreenfader#m-currentfade), [`PlayerScreenFader.CustomFade`](/game-api/types/global-p/playerscreenfader#m-customfade), [`PlayerScreenFader.FadeBackIn`](/game-api/types/global-p/playerscreenfader#m-fadebackin), [`PlayerScreenFader.FadeToBlack`](/game-api/types/global-p/playerscreenfader#m-fadetoblack), [`PlayerScreenFader.SetFadedAndFadeBackIn`](/game-api/types/global-p/playerscreenfader#m-setfadedandfadebackin), [`PlayerSpecialEffectsController.StartDeathAnimation`](/game-api/types/global-p/playerspecialeffectscontroller#m-startdeathanimation), [`RendererMaterializerHandler.materializationAnimation`](/game-api/types/global-q-r/renderermaterializerhandler#m-materializationanimation) and 7 more.
