let assert = require("chai").assert;
let utils = require("../src/utils");

describe("Utils testing..", function () {

    it("Check the prettyDate function..", function () {
        const someDate = new Date('01/01/2019');
        result = utils.prettyDate(someDate)
        assert.equal(result, "01-01-2019");
    });

    it("Check the prettyTime function..", function () {
        const someDate = new Date("December 17, 1995 03:24:00");
        result = utils.prettyTime(someDate);
        assert.equal(result, "3:24:0");
    });

});