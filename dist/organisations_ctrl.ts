/// <reference path="../typings/common.d.ts" />
/// <reference path="../typings/index.d.ts" />

import { PanelCtrl } from "app/plugins/sdk";
import { impressions } from "app/features/dashboard/impression_store";
import config from "app/core/config";
import "./style.css!";

export interface IOrganisationsScope extends ng.IScope {
}

class OrganisationsCtrl extends PanelCtrl {
    static templateUrl = "module.html";
    backendSrv: any;
    organisationList: {
        id: string;
        name: string;
    }[];
    baseURL: string;

    /**
     * DashboardList class constructor
     * @param {IOrganisationsScope} $scope Angular scope
     * @param {ng.auto.IInjectorService} $injector Angluar injector service
     * @param {ng.ILocationService} $location Angular location service
     * @param {any} backendSrv Grafana backend callback
     */
    constructor($scope: IOrganisationsScope, $injector: ng.auto.IInjectorService, $location: ng.ILocationService, backendSrv: any) {
        super($scope, $injector);
        // Init variables
        this.backendSrv = backendSrv;
        this.organisationList = [];
        // Store the URL part before dashboard definition as baseURL
        let baseURL = '';
        if (window.location.href.indexOf("/d/") > -1) {
            baseURL = window.location.href.split("/d/")[0];
        } else {
            baseURL = window.location.href;
            if (baseURL.indexOf("?") > -1) {
                baseURL = baseURL.split("?")[0];
            }
        }
        this.baseURL = baseURL;
        // Load organizations for current user
        this.loadOrganisations();
    }

    /**
     * Load dashboard items
     */
    loadOrganisations() {
        // Fetch list of organisations of current user from Grafana
        this.backendSrv.get("api/user/orgs").then((result: any) => {
            this.organisationList = result.map((item: any) => {
                return {
                    id: item.orgId,
                    name: item.name
                }
            });
        });
    }

}

export { OrganisationsCtrl, OrganisationsCtrl as PanelCtrl }
