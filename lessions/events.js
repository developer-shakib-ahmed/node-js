const School = require('./school');

const school = new School();

school.on('bellRing', ({period, subject, sirName}) => {
    console.log(`Period: ${period}, Subject: ${subject}, Sir Name: ${sirName}`);
});

school.startPeriod();