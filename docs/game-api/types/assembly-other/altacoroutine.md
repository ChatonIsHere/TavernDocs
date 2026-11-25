---
title: "AltaCoroutine"
description: "A wrapper around a Unity coroutine that catches exceptions and tells you how it ended."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaCoroutine

A **class** in `Alta.Coroutines`, no namespace.

A wrapper around a Unity coroutine that catches exceptions and tells you how it ended.

- **Listed in** [Other Alta assemblies](/game-api/types/assembly-other)
- **Derived types** [`EditorCoroutine`](/game-api/types/assembly-other/editorcoroutine)
- **Documented in** [Threads, coroutines and the timeline](/game-api/console-and-utilities/threads-coroutines-and-timeline#altacoroutine), [Alta assemblies](/game-api/console-and-utilities/alta-assemblies)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaCoroutine()"}</code> |  |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-cancellation" /><code>{"private CancellationToken cancellation"}</code> |  |
| <Link id="m-delaycalls" /><code>{"private static List<Action> delayCalls"}</code> |  |
| <Link id="m-delaycallsswap" /><code>{"private static List<Action> delayCallsSwap"}</code> |  |
| <Link id="m-logger" /><code>{"private static Logger logger"}</code> |  |

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-coroutine" /><code>{"Coroutine Coroutine { get; private set; }"}</code> |  |
| <Link id="m-isinitialized" /><code>{"static bool IsInitialized { get; }"}</code> |  |
| <Link id="m-onerror" /><code>{"Action<Exception> OnError { get; set; }"}</code> |  |
| <Link id="m-onfinished" /><code>{"Action OnFinished { get; set; }"}</code> |  |
| <Link id="m-onstopped" /><code>{"Action OnStopped { get; set; }"}</code> |  |
| <Link id="m-state" /><code><Link to="/game-api/types/assembly-other/altacoroutinestate">{"AltaCoroutineState"}</Link>{" State { get; protected set; }"}</code> |  |
| <Link id="m-altacoroutinehandler" /><code>{"private static "}<Link to="/game-api/types/assembly-other/altacoroutinehandler">{"AltaCoroutineHandler"}</Link>{" "}<Link to="/game-api/types/assembly-other/altacoroutinehandler">{"AltaCoroutineHandler"}</Link>{" { get; }"}</code> |  |
| <Link id="m-enumerator" /><code>{"protected IEnumerator Enumerator { get; set; }"}</code> |  |
| <Link id="m-targetobject" /><code>{"private MonoBehaviour TargetObject { get; set; }"}</code> |  |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-create" /><code>{"static "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Create(IEnumerator enumerator, MonoBehaviour targetObject = null, CancellationToken cancellation = null)"}</code> |  |
| <Link id="m-delaycall" /><code>{"static void DelayCall(Action call)"}</code> |  |
| <Link id="m-delaycall-2" /><code>{"static void DelayCall(float delaySeconds, Action call)"}</code> |  |
| <Link id="m-duodelaycall" /><code>{"static void DuoDelayCall(Action call)"}</code> |  |
| <Link id="m-gettask" /><code>{"Task<bool> GetTask()"}</code> |  |
| <Link id="m-start" /><code>{"static "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Start(IEnumerator enumerator, MonoBehaviour targetObject = null, CancellationToken cancellation = null)"}</code> |  |
| <Link id="m-start-2" /><code>{"virtual "}<Link to="/game-api/types/assembly-other/altacoroutine">{"AltaCoroutine"}</Link>{" Start()"}</code> |  |
| <Link id="m-stop" /><code>{"virtual void Stop()"}</code> |  |
| <Link id="m-coroutinehandler" /><code>{"private IEnumerator CoroutineHandler(IEnumerator enumerator) (iterator)"}</code> |  |
| <Link id="m-delay" /><code>{"private static IEnumerator Delay() (iterator)"}</code> |  |
| <Link id="m-delay-2" /><code>{"private static IEnumerator Delay(float delaySeconds, Action callback) (iterator)"}</code> |  |
| <Link id="m-duodelay" /><code>{"private static IEnumerator DuoDelay(Action callback) (iterator)"}</code> |  |

## Used in

Members of other types that take, return or hold a `AltaCoroutine`:

[`EffectHandler.unitsToRegen`](/game-api/types/alta-stats-effects/effecthandler#m-unitstoregen), [`RecipePlacer.coroutineHandler`](/game-api/types/alta-crafting/recipeplacer#m-coroutinehandler), [`ChunkSync.running`](/game-api/types/alta-world/chunksync#m-running), [`RepeatCommandModule.running`](/game-api/types/alta-console/repeatcommandmodule#m-running), [`CookingPot.checkingForConversionTemperature`](/game-api/types/alta-crafting/cookingpot#m-checkingforconversiontemperature), [`FruitNinja.spawningRoutine`](/game-api/types/alta-crafting/fruitninja#m-spawningroutine), [`EquipmentCustomizationRoom.playerLeftBoundaryChecker`](/game-api/types/alta-customization/equipmentcustomizationroom#m-playerleftboundarychecker), [`EquipmentCustomizationRoom.poseCheckingDelay`](/game-api/types/alta-customization/equipmentcustomizationroom#m-posecheckingdelay), [`HeatSourceBase.extinguishCoroutine`](/game-api/types/alta-stats-effects/heatsourcebase#m-extinguishcoroutine), [`HeatSourceBase.lightingCoroutine`](/game-api/types/alta-stats-effects/heatsourcebase#m-lightingcoroutine), [`ActiveNest.coroutine`](/game-api/types/alta-intelligence/activenest#m-coroutine), [`AnimatedFloatTransitionAiHook.coroutine`](/game-api/types/alta-intelligence/animatedfloattransitionaihook#m-coroutine), [`StabilizePickupJoint.recreateJointRoutine`](/game-api/types/alta-items/stabilizepickupjoint#m-recreatejointroutine), [`PourableContainer.pouringCoroutine`](/game-api/types/alta-stats-effects/pourablecontainer#m-pouringcoroutine), [`TouchScreenButtonVisual.growRoutine`](/game-api/types/alta-menus/touchscreenbuttonvisual#m-growroutine), [`INetworkEntity.StartCoroutine`](/game-api/types/alta-networking/inetworkentity#m-startcoroutine), [`NetworkColliderGroup.onConnectDelay`](/game-api/types/alta-networking/networkcollidergroup#m-onconnectdelay), [`NetworkEntity.StartCoroutine`](/game-api/types/alta-networking/networkentity#m-startcoroutine), [`HapticWhileHeld.haptic`](/game-api/types/alta-items/hapticwhileheld#m-haptic), [`CombatState.getOutOfCombatCoroutine`](/game-api/types/alta-player/combatstate#m-getoutofcombatcoroutine), [`DeadState.animationCoroutine`](/game-api/types/alta-player/deadstate#m-animationcoroutine), [`DeadState.handleDeathCoroutine`](/game-api/types/alta-player/deadstate#m-handledeathcoroutine), [`DownedState.deathCountdownRoutine`](/game-api/types/alta-player/downedstate#m-deathcountdownroutine), [`ShowNames.NameBoardHandler.delayToActivate`](/game-api/types/alta-player/shownames-nameboardhandler#m-delaytoactivate), [`ToggleEnemyHealthBars.rotationUpdater`](/game-api/types/alta-player/toggleenemyhealthbars#m-rotationupdater), [`DiscreteStatBarVisual.pingCoroutine`](/game-api/types/alta-stats-effects/discretestatbarvisual#m-pingcoroutine), [`StatBarSimple.changeAnimation`](/game-api/types/alta-stats-effects/statbarsimple#m-changeanimation), [`AutoContainerLid.relidCoroutine`](/game-api/types/global-a-b/autocontainerlid#m-relidcoroutine), [`BowString.activeCoroutine`](/game-api/types/global-a-b/bowstring#m-activecoroutine), [`BowStringPullbackInputMethod.timeoutCoroutine`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-timeoutcoroutine), [`BowStringPullbackInputMethod.waitForTime`](/game-api/types/global-a-b/bowstringpullbackinputmethod#m-waitfortime), [`ButtonCounter.downButtonPressed`](/game-api/types/global-a-b/buttoncounter#m-downbuttonpressed), [`ButtonCounter.upButtonPressed`](/game-api/types/global-a-b/buttoncounter#m-upbuttonpressed), [`ButtonCounter.waitingForChangeToFinish`](/game-api/types/global-a-b/buttoncounter#m-waitingforchangetofinish), [`CapPickup.checkingPop`](/game-api/types/global-c-d/cappickup#m-checkingpop), [`CharacterRigPoser.posingAnimation`](/game-api/types/global-c-d/characterrigposer#m-posinganimation), [`ColliderGroup.IgnoreCollisionsForDuration`](/game-api/types/global-c-d/collidergroup#m-ignorecollisionsforduration), [`CurveOutput.coroutine`](/game-api/types/global-c-d/curveoutput#m-coroutine), [`DestroyByTime.destroyCoroutine`](/game-api/types/global-c-d/destroybytime#m-destroycoroutine), [`DragTrigger.dragUpdater`](/game-api/types/global-c-d/dragtrigger#m-dragupdater), [`EquipmentRoomAnimator.boundaryAnimation`](/game-api/types/global-e-h/equipmentroomanimator#m-boundaryanimation), [`EruptAreaAttack.attacking`](/game-api/types/global-e-h/eruptareaattack#m-attacking), [`Fuse.fuseCoroutine`](/game-api/types/global-e-h/fuse#m-fusecoroutine), [`GarbageCollectTimer.runGcCollect`](/game-api/types/global-e-h/garbagecollecttimer#m-rungccollect), [`InGameInspector.displayingMessage`](/game-api/types/global-i-l/ingameinspector#m-displayingmessage), [`ItemShooter.coroutine`](/game-api/types/global-i-l/itemshooter#m-coroutine), [`MaterialToggler.running`](/game-api/types/global-m-o/materialtoggler#m-running), [`MRK_ActivationLever.columnAnimation`](/game-api/types/global-m-o/mrk_activationlever#m-columnanimation), [`NetworkingUtilities.StartEntityCoroutine`](/game-api/types/global-m-o/networkingutilities#m-startentitycoroutine), [`ParticleMeshReplacePooledObject.releaseRoutine`](/game-api/types/global-p/particlemeshreplacepooledobject#m-releaseroutine), [`PickupDockingChecker.currentCheckingCoroutine`](/game-api/types/global-p/pickupdockingchecker#m-currentcheckingcoroutine), [`PickupInteractionScaler.scalingAnimation`](/game-api/types/global-p/pickupinteractionscaler#m-scalinganimation), [`PlayerMessageDisplay.messageDisplayCoroutine`](/game-api/types/global-p/playermessagedisplay#m-messagedisplaycoroutine), [`PlayerScreenFader.currentFade`](/game-api/types/global-p/playerscreenfader#m-currentfade), [`PlayerScreenFader.CustomFade`](/game-api/types/global-p/playerscreenfader#m-customfade), [`PlayerScreenFader.FadeBackIn`](/game-api/types/global-p/playerscreenfader#m-fadebackin), [`PlayerScreenFader.FadeToBlack`](/game-api/types/global-p/playerscreenfader#m-fadetoblack), [`PlayerScreenFader.SetFadedAndFadeBackIn`](/game-api/types/global-p/playerscreenfader#m-setfadedandfadebackin), [`PlayerSpecialEffectsController.StartDeathAnimation`](/game-api/types/global-p/playerspecialeffectscontroller#m-startdeathanimation), [`RendererMaterializerHandler.materializationAnimation`](/game-api/types/global-q-r/renderermaterializerhandler#m-materializationanimation) and 7 more.
