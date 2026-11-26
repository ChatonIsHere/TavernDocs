---
title: "PhysicalButton"
description: "A push button driven by physics: the button part slides along one axis and fires Pressed and Released as it passes set depths."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# PhysicalButton

A **class** in `Root.Township`, no namespace.

A push button driven by physics: the button part slides along one axis and fires `Pressed` and `Released` as it passes set depths. Runs locally on whichever machine simulates it; not networked by itself.

- **Listed in** [No namespace: P](/game-api/types/global-p)
- **Inherits or implements** [`Interactable`](/game-api/types/global-i-l/interactable), [`IPreventAtlasing`](/game-api/types/alta-utilities/ipreventatlasing)
- **Attributes** `SelectionBase`
- **Documented in** [Buttons and levers](/game-api/items/buttons-and-levers#physicalbutton)

## Constructors

| Member |
| --- |
| <Link id="m-ctor" /><code>{"PhysicalButton()"}</code> |

## Fields

<details>
<summary>28 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-color" /><code>{"private static readonly int _Color"}</code> | Shader property ID for `_Color`. |
| <Link id="m-activecolor" /><code>{"private Color activeColor"}</code> | Colour when enabled. White by default. |
| <Link id="m-activematerial" /><code>{"private Material activeMaterial"}</code> | Material when enabled, if not changing colour. Defaults to the renderer's material. |
| <Link id="m-androidbuttonrenderer" /><code>{"private Renderer androidButtonRenderer"}</code> | A second button renderer that is also kept out of atlasing. |
| <Link id="m-buttoncollider" /><code>{"private Collider buttonCollider"}</code> | Backing field for `ButtonCollider`. |
| <Link id="m-buttonrenderer" /><code>{"private Renderer buttonRenderer"}</code> | Backing field for `ButtonRenderer`. |
| <Link id="m-buttonrigidbody" /><code>{"private Rigidbody buttonRigidbody"}</code> | Rigidbody on the button collider: the part that slides. |
| <Link id="m-defaultsoundeffectset" /><code>{"private static "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" defaultSoundEffectSet"}</code> | Cache for `DefaultSoundEffectSet`. |
| <Link id="m-delayenable" /><code>{"private float delayEnable"}</code> | Seconds after `Awake` before the button enables. 0.05 by default. |
| <Link id="m-delaystart" /><code>{"private Task delayStart"}</code> | The running `DelayStart` task. |
| <Link id="m-delaytoken" /><code>{"private CancellationTokenSource delayToken"}</code> | Cancels `DelayStart` if `IsEnabled` is set or the button is destroyed first. |
| <Link id="m-freeaxis" /><code>{"private Vector.Axis freeAxis"}</code> | Local axis the button slides along. Y by default. |
| <Link id="m-inactivecolor" /><code>{"private Color inActiveColor"}</code> | Colour when disabled. Grey by default. |
| <Link id="m-inactivematerial" /><code>{"private Material inactiveMaterial"}</code> | Material when disabled, if not changing colour. |
| <Link id="m-isactiveatallscales" /><code>{"private bool isActiveAtAllScales"}</code> | If false, presses only count while the button's scale is over 0.9 (so not while shrunk). |
| <Link id="m-ischangingcoloronenable" /><code>{"private bool isChangingColorOnEnable"}</code> | If true, enabling swaps colours. If false, it swaps materials. |
| <Link id="m-isenabled" /><code>{"private bool isEnabled"}</code> | Backing field for `IsEnabled`. |
| <Link id="m-isphysicallypressed" /><code>{"private bool isPhysicallyPressed"}</code> | Whether the button is currently pushed past the press threshold. |
| <Link id="m-isplayingsounds" /><code>{"private bool isPlayingSounds"}</code> | Plays the button sound on press and release. True by default. |
| <Link id="m-istestpress" /><code>{"private bool isTestPress"}</code> | Editor button that fires a press. |
| <Link id="m-istestrelease" /><code>{"private bool isTestRelease"}</code> | Editor button that fires a release. |
| <Link id="m-maxdepth" /><code>{"private float maxDepth"}</code> | Fully out position along the axis. 0.67 by default. |
| <Link id="m-mindepth" /><code>{"private float minDepth"}</code> | Fully in position along the axis. 0.31 by default. |
| <Link id="m-pressed" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" pressed"}</code> | Backing event for `Pressed`. |
| <Link id="m-pressthreshold" /><code>{"private float pressThreshold"}</code> | Progress (0 out, 1 fully in) past which the button presses. 0.8 by default. |
| <Link id="m-propertyblock" /><code>{"private MaterialPropertyBlock propertyBlock"}</code> | Property block used to set the colour. |
| <Link id="m-released" /><code>{"private "}<Link to="/game-api/types/global-a-b/altaevent">{"AltaEvent"}</Link>{" released"}</code> | Backing event for `Released`. |
| <Link id="m-releasethreshold" /><code>{"private float releaseThreshold"}</code> | Progress below which the button releases. 0.5 by default. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-buttoncollider-2" /><code>{"Collider ButtonCollider { get; }"}</code> | The moving part's collider. Its rigidbody is the part that slides. |
| <Link id="m-buttonrenderer-2" /><code>{"Renderer ButtonRenderer { get; }"}</code> | Renderer recoloured (or given another material) when the button is enabled or disabled. |
| <Link id="m-isenabled-2" /><code>{"bool IsEnabled { get; set; }"}</code> | Whether the button can be pressed. Disabling it freezes the moving part, changes its look and stops presses. |
| <Link id="m-state" /><code>{"bool State { get; private set; }"}</code> | True between a press and the following release. |

