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
| <Link id="m-ctor" /><code>{"TouchScreenKeyboard()"}</code> | Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`. |

## Fields

| Member | What it is |
| --- | --- |
| <Link id="m-setupsecretkey" /><code>{"bool setupSecretKey"}</code> | If set, an extra secret toggle key is added to the last row. |

<details>
<summary>27 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-androidmultikeyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" androidMultiKeyboardSetup"}</code> | Android keyboard set. Not used in this build, see `MultiKeyboardSetup`. |
| <Link id="m-androidsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" androidSetup"}</code> | Android single layout. Not read in this build. |
| <Link id="m-autocomplete" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/autocomplete">{"AutoComplete"}</Link>{" autoComplete"}</code> | The autocomplete helper, made by `ApplyNewAutoCompletionSource`. |
| <Link id="m-backspacedelaystart" /><code>{"private float backspaceDelayStart"}</code> | Backing field for `BackspaceDelayStart`. Default 1. |
| <Link id="m-backspacesingleletterduration" /><code>{"private float backspaceSingleLetterDuration"}</code> | Backing field for `BackspaceSingleLetterDuration`. Default 3. |
| <Link id="m-continuousbackspacespeed" /><code>{"private float continuousBackspaceSpeed"}</code> | Backing field for `ContinuousBackspaceSpeed`. Default 0.2. |
| <Link id="m-currentkeyboardindex" /><code>{"private int currentKeyboardIndex"}</code> | Index of the layout in use within the keyboard set. |
| <Link id="m-dimensionsoffset" /><code>{"private Vector2 dimensionsOffset"}</code> | Centre offset of the touch area, recomputed by `ResetDimensions`. |
| <Link id="m-doubleshifttimer" /><code>{"private float doubleShiftTimer"}</code> | Seconds within which a second shift press locks shift. Default 0.5. |
| <Link id="m-empty" /><code>{"private const string empty"}</code> | Empty string constant. |
| <Link id="m-functionkeys" /><code>{"private "}<Link to="/mod/game-api/types/global-e-h/functionkeydefinition">{"FunctionKeyDefinition"}</Link>{"[] functionKeys"}</code> | Keys with their own actions; mapped into `MappedFunctionKeys` in `Awake`. |
| <Link id="m-hasdoneautocompletesetup" /><code>{"private bool hasDoneAutoCompleteSetup"}</code> | True once `AutoCompleteSetup` has run. |
| <Link id="m-indextokeycode" /><code>{"private readonly Dictionary<int, KeyCode> indexToKeyCode"}</code> | Maps suggestion slot 0 to 3 to key codes F5 to F8. |
| <Link id="m-input" /><code>{"private string input"}</code> | Backing field for `Input`. |
| <Link id="m-instantiatedbuttons" /><code>{"private readonly List<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> instantiatedButtons"}</code> | Backing list for `InstantiatedButtons`, the spawned keys. |
| <Link id="m-isshiftlocked" /><code>{"private bool isShiftLocked"}</code> | True while shift is locked by a double press. |
| <Link id="m-keyboardedgesinfo" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard-keyboardedgesinfo">{"TouchScreenKeyboard.KeyBoardEdgesInfo"}</Link>{" keyboardEdgesInfo"}</code> | Row edge keys and spacing for the current layout, used to place extra keys. |
| <Link id="m-keyprefab" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" keyPrefab"}</code> | Prefab for every key. |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | NLog logger for this class. |
| <Link id="m-originoffset" /><code>{"private Vector2 originOffset"}</code> | Offset added to every key position. |
| <Link id="m-output" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard-outputevent">{"TouchScreenKeyboard.OutputEvent"}</Link>{" output"}</code> | Inspector event raised with the input whenever it changes. |
| <Link id="m-pcmultikeyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" pcMultiKeyboardSetup"}</code> | The keyboard set `MultiKeyboardSetup` returns. |
| <Link id="m-scale" /><code>{"private float scale"}</code> | Scale from layout positions to local positions. |
| <Link id="m-setup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" setup"}</code> | Single layout used when multi-layout mode is off. |
| <Link id="m-shiftlockmarker" /><code>{"private Renderer shiftLockMarker"}</code> | Renderer shown while shift is locked. |
| <Link id="m-timetodoubleshift" /><code>{"private float timeToDoubleShift"}</code> | Real time until which a second shift press locks shift. |
| <Link id="m-usemultikeyboardsetup" /><code>{"private bool useMultiKeyboardSetup"}</code> | When true the keyboard uses a keyboard set with switchable layouts instead of one layout. |

</details>

## Properties

| Member | What it is |
| --- | --- |
| <Link id="m-backspacedelaystart-2" /><code>{"float BackspaceDelayStart { get; }"}</code> | Seconds a held backspace waits before repeating. |
| <Link id="m-backspacesingleletterduration-2" /><code>{"float BackspaceSingleLetterDuration { get; }"}</code> | Seconds a held backspace deletes letter by letter before speeding up. |
| <Link id="m-continuousbackspacespeed-2" /><code>{"float ContinuousBackspaceSpeed { get; }"}</code> | Repeat speed for a held backspace. |
| <Link id="m-currentuser" /><code><Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" CurrentUser { get; private set; }"}</code> | The text field currently typing on the keyboard, or null. |
| <Link id="m-input-2" /><code>{"string Input { get; set; }"}</code> | The typed text. Setting it trims to the user's character limit and raises `InputChanged`. |
| <Link id="m-instance" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Instance { get; private set; }"}</code> | The keyboard in the scene. |
| <Link id="m-instantiatedbuttons-2" /><code>{"override List<"}<Link to="/mod/game-api/types/global-i-l/itouchscreenbutton">{"ITouchScreenButton"}</Link>{"> InstantiatedButtons { get; }"}</code> | Key buttons spawned for the current layout. |
| <Link id="m-isshiftpressed" /><code>{"bool IsShiftPressed { get; private set; }"}</code> | True while shift is on. Turns off after one character unless shift is locked. |
| <Link id="m-isshowingsecret" /><code>{"bool IsShowingSecret { get; }"}</code> | Never set, so always false. |
| <Link id="m-mappedfunctionkeys" /><code>{"Dictionary<KeyCode, "}<Link to="/mod/game-api/types/global-e-h/functionkeydefinition">{"FunctionKeyDefinition"}</Link>{"> MappedFunctionKeys { get; }"}</code> | Function keys with their actions, by key code. |
| <Link id="m-offset" /><code>{"protected override Vector2 Offset { get; }"}</code> | Centre offset of the keyboard's touch area. |

<details>
<summary>2 private and internal properties</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-keyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" KeyboardSetup { get; }"}</code> | The single layout used when `useMultiKeyboardSetup` is off (the `setup` field). |
| <Link id="m-multikeyboardsetup" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/keyboardset">{"KeyboardSet"}</Link>{" MultiKeyboardSetup { get; }"}</code> | The keyboard set used for switching layouts. Always the PC set in this build; the Android set is never read. |

</details>

## Events

| Member | What it is |
| --- | --- |
| <Link id="m-backpressedonempty" /><code>{"event Action BackPressedOnEmpty"}</code> | Raised when backspace is pressed with no text. |
| <Link id="m-inputchanged" /><code>{"event Action<string> InputChanged"}</code> | Raised with the new text whenever the input changes. |
| <Link id="m-nextpressed" /><code>{"event Action NextPressed"}</code> | Raised when return is pressed. |
| <Link id="m-shiftchanged" /><code>{"event Action<bool> ShiftChanged"}</code> | Raised when shift turns on or off. |
| <Link id="m-togglesecretdisplay" /><code>{"event Action ToggleSecretDisplay"}</code> | Raised by `ToggleSecret`, for fields that hide their text. |

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-addextrakey" /><code><Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" AddExtraKey("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" keyInfo, bool leftSide, int insertRow)"}</code> | Adds a key at the left or right end of a keyboard row. |
| <Link id="m-applynewautocompletionsource" /><code>{"void ApplyNewAutoCompletionSource("}<Link to="/mod/game-api/types/alta-menus/iautocompletionsource">{"IAutoCompletionSource"}</Link>{" autoCompletionSource)"}</code> | Sets where autocomplete suggestions come from, adding the suggestion keys the first time. |
| <Link id="m-clearfocus" /><code>{"void ClearFocus()"}</code> | Removes all listeners from its events and tells the current user it lost focus. |
| <Link id="m-eventsetupnewkeyboard" /><code>{"void EventSetUpNewKeyboard(int newKeyboardIndex)"}</code> | Switches to another layout of the keyboard set (such as symbols), keeping keys that match. |
| <Link id="m-get-2" /><code>{"static "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Get(Vector3 position, Quaternion rotation, "}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" newUser)"}</code> | Moves the keyboard to a position and rotation, shows it, clears the input and gives it to a new user. |
| <Link id="m-hide" /><code>{"void Hide("}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" user)"}</code> | Hides the keyboard if the given user is the current one. |
| <Link id="m-keypressed" /><code>{"void KeyPressed(KeyCode key)"}</code> | Handles a key: types a character, backspace, return, shift, a function key or an autocomplete pick. |
| <Link id="m-next" /><code>{"void Next()"}</code> | Asks the current user to move to the next field. |
| <Link id="m-previous" /><code>{"void Previous()"}</code> | Asks the current user to move to the previous field. |
| <Link id="m-setupnewuser" /><code>{"void SetupNewUser("}<Link to="/mod/game-api/types/global-i-l/iusevirtualkeyboard">{"IUseVirtualKeyboard"}</Link>{" newUser)"}</code> | Gives the keyboard to a text field and hooks its input and submit handlers. |
| <Link id="m-togglesecret" /><code>{"void ToggleSecret()"}</code> | Raises `ToggleSecretDisplay`. |
| <Link id="m-typecustom" /><code>{"void TypeCustom(string custom)"}</code> | Adds a string to the input. |
| <Link id="m-wordbackspace" /><code>{"void WordBackspace()"}</code> | Deletes the last word. |
| <Link id="m-ondrawgizmos" /><code>{"protected override void OnDrawGizmos()"}</code> | Draws the key layout in the editor. |
| <Link id="m-posttouchcalculation" /><code>{"protected override void PostTouchCalculation()"}</code> | After touch checks, lets each enabled key settle its press state. |
| <Link id="m-pretouchcalculation" /><code>{"protected override void PreTouchCalculation()"}</code> | Before touch checks, clears each enabled key's finger distance. |
| <Link id="m-updatetouchwithbuttons" /><code>{"protected override void UpdateTouchWithButtons("}<Link to="/mod/game-api/types/global-t-x/touchscreenmenubase-touchinput">{"TouchScreenMenuBase.TouchInput"}</Link>{" touch)"}</code> | Updates each key's distance to a nearby fingertip. |

<details>
<summary>23 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-addautocompletekeys" /><code>{"private void AddAutoCompleteKeys()"}</code> | Spawns the suggestion keys from the keyboard set's completion layout. |
| <Link id="m-applycompletion" /><code>{"private void ApplyCompletion(string completion)"}</code> | Replaces the whole input with a chosen suggestion. |
| <Link id="m-autocompletesetup" /><code>{"private void AutoCompleteSetup()"}</code> | Once only, when there's an autocomplete source: adds suggestion keys and refreshes them whenever the input changes. |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | Claims `Instance` (logs an error for a second keyboard), maps function keys, sets up for the local player and hides itself if unused. |
| <Link id="m-basekeyboardsetup" /><code>{"private void BaseKeyboardSetup("}<Link to="/mod/game-api/types/global-t-x/virtualkeyboardsetup">{"VirtualKeyboardSetup"}</Link>{" baseSetup, int lastEqualIndex)"}</code> | Spawns the keys of a layout after the ones kept from the previous layout, and records row edges and the space key. |
| <Link id="m-calculatetransitionkeyposition-l-r" /><code>{"private Vector3 CalculateTransitionKeyPosition_L_R(Vector2 edgeKeyPos, float spacing, int stackMultiplier, float spaceOffset)"}</code> | Works out where an extra key goes at the left or right end of a row. |
| <Link id="m-get" /><code>{"private static "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" Get(Vector3 position, Quaternion rotation)"}</code> | Moves the keyboard to a position and rotation, shows it, clears the input and gives it to a new user. |
| <Link id="m-getminmax" /><code>{"private void GetMinMax(out Vector2 min, out Vector2 max)"}</code> | Finds the bounds of the current layout's key positions. |
| <Link id="m-includeletter" /><code>{"private void IncludeLetter(string letter)"}</code> | Adds a letter to the input, upper case while shift is on. |
| <Link id="m-includenumber" /><code>{"private void IncludeNumber(int number)"}</code> | Adds a digit to the input. |
| <Link id="m-localkeyboardsetup" /><code>{"private void LocalKeyboardSetup()"}</code> | Sets up the keyboard for the local player and its autocomplete. |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | Unhooks from `PlayerController.LocalPlayerSet`. |
| <Link id="m-onvalidate" /><code>{"private void OnValidate()"}</code> | Editor: recomputes the keyboard's dimensions when settings change. |
| <Link id="m-populateautocompleteswithcurrentinput" /><code>{"private void PopulateAutoCompletesWithCurrentInput(string currentInput)"}</code> | Fills up to four suggestion keys with completions for the current input and hides the rest. |
| <Link id="m-pressshift" /><code>{"private void PressShift()"}</code> | Toggles shift. A second press within `doubleShiftTimer` locks it; another press unlocks. |
| <Link id="m-removeonlynecessarykeys" /><code>{"private int RemoveOnlyNecessaryKeys(int incomingIndex)"}</code> | When switching layout, keeps leading keys both layouts share and destroys the rest. Returns the last shared index. |
| <Link id="m-resetdimensions" /><code>{"private void ResetDimensions()"}</code> | Recomputes the touch area size and offset from the layout's key bounds. |
| <Link id="m-scaleposition" /><code>{"private Vector3 ScalePosition(Vector2 original)"}</code> | Turns a layout key position into a local position, using `scale` and `originOffset`. |
| <Link id="m-setactive" /><code>{"private void SetActive(bool isActive)"}</code> | Shows or hides the keyboard GameObject. |
| <Link id="m-setupnewkeyboard" /><code>{"private void SetUpNewKeyboard(int keyboardIndex, int lastEqualIndex)"}</code> | Builds a layout from the keyboard set, adding the secret-toggle key when `setupSecretKey` is on. |
| <Link id="m-setupplayer" /><code>{"private void SetupPlayer("}<Link to="/mod/game-api/types/global-p/playercontroller">{"PlayerController"}</Link>{" player)"}</code> | Handler for the local player being set: runs `LocalKeyboardSetup` once. |
| <Link id="m-spawnkey" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboardkey">{"TouchScreenKeyboardKey"}</Link>{" SpawnKey("}<Link to="/mod/game-api/types/global-t-x/virtualkeyinfo">{"VirtualKeyInfo"}</Link>{" keyInfo)"}</code> | Instantiates a key from `keyPrefab` under the buttons parent. |
| <Link id="m-wordbackspace-2" /><code>{"private string WordBackspace(string input)"}</code> | Deletes the last word. |

</details>

## Used in

Members of other types that take, return or hold a `TouchScreenKeyboard`:

[`InputFieldWithKeyboard.keyboard`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboard), [`InputFieldWithKeyboard.Keyboard`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboard-2), [`InputFieldWithKeyboard.keyboardPrefab`](/mod/game-api/types/alta-menus/inputfieldwithkeyboard#m-keyboardprefab), [`AltaAccountRegistererAndLinker.keyboard`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker#m-keyboard), [`ServerBoardFilter.keyboard`](/mod/game-api/types/game-other-namespaces/serverboardfilter#m-keyboard), [`TouchScreenKeyboardKey.Setup`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-setup), [`TouchScreenKeyboardKey.SetupCoreReferences`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-setupcorereferences), [`TouchScreenKeyboardKey.virtualKeyboard`](/mod/game-api/types/global-t-x/touchscreenkeyboardkey#m-virtualkeyboard), [`VirtualInputField.keyboard`](/mod/game-api/types/global-t-x/virtualinputfield#m-keyboard).
