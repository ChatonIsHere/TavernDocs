---
title: "TouchScreenKeyboard"
description: "The in-world virtual keyboard players type on with their fingers."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# TouchScreenKeyboard

A **class** in `Root.Township`, the global namespace.

The in-world virtual keyboard players type on with their fingers. Client only; one shared instance, moved into place with `Get` for whichever text field (`IUseVirtualKeyboard`) is using it.

- **Listed in** [Global namespace: T to X](/mod/game-api/types/global-t-x)
- **Inherits or implements** [`TouchScreenMenuBase`](/mod/game-api/types/global-t-x/touchscreenmenubase)
- **Nested types** [`KeyBoardEdgesInfo`](/mod/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo), [`OutputEvent`](/mod/game-api/types/global-t-x/touchscreenkeyboard-outputevent)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"TouchScreenKeyboard()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-setupsecretkey" /><code>{"bool setupSecretKey"}</code> | <span className="api-desc">If set, an extra secret toggle key is added to the last row.</span> |

<details className="api-private">
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmultikeyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" androidMultiKeyboardSetup"}</code> | <span className="api-desc">Android keyboard set. Not used in this build, see `MultiKeyboardSetup`.</span> |
| <Link id="m-androidsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" androidSetup"}</code> | <span className="api-desc">Android single layout. Not read in this build.</span> |
| <Link id="m-autocomplete" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/autocomplete">{"AutoComplete"}</Link>{" autoComplete"}</code> | <span className="api-desc">The autocomplete helper, made by `ApplyNewAutoCompletionSource`.</span> |
| <Link id="m-backspacedelaystart" /><code>{"private float backspaceDelayStart"}</code> | <span className="api-desc">Backing field for `BackspaceDelayStart`. Default 1.</span> |
| <Link id="m-backspacesingleletterduration" /><code>{"private float backspaceSingleLetterDuration"}</code> | <span className="api-desc">Backing field for `BackspaceSingleLetterDuration`. Default 3.</span> |
| <Link id="m-continuousbackspacespeed" /><code>{"private float continuousBackspaceSpeed"}</code> | <span className="api-desc">Backing field for `ContinuousBackspaceSpeed`. Default 0.2.</span> |
| <Link id="m-currentkeyboardindex" /><code>{"private int currentKeyboardIndex"}</code> | <span className="api-desc">Index of the layout in use within the keyboard set.</span> |
| <Link id="m-dimensionsoffset" /><code>{"private Vector2 dimensionsOffset"}</code> | <span className="api-desc">Centre offset of the touch area, recomputed by `ResetDimensions`.</span> |
| <Link id="m-doubleshifttimer" /><code>{"private float doubleShiftTimer"}</code> | <span className="api-desc">Seconds within which a second shift press locks shift. Default 0.5.</span> |
| <Link id="m-empty" /><code>{"private const string empty"}</code> | <span className="api-desc">Empty string constant.</span> |
| <Link id="m-functionkeys" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/functionkeydefinition">{"FunctionKeyDefinition"}</Link>{"[] functionKeys"}</code> | <span className="api-desc">Keys with their own actions; mapped into `MappedFunctionKeys` in `Awake`.</span> |
| <Link id="m-hasdoneautocompletesetup" /><code>{"private bool hasDoneAutoCompleteSetup"}</code> | <span className="api-desc">True once `AutoCompleteSetup` has run.</span> |
| <Link id="m-indextokeycode" /><code>{"private readonly Dictionary<int, KeyCode> indexToKeyCode"}</code> | <span className="api-desc">Maps suggestion slot 0 to 3 to key codes F5 to F8.</span> |
| <Link id="m-input" /><code>{"private string input"}</code> | <span className="api-desc">Backing field for `Input`.</span> |
| <Link id="m-instantiatedbuttons" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> instantiatedButtons"}</code> | <span className="api-desc">Backing list for `InstantiatedButtons`, the spawned keys.</span> |
| <Link id="m-isshiftlocked" /><code>{"private bool isShiftLocked"}</code> | <span className="api-desc">True while shift is locked by a double press.</span> |
| <Link id="m-keyboardedgesinfo" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo">{"TouchScreenKeyboard.KeyBoardEdgesInfo"}</Link>{" keyboardEdgesInfo"}</code> | <span className="api-desc">Row edge keys and spacing for the current layout, used to place extra keys.</span> |
| <Link id="m-keyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" keyPrefab"}</code> | <span className="api-desc">Prefab for every key.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-originoffset" /><code>{"private Vector2 originOffset"}</code> | <span className="api-desc">Offset added to every key position.</span> |
| <Link id="m-output" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard-outputevent">{"TouchScreenKeyboard.OutputEvent"}</Link>{" output"}</code> | <span className="api-desc">Inspector event raised with the input whenever it changes.</span> |
| <Link id="m-pcmultikeyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" pcMultiKeyboardSetup"}</code> | <span className="api-desc">The keyboard set `MultiKeyboardSetup` returns.</span> |
| <Link id="m-scale" /><code>{"private float scale"}</code> | <span className="api-desc">Scale from layout positions to local positions.</span> |
| <Link id="m-setup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" setup"}</code> | <span className="api-desc">Single layout used when multi-layout mode is off.</span> |
| <Link id="m-shiftlockmarker" /><code>{"private Renderer shiftLockMarker"}</code> | <span className="api-desc">Renderer shown while shift is locked.</span> |
| <Link id="m-timetodoubleshift" /><code>{"private float timeToDoubleShift"}</code> | <span className="api-desc">Real time until which a second shift press locks shift.</span> |
| <Link id="m-usemultikeyboardsetup" /><code>{"private bool useMultiKeyboardSetup"}</code> | <span className="api-desc">When true the keyboard uses a keyboard set with switchable layouts instead of one layout.</span> |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backspacedelaystart-2" /><code>{"float BackspaceDelayStart { get; }"}</code> | <span className="api-desc">Seconds a held backspace waits before repeating.</span> |
| <Link id="m-backspacesingleletterduration-2" /><code>{"float BackspaceSingleLetterDuration { get; }"}</code> | <span className="api-desc">Seconds a held backspace deletes letter by letter before speeding up.</span> |
| <Link id="m-continuousbackspacespeed-2" /><code>{"float ContinuousBackspaceSpeed { get; }"}</code> | <span className="api-desc">Repeat speed for a held backspace.</span> |
| <Link id="m-currentuser" /><code><Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" CurrentUser { get; private set; }"}</code> | <span className="api-desc">The text field currently typing on the keyboard, or null.</span> |
| <Link id="m-input-2" /><code>{"string Input { get; set; }"}</code> | <span className="api-desc">The typed text. Setting it trims to the user's character limit and raises `InputChanged`.</span> |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Instance { get; private set; }"}</code> | <span className="api-desc">The keyboard in the scene.</span> |
| <Link id="m-instantiatedbuttons-2" /><code>{"override List<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> InstantiatedButtons { get; }"}</code> | <span className="api-desc">Key buttons spawned for the current layout.</span> |
| <Link id="m-isshiftpressed" /><code>{"bool IsShiftPressed { get; private set; }"}</code> | <span className="api-desc">True while shift is on. Turns off after one character unless shift is locked.</span> |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret { get; }"}</code> | <span className="api-desc">Never set, so always false.</span> |
| <Link id="m-mappedfunctionkeys" /><code>{"Dictionary<KeyCode, "}<Link to="/mod/game-api/types/global-e-h/functionkeydefinition">{"FunctionKeyDefinition"}</Link>{"> MappedFunctionKeys { get; }"}</code> | <span className="api-desc">Function keys with their actions, by key code.</span> |
| <Link id="m-offset" /><code>{"protected override Vector2 Offset { get; }"}</code> | <span className="api-desc">Centre offset of the keyboard's touch area.</span> |

