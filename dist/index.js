"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFetch;
exports.useJsonResponse = useJsonResponse;

var _react = require("react");

var _reactUsePromise = _interopRequireDefault(require("react-use-promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useFetch(input, init) {
  var _usePromise = (0, _reactUsePromise.default)((0, _react.useMemo)(function () {
    return fetch(input, init);
  }, [input, init])),
      _usePromise2 = _slicedToArray(_usePromise, 2),
      response = _usePromise2[0],
      error = _usePromise2[1];

  return {
    error: error,
    isLoading: !response && !error,
    response: response
  };
}

function useJsonResponse(response) {
  return (0, _reactUsePromise.default)((0, _react.useMemo)(function () {
    return response ? response.json() : null;
  }, [response]));
}