<details>
<summary>1 private and internal property</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-defaultsoundeffectset-2" /><code>{"private static "}<Link to="/game-api/types/global-s/soundeffectset">{"SoundEffectSet"}</Link>{" DefaultSoundEffectSet { get; }"}</code> | The global button pressed sound, resolved once and cached. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-pressed-2" /><code>{"event Action Pressed"}</code> | Raised when the button is pushed past the press threshold while enabled and not already on. |
| <Link id="m-released-2" /><code>{"event Action Released"}</code> | Raised when the button returns past the release threshold with no one touching it. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-setstateinternal" /><code>{"void SetStateInternal(bool state)"}</code> | Sets `State` without firing events or sounds. |
| <Link id="m-onvalidate" /><code>{"protected override void OnValidate()"}</code> | Editor: keeps the depth range valid and runs the test press or release buttons. |

<details>
<summary>14 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Finds the button rigidbody, disables the button and starts `DelayStart` to enable it shortly after. |
| <Link id="m-changevisuals" /><code>{"private void ChangeVisuals(bool isActive)"}</code> | Sets the renderer to the active or inactive colour (through a property block) or material. |
| <Link id="m-delaystart-2" /><code>{"private async Task DelayStart()"}</code> | Waits `delayEnable` seconds, then enables the button unless cancelled. |
| <Link id="m-fakepress" /><code>{"private void FakePress("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable = null, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> | When a hand starts interacting, pushes the button in to `minDepth` on local Z and makes it kinematic. |
| <Link id="m-fakerelease" /><code>{"private void FakeRelease("}<Link to="/game-api/types/global-i-l/interactable">{"Interactable"}</Link>{" interactable = null, "}<Link to="/game-api/types/global-i-l/interactor">{"Interactor"}</Link>{" interactor = null)"}</code> | When the last hand lets go, moves the button partly out and makes it non-kinematic again. |
| <Link id="m-getclampedvector" /><code>{"private Vector3 GetClampedVector(Vector3 original, out float progress)"}</code> | Clamps a position to the depth range on the free axis (other axes 0) and returns progress, 1 at `minDepth`. |
| <Link id="m-ispreventatlasing" /><code>{"private bool Alta.Utilities.Atlas.IPreventAtlasing.IsPreventAtlasing(Renderer renderer)"}</code> | Keeps the button renderers out of texture atlasing, so their colour or material can change. |
| <Link id="m-lateupdate" /><code>{"private void LateUpdate()"}</code> | Clamps the button along its axis and fires press or release as it crosses the thresholds. Skips buttons scaled under 0.9. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Cancels a pending `DelayStart`. |
| <Link id="m-ondisable" /><code>{"private void OnDisable()"}</code> | Unhooks `FakePress` and `FakeRelease`. |
| <Link id="m-ondrawgizmos" /><code>{"private void OnDrawGizmos()"}</code> | Editor: draws the button's travel line. |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | Puts the button at `minDepth`, hooks `FakePress` and `FakeRelease` to interactions and marks it physically pressed. |
| <Link id="m-onpressed" /><code>{"private void OnPressed()"}</code> | Sets `State`, raises `Pressed` and plays the button sound if `isPlayingSounds`. |
| <Link id="m-onreleased" /><code>{"private void OnReleased()"}</code> | Clears `State`, raises `Released` and plays the button sound if `isPlayingSounds`. |

</details>

## Used in

Members of other types that take, return or hold a `PhysicalButton`:

[`AccessibilityFeaturesBoard.acceptButton`](/game-api/types/global-a-b/accessibilityfeaturesboard#m-acceptbutton), [`AccessibilityFeaturesBoard.closeButton`](/game-api/types/global-a-b/accessibilityfeaturesboard#m-closebutton), [`AccessibilityFeaturesBoard.declineButton`](/game-api/types/global-a-b/accessibilityfeaturesboard#m-declinebutton), [`ButtonEnumMenuSetting.next`](/game-api/types/alta-menus/buttonenummenusetting#m-next), [`ButtonEnumMenuSetting.previous`](/game-api/types/alta-menus/buttonenummenusetting#m-previous), [`TradeConfiguration.coinDown`](/game-api/types/alta-crafting/tradeconfiguration#m-coindown), [`TradeConfiguration.coinUp`](/game-api/types/alta-crafting/tradeconfiguration#m-coinup), [`TradeConfiguration.itemDown`](/game-api/types/alta-crafting/tradeconfiguration#m-itemdown), [`TradeConfiguration.itemUp`](/game-api/types/alta-crafting/tradeconfiguration#m-itemup), [`RepairBoxDevControlPanel.buildButton`](/game-api/types/alta-menus/repairboxdevcontrolpanel#m-buildbutton), [`RepairBoxDevControlPanel.destroyButton`](/game-api/types/alta-menus/repairboxdevcontrolpanel#m-destroybutton), [`ButtonCounter.down`](/game-api/types/global-a-b/buttoncounter#m-down), [`ButtonCounter.up`](/game-api/types/global-a-b/buttoncounter#m-up), [`LabelledButtonWrapper.button`](/game-api/types/global-i-l/labelledbuttonwrapper#m-button), [`LabelledButtonWrapper.Button`](/game-api/types/global-i-l/labelledbuttonwrapper#m-button-2), [`TutorialPromptBoard.joinTutorialButton`](/game-api/types/global-t-x/tutorialpromptboard#m-jointutorialbutton), [`TutorialPromptBoard.skipTutorialButton`](/game-api/types/global-t-x/tutorialpromptboard#m-skiptutorialbutton).
