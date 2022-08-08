const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Class started.');

        setTimeout(() => {
            this.emit('bellRing', {
                period : "First",
                subject: "Bangla",
                sirName: "Rahim sir"
            });
        }, 1000);
    }
}

module.exports = School;