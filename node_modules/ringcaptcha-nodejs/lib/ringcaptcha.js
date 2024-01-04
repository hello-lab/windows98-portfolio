var request = require("request");

var Ringcaptcha = {
    app_key: "",
    api_key: "",
    secret_key: "",
    check: function (req, res) {
        console.log("Welcome to ringcaptcha-nodejs");
    },
    /**
     * Sending a PIN Code.
     *
     */

    sendingPINCode: function (data, res) {

        var mobile = data.country_code + data.mobile;
        console.log(mobile);
        var options = {method: 'POST',
            url: 'https://api.ringcaptcha.com/' + this.app_key + '/code/' + data.service,
            headers:
                    {
                        'cache-control': 'no-cache',
                        'content-type': 'application/x-www-form-urlencoded'},
            form: {app_key: this.app_key, phone: mobile, api_key: this.api_key}};

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            res(body);
        });

    },
    /**
     * Verifying the PIN code.
     *
     */
    verifyingPin: function (data, res) {

        var mobile = data.country_code + data.mobile;
        console.log(mobile);
        var options = {method: 'POST',
            url: 'https://api.ringcaptcha.com/' + this.app_key + '/verify',
            headers:
                    {
                        'cache-control': 'no-cache',
                        'content-type': 'application/x-www-form-urlencoded'},
            form: {app_key: this.app_key, phone: mobile, api_key: this.api_key, code: this.code, token: this.token}};

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            res(body);
        });

    },
    /**
     * Re-Send a PIN Code.
     *
     */

    reSendPINCode: function (data, res) {

        var mobile = data.country_code + data.mobile;
        console.log(mobile);
        var options = {method: 'POST',
            url: 'https://api.ringcaptcha.com/' + this.app_key + '/code/' + data.service,
            headers:
                    {
                        'cache-control': 'no-cache',
                        'content-type': 'application/x-www-form-urlencoded'},
            form: {app_key: this.app_key, phone: mobile, api_key: this.api_key}};

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            res(body);
        });

    },
    /**
     * SMS Gateway.
     *
     */

    sendMessage: function (data, res) {

        var mobile = data.country_code + data.mobile;
        console.log(mobile);
        var options = {method: 'POST',
            url: 'https://api.ringcaptcha.com/' + this.app_key + '/sms',
            headers:
                    {
                        'cache-control': 'no-cache',
                        'content-type': 'application/x-www-form-urlencoded'},
            form: {app_key: this.app_key, phone: mobile, api_key: this.api_key, message: data.message}};

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            res(body);
        });

    },
    /**
     * Phone Number Information
     *
     */

    phoneNumberInformation: function (data, res) {

        var mobile = data.mobile;
        console.log(mobile);
        console.log(this.app_key);
        var options = {method: 'POST',
            url: 'https://api.ringcaptcha.com/' + this.app_key + '/normalize',
            headers:
                    {
                        'cache-control': 'no-cache',
                        'content-type': 'application/x-www-form-urlencoded'},
            form: {app_key: this.app_key, phone: mobile, api_key: this.api_key}};

        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            res(body);
        });

    }

}

module.exports = Ringcaptcha;
