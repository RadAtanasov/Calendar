function prepareFormData (body) {
    var result = null;
    for (var key in body) {
        result = JSON.parse(key);
    }

    return result;
}

module.exports = prepareFormData;