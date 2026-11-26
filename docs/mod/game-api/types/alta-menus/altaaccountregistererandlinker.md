---
title: "AltaAccountRegistererAndLinker"
description: "Client: the in-VR account registration screen."
displayed_sidebar: game
pagination_prev: null
pagination_next: null
---

import Link from '@docusaurus/Link';

# AltaAccountRegistererAndLinker

A **internal class** in `Root.Township`, `Alta.OculusLogin`. Reach it through att-stubs' publicized assemblies or Harmony's `AccessTools`.

Client: the in-VR account registration screen. Checks username, email and password fields live against the API, registers the account, then logs in (with platform credentials if supported).

- **Listed in** [Menus, UI and platforms](/mod/game-api/types/alta-menus)
- **Inherits or implements** [`LoginAndRegisterHelper`](/mod/game-api/types/global-i-l/loginandregisterhelper)
- **Nested types** [`AccountRegisteringSteps`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps), [`LastCheckedField`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield)

## Constructors

| Member | What it is |
| --- | --- |
| <Link id="m-ctor" /><code>{"AltaAccountRegistererAndLinker()"}</code> | <span className="api-desc">Unity makes components itself; use `AddComponent` or spawn a prefab instead of `new`.</span> |

## Fields

<details className="api-private">
<summary>25 private and internal fields</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-authenticationutility" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility"}</code> | <span className="api-desc">Used to log in with username and password after registering when platform login is not supported.</span> |
| <Link id="m-confirmpasswordinput" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" confirmPasswordInput"}</code> | <span className="api-desc">The confirm password field.</span> |
| <Link id="m-emailinput" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/inputfield">{"InputField"}</Link>{" emailInput"}</code> | <span className="api-desc">The email field.</span> |
| <Link id="m-fieldchecks" /><code>{"private GameObject[] fieldChecks"}</code> | <span className="api-desc">Tick objects, one per field.</span> |
| <Link id="m-fieldcrosses" /><code>{"private GameObject[] fieldCrosses"}</code> | <span className="api-desc">Cross objects, one per field.</span> |
| <Link id="m-fielderrors" /><code>{"private GameObject[] fieldErrors"}</code> | <span className="api-desc">Error objects, one per field.</span> |
| <Link id="m-frames" /><code>{"private MeshFilter[] frames"}</code> | <span className="api-desc">Frame mesh filters, one per field, swapped to show valid or invalid.</span> |
| <Link id="m-intendedgenericerror" /><code>{"private string intendedGenericError"}</code> | <span className="api-desc">The error text to show once validation finishes.</span> |
| <Link id="m-invalidframe" /><code>{"private Mesh invalidFrame"}</code> | <span className="api-desc">Frame mesh copy tinted with `invalidFrameColor`.</span> |
| <Link id="m-invalidframecolor" /><code>{"private Color invalidFrameColor"}</code> | <span className="api-desc">Vertex colour for an invalid field's frame.</span> |
| <Link id="m-isconvertingtolinearcolor" /><code>{"private bool isConvertingToLinearColor"}</code> | <span className="api-desc">Whether the frame colours are converted to linear space first.</span> |
| <Link id="m-keyboard" /><code>{"private "}<Link to="/mod/game-api/types/global-t-x/touchscreenkeyboard">{"TouchScreenKeyboard"}</Link>{" keyboard"}</code> | <span className="api-desc">The VR keyboard whose input changes trigger validation.</span> |
| <Link id="m-lastcheckedemail" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" lastCheckedEmail"}</code> | <span className="api-desc">Cache of the last email checked and its result, so the API is not asked again.</span> |
| <Link id="m-lastcheckedusername" /><code>{"private "}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" lastCheckedUsername"}</code> | <span className="api-desc">Cache of the last username checked and its result.</span> |
| <Link id="m-logger" /><code>{"private static readonly Logger logger"}</code> | <span className="api-desc">NLog logger for this class.</span> |
| <Link id="m-onfailedtoregisteraccountfade" /><code>{"private "}<Link to="/mod/game-api/types/global-a-b/animatorsetup">{"AnimatorSetup"}</Link>{" onFailedToRegisterAccountFade"}</code> | <span className="api-desc">Animator fade played when registration fails.</span> |
| <Link id="m-onvalidconfirm" /><code>{"private UnityEvent onValidConfirm"}</code> | <span className="api-desc">Event run when `CheckConfirm` passes.</span> |
| <Link id="m-onvalidsubmit" /><code>{"private UnityEvent onValidSubmit"}</code> | <span className="api-desc">Event run after the account is registered and logged in.</span> |
| <Link id="m-originalframemesh" /><code>{"private Mesh originalFrameMesh"}</code> | <span className="api-desc">Untinted frame mesh, used for empty fields and as the base for the tinted copies.</span> |
| <Link id="m-screenname" /><code>{"private static readonly string ScreenName"}</code> | <span className="api-desc">Screen name reported to signup analytics ("Account Registration").</span> |
| <Link id="m-timer" /><code>{"private float timer"}</code> | <span className="api-desc">Seconds left before the typing pause triggers validation.</span> |
| <Link id="m-updatevalidationtimer" /><code>{"private "}<Link to="/mod/game-api/types/global-i-l/iunityupdatemethod">{"IUnityUpdateMethod"}</Link>{" updateValidationTimer"}</code> | <span className="api-desc">Handle for the registered timer update method.</span> |
| <Link id="m-userservice" /><code>{"private "}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService"}</code> | <span className="api-desc">User service used to register the account and for platform login.</span> |
| <Link id="m-validframe" /><code>{"private Mesh validFrame"}</code> | <span className="api-desc">Frame mesh copy tinted with `validFrameColor`.</span> |
| <Link id="m-validframecolor" /><code>{"private Color validFrameColor"}</code> | <span className="api-desc">Vertex colour for a valid field's frame.</span> |

