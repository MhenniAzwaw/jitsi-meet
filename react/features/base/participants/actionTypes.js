/**
 * Create an action for when dominant speaker changes.
 *
 * {
 *     type: DOMINANT_SPEAKER_CHANGED,
 *     participant: {
 *         id: string
 *     }
 * }
 */
export const DOMINANT_SPEAKER_CHANGED = Symbol('DOMINANT_SPEAKER_CHANGED');

/**
 * Create an action for when the local participant's display name is updated.
 *
 * {
 *     type: PARTICIPANT_DISPLAY_NAME_CHANGED,
 *     id: string,
 *     name: string
 * }
 */
export const PARTICIPANT_DISPLAY_NAME_CHANGED
    = Symbol('PARTICIPANT_DISPLAY_NAME_CHANGED');

/**
 * Action to signal that ID of participant has changed. This happens when
 * local participant joins a new conference or quits one.
 *
 * {
 *     type: PARTICIPANT_ID_CHANGED,
 *     newValue: string,
 *     oldValue: string
 * }
 */
export const PARTICIPANT_ID_CHANGED = Symbol('PARTICIPANT_ID_CHANGED');

/**
 * Action to signal that a participant has joined.
 *
 * {
 *     type: PARTICIPANT_JOINED,
 *     participant: Participant
 * }
 */
export const PARTICIPANT_JOINED = Symbol('PARTICIPANT_JOINED');

/**
 * Action to handle case when participant lefts.
 *
 * {
 *     type: PARTICIPANT_LEFT,
 *     participant: {
 *         id: string
 *     }
 * }
 */
export const PARTICIPANT_LEFT = Symbol('PARTICIPANT_LEFT');

/**
 * Action to handle case when info about participant changes.
 *
 * {
 *     type: PARTICIPANT_UPDATED,
 *     participant: Participant
 * }
 */
export const PARTICIPANT_UPDATED = Symbol('PARTICIPANT_UPDATED');

/**
 * The type of the Redux action which pins a conference participant.
 *
 * {
 *     type: PIN_PARTICIPANT,
 *     participant: {
 *         id: string
 *     }
 * }
 */
export const PIN_PARTICIPANT = Symbol('PIN_PARTICIPANT');