<details className="api-private">
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" KeyboardSetup { get; }"}</code> | <span className="api-desc">The single layout used when `useMultiKeyboardSetup` is off (the `setup` field).</span> |
| <Link id="m-multikeyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" MultiKeyboardSetup { get; }"}</code> | <span className="api-desc">The keyboard set used for switching layouts. Always the PC set in this build; the Android set is never read.</span> |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-backpressedonempty" /><code>{"event Action BackPressedOnEmpty"}</code> | <span className="api-desc">Raised when backspace is pressed with no text.</span> |
| <Link id="m-inputchanged" /><code>{"event Action<string> InputChanged"}</code> | <span className="api-desc">Raised with the new text whenever the input changes.</span> |
| <Link id="m-nextpressed" /><code>{"event Action NextPressed"}</code> | <span className="api-desc">Raised when return is pressed.</span> |
| <Link id="m-shiftchanged" /><code>{"event Action<bool> ShiftChanged"}</code> | <span className="api-desc">Raised when shift turns on or off.</span> |
| <Link id="m-togglesecretdisplay" /><code>{"event Action ToggleSecretDisplay"}</code> | <span className="api-desc">Raised by `ToggleSecret`, for fields that hide their text.</span> |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addextrakey" /><code><Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" AddExtraKey("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" keyInfo, bool leftSide, int insertRow)"}</code> | <span className="api-desc">Adds a key at the left or right end of a keyboard row.</span> |
| <Link id="m-applynewautocompletionsource" /><code>{"void ApplyNewAutoCompletionSource("}<Link to="/mod/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletionSource)"}</code> | <span className="api-desc">Sets where autocomplete suggestions come from, adding the suggestion keys the first time.</span> |
| <Link id="m-clearfocus" /><code>{"void ClearFocus()"}</code> | <span className="api-desc">Removes all listeners from its events and tells the current user it lost focus.</span> |
| <Link id="m-eventsetupnewkeyboard" /><code>{"void EventSetUpNewKeyboard(int newKeyboardIndex)"}</code> | <span className="api-desc">Switches to another layout of the keyboard set (such as symbols), keeping keys that match.</span> |
| <Link id="m-get-2" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Get(Vector3 position, Quaternion rotation, "}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" newUser)"}</code> | <span className="api-desc">Moves the keyboard to a position and rotation, shows it, clears the input and gives it to a new user.</span> |
| <Link id="m-hide" /><code>{"void Hide("}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" user)"}</code> | <span className="api-desc">Hides the keyboard if the given user is the current one.</span> |
| <Link id="m-keypressed" /><code>{"void KeyPressed(KeyCode key)"}</code> | <span className="api-desc">Handles a key: types a character, backspace, return, shift, a function key or an autocomplete pick.</span> |
| <Link id="m-next" /><code>{"void Next()"}</code> | <span className="api-desc">Asks the current user to move to the next field.</span> |
| <Link id="m-previous" /><code>{"void Previous()"}</code> | <span className="api-desc">Asks the current user to move to the previous field.</span> |
| <Link id="m-setupnewuser" /><code>{"void SetupNewUser("}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" newUser)"}</code> | <span className="api-desc">Gives the keyboard to a text field and hooks its input and submit handlers.</span> |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret()"}</code> | <span className="api-desc">Raises `ToggleSecretDisplay`.</span> |
| <Link id="m-typecustom" /><code>{"void TypeCustom(string custom)"}</code> | <span className="api-desc">Adds a string to the input.</span> |
| <Link id="m-wordbackspace" /><code>{"void WordBackspace()"}</code> | <span className="api-desc">Deletes the last word.</span> |
| <Link id="m-ondrawgizmos" /><code>{"protected override void OnDrawGizmos()"}</code> | <span className="api-desc">Draws the key layout in the editor.</span> |
| <Link id="m-posttouchcalculation" /><code>{"protected override void PostTouchCalculation()"}</code> | <span className="api-desc">After touch checks, lets each enabled key settle its press state.</span> |
| <Link id="m-pretouchcalculation" /><code>{"protected override void PreTouchCalculation()"}</code> | <span className="api-desc">Before touch checks, clears each enabled key's finger distance.</span> |
| <Link id="m-updatetouchwithbuttons" /><code>{"protected override void UpdateTouchWithButtons("}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | <span className="api-desc">Updates each key's distance to a nearby fingertip.</span> |