</details>

## Methods

| Member | What it is |
| --- | --- |
| <Link id="m-checkconfirm" /><code>{"async void CheckConfirm()"}</code> | <span className="api-desc">Validates every field and runs `onValidConfirm` if all pass.</span> |
| <Link id="m-ondisable" /><code>{"override void OnDisable()"}</code> | <span className="api-desc">Unhooks keyboard input and stops the validation timer.</span> |
| <Link id="m-validateall" /><code>{"async void ValidateAll()"}</code> | <span className="api-desc">Validates every field and shows the resulting generic error.</span> |
| <Link id="m-inject" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" userService, "}<Link to="/mod/game-api/types/assembly-other/iauthenticationutility">{"IAuthenticationUtility"}</Link>{" authenticationUtility)"}</code> | <span className="api-desc">VContainer injection of the user service (and in one overload the authentication utility).</span> |
| <Link id="m-inject-2" /><code>{"protected void Inject("}<Link to="/mod/game-api/types/assembly-other/iuserservice">{"IUserService"}</Link>{" injectedUserService)"}</code> | <span className="api-desc">VContainer injection of the user service (and in one overload the authentication utility).</span> |
| <Link id="m-internalsubmit" /><code>{"protected override async Task InternalSubmit()"}</code> | <span className="api-desc">Validates, registers the account through `IUserService`, then logs in. On success marks the login as an Oculus account and runs `onValidSubmit`.</span> |

<details className="api-private">
<summary>15 private and internal methods</summary>

| Member | What it is |
| --- | --- |
| <Link id="m-awake" /><code>{"private void Awake()"}</code> | <span className="api-desc">Sets up the per-field last-checked caches and builds tinted copies of the frame mesh for valid and invalid fields.</span> |
| <Link id="m-confirmpasswordmatch" /><code>{"private bool ConfirmPasswordMatch()"}</code> | <span className="api-desc">Checks the confirm password matches the password and updates that field's marks.</span> |
| <Link id="m-disablefield" /><code>{"private void DisableField("}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps">{"AltaAccountRegistererAndLinker.AccountRegisteringSteps"}</Link>{" field)"}</code> | <span className="api-desc">Hides a field's error, cross and tick and puts back the plain frame mesh.</span> |
| <Link id="m-internalemailvalidation" /><code>{"private async Task<bool> InternalEmailValidation()"}</code> | <span className="api-desc">Checks the email format locally, then with the API, caching the result for an unchanged value.</span> |
| <Link id="m-internalpasswordvalidation" /><code>{"private bool InternalPasswordValidation()"}</code> | <span className="api-desc">Requires a password of at least 7 characters.</span> |
| <Link id="m-internalvalidateall" /><code>{"private async Task<bool> InternalValidateAll()"}</code> | <span className="api-desc">Runs the username, email, password and confirm checks and returns whether all passed.</span> |
| <Link id="m-isusernamevalid" /><code>{"private async Task<bool> IsUsernameValid()"}</code> | <span className="api-desc">Asks the API to validate the username, showing any error, and caches the result for an unchanged value.</span> |
| <Link id="m-ondestroy" /><code>{"private void OnDestroy()"}</code> | <span className="api-desc">Destroys the tinted frame meshes.</span> |
| <Link id="m-onenable" /><code>{"private void OnEnable()"}</code> | <span className="api-desc">Hooks keyboard input changes to the validation timer and reports the registration screen to analytics.</span> |
| <Link id="m-returntoaccountcreation" /><code>{"private void ReturnToAccountCreation()"}</code> | <span className="api-desc">Plays the fade used when registration fails.</span> |
| <Link id="m-seterrormessage" /><code>{"private void SetErrorMessage(string message, "}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield">{"AltaAccountRegistererAndLinker.LastCheckedField"}</Link>{" field)"}</code> | <span className="api-desc">Shows a message in the generic error text and stores it on the field's cache.</span> |
| <Link id="m-updatefieldstatus" /><code>{"private void UpdateFieldStatus("}<Link to="/mod/game-api/types/alta-menus/altaaccountregistererandlinker-accountregisteringsteps">{"AltaAccountRegistererAndLinker.AccountRegisteringSteps"}</Link>{" field, bool status)"}</code> | <span className="api-desc">Shows the tick or the error and cross for a field and swaps its frame to the valid or invalid mesh.</span> |
| <Link id="m-updatetimer" /><code>{"private void UpdateTimer(string input)"}</code> | <span className="api-desc">Restarts a one second timer each time keyboard input changes.</span> |
| <Link id="m-updatevalidationtimer-2" /><code>{"private void UpdateValidationTimer()"}</code> | <span className="api-desc">Counts the timer down and revalidates all fields when it runs out, so checks run after typing pauses.</span> |
| <Link id="m-validateallwithouclearinggenericerror" /><code>{"private async void ValidateAllWithouClearingGenericError()"}</code> | <span className="api-desc">Validates every field without clearing the current error text. Used by the typing timer.</span> |

</details>

## Used in

Members of other types that take, return or hold a `AltaAccountRegistererAndLinker`:

<div className="api-used-in">

[`AltaAccountRegistererAndLinker.LastCheckedField.LastCheckedField`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield#m-ctor), [`AltaAccountRegistererAndLinker.LastCheckedField.manager`](/mod/game-api/types/alta-menus/altaaccountregistererandlinker-lastcheckedfield#m-manager).

</div>
