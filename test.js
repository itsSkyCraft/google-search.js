const Google = require("./index");

const Client = new Google('caf03bbed9msha3591996a9568dap1bbf42jsn39f1184b4e0e');

Client.searchNews('President Biden', res => {
    console.log(res)
})