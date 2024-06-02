const autoReactions = {
    timer: null,
    validEmojis: ['💖', '👍', '🎉', '👏', '😂', '😮', '😢', '🤔', '👎'],

    startReacting(emoji, delay) {
        if (!this.validEmojis.includes(emoji)) {
            throw new Error(`Invalid emoji. Valid emojis are: ${this.validEmojis.join(', ')}`);
        }
        if (!Number.isInteger(delay) || delay < 0) {
            throw new Error('Delay must be a non-negative integer.');
        }

        this.ensureReactionsPaletteOpen();

        const clickEmoji = () => {
            const emojiButton = document.querySelector(`button[aria-label="${emoji}"]`);
            if (!emojiButton) {
                console.error('Emoji button not found. Stopping reaction.');
                this.stopReacting();
                return;
            }
            emojiButton.click();
        };

        this.timer = setInterval(clickEmoji, delay);
    },

    stopReacting() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
            console.log('Auto-reacting stopped.');
        }
    },

    ensureReactionsPaletteOpen() {
        let reactionsToggle = document.querySelector('button[aria-label="Надіслати реакцію"]');
        if (reactionsToggle && !this.isReactionsPaletteOpen()) {
            reactionsToggle.click();
        }
    },

    isReactionsPaletteOpen() {
        let palette = document.querySelector('#yDmH0d > c-wiz > div > div > div:nth-child(25) > div.crqnQb > div:nth-child(10) > div > div.b1bzTb > div > div > div.kHVWGc'); 
        return palette && getComputedStyle(palette).display !== 'none';
    }
};

// Usage:
// autoReactions.startReacting('👍', 1000);
//autoReactions.startReacting('🤩', 1000);
//autoReactions.startReacting('👍', -1000);
// autoReactions.stopReacting();