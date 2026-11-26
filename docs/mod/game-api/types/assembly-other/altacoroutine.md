---
title: "AltaCoroutine"
description: "A wrapper around a Unity coroutine that tracks its state, catches exceptions and supports cancellation and awaiting."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaCoroutine

A **class** in `Alta.Coroutines`, the global namespace.

A wrapper around a Unity coroutine that tracks its state, catches exceptions and supports cancellation and awaiting. Runs on the given MonoBehaviour, or on the global `AltaCoroutineHandler` singleton if none is given.

- **Listed in** [Other Alta assemblies](/mod/game-api/types/assembly-other)
- **Derived types** [`EditorCoroutine`](/mod/game-api/types/assembly-other/editorcoroutine)
- **Documented in** [Threads, coroutines and the timeline](/mod/game-api/console-and-utilities/threads-coroutines-and-timeline#altacoroutine), [Alta assemblies](/mod/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaCoroutine()"}</code> | <span className="api-desc">Creates an `AltaCoroutine` with default values.</span> |

## Fields

<details className="api-private">
<summary>4 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-cancellation" /><code>{"private CancellationToken cancellation"}</code> | <span className="api-desc">Token checked after each step; when cancelled the coroutine calls `Stop`.</span> |
| <Link id="m-delaycalls" /><code>{"private static List<Action> delayCalls"}</code> | <span className="api-desc">Calls queued by `DelayCall` for the end of this frame.</span> |
| <Link id="m-delaycallsswap" /><code>{"private static List<Action> delayCallsSwap"}</code> | <span className="api-desc">Second list swapped with `delayCalls` while queued calls run, so calls added meanwhile wait for the next frame.</span> |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"Coroutine Coroutine { get; private set; }"}</code> | <span className="api-desc">The underlying Unity coroutine once started.</span> |
| <Link id="m-isinitialized" /><code>{"static bool IsInitialized { get; }"}</code> | <span className="api-desc">Static: true once the global `AltaCoroutineHandler` exists.</span> |
| <Link id="m-onerror" /><code>{"Action<Exception> OnError { get; set; }"}</code> | <span className="api-desc">Called with the exception if the coroutine throws. When unset, the error is logged instead.</span> |
| <Link id="m-onfinished" /><code>{"Action OnFinished { get; set; }"}</code> | <span className="api-desc">Called when the enumerator runs to the end.</span> |
| <Link id="m-onstopped" /><code>{"Action OnStopped { get; set; }"}</code> | <span className="api-desc">Called when the coroutine is stopped or its cancellation token fires.</span> |
| <Link id="m-state" /><code><Link to="/mod/game-api/types/assembly-other/altacoroutinestate">{"AltaCoroutineState"}</Link>{" State { get; protected set; }"}</code> | <span className="api-desc">Running, finished, stopped or error.</span> |
| <Link id="m-enumerator" /><code>{"protected IEnumerator Enumerator { get; set; }"}</code> | <span className="api-desc">The enumerator the coroutine steps through.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-altacoroutinehandler" /><code>{"private static "}<Link to="/mod/game-api/types/assembly-other/altacoroutinehandler">{"AltaCoroutineHandler"}</Link>{" "}<Link to="/mod/game-api/types/assembly-other/altacoroutinehandler">{"AltaCoroutineHandler"}</Link>{" { get; }"}</code> | <span className="api-desc">The `AltaCoroutineHandler` singleton that runs coroutines with no target object.</span> |
| <Link id="m-targetobject" /><code>{"private MonoBehaviour TargetObject { get; set; }"}</code> | <span className="api-desc">The behaviour the Unity coroutine runs on; defaults to the handler singleton. If it is destroyed, the coroutine stops with it.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Create(IEnumerator enumerator, MonoBehaviour targetObject = null, CancellationToken cancellation = null)"}</code> | <span className="api-desc">Static: makes a coroutine without starting it. Call `Start` on the result later.</span> |
| <Link id="m-delaycall" /><code>{"static void DelayCall(Action call)"}</code> | <span className="api-desc">Static: runs an action at the end of the current frame (all such calls are batched), or after a number of seconds with the delay overload.</span> |
| <Link id="m-delaycall-2" /><code>{"static void DelayCall(float delaySeconds, Action call)"}</code> | <span className="api-desc">Static: runs an action at the end of the current frame (all such calls are batched), or after a number of seconds with the delay overload.</span> |
| <Link id="m-duodelaycall" /><code>{"static void DuoDelayCall(Action call)"}</code> | <span className="api-desc">Static: runs an action after the end of this frame and the next fixed update.</span> |
| <Link id="m-gettask" /><code>{"Task<bool> GetTask()"}</code> | <span className="api-desc">Returns a task that completes true when finished, false when stopped, or faults on an error. Adding it also replaces the default error log.</span> |
| <Link id="m-start" /><code>{"static "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Start(IEnumerator enumerator, MonoBehaviour targetObject = null, CancellationToken cancellation = null)"}</code> | <span className="api-desc">Static version creates and starts a coroutine. The instance version starts it, warning if it is already running.</span> |
| <Link id="m-start-2" /><code>{"virtual "}<Link to="/mod/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Start()"}</code> | <span className="api-desc">Static version creates and starts a coroutine. The instance version starts it, warning if it is already running.</span> |
| <Link id="m-stop" /><code>{"virtual void Stop()"}</code> | <span className="api-desc">Stops a running coroutine and calls `OnStopped`.</span> |