<details className="api-private">
<summary>23 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addautocompletekeys" /><code>{"private void AddAutoCompleteKeys()"}</code> | <span className="api-desc">Spawns the suggestion keys from the keyboard set's completion layout.</span> |
| <Link id="m-applycompletion" /><code>{"private void ApplyCompletion(string completion)"}</code> | <span className="api-desc">Replaces the whole input with a chosen suggestion.</span> |
| <Link id="m-autocompletesetup" /><code>{"private void AutoCompleteSetup()"}</code> | <span className="api-desc">Once only, when there's an autocomplete source: adds suggestion keys and refreshes them whenever the input changes.</span> |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Claims `Instance` (logs an error for a second keyboard), maps function keys, sets up for the local player and hides itself if unused.</span> |
| <Link id="m-basekeyboardsetup" /><code>{"private void BaseKeyboardSetup("}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" baseSetup, int lastEqualIndex)"}</code> | <span className="api-desc">Spawns the keys of a layout after the ones kept from the previous layout, and records row edges and the space key.</span> |
| <Link id="m-calculatetransitionkeyposition-l-r" /><code>{"private Vector3 CalculateTransitionKeyPosition_L_R(Vector2 edgeKeyPos, float spacing, int stackMultiplier, float spaceOffset)"}</code> | <span className="api-desc">Works out where an extra key goes at the left or right end of a row.</span> |
| <Link id="m-get" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | <span className="api-desc">Moves the keyboard to a position and rotation, shows it, clears the input and gives it to a new user.</span> |
| <Link id="m-getminmax" /><code>{"private void GetMinMax(out Vector2 min, out Vector2 max)"}</code> | <span className="api-desc">Finds the bounds of the current layout's key positions.</span> |
| <Link id="m-includeletter" /><code>{"private void IncludeLetter(string letter)"}</code> | <span className="api-desc">Adds a letter to the input, upper case while shift is on.</span> |
| <Link id="m-includenumber" /><code>{"private void IncludeNumber(int number)"}</code> | <span className="api-desc">Adds a digit to the input.</span> |
| <Link id="m-localkeyboardsetup" /><code>{"private void LocalKeyboardSetup()"}</code> | <span className="api-desc">Sets up the keyboard for the local player and its autocomplete.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Unhooks from `PlayerController.LocalPlayerSet`.</span> |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | <span className="api-desc">Editor: recomputes the keyboard's dimensions when settings change.</span> |
| <Link id="m-populateautocompleteswithcurrentinput" /><code>{"private void PopulateAutoCompletesWithCurrentInput(string currentInput)"}</code> | <span className="api-desc">Fills up to four suggestion keys with completions for the current input and hides the rest.</span> |
| <Link id="m-pressshift" /><code>{"private void PressShift()"}</code> | <span className="api-desc">Toggles shift. A second press within `doubleShiftTimer` locks it; another press unlocks.</span> |
| <Link id="m-removeonlynecessarykeys" /><code>{"private int RemoveOnlyNecessaryKeys(int incomingIndex)"}</code> | <span className="api-desc">When switching layout, keeps leading keys both layouts share and destroys the rest. Returns the last shared index.</span> |
| <Link id="m-resetdimensions" /><code>{"private void ResetDimensions()"}</code> | <span className="api-desc">Recomputes the touch area size and offset from the layout's key bounds.</span> |
| <Link id="m-scaleposition" /><code>{"private Vector3 ScalePosition(Vector2 original)"}</code> | <span className="api-desc">Turns a layout key position into a local position, using `scale` and `originOffset`.</span> |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | <span className="api-desc">Shows or hides the keyboard GameObject.</span> |
| <Link id="m-setupnewkeyboard" /><code>{"private void SetUpNewKeyboard(int keyboardIndex, int lastEqualIndex)"}</code> | <span className="api-desc">Builds a layout from the keyboard set, adding the secret-toggle key when `setupSecretKey` is on.</span> |
| <Link id="m-setupplayer" /><code>{"private void SetupPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | <span className="api-desc">Handler for the local player being set: runs `LocalKeyboardSetup` once.</span> |
| <Link id="m-spawnkey" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" SpawnKey("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" keyInfo)"}</code> | <span className="api-desc">Instantiates a key from `keyPrefab` under the buttons parent.</span> |
| <Link id="m-wordbackspace-2" /><code>{"private string WordBackspace(string input)"}</code> | <span className="api-desc">Deletes the last word.</span> |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenKeyboard`:

<div className="api-used-in">

[`InputFieldWithKeyboard.keyboard`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboard), [`InputFieldWithKeyboard.Keyboard`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboard-2), [`InputFieldWithKeyboard.keyboardPrefab`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboardprefab), [`AltaAccountRegistererAndLinker.keyboard`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-keyboard), [`ServerBoardFilter.keyboard`](/mod/game-api/types/game-other-namespaces/serverboardfilter#m-keyboard), [`TouchScreenKeyboardKey.Setup`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-setup), [`TouchScreenKeyboardKey.SetupCoreReferences`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-setupcorereferences), [`TouchScreenKeyboardKey.virtualKeyboard`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-virtualkeyboard), [`VirtualInputField.keyboard`](/mod/game-api/types/global-t-x/virtualinputfield#m-keyboard).

</div>
