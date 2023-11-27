const urlDecode = function (text) {
  const urlObject = {};
  const keyValuePairs = text.split("&");

  for (let pair of keyValuePairs) {
    const splitPair = pair.split("=");
    urlObject[splitPair[0]] = splitPair[1].split("%20").join(" ");
  }

  return urlObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
