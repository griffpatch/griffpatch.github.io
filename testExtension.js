// https://cdn.jsdelivr.net/gh/griffpatch/griffpatch.github.io/testExtension.js

const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Clone = require('../../util/clone');
const Cast = require('../../util/cast');
const formatMessage = require('format-message');
const MathUtil = require('../../util/math-util');
const Timer = require('../../util/timer');


/**
 * The instrument and drum sounds, loaded as static assets.
 * @type {object}
 */
/*let assetData = {};
try {
    assetData = require('./manifest');
} catch (e) {
    // Non-webpack environment, don't worry about assets.
}*/

/**
 * Class for the music-related blocks in Scratch 3.0
 * @param {Runtime} runtime - the runtime instantiating this block package.
 * @constructor
 */
class Scratch3TestExtension {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
		debugger;

//        this._onTargetCreated = this._onTargetCreated.bind(this);
//        this.runtime.on('targetWasCreated', this._onTargetCreated);
/*
        this._playNoteForPicker = this._playNoteForPicker.bind(this);
        this.runtime.on('PLAY_NOTE', this._playNoteForPicker);
		*/
    }

    /**
     * The key to load & store a target's music-related state.
     * @type {string}
     */
    static get STATE_KEY () {
        return 'Scratch.Griffpatch';
    }

    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    getInfo () {
        return {
            id: 'griffpatch',
            name: formatMessage({
                id: 'griffpatch.categoryName',
                default: 'Griffpatch',
                description: 'Label for the Griffpatch extension category'
            }),
            menuIconURI: menuIconURI,
            blockIconURI: blockIconURI,
            blocks: [
                {
                    opcode: 'doTest',
                    blockType: BlockType.COMMAND,
                    text: formatMessage({
                        id: 'griffpatch.test',
                        default: 'test [x], [y]',
                        description: 'test this block'
                    }),
                    arguments: {
                        x: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        },
                        y: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 10
                        }
                    }
                },
                {
                    opcode: 'getTest',
                    text: formatMessage({
                        id: 'griffpatch.getTest',
                        default: 'test',
                        description: 'get the test value'
                    }),
                    blockType: BlockType.REPORTER
                }
            ]
        };
    }

    /**
     * Play a drum sound for some number of beats.
     * @param {object} args - the block arguments.
     * @param {object} util - utility object provided by the runtime.
     * @property {int} DRUM - the number of the drum to play.
     * @property {number} BEATS - the duration in beats of the drum sound.
     */
    doTest (x, y) {
        // this._playDrumForBeats(args.DRUM, args.BEATS, util);
        // if (util.runtime.audioEngine === null) return;
        // if (util.target.sprite.soundBank === null) return;
		debugger;
    }

    /**
     * Get the current tempo.
     * @return {number} - the current tempo, in beats per minute.
     */
    getTest () {
        const stage = this.runtime.getTargetForStage();
		debugger;
/*        if (stage) {
            return stage.tempo;
        }*/
        return 9000;
    }
}

module.exports = Scratch3TestExtension;