<details className="api-private">
<summary>4 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-coroutinehandler" /><code>{"private IEnumerator CoroutineHandler(IEnumerator enumerator) (iterator)"}</code> | <span className="api-desc">Wraps the enumerator: steps it, catches exceptions (calling `OnError` or logging), stops on cancellation and calls `OnFinished` at the end.</span> |
| <Link id="m-delay" /><code>{"private static IEnumerator Delay() (iterator)"}</code> | <span className="api-desc">Coroutine bodies for `DelayCall`: one runs all queued calls at the end of the frame, the other waits the given seconds then calls back.</span> |
| <Link id="m-delay-2" /><code>{"private static IEnumerator Delay(float delaySeconds, Action callback) (iterator)"}</code> | <span className="api-desc">Coroutine bodies for `DelayCall`: one runs all queued calls at the end of the frame, the other waits the given seconds then calls back.</span> |
| <Link id="m-duodelay" /><code>{"private static IEnumerator DuoDelay(Action callback) (iterator)"}</code> | <span className="api-desc">Coroutine body for `DuoDelayCall`: waits for the end of the frame and the next fixed update, then calls back.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AltaCoroutine`:

<div className="api-used-in">

[`EffectHandler.unitsToRegen`](/mod/game-api/types/alta-stats-effects/effecthandler#m-unitstoregen), [`RecipePlacer.coroutineHandler`](/mod/game-api/types/alta-crafting/recipeplacer#m-coroutinehandler), [`ChunkSync.running`](/mod/game-api/types/alta-world/chunksync#m-running), [`RepeatCommandModule.running`](/mod/game-api/types/alta-console/repeatcommandmodule#m-running), [`CookingPot.checkingForConversionTemperature`](/mod/game-api/types/alta-crafting/cookingpot#m-checkingforconversiontemperature), [`FruitNinja.spawningRoutine`](/mod/game-api/types/alta-crafting/fruitninja#m-spawningroutine), [`EquipmentCustomizationRoom.playerLeftBoundaryChecker`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-playerleftboundarychecker), [`EquipmentCustomizationRoom.poseCheckingDelay`](/mod/game-api/types/alta-customization/equipmentcustomizationroom#m-posecheckingdelay), [`HeatSourceBase.extinguishCoroutine`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-extinguishcoroutine), [`HeatSourceBase.lightingCoroutine`](/mod/game-api/types/alta-stats-effects/heatsourcebase#m-lightingcoroutine), [`ActiveNest.coroutine`](/mod/game-api/types/alta-intelligence/activenest#m-coroutine), [`AnimatedFloatTransitionAiHook.coroutine`](/mod/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-coroutine), [`StabilizePickupJoint.recreateJointRoutine`](/mod/game-api/types/alta-items/stabilizepickupjoint#m-recreatejointroutine), [`PourableContainer.pouringCoroutine`](/mod/game-api/types/alta-stats-effects/pourablecontainer#m-pouringcoroutine), [`TouchScreenButtonVisual.growRoutine`](/mod/game-api/types/alta-menus/touchscreenbuttonvisual#m-growroutine), [`INetworkEntity.StartCoroutine`](/mod/game-api/types/alta-networking/inetworkentity#m-startcoroutine), [`NetworkColliderGroup.onConnectDelay`](/mod/game-api/types/alta-networking/networkcollidergroup#m-onconnectdelay), [`NetworkEntity.StartCoroutine`](/mod/game-api/types/alta-networking/networkentity#m-startcoroutine), [`HapticWhileHeld.haptic`](/mod/game-api/types/alta-items/hapticwhileheld#m-haptic), [`CombatState.getOutOfCombatCoroutine`](/mod/game-api/types/alta-player/combatstate#m-getoutofcombatcoroutine), [`DeadState.animationCoroutine`](/mod/game-api/types/alta-player/deadstate#m-animationcoroutine), [`DeadState.handleDeathCoroutine`](/mod/game-api/types/alta-player/deadstate#m-handledeathcoroutine), [`DownedState.deathCountdownRoutine`](/mod/game-api/types/alta-player/downedstate#m-deathcountdownroutine), [`ShowNames.NameBoardHandler.delayToActivate`](/mod/game-api/types/alta-player/shownames-nameboardhandler#m-delaytoactivate), [`ToggleEnemyHealthBars.rotationUpdater`](/mod/game-api/types/alta-player/toggleenemyhealthbars#m-rotationupdater), [`DiscreteStatBarVisual.pingCoroutine`](/mod/game-api/types/alta-stats-effects/discretestatbarvisual#m-pingcoroutine), [`StatBarSimple.changeAnimation`](/mod/game-api/types/alta-stats-effects/statbarsimple#m-changeanimation), [`AutoContainerLid.relidCoroutine`](/mod/game-api/types/global-a-b/autocontainerlid#m-relidcoroutine), [`BowString.activeCoroutine`](/mod/game-api/types/global-a-b/bowstring#m-activecoroutine), [`BowStringPullbackInputMethod.timeoutCoroutine`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-timeoutcoroutine), [`BowStringPullbackInputMethod.waitForTime`](/mod/game-api/types/global-a-b/bowstringpullbackinputmethod#m-waitfortime), [`ButtonCounter.downButtonPressed`](/mod/game-api/types/global-a-b/buttoncounter#m-downbuttonpressed), [`ButtonCounter.upButtonPressed`](/mod/game-api/types/global-a-b/buttoncounter#m-upbuttonpressed), [`ButtonCounter.waitingForChangeToFinish`](/mod/game-api/types/global-a-b/buttoncounter#m-waitingforchangetofinish), [`CapPickup.checkingPop`](/mod/game-api/types/global-c-d/cappickup#m-checkingpop), [`CharacterRigPoser.posingAnimation`](/mod/game-api/types/global-c-d/characterrigposer#m-posinganimation), [`ColliderGroup.IgnoreCollisionsForDuration`](/mod/game-api/types/global-c-d/collidergroup#m-ignorecollisionsforduration), [`CurveOutput.coroutine`](/mod/game-api/types/global-c-d/curveoutput#m-coroutine), [`DestroyByTime.destroyCoroutine`](/mod/game-api/types/global-c-d/destroybytime#m-destroycoroutine), [`DragTrigger.dragUpdater`](/mod/game-api/types/global-c-d/dragtrigger#m-dragupdater), [`EquipmentRoomAnimator.boundaryAnimation`](/mod/game-api/types/global-e-h/equipmentroomanimator#m-boundaryanimation), [`EruptAreaAttack.attacking`](/mod/game-api/types/global-e-h/eruptareaattack#m-attacking), [`Fuse.fuseCoroutine`](/mod/game-api/types/global-e-h/fuse#m-fusecoroutine), [`GarbageCollectTimer.runGcCollect`](/mod/game-api/types/global-e-h/garbagecollecttimer#m-rungccollect), [`InGameInspector.displayingMessage`](/mod/game-api/types/global-i-l/ingameinspector#m-displayingmessage), [`ItemShooter.coroutine`](/mod/game-api/types/global-i-l/itemshooter#m-coroutine), [`MaterialToggler.running`](/mod/game-api/types/global-m-o/materialtoggler#m-running), [`MRK_ActivationLever.columnAnimation`](/mod/game-api/types/global-m-o/mrk_activationlever#m-columnanimation), [`NetworkingUtilities.StartEntityCoroutine`](/mod/game-api/types/global-m-o/networkingutilities#m-startentitycoroutine), [`ParticleMeshReplacePooledObject.releaseRoutine`](/mod/game-api/types/global-p/particlemeshreplacepooledobject#m-releaseroutine), [`PickupDockingChecker.currentCheckingCoroutine`](/mod/game-api/types/global-p/pickupdockingchecker#m-currentcheckingcoroutine), [`PickupInteractionScaler.scalingAnimation`](/mod/game-api/types/global-p/pickupinteractionscaler#m-scalinganimation), [`PlayerMessageDisplay.messageDisplayCoroutine`](/mod/game-api/types/global-p/playermessagedisplay#m-messagedisplaycoroutine), [`PlayerScreenFader.currentFade`](/mod/game-api/types/global-p/playerscreenfader#m-currentfade), [`PlayerScreenFader.CustomFade`](/mod/game-api/types/global-p/playerscreenfader#m-customfade), [`PlayerScreenFader.FadeBackIn`](/mod/game-api/types/global-p/playerscreenfader#m-fadebackin), [`PlayerScreenFader.FadeToBlack`](/mod/game-api/types/global-p/playerscreenfader#m-fadetoblack), [`PlayerScreenFader.SetFadedAndFadeBackIn`](/mod/game-api/types/global-p/playerscreenfader#m-setfadedandfadebackin), [`PlayerSpecialEffectsController.StartDeathAnimation`](/mod/game-api/types/global-p/playerspecialeffectscontroller#m-startdeathanimation), [`RendererMaterializerHandler.materializationAnimation`](/mod/game-api/types/global-q-r/renderermaterializerhandler#m-materializationanimation) and 7 more.

</div>
