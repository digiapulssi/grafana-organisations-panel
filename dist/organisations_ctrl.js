"use strict";

System.register(["app/plugins/sdk", "./style.css!"], function (_export, _context) {
    "use strict";

    var PanelCtrl, _createClass, OrganisationsCtrl;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_appPluginsSdk) {
            PanelCtrl = _appPluginsSdk.PanelCtrl;
        }, function (_styleCss) {}],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("PanelCtrl", _export("OrganisationsCtrl", OrganisationsCtrl = function (_PanelCtrl) {
                _inherits(OrganisationsCtrl, _PanelCtrl);

                /**
                 * DashboardList class constructor
                 * @param {IOrganisationsScope} $scope Angular scope
                 * @param {ng.auto.IInjectorService} $injector Angluar injector service
                 * @param {ng.ILocationService} $location Angular location service
                 * @param {any} backendSrv Grafana backend callback
                 */
                function OrganisationsCtrl($scope, $injector, $location, backendSrv) {
                    _classCallCheck(this, OrganisationsCtrl);

                    var _this = _possibleConstructorReturn(this, (OrganisationsCtrl.__proto__ || Object.getPrototypeOf(OrganisationsCtrl)).call(this, $scope, $injector));

                    // Init variables
                    _this.backendSrv = backendSrv;
                    _this.organisationList = [];
                    // Store the URL part before dashboard definition as baseURL
                    var baseURL = '';
                    if (window.location.href.indexOf("/d/") > -1) {
                        baseURL = window.location.href.split("/d/")[0];
                    } else {
                        baseURL = window.location.href;
                        if (baseURL.indexOf("?") > -1) {
                            baseURL = baseURL.split("?")[0];
                        }
                    }
                    _this.baseURL = baseURL;
                    // Load organizations for current user
                    _this.loadOrganisations();
                    return _this;
                }
                /**
                 * Load dashboard items
                 */


                _createClass(OrganisationsCtrl, [{
                    key: "loadOrganisations",
                    value: function loadOrganisations() {
                        var _this2 = this;

                        // Fetch list of organisations of current user from Grafana
                        this.backendSrv.get("api/user/orgs").then(function (result) {
                            _this2.organisationList = result.map(function (item) {
                                return {
                                    id: item.orgId,
                                    name: item.name
                                };
                            });
                        });
                    }
                }]);

                return OrganisationsCtrl;
            }(PanelCtrl)));

            OrganisationsCtrl.templateUrl = "module.html";

            _export("OrganisationsCtrl", OrganisationsCtrl);

            _export("PanelCtrl", OrganisationsCtrl);
        }
    };
});
//# sourceMappingURL=organisations_ctrl.js.map
