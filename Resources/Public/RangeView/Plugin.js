/******/ ;(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {},
            /******/
        })
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter })
            /******/
        }
        /******/
    }
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
            /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true })
        /******/
    }
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value)
        /******/ if (mode & 8) return value
        /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value
        /******/ var ns = Object.create(null)
        /******/ __webpack_require__.r(ns)
        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value })
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function (key) {
                        return value[key]
                    }.bind(null, key)
                )
        /******/ return ns
        /******/
    }
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module['default']
                  }
                : /******/ function getModuleExports() {
                      return module
                  }
        /******/ __webpack_require__.d(getter, 'a', getter)
        /******/ return getter
        /******/
    }
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property)
    }
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = ''
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__((__webpack_require__.s = './src/index.js'))
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ './node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js':
            /*!************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js ***!
  \************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                var tslib_1 = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js')
                var manifest_1 = tslib_1.__importDefault(
                    __webpack_require__(
                        /*! ./manifest */ './node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js'
                    )
                )
                var createReadOnlyValue = function createReadOnlyValue(value) {
                    return {
                        value: value,
                        writable: false,
                        enumerable: false,
                        configurable: true,
                    }
                }
                function createConsumerApi(manifests, exposureMap) {
                    var api = {}
                    Object.keys(exposureMap).forEach(function (key) {
                        Object.defineProperty(api, key, createReadOnlyValue(exposureMap[key]))
                    })
                    Object.defineProperty(api, '@manifest', createReadOnlyValue(manifest_1['default'](manifests)))
                    Object.defineProperty(window, '@Neos:HostPluginAPI', createReadOnlyValue(api))
                }
                exports['default'] = createConsumerApi
                //# sourceMappingURL=createConsumerApi.js.map

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/dist/index.js':
            /*!************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/index.js ***!
  \************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                var tslib_1 = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js')
                var createConsumerApi_1 = tslib_1.__importDefault(
                    __webpack_require__(
                        /*! ./createConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js'
                    )
                )
                exports.createConsumerApi = createConsumerApi_1['default']
                var readFromConsumerApi_1 = tslib_1.__importDefault(
                    __webpack_require__(
                        /*! ./readFromConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js'
                    )
                )
                exports.readFromConsumerApi = readFromConsumerApi_1['default']
                var index_1 = __webpack_require__(
                    /*! ./registry/index */ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js'
                )
                exports.SynchronousRegistry = index_1.SynchronousRegistry
                exports.SynchronousMetaRegistry = index_1.SynchronousMetaRegistry
                exports['default'] = readFromConsumerApi_1['default']('manifest')
                //# sourceMappingURL=index.js.map

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js':
            /*!***************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js ***!
  \***************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                exports['default'] = function (manifests) {
                    return function (identifier, options, bootstrap) {
                        var _a
                        manifests.push(
                            ((_a = {}),
                            (_a[identifier] = {
                                options: options,
                                bootstrap: bootstrap,
                            }),
                            _a)
                        )
                    }
                }
                //# sourceMappingURL=manifest.js.map

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js':
            /*!**************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js ***!
  \**************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                var tslib_1 = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js')
                function readFromConsumerApi(key) {
                    return function () {
                        var _a
                        var args = []
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i]
                        }
                        if (window['@Neos:HostPluginAPI'] && window['@Neos:HostPluginAPI']['@' + key]) {
                            return (_a = window['@Neos:HostPluginAPI'])['@' + key].apply(_a, tslib_1.__spread(args))
                        }
                        throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")
                    }
                }
                exports['default'] = readFromConsumerApi
                //# sourceMappingURL=readFromConsumerApi.js.map

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js':
            /*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js ***!
  \********************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                var AbstractRegistry = (function () {
                    function AbstractRegistry(description) {
                        this.SERIAL_VERSION_UID = 'd8a5aa78-978e-11e6-ae22-56b6b6499611'
                        this.description = description
                    }
                    return AbstractRegistry
                })()
                exports['default'] = AbstractRegistry
                //# sourceMappingURL=AbstractRegistry.js.map

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js':
            /*!***************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js ***!
  \***************************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                var tslib_1 = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js')
                var SynchronousRegistry_1 = tslib_1.__importDefault(
                    __webpack_require__(
                        /*! ./SynchronousRegistry */ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js'
                    )
                )
                var SynchronousMetaRegistry = (function (_super) {
                    tslib_1.__extends(SynchronousMetaRegistry, _super)
                    function SynchronousMetaRegistry() {
                        return (_super !== null && _super.apply(this, arguments)) || this
                    }
                    SynchronousMetaRegistry.prototype.set = function (key, value) {
                        if (value.SERIAL_VERSION_UID !== 'd8a5aa78-978e-11e6-ae22-56b6b6499611') {
                            throw new Error('You can only add registries to a meta registry')
                        }
                        return _super.prototype.set.call(this, key, value)
                    }
                    return SynchronousMetaRegistry
                })(SynchronousRegistry_1['default'])
                exports['default'] = SynchronousMetaRegistry
                //# sourceMappingURL=SynchronousMetaRegistry.js.map

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js':
            /*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js ***!
  \***********************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                var tslib_1 = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js')
                var AbstractRegistry_1 = tslib_1.__importDefault(
                    __webpack_require__(
                        /*! ./AbstractRegistry */ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js'
                    )
                )
                var positional_array_sorter_1 = tslib_1.__importDefault(
                    __webpack_require__(
                        /*! @neos-project/positional-array-sorter */ './node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js'
                    )
                )
                var SynchronousRegistry = (function (_super) {
                    tslib_1.__extends(SynchronousRegistry, _super)
                    function SynchronousRegistry(description) {
                        var _this = _super.call(this, description) || this
                        _this._registry = []
                        return _this
                    }
                    SynchronousRegistry.prototype.set = function (key, value, position) {
                        if (position === void 0) {
                            position = 0
                        }
                        if (typeof key !== 'string') {
                            throw new Error('Key must be a string')
                        }
                        if (typeof position !== 'string' && typeof position !== 'number') {
                            throw new Error('Position must be a string or a number')
                        }
                        var entry = { key: key, value: value }
                        if (position) {
                            entry.position = position
                        }
                        var indexOfItemWithTheSameKey = this._registry.findIndex(function (item) {
                            return item.key === key
                        })
                        if (indexOfItemWithTheSameKey === -1) {
                            this._registry.push(entry)
                        } else {
                            this._registry[indexOfItemWithTheSameKey] = entry
                        }
                        return value
                    }
                    SynchronousRegistry.prototype.get = function (key) {
                        if (typeof key !== 'string') {
                            console.error('Key must be a string')
                            return null
                        }
                        var result = this._registry.find(function (item) {
                            return item.key === key
                        })
                        return result ? result.value : null
                    }
                    SynchronousRegistry.prototype._getChildrenWrapped = function (searchKey) {
                        var unsortedChildren = this._registry.filter(function (item) {
                            return item.key.indexOf(searchKey + '/') === 0
                        })
                        return positional_array_sorter_1['default'](unsortedChildren)
                    }
                    SynchronousRegistry.prototype.getChildrenAsObject = function (searchKey) {
                        var result = {}
                        this._getChildrenWrapped(searchKey).forEach(function (item) {
                            result[item.key] = item.value
                        })
                        return result
                    }
                    SynchronousRegistry.prototype.getChildren = function (searchKey) {
                        return this._getChildrenWrapped(searchKey).map(function (item) {
                            return item.value
                        })
                    }
                    SynchronousRegistry.prototype.has = function (key) {
                        if (typeof key !== 'string') {
                            console.error('Key must be a string')
                            return false
                        }
                        return Boolean(
                            this._registry.find(function (item) {
                                return item.key === key
                            })
                        )
                    }
                    SynchronousRegistry.prototype._getAllWrapped = function () {
                        return positional_array_sorter_1['default'](this._registry)
                    }
                    SynchronousRegistry.prototype.getAllAsObject = function () {
                        var result = {}
                        this._getAllWrapped().forEach(function (item) {
                            result[item.key] = item.value
                        })
                        return result
                    }
                    SynchronousRegistry.prototype.getAllAsList = function () {
                        return this._getAllWrapped().map(function (item) {
                            return Object.assign({ id: item.key }, item.value)
                        })
                    }
                    return SynchronousRegistry
                })(AbstractRegistry_1['default'])
                exports['default'] = SynchronousRegistry
                //# sourceMappingURL=SynchronousRegistry.js.map

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js':
            /*!*********************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js ***!
  \*********************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                var tslib_1 = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js')
                var SynchronousRegistry_1 = tslib_1.__importDefault(
                    __webpack_require__(
                        /*! ./SynchronousRegistry */ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js'
                    )
                )
                exports.SynchronousRegistry = SynchronousRegistry_1['default']
                var SynchronousMetaRegistry_1 = tslib_1.__importDefault(
                    __webpack_require__(
                        /*! ./SynchronousMetaRegistry */ './node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js'
                    )
                )
                exports.SynchronousMetaRegistry = SynchronousMetaRegistry_1['default']
                //# sourceMappingURL=index.js.map

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js':
            /*!********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js ***!
  \********************************************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                var _readFromConsumerApi = __webpack_require__(
                    /*! ../../../../dist/readFromConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js'
                )

                var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiDecorators

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js':
            /*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js ***!
  \*********************************************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                var _readFromConsumerApi = __webpack_require__(
                    /*! ../../../../dist/readFromConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js'
                )

                var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().NeosUiReduxStore

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js':
            /*!*********************************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js ***!
  \*********************************************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                var _readFromConsumerApi = __webpack_require__(
                    /*! ../../../../dist/readFromConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js'
                )

                var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                module.exports = (0, _readFromConsumerApi2.default)('NeosProjectPackages')().ReactUiComponents

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js':
            /*!********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js ***!
  \********************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                var _readFromConsumerApi = __webpack_require__(
                    /*! ../../../../dist/readFromConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js'
                )

                var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                module.exports = (0, _readFromConsumerApi2.default)('vendor')().plow

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js':
            /*!***********************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js ***!
  \***********************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                var _readFromConsumerApi = __webpack_require__(
                    /*! ../../../../dist/readFromConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js'
                )

                var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                module.exports = (0, _readFromConsumerApi2.default)('vendor')().PropTypes

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js':
            /*!************************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js ***!
  \************************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                var _readFromConsumerApi = __webpack_require__(
                    /*! ../../../../dist/readFromConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js'
                )

                var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                module.exports = (0, _readFromConsumerApi2.default)('vendor')().reactRedux

                /***/
            },

        /***/ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js':
            /*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js ***!
  \******************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                var _readFromConsumerApi = __webpack_require__(
                    /*! ../../../../dist/readFromConsumerApi */ './node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js'
                )

                var _readFromConsumerApi2 = _interopRequireDefault(_readFromConsumerApi)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                module.exports = (0, _readFromConsumerApi2.default)('vendor')().React

                /***/
            },

        /***/ './node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js':
            /*!******************************************************************************************!*\
  !*** ./node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js ***!
  \******************************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                exports.__esModule = true
                var tslib_1 = __webpack_require__(/*! tslib */ './node_modules/tslib/tslib.es6.js')
                var positionalArraySorter = function positionalArraySorter(subject, position, idKey) {
                    if (position === void 0) {
                        position = 'position'
                    }
                    if (idKey === void 0) {
                        idKey = 'key'
                    }
                    var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e, e_6, _f, e_7, _g
                    var positionAccessor =
                        typeof position === 'string'
                            ? function (value) {
                                  return value[position]
                              }
                            : position
                    var indexMapping = {}
                    var middleKeys = {}
                    var startKeys = {}
                    var endKeys = {}
                    var beforeKeys = {}
                    var afterKeys = {}
                    subject.forEach(function (item, index) {
                        var key = item[idKey] ? item[idKey] : String(index)
                        indexMapping[key] = index
                        var positionValue = positionAccessor(item)
                        var position = String(positionValue ? positionValue : index)
                        var invalid = false
                        if (position.startsWith('start')) {
                            var weightMatch = position.match(/start\s+(\d+)/)
                            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0
                            if (!startKeys[weight]) {
                                startKeys[weight] = []
                            }
                            startKeys[weight].push(key)
                        } else if (position.startsWith('end')) {
                            var weightMatch = position.match(/end\s+(\d+)/)
                            var weight = weightMatch && weightMatch[1] ? Number(weightMatch[1]) : 0
                            if (!endKeys[weight]) {
                                endKeys[weight] = []
                            }
                            endKeys[weight].push(key)
                        } else if (position.startsWith('before')) {
                            var match = position.match(/before\s+(\S+)(\s+(\d+))?/)
                            if (!match) {
                                invalid = true
                            } else {
                                var reference = match[1]
                                var weight = match[3] ? Number(match[3]) : 0
                                if (!beforeKeys[reference]) {
                                    beforeKeys[reference] = {}
                                }
                                if (!beforeKeys[reference][weight]) {
                                    beforeKeys[reference][weight] = []
                                }
                                beforeKeys[reference][weight].push(key)
                            }
                        } else if (position.startsWith('after')) {
                            var match = position.match(/after\s+(\S+)(\s+(\d+))?/)
                            if (!match) {
                                invalid = true
                            } else {
                                var reference = match[1]
                                var weight = match[3] ? Number(match[3]) : 0
                                if (!afterKeys[reference]) {
                                    afterKeys[reference] = {}
                                }
                                if (!afterKeys[reference][weight]) {
                                    afterKeys[reference][weight] = []
                                }
                                afterKeys[reference][weight].push(key)
                            }
                        } else {
                            invalid = true
                        }
                        if (invalid) {
                            var numberPosition = parseFloat(position)
                            if (isNaN(numberPosition) || !isFinite(numberPosition)) {
                                numberPosition = index
                            }
                            if (!middleKeys[numberPosition]) {
                                middleKeys[numberPosition] = []
                            }
                            middleKeys[numberPosition].push(key)
                        }
                    })
                    var resultStart = []
                    var resultMiddle = []
                    var resultEnd = []
                    var processedKeys = []
                    var sortedWeights = function sortedWeights(dict, asc) {
                        var weights = Object.keys(dict)
                            .map(function (x) {
                                return Number(x)
                            })
                            .sort(function (a, b) {
                                return a - b
                            })
                        return asc ? weights : weights.reverse()
                    }
                    var addToResults = function addToResults(keys, result) {
                        keys.forEach(function (key) {
                            var e_8, _a, e_9, _b
                            if (processedKeys.indexOf(key) >= 0) {
                                return
                            }
                            processedKeys.push(key)
                            if (beforeKeys[key]) {
                                var beforeWeights = sortedWeights(beforeKeys[key], true)
                                try {
                                    for (
                                        var beforeWeights_1 = tslib_1.__values(beforeWeights),
                                            beforeWeights_1_1 = beforeWeights_1.next();
                                        !beforeWeights_1_1.done;
                                        beforeWeights_1_1 = beforeWeights_1.next()
                                    ) {
                                        var i = beforeWeights_1_1.value
                                        addToResults(beforeKeys[key][i], result)
                                    }
                                } catch (e_8_1) {
                                    e_8 = { error: e_8_1 }
                                } finally {
                                    try {
                                        if (
                                            beforeWeights_1_1 &&
                                            !beforeWeights_1_1.done &&
                                            (_a = beforeWeights_1['return'])
                                        )
                                            _a.call(beforeWeights_1)
                                    } finally {
                                        if (e_8) throw e_8.error
                                    }
                                }
                            }
                            result.push(key)
                            if (afterKeys[key]) {
                                var afterWeights = sortedWeights(afterKeys[key], false)
                                try {
                                    for (
                                        var afterWeights_1 = tslib_1.__values(afterWeights),
                                            afterWeights_1_1 = afterWeights_1.next();
                                        !afterWeights_1_1.done;
                                        afterWeights_1_1 = afterWeights_1.next()
                                    ) {
                                        var i = afterWeights_1_1.value
                                        addToResults(afterKeys[key][i], result)
                                    }
                                } catch (e_9_1) {
                                    e_9 = { error: e_9_1 }
                                } finally {
                                    try {
                                        if (
                                            afterWeights_1_1 &&
                                            !afterWeights_1_1.done &&
                                            (_b = afterWeights_1['return'])
                                        )
                                            _b.call(afterWeights_1)
                                    } finally {
                                        if (e_9) throw e_9.error
                                    }
                                }
                            }
                        })
                    }
                    try {
                        for (
                            var _h = tslib_1.__values(sortedWeights(startKeys, false)), _j = _h.next();
                            !_j.done;
                            _j = _h.next()
                        ) {
                            var i = _j.value
                            addToResults(startKeys[i], resultStart)
                        }
                    } catch (e_1_1) {
                        e_1 = { error: e_1_1 }
                    } finally {
                        try {
                            if (_j && !_j.done && (_a = _h['return'])) _a.call(_h)
                        } finally {
                            if (e_1) throw e_1.error
                        }
                    }
                    try {
                        for (
                            var _k = tslib_1.__values(sortedWeights(middleKeys, true)), _l = _k.next();
                            !_l.done;
                            _l = _k.next()
                        ) {
                            var i = _l.value
                            addToResults(middleKeys[i], resultMiddle)
                        }
                    } catch (e_2_1) {
                        e_2 = { error: e_2_1 }
                    } finally {
                        try {
                            if (_l && !_l.done && (_b = _k['return'])) _b.call(_k)
                        } finally {
                            if (e_2) throw e_2.error
                        }
                    }
                    try {
                        for (
                            var _m = tslib_1.__values(sortedWeights(endKeys, true)), _o = _m.next();
                            !_o.done;
                            _o = _m.next()
                        ) {
                            var i = _o.value
                            addToResults(endKeys[i], resultEnd)
                        }
                    } catch (e_3_1) {
                        e_3 = { error: e_3_1 }
                    } finally {
                        try {
                            if (_o && !_o.done && (_c = _m['return'])) _c.call(_m)
                        } finally {
                            if (e_3) throw e_3.error
                        }
                    }
                    try {
                        for (
                            var _p = tslib_1.__values(Object.keys(beforeKeys)), _q = _p.next();
                            !_q.done;
                            _q = _p.next()
                        ) {
                            var key = _q.value
                            if (processedKeys.indexOf(key) >= 0) {
                                continue
                            }
                            try {
                                for (
                                    var _r = tslib_1.__values(sortedWeights(beforeKeys[key], false)), _s = _r.next();
                                    !_s.done;
                                    _s = _r.next()
                                ) {
                                    var i = _s.value
                                    addToResults(beforeKeys[key][i], resultStart)
                                }
                            } catch (e_5_1) {
                                e_5 = { error: e_5_1 }
                            } finally {
                                try {
                                    if (_s && !_s.done && (_e = _r['return'])) _e.call(_r)
                                } finally {
                                    if (e_5) throw e_5.error
                                }
                            }
                        }
                    } catch (e_4_1) {
                        e_4 = { error: e_4_1 }
                    } finally {
                        try {
                            if (_q && !_q.done && (_d = _p['return'])) _d.call(_p)
                        } finally {
                            if (e_4) throw e_4.error
                        }
                    }
                    try {
                        for (
                            var _t = tslib_1.__values(Object.keys(afterKeys)), _u = _t.next();
                            !_u.done;
                            _u = _t.next()
                        ) {
                            var key = _u.value
                            if (processedKeys.indexOf(key) >= 0) {
                                continue
                            }
                            try {
                                for (
                                    var _v = tslib_1.__values(sortedWeights(afterKeys[key], false)), _w = _v.next();
                                    !_w.done;
                                    _w = _v.next()
                                ) {
                                    var i = _w.value
                                    addToResults(afterKeys[key][i], resultMiddle)
                                }
                            } catch (e_7_1) {
                                e_7 = { error: e_7_1 }
                            } finally {
                                try {
                                    if (_w && !_w.done && (_g = _v['return'])) _g.call(_v)
                                } finally {
                                    if (e_7) throw e_7.error
                                }
                            }
                        }
                    } catch (e_6_1) {
                        e_6 = { error: e_6_1 }
                    } finally {
                        try {
                            if (_u && !_u.done && (_f = _t['return'])) _f.call(_t)
                        } finally {
                            if (e_6) throw e_6.error
                        }
                    }
                    var sortedKeys = tslib_1.__spread(resultStart, resultMiddle, resultEnd)
                    return sortedKeys
                        .map(function (key) {
                            return indexMapping[key]
                        })
                        .map(function (i) {
                            return subject[i]
                        })
                }
                exports['default'] = positionalArraySorter
                //# sourceMappingURL=positionalArraySorter.js.map

                /***/
            },

        /***/ './node_modules/lodash.isequal/index.js':
            /*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                /* WEBPACK VAR INJECTION */ ;(function (global, module) {
                    /**
                     * Lodash (Custom Build) <https://lodash.com/>
                     * Build: `lodash modularize exports="npm" -o ./`
                     * Copyright JS Foundation and other contributors <https://js.foundation/>
                     * Released under MIT license <https://lodash.com/license>
                     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
                     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
                     */

                    /** Used as the size to enable large array optimizations. */
                    var LARGE_ARRAY_SIZE = 200

                    /** Used to stand-in for `undefined` hash values. */
                    var HASH_UNDEFINED = '__lodash_hash_undefined__'

                    /** Used to compose bitmasks for value comparisons. */
                    var COMPARE_PARTIAL_FLAG = 1,
                        COMPARE_UNORDERED_FLAG = 2

                    /** Used as references for various `Number` constants. */
                    var MAX_SAFE_INTEGER = 9007199254740991

                    /** `Object#toString` result references. */
                    var argsTag = '[object Arguments]',
                        arrayTag = '[object Array]',
                        asyncTag = '[object AsyncFunction]',
                        boolTag = '[object Boolean]',
                        dateTag = '[object Date]',
                        errorTag = '[object Error]',
                        funcTag = '[object Function]',
                        genTag = '[object GeneratorFunction]',
                        mapTag = '[object Map]',
                        numberTag = '[object Number]',
                        nullTag = '[object Null]',
                        objectTag = '[object Object]',
                        promiseTag = '[object Promise]',
                        proxyTag = '[object Proxy]',
                        regexpTag = '[object RegExp]',
                        setTag = '[object Set]',
                        stringTag = '[object String]',
                        symbolTag = '[object Symbol]',
                        undefinedTag = '[object Undefined]',
                        weakMapTag = '[object WeakMap]'

                    var arrayBufferTag = '[object ArrayBuffer]',
                        dataViewTag = '[object DataView]',
                        float32Tag = '[object Float32Array]',
                        float64Tag = '[object Float64Array]',
                        int8Tag = '[object Int8Array]',
                        int16Tag = '[object Int16Array]',
                        int32Tag = '[object Int32Array]',
                        uint8Tag = '[object Uint8Array]',
                        uint8ClampedTag = '[object Uint8ClampedArray]',
                        uint16Tag = '[object Uint16Array]',
                        uint32Tag = '[object Uint32Array]'

                    /**
                     * Used to match `RegExp`
                     * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
                     */
                    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g

                    /** Used to detect host constructors (Safari). */
                    var reIsHostCtor = /^\[object .+?Constructor\]$/

                    /** Used to detect unsigned integer values. */
                    var reIsUint = /^(?:0|[1-9]\d*)$/

                    /** Used to identify `toStringTag` values of typed arrays. */
                    var typedArrayTags = {}
                    typedArrayTags[float32Tag] =
                        typedArrayTags[float64Tag] =
                        typedArrayTags[int8Tag] =
                        typedArrayTags[int16Tag] =
                        typedArrayTags[int32Tag] =
                        typedArrayTags[uint8Tag] =
                        typedArrayTags[uint8ClampedTag] =
                        typedArrayTags[uint16Tag] =
                        typedArrayTags[uint32Tag] =
                            true
                    typedArrayTags[argsTag] =
                        typedArrayTags[arrayTag] =
                        typedArrayTags[arrayBufferTag] =
                        typedArrayTags[boolTag] =
                        typedArrayTags[dataViewTag] =
                        typedArrayTags[dateTag] =
                        typedArrayTags[errorTag] =
                        typedArrayTags[funcTag] =
                        typedArrayTags[mapTag] =
                        typedArrayTags[numberTag] =
                        typedArrayTags[objectTag] =
                        typedArrayTags[regexpTag] =
                        typedArrayTags[setTag] =
                        typedArrayTags[stringTag] =
                        typedArrayTags[weakMapTag] =
                            false

                    /** Detect free variable `global` from Node.js. */
                    var freeGlobal = typeof global == 'object' && global && global.Object === Object && global

                    /** Detect free variable `self`. */
                    var freeSelf = typeof self == 'object' && self && self.Object === Object && self

                    /** Used as a reference to the global object. */
                    var root = freeGlobal || freeSelf || Function('return this')()

                    /** Detect free variable `exports`. */
                    var freeExports = true && exports && !exports.nodeType && exports

                    /** Detect free variable `module`. */
                    var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module

                    /** Detect the popular CommonJS extension `module.exports`. */
                    var moduleExports = freeModule && freeModule.exports === freeExports

                    /** Detect free variable `process` from Node.js. */
                    var freeProcess = moduleExports && freeGlobal.process

                    /** Used to access faster Node.js helpers. */
                    var nodeUtil = (function () {
                        try {
                            return freeProcess && freeProcess.binding && freeProcess.binding('util')
                        } catch (e) {}
                    })()

                    /* Node.js helper references. */
                    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray

                    /**
                     * A specialized version of `_.filter` for arrays without support for
                     * iteratee shorthands.
                     *
                     * @private
                     * @param {Array} [array] The array to iterate over.
                     * @param {Function} predicate The function invoked per iteration.
                     * @returns {Array} Returns the new filtered array.
                     */
                    function arrayFilter(array, predicate) {
                        var index = -1,
                            length = array == null ? 0 : array.length,
                            resIndex = 0,
                            result = []

                        while (++index < length) {
                            var value = array[index]
                            if (predicate(value, index, array)) {
                                result[resIndex++] = value
                            }
                        }
                        return result
                    }

                    /**
                     * Appends the elements of `values` to `array`.
                     *
                     * @private
                     * @param {Array} array The array to modify.
                     * @param {Array} values The values to append.
                     * @returns {Array} Returns `array`.
                     */
                    function arrayPush(array, values) {
                        var index = -1,
                            length = values.length,
                            offset = array.length

                        while (++index < length) {
                            array[offset + index] = values[index]
                        }
                        return array
                    }

                    /**
                     * A specialized version of `_.some` for arrays without support for iteratee
                     * shorthands.
                     *
                     * @private
                     * @param {Array} [array] The array to iterate over.
                     * @param {Function} predicate The function invoked per iteration.
                     * @returns {boolean} Returns `true` if any element passes the predicate check,
                     *  else `false`.
                     */
                    function arraySome(array, predicate) {
                        var index = -1,
                            length = array == null ? 0 : array.length

                        while (++index < length) {
                            if (predicate(array[index], index, array)) {
                                return true
                            }
                        }
                        return false
                    }

                    /**
                     * The base implementation of `_.times` without support for iteratee shorthands
                     * or max array length checks.
                     *
                     * @private
                     * @param {number} n The number of times to invoke `iteratee`.
                     * @param {Function} iteratee The function invoked per iteration.
                     * @returns {Array} Returns the array of results.
                     */
                    function baseTimes(n, iteratee) {
                        var index = -1,
                            result = Array(n)

                        while (++index < n) {
                            result[index] = iteratee(index)
                        }
                        return result
                    }

                    /**
                     * The base implementation of `_.unary` without support for storing metadata.
                     *
                     * @private
                     * @param {Function} func The function to cap arguments for.
                     * @returns {Function} Returns the new capped function.
                     */
                    function baseUnary(func) {
                        return function (value) {
                            return func(value)
                        }
                    }

                    /**
                     * Checks if a `cache` value for `key` exists.
                     *
                     * @private
                     * @param {Object} cache The cache to query.
                     * @param {string} key The key of the entry to check.
                     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                     */
                    function cacheHas(cache, key) {
                        return cache.has(key)
                    }

                    /**
                     * Gets the value at `key` of `object`.
                     *
                     * @private
                     * @param {Object} [object] The object to query.
                     * @param {string} key The key of the property to get.
                     * @returns {*} Returns the property value.
                     */
                    function getValue(object, key) {
                        return object == null ? undefined : object[key]
                    }

                    /**
                     * Converts `map` to its key-value pairs.
                     *
                     * @private
                     * @param {Object} map The map to convert.
                     * @returns {Array} Returns the key-value pairs.
                     */
                    function mapToArray(map) {
                        var index = -1,
                            result = Array(map.size)

                        map.forEach(function (value, key) {
                            result[++index] = [key, value]
                        })
                        return result
                    }

                    /**
                     * Creates a unary function that invokes `func` with its argument transformed.
                     *
                     * @private
                     * @param {Function} func The function to wrap.
                     * @param {Function} transform The argument transform.
                     * @returns {Function} Returns the new function.
                     */
                    function overArg(func, transform) {
                        return function (arg) {
                            return func(transform(arg))
                        }
                    }

                    /**
                     * Converts `set` to an array of its values.
                     *
                     * @private
                     * @param {Object} set The set to convert.
                     * @returns {Array} Returns the values.
                     */
                    function setToArray(set) {
                        var index = -1,
                            result = Array(set.size)

                        set.forEach(function (value) {
                            result[++index] = value
                        })
                        return result
                    }

                    /** Used for built-in method references. */
                    var arrayProto = Array.prototype,
                        funcProto = Function.prototype,
                        objectProto = Object.prototype

                    /** Used to detect overreaching core-js shims. */
                    var coreJsData = root['__core-js_shared__']

                    /** Used to resolve the decompiled source of functions. */
                    var funcToString = funcProto.toString

                    /** Used to check objects for own properties. */
                    var hasOwnProperty = objectProto.hasOwnProperty

                    /** Used to detect methods masquerading as native. */
                    var maskSrcKey = (function () {
                        var uid = /[^.]+$/.exec((coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '')
                        return uid ? 'Symbol(src)_1.' + uid : ''
                    })()

                    /**
                     * Used to resolve the
                     * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
                     * of values.
                     */
                    var nativeObjectToString = objectProto.toString

                    /** Used to detect if a method is native. */
                    var reIsNative = RegExp(
                        '^' +
                            funcToString
                                .call(hasOwnProperty)
                                .replace(reRegExpChar, '\\$&')
                                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
                            '$'
                    )

                    /** Built-in value references. */
                    var Buffer = moduleExports ? root.Buffer : undefined,
                        Symbol = root.Symbol,
                        Uint8Array = root.Uint8Array,
                        propertyIsEnumerable = objectProto.propertyIsEnumerable,
                        splice = arrayProto.splice,
                        symToStringTag = Symbol ? Symbol.toStringTag : undefined

                    /* Built-in method references for those with the same name as other `lodash` methods. */
                    var nativeGetSymbols = Object.getOwnPropertySymbols,
                        nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
                        nativeKeys = overArg(Object.keys, Object)

                    /* Built-in method references that are verified to be native. */
                    var DataView = getNative(root, 'DataView'),
                        Map = getNative(root, 'Map'),
                        Promise = getNative(root, 'Promise'),
                        Set = getNative(root, 'Set'),
                        WeakMap = getNative(root, 'WeakMap'),
                        nativeCreate = getNative(Object, 'create')

                    /** Used to detect maps, sets, and weakmaps. */
                    var dataViewCtorString = toSource(DataView),
                        mapCtorString = toSource(Map),
                        promiseCtorString = toSource(Promise),
                        setCtorString = toSource(Set),
                        weakMapCtorString = toSource(WeakMap)

                    /** Used to convert symbols to primitives and strings. */
                    var symbolProto = Symbol ? Symbol.prototype : undefined,
                        symbolValueOf = symbolProto ? symbolProto.valueOf : undefined

                    /**
                     * Creates a hash object.
                     *
                     * @private
                     * @constructor
                     * @param {Array} [entries] The key-value pairs to cache.
                     */
                    function Hash(entries) {
                        var index = -1,
                            length = entries == null ? 0 : entries.length

                        this.clear()
                        while (++index < length) {
                            var entry = entries[index]
                            this.set(entry[0], entry[1])
                        }
                    }

                    /**
                     * Removes all key-value entries from the hash.
                     *
                     * @private
                     * @name clear
                     * @memberOf Hash
                     */
                    function hashClear() {
                        this.__data__ = nativeCreate ? nativeCreate(null) : {}
                        this.size = 0
                    }

                    /**
                     * Removes `key` and its value from the hash.
                     *
                     * @private
                     * @name delete
                     * @memberOf Hash
                     * @param {Object} hash The hash to modify.
                     * @param {string} key The key of the value to remove.
                     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                     */
                    function hashDelete(key) {
                        var result = this.has(key) && delete this.__data__[key]
                        this.size -= result ? 1 : 0
                        return result
                    }

                    /**
                     * Gets the hash value for `key`.
                     *
                     * @private
                     * @name get
                     * @memberOf Hash
                     * @param {string} key The key of the value to get.
                     * @returns {*} Returns the entry value.
                     */
                    function hashGet(key) {
                        var data = this.__data__
                        if (nativeCreate) {
                            var result = data[key]
                            return result === HASH_UNDEFINED ? undefined : result
                        }
                        return hasOwnProperty.call(data, key) ? data[key] : undefined
                    }

                    /**
                     * Checks if a hash value for `key` exists.
                     *
                     * @private
                     * @name has
                     * @memberOf Hash
                     * @param {string} key The key of the entry to check.
                     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                     */
                    function hashHas(key) {
                        var data = this.__data__
                        return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key)
                    }

                    /**
                     * Sets the hash `key` to `value`.
                     *
                     * @private
                     * @name set
                     * @memberOf Hash
                     * @param {string} key The key of the value to set.
                     * @param {*} value The value to set.
                     * @returns {Object} Returns the hash instance.
                     */
                    function hashSet(key, value) {
                        var data = this.__data__
                        this.size += this.has(key) ? 0 : 1
                        data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value
                        return this
                    }

                    // Add methods to `Hash`.
                    Hash.prototype.clear = hashClear
                    Hash.prototype['delete'] = hashDelete
                    Hash.prototype.get = hashGet
                    Hash.prototype.has = hashHas
                    Hash.prototype.set = hashSet

                    /**
                     * Creates an list cache object.
                     *
                     * @private
                     * @constructor
                     * @param {Array} [entries] The key-value pairs to cache.
                     */
                    function ListCache(entries) {
                        var index = -1,
                            length = entries == null ? 0 : entries.length

                        this.clear()
                        while (++index < length) {
                            var entry = entries[index]
                            this.set(entry[0], entry[1])
                        }
                    }

                    /**
                     * Removes all key-value entries from the list cache.
                     *
                     * @private
                     * @name clear
                     * @memberOf ListCache
                     */
                    function listCacheClear() {
                        this.__data__ = []
                        this.size = 0
                    }

                    /**
                     * Removes `key` and its value from the list cache.
                     *
                     * @private
                     * @name delete
                     * @memberOf ListCache
                     * @param {string} key The key of the value to remove.
                     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                     */
                    function listCacheDelete(key) {
                        var data = this.__data__,
                            index = assocIndexOf(data, key)

                        if (index < 0) {
                            return false
                        }
                        var lastIndex = data.length - 1
                        if (index == lastIndex) {
                            data.pop()
                        } else {
                            splice.call(data, index, 1)
                        }
                        --this.size
                        return true
                    }

                    /**
                     * Gets the list cache value for `key`.
                     *
                     * @private
                     * @name get
                     * @memberOf ListCache
                     * @param {string} key The key of the value to get.
                     * @returns {*} Returns the entry value.
                     */
                    function listCacheGet(key) {
                        var data = this.__data__,
                            index = assocIndexOf(data, key)

                        return index < 0 ? undefined : data[index][1]
                    }

                    /**
                     * Checks if a list cache value for `key` exists.
                     *
                     * @private
                     * @name has
                     * @memberOf ListCache
                     * @param {string} key The key of the entry to check.
                     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                     */
                    function listCacheHas(key) {
                        return assocIndexOf(this.__data__, key) > -1
                    }

                    /**
                     * Sets the list cache `key` to `value`.
                     *
                     * @private
                     * @name set
                     * @memberOf ListCache
                     * @param {string} key The key of the value to set.
                     * @param {*} value The value to set.
                     * @returns {Object} Returns the list cache instance.
                     */
                    function listCacheSet(key, value) {
                        var data = this.__data__,
                            index = assocIndexOf(data, key)

                        if (index < 0) {
                            ++this.size
                            data.push([key, value])
                        } else {
                            data[index][1] = value
                        }
                        return this
                    }

                    // Add methods to `ListCache`.
                    ListCache.prototype.clear = listCacheClear
                    ListCache.prototype['delete'] = listCacheDelete
                    ListCache.prototype.get = listCacheGet
                    ListCache.prototype.has = listCacheHas
                    ListCache.prototype.set = listCacheSet

                    /**
                     * Creates a map cache object to store key-value pairs.
                     *
                     * @private
                     * @constructor
                     * @param {Array} [entries] The key-value pairs to cache.
                     */
                    function MapCache(entries) {
                        var index = -1,
                            length = entries == null ? 0 : entries.length

                        this.clear()
                        while (++index < length) {
                            var entry = entries[index]
                            this.set(entry[0], entry[1])
                        }
                    }

                    /**
                     * Removes all key-value entries from the map.
                     *
                     * @private
                     * @name clear
                     * @memberOf MapCache
                     */
                    function mapCacheClear() {
                        this.size = 0
                        this.__data__ = {
                            hash: new Hash(),
                            map: new (Map || ListCache)(),
                            string: new Hash(),
                        }
                    }

                    /**
                     * Removes `key` and its value from the map.
                     *
                     * @private
                     * @name delete
                     * @memberOf MapCache
                     * @param {string} key The key of the value to remove.
                     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                     */
                    function mapCacheDelete(key) {
                        var result = getMapData(this, key)['delete'](key)
                        this.size -= result ? 1 : 0
                        return result
                    }

                    /**
                     * Gets the map value for `key`.
                     *
                     * @private
                     * @name get
                     * @memberOf MapCache
                     * @param {string} key The key of the value to get.
                     * @returns {*} Returns the entry value.
                     */
                    function mapCacheGet(key) {
                        return getMapData(this, key).get(key)
                    }

                    /**
                     * Checks if a map value for `key` exists.
                     *
                     * @private
                     * @name has
                     * @memberOf MapCache
                     * @param {string} key The key of the entry to check.
                     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                     */
                    function mapCacheHas(key) {
                        return getMapData(this, key).has(key)
                    }

                    /**
                     * Sets the map `key` to `value`.
                     *
                     * @private
                     * @name set
                     * @memberOf MapCache
                     * @param {string} key The key of the value to set.
                     * @param {*} value The value to set.
                     * @returns {Object} Returns the map cache instance.
                     */
                    function mapCacheSet(key, value) {
                        var data = getMapData(this, key),
                            size = data.size

                        data.set(key, value)
                        this.size += data.size == size ? 0 : 1
                        return this
                    }

                    // Add methods to `MapCache`.
                    MapCache.prototype.clear = mapCacheClear
                    MapCache.prototype['delete'] = mapCacheDelete
                    MapCache.prototype.get = mapCacheGet
                    MapCache.prototype.has = mapCacheHas
                    MapCache.prototype.set = mapCacheSet

                    /**
                     *
                     * Creates an array cache object to store unique values.
                     *
                     * @private
                     * @constructor
                     * @param {Array} [values] The values to cache.
                     */
                    function SetCache(values) {
                        var index = -1,
                            length = values == null ? 0 : values.length

                        this.__data__ = new MapCache()
                        while (++index < length) {
                            this.add(values[index])
                        }
                    }

                    /**
                     * Adds `value` to the array cache.
                     *
                     * @private
                     * @name add
                     * @memberOf SetCache
                     * @alias push
                     * @param {*} value The value to cache.
                     * @returns {Object} Returns the cache instance.
                     */
                    function setCacheAdd(value) {
                        this.__data__.set(value, HASH_UNDEFINED)
                        return this
                    }

                    /**
                     * Checks if `value` is in the array cache.
                     *
                     * @private
                     * @name has
                     * @memberOf SetCache
                     * @param {*} value The value to search for.
                     * @returns {number} Returns `true` if `value` is found, else `false`.
                     */
                    function setCacheHas(value) {
                        return this.__data__.has(value)
                    }

                    // Add methods to `SetCache`.
                    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd
                    SetCache.prototype.has = setCacheHas

                    /**
                     * Creates a stack cache object to store key-value pairs.
                     *
                     * @private
                     * @constructor
                     * @param {Array} [entries] The key-value pairs to cache.
                     */
                    function Stack(entries) {
                        var data = (this.__data__ = new ListCache(entries))
                        this.size = data.size
                    }

                    /**
                     * Removes all key-value entries from the stack.
                     *
                     * @private
                     * @name clear
                     * @memberOf Stack
                     */
                    function stackClear() {
                        this.__data__ = new ListCache()
                        this.size = 0
                    }

                    /**
                     * Removes `key` and its value from the stack.
                     *
                     * @private
                     * @name delete
                     * @memberOf Stack
                     * @param {string} key The key of the value to remove.
                     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
                     */
                    function stackDelete(key) {
                        var data = this.__data__,
                            result = data['delete'](key)

                        this.size = data.size
                        return result
                    }

                    /**
                     * Gets the stack value for `key`.
                     *
                     * @private
                     * @name get
                     * @memberOf Stack
                     * @param {string} key The key of the value to get.
                     * @returns {*} Returns the entry value.
                     */
                    function stackGet(key) {
                        return this.__data__.get(key)
                    }

                    /**
                     * Checks if a stack value for `key` exists.
                     *
                     * @private
                     * @name has
                     * @memberOf Stack
                     * @param {string} key The key of the entry to check.
                     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
                     */
                    function stackHas(key) {
                        return this.__data__.has(key)
                    }

                    /**
                     * Sets the stack `key` to `value`.
                     *
                     * @private
                     * @name set
                     * @memberOf Stack
                     * @param {string} key The key of the value to set.
                     * @param {*} value The value to set.
                     * @returns {Object} Returns the stack cache instance.
                     */
                    function stackSet(key, value) {
                        var data = this.__data__
                        if (data instanceof ListCache) {
                            var pairs = data.__data__
                            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
                                pairs.push([key, value])
                                this.size = ++data.size
                                return this
                            }
                            data = this.__data__ = new MapCache(pairs)
                        }
                        data.set(key, value)
                        this.size = data.size
                        return this
                    }

                    // Add methods to `Stack`.
                    Stack.prototype.clear = stackClear
                    Stack.prototype['delete'] = stackDelete
                    Stack.prototype.get = stackGet
                    Stack.prototype.has = stackHas
                    Stack.prototype.set = stackSet

                    /**
                     * Creates an array of the enumerable property names of the array-like `value`.
                     *
                     * @private
                     * @param {*} value The value to query.
                     * @param {boolean} inherited Specify returning inherited property names.
                     * @returns {Array} Returns the array of property names.
                     */
                    function arrayLikeKeys(value, inherited) {
                        var isArr = isArray(value),
                            isArg = !isArr && isArguments(value),
                            isBuff = !isArr && !isArg && isBuffer(value),
                            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
                            skipIndexes = isArr || isArg || isBuff || isType,
                            result = skipIndexes ? baseTimes(value.length, String) : [],
                            length = result.length

                        for (var key in value) {
                            if (
                                (inherited || hasOwnProperty.call(value, key)) &&
                                !(
                                    skipIndexes &&
                                    // Safari 9 has enumerable `arguments.length` in strict mode.
                                    (key == 'length' ||
                                        // Node.js 0.10 has enumerable non-index properties on buffers.
                                        (isBuff && (key == 'offset' || key == 'parent')) ||
                                        // PhantomJS 2 has enumerable non-index properties on typed arrays.
                                        (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
                                        // Skip index properties.
                                        isIndex(key, length))
                                )
                            ) {
                                result.push(key)
                            }
                        }
                        return result
                    }

                    /**
                     * Gets the index at which the `key` is found in `array` of key-value pairs.
                     *
                     * @private
                     * @param {Array} array The array to inspect.
                     * @param {*} key The key to search for.
                     * @returns {number} Returns the index of the matched value, else `-1`.
                     */
                    function assocIndexOf(array, key) {
                        var length = array.length
                        while (length--) {
                            if (eq(array[length][0], key)) {
                                return length
                            }
                        }
                        return -1
                    }

                    /**
                     * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
                     * `keysFunc` and `symbolsFunc` to get the enumerable property names and
                     * symbols of `object`.
                     *
                     * @private
                     * @param {Object} object The object to query.
                     * @param {Function} keysFunc The function to get the keys of `object`.
                     * @param {Function} symbolsFunc The function to get the symbols of `object`.
                     * @returns {Array} Returns the array of property names and symbols.
                     */
                    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
                        var result = keysFunc(object)
                        return isArray(object) ? result : arrayPush(result, symbolsFunc(object))
                    }

                    /**
                     * The base implementation of `getTag` without fallbacks for buggy environments.
                     *
                     * @private
                     * @param {*} value The value to query.
                     * @returns {string} Returns the `toStringTag`.
                     */
                    function baseGetTag(value) {
                        if (value == null) {
                            return value === undefined ? undefinedTag : nullTag
                        }
                        return symToStringTag && symToStringTag in Object(value)
                            ? getRawTag(value)
                            : objectToString(value)
                    }

                    /**
                     * The base implementation of `_.isArguments`.
                     *
                     * @private
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
                     */
                    function baseIsArguments(value) {
                        return isObjectLike(value) && baseGetTag(value) == argsTag
                    }

                    /**
                     * The base implementation of `_.isEqual` which supports partial comparisons
                     * and tracks traversed objects.
                     *
                     * @private
                     * @param {*} value The value to compare.
                     * @param {*} other The other value to compare.
                     * @param {boolean} bitmask The bitmask flags.
                     *  1 - Unordered comparison
                     *  2 - Partial comparison
                     * @param {Function} [customizer] The function to customize comparisons.
                     * @param {Object} [stack] Tracks traversed `value` and `other` objects.
                     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
                     */
                    function baseIsEqual(value, other, bitmask, customizer, stack) {
                        if (value === other) {
                            return true
                        }
                        if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
                            return value !== value && other !== other
                        }
                        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack)
                    }

                    /**
                     * A specialized version of `baseIsEqual` for arrays and objects which performs
                     * deep comparisons and tracks traversed objects enabling objects with circular
                     * references to be compared.
                     *
                     * @private
                     * @param {Object} object The object to compare.
                     * @param {Object} other The other object to compare.
                     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
                     * @param {Function} customizer The function to customize comparisons.
                     * @param {Function} equalFunc The function to determine equivalents of values.
                     * @param {Object} [stack] Tracks traversed `object` and `other` objects.
                     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
                     */
                    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
                        var objIsArr = isArray(object),
                            othIsArr = isArray(other),
                            objTag = objIsArr ? arrayTag : getTag(object),
                            othTag = othIsArr ? arrayTag : getTag(other)

                        objTag = objTag == argsTag ? objectTag : objTag
                        othTag = othTag == argsTag ? objectTag : othTag

                        var objIsObj = objTag == objectTag,
                            othIsObj = othTag == objectTag,
                            isSameTag = objTag == othTag

                        if (isSameTag && isBuffer(object)) {
                            if (!isBuffer(other)) {
                                return false
                            }
                            objIsArr = true
                            objIsObj = false
                        }
                        if (isSameTag && !objIsObj) {
                            stack || (stack = new Stack())
                            return objIsArr || isTypedArray(object)
                                ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
                                : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack)
                        }
                        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                            var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
                                othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__')

                            if (objIsWrapped || othIsWrapped) {
                                var objUnwrapped = objIsWrapped ? object.value() : object,
                                    othUnwrapped = othIsWrapped ? other.value() : other

                                stack || (stack = new Stack())
                                return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)
                            }
                        }
                        if (!isSameTag) {
                            return false
                        }
                        stack || (stack = new Stack())
                        return equalObjects(object, other, bitmask, customizer, equalFunc, stack)
                    }

                    /**
                     * The base implementation of `_.isNative` without bad shim checks.
                     *
                     * @private
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is a native function,
                     *  else `false`.
                     */
                    function baseIsNative(value) {
                        if (!isObject(value) || isMasked(value)) {
                            return false
                        }
                        var pattern = isFunction(value) ? reIsNative : reIsHostCtor
                        return pattern.test(toSource(value))
                    }

                    /**
                     * The base implementation of `_.isTypedArray` without Node.js optimizations.
                     *
                     * @private
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
                     */
                    function baseIsTypedArray(value) {
                        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)]
                    }

                    /**
                     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
                     *
                     * @private
                     * @param {Object} object The object to query.
                     * @returns {Array} Returns the array of property names.
                     */
                    function baseKeys(object) {
                        if (!isPrototype(object)) {
                            return nativeKeys(object)
                        }
                        var result = []
                        for (var key in Object(object)) {
                            if (hasOwnProperty.call(object, key) && key != 'constructor') {
                                result.push(key)
                            }
                        }
                        return result
                    }

                    /**
                     * A specialized version of `baseIsEqualDeep` for arrays with support for
                     * partial deep comparisons.
                     *
                     * @private
                     * @param {Array} array The array to compare.
                     * @param {Array} other The other array to compare.
                     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
                     * @param {Function} customizer The function to customize comparisons.
                     * @param {Function} equalFunc The function to determine equivalents of values.
                     * @param {Object} stack Tracks traversed `array` and `other` objects.
                     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
                     */
                    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
                        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
                            arrLength = array.length,
                            othLength = other.length

                        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
                            return false
                        }
                        // Assume cyclic values are equal.
                        var stacked = stack.get(array)
                        if (stacked && stack.get(other)) {
                            return stacked == other
                        }
                        var index = -1,
                            result = true,
                            seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined

                        stack.set(array, other)
                        stack.set(other, array)

                        // Ignore non-index properties.
                        while (++index < arrLength) {
                            var arrValue = array[index],
                                othValue = other[index]

                            if (customizer) {
                                var compared = isPartial
                                    ? customizer(othValue, arrValue, index, other, array, stack)
                                    : customizer(arrValue, othValue, index, array, other, stack)
                            }
                            if (compared !== undefined) {
                                if (compared) {
                                    continue
                                }
                                result = false
                                break
                            }
                            // Recursively compare arrays (susceptible to call stack limits).
                            if (seen) {
                                if (
                                    !arraySome(other, function (othValue, othIndex) {
                                        if (
                                            !cacheHas(seen, othIndex) &&
                                            (arrValue === othValue ||
                                                equalFunc(arrValue, othValue, bitmask, customizer, stack))
                                        ) {
                                            return seen.push(othIndex)
                                        }
                                    })
                                ) {
                                    result = false
                                    break
                                }
                            } else if (
                                !(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))
                            ) {
                                result = false
                                break
                            }
                        }
                        stack['delete'](array)
                        stack['delete'](other)
                        return result
                    }

                    /**
                     * A specialized version of `baseIsEqualDeep` for comparing objects of
                     * the same `toStringTag`.
                     *
                     * **Note:** This function only supports comparing values with tags of
                     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
                     *
                     * @private
                     * @param {Object} object The object to compare.
                     * @param {Object} other The other object to compare.
                     * @param {string} tag The `toStringTag` of the objects to compare.
                     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
                     * @param {Function} customizer The function to customize comparisons.
                     * @param {Function} equalFunc The function to determine equivalents of values.
                     * @param {Object} stack Tracks traversed `object` and `other` objects.
                     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
                     */
                    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
                        switch (tag) {
                            case dataViewTag:
                                if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                                    return false
                                }
                                object = object.buffer
                                other = other.buffer

                            case arrayBufferTag:
                                if (
                                    object.byteLength != other.byteLength ||
                                    !equalFunc(new Uint8Array(object), new Uint8Array(other))
                                ) {
                                    return false
                                }
                                return true

                            case boolTag:
                            case dateTag:
                            case numberTag:
                                // Coerce booleans to `1` or `0` and dates to milliseconds.
                                // Invalid dates are coerced to `NaN`.
                                return eq(+object, +other)

                            case errorTag:
                                return object.name == other.name && object.message == other.message

                            case regexpTag:
                            case stringTag:
                                // Coerce regexes to strings and treat strings, primitives and objects,
                                // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
                                // for more details.
                                return object == other + ''

                            case mapTag:
                                var convert = mapToArray

                            case setTag:
                                var isPartial = bitmask & COMPARE_PARTIAL_FLAG
                                convert || (convert = setToArray)

                                if (object.size != other.size && !isPartial) {
                                    return false
                                }
                                // Assume cyclic values are equal.
                                var stacked = stack.get(object)
                                if (stacked) {
                                    return stacked == other
                                }
                                bitmask |= COMPARE_UNORDERED_FLAG

                                // Recursively compare objects (susceptible to call stack limits).
                                stack.set(object, other)
                                var result = equalArrays(
                                    convert(object),
                                    convert(other),
                                    bitmask,
                                    customizer,
                                    equalFunc,
                                    stack
                                )
                                stack['delete'](object)
                                return result

                            case symbolTag:
                                if (symbolValueOf) {
                                    return symbolValueOf.call(object) == symbolValueOf.call(other)
                                }
                        }
                        return false
                    }

                    /**
                     * A specialized version of `baseIsEqualDeep` for objects with support for
                     * partial deep comparisons.
                     *
                     * @private
                     * @param {Object} object The object to compare.
                     * @param {Object} other The other object to compare.
                     * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
                     * @param {Function} customizer The function to customize comparisons.
                     * @param {Function} equalFunc The function to determine equivalents of values.
                     * @param {Object} stack Tracks traversed `object` and `other` objects.
                     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
                     */
                    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
                        var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
                            objProps = getAllKeys(object),
                            objLength = objProps.length,
                            othProps = getAllKeys(other),
                            othLength = othProps.length

                        if (objLength != othLength && !isPartial) {
                            return false
                        }
                        var index = objLength
                        while (index--) {
                            var key = objProps[index]
                            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
                                return false
                            }
                        }
                        // Assume cyclic values are equal.
                        var stacked = stack.get(object)
                        if (stacked && stack.get(other)) {
                            return stacked == other
                        }
                        var result = true
                        stack.set(object, other)
                        stack.set(other, object)

                        var skipCtor = isPartial
                        while (++index < objLength) {
                            key = objProps[index]
                            var objValue = object[key],
                                othValue = other[key]

                            if (customizer) {
                                var compared = isPartial
                                    ? customizer(othValue, objValue, key, other, object, stack)
                                    : customizer(objValue, othValue, key, object, other, stack)
                            }
                            // Recursively compare objects (susceptible to call stack limits).
                            if (
                                !(compared === undefined
                                    ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack)
                                    : compared)
                            ) {
                                result = false
                                break
                            }
                            skipCtor || (skipCtor = key == 'constructor')
                        }
                        if (result && !skipCtor) {
                            var objCtor = object.constructor,
                                othCtor = other.constructor

                            // Non `Object` object instances with different constructors are not equal.
                            if (
                                objCtor != othCtor &&
                                'constructor' in object &&
                                'constructor' in other &&
                                !(
                                    typeof objCtor == 'function' &&
                                    objCtor instanceof objCtor &&
                                    typeof othCtor == 'function' &&
                                    othCtor instanceof othCtor
                                )
                            ) {
                                result = false
                            }
                        }
                        stack['delete'](object)
                        stack['delete'](other)
                        return result
                    }

                    /**
                     * Creates an array of own enumerable property names and symbols of `object`.
                     *
                     * @private
                     * @param {Object} object The object to query.
                     * @returns {Array} Returns the array of property names and symbols.
                     */
                    function getAllKeys(object) {
                        return baseGetAllKeys(object, keys, getSymbols)
                    }

                    /**
                     * Gets the data for `map`.
                     *
                     * @private
                     * @param {Object} map The map to query.
                     * @param {string} key The reference key.
                     * @returns {*} Returns the map data.
                     */
                    function getMapData(map, key) {
                        var data = map.__data__
                        return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map
                    }

                    /**
                     * Gets the native function at `key` of `object`.
                     *
                     * @private
                     * @param {Object} object The object to query.
                     * @param {string} key The key of the method to get.
                     * @returns {*} Returns the function if it's native, else `undefined`.
                     */
                    function getNative(object, key) {
                        var value = getValue(object, key)
                        return baseIsNative(value) ? value : undefined
                    }

                    /**
                     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
                     *
                     * @private
                     * @param {*} value The value to query.
                     * @returns {string} Returns the raw `toStringTag`.
                     */
                    function getRawTag(value) {
                        var isOwn = hasOwnProperty.call(value, symToStringTag),
                            tag = value[symToStringTag]

                        try {
                            value[symToStringTag] = undefined
                            var unmasked = true
                        } catch (e) {}

                        var result = nativeObjectToString.call(value)
                        if (unmasked) {
                            if (isOwn) {
                                value[symToStringTag] = tag
                            } else {
                                delete value[symToStringTag]
                            }
                        }
                        return result
                    }

                    /**
                     * Creates an array of the own enumerable symbols of `object`.
                     *
                     * @private
                     * @param {Object} object The object to query.
                     * @returns {Array} Returns the array of symbols.
                     */
                    var getSymbols = !nativeGetSymbols
                        ? stubArray
                        : function (object) {
                              if (object == null) {
                                  return []
                              }
                              object = Object(object)
                              return arrayFilter(nativeGetSymbols(object), function (symbol) {
                                  return propertyIsEnumerable.call(object, symbol)
                              })
                          }

                    /**
                     * Gets the `toStringTag` of `value`.
                     *
                     * @private
                     * @param {*} value The value to query.
                     * @returns {string} Returns the `toStringTag`.
                     */
                    var getTag = baseGetTag

                    // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
                    if (
                        (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
                        (Map && getTag(new Map()) != mapTag) ||
                        (Promise && getTag(Promise.resolve()) != promiseTag) ||
                        (Set && getTag(new Set()) != setTag) ||
                        (WeakMap && getTag(new WeakMap()) != weakMapTag)
                    ) {
                        getTag = function (value) {
                            var result = baseGetTag(value),
                                Ctor = result == objectTag ? value.constructor : undefined,
                                ctorString = Ctor ? toSource(Ctor) : ''

                            if (ctorString) {
                                switch (ctorString) {
                                    case dataViewCtorString:
                                        return dataViewTag
                                    case mapCtorString:
                                        return mapTag
                                    case promiseCtorString:
                                        return promiseTag
                                    case setCtorString:
                                        return setTag
                                    case weakMapCtorString:
                                        return weakMapTag
                                }
                            }
                            return result
                        }
                    }

                    /**
                     * Checks if `value` is a valid array-like index.
                     *
                     * @private
                     * @param {*} value The value to check.
                     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
                     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
                     */
                    function isIndex(value, length) {
                        length = length == null ? MAX_SAFE_INTEGER : length
                        return (
                            !!length &&
                            (typeof value == 'number' || reIsUint.test(value)) &&
                            value > -1 &&
                            value % 1 == 0 &&
                            value < length
                        )
                    }

                    /**
                     * Checks if `value` is suitable for use as unique object key.
                     *
                     * @private
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
                     */
                    function isKeyable(value) {
                        var type = typeof value
                        return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean'
                            ? value !== '__proto__'
                            : value === null
                    }

                    /**
                     * Checks if `func` has its source masked.
                     *
                     * @private
                     * @param {Function} func The function to check.
                     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
                     */
                    function isMasked(func) {
                        return !!maskSrcKey && maskSrcKey in func
                    }

                    /**
                     * Checks if `value` is likely a prototype object.
                     *
                     * @private
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
                     */
                    function isPrototype(value) {
                        var Ctor = value && value.constructor,
                            proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto

                        return value === proto
                    }

                    /**
                     * Converts `value` to a string using `Object.prototype.toString`.
                     *
                     * @private
                     * @param {*} value The value to convert.
                     * @returns {string} Returns the converted string.
                     */
                    function objectToString(value) {
                        return nativeObjectToString.call(value)
                    }

                    /**
                     * Converts `func` to its source code.
                     *
                     * @private
                     * @param {Function} func The function to convert.
                     * @returns {string} Returns the source code.
                     */
                    function toSource(func) {
                        if (func != null) {
                            try {
                                return funcToString.call(func)
                            } catch (e) {}
                            try {
                                return func + ''
                            } catch (e) {}
                        }
                        return ''
                    }

                    /**
                     * Performs a
                     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
                     * comparison between two values to determine if they are equivalent.
                     *
                     * @static
                     * @memberOf _
                     * @since 4.0.0
                     * @category Lang
                     * @param {*} value The value to compare.
                     * @param {*} other The other value to compare.
                     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
                     * @example
                     *
                     * var object = { 'a': 1 };
                     * var other = { 'a': 1 };
                     *
                     * _.eq(object, object);
                     * // => true
                     *
                     * _.eq(object, other);
                     * // => false
                     *
                     * _.eq('a', 'a');
                     * // => true
                     *
                     * _.eq('a', Object('a'));
                     * // => false
                     *
                     * _.eq(NaN, NaN);
                     * // => true
                     */
                    function eq(value, other) {
                        return value === other || (value !== value && other !== other)
                    }

                    /**
                     * Checks if `value` is likely an `arguments` object.
                     *
                     * @static
                     * @memberOf _
                     * @since 0.1.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
                     *  else `false`.
                     * @example
                     *
                     * _.isArguments(function() { return arguments; }());
                     * // => true
                     *
                     * _.isArguments([1, 2, 3]);
                     * // => false
                     */
                    var isArguments = baseIsArguments(
                        (function () {
                            return arguments
                        })()
                    )
                        ? baseIsArguments
                        : function (value) {
                              return (
                                  isObjectLike(value) &&
                                  hasOwnProperty.call(value, 'callee') &&
                                  !propertyIsEnumerable.call(value, 'callee')
                              )
                          }

                    /**
                     * Checks if `value` is classified as an `Array` object.
                     *
                     * @static
                     * @memberOf _
                     * @since 0.1.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is an array, else `false`.
                     * @example
                     *
                     * _.isArray([1, 2, 3]);
                     * // => true
                     *
                     * _.isArray(document.body.children);
                     * // => false
                     *
                     * _.isArray('abc');
                     * // => false
                     *
                     * _.isArray(_.noop);
                     * // => false
                     */
                    var isArray = Array.isArray

                    /**
                     * Checks if `value` is array-like. A value is considered array-like if it's
                     * not a function and has a `value.length` that's an integer greater than or
                     * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
                     *
                     * @static
                     * @memberOf _
                     * @since 4.0.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
                     * @example
                     *
                     * _.isArrayLike([1, 2, 3]);
                     * // => true
                     *
                     * _.isArrayLike(document.body.children);
                     * // => true
                     *
                     * _.isArrayLike('abc');
                     * // => true
                     *
                     * _.isArrayLike(_.noop);
                     * // => false
                     */
                    function isArrayLike(value) {
                        return value != null && isLength(value.length) && !isFunction(value)
                    }

                    /**
                     * Checks if `value` is a buffer.
                     *
                     * @static
                     * @memberOf _
                     * @since 4.3.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
                     * @example
                     *
                     * _.isBuffer(new Buffer(2));
                     * // => true
                     *
                     * _.isBuffer(new Uint8Array(2));
                     * // => false
                     */
                    var isBuffer = nativeIsBuffer || stubFalse

                    /**
                     * Performs a deep comparison between two values to determine if they are
                     * equivalent.
                     *
                     * **Note:** This method supports comparing arrays, array buffers, booleans,
                     * date objects, error objects, maps, numbers, `Object` objects, regexes,
                     * sets, strings, symbols, and typed arrays. `Object` objects are compared
                     * by their own, not inherited, enumerable properties. Functions and DOM
                     * nodes are compared by strict equality, i.e. `===`.
                     *
                     * @static
                     * @memberOf _
                     * @since 0.1.0
                     * @category Lang
                     * @param {*} value The value to compare.
                     * @param {*} other The other value to compare.
                     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
                     * @example
                     *
                     * var object = { 'a': 1 };
                     * var other = { 'a': 1 };
                     *
                     * _.isEqual(object, other);
                     * // => true
                     *
                     * object === other;
                     * // => false
                     */
                    function isEqual(value, other) {
                        return baseIsEqual(value, other)
                    }

                    /**
                     * Checks if `value` is classified as a `Function` object.
                     *
                     * @static
                     * @memberOf _
                     * @since 0.1.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is a function, else `false`.
                     * @example
                     *
                     * _.isFunction(_);
                     * // => true
                     *
                     * _.isFunction(/abc/);
                     * // => false
                     */
                    function isFunction(value) {
                        if (!isObject(value)) {
                            return false
                        }
                        // The use of `Object#toString` avoids issues with the `typeof` operator
                        // in Safari 9 which returns 'object' for typed arrays and other constructors.
                        var tag = baseGetTag(value)
                        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
                    }

                    /**
                     * Checks if `value` is a valid array-like length.
                     *
                     * **Note:** This method is loosely based on
                     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
                     *
                     * @static
                     * @memberOf _
                     * @since 4.0.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
                     * @example
                     *
                     * _.isLength(3);
                     * // => true
                     *
                     * _.isLength(Number.MIN_VALUE);
                     * // => false
                     *
                     * _.isLength(Infinity);
                     * // => false
                     *
                     * _.isLength('3');
                     * // => false
                     */
                    function isLength(value) {
                        return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
                    }

                    /**
                     * Checks if `value` is the
                     * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
                     * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
                     *
                     * @static
                     * @memberOf _
                     * @since 0.1.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
                     * @example
                     *
                     * _.isObject({});
                     * // => true
                     *
                     * _.isObject([1, 2, 3]);
                     * // => true
                     *
                     * _.isObject(_.noop);
                     * // => true
                     *
                     * _.isObject(null);
                     * // => false
                     */
                    function isObject(value) {
                        var type = typeof value
                        return value != null && (type == 'object' || type == 'function')
                    }

                    /**
                     * Checks if `value` is object-like. A value is object-like if it's not `null`
                     * and has a `typeof` result of "object".
                     *
                     * @static
                     * @memberOf _
                     * @since 4.0.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
                     * @example
                     *
                     * _.isObjectLike({});
                     * // => true
                     *
                     * _.isObjectLike([1, 2, 3]);
                     * // => true
                     *
                     * _.isObjectLike(_.noop);
                     * // => false
                     *
                     * _.isObjectLike(null);
                     * // => false
                     */
                    function isObjectLike(value) {
                        return value != null && typeof value == 'object'
                    }

                    /**
                     * Checks if `value` is classified as a typed array.
                     *
                     * @static
                     * @memberOf _
                     * @since 3.0.0
                     * @category Lang
                     * @param {*} value The value to check.
                     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
                     * @example
                     *
                     * _.isTypedArray(new Uint8Array);
                     * // => true
                     *
                     * _.isTypedArray([]);
                     * // => false
                     */
                    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray

                    /**
                     * Creates an array of the own enumerable property names of `object`.
                     *
                     * **Note:** Non-object values are coerced to objects. See the
                     * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
                     * for more details.
                     *
                     * @static
                     * @since 0.1.0
                     * @memberOf _
                     * @category Object
                     * @param {Object} object The object to query.
                     * @returns {Array} Returns the array of property names.
                     * @example
                     *
                     * function Foo() {
                     *   this.a = 1;
                     *   this.b = 2;
                     * }
                     *
                     * Foo.prototype.c = 3;
                     *
                     * _.keys(new Foo);
                     * // => ['a', 'b'] (iteration order is not guaranteed)
                     *
                     * _.keys('hi');
                     * // => ['0', '1']
                     */
                    function keys(object) {
                        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object)
                    }

                    /**
                     * This method returns a new empty array.
                     *
                     * @static
                     * @memberOf _
                     * @since 4.13.0
                     * @category Util
                     * @returns {Array} Returns the new empty array.
                     * @example
                     *
                     * var arrays = _.times(2, _.stubArray);
                     *
                     * console.log(arrays);
                     * // => [[], []]
                     *
                     * console.log(arrays[0] === arrays[1]);
                     * // => false
                     */
                    function stubArray() {
                        return []
                    }

                    /**
                     * This method returns `false`.
                     *
                     * @static
                     * @memberOf _
                     * @since 4.13.0
                     * @category Util
                     * @returns {boolean} Returns `false`.
                     * @example
                     *
                     * _.times(2, _.stubFalse);
                     * // => [false, false]
                     */
                    function stubFalse() {
                        return false
                    }

                    module.exports = isEqual

                    /* WEBPACK VAR INJECTION */
                }).call(
                    this,
                    __webpack_require__(
                        /*! ./../webpack/buildin/global.js */ './node_modules/webpack/buildin/global.js'
                    ),
                    __webpack_require__(
                        /*! ./../webpack/buildin/module.js */ './node_modules/webpack/buildin/module.js'
                    )(module)
                )

                /***/
            },

        /***/ './node_modules/tslib/tslib.es6.js':
            /*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
            /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                'use strict'
                __webpack_require__.r(__webpack_exports__)
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__extends', function () {
                    return __extends
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__assign', function () {
                    return __assign
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__rest', function () {
                    return __rest
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__decorate', function () {
                    return __decorate
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__param', function () {
                    return __param
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__metadata', function () {
                    return __metadata
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__awaiter', function () {
                    return __awaiter
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__generator', function () {
                    return __generator
                })
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__createBinding',
                    function () {
                        return __createBinding
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__exportStar', function () {
                    return __exportStar
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__values', function () {
                    return __values
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__read', function () {
                    return __read
                })
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__spread', function () {
                    return __spread
                })
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__spreadArrays',
                    function () {
                        return __spreadArrays
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__await', function () {
                    return __await
                })
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__asyncGenerator',
                    function () {
                        return __asyncGenerator
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__asyncDelegator',
                    function () {
                        return __asyncDelegator
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__asyncValues', function () {
                    return __asyncValues
                })
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__makeTemplateObject',
                    function () {
                        return __makeTemplateObject
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, '__importStar', function () {
                    return __importStar
                })
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__importDefault',
                    function () {
                        return __importDefault
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__classPrivateFieldGet',
                    function () {
                        return __classPrivateFieldGet
                    }
                )
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    '__classPrivateFieldSet',
                    function () {
                        return __classPrivateFieldSet
                    }
                )
                /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
                /* global Reflect, Promise */

                var extendStatics = function (d, b) {
                    extendStatics =
                        Object.setPrototypeOf ||
                        ({ __proto__: [] } instanceof Array &&
                            function (d, b) {
                                d.__proto__ = b
                            }) ||
                        function (d, b) {
                            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
                        }
                    return extendStatics(d, b)
                }

                function __extends(d, b) {
                    extendStatics(d, b)
                    function __() {
                        this.constructor = d
                    }
                    d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
                }

                var __assign = function () {
                    __assign =
                        Object.assign ||
                        function __assign(t) {
                            for (var s, i = 1, n = arguments.length; i < n; i++) {
                                s = arguments[i]
                                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
                            }
                            return t
                        }
                    return __assign.apply(this, arguments)
                }

                function __rest(s, e) {
                    var t = {}
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p]
                    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
                        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                                t[p[i]] = s[p[i]]
                        }
                    return t
                }

                function __decorate(decorators, target, key, desc) {
                    var c = arguments.length,
                        r =
                            c < 3
                                ? target
                                : desc === null
                                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                                : desc,
                        d
                    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
                        r = Reflect.decorate(decorators, target, key, desc)
                    else
                        for (var i = decorators.length - 1; i >= 0; i--)
                            if ((d = decorators[i]))
                                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
                    return c > 3 && r && Object.defineProperty(target, key, r), r
                }

                function __param(paramIndex, decorator) {
                    return function (target, key) {
                        decorator(target, key, paramIndex)
                    }
                }

                function __metadata(metadataKey, metadataValue) {
                    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
                        return Reflect.metadata(metadataKey, metadataValue)
                }

                function __awaiter(thisArg, _arguments, P, generator) {
                    function adopt(value) {
                        return value instanceof P
                            ? value
                            : new P(function (resolve) {
                                  resolve(value)
                              })
                    }
                    return new (P || (P = Promise))(function (resolve, reject) {
                        function fulfilled(value) {
                            try {
                                step(generator.next(value))
                            } catch (e) {
                                reject(e)
                            }
                        }
                        function rejected(value) {
                            try {
                                step(generator['throw'](value))
                            } catch (e) {
                                reject(e)
                            }
                        }
                        function step(result) {
                            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
                        }
                        step((generator = generator.apply(thisArg, _arguments || [])).next())
                    })
                }

                function __generator(thisArg, body) {
                    var _ = {
                            label: 0,
                            sent: function () {
                                if (t[0] & 1) throw t[1]
                                return t[1]
                            },
                            trys: [],
                            ops: [],
                        },
                        f,
                        y,
                        t,
                        g
                    return (
                        (g = { next: verb(0), throw: verb(1), return: verb(2) }),
                        typeof Symbol === 'function' &&
                            (g[Symbol.iterator] = function () {
                                return this
                            }),
                        g
                    )
                    function verb(n) {
                        return function (v) {
                            return step([n, v])
                        }
                    }
                    function step(op) {
                        if (f) throw new TypeError('Generator is already executing.')
                        while (_)
                            try {
                                if (
                                    ((f = 1),
                                    y &&
                                        (t =
                                            op[0] & 2
                                                ? y['return']
                                                : op[0]
                                                ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                                                : y.next) &&
                                        !(t = t.call(y, op[1])).done)
                                )
                                    return t
                                if (((y = 0), t)) op = [op[0] & 2, t.value]
                                switch (op[0]) {
                                    case 0:
                                    case 1:
                                        t = op
                                        break
                                    case 4:
                                        _.label++
                                        return { value: op[1], done: false }
                                    case 5:
                                        _.label++
                                        y = op[1]
                                        op = [0]
                                        continue
                                    case 7:
                                        op = _.ops.pop()
                                        _.trys.pop()
                                        continue
                                    default:
                                        if (
                                            !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                                            (op[0] === 6 || op[0] === 2)
                                        ) {
                                            _ = 0
                                            continue
                                        }
                                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                            _.label = op[1]
                                            break
                                        }
                                        if (op[0] === 6 && _.label < t[1]) {
                                            _.label = t[1]
                                            t = op
                                            break
                                        }
                                        if (t && _.label < t[2]) {
                                            _.label = t[2]
                                            _.ops.push(op)
                                            break
                                        }
                                        if (t[2]) _.ops.pop()
                                        _.trys.pop()
                                        continue
                                }
                                op = body.call(thisArg, _)
                            } catch (e) {
                                op = [6, e]
                                y = 0
                            } finally {
                                f = t = 0
                            }
                        if (op[0] & 5) throw op[1]
                        return { value: op[0] ? op[1] : void 0, done: true }
                    }
                }

                function __createBinding(o, m, k, k2) {
                    if (k2 === undefined) k2 = k
                    o[k2] = m[k]
                }

                function __exportStar(m, exports) {
                    for (var p in m) if (p !== 'default' && !exports.hasOwnProperty(p)) exports[p] = m[p]
                }

                function __values(o) {
                    var s = typeof Symbol === 'function' && Symbol.iterator,
                        m = s && o[s],
                        i = 0
                    if (m) return m.call(o)
                    if (o && typeof o.length === 'number')
                        return {
                            next: function () {
                                if (o && i >= o.length) o = void 0
                                return { value: o && o[i++], done: !o }
                            },
                        }
                    throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.')
                }

                function __read(o, n) {
                    var m = typeof Symbol === 'function' && o[Symbol.iterator]
                    if (!m) return o
                    var i = m.call(o),
                        r,
                        ar = [],
                        e
                    try {
                        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value)
                    } catch (error) {
                        e = { error: error }
                    } finally {
                        try {
                            if (r && !r.done && (m = i['return'])) m.call(i)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                    return ar
                }

                function __spread() {
                    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]))
                    return ar
                }

                function __spreadArrays() {
                    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length
                    for (var r = Array(s), k = 0, i = 0; i < il; i++)
                        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j]
                    return r
                }

                function __await(v) {
                    return this instanceof __await ? ((this.v = v), this) : new __await(v)
                }

                function __asyncGenerator(thisArg, _arguments, generator) {
                    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                    var g = generator.apply(thisArg, _arguments || []),
                        i,
                        q = []
                    return (
                        (i = {}),
                        verb('next'),
                        verb('throw'),
                        verb('return'),
                        (i[Symbol.asyncIterator] = function () {
                            return this
                        }),
                        i
                    )
                    function verb(n) {
                        if (g[n])
                            i[n] = function (v) {
                                return new Promise(function (a, b) {
                                    q.push([n, v, a, b]) > 1 || resume(n, v)
                                })
                            }
                    }
                    function resume(n, v) {
                        try {
                            step(g[n](v))
                        } catch (e) {
                            settle(q[0][3], e)
                        }
                    }
                    function step(r) {
                        r.value instanceof __await
                            ? Promise.resolve(r.value.v).then(fulfill, reject)
                            : settle(q[0][2], r)
                    }
                    function fulfill(value) {
                        resume('next', value)
                    }
                    function reject(value) {
                        resume('throw', value)
                    }
                    function settle(f, v) {
                        if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1])
                    }
                }

                function __asyncDelegator(o) {
                    var i, p
                    return (
                        (i = {}),
                        verb('next'),
                        verb('throw', function (e) {
                            throw e
                        }),
                        verb('return'),
                        (i[Symbol.iterator] = function () {
                            return this
                        }),
                        i
                    )
                    function verb(n, f) {
                        i[n] = o[n]
                            ? function (v) {
                                  return (p = !p) ? { value: __await(o[n](v)), done: n === 'return' } : f ? f(v) : v
                              }
                            : f
                    }
                }

                function __asyncValues(o) {
                    if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.')
                    var m = o[Symbol.asyncIterator],
                        i
                    return m
                        ? m.call(o)
                        : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
                          (i = {}),
                          verb('next'),
                          verb('throw'),
                          verb('return'),
                          (i[Symbol.asyncIterator] = function () {
                              return this
                          }),
                          i)
                    function verb(n) {
                        i[n] =
                            o[n] &&
                            function (v) {
                                return new Promise(function (resolve, reject) {
                                    ;(v = o[n](v)), settle(resolve, reject, v.done, v.value)
                                })
                            }
                    }
                    function settle(resolve, reject, d, v) {
                        Promise.resolve(v).then(function (v) {
                            resolve({ value: v, done: d })
                        }, reject)
                    }
                }

                function __makeTemplateObject(cooked, raw) {
                    if (Object.defineProperty) {
                        Object.defineProperty(cooked, 'raw', { value: raw })
                    } else {
                        cooked.raw = raw
                    }
                    return cooked
                }

                function __importStar(mod) {
                    if (mod && mod.__esModule) return mod
                    var result = {}
                    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
                    result.default = mod
                    return result
                }

                function __importDefault(mod) {
                    return mod && mod.__esModule ? mod : { default: mod }
                }

                function __classPrivateFieldGet(receiver, privateMap) {
                    if (!privateMap.has(receiver)) {
                        throw new TypeError('attempted to get private field on non-instance')
                    }
                    return privateMap.get(receiver)
                }

                function __classPrivateFieldSet(receiver, privateMap, value) {
                    if (!privateMap.has(receiver)) {
                        throw new TypeError('attempted to set private field on non-instance')
                    }
                    privateMap.set(receiver, value)
                    return value
                }

                /***/
            },

        /***/ './node_modules/webpack/buildin/global.js':
            /*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                var g

                // This works in non-strict mode
                g = (function () {
                    return this
                })()

                try {
                    // This works if eval is allowed (see CSP)
                    g = g || new Function('return this')()
                } catch (e) {
                    // This works if the window reference is available
                    if (typeof window === 'object') g = window
                }

                // g can still be undefined, but nothing to do about it...
                // We return undefined, instead of nothing here, so it's
                // easier to handle this case. if(!global) { ...}

                module.exports = g

                /***/
            },

        /***/ './node_modules/webpack/buildin/module.js':
            /*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
            /*! no static exports found */
            /***/ function (module, exports) {
                module.exports = function (module) {
                    if (!module.webpackPolyfill) {
                        module.deprecate = function () {}
                        module.paths = []
                        // module.parent = undefined by default
                        if (!module.children) module.children = []
                        Object.defineProperty(module, 'loaded', {
                            enumerable: true,
                            get: function () {
                                return module.l
                            },
                        })
                        Object.defineProperty(module, 'id', {
                            enumerable: true,
                            get: function () {
                                return module.i
                            },
                        })
                        module.webpackPolyfill = 1
                    }
                    return module
                }

                /***/
            },

        /***/ './src/DataLoader/index.js':
            /*!*********************************!*\
  !*** ./src/DataLoader/index.js ***!
  \*********************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                Object.defineProperty(exports, '__esModule', {
                    value: true,
                })

                var _extends =
                    Object.assign ||
                    function (target) {
                        for (var i = 1; i < arguments.length; i++) {
                            var source = arguments[i]
                            for (var key in source) {
                                if (Object.prototype.hasOwnProperty.call(source, key)) {
                                    target[key] = source[key]
                                }
                            }
                        }
                        return target
                    }

                var _createClass = (function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i]
                            descriptor.enumerable = descriptor.enumerable || false
                            descriptor.configurable = true
                            if ('value' in descriptor) descriptor.writable = true
                            Object.defineProperty(target, descriptor.key, descriptor)
                        }
                    }
                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps)
                        if (staticProps) defineProperties(Constructor, staticProps)
                        return Constructor
                    }
                })()

                var _react = __webpack_require__(
                    /*! react */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js'
                )

                var _react2 = _interopRequireDefault(_react)

                var _propTypes = __webpack_require__(
                    /*! prop-types */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js'
                )

                var _propTypes2 = _interopRequireDefault(_propTypes)

                var _reactRedux = __webpack_require__(
                    /*! react-redux */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react-redux/index.js'
                )

                var _neosUiDecorators = __webpack_require__(
                    /*! @neos-project/neos-ui-decorators */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-decorators/index.js'
                )

                var _reactUiComponents = __webpack_require__(
                    /*! @neos-project/react-ui-components */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/react-ui-components/index.js'
                )

                var _neosUiReduxStore = __webpack_require__(
                    /*! @neos-project/neos-ui-redux-store */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/neosProjectPackages/neos-ui-redux-store/index.js'
                )

                var _index = __webpack_require__(/*! ../Widget/index */ './src/Widget/index.js')

                var _index2 = _interopRequireDefault(_index)

                var _style = __webpack_require__(/*! ./style.css */ './src/DataLoader/style.css')

                var _style2 = _interopRequireDefault(_style)

                var _lodash = __webpack_require__(/*! lodash.isequal */ './node_modules/lodash.isequal/index.js')

                var _lodash2 = _interopRequireDefault(_lodash)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError('Cannot call a class as a function')
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }
                    return call && (typeof call === 'object' || typeof call === 'function') ? call : self
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== 'function' && superClass !== null) {
                        throw new TypeError(
                            'Super expression must either be null or a function, not ' + typeof superClass
                        )
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
                    })
                    if (superClass)
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(subClass, superClass)
                            : (subClass.__proto__ = superClass)
                }

                /*
                 * This HOC is responsible for fetching data for Data views and wraping
                 * them into Widget presentational component.
                 */
                exports.default = function () {
                    return function (WrappedComponent) {
                        var _dec, _dec2, _class, _class2, _temp2

                        return (
                            (_dec = (0, _reactRedux.connect)(function (state) {
                                return {
                                    focusedNodeContextPath:
                                        _neosUiReduxStore.selectors.CR.Nodes.focusedNodePathSelector(state),
                                    getNodeByContextPath: _neosUiReduxStore.selectors.CR.Nodes.nodeByContextPath(state),
                                }
                            })),
                            (_dec2 = (0, _neosUiDecorators.neos)(function (globalRegistry) {
                                return {
                                    dataSourcesDataLoader: globalRegistry.get('dataLoaders').get('DataSources'),
                                    i18nRegistry: globalRegistry.get('i18n'),
                                }
                            })),
                            _dec(
                                (_class =
                                    _dec2(
                                        (_class =
                                            ((_temp2 = _class2 =
                                                (function (_PureComponent) {
                                                    _inherits(DataLoader, _PureComponent)

                                                    function DataLoader() {
                                                        var _ref

                                                        var _temp, _this, _ret

                                                        _classCallCheck(this, DataLoader)

                                                        for (
                                                            var _len = arguments.length, args = Array(_len), _key = 0;
                                                            _key < _len;
                                                            _key++
                                                        ) {
                                                            args[_key] = arguments[_key]
                                                        }

                                                        return (
                                                            (_ret =
                                                                ((_temp =
                                                                    ((_this = _possibleConstructorReturn(
                                                                        this,
                                                                        (_ref =
                                                                            DataLoader.__proto__ ||
                                                                            Object.getPrototypeOf(
                                                                                DataLoader
                                                                            )).call.apply(_ref, [this].concat(args))
                                                                    )),
                                                                    _this)),
                                                                (_this.state = {
                                                                    data: null,
                                                                    error: false,
                                                                }),
                                                                _temp)),
                                                            _possibleConstructorReturn(_this, _ret)
                                                        )
                                                    }

                                                    _createClass(DataLoader, [
                                                        {
                                                            key: 'componentDidMount',
                                                            value: function componentDidMount() {
                                                                this.fetchData()
                                                            },
                                                        },
                                                        {
                                                            key: 'componentDidUpdate',
                                                            value: function componentDidUpdate(prevProps) {
                                                                if (
                                                                    prevProps.focusedNodeContextPath !==
                                                                        this.props.focusedNodeContextPath ||
                                                                    !(0, _lodash2.default)(
                                                                        prevProps.options.arguments,
                                                                        this.props.options.arguments
                                                                    )
                                                                ) {
                                                                    this.fetchData()
                                                                }
                                                            },
                                                        },
                                                        {
                                                            key: 'fetchData',
                                                            value: function fetchData() {
                                                                var _this2 = this

                                                                var dataSourceAdditionalData = Object.assign(
                                                                    { node: this.props.focusedNodeContextPath },
                                                                    this.props.options.arguments
                                                                )

                                                                this.props.dataSourcesDataLoader
                                                                    .resolveValue({
                                                                        contextNodePath:
                                                                            this.props.focusedNodeContextPath,
                                                                        dataSourceIdentifier:
                                                                            this.props.options.dataSource,
                                                                        dataSourceUri: this.props.options.dataSourceUri,
                                                                        dataSourceAdditionalData:
                                                                            dataSourceAdditionalData,
                                                                    })
                                                                    .then(function (response) {
                                                                        if (response.error) {
                                                                            _this2.setState({
                                                                                data: null,
                                                                                error: response.error,
                                                                            })
                                                                        } else if (response.data) {
                                                                            _this2.setState({
                                                                                data: response.data,
                                                                                error: false,
                                                                            })
                                                                        } else {
                                                                            _this2.setState({
                                                                                data: null,
                                                                                error: new Error(
                                                                                    'Unknown datasource fetch error'
                                                                                ),
                                                                            })
                                                                        }
                                                                    })
                                                            },
                                                        },
                                                        {
                                                            key: 'getContent',
                                                            value: function getContent() {
                                                                if (this.state.error) {
                                                                    return _react2.default.createElement(
                                                                        'div',
                                                                        null,
                                                                        _react2.default.createElement(
                                                                            _reactUiComponents.Icon,
                                                                            {
                                                                                icon: 'exclamation-triangle',
                                                                                className: _style2.default.warnIcon,
                                                                            }
                                                                        ),
                                                                        ' ',
                                                                        this.state.error.message
                                                                    )
                                                                }

                                                                if (!this.state.data) {
                                                                    return _react2.default.createElement(
                                                                        'div',
                                                                        null,
                                                                        this.props.i18nRegistry.translate(
                                                                            'Neos.Neos:Main:loading'
                                                                        )
                                                                    )
                                                                }

                                                                return _react2.default.createElement(
                                                                    WrappedComponent,
                                                                    _extends({ data: this.state.data }, this.props)
                                                                )
                                                            },
                                                        },
                                                        {
                                                            key: 'render',
                                                            value: function render() {
                                                                return _react2.default.createElement(
                                                                    _index2.default,
                                                                    {
                                                                        title: this.props.options.title,
                                                                        subtitle: this.props.options.subtitle,
                                                                    },
                                                                    this.getContent()
                                                                )
                                                            },
                                                        },
                                                    ])

                                                    return DataLoader
                                                })(_react.PureComponent)),
                                            (_class2.propTypes = {
                                                focusedNodeContextPath: _propTypes2.default.string,
                                                getNodeByContextPath: _propTypes2.default.func.isRequired,

                                                label: _propTypes2.default.string,
                                                options: _propTypes2.default.shape({
                                                    arguments: _propTypes2.default.object,
                                                    dataSource: _propTypes2.default.string,
                                                    dataSourceUri: _propTypes2.default.string,
                                                    title: _propTypes2.default.string,
                                                    subtitle: _propTypes2.default.string,
                                                }).isRequired,
                                                dataSourcesDataLoader: _propTypes2.default.shape({
                                                    resolveValue: _propTypes2.default.func.isRequired,
                                                }).isRequired,
                                            }),
                                            _temp2))
                                    ) || _class)
                            ) || _class
                        )
                    }
                }

                /***/
            },

        /***/ './src/DataLoader/style.css':
            /*!**********************************!*\
  !*** ./src/DataLoader/style.css ***!
  \**********************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // extracted by mini-css-extract-plugin
                module.exports = { warnIcon: '_1iOiO8qeVC3kqmXBm5iCS' }

                /***/
            },

        /***/ './src/RangeView.js':
            /*!**************************!*\
  !*** ./src/RangeView.js ***!
  \**************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                Object.defineProperty(exports, '__esModule', {
                    value: true,
                })
                exports.default = undefined

                var _createClass = (function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i]
                            descriptor.enumerable = descriptor.enumerable || false
                            descriptor.configurable = true
                            if ('value' in descriptor) descriptor.writable = true
                            Object.defineProperty(target, descriptor.key, descriptor)
                        }
                    }
                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps)
                        if (staticProps) defineProperties(Constructor, staticProps)
                        return Constructor
                    }
                })()

                var _dec, _class, _class2, _temp

                var _react = __webpack_require__(
                    /*! react */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js'
                )

                var _react2 = _interopRequireDefault(_react)

                var _propTypes = __webpack_require__(
                    /*! prop-types */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js'
                )

                var _propTypes2 = _interopRequireDefault(_propTypes)

                var _plowJs = __webpack_require__(
                    /*! plow-js */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/plow-js/index.js'
                )

                var _style = __webpack_require__(/*! ./style.css */ './src/style.css')

                var _style2 = _interopRequireDefault(_style)

                var _index = __webpack_require__(/*! ./DataLoader/index */ './src/DataLoader/index.js')

                var _index2 = _interopRequireDefault(_index)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError('Cannot call a class as a function')
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }
                    return call && (typeof call === 'object' || typeof call === 'function') ? call : self
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== 'function' && superClass !== null) {
                        throw new TypeError(
                            'Super expression must either be null or a function, not ' + typeof superClass
                        )
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
                    })
                    if (superClass)
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(subClass, superClass)
                            : (subClass.__proto__ = superClass)
                }

                var ColumnView =
                    ((_dec = (0, _index2.default)()),
                    _dec(
                        (_class =
                            ((_temp = _class2 =
                                (function (_PureComponent) {
                                    _inherits(ColumnView, _PureComponent)

                                    function ColumnView() {
                                        _classCallCheck(this, ColumnView)

                                        return _possibleConstructorReturn(
                                            this,
                                            (ColumnView.__proto__ || Object.getPrototypeOf(ColumnView)).apply(
                                                this,
                                                arguments
                                            )
                                        )
                                    }

                                    _createClass(ColumnView, [
                                        {
                                            key: 'render',
                                            value: function render() {
                                                var _props = this.props,
                                                    data = _props.data,
                                                    options = _props.options

                                                var low = (0, _plowJs.$get)('percentage.low', data)
                                                var medium = (0, _plowJs.$get)('percentage.medium', data)
                                                var high = (0, _plowJs.$get)('percentage.high', data)
                                                var fromDate = (0, _plowJs.$get)('fromDate', data)
                                                var toDate = (0, _plowJs.$get)('toDate', data)
                                                var total = (0, _plowJs.$get)('total', data)
                                                var thresholdMin = (0, _plowJs.$get)('threshold.min', data)
                                                var thresholdMax = (0, _plowJs.$get)('threshold.max', data)
                                                var unit = (0, _plowJs.$get)('unit', options)

                                                return _react2.default.createElement(
                                                    'div',
                                                    null,
                                                    _react2.default.createElement(
                                                        'div',
                                                        { class: _style2.default.bar },
                                                        _react2.default.createElement(
                                                            'span',
                                                            {
                                                                class: [
                                                                    _style2.default.bar__legend,
                                                                    _style2.default.bar__left,
                                                                ].join(' '),
                                                                style: { width: low + '%' },
                                                            },
                                                            thresholdMin,
                                                            unit,
                                                            '\xA0\u203A'
                                                        ),
                                                        _react2.default.createElement('span', {
                                                            class: [
                                                                _style2.default.bar__legend,
                                                                _style2.default.bar__middle,
                                                            ].join(' '),
                                                            style: { width: medium + '%' },
                                                        }),
                                                        _react2.default.createElement(
                                                            'span',
                                                            {
                                                                class: [
                                                                    _style2.default.bar__legend,
                                                                    _style2.default.bar__right,
                                                                ].join(' '),
                                                                style: { width: high + '%' },
                                                            },
                                                            '\u2039\xA0',
                                                            thresholdMax,
                                                            unit
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { class: _style2.default.bar },
                                                        _react2.default.createElement(
                                                            'span',
                                                            {
                                                                class: [
                                                                    _style2.default.bar__section,
                                                                    _style2.default.bar__low,
                                                                ].join(' '),
                                                                style: { width: low + '%' },
                                                            },
                                                            low,
                                                            '%'
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            {
                                                                class: [
                                                                    _style2.default.bar__section,
                                                                    _style2.default.bar__medium,
                                                                ].join(' '),
                                                                style: { width: medium + '%' },
                                                            },
                                                            medium,
                                                            '%'
                                                        ),
                                                        _react2.default.createElement(
                                                            'span',
                                                            {
                                                                class: [
                                                                    _style2.default.bar__section,
                                                                    _style2.default.bar__high,
                                                                ].join(' '),
                                                                style: { width: high + '%' },
                                                            },
                                                            high,
                                                            '%'
                                                        )
                                                    ),
                                                    _react2.default.createElement(
                                                        'div',
                                                        { class: _style2.default.infopanel },
                                                        _react2.default.createElement(
                                                            'div',
                                                            { class: _style2.default.infopanel__date },
                                                            fromDate,
                                                            ' - ',
                                                            toDate
                                                        ),
                                                        _react2.default.createElement(
                                                            'div',
                                                            { class: _style2.default.infopanel__total },
                                                            total
                                                        )
                                                    )
                                                )
                                            },
                                        },
                                    ])

                                    return ColumnView
                                })(_react.PureComponent)),
                            (_class2.propTypes = {
                                data: _propTypes2.default.object.isRequired,
                                options: _propTypes2.default.shape({
                                    unit: _propTypes2.default.string,
                                }).isRequired,
                            }),
                            _temp))
                    ) || _class)
                exports.default = ColumnView

                /***/
            },

        /***/ './src/Widget/index.js':
            /*!*****************************!*\
  !*** ./src/Widget/index.js ***!
  \*****************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                Object.defineProperty(exports, '__esModule', {
                    value: true,
                })
                exports.default = undefined

                var _createClass = (function () {
                    function defineProperties(target, props) {
                        for (var i = 0; i < props.length; i++) {
                            var descriptor = props[i]
                            descriptor.enumerable = descriptor.enumerable || false
                            descriptor.configurable = true
                            if ('value' in descriptor) descriptor.writable = true
                            Object.defineProperty(target, descriptor.key, descriptor)
                        }
                    }
                    return function (Constructor, protoProps, staticProps) {
                        if (protoProps) defineProperties(Constructor.prototype, protoProps)
                        if (staticProps) defineProperties(Constructor, staticProps)
                        return Constructor
                    }
                })()

                var _class, _temp

                var _react = __webpack_require__(
                    /*! react */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/react/index.js'
                )

                var _react2 = _interopRequireDefault(_react)

                var _propTypes = __webpack_require__(
                    /*! prop-types */ './node_modules/@neos-project/neos-ui-extensibility/src/shims/vendor/prop-types/index.js'
                )

                var _propTypes2 = _interopRequireDefault(_propTypes)

                var _style = __webpack_require__(/*! ./style.css */ './src/Widget/style.css')

                var _style2 = _interopRequireDefault(_style)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                        throw new TypeError('Cannot call a class as a function')
                    }
                }

                function _possibleConstructorReturn(self, call) {
                    if (!self) {
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    }
                    return call && (typeof call === 'object' || typeof call === 'function') ? call : self
                }

                function _inherits(subClass, superClass) {
                    if (typeof superClass !== 'function' && superClass !== null) {
                        throw new TypeError(
                            'Super expression must either be null or a function, not ' + typeof superClass
                        )
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, {
                        constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
                    })
                    if (superClass)
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(subClass, superClass)
                            : (subClass.__proto__ = superClass)
                }

                var Widget =
                    ((_temp = _class =
                        (function (_PureComponent) {
                            _inherits(Widget, _PureComponent)

                            function Widget() {
                                _classCallCheck(this, Widget)

                                return _possibleConstructorReturn(
                                    this,
                                    (Widget.__proto__ || Object.getPrototypeOf(Widget)).apply(this, arguments)
                                )
                            }

                            _createClass(Widget, [
                                {
                                    key: 'render',
                                    value: function render() {
                                        var _props = this.props,
                                            title = _props.title,
                                            subtitle = _props.subtitle,
                                            children = _props.children

                                        return _react2.default.createElement(
                                            'div',
                                            { className: _style2.default.widget },
                                            _react2.default.createElement(
                                                'div',
                                                { className: _style2.default.header },
                                                _react2.default.createElement(
                                                    'div',
                                                    { className: _style2.default.label },
                                                    title
                                                ),
                                                ' ',
                                                subtitle &&
                                                    _react2.default.createElement(
                                                        'div',
                                                        { className: _style2.default.subtitle },
                                                        subtitle
                                                    )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: _style2.default.body },
                                                children
                                            )
                                        )
                                    },
                                },
                            ])

                            return Widget
                        })(_react.PureComponent)),
                    (_class.propTypes = {
                        title: _propTypes2.default.string.isRequired,
                        subtitle: _propTypes2.default.string,
                        children: _propTypes2.default.object,
                    }),
                    _temp)
                exports.default = Widget

                /***/
            },

        /***/ './src/Widget/style.css':
            /*!******************************!*\
  !*** ./src/Widget/style.css ***!
  \******************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // extracted by mini-css-extract-plugin
                module.exports = {
                    widget: '_2Hy30PN-Mki80v17lTWc7h',
                    header: '_14NUpWkoadYOmbkWkiIOOH',
                    body: '_2Ti5z2RN6P7LZ2__6QewRm',
                    label: '_1c1xzWNsYMU_GFmI5LOnvx',
                    subtitle: '_1UmAS4GtMQRFjRqtXeH2d8',
                }

                /***/
            },

        /***/ './src/index.js':
            /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                __webpack_require__(/*! ./manifest */ './src/manifest.js')

                /***/
            },

        /***/ './src/manifest.js':
            /*!*************************!*\
  !*** ./src/manifest.js ***!
  \*************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                'use strict'

                var _neosUiExtensibility = __webpack_require__(
                    /*! @neos-project/neos-ui-extensibility */ './node_modules/@neos-project/neos-ui-extensibility/dist/index.js'
                )

                var _neosUiExtensibility2 = _interopRequireDefault(_neosUiExtensibility)

                var _RangeView = __webpack_require__(/*! ./RangeView */ './src/RangeView.js')

                var _RangeView2 = _interopRequireDefault(_RangeView)

                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj }
                }

                ;(0, _neosUiExtensibility2.default)('TechDivision.WebVitals:RangeView', {}, function (globalRegistry) {
                    var viewRegistry = globalRegistry.get('inspector').get('views')
                    viewRegistry.set('TechDivision.WebVitals/RangeView', {
                        component: _RangeView2.default,
                    })
                })

                /***/
            },

        /***/ './src/style.css':
            /*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                // extracted by mini-css-extract-plugin
                module.exports = {
                    'neos-module-wrap': 'w5bv8xAObcnW_Crgn1rLF',
                    'widget-container': 'gjtIo_OyCSMP8l-L--glB',
                    'widget-header': '_1CK6tuiVqFlF4Hei38wX-Y',
                    'widget-footer': '_1XdMfr5aD_mpSqBISyYNFc',
                    infopanel: '_3AaPomTGZ_HMkIAH00ezZs',
                    'widget-desc': '_20zcnSu8NolUjvTLZYmfz8',
                    'bar-wrapper': '_1jl8nI7thUj8aHv10gGNnq',
                    bar: '_3rPgQ3mXXXo8Av3Iy8xiSp',
                    bar__legend: '_3O5QKDNvGx9KElRK78Wmwr',
                    bar__section: '_2bifgprhVi4cU4TGI-gYoz',
                    bar__left: '_3aJCBYymH4iS0LdoINEnG2',
                    bar__right: '_3CCdT-zD854IJC62K7JS-w',
                    bar__low: 'UZG4gtncqZP2J-H-r4U-G',
                    bar__medium: '_1xunHeOuVL7lG6kZd1fy8h',
                    bar__high: 'J-ZLkLqCnKjJgHV4D6Sq9',
                    infopanel__date: '_1CxsvyzK23rdZUTDkkdV7O',
                    infopanel__total: 'LWY1UQ2wMmwic6ReNNcMo',
                }

                /***/
            },

        /******/
    }
)
//# sourceMappingURL=Plugin.js.map
