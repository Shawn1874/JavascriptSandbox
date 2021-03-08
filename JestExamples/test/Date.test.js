'use strict';

// jshint expr: true

describe('Test date accessor methods after constructing a date', function () {

    it('Test that optional values of Date constructor default to lowest value', function () {
        // month is a zero based index so 2 is March.  Day is a 1 based index.  
        let birthday = new Date(1952, 2, 5);
        console.log(birthday);
        expect(birthday.getMonth()).toBe(2);
        expect(birthday.getFullYear()).toBe(1952);
        expect(birthday.getDate()).toBe(5);
        expect(birthday.getDay()).toBe(3);  // day of week is 0-6 with Sunday as 0.  3/5/1952 was a Wednesday

        // These weren't specified in constructor so should be set to lowest value.
        expect(birthday.getHours()).toBe(0);
        expect(birthday.getMinutes()).toBe(0);
        expect(birthday.getSeconds()).toBe(0);

        var options = { weekday: 'long'};
        let dayOfWeek = new Intl.DateTimeFormat('en-US', options).format(birthday);
        expect(dayOfWeek).toBe("Wednesday");
    });

    it('Test the Date methods that output the date and time as a string', function () {
        let birthday = new Date(1956, 5, 11, 2, 30);
        console.log(birthday.toISOString);

        //console.log(birthday.toLocaleString('en-US', { timeZone: 'PST' }));
    });
 
    it('Test the date methods that change the date or time components of a Date object', function () {
        let date = new Date('August 19, 1975 23:15:30');
        date.setFullYear(1981);
        expect(date.getFullYear()).toBe(1981);

        date.setDate(7);
        expect(date.getDate()).toBe(7);
    });
});